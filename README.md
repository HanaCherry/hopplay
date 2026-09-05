# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](docs/readme/README.fr.md) | [🇪🇸 Español](docs/readme/README.es.md) | [🇵🇹 Português](docs/readme/README.pt.md) | [🇩🇪 Deutsch](docs/readme/README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](docs/readme/README.it.md) | [🇳🇱 Nederlands](docs/readme/README.nl.md) | [🇵🇱 Polski](docs/readme/README.pl.md) | [🇷🇺 Русский](docs/readme/README.ru.md) | [🇺🇦 Українська](docs/readme/README.uk.md) |
| [🇯🇵 日本語](docs/readme/README.ja.md) | [🇰🇷 한국어](docs/readme/README.ko.md) | [🇨🇳 中文](docs/readme/README.zh.md) | [🇸🇦 العربية](docs/readme/README.ar.md) | [🇹🇷 Türkçe](docs/readme/README.tr.md) |
| [🇮🇳 हिन्दी](docs/readme/README.hi.md) | [🇧🇩 বাংলা](docs/readme/README.bn.md) | [🇮🇩 Bahasa Indonesia](docs/readme/README.id.md) | [🇻🇳 Tiếng Việt](docs/readme/README.vi.md) | [🇹🇭 ไทย](docs/readme/README.th.md) |
| [🇸🇪 Svenska](docs/readme/README.sv.md) | [🇳🇴 Norsk](docs/readme/README.no.md) | [🇩🇰 Dansk](docs/readme/README.da.md) | [🇫🇮 Suomi](docs/readme/README.fi.md) | [🇨🇿 Čeština](docs/readme/README.cs.md) |
| [🇷🇴 Română](docs/readme/README.ro.md) | [🇬🇷 Ελληνικά](docs/readme/README.el.md) | [🇭🇺 Magyar](docs/readme/README.hu.md) | [🇮🇱 עברית](docs/readme/README.he.md) | [🇲🇾 Melayu](docs/readme/README.ms.md) |

**v1.8.0** — now-playing overlay for OBS, Streamlabs, and other browser sources.

**By [GalaxyBunny Studio](https://github.com/HanaCherry)**

Play a track on Spotify (optional) or use demo mode, pick a player skin, copy the overlay URL into OBS.

## Features

- 61 player skins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade, and more)
- Cover modes: Square, Canvas, Vinyl, None
- Magic colors, cover glow, player glow, cover blur, visualizer
- 9 overlay positions
- Hide on pause / show only on song change
- Appear and hide effects (fade, slide, scale, pop, blur) with timing
- Up to 5 profiles with separate OBS URLs
- UI in 30 languages
- Local demo mode (no Spotify account required)
- In-app updates from GitHub Releases (`data/` is kept)

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
