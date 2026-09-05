# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — now playing-overlay for OBS, Streamlabs og andre nettleserkilder.

**Av [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spill et spor på Spotify (valgfritt) eller bruk demomodus, velg et skall og kopier overlay-URL-en til OBS.

## Funksjoner

- 61 spillerskall (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade med mer)
- Cover: kvadrat, Canvas, vinyl, ingen
- Magiske farger, coverglød, spiller-glød, uskarphet, visualiserer
- 9 overlayposisjoner
- Skjul ved pause / vis bare ved låtbytte
- Vis- og skjuileffekter (fade, slide, scale, pop, blur) med timing
- Opptil 5 profiler, hver med egen OBS-URL
- Grensesnitt på 30 språk
- Lokal demomodus (ingen Spotify-konto nødvendig)
- Oppdateringer fra GitHub Releases (`data/` beholdes)

## Kjøre

Trenger [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Åpne http://127.0.0.1:3000

På Windows kan du også dobbeltklikke `start.bat`.

Stopp serveren fra dashbordet (**Stopp server** i sidefeltet) eller med `stop.bat`.

Når en ny GitHub-utgivelse kommer, tilbyr dashbordet **Oppdater nå**. Spotify-data i `data/` beholdes.

## OBS

1. Kilde → Nettleser
2. Navn: `HopPlay`
3. URL fra dashbordet
4. Størrelse `1920 × 1080`
5. Bakgrunnen er gjennomsiktig

## Spotify (valgfritt)

1. Opprett en app i [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (nøyaktig):

```
http://127.0.0.1:3000/callback
```

3. Lim inn Client ID og Client Secret i dashbordet
4. Autoriser, spill deretter et spor

Ikke commit hemmeligheter. Behold Client ID / Client Secret bare på maskinen din (`data/` er i `.gitignore`).

## Lisens

MIT © GalaxyBunny Studio
