# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — overlay now playing untuk OBS, Streamlabs, dan sumber browser lain.

**Oleh [GalaxyBunny Studio](https://github.com/HanaCherry)**

Putar lagu di Spotify (opsional) atau pakai mode demo, pilih skin, lalu salin URL overlay ke OBS.

## Fitur

- 61 skin pemutar (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade, dan lainnya)
- Sampul: persegi, Canvas, vinil, tidak ada
- Warna magis, glow sampul, glow pemutar, blur, visualizer
- 9 posisi overlay
- Sembunyikan saat jeda / tampilkan hanya saat ganti lagu
- Efek muncul dan hilang (fade, geser, skala, pop, blur) plus durasi
- Hingga 5 profil, masing-masing URL OBS sendiri
- Antarmuka dalam 30 bahasa
- Mode demo lokal (tidak perlu akun Spotify)
- Pembaruan dari GitHub Releases (`data/` tetap ada)

## Menjalankan

Butuh [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Buka http://127.0.0.1:3000

Di Windows kamu juga bisa klik dua kali `start.bat`.

Hentikan server dari dasbor (**Hentikan server** di bilah samping) atau dengan `stop.bat`.

Saat ada rilis GitHub baru, dasbor menawarkan **Perbarui sekarang**. Data Spotify di `data/` tetap disimpan.

## OBS

1. Sumber → Peramban
2. Nama: `HopPlay`
3. URL dari dasbor
4. Ukuran `1920 × 1080`
5. Latar belakang transparan

## Spotify (opsional)

1. Buat aplikasi di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI pengalihan (persis):

```
http://127.0.0.1:3000/callback
```

3. Tempel Client ID dan Client Secret di dasbor
4. Otorisasi, lalu putar lagu

Jangan commit rahasia. Simpan Client ID / Client Secret hanya di komputermu (`data/` ada di `.gitignore`).

## Lisensi

MIT © GalaxyBunny Studio
