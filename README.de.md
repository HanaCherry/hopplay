# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

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
