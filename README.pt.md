# HopPlay

🌐 **Language / Langue**

| [🇬🇧 English](README.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇩🇪 Deutsch](README.de.md) |
| --- | --- | --- | --- | --- |
| [🇮🇹 Italiano](README.it.md) | [🇳🇱 Nederlands](README.nl.md) | [🇵🇱 Polski](README.pl.md) | [🇷🇺 Русский](README.ru.md) | [🇺🇦 Українська](README.uk.md) |
| [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md) | [🇹🇷 Türkçe](README.tr.md) |
| [🇮🇳 हिन्दी](README.hi.md) | [🇧🇩 বাংলা](README.bn.md) | [🇮🇩 Bahasa Indonesia](README.id.md) | [🇻🇳 Tiếng Việt](README.vi.md) | [🇹🇭 ไทย](README.th.md) |
| [🇸🇪 Svenska](README.sv.md) | [🇳🇴 Norsk](README.no.md) | [🇩🇰 Dansk](README.da.md) | [🇫🇮 Suomi](README.fi.md) | [🇨🇿 Čeština](README.cs.md) |
| [🇷🇴 Română](README.ro.md) | [🇬🇷 Ελληνικά](README.el.md) | [🇭🇺 Magyar](README.hu.md) | [🇮🇱 עברית](README.he.md) | [🇲🇾 Melayu](README.ms.md) |

**v1.8.0** — overlay now playing para OBS, Streamlabs e outras fontes de navegador.

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
