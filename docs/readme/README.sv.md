# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — now playing-overlay för OBS, Streamlabs och andra webbläsarkällor.

**Av [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spela en låt på Spotify (valfritt) eller använd demoläge, välj ett skal och kopiera overlay-URL:en till OBS.

## Funktioner

- 61 spelarskal (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade med mera)
- Omslag: kvadrat, Canvas, vinyl, inget
- Magiska färger, omslagsglöd, spelarglöd, oskärpa, visualiserare
- 9 overlaypositioner
- Dölj vid paus / visa bara vid låtbyte
- Visa- och döljeffekter (fade, slide, scale, pop, blur) med timing
- Upp till 5 profiler, var och en med egen OBS-URL
- Gränssnitt på 30 språk
- Justerbar spelarstorlek och opacitet som sparas separat för varje profil
- Välj ansluten Spotify eller lokal Windows-detektering med titel, artist, förlopp och albumomslag; Spotify-begränsningar hanteras automatiskt
- Lokalt demoläge (inget Spotify-konto krävs)
- Uppdateringar från GitHub Releases (`data/` behålls)

## Kör

Kräver [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Öppna http://127.0.0.1:3000

På Windows kan du också dubbelklicka på `start.bat`.

Stoppa servern från instrumentpanelen (**Stoppa server** i sidofältet) eller med `stop.bat`.

När en ny GitHub-release publiceras erbjuder panelen **Uppdatera nu**. Spotify-data i `data/` behålls.

## OBS

1. Källa → Webbläsare
2. Namn: `HopPlay`
3. URL från panelen
4. Storlek `1920 × 1080`
5. Bakgrunden är genomskinlig

## Spotify (valfritt)

1. Skapa en app i [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Omdirigerings-URI (exakt):

```
http://127.0.0.1:3000/callback
```

3. Klistra in Client ID och Client Secret i panelen
4. Auktorisera, spela sedan en låt

Committa inte hemligheter. Behåll Client ID / Client Secret bara på din dator (`data/` finns i `.gitignore`).

## Licens

MIT © GalaxyBunny Studio
