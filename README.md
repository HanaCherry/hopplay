# HopPlay

🌐 **Choisis ta langue · Choose your language**

Clique sur une langue pour lire la présentation ici, sans quitter la page.
Click a language to read the presentation here, without leaving this page.

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v8" width="20" height="20" alt=":gb:"> <strong>English</strong></summary>

**v1.8.1** — now-playing overlay for OBS, Streamlabs, and other browser sources.

**By [GalaxyBunny Studio](https://github.com/HanaCherry)**

Play a track on Spotify (optional) or use demo mode, pick a player skin, copy the overlay URL into OBS.

## Features

- 61 player skins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade, and more)
- Cover modes: Square, Canvas, Vinyl, None
- Magic colors, cover glow, player glow, cover blur, visualizer
- 9 overlay positions
- Hide on pause / show only on song change
- Appear and hide effects (fade, slide, scale, pop, blur) with timing
- Up to 5 profiles with separate OBS URLs
- UI in 30 languages
- Adjustable player size and opacity, saved separately for each profile
- Choice of connected Spotify or Windows local detection, including title, artist, progress and album artwork; Spotify rate limits are handled automatically
- Local demo mode (no Spotify account required)
- In-app updates from GitHub Releases (`data/` is kept)

## Run

Needs [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Open http://127.0.0.1:3000

On Windows you can also double-click `start.bat`.

Stop the server from the dashboard (**Stop server** in the sidebar) or with `stop.bat`.

When a new GitHub release is published, the dashboard offers **Update now**. Your Spotify data in `data/` is kept.

## OBS

### Galaxy Bunny mini-player

Choose **Galaxy Bunny** in the dashboard's player skins. The supplied transparent
Galaxy Bunny artwork is used unchanged, with a live cover, title, artist and
seekable progress bar overlaid on the empty area. The skin has no central transport
buttons, matching the selected reference. Missing cover images fall back to the
HopPlay logo.

Seeking uses the existing Spotify session and active device, without creating
another audio player. Reconnect Spotify after updating to grant
`user-modify-playback-state`. Spotify commands require Premium and an active
device. In OBS, use **Interact** to operate the seek slider.
Without Spotify, the existing demo simulates playback silently, including pause,
seek, previous/next, shuffle and repeat (off → all → track). No audio is streamed
in demo mode. Run `npm test` for playback regression tests.

1. Source → Browser
2. Name: `HopPlay`
3. URL from the dashboard
4. Size `1920 × 1080`
5. Background is transparent

## Spotify (optional)

1. Create an app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (exact):

```
http://127.0.0.1:3000/callback
```

3. Paste Client ID and Client Secret in the dashboard
4. Authorize, then play a track

Do not commit secrets. Keep Client ID / Client Secret on your machine only (`data/` is gitignored).

## License

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f7.png?v8" width="20" height="20" alt=":fr:"> <strong>Français</strong></summary>

**v1.8.1** — overlay now playing pour OBS, Streamlabs et les autres sources navigateur.

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
- Taille et opacité du lecteur réglables, enregistrées séparément pour chaque profil
- Choix entre Spotify connecté et la détection locale Windows, avec titre, artiste, progression et pochette d’album ; les limitations Spotify sont gérées automatiquement
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

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f8.png?v8" width="20" height="20" alt=":es:"> <strong>Español</strong></summary>

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
- Tamaño y opacidad del reproductor ajustables, guardados por separado para cada perfil
- Elección entre Spotify conectado y detección local de Windows, con título, artista, progreso y portada; los límites de Spotify se gestionan automáticamente
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

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f9.png?v8" width="20" height="20" alt=":portugal:"> <strong>Português</strong></summary>

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
- Tamanho e opacidade do leitor ajustáveis, guardados separadamente em cada perfil
- Escolha entre Spotify ligado e deteção local do Windows, com título, artista, progresso e capa do álbum; os limites do Spotify são geridos automaticamente
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

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ea.png?v8" width="20" height="20" alt=":de:"> <strong>Deutsch</strong></summary>

**v1.8.1** — Now-Playing-Overlay für OBS, Streamlabs und andere Browserquellen.

**Von [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spiele einen Titel auf Spotify (optional) oder nutze den Demo-Modus, wähle ein Skin und kopiere die Overlay-URL in OBS.

## Funktionen

- 61 Player-Skins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade und mehr)
- Cover: Quadrat, Canvas, Vinyl, keins
- Magic Colors, Cover-Glow, Player-Glow, Cover-Blur, Visualizer
- 9 Overlay-Positionen
- Bei Pause ausblenden / nur bei Titelwechsel anzeigen
- Ein- und Ausblendeffekte (Fade, Slide, Scale, Pop, Blur) mit Timing
- Bis zu 5 Profile mit eigenen OBS-URLs
- Oberfläche in 30 Sprachen
- Einstellbare Playergröße und Deckkraft, separat für jedes Profil gespeichert
- Wahl zwischen verbundenem Spotify und lokaler Windows-Erkennung mit Titel, Künstler, Fortschritt und Albumcover; Spotify-Limits werden automatisch behandelt
- Lokaler Demo-Modus (kein Spotify-Konto nötig)
- Updates aus GitHub Releases (`data/` bleibt erhalten)

## Starten

Benötigt [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Öffne http://127.0.0.1:3000

Unter Windows kannst du auch auf `start.bat` doppelklicken.

Stoppe den Server im Dashboard (**Server stoppen** in der Seitenleiste) oder mit `stop.bat`.

Wenn ein neues GitHub-Release erscheint, bietet das Dashboard **Jetzt aktualisieren**. Deine Spotify-Daten in `data/` bleiben erhalten.

## OBS

1. Quelle → Browser
2. Name: `HopPlay`
3. URL aus dem Dashboard
4. Größe `1920 × 1080`
5. Der Hintergrund ist transparent

## Spotify (optional)

1. Erstelle eine App im [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (genau):

```
http://127.0.0.1:3000/callback
```

3. Client ID und Client Secret im Dashboard einfügen
4. Autorisieren, dann einen Titel abspielen

Keine Secrets committen. Client ID / Client Secret nur lokal speichern (`data/` steht in `.gitignore`).

## Lizenz

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f9.png?v8" width="20" height="20" alt=":it:"> <strong>Italiano</strong></summary>

**v1.8.1** — overlay now playing per OBS, Streamlabs e altre sorgenti browser.

**Di [GalaxyBunny Studio](https://github.com/HanaCherry)**

Riproduci un brano su Spotify (opzionale) o usa la modalità demo, scegli uno skin e copia l’URL dell’overlay in OBS.

## Funzioni

- 61 skin del player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade e altro)
- Copertina: quadrata, Canvas, vinile, nessuna
- Colori magici, bagliore copertina, bagliore player, sfocatura, visualizer
- 9 posizioni dell’overlay
- Nascondi in pausa / mostra solo al cambio brano
- Effetti di comparsa e scomparsa (fade, slide, scale, pop, blur) con tempi
- Fino a 5 profili, ognuno con il proprio URL OBS
- Interfaccia in 30 lingue
- Dimensione e opacità del lettore regolabili e salvate separatamente per ogni profilo
- Scelta tra Spotify connesso e rilevamento locale di Windows, con titolo, artista, avanzamento e copertina; i limiti Spotify vengono gestiti automaticamente
- Modalità demo locale (nessun account Spotify)
- Aggiornamenti da GitHub Releases (`data/` viene conservato)

## Avvio

Serve [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Apri http://127.0.0.1:3000

Su Windows puoi anche fare doppio clic su `start.bat`.

Ferma il server dal pannello (**Ferma server** nella barra laterale) o con `stop.bat`.

Quando esce una nuova release su GitHub, il pannello propone **Aggiorna ora**. I dati Spotify in `data/` restano.

## OBS

1. Sorgente → Browser
2. Nome: `HopPlay`
3. URL dal pannello
4. Dimensione `1920 × 1080`
5. Lo sfondo è trasparente

## Spotify (opzionale)

1. Crea un’app nel [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI di reindirizzamento (esatto):

```
http://127.0.0.1:3000/callback
```

3. Incolla Client ID e Client Secret nel pannello
4. Autorizza, poi riproduci un brano

Non committare i segreti. Tieni Client ID / Client Secret solo sul PC (`data/` è in `.gitignore`).

## Licenza

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f1.png?v8" width="20" height="20" alt=":netherlands:"> <strong>Nederlands</strong></summary>

**v1.8.1** — now-playing overlay voor OBS, Streamlabs en andere bronnen in de browser.

**Door [GalaxyBunny Studio](https://github.com/HanaCherry)**

Speel een nummer op Spotify (optioneel) of gebruik de demomodus, kies een skin en kopieer de overlay-URL naar OBS.

## Functies

- 61 playerskins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade en meer)
- Cover: vierkant, Canvas, vinyl, geen
- Magic colors, coverglow, playerglow, coverblur, visualizer
- 9 overlayposities
- Verbergen bij pauze / alleen tonen bij nummerwissel
- In- en uitfadeneffecten (fade, slide, scale, pop, blur) met timing
- Tot 5 profielen, elk met een eigen OBS-URL
- Interface in 30 talen
- Instelbare spelergrootte en dekking, afzonderlijk opgeslagen per profiel
- Keuze tussen verbonden Spotify en lokale Windows-detectie, met titel, artiest, voortgang en albumhoes; Spotify-limieten worden automatisch afgehandeld
- Lokale demomodus (geen Spotify-account nodig)
- Updates via GitHub Releases (`data/` blijft bewaard)

## Starten

Vereist [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Open http://127.0.0.1:3000

Op Windows kun je ook dubbelklikken op `start.bat`.

Stop de server via het dashboard (**Server stoppen** in de zijbalk) of met `stop.bat`.

Als er een nieuwe GitHub-release is, biedt het dashboard **Nu updaten**. Je Spotify-gegevens in `data/` blijven bewaard.

## OBS

1. Bron → Browser
2. Naam: `HopPlay`
3. URL uit het dashboard
4. Formaat `1920 × 1080`
5. De achtergrond is transparant

## Spotify (optioneel)

1. Maak een app in het [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (exact):

```
http://127.0.0.1:3000/callback
```

3. Plak Client ID en Client Secret in het dashboard
4. Autoriseer en speel een nummer

Commit geen geheimen. Houd Client ID / Client Secret alleen lokaal (`data/` staat in `.gitignore`).

## Licentie

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f1.png?v8" width="20" height="20" alt=":poland:"> <strong>Polski</strong></summary>

**v1.8.1** — nakładka now playing dla OBS, Streamlabs i innych źródeł przeglądarki.

**Od [GalaxyBunny Studio](https://github.com/HanaCherry)**

Odtwórz utwór na Spotify (opcjonalnie) albo użyj trybu demo, wybierz skórkę i skopiuj URL nakładki do OBS.

## Funkcje

- 61 skórek odtwarzacza (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade i więcej)
- Okładka: kwadrat, Canvas, winyl, brak
- Magiczne kolory, poświata okładki, poświata odtwarzacza, rozmycie, wizualizer
- 9 pozycji nakładki
- Ukryj przy pauzie / pokazuj tylko przy zmianie utworu
- Efekty pojawiania i znikania (fade, slide, scale, pop, blur) z czasem
- Do 5 profili, każdy z własnym URL OBS
- Interfejs w 30 językach
- Regulowany rozmiar i przezroczystość odtwarzacza, zapisywane osobno dla każdego profilu
- Wybór między połączonym Spotify a lokalnym wykrywaniem Windows, z tytułem, wykonawcą, postępem i okładką; limity Spotify są obsługiwane automatycznie
- Lokalny tryb demo (konto Spotify nie jest wymagane)
- Aktualizacje z GitHub Releases (`data/` zostaje)

## Uruchomienie

Potrzebujesz [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Otwórz http://127.0.0.1:3000

W Windows możesz też kliknąć dwukrotnie `start.bat`.

Zatrzymaj serwer w panelu (**Zatrzymaj serwer** na pasku bocznym) albo przez `stop.bat`.

Gdy pojawi się nowe wydanie na GitHubie, panel oferuje **Aktualizuj teraz**. Dane Spotify w `data/` zostają.

## OBS

1. Źródło → Przeglądarka
2. Nazwa: `HopPlay`
3. URL z panelu
4. Rozmiar `1920 × 1080`
5. Tło jest przezroczyste

## Spotify (opcjonalnie)

1. Utwórz aplikację w [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI przekierowania (dokładnie):

```
http://127.0.0.1:3000/callback
```

3. Wklej Client ID i Client Secret w panelu
4. Autoryzuj, potem odtwórz utwór

Nie commituj sekretów. Client ID / Client Secret trzymaj tylko na swoim komputerze (`data/` jest w `.gitignore`).

## Licencja

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1fa.png?v8" width="20" height="20" alt=":ru:"> <strong>Русский</strong></summary>

**v1.8.1** — оверлей now playing для OBS, Streamlabs и других браузерных источников.

**От [GalaxyBunny Studio](https://github.com/HanaCherry)**

Включите трек в Spotify (по желанию) или демо-режим, выберите скин и скопируйте URL оверлея в OBS.

## Возможности

- 61 скин плеера (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade и другие)
- Обложка: квадрат, Canvas, винил, без обложки
- Магические цвета, свечение обложки, свечение плеера, размытие, визуализатор
- 9 позиций оверлея
- Скрывать на паузе / показывать только при смене трека
- Эффекты появления и скрытия (fade, slide, scale, pop, blur) с таймингом
- До 5 профилей, у каждого свой URL для OBS
- Интерфейс на 30 языках
- Настраиваемые размер и прозрачность плеера, сохраняемые отдельно для каждого профиля
- Выбор между подключённым Spotify и локальным обнаружением Windows с названием, исполнителем, прогрессом и обложкой; ограничения Spotify обрабатываются автоматически
- Локальный демо-режим (аккаунт Spotify не нужен)
- Обновления из GitHub Releases (папка `data/` сохраняется)

## Запуск

Нужен [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Откройте http://127.0.0.1:3000

В Windows можно дважды щёлкнуть `start.bat`.

Остановите сервер в панели (**Остановить сервер** в боковом меню) или через `stop.bat`.

Когда выходит новый релиз на GitHub, панель предлагает **Обновить**. Данные Spotify в `data/` сохраняются.

## OBS

1. Источник → Браузер
2. Имя: `HopPlay`
3. URL из панели
4. Размер `1920 × 1080`
5. Фон прозрачный

## Spotify (по желанию)

1. Создайте приложение в [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (точно):

```
http://127.0.0.1:3000/callback
```

3. Вставьте Client ID и Client Secret в панели
4. Авторизуйтесь и включите трек

Не коммитьте секреты. Храните Client ID / Client Secret только у себя (`data/` в `.gitignore`).

## Лицензия

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png?v8" width="20" height="20" alt=":ukraine:"> <strong>Українська</strong></summary>

**v1.8.1** — оверлей now playing для OBS, Streamlabs та інших браузерних джерел.

**Від [GalaxyBunny Studio](https://github.com/HanaCherry)**

Увімкніть трек у Spotify (за бажанням) або демо-режим, оберіть скін і скопіюйте URL оверлея в OBS.

## Можливості

- 61 скін плеєра (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade тощо)
- Обкладинка: квадрат, Canvas, вініл, без обкладинки
- Магічні кольори, сяйво обкладинки, сяйво плеєра, розмиття, візуалізатор
- 9 позицій оверлея
- Ховати на паузі / показувати лише при зміні треку
- Ефекти появи та зникнення (fade, slide, scale, pop, blur) з таймінгом
- До 5 профілів, кожен зі своїм URL для OBS
- Інтерфейс 30 мовами
- Регульовані розмір і прозорість програвача, що зберігаються окремо для кожного профілю
- Вибір між підключеним Spotify і локальним виявленням Windows із назвою, виконавцем, прогресом та обкладинкою; обмеження Spotify обробляються автоматично
- Локальний демо-режим (акаунт Spotify не потрібен)
- Оновлення з GitHub Releases (папка `data/` зберігається)

## Запуск

Потрібен [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Відкрийте http://127.0.0.1:3000

У Windows можна двічі клацнути `start.bat`.

Зупиніть сервер у панелі (**Зупинити сервер** в бічному меню) або через `stop.bat`.

Коли з’являється новий реліз на GitHub, панель пропонує **Оновити зараз**. Дані Spotify в `data/` зберігаються.

## OBS

1. Джерело → Браузер
2. Назва: `HopPlay`
3. URL з панелі
4. Розмір `1920 × 1080`
5. Тло прозоре

## Spotify (за бажанням)

1. Створіть застосунок у [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (точно):

```
http://127.0.0.1:3000/callback
```

3. Вставте Client ID і Client Secret у панелі
4. Авторизуйтесь і увімкніть трек

Не комітьте секрети. Зберігайте Client ID / Client Secret лише локально (`data/` у `.gitignore`).

## Ліцензія

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f5.png?v8" width="20" height="20" alt=":jp:"> <strong>日本語</strong></summary>

**v1.8.1** — OBS、Streamlabs、その他のブラウザソース向けナウプレイングオーバーレイ。

**制作 [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify で曲を再生する（任意）かデモモードを使い、スキンを選んでオーバーレイ URL を OBS に貼ります。

## 機能

- プレイヤースキン 61 種（Galaxy Bunny、kawaii、chrome、walkman、film、sakura、tarot、arcade など）
- ジャケット：スクエア、Canvas、レコード、なし
- マジックカラー、ジャケットグロー、プレイヤーグロー、ブラー、ビジュアライザー
- オーバーレイ位置 9 か所
- 一時停止で非表示 / 曲変更時だけ表示
- 表示・非表示エフェクト（フェード、スライド、スケール、ポップ、ブラー）と時間設定
- 最大 5 プロファイル、それぞれ別の OBS URL
- UI は 30 言語
- プレーヤーのサイズと不透明度を調整でき、プロファイルごとに個別保存
- 接続済みSpotifyまたはWindowsローカル検出を選択可能。タイトル、アーティスト、進行状況、アルバム画像に対応し、Spotifyの制限も自動処理
- ローカルデモモード（Spotify アカウント不要）
- GitHub Releases からのアプリ内更新（`data/` は保持）

## 起動

[Node.js](https://nodejs.org) が必要です。

```bash
npm install
npm start
```

http://127.0.0.1:3000 を開く

Windows では `start.bat` をダブルクリックしても起動できます。

ダッシュボードのサイドバー **サーバーを停止**、または `stop.bat` で停止します。

新しい GitHub リリースがあると、ダッシュボードに **今すぐ更新** が出ます。`data/` の Spotify データは残ります。

## OBS

1. ソース → ブラウザ
2. 名前: `HopPlay`
3. ダッシュボードの URL
4. サイズ `1920 × 1080`
5. 背景は透明

## Spotify（任意）

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) でアプリを作成
2. リダイレクト URI（完全一致）:

```
http://127.0.0.1:3000/callback
```

3. ダッシュボードに Client ID と Client Secret を貼る
4. 認可してから曲を再生

シークレットをコミットしないでください。Client ID / Client Secret は自分の PC だけに置きます（`data/` は gitignore 済み）。

## ライセンス

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f7.png?v8" width="20" height="20" alt=":kr:"> <strong>한국어</strong></summary>

**v1.8.1** — OBS, Streamlabs 및 기타 브라우저 소스용 나우 플레잉 오버레이.

**제작 [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify에서 곡을 재생하거나(선택) 데모 모드를 쓰고, 스킨을 고른 뒤 오버레이 URL을 OBS에 넣으세요.

## 기능

- 플레이어 스킨 61종 (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade 등)
- 커버: 정사각, Canvas, 바이닐, 없음
- 매직 컬러, 커버 글로우, 플레이어 글로우, 블러, 비주얼라이저
- 오버레이 위치 9곳
- 일시정지 시 숨김 / 곡 변경 때만 표시
- 나타남·숨김 효과(페이드, 슬라이드, 스케일, 팝, 블러)와 시간 설정
- 프로필 최대 5개, 각각 다른 OBS URL
- UI 30개 언어
- 플레이어 크기와 불투명도를 조절하고 프로필별로 개별 저장
- 연결된 Spotify 또는 Windows 로컬 감지를 선택하고 제목, 아티스트, 진행률, 앨범 이미지를 표시하며 Spotify 제한을 자동 처리
- 로컬 데모 모드 (Spotify 계정 불필요)
- GitHub Releases로 앱 내 업데이트 (`data/` 유지)

## 실행

[Node.js](https://nodejs.org)가 필요합니다.

```bash
npm install
npm start
```

http://127.0.0.1:3000 을 여세요

Windows에서는 `start.bat`을 더블 클릭해도 됩니다.

대시보드 사이드바의 **서버 중지** 또는 `stop.bat`으로 서버를 멈춥니다.

새 GitHub 릴리스가 있으면 대시보드에 **지금 업데이트**가 나타납니다. `data/`의 Spotify 데이터는 유지됩니다.

## OBS

1. 소스 → 브라우저
2. 이름: `HopPlay`
3. 대시보드의 URL
4. 크기 `1920 × 1080`
5. 배경은 투명합니다

## Spotify (선택)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)에서 앱 만들기
2. 리디렉트 URI (정확히):

```
http://127.0.0.1:3000/callback
```

3. 대시보드에 Client ID와 Client Secret 붙여넣기
4. 권한 허용 후 곡 재생

시크릿을 커밋하지 마세요. Client ID / Client Secret은 이 컴퓨터에만 두세요 (`data/`는 gitignore됨).

## 라이선스

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f3.png?v8" width="20" height="20" alt=":cn:"> <strong>中文</strong></summary>

**v1.8.1** — 适用于 OBS、Streamlabs 及其他浏览器源的正在播放叠加层。

**出品 [GalaxyBunny Studio](https://github.com/HanaCherry)**

在 Spotify 播放歌曲（可选）或使用演示模式，选择播放器皮肤，把叠加层 URL 复制到 OBS。

## 功能

- 61 款播放器皮肤（Galaxy Bunny、kawaii、chrome、walkman、film、sakura、tarot、arcade 等）
- 封面：方形、Canvas、黑胶、无
- 魔法配色、封面光晕、播放器光晕、模糊、可视化
- 9 个叠加层位置
- 暂停时隐藏 / 仅在切歌时显示
- 出现与消失动画（淡入、滑动、缩放、弹出、模糊）及时长
- 最多 5 个配置，各自独立的 OBS URL
- 界面支持 30 种语言
- 可调节播放器大小和不透明度，并按配置文件分别保存
- 可选择已连接的 Spotify 或 Windows 本地检测，显示标题、艺术家、进度和专辑封面，并自动处理 Spotify 限制
- 本地演示模式（无需 Spotify 账号）
- 通过 GitHub Releases 应用内更新（保留 `data/`）

## 运行

需要 [Node.js](https://nodejs.org)。

```bash
npm install
npm start
```

打开 http://127.0.0.1:3000

在 Windows 上也可以双击 `start.bat`。

在仪表盘侧栏点击 **停止服务器**，或运行 `stop.bat`。

GitHub 发布新版本时，仪表盘会提供 **立即更新**。`data/` 中的 Spotify 数据会保留。

## OBS

1. 来源 → 浏览器
2. 名称：`HopPlay`
3. 使用仪表盘中的 URL
4. 尺寸 `1920 × 1080`
5. 背景透明

## Spotify（可选）

1. 在 [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) 创建应用
2. 重定向 URI（必须完全一致）：

```
http://127.0.0.1:3000/callback
```

3. 在仪表盘粘贴 Client ID 和 Client Secret
4. 授权后播放一首歌

不要提交密钥。Client ID / Client Secret 只保存在本机（`data/` 已加入 `.gitignore`）。

## 许可证

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e6.png?v8" width="20" height="20" alt=":saudi_arabia:"> <strong>العربية</strong></summary>

**v1.8.1** — طبقة now playing لـ OBS وStreamlabs ومصادر المتصفح الأخرى.

**من [GalaxyBunny Studio](https://github.com/HanaCherry)**

شغّل مقطعًا على Spotify (اختياري) أو استخدم الوضع التجريبي، اختر مظهر المشغّل، ثم انسخ رابط الطبقة إلى OBS.

## الميزات

- 61 مظهرًا للمشغّل (Galaxy Bunny وkawaii وchrome وwalkman وfilm وsakura وtarot وarcade وغيرها)
- الغلاف: مربع، Canvas، فينيل، بدون
- ألوان سحرية، توهج الغلاف، توهج المشغّل، ضبابية، محلّل بصري
- 9 مواضع للطبقة
- إخفاء عند الإيقاف / الإظهار عند تغيير الأغنية فقط
- تأثيرات ظهور واختفاء (تلاشٍ، انزلاق، تكبير، pop، ضباب) مع التوقيت
- حتى 5 ملفات، لكل منها رابط OBS خاص
- واجهة بـ 30 لغة
- حجم وشفافية قابلان للتعديل مع حفظهما بشكل منفصل لكل ملف شخصي
- اختيار Spotify المتصل أو اكتشاف Windows المحلي مع العنوان والفنان والتقدم وغلاف الألبوم؛ وتُدار قيود Spotify تلقائيًا
- وضع تجريبي محلي (لا حاجة لحساب Spotify)
- تحديثات من GitHub Releases (يُحتفظ بـ `data/`)

## التشغيل

يتطلب [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

افتح http://127.0.0.1:3000

على Windows يمكنك أيضًا النقر مرتين على `start.bat`.

أوقف الخادم من اللوحة (**إيقاف الخادم** في الشريط الجانبي) أو عبر `stop.bat`.

عند نشر إصدار جديد على GitHub تعرض اللوحة **حدّث الآن**. تُحفظ بيانات Spotify في `data/`.

## OBS

1. مصدر → متصفح
2. الاسم: `HopPlay`
3. الرابط من اللوحة
4. الحجم `1920 × 1080`
5. الخلفية شفافة

## Spotify (اختياري)

1. أنشئ تطبيقًا في [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. عنوان إعادة التوجيه (حرفيًا):

```
http://127.0.0.1:3000/callback
```

3. الصق Client ID وClient Secret في اللوحة
4. فَوِّض ثم شغّل مقطعًا

لا ترفع الأسرار. أبقِ Client ID / Client Secret على جهازك فقط (`data/` في `.gitignore`).

## الرخصة

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f7.png?v8" width="20" height="20" alt=":tr:"> <strong>Türkçe</strong></summary>

**v1.8.1** — OBS, Streamlabs ve diğer tarayıcı kaynakları için now playing katmanı.

**Yapan [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify’da bir parça çal (isteğe bağlı) veya demo modunu kullan, bir skin seç ve overlay URL’sini OBS’e kopyala.

## Özellikler

- 61 oynatıcı skini (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ve daha fazlası)
- Kapak: kare, Canvas, vinil, yok
- Sihirli renkler, kapak ışıltısı, oynatıcı ışıltısı, bulanıklık, görselleştirici
- 9 overlay konumu
- Duraklatınca gizle / yalnızca şarkı değişince göster
- Belirme ve gizlenme efektleri (fade, kaydır, ölçek, pop, bulanık) ve süreler
- En fazla 5 profil, her birinin ayrı OBS URL’si
- 30 dilde arayüz
- Her profil için ayrı kaydedilen ayarlanabilir oynatıcı boyutu ve opaklığı
- Başlık, sanatçı, ilerleme ve albüm kapağıyla bağlı Spotify veya Windows yerel algılama seçeneği; Spotify sınırları otomatik yönetilir
- Yerel demo modu (Spotify hesabı gerekmez)
- GitHub Releases’ten uygulama içi güncelleme (`data/` korunur)

## Çalıştırma

[Node.js](https://nodejs.org) gerekir.

```bash
npm install
npm start
```

http://127.0.0.1:3000 adresini aç

Windows’ta `start.bat` dosyasına çift tıklayabilirsin.

Sunucuyu panodan (**Sunucuyu durdur**, kenar çubuğu) veya `stop.bat` ile durdur.

Yeni bir GitHub sürümü çıkınca pano **Şimdi güncelle** sunar. `data/` içindeki Spotify verilerin kalır.

## OBS

1. Kaynak → Tarayıcı
2. Ad: `HopPlay`
3. Panodaki URL
4. Boyut `1920 × 1080`
5. Arka plan şeffaf

## Spotify (isteğe bağlı)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) üzerinde bir uygulama oluştur
2. Yönlendirme URI’si (tam olarak):

```
http://127.0.0.1:3000/callback
```

3. Client ID ve Client Secret’i panoya yapıştır
4. Yetkilendir, sonra bir parça çal

Gizli bilgileri commit etme. Client ID / Client Secret yalnızca bilgisayarında kalsın (`data/` gitignore’da).

## Lisans

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f3.png?v8" width="20" height="20" alt=":india:"> <strong>हिन्दी</strong></summary>

**v1.8.1** — OBS, Streamlabs और अन्य ब्राउज़र स्रोतों के लिए नाउ-प्लेइंग ओवरले।

**द्वारा [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify पर गाना चलाएँ (वैकल्पिक) या डेमो मोड इस्तेमाल करें, स्किन चुनें, ओवरले URL OBS में कॉपी करें।

## विशेषताएँ

- 61 प्लेयर स्किन (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade और अन्य)
- कवर: वर्ग, Canvas, विनाइल, कोई नहीं
- मैजिक रंग, कवर ग्लो, प्लेयर ग्लो, ब्लर, विज़ुअलाइज़र
- 9 ओवरले स्थितियाँ
- पॉज़ पर छिपाएँ / केवल गाना बदलने पर दिखाएँ
- दिखने और छिपने के इफ़ेक्ट (फे़ड, स्लाइड, स्केल, पॉप, ब्लर) और समय
- अधिकतम 5 प्रोफ़ाइल, हर एक का अलग OBS URL
- 30 भाषाओं में इंटरफ़ेस
- प्लेयर का आकार और अपारदर्शिता समायोज्य हैं और हर प्रोफ़ाइल के लिए अलग सहेजे जाते हैं
- शीर्षक, कलाकार, प्रगति और एल्बम कवर के साथ कनेक्टेड Spotify या Windows लोकल पहचान का विकल्प; Spotify सीमाएँ अपने आप संभाली जाती हैं
- लोकल डेमो मोड (Spotify खाता ज़रूरी नहीं)
- GitHub Releases से इन-ऐप अपडेट (`data/` सुरक्षित रहता है)

## चलाएँ

[Node.js](https://nodejs.org) चाहिए।

```bash
npm install
npm start
```

http://127.0.0.1:3000 खोलें

Windows पर `start.bat` पर डबल-क्लिक भी कर सकते हैं।

डैशबोर्ड से सर्वर रोकें (साइडबार में **सर्वर रोकें**) या `stop.bat` से।

नया GitHub रिलीज़ आने पर डैशबोर्ड **अभी अपडेट करें** दिखाता है। `data/` में Spotify डेटा रहता है।

## OBS

1. स्रोत → ब्राउज़र
2. नाम: `HopPlay`
3. डैशबोर्ड वाला URL
4. आकार `1920 × 1080`
5. पृष्ठभूमि पारदर्शी है

## Spotify (वैकल्पिक)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) पर ऐप बनाएँ
2. रीडायरेक्ट URI (exact):

```
http://127.0.0.1:3000/callback
```

3. डैशबोर्ड में Client ID और Client Secret चिपकाएँ
4. अनुमति दें, फिर गाना चलाएँ

सीक्रेट कमिट न करें। Client ID / Client Secret अपने कंप्यूटर पर ही रखें (`data/` gitignore में है)।

## लाइसेंस

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e9.png?v8" width="20" height="20" alt=":bangladesh:"> <strong>বাংলা</strong></summary>

**v1.8.1** — OBS, Streamlabs ও অন্যান্য ব্রাউজার সোর্সের জন্য নাউ-প্লেইং ওভারলে।

**তৈরি [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spotify-তে গান চালান (ঐচ্ছিক) বা ডেমো মোড ব্যবহার করুন, স্কিন বেছে নিন, ওভারলে URL OBS-এ কপি করুন।

## ফিচার

- ৬১টি প্লেয়ার স্কিন (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ইত্যাদি)
- কভার: বর্গ, Canvas, ভিনাইল, নেই
- ম্যাজিক রং, কভার গ্লো, প্লেয়ার গ্লো, ব্লার, ভিজুয়ালাইজার
- ৯টি ওভারলে অবস্থান
- পজে লুকান / শুধু গান বদলালে দেখান
- আসা-যাওয়ার ইফেক্ট (ফেড, স্লাইড, স্কেল, পপ, ব্লার) ও সময়
- সর্বোচ্চ ৫টি প্রোফাইল, প্রতিটির আলাদা OBS URL
- ৩০টি ভাষায় ইন্টারফেস
- প্লেয়ারের আকার ও অস্বচ্ছতা নিয়ন্ত্রণযোগ্য এবং প্রতিটি প্রোফাইলে আলাদাভাবে সংরক্ষিত
- শিরোনাম, শিল্পী, অগ্রগতি ও অ্যালবাম কভারসহ সংযুক্ত Spotify বা Windows লোকাল শনাক্তকরণ; Spotify সীমা স্বয়ংক্রিয়ভাবে সামলানো হয়
- লোকাল ডেমো মোড (Spotify অ্যাকাউন্ট লাগে না)
- GitHub Releases থেকে ইন-অ্যাপ আপডেট (`data/` রাখা হয়)

## চালানো

[Node.js](https://nodejs.org) লাগবে।

```bash
npm install
npm start
```

খুলুন http://127.0.0.1:3000

Windows-এ `start.bat`-এ ডাবল-ক্লিকও করা যায়।

ড্যাশবোর্ড থেকে সার্ভার থামান (সাইডবারে **সার্ভার থামান**) বা `stop.bat` দিয়ে।

নতুন GitHub রিলিজ এলে ড্যাশবোর্ড **এখনই আপডেট** দেখায়। `data/`-এর Spotify ডেটা থাকে।

## OBS

1. সোর্স → ব্রাউজার
2. নাম: `HopPlay`
3. ড্যাশবোর্ডের URL
4. সাইজ `1920 × 1080`
5. ব্যাকগ্রাউন্ড স্বচ্ছ

## Spotify (ঐচ্ছিক)

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)-এ অ্যাপ তৈরি করুন
2. রিডাইরেক্ট URI (হুবহু):

```
http://127.0.0.1:3000/callback
```

3. ড্যাশবোর্ডে Client ID ও Client Secret পেস্ট করুন
4. অনুমতি দিন, তারপর গান চালান

সিক্রেট কমিট করবেন না। Client ID / Client Secret শুধু নিজের কম্পিউটারে রাখুন (`data/` gitignore-এ)।

## লাইসেন্স

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1e9.png?v8" width="20" height="20" alt=":indonesia:"> <strong>Bahasa Indonesia</strong></summary>

**v1.8.1** — overlay now playing untuk OBS, Streamlabs, dan sumber browser lain.

**Oleh [GalaxyBunny Studio](https://github.com/HanaCherry)**

Putar lagu di Spotify (opsional) atau pakai mode demo, pilih skin, lalu salin URL overlay ke OBS.

## Fitur

- 61 skin pemutar (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade, dan lainnya)
- Sampul: persegi, Canvas, vinil, tidak ada
- Warna magis, glow sampul, glow pemutar, blur, visualizer
- 9 posisi overlay
- Sembunyikan saat jeda / tampilkan hanya saat ganti lagu
- Efek muncul dan hilang (fade, geser, skala, pop, blur) plus durasi
- Hingga 5 profil, masing-masing URL OBS sendiri
- Antarmuka dalam 30 bahasa
- Ukuran dan opasitas pemutar dapat diatur dan disimpan terpisah untuk setiap profil
- Pilihan Spotify terhubung atau deteksi lokal Windows dengan judul, artis, progres, dan sampul album; batas Spotify ditangani otomatis
- Mode demo lokal (tidak perlu akun Spotify)
- Pembaruan dari GitHub Releases (`data/` tetap ada)

## Menjalankan

Butuh [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Buka http://127.0.0.1:3000

Di Windows kamu juga bisa klik dua kali `start.bat`.

Hentikan server dari dasbor (**Hentikan server** di bilah samping) atau dengan `stop.bat`.

Saat ada rilis GitHub baru, dasbor menawarkan **Perbarui sekarang**. Data Spotify di `data/` tetap disimpan.

## OBS

1. Sumber → Peramban
2. Nama: `HopPlay`
3. URL dari dasbor
4. Ukuran `1920 × 1080`
5. Latar belakang transparan

## Spotify (opsional)

1. Buat aplikasi di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI pengalihan (persis):

```
http://127.0.0.1:3000/callback
```

3. Tempel Client ID dan Client Secret di dasbor
4. Otorisasi, lalu putar lagu

Jangan commit rahasia. Simpan Client ID / Client Secret hanya di komputermu (`data/` ada di `.gitignore`).

## Lisensi

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1f3.png?v8" width="20" height="20" alt=":vietnam:"> <strong>Tiếng Việt</strong></summary>

**v1.8.1** — lớp phủ đang phát cho OBS, Streamlabs và các nguồn trình duyệt khác.

**Bởi [GalaxyBunny Studio](https://github.com/HanaCherry)**

Phát một bài trên Spotify (tuỳ chọn) hoặc dùng chế độ demo, chọn skin, rồi sao chép URL overlay vào OBS.

## Tính năng

- 61 skin trình phát (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade và hơn thế)
- Bìa: vuông, Canvas, đĩa than, không
- Màu ma thuật, phát sáng bìa, phát sáng player, làm mờ, visualizer
- 9 vị trí overlay
- Ẩn khi tạm dừng / chỉ hiện khi đổi bài
- Hiệu ứng hiện/ẩn (fade, trượt, scale, pop, mờ) kèm thời gian
- Tối đa 5 hồ sơ, mỗi hồ sơ một URL OBS riêng
- Giao diện 30 ngôn ngữ
- Có thể chỉnh kích thước và độ mờ trình phát, lưu riêng cho từng hồ sơ
- Chọn Spotify đã kết nối hoặc phát hiện cục bộ Windows, gồm tiêu đề, nghệ sĩ, tiến trình và ảnh album; giới hạn Spotify được xử lý tự động
- Chế độ demo local (không cần tài khoản Spotify)
- Cập nhật trong ứng dụng từ GitHub Releases (giữ `data/`)

## Chạy

Cần [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Mở http://127.0.0.1:3000

Trên Windows bạn cũng có thể double-click `start.bat`.

Dừng máy chủ từ bảng điều khiển (**Dừng máy chủ** ở thanh bên) hoặc bằng `stop.bat`.

Khi có bản phát hành GitHub mới, bảng điều khiển hiện **Cập nhật ngay**. Dữ liệu Spotify trong `data/` được giữ.

## OBS

1. Nguồn → Trình duyệt
2. Tên: `HopPlay`
3. URL từ bảng điều khiển
4. Kích thước `1920 × 1080`
5. Nền trong suốt

## Spotify (tuỳ chọn)

1. Tạo ứng dụng trên [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI chuyển hướng (chính xác):

```
http://127.0.0.1:3000/callback
```

3. Dán Client ID và Client Secret vào bảng điều khiển
4. Uỷ quyền, rồi phát một bài

Đừng commit bí mật. Chỉ giữ Client ID / Client Secret trên máy bạn (`data/` nằm trong `.gitignore`).

## Giấy phép

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ed.png?v8" width="20" height="20" alt=":thailand:"> <strong>ไทย</strong></summary>

**v1.8.1** — โอเวอร์เลย์กำลังเล่นสำหรับ OBS, Streamlabs และแหล่งเบราว์เซอร์อื่น

**โดย [GalaxyBunny Studio](https://github.com/HanaCherry)**

เล่นเพลงบน Spotify (ไม่บังคับ) หรือใช้โหมดเดโม เลือกสกิน แล้วคัดลอก URL โอเวอร์เลย์ไปใส่ OBS

## ฟีเจอร์

- สกินเครื่องเล่น 61 แบบ (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade และอื่น ๆ)
- ปก: สี่เหลี่ยม, Canvas, ไวนิล, ไม่มี
- สีเมจิก, แสงปก, แสงเครื่องเล่น, เบลอ, วิชวลไลเซอร์
- ตำแหน่งโอเวอร์เลย์ 9 จุด
- ซ่อนตอนพัก / แสดงเฉพาะตอนเปลี่ยนเพลง
- เอฟเฟกต์ปรากฏและหาย (เฟด, สไลด์, สเกล, ป็อป, เบลอ) พร้อมเวลา
- สูงสุด 5 โปรไฟล์ แต่ละอันมี URL OBS ของตัวเอง
- อินเทอร์เฟซ 30 ภาษา
- ปรับขนาดและความทึบของเครื่องเล่นได้ โดยบันทึกแยกสำหรับแต่ละโปรไฟล์
- เลือก Spotify ที่เชื่อมต่อหรือการตรวจจับในเครื่องของ Windows พร้อมชื่อเพลง ศิลปิน ความคืบหน้า และปกอัลบั้ม; จัดการข้อจำกัด Spotify อัตโนมัติ
- โหมดเดโมในเครื่อง (ไม่ต้องมีบัญชี Spotify)
- อัปเดตในแอปจาก GitHub Releases (เก็บ `data/` ไว้)

## การรัน

ต้องมี [Node.js](https://nodejs.org)

```bash
npm install
npm start
```

เปิด http://127.0.0.1:3000

บน Windows ดับเบิลคลิก `start.bat` ก็ได้

หยุดเซิร์ฟเวอร์จากแดชบอร์ด (**หยุดเซิร์ฟเวอร์** ที่แถบข้าง) หรือด้วย `stop.bat`

เมื่อมีรีลีสใหม่บน GitHub แดชบอร์ดจะมี **อัปเดตเลย** ข้อมูล Spotify ใน `data/` ยังอยู่

## OBS

1. แหล่ง → เบราว์เซอร์
2. ชื่อ: `HopPlay`
3. URL จากแดชบอร์ด
4. ขนาด `1920 × 1080`
5. พื้นหลังโปร่งใส

## Spotify (ไม่บังคับ)

1. สร้างแอปใน [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect URI (ตรงทุกตัวอักษร):

```
http://127.0.0.1:3000/callback
```

3. วาง Client ID และ Client Secret ในแดชบอร์ด
4. อนุญาต แล้วเล่นเพลง

อย่าคอมมิตความลับ เก็บ Client ID / Client Secret ไว้ในเครื่องเท่านั้น (`data/` อยู่ใน `.gitignore`)

## สัญญาอนุญาต

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ea.png?v8" width="20" height="20" alt=":sweden:"> <strong>Svenska</strong></summary>

**v1.8.1** — now playing-overlay för OBS, Streamlabs och andra webbläsarkällor.

**Av [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spela en låt på Spotify (valfritt) eller använd demoläge, välj ett skal och kopiera overlay-URL:en till OBS.

## Funktioner

- 61 spelarskal (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade med mera)
- Omslag: kvadrat, Canvas, vinyl, inget
- Magiska färger, omslagsglöd, spelarglöd, oskärpa, visualiserare
- 9 overlaypositioner
- Dölj vid paus / visa bara vid låtbyte
- Visa- och döljeffekter (fade, slide, scale, pop, blur) med timing
- Upp till 5 profiler, var och en med egen OBS-URL
- Gränssnitt på 30 språk
- Justerbar spelarstorlek och opacitet som sparas separat för varje profil
- Välj ansluten Spotify eller lokal Windows-detektering med titel, artist, förlopp och albumomslag; Spotify-begränsningar hanteras automatiskt
- Lokalt demoläge (inget Spotify-konto krävs)
- Uppdateringar från GitHub Releases (`data/` behålls)

## Kör

Kräver [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Öppna http://127.0.0.1:3000

På Windows kan du också dubbelklicka på `start.bat`.

Stoppa servern från instrumentpanelen (**Stoppa server** i sidofältet) eller med `stop.bat`.

När en ny GitHub-release publiceras erbjuder panelen **Uppdatera nu**. Spotify-data i `data/` behålls.

## OBS

1. Källa → Webbläsare
2. Namn: `HopPlay`
3. URL från panelen
4. Storlek `1920 × 1080`
5. Bakgrunden är genomskinlig

## Spotify (valfritt)

1. Skapa en app i [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Omdirigerings-URI (exakt):

```
http://127.0.0.1:3000/callback
```

3. Klistra in Client ID och Client Secret i panelen
4. Auktorisera, spela sedan en låt

Committa inte hemligheter. Behåll Client ID / Client Secret bara på din dator (`data/` finns i `.gitignore`).

## Licens

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f4.png?v8" width="20" height="20" alt=":norway:"> <strong>Norsk</strong></summary>

**v1.8.1** — now playing-overlay for OBS, Streamlabs og andre nettleserkilder.

**Av [GalaxyBunny Studio](https://github.com/HanaCherry)**

Spill et spor på Spotify (valgfritt) eller bruk demomodus, velg et skall og kopier overlay-URL-en til OBS.

## Funksjoner

- 61 spillerskall (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade med mer)
- Cover: kvadrat, Canvas, vinyl, ingen
- Magiske farger, coverglød, spiller-glød, uskarphet, visualiserer
- 9 overlayposisjoner
- Skjul ved pause / vis bare ved låtbytte
- Vis- og skjuileffekter (fade, slide, scale, pop, blur) med timing
- Opptil 5 profiler, hver med egen OBS-URL
- Grensesnitt på 30 språk
- Justerbar spillerstørrelse og gjennomsiktighet som lagres separat for hver profil
- Velg tilkoblet Spotify eller lokal Windows-gjenkjenning med tittel, artist, fremdrift og albumomslag; Spotify-begrensninger håndteres automatisk
- Lokal demomodus (ingen Spotify-konto nødvendig)
- Oppdateringer fra GitHub Releases (`data/` beholdes)

## Kjøre

Trenger [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Åpne http://127.0.0.1:3000

På Windows kan du også dobbeltklikke `start.bat`.

Stopp serveren fra dashbordet (**Stopp server** i sidefeltet) eller med `stop.bat`.

Når en ny GitHub-utgivelse kommer, tilbyr dashbordet **Oppdater nå**. Spotify-data i `data/` beholdes.

## OBS

1. Kilde → Nettleser
2. Navn: `HopPlay`
3. URL fra dashbordet
4. Størrelse `1920 × 1080`
5. Bakgrunnen er gjennomsiktig

## Spotify (valgfritt)

1. Opprett en app i [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (nøyaktig):

```
http://127.0.0.1:3000/callback
```

3. Lim inn Client ID og Client Secret i dashbordet
4. Autoriser, spill deretter et spor

Ikke commit hemmeligheter. Behold Client ID / Client Secret bare på maskinen din (`data/` er i `.gitignore`).

## Lisens

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f0.png?v8" width="20" height="20" alt=":denmark:"> <strong>Dansk</strong></summary>

**v1.8.1** — now playing-overlay til OBS, Streamlabs og andre browserkilder.

**Af [GalaxyBunny Studio](https://github.com/HanaCherry)**

Afspil et nummer på Spotify (valgfrit) eller brug demotilstand, vælg et skin, og kopiér overlay-URL’en ind i OBS.

## Funktioner

- 61 afspillerskins (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade og flere)
- Cover: firkant, Canvas, vinyl, ingen
- Magiske farver, cover-glow, afspiller-glow, sløring, visualizer
- 9 overlay-positioner
- Skjul ved pause / vis kun ved nummerskift
- Vis- og skjul-effekter (fade, slide, scale, pop, blur) med timing
- Op til 5 profiler, hver med sin egen OBS-URL
- Brugerflade på 30 sprog
- Justerbar afspillerstørrelse og gennemsigtighed, gemt separat for hver profil
- Vælg tilsluttet Spotify eller lokal Windows-registrering med titel, kunstner, forløb og albumcover; Spotify-begrænsninger håndteres automatisk
- Lokal demotilstand (ingen Spotify-konto påkrævet)
- Opdateringer fra GitHub Releases (`data/` bevares)

## Kør

Kræver [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Åbn http://127.0.0.1:3000

På Windows kan du også dobbeltklikke på `start.bat`.

Stop serveren fra dashboardet (**Stop server** i sidebjælken) eller med `stop.bat`.

Når en ny GitHub-udgivelse udkommer, tilbyder dashboardet **Opdater nu**. Spotify-data i `data/` bevares.

## OBS

1. Kilde → Browser
2. Navn: `HopPlay`
3. URL fra dashboardet
4. Størrelse `1920 × 1080`
5. Baggrunden er gennemsigtig

## Spotify (valgfrit)

1. Opret en app på [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Redirect-URI (præcis):

```
http://127.0.0.1:3000/callback
```

3. Indsæt Client ID og Client Secret i dashboardet
4. Autoriser, og afspil derefter et nummer

Commit ikke hemmeligheder. Behold Client ID / Client Secret kun på din computer (`data/` er i `.gitignore`).

## Licens

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1ee.png?v8" width="20" height="20" alt=":finland:"> <strong>Suomi</strong></summary>

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

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ff.png?v8" width="20" height="20" alt=":czech_republic:"> <strong>Čeština</strong></summary>

**v1.8.1** — now playing overlay pro OBS, Streamlabs a další prohlížečové zdroje.

**Od [GalaxyBunny Studio](https://github.com/HanaCherry)**

Pusťte skladbu na Spotify (volitelné) nebo použijte demo režim, vyberte vzhled a zkopírujte URL overlaye do OBS.

## Funkce

- 61 vzhledů přehrávače (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade a další)
- Obal: čtverec, Canvas, vinyl, žádný
- Kouzelné barvy, záře obalu, záře přehrávače, rozostření, vizualizér
- 9 pozic overlaye
- Skrýt při pauze / zobrazit jen při změně skladby
- Efekty zobrazení a skrytí (fade, slide, scale, pop, blur) s časováním
- Až 5 profilů, každý s vlastní URL pro OBS
- Rozhraní ve 30 jazycích
- Nastavitelná velikost a průhlednost přehrávače, ukládané zvlášť pro každý profil
- Volba mezi připojeným Spotify a místní detekcí Windows s názvem, interpretem, průběhem a obalem alba; limity Spotify se řeší automaticky
- Místní demo režim (účet Spotify není potřeba)
- Aktualizace z GitHub Releases (`data/` zůstane)

## Spuštění

Potřebujete [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Otevřete http://127.0.0.1:3000

Ve Windows můžete také dvakrát kliknout na `start.bat`.

Server zastavíte v panelu (**Zastavit server** v postranním panelu) nebo pomocí `stop.bat`.

Když vyjde nový GitHub release, panel nabídne **Aktualizovat teď**. Data Spotify ve `data/` zůstanou.

## OBS

1. Zdroj → Prohlížeč
2. Název: `HopPlay`
3. URL z panelu
4. Velikost `1920 × 1080`
5. Pozadí je průhledné

## Spotify (volitelné)

1. Vytvořte aplikaci v [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Přesměrovací URI (přesně):

```
http://127.0.0.1:3000/callback
```

3. Vložte Client ID a Client Secret do panelu
4. Autorizujte a pusťte skladbu

Nekomitujte tajemství. Client ID / Client Secret nechte jen na svém počítači (`data/` je v `.gitignore`).

## Licence

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1f4.png?v8" width="20" height="20" alt=":romania:"> <strong>Română</strong></summary>

**v1.8.1** — overlay now playing pentru OBS, Streamlabs și alte surse din browser.

**De [GalaxyBunny Studio](https://github.com/HanaCherry)**

Redă o piesă pe Spotify (opțional) sau folosește modul demo, alege un skin și copiază URL-ul overlay-ului în OBS.

## Funcții

- 61 de skin-uri de player (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade și altele)
- Copertă: pătrat, Canvas, vinil, niciuna
- Culori magice, glow copertă, glow player, blur, vizualizator
- 9 poziții pentru overlay
- Ascunde la pauză / arată doar la schimbarea piesei
- Efecte de apariție și dispariție (fade, slide, scale, pop, blur) cu durate
- Până la 5 profiluri, fiecare cu propriul URL OBS
- Interfață în 30 de limbi
- Dimensiune și opacitate reglabile ale playerului, salvate separat pentru fiecare profil
- Alegere între Spotify conectat și detectarea locală Windows, cu titlu, artist, progres și copertă; limitele Spotify sunt gestionate automat
- Mod demo local (nu e nevoie de cont Spotify)
- Actualizări din GitHub Releases (`data/` este păstrat)

## Rulare

Ai nevoie de [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Deschide http://127.0.0.1:3000

Pe Windows poți da dublu clic pe `start.bat`.

Oprește serverul din panou (**Oprește serverul** în bara laterală) sau cu `stop.bat`.

Când apare un release nou pe GitHub, panoul oferă **Actualizează acum**. Datele Spotify din `data/` rămân.

## OBS

1. Sursă → Browser
2. Nume: `HopPlay`
3. URL-ul din panou
4. Dimensiune `1920 × 1080`
5. Fundalul este transparent

## Spotify (opțional)

1. Creează o aplicație în [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI de redirecționare (exact):

```
http://127.0.0.1:3000/callback
```

3. Lipește Client ID și Client Secret în panou
4. Autorizează, apoi redă o piesă

Nu face commit la secrete. Păstrează Client ID / Client Secret doar pe calculator (`data/` e în `.gitignore`).

## Licență

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f7.png?v8" width="20" height="20" alt=":greece:"> <strong>Ελληνικά</strong></summary>

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

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1fa.png?v8" width="20" height="20" alt=":hungary:"> <strong>Magyar</strong></summary>

**v1.8.1** — now playing overlay OBS-hez, Streamlabshoz és más böngészőforrásokhoz.

**Készítette [GalaxyBunny Studio](https://github.com/HanaCherry)**

Játssz le egy számot Spotifyon (opcionális) vagy használd a demó módot, válassz kinézetet, és másold az overlay URL-jét az OBS-be.

## Funkciók

- 61 lejátszó kinézet (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade és mások)
- Borító: négyzet, Canvas, bakelit, nincs
- Varázsszínek, borítófény, lejátszófény, elmosás, vizualizáló
- 9 overlay pozíció
- Elrejtés szünetnél / csak számváltáskor jelenjen meg
- Megjelenés- és eltűnéseffektek (fade, slide, scale, pop, blur) időzítéssel
- Legfeljebb 5 profil, mindegyik saját OBS URL-lel
- Felület 30 nyelven
- Állítható lejátszóméret és átlátszatlanság, profilonként külön mentve
- Választható csatlakoztatott Spotify vagy helyi Windows-észlelés címmel, előadóval, folyamattal és albumborítóval; a Spotify korlátozásait automatikusan kezeli
- Helyi demó mód (nem kell Spotify-fiók)
- Frissítés GitHub Releases-ből (`data/` megmarad)

## Indítás

[Node.js](https://nodejs.org) szükséges.

```bash
npm install
npm start
```

Nyisd meg: http://127.0.0.1:3000

Windowson a `start.bat` fájlra is duplán kattinthatsz.

Állítsd le a szervert a vezérlőpulton (**Szerver leállítása** az oldalsávon) vagy a `stop.bat` fájllal.

Új GitHub-kiadásnál a pult **Frissítés most** lehetőséget ad. A `data/` Spotify-adatok megmaradnak.

## OBS

1. Forrás → Böngésző
2. Név: `HopPlay`
3. URL a pultról
4. Méret `1920 × 1080`
5. A háttér átlátszó

## Spotify (opcionális)

1. Hozz létre egy appot a [Spotify Developer Dashboardön](https://developer.spotify.com/dashboard)
2. Átirányítási URI (pontosan):

```
http://127.0.0.1:3000/callback
```

3. Illeszd be a Client ID-t és a Client Secretet a pultra
4. Engedélyezd, majd játssz le egy számot

Ne commitold a titkokat. A Client ID / Client Secret maradjon a gépeden (`data/` a `.gitignore`-ban van).

## Licenc

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f1.png?v8" width="20" height="20" alt=":israel:"> <strong>עברית</strong></summary>

**v1.8.1** — שכבת now playing ל-OBS, Streamlabs ומקורות דפדפן אחרים.

**מאת [GalaxyBunny Studio](https://github.com/HanaCherry)**

נגנו שיר ב-Spotify (רשות) או השתמשו במצב הדגמה, בחרו עיצוב והעתיקו את כתובת השכבה ל-OBS.

## יכולות

- 61 עיצובי נגן (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade ועוד)
- עטיפה: ריבוע, Canvas, ויניל, ללא
- צבעים קסומים, זוהר עטיפה, זוהר נגן, טשטוש, ויזואלייזר
- 9 מיקומי שכבה
- הסתרה בהשהיה / הצגה רק בהחלפת שיר
- אפקטי הופעה והיעלמות (פייד, החלקה, קנה מידה, פופ, טשטוש) עם תזמון
- עד 5 פרופילים, לכל אחד כתובת OBS משלו
- ממשק ב-30 שפות
- גודל ואטימות נגן ניתנים להתאמה ונשמרים בנפרד לכל פרופיל
- בחירה בין Spotify מחובר לזיהוי מקומי של Windows, כולל כותרת, אמן, התקדמות ועטיפת אלבום; מגבלות Spotify מטופלות אוטומטית
- מצב הדגמה מקומי (אין צורך בחשבון Spotify)
- עדכונים מ-GitHub Releases (`data/` נשמר)

## הפעלה

נדרש [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

פתחו את http://127.0.0.1:3000

ב-Windows אפשר גם ללחוץ פעמיים על `start.bat`.

עצרו את השרת מהלוח (**עצירת שרת** בסרגל הצד) או עם `stop.bat`.

כשיש גרסה חדשה ב-GitHub, הלוח מציע **עדכן עכשיו**. נתוני Spotify ב-`data/` נשמרים.

## OBS

1. מקור → דפדפן
2. שם: `HopPlay`
3. הכתובת מהלוח
4. גודל `1920 × 1080`
5. הרקע שקוף

## Spotify (רשות)

1. צרו אפליקציה ב-[Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. כתובת הפניה (בדיוק):

```
http://127.0.0.1:3000/callback
```

3. הדביקו Client ID ו-Client Secret בלוח
4. אשרו ואז נגנו שיר

אל תעשו commit לסודות. השאירו Client ID / Client Secret רק במחשב (`data/` ב-`.gitignore`).

## רישיון

MIT © GalaxyBunny Studio

</details>

<details>
<summary><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fe.png?v8" width="20" height="20" alt=":malaysia:"> <strong>Melayu</strong></summary>

**v1.8.1** — overlay now playing untuk OBS, Streamlabs dan sumber pelayar lain.

**Oleh [GalaxyBunny Studio](https://github.com/HanaCherry)**

Mainkan lagu di Spotify (pilihan) atau guna mod demo, pilih kulit, kemudian salin URL overlay ke OBS.

## Ciri

- 61 kulit pemain (Galaxy Bunny, kawaii, chrome, walkman, film, sakura, tarot, arcade dan lagi)
- Kulit album: segi empat, Canvas, vinil, tiada
- Warna ajaib, sinar kulit, sinar pemain, kabur, visualizer
- 9 kedudukan overlay
- Sembunyi semasa jeda / tunjuk hanya bila lagu bertukar
- Kesan muncul dan hilang (fade, slaid, skala, pop, kabur) dengan masa
- Sehingga 5 profil, setiap satu ada URL OBS sendiri
- Antara muka dalam 30 bahasa
- Saiz dan kelegapan pemain boleh dilaraskan serta disimpan berasingan untuk setiap profil
- Pilihan Spotify disambungkan atau pengesanan setempat Windows dengan tajuk, artis, kemajuan dan kulit album; had Spotify dikendalikan secara automatik
- Mod demo setempat (tidak perlu akaun Spotify)
- Kemas kini dalam apl daripada GitHub Releases (`data/` dikekalkan)

## Jalankan

Memerlukan [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Buka http://127.0.0.1:3000

Di Windows anda juga boleh dwi-klik `start.bat`.

Hentikan pelayan dari papan pemuka (**Henti pelayan** di bar sisi) atau dengan `stop.bat`.

Apabila ada keluaran GitHub baharu, papan pemuka menawarkan **Kemas kini sekarang**. Data Spotify dalam `data/` kekal.

## OBS

1. Sumber → Pelayar
2. Nama: `HopPlay`
3. URL dari papan pemuka
4. Saiz `1920 × 1080`
5. Latar belakang lutsinar

## Spotify (pilihan)

1. Cipta apl di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. URI lencongan (tepat):

```
http://127.0.0.1:3000/callback
```

3. Tampal Client ID dan Client Secret di papan pemuka
4. Benarkan, kemudian mainkan lagu

Jangan commit rahsia. Simpan Client ID / Client Secret pada komputer anda sahaja (`data/` dalam `.gitignore`).

## Lesen

MIT © GalaxyBunny Studio

</details>

