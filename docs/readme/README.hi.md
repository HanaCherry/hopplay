# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — OBS, Streamlabs और अन्य ब्राउज़र स्रोतों के लिए नाउ-प्लेइंग ओवरले।

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
- प्लेयर का आकार और अपारदर्शिता समायोज्य हैं और हर प्रोफ़ाइल के लिए अलग सहेजे जाते हैं
- शीर्षक, कलाकार, प्रगति और एल्बम कवर के साथ कनेक्टेड Spotify या Windows लोकल पहचान का विकल्प; Spotify सीमाएँ अपने आप संभाली जाती हैं
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
