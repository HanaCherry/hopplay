# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — now playing-overlay för OBS, Streamlabs och andra webbläsarkällor.

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
