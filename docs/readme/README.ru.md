# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — оверлей now playing для OBS, Streamlabs и других браузерных источников.

**От [GalaxyBunny Studio](https://github.com/HanaCherry)**

Включите трек в Spotify (по желанию) или демо-режим, выберите скин и скопируйте URL оверлея в OBS.

## Возможности

- 61 скин плеера (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade и другие)
- Обложка: квадрат, Canvas, винил, без обложки
- Магические цвета, свечение обложки, свечение плеера, размытие, визуализатор
- 9 позиций оверлея
- Скрывать на паузе / показывать только при смене трека
- Эффекты появления и скрытия (fade, slide, scale, pop, blur) с таймингом
- До 5 профилей, у каждого свой URL для OBS
- Интерфейс на 30 языках
- Локальный демо-режим (аккаунт Spotify не нужен)
- Обновления из GitHub Releases (папка `data/` сохраняется)

## Запуск

Нужен [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Откройте http://127.0.0.1:3000

В Windows можно дважды щёлкнуть `start.bat`.

Остановите сервер в панели (**Остановить сервер** в боковом меню) или через `stop.bat`.

Когда выходит новый релиз на GitHub, панель предлагает **Обновить**. Данные Spotify в `data/` сохраняются.

## OBS

1. Источник → Браузер
2. Имя: `HopPlay`
3. URL из панели
4. Размер `1920 × 1080`
5. Фон прозрачный

## Spotify (по желанию)

1. Создайте приложение в [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (точно):

```
http://127.0.0.1:3000/callback
```

3. Вставьте Client ID и Client Secret в панели
4. Авторизуйтесь и включите трек

Не коммитьте секреты. Храните Client ID / Client Secret только у себя (`data/` в `.gitignore`).

## Лицензия

MIT © GalaxyBunny Studio
