# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

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
