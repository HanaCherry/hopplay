# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing per OBS, Streamlabs e altre sorgenti browser.

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
- Dimensione e opacità del lettore regolabili e salvate separatamente per ogni profilo
- Scelta tra Spotify connesso e rilevamento locale di Windows, con titolo, artista, avanzamento e copertina; i limiti Spotify vengono gestiti automaticamente
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
