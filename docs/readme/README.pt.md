# HopPlay

🌐 **Language / Langue**

| [:gb: English](../../README.md) | [:fr: Français](README.fr.md) | [:es: Español](README.es.md) | [:portugal: Português](README.pt.md) | [:de: Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [:it: Italiano](README.it.md) | [:netherlands: Nederlands](README.nl.md) | [:poland: Polski](README.pl.md) | [:ru: Русский](README.ru.md) | [:ukraine: Українська](README.uk.md) |
| [:jp: 日本語](README.ja.md) | [:kr: 한국어](README.ko.md) | [:cn: 中文](README.zh.md) | [:saudi_arabia: العربية](README.ar.md) | [:tr: Türkçe](README.tr.md) |
| [:india: हिन्दी](README.hi.md) | [:bangladesh: বাংলা](README.bn.md) | [:indonesia: Bahasa Indonesia](README.id.md) | [:vietnam: Tiếng Việt](README.vi.md) | [:thailand: ไทย](README.th.md) |
| [:sweden: Svenska](README.sv.md) | [:norway: Norsk](README.no.md) | [:denmark: Dansk](README.da.md) | [:finland: Suomi](README.fi.md) | [:czech_republic: Čeština](README.cs.md) |
| [:romania: Română](README.ro.md) | [:greece: Ελληνικά](README.el.md) | [:hungary: Magyar](README.hu.md) | [:israel: עברית](README.he.md) | [:malaysia: Melayu](README.ms.md) |

**v1.8.1** — overlay now playing para OBS, Streamlabs e outras fontes de navegador.

**Por [GalaxyBunny Studio](https://github.com/HanaCherry)**

Toca uma faixa no Spotify (opcional) ou usa o modo demo, escolhe um visual e copia o URL do overlay no OBS.

## Funcionalidades

- 61 skins de player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade e mais)
- Capa: quadrada, Canvas, vinil, nenhuma
- Cores mágicas, brilho da capa, brilho do player, desfoque, visualizador
- 9 posições do overlay
- Ocultar na pausa / mostrar só na troca de faixa
- Efeitos de aparecer e esconder (fade, slide, escala, pop, desfoque) com tempos
- Até 5 perfis, cada um com o seu URL do OBS
- Interface em 30 idiomas
- Modo demo local (sem conta Spotify)
- Atualizações a partir de GitHub Releases (`data/` é mantido)

## Executar

Precisas de [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Abre http://127.0.0.1:3000

No Windows também podes fazer duplo clique em `start.bat`.

Para o servidor no painel (**Parar servidor** na barra lateral) ou com `stop.bat`.

Quando sai uma nova release no GitHub, o painel oferece **Atualizar agora**. Os dados do Spotify em `data/` são mantidos.

## OBS

1. Fonte → Navegador
2. Nome: `HopPlay`
3. URL do painel
4. Tamanho `1920 × 1080`
5. O fundo é transparente

## Spotify (opcional)

1. Cria uma app no [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI de redirecionamento (exata):

```
http://127.0.0.1:3000/callback
```

3. Cola o Client ID e o Client Secret no painel
4. Autoriza e toca uma faixa

Não faças commit de segredos. Mantém o Client ID / Client Secret só no teu PC (`data/` está no `.gitignore`).

## Licença

MIT © GalaxyBunny Studio
