# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — Now-Playing-Overlay für OBS, Streamlabs und andere Browserquellen.

**Von [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spiele einen Titel auf Spotify (optional) oder nutze den Demo-Modus, wähle ein Skin und kopiere die Overlay-URL in OBS.

## Funktionen

- 61 Player-Skins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade und mehr)
- Cover: Quadrat, Canvas, Vinyl, keins
- Magic Colors, Cover-Glow, Player-Glow, Cover-Blur, Visualizer
- 9 Overlay-Positionen
- Bei Pause ausblenden / nur bei Titelwechsel anzeigen
- Ein- und Ausblendeffekte (Fade, Slide, Scale, Pop, Blur) mit Timing
- Bis zu 5 Profile mit eigenen OBS-URLs
- Oberfläche in 30 Sprachen
- Lokaler Demo-Modus (kein Spotify-Konto nötig)
- Updates aus GitHub Releases (`data/` bleibt erhalten)

## Starten

Benötigt [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Öffne http://127.0.0.1:3000

Unter Windows kannst du auch auf `start.bat` doppelklicken.

Stoppe den Server im Dashboard (**Server stoppen** in der Seitenleiste) oder mit `stop.bat`.

Wenn ein neues GitHub-Release erscheint, bietet das Dashboard **Jetzt aktualisieren**. Deine Spotify-Daten in `data/` bleiben erhalten.

## OBS

1. Quelle → Browser
2. Name: `HopPlay`
3. URL aus dem Dashboard
4. Größe `1920 × 1080`
5. Der Hintergrund ist transparent

## Spotify (optional)

1. Erstelle eine App im [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (genau):

```
http://127.0.0.1:3000/callback
```

3. Client ID und Client Secret im Dashboard einfügen
4. Autorisieren, dann einen Titel abspielen

Keine Secrets committen. Client ID / Client Secret nur lokal speichern (`data/` steht in `.gitignore`).

## Lizenz

MIT © GalaxyBunny Studio
