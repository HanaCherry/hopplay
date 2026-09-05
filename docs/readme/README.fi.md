# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — now playing -overlay OBS:lle, Streamlabsille ja muille selainlähteille.

**Tekijä [GalaxyBunny Studio](https://github.com/HanaCherry)**

Toista kappale Spotifyssa (valinnainen) tai käytä demotilaa, valitse ulkoasu ja kopioi overlay-URL OBS:ään.

## Ominaisuudet

- 61 soitinulkoasua (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ja muita)
- Kansi: neliö, Canvas, vinyyli, ei kantta
- Taikavärit, kannen hehku, soittimen hehku, sumennus, visualisoija
- 9 overlay-sijaintia
- Piilota tauolla / näytä vain kappaleen vaihtuessa
- Esiin- ja poisefektit (fade, slide, scale, pop, blur) ajoituksella
- Enintään 5 profiilia, kullakin oma OBS-URL
- Käyttöliittymä 30 kielellä
- Säädettävä soittimen koko ja läpinäkyvyys, jotka tallennetaan erikseen jokaiseen profiiliin
- Valitse yhdistetty Spotify tai Windowsin paikallinen tunnistus, joka näyttää kappaleen, artistin, etenemisen ja kansikuvan; Spotify-rajoitukset käsitellään automaattisesti
- Paikallinen demotila (Spotify-tiliä ei tarvita)
- Päivitykset GitHub Releasesistä (`data/` säilytetään)

## Käynnistys

Tarvitset [Node.js](https://nodejs.org)-ympäristön.

```bash
npm install
npm start
```

Avaa http://127.0.0.1:3000

Windowsissa voit myös kaksoisnapsauttaa tiedostoa `start.bat`.

Pysäytä palvelin kojituspaneelista (**Pysäytä palvelin** sivupalkissa) tai komennolla `stop.bat`.

Kun GitHubissa julkaistaan uusi versio, paneeli tarjoaa **Päivitä nyt**. Spotify-tiedot kansiossa `data/` säilyvät.

## OBS

1. Lähde → Selain
2. Nimi: `HopPlay`
3. URL paneelista
4. Koko `1920 × 1080`
5. Tausta on läpinäkyvä

## Spotify (valinnainen)

1. Luo sovellus [Spotify Developer Dashboardissa](https://developer.spotify.com/dashboard)
2. Uudelleenohjaus-URI (tarkalleen):

```
http://127.0.0.1:3000/callback
```

3. Liitä Client ID ja Client Secret paneeliin
4. Valtuuta ja toista kappale

Älä committoi salaisuuksia. Pidä Client ID / Client Secret vain omalla koneellasi (`data/` on `.gitignore`-tiedostossa).

## Lisenssi

MIT © GalaxyBunny Studio
