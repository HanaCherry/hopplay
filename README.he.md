# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — שכבת now playing ל-OBS, Streamlabs ומקורות דפדפן אחרים.

**מאת [GalaxyBunny Studio](https://github.com/HanaCherry)**

נגנו שיר ב-Spotify (רשות) או השתמשו במצב הדגמה, בחרו עיצוב והעתיקו את כתובת השכבה ל-OBS.

## יכולות

- 61 עיצובי נגן (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ועוד)
- עטיפה: ריבוע, Canvas, ויניל, ללא
- צבעים קסומים, זוהר עטיפה, זוהר נגן, טשטוש, ויזואלייזר
- 9 מיקומי שכבה
- הסתרה בהשהיה / הצגה רק בהחלפת שיר
- אפקטי הופעה והיעלמות (פייד, החלקה, קנה מידה, פופ, טשטוש) עם תזמון
- עד 5 פרופילים, לכל אחד כתובת OBS משלו
- ממשק ב-30 שפות
- מצב הדגמה מקומי (אין צורך בחשבון Spotify)
- עדכונים מ-GitHub Releases (`data/` נשמר)

## הפעלה

נדרש [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

פתחו את http://127.0.0.1:3000

ב-Windows אפשר גם ללחוץ פעמיים על `start.bat`.

עצרו את השרת מהלוח (**עצירת שרת** בסרגל הצד) או עם `stop.bat`.

כשיש גרסה חדשה ב-GitHub, הלוח מציע **עדכן עכשיו**. נתוני Spotify ב-`data/` נשמרים.

## OBS

1. מקור → דפדפן
2. שם: `HopPlay`
3. הכתובת מהלוח
4. גודל `1920 × 1080`
5. הרקע שקוף

## Spotify (רשות)

1. צרו אפליקציה ב-[Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. כתובת הפניה (בדיוק):

```
http://127.0.0.1:3000/callback
```

3. הדביקו Client ID ו-Client Secret בלוח
4. אשרו ואז נגנו שיר

אל תעשו commit לסודות. השאירו Client ID / Client Secret רק במחשב (`data/` ב-`.gitignore`).

## רישיון

MIT © GalaxyBunny Studio
