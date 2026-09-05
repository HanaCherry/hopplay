# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

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
