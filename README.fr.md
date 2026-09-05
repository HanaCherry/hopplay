# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

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
