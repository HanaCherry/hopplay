# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — OBS, Streamlabs ও অন্যান্য ব্রাউজার সোর্সের জন্য নাউ-প্লেইং ওভারলে।

**তৈরি [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify-তে গান চালান (ঐচ্ছিক) বা ডেমো মোড ব্যবহার করুন, স্কিন বেছে নিন, ওভারলে URL OBS-এ কপি করুন।

## ফিচার

- ৬১টি প্লেয়ার স্কিন (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ইত্যাদি)
- কভার: বর্গ, Canvas, ভিনাইল, নেই
- ম্যাজিক রং, কভার গ্লো, প্লেয়ার গ্লো, ব্লার, ভিজুয়ালাইজার
- ৯টি ওভারলে অবস্থান
- পজে লুকান / শুধু গান বদলালে দেখান
- আসা-যাওয়ার ইফেক্ট (ফেড, স্লাইড, স্কেল, পপ, ব্লার) ও সময়
- সর্বোচ্চ ৫টি প্রোফাইল, প্রতিটির আলাদা OBS URL
- ৩০টি ভাষায় ইন্টারফেস
- প্লেয়ারের আকার ও অস্বচ্ছতা নিয়ন্ত্রণযোগ্য এবং প্রতিটি প্রোফাইলে আলাদাভাবে সংরক্ষিত
- শিরোনাম, শিল্পী, অগ্রগতি ও অ্যালবাম কভারসহ সংযুক্ত Spotify বা Windows লোকাল শনাক্তকরণ; Spotify সীমা স্বয়ংক্রিয়ভাবে সামলানো হয়
- লোকাল ডেমো মোড (Spotify অ্যাকাউন্ট লাগে না)
- GitHub Releases থেকে ইন-অ্যাপ আপডেট (`data/` রাখা হয়)

## চালানো

[Node.js](https://nodejs.org) লাগবে।

```bash
npm install
npm start
```

খুলুন http://127.0.0.1:3000

Windows-এ `start.bat`-এ ডাবল-ক্লিকও করা যায়।

ড্যাশবোর্ড থেকে সার্ভার থামান (সাইডবারে **সার্ভার থামান**) বা `stop.bat` দিয়ে।

নতুন GitHub রিলিজ এলে ড্যাশবোর্ড **এখনই আপডেট** দেখায়। `data/`-এর Spotify ডেটা থাকে।

## OBS

1. সোর্স → ব্রাউজার
2. নাম: `HopPlay`
3. ড্যাশবোর্ডের URL
4. সাইজ `1920 × 1080`
5. ব্যাকগ্রাউন্ড স্বচ্ছ

## Spotify (ঐচ্ছিক)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)-এ অ্যাপ তৈরি করুন
2. রিডাইরেক্ট URI (হুবহু):

```
http://127.0.0.1:3000/callback
```

3. ড্যাশবোর্ডে Client ID ও Client Secret পেস্ট করুন
4. অনুমতি দিন, তারপর গান চালান

সিক্রেট কমিট করবেন না। Client ID / Client Secret শুধু নিজের কম্পিউটারে রাখুন (`data/` gitignore-এ)।

## লাইসেন্স

MIT © GalaxyBunny Studio
