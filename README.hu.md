# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — now playing overlay OBS-hez, Streamlabshoz és más böngészőforrásokhoz.

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
