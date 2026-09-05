# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — now-playing overlay voor OBS, Streamlabs en andere bronnen in de browser.

**Door [GalaxyBunny Studio](https://github.com/HanaCherry)**

Speel een nummer op Spotify (optioneel) of gebruik de demomodus, kies een skin en kopieer de overlay-URL naar OBS.

## Functies

- 61 playerskins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade en meer)
- Cover: vierkant, Canvas, vinyl, geen
- Magic colors, coverglow, playerglow, coverblur, visualizer
- 9 overlayposities
- Verbergen bij pauze / alleen tonen bij nummerwissel
- In- en uitfadeneffecten (fade, slide, scale, pop, blur) met timing
- Tot 5 profielen, elk met een eigen OBS-URL
- Interface in 30 talen
- Lokale demomodus (geen Spotify-account nodig)
- Updates via GitHub Releases (`data/` blijft bewaard)

## Starten

Vereist [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Open http://127.0.0.1:3000

Op Windows kun je ook dubbelklikken op `start.bat`.

Stop de server via het dashboard (**Server stoppen** in de zijbalk) of met `stop.bat`.

Als er een nieuwe GitHub-release is, biedt het dashboard **Nu updaten**. Je Spotify-gegevens in `data/` blijven bewaard.

## OBS

1. Bron → Browser
2. Naam: `HopPlay`
3. URL uit het dashboard
4. Formaat `1920 × 1080`
5. De achtergrond is transparant

## Spotify (optioneel)

1. Maak een app in het [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (exact):

```
http://127.0.0.1:3000/callback
```

3. Plak Client ID en Client Secret in het dashboard
4. Autoriseer en speel een nummer

Commit geen geheimen. Houd Client ID / Client Secret alleen lokaal (`data/` staat in `.gitignore`).

## Licentie

MIT © GalaxyBunny Studio
