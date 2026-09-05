# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing per OBS, Streamlabs e altre sorgenti browser.

**Di [GalaxyBunny Studio](https://github.com/HanaCherry)**

Riproduci un brano su Spotify (opzionale) o usa la modalità demo, scegli uno skin e copia l’URL dell’overlay in OBS.

## Funzioni

- 61 skin del player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade e altro)
- Copertina: quadrata, Canvas, vinile, nessuna
- Colori magici, bagliore copertina, bagliore player, sfocatura, visualizer
- 9 posizioni dell’overlay
- Nascondi in pausa / mostra solo al cambio brano
- Effetti di comparsa e scomparsa (fade, slide, scale, pop, blur) con tempi
- Fino a 5 profili, ognuno con il proprio URL OBS
- Interfaccia in 30 lingue
- Modalità demo locale (nessun account Spotify)
- Aggiornamenti da GitHub Releases (`data/` viene conservato)

## Avvio

Serve [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Apri http://127.0.0.1:3000

Su Windows puoi anche fare doppio clic su `start.bat`.

Ferma il server dal pannello (**Ferma server** nella barra laterale) o con `stop.bat`.

Quando esce una nuova release su GitHub, il pannello propone **Aggiorna ora**. I dati Spotify in `data/` restano.

## OBS

1. Sorgente → Browser
2. Nome: `HopPlay`
3. URL dal pannello
4. Dimensione `1920 × 1080`
5. Lo sfondo è trasparente

## Spotify (opzionale)

1. Crea un’app nel [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI di reindirizzamento (esatto):

```
http://127.0.0.1:3000/callback
```

3. Incolla Client ID e Client Secret nel pannello
4. Autorizza, poi riproduci un brano

Non committare i segreti. Tieni Client ID / Client Secret solo sul PC (`data/` è in `.gitignore`).

## Licenza

MIT © GalaxyBunny Studio
