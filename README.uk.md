# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — оверлей now playing для OBS, Streamlabs та інших браузерних джерел.

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
