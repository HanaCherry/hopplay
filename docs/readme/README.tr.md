# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — OBS, Streamlabs ve diğer tarayıcı kaynakları için now playing katmanı.

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
- Her profil için ayrı kaydedilen ayarlanabilir oynatıcı boyutu ve opaklığı
- Başlık, sanatçı, ilerleme ve albüm kapağıyla bağlı Spotify veya Windows yerel algılama seçeneği; Spotify sınırları otomatik yönetilir
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
