# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — OBS、Streamlabs、その他のブラウザソース向けナウプレイングオーバーレイ。

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
