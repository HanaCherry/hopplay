# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing pentru OBS, Streamlabs și alte surse din browser.

**De [GalaxyBunny Studio](https://github.com/HanaCherry)**

Redă o piesă pe Spotify (opțional) sau folosește modul demo, alege un skin și copiază URL-ul overlay-ului în OBS.

## Funcții

- 61 de skin-uri de player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade și altele)
- Copertă: pătrat, Canvas, vinil, niciuna
- Culori magice, glow copertă, glow player, blur, vizualizator
- 9 poziții pentru overlay
- Ascunde la pauză / arată doar la schimbarea piesei
- Efecte de apariție și dispariție (fade, slide, scale, pop, blur) cu durate
- Până la 5 profiluri, fiecare cu propriul URL OBS
- Interfață în 30 de limbi
- Dimensiune și opacitate reglabile ale playerului, salvate separat pentru fiecare profil
- Alegere între Spotify conectat și detectarea locală Windows, cu titlu, artist, progres și copertă; limitele Spotify sunt gestionate automat
- Mod demo local (nu e nevoie de cont Spotify)
- Actualizări din GitHub Releases (`data/` este păstrat)

## Rulare

Ai nevoie de [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Deschide http://127.0.0.1:3000

Pe Windows poți da dublu clic pe `start.bat`.

Oprește serverul din panou (**Oprește serverul** în bara laterală) sau cu `stop.bat`.

Când apare un release nou pe GitHub, panoul oferă **Actualizează acum**. Datele Spotify din `data/` rămân.

## OBS

1. Sursă → Browser
2. Nume: `HopPlay`
3. URL-ul din panou
4. Dimensiune `1920 × 1080`
5. Fundalul este transparent

## Spotify (opțional)

1. Creează o aplicație în [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI de redirecționare (exact):

```
http://127.0.0.1:3000/callback
```

3. Lipește Client ID și Client Secret în panou
4. Autorizează, apoi redă o piesă

Nu face commit la secrete. Păstrează Client ID / Client Secret doar pe calculator (`data/` e în `.gitignore`).

## Licență

MIT © GalaxyBunny Studio
