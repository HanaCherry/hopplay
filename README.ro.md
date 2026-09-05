# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing pentru OBS, Streamlabs și alte surse din browser.

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
