# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing για OBS, Streamlabs και άλλες πηγές προγράμματος περιήγησης.

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
- Ρυθμιζόμενο μέγεθος και αδιαφάνεια αναπαραγωγής, αποθηκευμένα ξεχωριστά για κάθε προφίλ
- Επιλογή συνδεδεμένου Spotify ή τοπικής ανίχνευσης Windows με τίτλο, καλλιτέχνη, πρόοδο και εξώφυλλο· τα όρια του Spotify διαχειρίζονται αυτόματα
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
