# Hopplay

**v1.3.0** — now-playing overlay for OBS, Streamlabs, and other browser sources.

**By [GalaxyBunny Studio](https://github.com/HanaCherry)**

Play a track on Spotify (optional) or use demo mode, pick a player skin, copy the overlay URL into OBS.

## Features

- 29 player skins: Compact, Boxy, Gallery, macOS, Shell, Discord, Minimal, Island, Neon, Glass, Ticker, Polaroid, Cassette, Toast, Poster, Game Boy, CRT, Ticket, Sticky, Pixel, Hologram, Stamp, Radio, VHS, Bubble, Lower third, Watch, Newspaper, Notebook
- Cover modes: Square, Canvas, Vinyl, None
- Magic colors, cover glow, cover blur, visualizer
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

## OBS

1. Source → Browser
2. Name: `Hopplay`
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
