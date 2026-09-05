const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const { spawn } = require("child_process");

const APP_VERSION = require("./package.json").version;
const GITHUB_REPO = "HanaCherry/hopplay";

const PORT = Number(process.env.PORT) || 3000;
const HOST = "127.0.0.1";
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const PUBLIC_DIR = path.join(ROOT, "public");
const CONFIG_FILE = path.join(DATA_DIR, "config.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

const SPOTIFY_AUTH = "https://accounts.spotify.com/authorize";
const SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW = "https://api.spotify.com/v1/me/player/currently-playing";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "user-modify-playback-state"].join(" ");

const DEMO_TRACKS = [
  {
    id: "demo-sunflower",
    name: "Sunflower (Spider-Man: Into the Spider-Verse)",
    artists: [{ name: "Post Malone" }, { name: "Swae Lee" }],
    album: {
      name: "Spider-Man: Into the Spider-Verse",
      images: [{ url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=640&q=80" }],
    },
    duration_ms: 158000,
    external_urls: { spotify: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P" },
  },
  {
    id: "demo-city",
    name: "The City (with Quinn XCII)",
    artists: [{ name: "Louis The Child" }, { name: "Quinn XCII" }],
    album: {
      name: "The City",
      images: [{ url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80" }],
    },
    duration_ms: 186000,
    external_urls: { spotify: "https://open.spotify.com" },
  },
  {
    id: "demo-steps",
    name: "Steps",
    artists: [{ name: "dryhope" }],
    album: {
      name: "Study Session",
      images: [{ url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=640&q=80" }],
    },
    duration_ms: 150000,
    external_urls: { spotify: "https://open.spotify.com" },
  },
  {
    id: "demo-medusa",
    name: "Medusa",
    artists: [{ name: "GRiZ" }],
    album: {
      name: "Medusa",
      images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=640&q=80" }],
    },
    duration_ms: 190000,
    external_urls: { spotify: "https://open.spotify.com" },
  },
  {
    id: "demo-alone",
    name: "Better Off Alone",
    artists: [{ name: "Kai Wachi" }],
    album: {
      name: "Better Off Alone",
      images: [{ url: "https://images.unsplash.com/photo-1459749411177-04aa50016ec1?w=640&q=80" }],
    },
    duration_ms: 291000,
    external_urls: { spotify: "https://open.spotify.com" },
  },
];

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  ensureDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function defaultProfile(id, name) {
  return {
    id,
    name,
    player: "compact",
    cover: "square",
    coverGlow: true,
    playerGlow: true,
    magicColors: true,
    accentColor: "#1db954",
    theme: "dark",
    hideOnPause: false,
    hideOnPauseDelay: 5,
    songChangeOnly: false,
    songChangeDuration: 8,
    coverBlur: true,
    hideVisualizer: false,
    placement: "bl",
    appearEffect: "slide",
    appearDuration: 0.7,
    hideDuration: 0.45,
    appearDelay: 0.05,
  };
}

function defaultSettings() {
  return {
    activeProfile: "default",
    demoTrack: 0,
    demoPlaying: true,
    profiles: [defaultProfile("default", "Principal")],
  };
}

function defaultConfig() {
  return {
    clientId: "",
    clientSecret: "",
    accessToken: "",
    refreshToken: "",
    expiresAt: 0,
    widgetToken: crypto.randomBytes(24).toString("hex"),
  };
}

function getConfig() {
  const cfg = { ...defaultConfig(), ...readJson(CONFIG_FILE, {}) };
  if (!cfg.widgetToken) cfg.widgetToken = crypto.randomBytes(24).toString("hex");
  return cfg;
}

function saveConfig(cfg) {
  writeJson(CONFIG_FILE, cfg);
}

function getSettings() {
  const s = { ...defaultSettings(), ...readJson(SETTINGS_FILE, {}) };
  if (!Array.isArray(s.profiles) || !s.profiles.length) {
    s.profiles = defaultSettings().profiles;
  }
  s.profiles = s.profiles.map((p) => ({ ...defaultProfile(p.id, p.name), ...p }));
  if (!s.profiles.find((p) => p.id === s.activeProfile)) {
    s.activeProfile = s.profiles[0].id;
  }
  return s;
}

function saveSettings(s) {
  writeJson(SETTINGS_FILE, s);
}

function redirectUri() {
  return `http://${HOST}:${PORT}/callback`;
}

function pkcePair() {
  const verifier = crypto.randomBytes(32).toString("base64url");
  const challenge = crypto.createHash("sha256").update(verifier).digest("base64url");
  return { verifier, challenge };
}

async function validateCredentials(clientId, clientSecret) {
  const res = await fetch(SPOTIFY_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth(clientId, clientSecret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    return {
      ok: false,
      error: json.error_description || json.error || `HTTP ${res.status}`,
    };
  }
  return { ok: true };
}

function basicAuth(id, secret) {
  return Buffer.from(`${id}:${secret}`).toString("base64");
}

async function refreshAccessToken(cfg) {
  if (!cfg.refreshToken || !cfg.clientId || !cfg.clientSecret) return cfg;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: cfg.refreshToken,
  });
  const res = await fetch(SPOTIFY_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth(cfg.clientId, cfg.clientSecret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`refresh_failed:${res.status}:${text}`);
  }
  const json = await res.json();
  cfg.accessToken = json.access_token;
  if (json.refresh_token) cfg.refreshToken = json.refresh_token;
  cfg.expiresAt = Date.now() + (json.expires_in - 30) * 1000;
  saveConfig(cfg);
  return cfg;
}

async function getValidToken() {
  let cfg = getConfig();
  if (!cfg.accessToken) return null;
  if (Date.now() >= (cfg.expiresAt || 0)) {
    try {
      cfg = await refreshAccessToken(cfg);
    } catch {
      return null;
    }
  }
  return cfg.accessToken;
}

let demoClock = { track: -1, playing: false, position: 0, at: Date.now() };
function demoNowPlaying() {
  const s = getSettings();
  if (demoClock.track !== s.demoTrack) {
    demoClock = { track: s.demoTrack, playing: s.demoPlaying, position: 0, at: Date.now() };
  }
  if (demoClock.playing !== s.demoPlaying) {
    demoClock.position += demoClock.playing ? Date.now() - demoClock.at : 0;
    demoClock.at = Date.now();
    demoClock.playing = s.demoPlaying;
  }
  const track = DEMO_TRACKS[s.demoTrack % DEMO_TRACKS.length];
  const duration = track.duration_ms;
  let progress = demoClock.position + (s.demoPlaying ? Date.now() - demoClock.at : 0);
  if (progress >= duration) {
    if (s.demoRepeat === "track") {
      demoClock.position = progress % duration;
      demoClock.at = Date.now();
      progress = demoClock.position;
    } else if (s.demoTrack < DEMO_TRACKS.length - 1 || s.demoRepeat === "context" || s.demoShuffle) {
      s.demoTrack = s.demoShuffle ? (s.demoTrack + 1 + Math.floor(Math.random() * (DEMO_TRACKS.length - 1))) % DEMO_TRACKS.length : (s.demoTrack + 1) % DEMO_TRACKS.length;
      saveSettings(s);
      return demoNowPlaying();
    } else {
      s.demoPlaying = false;
      saveSettings(s);
      demoClock = { track: s.demoTrack, playing: false, position: duration, at: Date.now() };
      progress = duration;
    }
  }
  return {
    is_playing: !!s.demoPlaying,
    shuffle_state: !!s.demoShuffle,
    repeat_state: s.demoRepeat || "off",
    progress_ms: progress,
    item: track,
    currently_playing_type: "track",
    demo: true,
  };
}

function publicNowPlaying(raw) {
  if (!raw || !raw.item) {
    return { is_playing: false, item: null, progress_ms: 0, demo: !!raw?.demo };
  }
  const item = raw.item;
  const images = item.album?.images || [];
  const image = images[0]?.url || images[1]?.url || "";
  return {
    is_playing: !!raw.is_playing,
    shuffle_state: !!raw.shuffle_state,
    repeat_state: raw.repeat_state || "off",
    progress_ms: raw.progress_ms || 0,
    duration_ms: item.duration_ms || 0,
    title: item.name || "",
    artist: (item.artists || []).map((a) => a.name).join(", "),
    album: item.album?.name || "",
    image,
    trackId: item.id || "",
    url: item.external_urls?.spotify || "",
    demo: !!raw.demo,
  };
}

const canvasCache = new Map();

async function findCanvas(trackId) {
  if (!trackId || trackId.startsWith("demo-")) return null;
  if (canvasCache.has(trackId)) return canvasCache.get(trackId);
  try {
    const res = await fetch(`https://open.spotify.com/embed/track/${trackId}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) {
      canvasCache.set(trackId, null);
      return null;
    }
    const html = await res.text();
    const match =
      html.match(/https:\/\/[^"'\\\s]+canvaz[^"'\\\s]+\.mp4[^"'\\\s]*/i) ||
      html.match(/https:\/\/canvaz\.scdn\.co\/[^"'\\\s]+\.mp4/i);
    const url = match ? match[0].replace(/\\u002F/g, "/").replace(/\\/g, "") : null;
    canvasCache.set(trackId, url);
    setTimeout(() => canvasCache.delete(trackId), 30 * 60 * 1000);
    return url;
  } catch {
    canvasCache.set(trackId, null);
    return null;
  }
}

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use(express.static(PUBLIC_DIR));

app.get("/api/status", (_req, res) => {
  const cfg = getConfig();
  res.json({
    connected: Boolean(cfg.accessToken),
    hasCredentials: Boolean(cfg.clientId && cfg.clientSecret),
    clientId: cfg.clientId || "",
    redirectUri: redirectUri(),
    widgetToken: cfg.widgetToken,
    widgetUrl: `http://${HOST}:${PORT}/widget.html?token=${cfg.widgetToken}`,
    version: APP_VERSION,
  });
});

app.post("/api/spotify/credentials", async (req, res) => {
  const clientId = String(req.body.clientId || "").trim();
  const clientSecret = String(req.body.clientSecret || "").trim();
  if (!clientId || !clientSecret) {
    return res.status(400).json({ error: "Client ID et Client Secret requis." });
  }
  try {
    const check = await validateCredentials(clientId, clientSecret);
    if (!check.ok) {
      return res.status(400).json({
        error: `Client ID / Secret refusés par Spotify : ${check.error}. Vérifie-les dans Settings → View client secret.`,
      });
    }
  } catch (err) {
    return res.status(400).json({ error: `Impossible de vérifier les identifiants : ${err.message}` });
  }
  const cfg = getConfig();
  cfg.clientId = clientId;
  cfg.clientSecret = clientSecret;
  saveConfig(cfg);
  res.json({ ok: true, redirectUri: redirectUri(), loginUrl: "/api/spotify/login" });
});

app.get("/api/spotify/login", (req, res) => {
  const cfg = getConfig();
  if (!cfg.clientId || !cfg.clientSecret) {
    return res.redirect("/setup.html?spotify=error&message=" + encodeURIComponent("Enregistre d'abord le Client ID et le Client Secret."));
  }
  const state = crypto.randomBytes(12).toString("hex");
  const pkce = pkcePair();
  cfg.oauthState = state;
  cfg.pkceVerifier = pkce.verifier;
  saveConfig(cfg);
  const url = new URL(SPOTIFY_AUTH);
  url.searchParams.set("client_id", cfg.clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", redirectUri());
  url.searchParams.set("scope", SCOPES);
  url.searchParams.set("state", state);
  url.searchParams.set("code_challenge_method", "S256");
  url.searchParams.set("code_challenge", pkce.challenge);
  url.searchParams.set("show_dialog", "true");
  console.log("Spotify login →", redirectUri());
  res.redirect(url.toString());
});

app.get("/callback", async (req, res) => {
  const { code, error, error_description, state } = req.query;
  if (error) {
    console.log("Spotify OAuth error:", error, error_description);
    return res.redirect(`/setup.html?spotify=error&message=${encodeURIComponent(error_description || error)}`);
  }
  if (!code) return res.redirect("/setup.html?spotify=error&message=missing_code");
  const cfg = getConfig();
  if (cfg.oauthState && state && String(state) !== cfg.oauthState) {
    return res.redirect("/setup.html?spotify=error&message=" + encodeURIComponent("State OAuth invalide. Réessaie Connecter Spotify."));
  }
  try {
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: String(code),
      redirect_uri: redirectUri(),
      client_id: cfg.clientId,
    });
    if (cfg.pkceVerifier) body.set("code_verifier", cfg.pkceVerifier);
    const tokenRes = await fetch(SPOTIFY_TOKEN, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth(cfg.clientId, cfg.clientSecret)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    const json = await tokenRes.json();
    if (!tokenRes.ok) {
      const msg = json.error_description || json.error || "token_error";
      console.log("Spotify token error:", msg);
      return res.redirect(`/setup.html?spotify=error&message=${encodeURIComponent(msg)}`);
    }
    cfg.accessToken = json.access_token;
    cfg.refreshToken = json.refresh_token || cfg.refreshToken;
    cfg.expiresAt = Date.now() + (json.expires_in - 30) * 1000;
    cfg.pkceVerifier = "";
    cfg.oauthState = "";
    saveConfig(cfg);
    console.log("Spotify connecté.");
    res.redirect("/?spotify=connected");
  } catch (err) {
    console.log("Spotify callback exception:", err.message);
    res.redirect(`/setup.html?spotify=error&message=${encodeURIComponent(err.message)}`);
  }
});

app.post("/api/spotify/disconnect", (_req, res) => {
  const cfg = getConfig();
  cfg.accessToken = "";
  cfg.refreshToken = "";
  cfg.expiresAt = 0;
  saveConfig(cfg);
  res.json({ ok: true });
});

app.post("/api/token/regenerate", (_req, res) => {
  const cfg = getConfig();
  cfg.widgetToken = crypto.randomBytes(24).toString("hex");
  saveConfig(cfg);
  res.json({
    widgetToken: cfg.widgetToken,
    widgetUrl: `http://${HOST}:${PORT}/widget.html?token=${cfg.widgetToken}`,
  });
});

app.post("/api/player/:action", async (req, res) => {
  // Commands originate from the local dashboard/widget, never a cross-site form.
  if (!isLocal(req) || (req.headers.origin && req.headers.origin !== `http://${req.headers.host}`)) {
    return res.status(403).json({ error: "Origine non autorisée." });
  }
  const action = req.params.action;
  const value = req.body?.value;
  if (!["play", "pause", "previous", "next", "shuffle", "repeat", "seek"].includes(action) ||
      (action === "shuffle" && typeof value !== "boolean") ||
      (action === "repeat" && !["off", "context", "track"].includes(value)) ||
      (action === "seek" && (!Number.isSafeInteger(value) || value < 0))) {
    return res.status(400).json({ error: "Commande invalide." });
  }
  try {
    const token = await getValidToken();
    if (!token) {
      if (getConfig().accessToken) return res.status(401).json({ error: "Session Spotify expirée. Reconnecte Spotify." });
      const current = demoNowPlaying();
      const s = getSettings();
      demoClock.position = current.progress_ms;
      demoClock.at = Date.now();
      if (action === "play" || action === "pause") {
        s.demoPlaying = action === "play";
        demoClock.playing = s.demoPlaying;
        if (s.demoPlaying && demoClock.position >= current.item.duration_ms) demoClock.position = 0;
      }
      if (action === "next" || action === "previous") {
        const step = action === "previous" ? -1 : s.demoShuffle ? 1 + Math.floor(Math.random() * (DEMO_TRACKS.length - 1)) : 1;
        s.demoTrack = (s.demoTrack + step + DEMO_TRACKS.length) % DEMO_TRACKS.length;
      }
      if (action === "seek") demoClock.position = Math.min(value, current.item.duration_ms);
      if (action === "shuffle") s.demoShuffle = value;
      if (action === "repeat") s.demoRepeat = value;
      saveSettings(s);
      return res.json({ ok: true, demo: true });
    }
    const endpoint = action === "seek" ? `seek?position_ms=${value}` :
      action === "shuffle" || action === "repeat" ? `${action}?state=${value}` : action;
    const response = await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
      method: action === "next" || action === "previous" ? "POST" : "PUT",
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      const messages = {
        401: "Reconnecte Spotify pour autoriser les commandes de lecture.",
        403: "Reconnecte Spotify avec les droits de lecture et vérifie ton abonnement Premium.",
        404: "Ouvre Spotify et lance un titre sur un appareil.",
        429: "Spotify reçoit trop de commandes. Réessaie dans un instant.",
      };
      return res.status(response.status).json({ error: messages[response.status] || "Commande refusée par Spotify." });
    }
    res.json({ ok: true });
  } catch {
    res.status(502).json({ error: "Spotify est injoignable. Réessaie dans un instant." });
  }
});

app.get("/api/now-playing", async (req, res) => {
  const wantDemo = String(req.query.demo || "") === "1";
  const token = await getValidToken();
  if (!token) {
    return res.json(publicNowPlaying(demoNowPlaying()));
  }
  try {
    const headers = { Authorization: `Bearer ${token}` };
    let r = await fetch("https://api.spotify.com/v1/me/player", { headers });
    if (r.status === 204) {
      r = await fetch(SPOTIFY_NOW, { headers });
    }
    if (r.status === 204) {
      return res.json({
        is_playing: false,
        item: null,
        progress_ms: 0,
        demo: false,
        message: "Rien en lecture. Lance une musique dans l'app Spotify (PC, tel ou web).",
      });
    }
    if (r.status === 401) {
      return res.json({
        is_playing: false,
        item: null,
        progress_ms: 0,
        demo: false,
        needsAuth: true,
        message: "Session Spotify expirée. Reconnecte-toi.",
      });
    }
    if (r.status === 403) {
      return res.json({
        is_playing: false,
        item: null,
        progress_ms: 0,
        demo: false,
        message: "Spotify a refusé l'accès (403). Dans le Dashboard Spotify, active Web API et ajoute ton compte dans Users.",
      });
    }
    if (!r.ok) {
      const text = await r.text();
      console.log("Spotify now-playing error", r.status, text.slice(0, 200));
      return res.json({
        is_playing: false,
        item: null,
        progress_ms: 0,
        demo: false,
        message: `Erreur Spotify ${r.status}`,
      });
    }
    const json = await r.json();
    const payload = publicNowPlaying(json);
    if (!payload.title && json.item) {
      return res.json(publicNowPlaying({ ...json, item: json.item }));
    }
    res.json(payload);
  } catch (err) {
    res.json({
      is_playing: false,
      item: null,
      progress_ms: 0,
      demo: false,
      message: err.message,
    });
  }
});

app.get("/api/canvas/:id", async (req, res) => {
  const url = await findCanvas(req.params.id);
  res.json({ url });
});

app.get("/api/image", async (req, res) => {
  const url = String(req.query.url || "");
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return res.status(400).end();
  }
  const allowed = [
    "i.scdn.co",
    "mosaic.scdn.co",
    "wrapped-images.spotifycdn.com",
    "image-cdn-ak.spotifycdn.com",
    "image-cdn-fa.spotifycdn.com",
    "images.unsplash.com",
  ];
  if (!allowed.includes(parsed.hostname)) return res.status(400).end();
  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).end();
    res.setHeader("Content-Type", r.headers.get("content-type") || "image/jpeg");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(Buffer.from(await r.arrayBuffer()));
  } catch {
    res.status(502).end();
  }
});

app.get("/api/settings", (req, res) => {
  const s = getSettings();
  const profileId = String(req.query.profile || s.activeProfile);
  const profile = s.profiles.find((p) => p.id === profileId) || s.profiles[0];
  res.json({ ...s, profile });
});

app.put("/api/settings", (req, res) => {
  const s = getSettings();
  const incoming = req.body || {};
  if (incoming.profile && incoming.profile.id) {
    const idx = s.profiles.findIndex((p) => p.id === incoming.profile.id);
    if (idx >= 0) {
      s.profiles[idx] = { ...s.profiles[idx], ...incoming.profile };
    }
  }
  if (incoming.activeProfile) s.activeProfile = incoming.activeProfile;
  if (typeof incoming.demoTrack === "number") s.demoTrack = incoming.demoTrack;
  if (typeof incoming.demoPlaying === "boolean") s.demoPlaying = incoming.demoPlaying;
  saveSettings(s);
  res.json(s);
});

app.post("/api/profiles", (req, res) => {
  const s = getSettings();
  if (s.profiles.length >= 5) {
    return res.status(400).json({ error: "Maximum 5 profiles." });
  }
  const id = crypto.randomBytes(6).toString("hex");
  const name = String(req.body.name || `Profil ${s.profiles.length + 1}`);
  const base = s.profiles.find((p) => p.id === s.activeProfile) || s.profiles[0];
  const profile = { ...base, id, name };
  s.profiles.push(profile);
  s.activeProfile = id;
  saveSettings(s);
  res.json(s);
});

app.delete("/api/profiles/:id", (req, res) => {
  const s = getSettings();
  if (s.profiles.length <= 1) {
    return res.status(400).json({ error: "Il faut au moins un profil." });
  }
  s.profiles = s.profiles.filter((p) => p.id !== req.params.id);
  if (s.activeProfile === req.params.id) s.activeProfile = s.profiles[0].id;
  saveSettings(s);
  res.json(s);
});

app.post("/api/demo/next", (_req, res) => {
  const s = getSettings();
  s.demoTrack = (s.demoTrack + 1) % DEMO_TRACKS.length;
  saveSettings(s);
  res.json(s);
});

app.get("/widget", (_req, res) => {
  res.redirect("/widget.html");
});

function isLocal(req) {
  const ip = req.socket.remoteAddress || "";
  return ip === "127.0.0.1" || ip === "::1" || ip === "::ffff:127.0.0.1";
}

function parseVer(v) {
  return String(v || "").replace(/^v/i, "").split(".").map((n) => parseInt(n, 10) || 0);
}
function isNewer(remote, local) {
  const a = parseVer(remote);
  const b = parseVer(local);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] || 0) > (b[i] || 0)) return true;
    if ((a[i] || 0) < (b[i] || 0)) return false;
  }
  return false;
}
async function fetchLatestRelease() {
  const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
    headers: { "User-Agent": "HopPlay", Accept: "application/vnd.github+json" },
  });
  if (!r.ok) throw new Error(`GitHub ${r.status}`);
  const json = await r.json();
  const tag = json.tag_name || "";
  return {
    tag,
    version: tag.replace(/^v/i, ""),
    notes: json.body || "",
    url: json.html_url,
    zip: `https://github.com/${GITHUB_REPO}/archive/refs/tags/${encodeURIComponent(tag)}.zip`,
  };
}
function copyUpdate(from, to) {
  const skip = new Set(["data", "node_modules", ".git"]);
  for (const name of fs.readdirSync(from)) {
    if (skip.has(name)) continue;
    const src = path.join(from, name);
    const dest = path.join(to, name);
    if (fs.statSync(src).isDirectory()) fs.cpSync(src, dest, { recursive: true, force: true });
    else fs.copyFileSync(src, dest);
  }
}
function restartApp() {
  const child = spawn(process.execPath, [path.join(ROOT, "server.js")], {
    detached: true,
    stdio: "ignore",
    cwd: ROOT,
    windowsHide: true,
  });
  child.unref();
  process.exit(0);
}

let updating = false;

app.get("/api/update/check", async (_req, res) => {
  try {
    const latest = await fetchLatestRelease();
    res.json({
      current: APP_VERSION,
      latest: latest.version,
      tag: latest.tag,
      notes: latest.notes,
      url: latest.url,
      updateAvailable: isNewer(latest.version, APP_VERSION),
    });
  } catch (err) {
    res.json({ current: APP_VERSION, updateAvailable: false, error: err.message });
  }
});

app.post("/api/update/apply", async (req, res) => {
  if (!isLocal(req)) return res.status(403).json({ error: "Local only." });
  if (updating) return res.status(409).json({ error: "Update already running." });
  updating = true;
  try {
    const latest = await fetchLatestRelease();
    if (!isNewer(latest.version, APP_VERSION)) {
      updating = false;
      return res.json({ ok: true, updated: false, current: APP_VERSION });
    }
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "hopplay-"));
    const zipPath = path.join(tmp, "update.zip");
    const zipRes = await fetch(latest.zip, { headers: { "User-Agent": "HopPlay" }, redirect: "follow" });
    if (!zipRes.ok) throw new Error(`Download ${zipRes.status}`);
    fs.writeFileSync(zipPath, Buffer.from(await zipRes.arrayBuffer()));
    const extractDir = path.join(tmp, "src");
    fs.mkdirSync(extractDir);
    await new Promise((resolve, reject) => {
      const ps = spawn("powershell.exe", [
        "-NoProfile",
        "-Command",
        `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}' -Force`,
      ], { windowsHide: true });
      ps.on("exit", (c) => (c === 0 ? resolve() : reject(new Error("unzip failed"))));
      ps.on("error", reject);
    });
    const unpacked = fs.readdirSync(extractDir)
      .map((n) => path.join(extractDir, n))
      .find((p) => fs.statSync(p).isDirectory());
    if (!unpacked) throw new Error("Empty archive");
    copyUpdate(unpacked, ROOT);
    res.json({ ok: true, updated: true, version: latest.version, restarting: true });
    setTimeout(() => restartApp(), 900);
  } catch (err) {
    updating = false;
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/stop", (req, res) => {
  if (!isLocal(req)) return res.status(403).json({ error: "Local only." });
  res.json({ ok: true, stopped: true });
  setTimeout(() => {
    try {
      const pidFile = path.join(DATA_DIR, "hopplay.pid");
      if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
    } catch {}
    process.exit(0);
  }, 200);
});

ensureDir();
if (!fs.existsSync(CONFIG_FILE)) saveConfig(defaultConfig());
if (!fs.existsSync(SETTINGS_FILE)) saveSettings(defaultSettings());
fs.writeFileSync(path.join(DATA_DIR, "hopplay.pid"), String(process.pid));

app.listen(PORT, HOST, () => {
  console.log("");
  console.log("  HopPlay  ·  GalaxyBunny Studio");
  console.log(`  Dashboard : http://${HOST}:${PORT}`);
  console.log(`  Overlay   : http://${HOST}:${PORT}/widget.html`);
  console.log(`  Redirect  : ${redirectUri()}`);
  console.log("");
});

process.on("exit", () => {
  try {
    const pidFile = path.join(DATA_DIR, "hopplay.pid");
    if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
  } catch {}
});
