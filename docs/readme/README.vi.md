# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — lớp phủ đang phát cho OBS, Streamlabs và các nguồn trình duyệt khác.

**Bởi [GalaxyBunny Studio](https://github.com/HanaCherry)**

Phát một bài trên Spotify (tuỳ chọn) hoặc dùng chế độ demo, chọn skin, rồi sao chép URL overlay vào OBS.

## Tính năng

- 61 skin trình phát (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade và hơn thế)
- Bìa: vuông, Canvas, đĩa than, không
- Màu ma thuật, phát sáng bìa, phát sáng player, làm mờ, visualizer
- 9 vị trí overlay
- Ẩn khi tạm dừng / chỉ hiện khi đổi bài
- Hiệu ứng hiện/ẩn (fade, trượt, scale, pop, mờ) kèm thời gian
- Tối đa 5 hồ sơ, mỗi hồ sơ một URL OBS riêng
- Giao diện 30 ngôn ngữ
- Chế độ demo local (không cần tài khoản Spotify)
- Cập nhật trong ứng dụng từ GitHub Releases (giữ `data/`)

## Chạy

Cần [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Mở http://127.0.0.1:3000

Trên Windows bạn cũng có thể double-click `start.bat`.

Dừng máy chủ từ bảng điều khiển (**Dừng máy chủ** ở thanh bên) hoặc bằng `stop.bat`.

Khi có bản phát hành GitHub mới, bảng điều khiển hiện **Cập nhật ngay**. Dữ liệu Spotify trong `data/` được giữ.

## OBS

1. Nguồn → Trình duyệt
2. Tên: `HopPlay`
3. URL từ bảng điều khiển
4. Kích thước `1920 × 1080`
5. Nền trong suốt

## Spotify (tuỳ chọn)

1. Tạo ứng dụng trên [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI chuyển hướng (chính xác):

```
http://127.0.0.1:3000/callback
```

3. Dán Client ID và Client Secret vào bảng điều khiển
4. Uỷ quyền, rồi phát một bài

Đừng commit bí mật. Chỉ giữ Client ID / Client Secret trên máy bạn (`data/` nằm trong `.gitignore`).

## Giấy phép

MIT © GalaxyBunny Studio
