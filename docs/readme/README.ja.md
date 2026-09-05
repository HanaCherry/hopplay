# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — OBS、Streamlabs、その他のブラウザソース向けナウプレイングオーバーレイ。

**制作 [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify で曲を再生する（任意）かデモモードを使い、スキンを選んでオーバーレイ URL を OBS に貼ります。

## 機能

- プレイヤースキン 61 種（Galaxy Bunny、kawaii、chrome、walkman、film、sakura、tarot、arcade など）
- ジャケット：スクエア、Canvas、レコード、なし
- マジックカラー、ジャケットグロー、プレイヤーグロー、ブラー、ビジュアライザー
- オーバーレイ位置 9 か所
- 一時停止で非表示 / 曲変更時だけ表示
- 表示・非表示エフェクト（フェード、スライド、スケール、ポップ、ブラー）と時間設定
- 最大 5 プロファイル、それぞれ別の OBS URL
- UI は 30 言語
- ローカルデモモード（Spotify アカウント不要）
- GitHub Releases からのアプリ内更新（`data/` は保持）

## 起動

[Node.js](https://nodejs.org) が必要です。

```bash
npm install
npm start
```

http://127.0.0.1:3000 を開く

Windows では `start.bat` をダブルクリックしても起動できます。

ダッシュボードのサイドバー **サーバーを停止**、または `stop.bat` で停止します。

新しい GitHub リリースがあると、ダッシュボードに **今すぐ更新** が出ます。`data/` の Spotify データは残ります。

## OBS

1. ソース → ブラウザ
2. 名前: `HopPlay`
3. ダッシュボードの URL
4. サイズ `1920 × 1080`
5. 背景は透明

## Spotify（任意）

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) でアプリを作成
2. リダイレクト URI（完全一致）:

```
http://127.0.0.1:3000/callback
```

3. ダッシュボードに Client ID と Client Secret を貼る
4. 認可してから曲を再生

シークレットをコミットしないでください。Client ID / Client Secret は自分の PC だけに置きます（`data/` は gitignore 済み）。

## ライセンス

MIT © GalaxyBunny Studio
