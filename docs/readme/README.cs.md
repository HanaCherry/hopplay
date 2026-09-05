# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — now playing overlay pro OBS, Streamlabs a další prohlížečové zdroje.

**Od [GalaxyBunny Studio](https://github.com/HanaCherry)**

Pusťte skladbu na Spotify (volitelné) nebo použijte demo režim, vyberte vzhled a zkopírujte URL overlaye do OBS.

## Funkce

- 61 vzhledů přehrávače (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade a další)
- Obal: čtverec, Canvas, vinyl, žádný
- Kouzelné barvy, záře obalu, záře přehrávače, rozostření, vizualizér
- 9 pozic overlaye
- Skrýt při pauze / zobrazit jen při změně skladby
- Efekty zobrazení a skrytí (fade, slide, scale, pop, blur) s časováním
- Až 5 profilů, každý s vlastní URL pro OBS
- Rozhraní ve 30 jazycích
- Místní demo režim (účet Spotify není potřeba)
- Aktualizace z GitHub Releases (`data/` zůstane)

## Spuštění

Potřebujete [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Otevřete http://127.0.0.1:3000

Ve Windows můžete také dvakrát kliknout na `start.bat`.

Server zastavíte v panelu (**Zastavit server** v postranním panelu) nebo pomocí `stop.bat`.

Když vyjde nový GitHub release, panel nabídne **Aktualizovat teď**. Data Spotify ve `data/` zůstanou.

## OBS

1. Zdroj → Prohlížeč
2. Název: `HopPlay`
3. URL z panelu
4. Velikost `1920 × 1080`
5. Pozadí je průhledné

## Spotify (volitelné)

1. Vytvořte aplikaci v [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Přesměrovací URI (přesně):

```
http://127.0.0.1:3000/callback
```

3. Vložte Client ID a Client Secret do panelu
4. Autorizujte a pusťte skladbu

Nekomitujte tajemství. Client ID / Client Secret nechte jen na svém počítači (`data/` je v `.gitignore`).

## Licence

MIT © GalaxyBunny Studio
