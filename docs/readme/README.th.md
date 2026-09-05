# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — โอเวอร์เลย์กำลังเล่นสำหรับ OBS, Streamlabs และแหล่งเบราว์เซอร์อื่น

**โดย [GalaxyBunny Studio](https://github.com/HanaCherry)**

เล่นเพลงบน Spotify (ไม่บังคับ) หรือใช้โหมดเดโม เลือกสกิน แล้วคัดลอก URL โอเวอร์เลย์ไปใส่ OBS

## ฟีเจอร์

- สกินเครื่องเล่น 61 แบบ (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade และอื่น ๆ)
- ปก: สี่เหลี่ยม, Canvas, ไวนิล, ไม่มี
- สีเมจิก, แสงปก, แสงเครื่องเล่น, เบลอ, วิชวลไลเซอร์
- ตำแหน่งโอเวอร์เลย์ 9 จุด
- ซ่อนตอนพัก / แสดงเฉพาะตอนเปลี่ยนเพลง
- เอฟเฟกต์ปรากฏและหาย (เฟด, สไลด์, สเกล, ป็อป, เบลอ) พร้อมเวลา
- สูงสุด 5 โปรไฟล์ แต่ละอันมี URL OBS ของตัวเอง
- อินเทอร์เฟซ 30 ภาษา
- โหมดเดโมในเครื่อง (ไม่ต้องมีบัญชี Spotify)
- อัปเดตในแอปจาก GitHub Releases (เก็บ `data/` ไว้)

## การรัน

ต้องมี [Node.js](https://nodejs.org)

```bash
npm install
npm start
```

เปิด http://127.0.0.1:3000

บน Windows ดับเบิลคลิก `start.bat` ก็ได้

หยุดเซิร์ฟเวอร์จากแดชบอร์ด (**หยุดเซิร์ฟเวอร์** ที่แถบข้าง) หรือด้วย `stop.bat`

เมื่อมีรีลีสใหม่บน GitHub แดชบอร์ดจะมี **อัปเดตเลย** ข้อมูล Spotify ใน `data/` ยังอยู่

## OBS

1. แหล่ง → เบราว์เซอร์
2. ชื่อ: `HopPlay`
3. URL จากแดชบอร์ด
4. ขนาด `1920 × 1080`
5. พื้นหลังโปร่งใส

## Spotify (ไม่บังคับ)

1. สร้างแอปใน [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (ตรงทุกตัวอักษร):

```
http://127.0.0.1:3000/callback
```

3. วาง Client ID และ Client Secret ในแดชบอร์ด
4. อนุญาต แล้วเล่นเพลง

อย่าคอมมิตความลับ เก็บ Client ID / Client Secret ไว้ในเครื่องเท่านั้น (`data/` อยู่ใน `.gitignore`)

## สัญญาอนุญาต

MIT © GalaxyBunny Studio
