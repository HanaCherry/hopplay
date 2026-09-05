# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — оверлей now playing для OBS, Streamlabs та інших браузерних джерел.

**Від [GalaxyBunny Studio](https://github.com/HanaCherry)**

Увімкніть трек у Spotify (за бажанням) або демо-режим, оберіть скін і скопіюйте URL оверлея в OBS.

## Можливості

- 61 скін плеєра (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade тощо)
- Обкладинка: квадрат, Canvas, вініл, без обкладинки
- Магічні кольори, сяйво обкладинки, сяйво плеєра, розмиття, візуалізатор
- 9 позицій оверлея
- Ховати на паузі / показувати лише при зміні треку
- Ефекти появи та зникнення (fade, slide, scale, pop, blur) з таймінгом
- До 5 профілів, кожен зі своїм URL для OBS
- Інтерфейс 30 мовами
- Регульовані розмір і прозорість програвача, що зберігаються окремо для кожного профілю
- Вибір між підключеним Spotify і локальним виявленням Windows із назвою, виконавцем, прогресом та обкладинкою; обмеження Spotify обробляються автоматично
- Локальний демо-режим (акаунт Spotify не потрібен)
- Оновлення з GitHub Releases (папка `data/` зберігається)

## Запуск

Потрібен [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Відкрийте http://127.0.0.1:3000

У Windows можна двічі клацнути `start.bat`.

Зупиніть сервер у панелі (**Зупинити сервер** в бічному меню) або через `stop.bat`.

Коли з’являється новий реліз на GitHub, панель пропонує **Оновити зараз**. Дані Spotify в `data/` зберігаються.

## OBS

1. Джерело → Браузер
2. Назва: `HopPlay`
3. URL з панелі
4. Розмір `1920 × 1080`
5. Тло прозоре

## Spotify (за бажанням)

1. Створіть застосунок у [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (точно):

```
http://127.0.0.1:3000/callback
```

3. Вставте Client ID і Client Secret у панелі
4. Авторизуйтесь і увімкніть трек

Не комітьте секрети. Зберігайте Client ID / Client Secret лише локально (`data/` у `.gitignore`).

## Ліцензія

MIT © GalaxyBunny Studio
