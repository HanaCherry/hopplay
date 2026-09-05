# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing untuk OBS, Streamlabs dan sumber pelayar lain.

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
