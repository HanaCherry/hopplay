# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

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
