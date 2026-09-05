# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — שכבת now playing ל-OBS, Streamlabs ומקורות דפדפן אחרים.

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
