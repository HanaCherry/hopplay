# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — OBS, Streamlabs 및 기타 브라우저 소스용 나우 플레잉 오버레이.

**제작 [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify에서 곡을 재생하거나(선택) 데모 모드를 쓰고, 스킨을 고른 뒤 오버레이 URL을 OBS에 넣으세요.

## 기능

- 플레이어 스킨 61종 (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade 등)
- 커버: 정사각, Canvas, 바이닐, 없음
- 매직 컬러, 커버 글로우, 플레이어 글로우, 블러, 비주얼라이저
- 오버레이 위치 9곳
- 일시정지 시 숨김 / 곡 변경 때만 표시
- 나타남·숨김 효과(페이드, 슬라이드, 스케일, 팝, 블러)와 시간 설정
- 프로필 최대 5개, 각각 다른 OBS URL
- UI 30개 언어
- 로컬 데모 모드 (Spotify 계정 불필요)
- GitHub Releases로 앱 내 업데이트 (`data/` 유지)

## 실행

[Node.js](https://nodejs.org)가 필요합니다.

```bash
npm install
npm start
```

http://127.0.0.1:3000 을 여세요

Windows에서는 `start.bat`을 더블 클릭해도 됩니다.

대시보드 사이드바의 **서버 중지** 또는 `stop.bat`으로 서버를 멈춥니다.

새 GitHub 릴리스가 있으면 대시보드에 **지금 업데이트**가 나타납니다. `data/`의 Spotify 데이터는 유지됩니다.

## OBS

1. 소스 → 브라우저
2. 이름: `HopPlay`
3. 대시보드의 URL
4. 크기 `1920 × 1080`
5. 배경은 투명합니다

## Spotify (선택)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)에서 앱 만들기
2. 리디렉트 URI (정확히):

```
http://127.0.0.1:3000/callback
```

3. 대시보드에 Client ID와 Client Secret 붙여넣기
4. 권한 허용 후 곡 재생

시크릿을 커밋하지 마세요. Client ID / Client Secret은 이 컴퓨터에만 두세요 (`data/`는 gitignore됨).

## 라이선스

MIT © GalaxyBunny Studio
