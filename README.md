# HopPlay

**v1.6.1** — now-playing overlay for OBS, Streamlabs, and other browser sources.

**By [GalaxyBunny Studio](https://github.com/HanaCherry)**

Play a track on Spotify (optional) or use demo mode, pick a player skin, copy the overlay URL into OBS.

## Features

- 53 player skins (kawaii, chrome, walkman, film, sakura, tarot, arcade, and more)
- Cover modes: Square, Canvas, Vinyl, None
- Magic colors, cover glow, player glow, cover blur, visualizer
- Hide on pause / show only on song change
- Up to 5 profiles with separate OBS URLs
- UI in 30 languages
- Local demo mode (no Spotify account required)

## Run

Needs [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Open http://127.0.0.1:3000

On Windows you can also double-click `start.bat`.

Stop the server from the dashboard (**Stop server** in the sidebar) or with `stop.bat`.

When a new GitHub release is published, the dashboard offers **Update now**. Your Spotify data in `data/` is kept.

## OBS

### Galaxy Bunny mini-player

Choose **Galaxy Bunny** in the dashboard's player skins. The redesigned compact
glass card includes accessible playback buttons and a seek slider, with subtle
bunny ears, sakura petals and pink/purple/blue accents. It also fits narrow previews.

Controls use the existing Spotify session and active device; they do not create
a second audio player. Reconnect Spotify once after updating to grant
`user-modify-playback-state`. Spotify playback commands require Premium and an
active device. Errors appear above the card. In OBS, use **Interact** to operate
the browser source, or use the dashboard preview.

Without Spotify, the existing demo simulates playback silently, including pause,
seek, previous/next, shuffle and repeat (off → all → track). No audio is streamed
in demo mode. Run `npm test` for playback regression tests.

1. Source → Browser
2. Name: `HopPlay`
3. URL from the dashboard
4. Size `1920 × 1080`
5. Background is transparent

## Spotify (optional)

1. Create an app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (exact):

```
http://127.0.0.1:3000/callback
```

3. Paste Client ID and Client Secret in the dashboard
4. Authorize, then play a track

Do not commit secrets. Keep Client ID / Client Secret on your machine only (`data/` is gitignored).

## License

MIT © GalaxyBunny Studio
