# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

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
