# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing για OBS, Streamlabs και άλλες πηγές προγράμματος περιήγησης.

**Από [GalaxyBunny Studio](https://github.com/HanaCherry)**

Παίξτε ένα κομμάτι στο Spotify (προαιρετικά) ή χρησιμοποιήστε τη λειτουργία επίδειξης, διαλέξτε εμφάνιση και αντιγράψτε το URL του overlay στο OBS.

## Χαρακτηριστικά

- 61 εμφανίσεις player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade και άλλες)
- Εξώφυλλο: τετράγωνο, Canvas, βινύλιο, κανένα
- Μαγικά χρώματα, λάμψη εξωφύλλου, λάμψη player, θόλωμα, visualizer
- 9 θέσεις overlay
- Απόκρυψη στην παύση / εμφάνιση μόνο στην αλλαγή κομματιού
- Εφέ εμφάνισης και απόκρυψης (fade, slide, scale, pop, blur) με χρονισμό
- Έως 5 προφίλ, το καθένα με δικό του URL OBS
- Διεπαφή σε 30 γλώσσες
- Τοπική λειτουργία επίδειξης (δεν χρειάζεται λογαριασμός Spotify)
- Ενημερώσεις από GitHub Releases (το `data/` διατηρείται)

## Εκτέλεση

Χρειάζεται [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Ανοίξτε το http://127.0.0.1:3000

Στα Windows μπορείτε επίσης να κάνετε διπλό κλικ στο `start.bat`.

Σταματήστε τον διακομιστή από τον πίνακα (**Διακοπή διακομιστή** στην πλαϊνή μπάρα) ή με το `stop.bat`.

Όταν βγαίνει νέο GitHub release, ο πίνακας προτείνει **Ενημέρωση τώρα**. Τα δεδομένα Spotify στο `data/` μένουν.

## OBS

1. Πηγή → Πρόγραμμα περιήγησης
2. Όνομα: `HopPlay`
3. URL από τον πίνακα
4. Μέγεθος `1920 × 1080`
5. Το φόντο είναι διαφανές

## Spotify (προαιρετικό)

1. Δημιουργήστε εφαρμογή στο [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI ανακατεύθυνσης (ακριβώς):

```
http://127.0.0.1:3000/callback
```

3. Επικολλήστε Client ID και Client Secret στον πίνακα
4. Εξουσιοδοτήστε και παίξτε ένα κομμάτι

Μην κάνετε commit μυστικά. Κρατήστε Client ID / Client Secret μόνο στον υπολογιστή σας (`data/` στο `.gitignore`).

## Άδεια

MIT © GalaxyBunny Studio
