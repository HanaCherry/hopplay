# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — nakładka now playing dla OBS, Streamlabs i innych źródeł przeglądarki.

**Od [GalaxyBunny Studio](https://github.com/HanaCherry)**

Odtwórz utwór na Spotify (opcjonalnie) albo użyj trybu demo, wybierz skórkę i skopiuj URL nakładki do OBS.

## Funkcje

- 61 skórek odtwarzacza (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade i więcej)
- Okładka: kwadrat, Canvas, winyl, brak
- Magiczne kolory, poświata okładki, poświata odtwarzacza, rozmycie, wizualizer
- 9 pozycji nakładki
- Ukryj przy pauzie / pokazuj tylko przy zmianie utworu
- Efekty pojawiania i znikania (fade, slide, scale, pop, blur) z czasem
- Do 5 profili, każdy z własnym URL OBS
- Interfejs w 30 językach
- Lokalny tryb demo (konto Spotify nie jest wymagane)
- Aktualizacje z GitHub Releases (`data/` zostaje)

## Uruchomienie

Potrzebujesz [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Otwórz http://127.0.0.1:3000

W Windows możesz też kliknąć dwukrotnie `start.bat`.

Zatrzymaj serwer w panelu (**Zatrzymaj serwer** na pasku bocznym) albo przez `stop.bat`.

Gdy pojawi się nowe wydanie na GitHubie, panel oferuje **Aktualizuj teraz**. Dane Spotify w `data/` zostają.

## OBS

1. Źródło → Przeglądarka
2. Nazwa: `HopPlay`
3. URL z panelu
4. Rozmiar `1920 × 1080`
5. Tło jest przezroczyste

## Spotify (opcjonalnie)

1. Utwórz aplikację w [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI przekierowania (dokładnie):

```
http://127.0.0.1:3000/callback
```

3. Wklej Client ID i Client Secret w panelu
4. Autoryzuj, potem odtwórz utwór

Nie commituj sekretów. Client ID / Client Secret trzymaj tylko na swoim komputerze (`data/` jest w `.gitignore`).

## Licencja

MIT © GalaxyBunny Studio
