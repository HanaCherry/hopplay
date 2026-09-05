# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing para OBS, Streamlabs y otras fuentes de navegador.

**Por [GalaxyBunny Studio](https://github.com/HanaCherry)**

Reproduce un tema en Spotify (opcional) o usa el modo demo, elige un estilo y copia la URL del overlay en OBS.

## Funciones

- 61 skins de reproductor (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade y más)
- Portada: cuadrada, Canvas, vinilo, ninguna
- Colores mágicos, brillo de portada, brillo del reproductor, desenfoque, visualizador
- 9 posiciones del overlay
- Ocultar al pausar / mostrar solo al cambiar de canción
- Efectos de aparición y desaparición (fundido, desliz, escala, pop, desenfoque) con tiempos
- Hasta 5 perfiles, cada uno con su URL de OBS
- Interfaz en 30 idiomas
- Modo demo local (no hace falta cuenta de Spotify)
- Actualizaciones desde GitHub Releases (se conserva `data/`)

## Ejecutar

Necesitas [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Abre http://127.0.0.1:3000

En Windows también puedes hacer doble clic en `start.bat`.

Detén el servidor desde el panel (**Detener servidor** en la barra lateral) o con `stop.bat`.

Cuando hay una nueva release en GitHub, el panel ofrece **Actualizar ahora**. Tus datos de Spotify en `data/` se conservan.

## OBS

1. Fuente → Navegador
2. Nombre: `HopPlay`
3. URL del panel
4. Tamaño `1920 × 1080`
5. El fondo es transparente

## Spotify (opcional)

1. Crea una app en el [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI de redirección (exacta):

```
http://127.0.0.1:3000/callback
```

3. Pega el Client ID y el Client Secret en el panel
4. Autoriza y reproduce un tema

No subas secretos. Deja el Client ID / Client Secret solo en tu PC (`data/` está en `.gitignore`).

## Licencia

MIT © GalaxyBunny Studio
