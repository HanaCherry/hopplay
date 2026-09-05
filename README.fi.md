# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — now playing -overlay OBS:lle, Streamlabsille ja muille selainlähteille.

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
