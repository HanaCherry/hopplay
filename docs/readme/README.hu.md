# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — now playing overlay OBS-hez, Streamlabshoz és más böngészőforrásokhoz.

**Készítette [GalaxyBunny Studio](https://github.com/HanaCherry)**

Játssz le egy számot Spotifyon (opcionális) vagy használd a demó módot, válassz kinézetet, és másold az overlay URL-jét az OBS-be.

## Funkciók

- 61 lejátszó kinézet (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade és mások)
- Borító: négyzet, Canvas, bakelit, nincs
- Varázsszínek, borítófény, lejátszófény, elmosás, vizualizáló
- 9 overlay pozíció
- Elrejtés szünetnél / csak számváltáskor jelenjen meg
- Megjelenés- és eltűnéseffektek (fade, slide, scale, pop, blur) időzítéssel
- Legfeljebb 5 profil, mindegyik saját OBS URL-lel
- Felület 30 nyelven
- Állítható lejátszóméret és átlátszatlanság, profilonként külön mentve
- Választható csatlakoztatott Spotify vagy helyi Windows-észlelés címmel, előadóval, folyamattal és albumborítóval; a Spotify korlátozásait automatikusan kezeli
- Helyi demó mód (nem kell Spotify-fiók)
- Frissítés GitHub Releases-ből (`data/` megmarad)

## Indítás

[Node.js](https://nodejs.org) szükséges.

```bash
npm install
npm start
```

Nyisd meg: http://127.0.0.1:3000

Windowson a `start.bat` fájlra is duplán kattinthatsz.

Állítsd le a szervert a vezérlőpulton (**Szerver leállítása** az oldalsávon) vagy a `stop.bat` fájllal.

Új GitHub-kiadásnál a pult **Frissítés most** lehetőséget ad. A `data/` Spotify-adatok megmaradnak.

## OBS

1. Forrás → Böngésző
2. Név: `HopPlay`
3. URL a pultról
4. Méret `1920 × 1080`
5. A háttér átlátszó

## Spotify (opcionális)

1. Hozz létre egy appot a [Spotify Developer Dashboardön](https://developer.spotify.com/dashboard)
2. Átirányítási URI (pontosan):

```
http://127.0.0.1:3000/callback
```

3. Illeszd be a Client ID-t és a Client Secretet a pultra
4. Engedélyezd, majd játssz le egy számot

Ne commitold a titkokat. A Client ID / Client Secret maradjon a gépeden (`data/` a `.gitignore`-ban van).

## Licenc

MIT © GalaxyBunny Studio
