# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — now playing-overlay til OBS, Streamlabs og andre browserkilder.

**Af [GalaxyBunny Studio](https://github.com/HanaCherry)**

Afspil et nummer på Spotify (valgfrit) eller brug demotilstand, vælg et skin, og kopiér overlay-URL’en ind i OBS.

## Funktioner

- 61 afspillerskins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade og flere)
- Cover: firkant, Canvas, vinyl, ingen
- Magiske farver, cover-glow, afspiller-glow, sløring, visualizer
- 9 overlay-positioner
- Skjul ved pause / vis kun ved nummerskift
- Vis- og skjul-effekter (fade, slide, scale, pop, blur) med timing
- Op til 5 profiler, hver med sin egen OBS-URL
- Brugerflade på 30 sprog
- Lokal demotilstand (ingen Spotify-konto påkrævet)
- Opdateringer fra GitHub Releases (`data/` bevares)

## Kør

Kræver [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Åbn http://127.0.0.1:3000

På Windows kan du også dobbeltklikke på `start.bat`.

Stop serveren fra dashboardet (**Stop server** i sidebjælken) eller med `stop.bat`.

Når en ny GitHub-udgivelse udkommer, tilbyder dashboardet **Opdater nu**. Spotify-data i `data/` bevares.

## OBS

1. Kilde → Browser
2. Navn: `HopPlay`
3. URL fra dashboardet
4. Størrelse `1920 × 1080`
5. Baggrunden er gennemsigtig

## Spotify (valgfrit)

1. Opret en app på [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (præcis):

```
http://127.0.0.1:3000/callback
```

3. Indsæt Client ID og Client Secret i dashboardet
4. Autoriser, og afspil derefter et nummer

Commit ikke hemmeligheder. Behold Client ID / Client Secret kun på din computer (`data/` er i `.gitignore`).

## Licens

MIT © GalaxyBunny Studio
