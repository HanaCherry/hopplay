# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — OBS, Streamlabs ve diğer tarayıcı kaynakları için now playing katmanı.

**Yapan [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify’da bir parça çal (isteğe bağlı) veya demo modunu kullan, bir skin seç ve overlay URL’sini OBS’e kopyala.

## Özellikler

- 61 oynatıcı skini (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ve daha fazlası)
- Kapak: kare, Canvas, vinil, yok
- Sihirli renkler, kapak ışıltısı, oynatıcı ışıltısı, bulanıklık, görselleştirici
- 9 overlay konumu
- Duraklatınca gizle / yalnızca şarkı değişince göster
- Belirme ve gizlenme efektleri (fade, kaydır, ölçek, pop, bulanık) ve süreler
- En fazla 5 profil, her birinin ayrı OBS URL’si
- 30 dilde arayüz
- Yerel demo modu (Spotify hesabı gerekmez)
- GitHub Releases’ten uygulama içi güncelleme (`data/` korunur)

## Çalıştırma

[Node.js](https://nodejs.org) gerekir.

```bash
npm install
npm start
```

http://127.0.0.1:3000 adresini aç

Windows’ta `start.bat` dosyasına çift tıklayabilirsin.

Sunucuyu panodan (**Sunucuyu durdur**, kenar çubuğu) veya `stop.bat` ile durdur.

Yeni bir GitHub sürümü çıkınca pano **Şimdi güncelle** sunar. `data/` içindeki Spotify verilerin kalır.

## OBS

1. Kaynak → Tarayıcı
2. Ad: `HopPlay`
3. Panodaki URL
4. Boyut `1920 × 1080`
5. Arka plan şeffaf

## Spotify (isteğe bağlı)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) üzerinde bir uygulama oluştur
2. Yönlendirme URI’si (tam olarak):

```
http://127.0.0.1:3000/callback
```

3. Client ID ve Client Secret’i panoya yapıştır
4. Yetkilendir, sonra bir parça çal

Gizli bilgileri commit etme. Client ID / Client Secret yalnızca bilgisayarında kalsın (`data/` gitignore’da).

## Lisans

MIT © GalaxyBunny Studio
