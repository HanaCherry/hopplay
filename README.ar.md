# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — طبقة now playing لـ OBS وStreamlabs ومصادر المتصفح الأخرى.

**من [GalaxyBunny Studio](https://github.com/HanaCherry)**

شغّل مقطعًا على Spotify (اختياري) أو استخدم الوضع التجريبي، اختر مظهر المشغّل، ثم انسخ رابط الطبقة إلى OBS.

## الميزات

- 61 مظهرًا للمشغّل (Galaxy Bunny وkawaii وchrome وwalkman وfilm وsakura وtarot وarcade وغيرها)
- الغلاف: مربع، Canvas، فينيل، بدون
- ألوان سحرية، توهج الغلاف، توهج المشغّل، ضبابية، محلّل بصري
- 9 مواضع للطبقة
- إخفاء عند الإيقاف / الإظهار عند تغيير الأغنية فقط
- تأثيرات ظهور واختفاء (تلاشٍ، انزلاق، تكبير، pop، ضباب) مع التوقيت
- حتى 5 ملفات، لكل منها رابط OBS خاص
- واجهة بـ 30 لغة
- وضع تجريبي محلي (لا حاجة لحساب Spotify)
- تحديثات من GitHub Releases (يُحتفظ بـ `data/`)

## التشغيل

يتطلب [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

افتح http://127.0.0.1:3000

على Windows يمكنك أيضًا النقر مرتين على `start.bat`.

أوقف الخادم من اللوحة (**إيقاف الخادم** في الشريط الجانبي) أو عبر `stop.bat`.

عند نشر إصدار جديد على GitHub تعرض اللوحة **حدّث الآن**. تُحفظ بيانات Spotify في `data/`.

## OBS

1. مصدر → متصفح
2. الاسم: `HopPlay`
3. الرابط من اللوحة
4. الحجم `1920 × 1080`
5. الخلفية شفافة

## Spotify (اختياري)

1. أنشئ تطبيقًا في [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. عنوان إعادة التوجيه (حرفيًا):

```
http://127.0.0.1:3000/callback
```

3. الصق Client ID وClient Secret في اللوحة
4. فَوِّض ثم شغّل مقطعًا

لا ترفع الأسرار. أبقِ Client ID / Client Secret على جهازك فقط (`data/` في `.gitignore`).

## الرخصة

MIT © GalaxyBunny Studio
