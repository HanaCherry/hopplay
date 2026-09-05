const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

// Exercise the real handlers with an in-memory disk and Spotify transport.
function harness() {
  const routes = new Map(), disk = new Map(), requests = [];
  const app = { use() {}, listen() {}, disable() {} };
  for (const method of ['get', 'post', 'put', 'delete']) app[method] = (url, handler) => routes.set(`${method} ${url}`, handler);
  const express = Object.assign(() => app, { json: () => () => {}, urlencoded: () => () => {}, static: () => () => {} });
  let clock = 1000000, spotifyStatus = 204;
  class Clock extends Date { static now() { return clock; } }
  const context = vm.createContext({
    require: name => name === 'express' ? express : name === 'fs' ? {
      existsSync: p => disk.has(p), mkdirSync() {}, readFileSync: p => disk.get(p), writeFileSync: (p, data) => disk.set(p, data),
    } : name === './package.json' ? { version: 'test' } : require(name),
    __dirname: path.resolve(__dirname, '..'), Buffer, URL, URLSearchParams, AbortSignal,
    Date: Clock, console, setTimeout, process: { env: {}, pid: 1, on() {} },
    fetch: async (url, options) => { requests.push({ url, ...options }); return { ok: spotifyStatus === 204, status: spotifyStatus }; },
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../server.js'), 'utf8'), context);
  return {
    run: code => vm.runInContext(code, context), requests,
    advance: ms => { clock += ms; }, status: n => { spotifyStatus = n; },
    async command(action, value, origin) {
      const res = { code: 200, status(n) { this.code = n; return this; }, json(data) { this.data = data; return this; } };
      await routes.get('post /api/player/:action')({ params: { action }, body: { value }, headers: { host: '127.0.0.1:3000', origin }, socket: { remoteAddress: '127.0.0.1' } }, res);
      return res;
    },
  };
}

test('demo preserves pause position, seeks to zero, resumes and changes tracks', async () => {
  const h = harness();
  h.run('demoNowPlaying()'); h.advance(15000);
  await h.command('pause'); h.advance(5000);
  assert.equal(h.run('demoNowPlaying().progress_ms'), 15000);
  await h.command('seek', 0);
  assert.equal(h.run('demoNowPlaying().progress_ms'), 0);
  await h.command('play'); h.advance(1000);
  assert.equal(h.run('demoNowPlaying().progress_ms'), 1000);
  await h.command('next'); assert.equal(h.run('demoNowPlaying().item.id'), 'demo-city');
  await h.command('previous'); assert.equal(h.run('demoNowPlaying().item.id'), 'demo-sunflower');
});

test('demo repeat, shuffle and end of queue follow shared state', async () => {
  const h = harness(); h.run('demoNowPlaying()');
  await h.command('repeat', 'track'); h.advance(159000);
  assert.equal(h.run('demoNowPlaying().progress_ms'), 1000);
  await h.command('repeat', 'off'); await h.command('previous');
  h.run('demoNowPlaying()'); h.advance(300000);
  assert.equal(h.run('demoNowPlaying().is_playing'), false);
  await h.command('shuffle', true);
  assert.equal(h.run('publicNowPlaying(demoNowPlaying()).shuffle_state'), true);
});

test('Spotify commands use correct methods and query parameters', async () => {
  const h = harness(); h.run('saveConfig({accessToken:"test",expiresAt:Date.now()+100000})');
  for (const [action, value, method, endpoint] of [['play',undefined,'PUT','play'],['pause',undefined,'PUT','pause'],['next',undefined,'POST','next'],['previous',undefined,'POST','previous'],['seek',42000,'PUT','seek?position_ms=42000'],['shuffle',true,'PUT','shuffle?state=true'],['repeat','track','PUT','repeat?state=track']]) {
    assert.equal((await h.command(action,value)).code,200);
    assert.equal(h.requests.at(-1).method,method);
    assert.equal(h.requests.at(-1).url,`https://api.spotify.com/v1/me/player/${endpoint}`);
  }
  for (const code of [401,403,404,429,500]) { h.status(code); const res = await h.command('play'); assert.equal(res.code,code); assert.ok(res.data.error); }
});

test('invalid commands and cross-origin requests never reach Spotify', async () => {
  const h = harness();
  for (const [action,value] of [['seek',-1],['seek','10'],['shuffle','true'],['repeat','invalid'],['delete',null]]) assert.equal((await h.command(action,value)).code,400);
  assert.equal((await h.command('play',undefined,'https://example.com')).code,403);
  assert.equal(h.requests.length,0);
});
