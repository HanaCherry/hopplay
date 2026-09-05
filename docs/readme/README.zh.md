# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — 适用于 OBS、Streamlabs 及其他浏览器源的正在播放叠加层。

**出品 [GalaxyBunny Studio](https://github.com/HanaCherry)**

在 Spotify 播放歌曲（可选）或使用演示模式，选择播放器皮肤，把叠加层 URL 复制到 OBS。

## 功能

- 61 款播放器皮肤（Galaxy Bunny、kawaii、chrome、walkman、film、sakura、tarot、arcade 等）
- 封面：方形、Canvas、黑胶、无
- 魔法配色、封面光晕、播放器光晕、模糊、可视化
- 9 个叠加层位置
- 暂停时隐藏 / 仅在切歌时显示
- 出现与消失动画（淡入、滑动、缩放、弹出、模糊）及时长
- 最多 5 个配置，各自独立的 OBS URL
- 界面支持 30 种语言
- 本地演示模式（无需 Spotify 账号）
- 通过 GitHub Releases 应用内更新（保留 `data/`）

## 运行

需要 [Node.js](https://nodejs.org)。

```bash
npm install
npm start
```

打开 http://127.0.0.1:3000

在 Windows 上也可以双击 `start.bat`。

在仪表盘侧栏点击 **停止服务器**，或运行 `stop.bat`。

GitHub 发布新版本时，仪表盘会提供 **立即更新**。`data/` 中的 Spotify 数据会保留。

## OBS

1. 来源 → 浏览器
2. 名称：`HopPlay`
3. 使用仪表盘中的 URL
4. 尺寸 `1920 × 1080`
5. 背景透明

## Spotify（可选）

1. 在 [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) 创建应用
2. 重定向 URI（必须完全一致）：

```
http://127.0.0.1:3000/callback
```

3. 在仪表盘粘贴 Client ID 和 Client Secret
4. 授权后播放一首歌

不要提交密钥。Client ID / Client Secret 只保存在本机（`data/` 已加入 `.gitignore`）。

## 许可证

MIT © GalaxyBunny Studio
