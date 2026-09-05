# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing untuk OBS, Streamlabs dan sumber pelayar lain.

**Oleh [GalaxyBunny Studio](https://github.com/HanaCherry)**

Mainkan lagu di Spotify (pilihan) atau guna mod demo, pilih kulit, kemudian salin URL overlay ke OBS.

## Ciri

- 61 kulit pemain (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade dan lagi)
- Kulit album: segi empat, Canvas, vinil, tiada
- Warna ajaib, sinar kulit, sinar pemain, kabur, visualizer
- 9 kedudukan overlay
- Sembunyi semasa jeda / tunjuk hanya bila lagu bertukar
- Kesan muncul dan hilang (fade, slaid, skala, pop, kabur) dengan masa
- Sehingga 5 profil, setiap satu ada URL OBS sendiri
- Antara muka dalam 30 bahasa
- Saiz dan kelegapan pemain boleh dilaraskan serta disimpan berasingan untuk setiap profil
- Pilihan Spotify disambungkan atau pengesanan setempat Windows dengan tajuk, artis, kemajuan dan kulit album; had Spotify dikendalikan secara automatik
- Mod demo setempat (tidak perlu akaun Spotify)
- Kemas kini dalam apl daripada GitHub Releases (`data/` dikekalkan)

## Jalankan

Memerlukan [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Buka http://127.0.0.1:3000

Di Windows anda juga boleh dwi-klik `start.bat`.

Hentikan pelayan dari papan pemuka (**Henti pelayan** di bar sisi) atau dengan `stop.bat`.

Apabila ada keluaran GitHub baharu, papan pemuka menawarkan **Kemas kini sekarang**. Data Spotify dalam `data/` kekal.

## OBS

1. Sumber → Pelayar
2. Nama: `HopPlay`
3. URL dari papan pemuka
4. Saiz `1920 × 1080`
5. Latar belakang lutsinar

## Spotify (pilihan)

1. Cipta apl di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI lencongan (tepat):

```
http://127.0.0.1:3000/callback
```

3. Tampal Client ID dan Client Secret di papan pemuka
4. Benarkan, kemudian mainkan lagu

Jangan commit rahsia. Simpan Client ID / Client Secret pada komputer anda sahaja (`data/` dalam `.gitignore`).

## Lesen

MIT © GalaxyBunny Studio
