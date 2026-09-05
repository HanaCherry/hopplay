# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](../../README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing para OBS, Streamlabs y otras fuentes de navegador.

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
