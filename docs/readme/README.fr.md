# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.0** — overlay now playing pour OBS, Streamlabs et les autres sources navigateur.

**Par [GalaxyBunny Studio](https://github.com/HanaCherry)**

Lance un titre sur Spotify (optionnel) ou utilise le mode démo, choisis un skin, copie l’URL de l’overlay dans OBS.

## Fonctionnalités

- 61 skins de player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade, et plus)
- Pochettes : carrée, Canvas, vinyle, aucune
- Couleurs magiques, lueur de pochette, lueur du player, flou, visualiseur
- 9 positions d’overlay
- Masquer à la pause / afficher seulement au changement de titre
- Effets d’apparition et de disparition (fondu, glissement, zoom, pop, flou) avec durées
- Jusqu’à 5 profils, chacun avec son URL OBS
- Interface en 30 langues
- Mode démo local (pas besoin de compte Spotify)
- Mises à jour depuis GitHub Releases (`data/` est conservé)

## Lancer

Il faut [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Ouvre http://127.0.0.1:3000

Sous Windows, tu peux aussi double-cliquer sur `start.bat`.

Arrête le serveur depuis le dashboard (**Arrêter le serveur** dans la barre latérale) ou avec `stop.bat`.

Quand une nouvelle release GitHub est publiée, le dashboard propose **Mettre à jour**. Tes données Spotify dans `data/` sont conservées.

## OBS

1. Source → Navigateur
2. Nom : `HopPlay`
3. URL indiquée dans le dashboard
4. Taille `1920 × 1080`
5. Le fond est transparent

## Spotify (optionnel)

1. Crée une app sur le [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI de redirection (exacte) :

```
http://127.0.0.1:3000/callback
```

3. Colle le Client ID et le Client Secret dans le dashboard
4. Autorise, puis lance un titre

Ne commite pas les secrets. Garde le Client ID / Client Secret sur ta machine (`data/` est dans `.gitignore`).

## Licence

MIT © GalaxyBunny Studio
