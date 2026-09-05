# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — OBS, Streamlabs और अन्य ब्राउज़र स्रोतों के लिए नाउ-प्लेइंग ओवरले।

**द्वारा [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify पर गाना चलाएँ (वैकल्पिक) या डेमो मोड इस्तेमाल करें, स्किन चुनें, ओवरले URL OBS में कॉपी करें।

## विशेषताएँ

- 61 प्लेयर स्किन (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade और अन्य)
- कवर: वर्ग, Canvas, विनाइल, कोई नहीं
- मैजिक रंग, कवर ग्लो, प्लेयर ग्लो, ब्लर, विज़ुअलाइज़र
- 9 ओवरले स्थितियाँ
- पॉज़ पर छिपाएँ / केवल गाना बदलने पर दिखाएँ
- दिखने और छिपने के इफ़ेक्ट (फे़ड, स्लाइड, स्केल, पॉप, ब्लर) और समय
- अधिकतम 5 प्रोफ़ाइल, हर एक का अलग OBS URL
- 30 भाषाओं में इंटरफ़ेस
- लोकल डेमो मोड (Spotify खाता ज़रूरी नहीं)
- GitHub Releases से इन-ऐप अपडेट (`data/` सुरक्षित रहता है)

## चलाएँ

[Node.js](https://nodejs.org) चाहिए।

```bash
npm install
npm start
```

http://127.0.0.1:3000 खोलें

Windows पर `start.bat` पर डबल-क्लिक भी कर सकते हैं।

डैशबोर्ड से सर्वर रोकें (साइडबार में **सर्वर रोकें**) या `stop.bat` से।

नया GitHub रिलीज़ आने पर डैशबोर्ड **अभी अपडेट करें** दिखाता है। `data/` में Spotify डेटा रहता है।

## OBS

1. स्रोत → ब्राउज़र
2. नाम: `HopPlay`
3. डैशबोर्ड वाला URL
4. आकार `1920 × 1080`
5. पृष्ठभूमि पारदर्शी है

## Spotify (वैकल्पिक)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) पर ऐप बनाएँ
2. रीडायरेक्ट URI (exact):

```
http://127.0.0.1:3000/callback
```

3. डैशबोर्ड में Client ID और Client Secret चिपकाएँ
4. अनुमति दें, फिर गाना चलाएँ

सीक्रेट कमिट न करें। Client ID / Client Secret अपने कंप्यूटर पर ही रखें (`data/` gitignore में है)।

## लाइसेंस

MIT © GalaxyBunny Studio
