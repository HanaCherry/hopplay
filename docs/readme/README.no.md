# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — now playing-overlay for OBS, Streamlabs og andre nettleserkilder.

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
