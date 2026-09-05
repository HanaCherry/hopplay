(() => {
  const params = new URLSearchParams(location.search);
  const profileId = params.get("profile") || "";
  const isPreview = params.get("preview") === "1";
  if (isPreview) document.body.classList.add("preview");

  const playerEl = document.getElementById("player");

  let settings = null;
  let lastTrackId = "";
  let lastPlaying = false;
  let hideTimer = null;
  let songSwitchTimer = null;
  let appearTimer = null;
  let now = null;
  let localProgress = 0;
  let lastPoll = Date.now();
  let accent = "#1db954";
  let canvasUrl = null;
  let lastSig = "";
  let lastMagic = false;

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function fmt(ms) {
    const value = Number(ms);
    const s = Number.isFinite(value) ? Math.max(0, Math.floor(value / 1000)) : 0;
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  }

  function bars(n = 12) {
    return Array.from({ length: n }, (_, i) => {
      const h = 6 + ((i * 37) % 12);
      const delay = (i * 0.08).toFixed(2);
      return `<i style="height:${h}px;animation-delay:${delay}s"></i>`;
    }).join("");
  }

  function proxied(url) {
    if (!url) return "";
    if (String(url).startsWith("/")) return url;
    return `/api/image?url=${encodeURIComponent(url)}`;
  }

  function hashProgress(progress, duration) {
    const total = 28;
    const filled = duration ? Math.round((progress / duration) * total) : 0;
    return "#".repeat(filled) + "-".repeat(total - filled);
  }

  function extractAccent(src) {
    return new Promise((resolve) => {
      if (!src) return resolve("#1db954");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = 32;
          c.height = 32;
          const ctx = c.getContext("2d", { willReadFrequently: true });
          ctx.drawImage(img, 0, 0, 32, 32);
          const data = ctx.getImageData(0, 0, 32, 32).data;
          let best = { s: 0, r: 29, g: 185, b: 84 };
          for (let i = 0; i < data.length; i += 16) {
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
            if (a < 200) continue;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const l = (max + min) / 2;
            const sat = max === 0 ? 0 : (max - min) / max;
            if (l < 28 || l > 230) continue;
            if (sat > best.s) best = { s: sat, r, g, b };
          }
          resolve(`rgb(${best.r}, ${best.g}, ${best.b})`);
        } catch {
          resolve("#1db954");
        }
      };
      img.onerror = () => resolve("#1db954");
      img.src = src;
    });
  }

  function tintFromAccent(rgb) {
    const m = String(rgb).match(/\d+/g);
    if (!m) return "rgba(28,36,43,0.94)";
    const r = Number(m[0]), g = Number(m[1]), b = Number(m[2]);
    return `rgba(${Math.round(r * 0.18)}, ${Math.round(g * 0.2)}, ${Math.round(b * 0.24)}, 0.94)`;
  }

  function applyColors(profile, rgb) {
    const theme = profile.theme || "dark";
    const magic = profile.magicColors;
    accent = magic ? rgb : (profile.accentColor || "#1db954");
    playerEl.style.setProperty("--accent", accent);
    if (magic) {
      const bg = tintFromAccent(accent);
      playerEl.style.setProperty("--card", bg);
      playerEl.style.setProperty("--card-2", bg.replace("0.94", "0.82"));
    } else if (theme === "light") {
      playerEl.style.setProperty("--card", "#f4f5f8");
      playerEl.style.setProperty("--card-2", "#ffffff");
    } else {
      playerEl.style.setProperty("--card", "#1c242b");
      playerEl.style.setProperty("--card-2", "#243038");
    }
    playerEl.classList.toggle("light", !magic && theme === "light");
  }

  function coverHtml(profile, np) {
    const type = profile.cover || "square";
    if (type === "none") return "";
    const img = proxied(np.image);
    const fallback = "/brand/hopplay-logo.png";
    const glow = profile.coverGlow ? "glow" : "";
    const video = type === "canvas" && canvasUrl
      ? `<video autoplay muted loop playsinline src="${canvasUrl}"></video>`
      : "";
    const ken = type === "canvas" && !canvasUrl ? "kenburns" : "";
    if (type === "vinyl") {
      return `
      <div class="cover vinyl ${glow}">
        <div class="vinyl-spin">
          <div class="vinyl-grooves"></div>
          <div class="vinyl-label"><img src="${img || fallback}" alt="" /></div>
          <div class="vinyl-spindle"></div>
        </div>
      </div>`;
    }
    return `
      <div class="cover ${type} ${glow}">
        <img class="${img ? ken : "cover-placeholder"}" src="${img || fallback}" alt="" />
        ${video}
      </div>`;
  }

  function infoBlocks(np) {
    const title = np.title || (window.hopplayT && window.hopplayT("nothingPlaying")) || "Nothing playing";
    const artist = np.artist || "";
    return { title, artist };
  }

  function render(profile, np) {
    const style = profile.player || "compact";
    const { title, artist } = infoBlocks(np);
    const cover = coverHtml(profile, np);
    const viz = bars(style === "macos" ? 10 : 12);
    const cur = fmt(localProgress);
    const dur = fmt(np.duration_ms || 0);
    const pct = np.duration_ms ? Math.min(100, (localProgress / np.duration_ms) * 100) : 0;
    const blur = np.image ? `style="background-image:url('${proxied(np.image)}')"` : "";

    const place = profile.placement || "bl";
    const stage = document.getElementById("stage");
    if (stage) stage.dataset.place = place;
    const scale = Number(profile.playerScale ?? (style === "galaxybunny" ? 65 : 100));
    playerEl.style.zoom = Math.min(150, Math.max(30, Number.isFinite(scale) ? scale : 100)) / 100;
    const opacity = Number(profile.playerOpacity ?? 100);
    playerEl.style.opacity = Math.min(100, Math.max(20, Number.isFinite(opacity) ? opacity : 100)) / 100;
    applyMotion(profile);
    playerEl.className = `player ${style}${np.is_playing ? " playing" : ""}${profile.coverBlur ? " blur-on" : ""}${profile.hideVisualizer ? " hide-viz" : ""}${profile.playerGlow ? " player-glow" : ""}`;

    let inner = `<div class="blur-bg" ${blur}></div>`;

    if (style === "compact") {
      inner += `
        ${cover}
        <div class="card songinfo" id="songinfo">
          <div class="marquee"><div class="title" title="${escapeHtml(title)}">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="card songtime" id="songtime">
          <span>${cur}</span>
          <div class="visualizer">${viz}</div>
          <span>${dur}</span>
        </div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>`;
    } else if (style === "boxy") {
      inner += `
        ${cover}
        <div class="card songinfo" id="songinfo">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="card songtime" id="songtime">
          <div class="times"><span>${cur}</span><div class="visualizer">${viz}</div><span>${dur}</span></div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "gallery") {
      inner += `
        ${cover}
        <div class="card songinfo" id="songinfo">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="card songtime" id="songtime">
          <div class="times"><span>${cur}</span><span>${dur}</span></div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "macos") {
      inner += `
        <div class="os-bar">
          <div class="traffic"><b class="c"></b><b class="y"></b><b class="g"></b></div>
          <div class="visualizer">${viz}</div>
        </div>
        <div class="body">
          ${cover}
          <div class="meta">
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
            <div class="times"><span>${cur}</span><span>${dur}</span></div>
          </div>
        </div>`;
    } else if (style === "shell") {
      inner += `
        <div class="os-bar">
          hopplay@studio
          <div class="win-btns"><span>─</span><span>□</span><span>✕</span></div>
        </div>
        <div class="body">
          <div><span class="prompt">hopplay@studio&gt;</span><span class="cmd">./hopplay --nowplaying</span></div>
          <div>Title: ${escapeHtml(title)}</div>
          <div>Artist: ${escapeHtml(artist)}</div>
          <div class="hash">[${hashProgress(localProgress, np.duration_ms)}]</div>
          <div>${cur} - ${dur}</div>
        </div>`;
    } else if (style === "discord") {
      inner += `
        <div class="rail"></div>
        <div class="body">
          ${cover}
          <div class="meta" style="flex:1;min-width:0">
            <div class="listening">${escapeHtml((window.hopplayT && window.hopplayT("listening")) || "Now playing")}</div>
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
            <div class="times"><span>${cur}</span><span>${dur}</span></div>
          </div>
        </div>`;
    } else if (style === "minimal") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "island") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>`;
    } else if (style === "neon" || style === "glass" || style === "toast" || style === "hologram" || style === "lowerthird") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "ticker") {
      inner += `
        ${cover}
        <div class="marquee ticker-text"><div class="title">${escapeHtml(title)}  ·  ${escapeHtml(artist)}  ·  ${cur} / ${dur}</div></div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>`;
    } else if (style === "polaroid") {
      inner += `
        ${cover}
        <div class="songinfo">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "cassette") {
      inner += `
        <div class="cass-window">${cover}</div>
        <div class="cass-reels"><i></i><i></i></div>
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>`;
    } else if (style === "poster") {
      inner += `
        ${cover}
        <div class="poster-cap">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "gameboy") {
      inner += `
        <div class="gb-screen">
          ${cover}
          <div class="meta">
            <div class="title">${escapeHtml(title)}</div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>
        <div class="gb-btns"><b></b><b></b></div>`;
    } else if (style === "crt") {
      inner += `
        <div class="crt-scan"></div>
        <div class="meta">
          <div class="crt-label">NOW PLAYING</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="times"><span>${cur}</span><span>${dur}</span></div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "ticket") {
      inner += `
        <div class="ticket-stub">LIVE</div>
        ${cover}
        <div class="meta">
          <div class="tix-kicker">ADMIT ONE</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="times"><span>${cur}</span><span>${dur}</span></div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "sticky") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "pixel") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="px-name">★ NOW PLAYING</div>
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "stamp") {
      inner += `
        ${cover}
        <div class="stamp-mark">NOW</div>
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "radio") {
      inner += `
        <div class="radio-grille"></div>
        <div class="meta">
          ${cover}
          <div>
            <div class="radio-fm">FM 98.7</div>
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    } else if (style === "vhs") {
      inner += `
        <div class="vhs-label">
          <div class="vhs-tab">SP</div>
          ${cover}
          <div class="meta">
            <div class="vhs-kicker">TRACK 01</div>
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    } else if (style === "bubble") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <i class="bubble-tail"></i>`;
    } else if (style === "watch") {
      inner += `
        <div class="watch-bezel">
          ${cover}
          <div class="watch-info">
            <div class="title">${escapeHtml(title)}</div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    } else if (style === "newspaper") {
      inner += `
        <div class="news-mast">THE DAILY MIX</div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "notebook") {
      inner += `
        <div class="nb-margin"></div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "tarot") {
      inner += `
        <div class="tarot-orn">✦</div>
        ${cover}
        <div class="meta">
          <div class="tarot-arcana">NOW PLAYING</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "comic") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="comic-pow">NOW!</div>
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "folder") {
      inner += `
        <div class="folder-tab">TRACK</div>
        <div class="folder-body">
          ${cover}
          <div class="meta">
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    } else if (style === "badge") {
      inner += `
        ${cover}
        <div class="badge-ring"></div>
        <div class="meta">
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "arcade") {
      inner += `
        <div class="arcade-marquee">HOPPLAY</div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>
        <div class="arcade-btns"><b></b><b></b><b></b></div>`;
    } else if (style === "synthwave") {
      inner += `
        <div class="sw-sun"></div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "chalkboard") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "receipt") {
      inner += `
        <div class="rc-shop">HOPPLAY MART</div>
        <div class="rc-line">************************</div>
        <div class="meta">
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="times"><span>${cur}</span><span>${dur}</span></div>
        </div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        <div class="rc-line">THANK YOU</div>`;
    } else if (style === "postcard") {
      inner += `
        ${cover}
        <div class="pc-stamp"></div>
        <div class="meta">
          <div class="pc-hello">Greetings from the mix</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "hud") {
      inner += `
        <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
        ${cover}
        <div class="meta">
          <div class="hud-tag">SYS // AUDIO</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "chat") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="chat-from">Spotify</div>
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "wanted") {
      inner += `
        <div class="wanted-head">WANTED</div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="wanted-rew">REWARD: ONE LISTEN</div>
        </div>`;
    } else if (style === "kawaii") {
      inner += `
        <div class="kw-ears"><i></i><i></i></div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">♡ ${escapeHtml(title)} ♡</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "brutalist") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="br-kicker">NOW</div>
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "chrome") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "origami") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "frost") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "wood") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "jukebox") {
      inner += `
        <div class="jb-top"></div>
        ${cover}
        <div class="meta">
          <div class="jb-sel">A7</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "walkman") {
      inner += `
        <div class="wm-deck">
          ${cover}
          <div class="wm-window"></div>
        </div>
        <div class="meta">
          <div class="wm-brand">HOPPLAY</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "floppy") {
      inner += `
        <div class="fl-shutter"></div>
        ${cover}
        <div class="meta">
          <div class="fl-label">TRACK.DAT</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>`;
    } else if (style === "filmstrip") {
      inner += `
        <div class="film-holes"><i></i><i></i><i></i><i></i><i></i></div>
        ${cover}
        <div class="meta">
          <div class="film-code">24 FPS</div>
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="film-holes"><i></i><i></i><i></i><i></i><i></i></div>`;
    } else if (style === "subway") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="sub-line">● NOW PLAYING</div>
          <div class="title">${escapeHtml(title)}</div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "sakura") {
      inner += `
        <div class="sk-petals"><i></i><i></i><i></i></div>
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "orb") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="times"><span>${cur}</span><span>${dur}</span></div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "orbmini") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "covercard") {
      inner += `
        ${cover}
        <div class="cc-cap">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
          <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
        </div>`;
    } else if (style === "stackrow") {
      inner += `
        ${cover}
        <div class="stack-rows">
          <div class="stack-now">
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
          </div>
          <div class="stack-sub">
            <div class="artist">${escapeHtml(np.album || artist)}</div>
            <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    } else if (style === "eqbar") {
      inner += `
        <div class="eq">${viz}</div>
        <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
        <div class="artist">${escapeHtml(artist)}</div>
        <div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div>`;
    } else if (style === "minipill") {
      inner += `
        ${cover}
        <div class="meta">
          <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
          <div class="artist">${escapeHtml(artist)}</div>
        </div>
        <div class="eq">${viz}</div>`;
    } else if (style === "sleeve") {
      inner += `
        <div class="sleeve-jacket">${cover}</div>
        <div class="sleeve-disc">
          <div class="vinyl-spin">
            <div class="vinyl-grooves"></div>
            <div class="vinyl-spindle"></div>
          </div>
        </div>`;
    } else if (style === "galaxybunny") {
      inner = `
        <svg class="gb-skin" viewBox="80 60 1630 815" aria-hidden="true">
          <image href="/brand/galaxy-bunny-clean.png" width="1728" height="1152"/>
        </svg>
        <div class="gb-sparkles" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i class="gb-ear-star"></i><i class="gb-ear-star"></i><i class="gb-ear-star"></i><i class="gb-ear-star"></i>
          <i class="gb-halo-star"></i><i class="gb-halo-star"></i><i class="gb-halo-star"></i><i class="gb-halo-star"></i>
        </div>
        <div class="gb-body">
          ${cover}
          <div class="meta">
            <div class="marquee"><div class="title">${escapeHtml(title)}</div></div>
            <div class="artist">${escapeHtml(artist)}</div>
            <div class="gb-prog"><span>${cur}</span><div class="playbar" id="playbar"><div id="active" style="width:${pct}%"></div></div><span>${dur}</span></div>
          </div>
        </div>
        <div class="gb-status" role="status" aria-live="polite"></div>`;
    }

    playerEl.innerHTML = inner;
    playerEl.querySelectorAll(".cover img").forEach((artwork) => {
      artwork.addEventListener("error", () => {
        artwork.src = "/brand/hopplay-logo.png";
        artwork.classList.add("cover-placeholder");
      }, { once: true });
    });
    if (style === "galaxybunny") {
      $("#playbar", playerEl).insertAdjacentHTML("beforeend", '<input class="gb-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Position de lecture" />');
      syncControls();
    }
    const titleEl = $(".title", playerEl);
    if (titleEl && titleEl.scrollWidth > titleEl.parentElement.clientWidth + 4) {
      titleEl.classList.add("animated-title");
      titleEl.parentElement.classList.add("is-scrolling");
    }
  }

  let controlBusy = false;
  function syncControls() {
    if (!now) return;
    playerEl.querySelectorAll(".gb-button").forEach((button) => {
      const action = button.dataset.action;
      button.disabled = !now.title;
      button.setAttribute("aria-disabled", String(controlBusy || !now.title));
      if (action === "toggle") button.setAttribute("aria-label", now.is_playing ? "Pause" : "Lecture");
      if (action === "shuffle") button.setAttribute("aria-pressed", String(!!now.shuffle_state));
      if (action === "repeat") {
        button.setAttribute("aria-pressed", String(now.repeat_state !== "off"));
        button.dataset.repeat = now.repeat_state;
        button.setAttribute("aria-label", `Répétition : ${now.repeat_state === "track" ? "ce titre" : now.repeat_state === "context" ? "tous les titres" : "désactivée"}`);
      }
      button.title = button.getAttribute("aria-label");
    });
    const seek = $(".gb-seek", playerEl);
    if (seek) {
      seek.disabled = !now.duration_ms;
      if (document.activeElement !== seek) seek.value = now.duration_ms ? localProgress / now.duration_ms * 100 : 0;
      seek.setAttribute("aria-valuetext", `${fmt(localProgress)} / ${fmt(now.duration_ms || 0)}`);
    }
  }

  async function command(action, value) {
    if (controlBusy) return;
    controlBusy = true;
    syncControls();
    const status = $(".gb-status", playerEl);
    if (status) status.textContent = "";
    try {
      const response = await fetch(`/api/player/${action}`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }), signal: AbortSignal.timeout(12000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Commande impossible.");
      await poll();
    } catch (error) {
      const message = $(".gb-status", playerEl);
      if (message) message.textContent = error.message;
    } finally {
      controlBusy = false;
      syncControls();
    }
  }
  playerEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button || !now) return;
    let action = button.dataset.action;
    let value;
    if (action === "toggle") action = now.is_playing ? "pause" : "play";
    if (action === "shuffle") value = !now.shuffle_state;
    if (action === "repeat") value = { off: "context", context: "track", track: "off" }[now.repeat_state || "off"];
    command(action, value);
  });
  playerEl.addEventListener("change", (event) => {
    if (event.target.matches(".gb-seek") && now?.duration_ms) command("seek", Math.round(Number(event.target.value) / 100 * now.duration_ms));
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function applyMotion(profile) {
    const appear = Math.max(0.05, Number(profile.appearDuration) || 0.7);
    const hide = Math.max(0.05, Number(profile.hideDuration) || 0.45);
    playerEl.style.setProperty("--appear-dur", `${appear}s`);
    playerEl.style.setProperty("--hide-dur", `${hide}s`);
    playerEl.dataset.fx = profile.appearEffect || "slide";
  }

  function setVisible(show) {
    clearTimeout(appearTimer);
    if (show) {
      const delay = Math.max(0, Number(settings && settings.appearDelay) || 0) * 1000;
      appearTimer = setTimeout(() => {
        playerEl.classList.remove("hidden");
        playerEl.setAttribute("aria-hidden", "false");
      }, delay);
    } else {
      playerEl.classList.add("hidden");
      playerEl.setAttribute("aria-hidden", "true");
    }
  }

  function handleVisibility(profile, np, trackChanged) {
    clearTimeout(hideTimer);
    applyMotion(profile);
    if (!np.item && !np.title) {
      setVisible(false);
      return;
    }

    if (profile.songChangeOnly) {
      if (trackChanged) {
        playerEl.classList.add("hidden");
        setVisible(true);
        clearTimeout(songSwitchTimer);
        const vis = Math.max(0.3, Number(profile.songChangeDuration) || 8);
        songSwitchTimer = setTimeout(() => setVisible(false), vis * 1000);
      }
      return;
    }

    if (profile.hideOnPause && !np.is_playing) {
      hideTimer = setTimeout(
        () => setVisible(false),
        (Number(profile.hideOnPauseDelay) || 0) * 1000
      );
      return;
    }

    if (trackChanged) {
      playerEl.classList.add("hidden");
    }
    setVisible(true);
  }

  function tick() {
    if (!now || !settings) return;
    if (now.is_playing) {
      localProgress = Math.min(
        now.duration_ms || localProgress,
        (now.progress_ms || 0) + (Date.now() - lastPoll)
      );
    } else {
      localProgress = now.progress_ms ?? localProgress;
    }
    const bar = document.getElementById("active");
    if (bar && now.duration_ms) {
      bar.style.width = `${Math.min(100, (localProgress / now.duration_ms) * 100)}%`;
    }
    syncControls();
    const style = settings.player;
    if (style === "shell") {
      const hash = $(".hash", playerEl);
      if (hash) hash.textContent = `[${hashProgress(localProgress, now.duration_ms)}]`;
    }
    playerEl.querySelectorAll(".times span, .songtime > span, .gb-prog > span").forEach((el, i, arr) => {
      if (arr.length === 2) el.textContent = i === 0 ? fmt(localProgress) : fmt(now.duration_ms);
    });
    if (style === "compact" || style === "boxy") {
      const spans = playerEl.querySelectorAll(".songtime span");
      if (spans[0]) spans[0].textContent = fmt(localProgress);
      if (spans[1] && style === "compact") spans[1].textContent = fmt(now.duration_ms);
      if (style === "boxy") {
        const t = playerEl.querySelectorAll(".times span");
        if (t[0]) t[0].textContent = fmt(localProgress);
        if (t[1]) t[1].textContent = fmt(now.duration_ms);
      }
    }
  }

  async function poll() {
    try {
      const qs = profileId ? `?profile=${encodeURIComponent(profileId)}` : "";
      const [sRes, nRes] = await Promise.all([
        fetch(`/api/settings${qs}`),
        fetch(`/api/now-playing${qs}`),
      ]);
      const sJson = await sRes.json();
      const nJson = await nRes.json();
      settings = sJson.profile || sJson.profiles?.[0];
      now = nJson;
      if (!now.title || !now.image) canvasUrl = null;
      lastPoll = Date.now();
      localProgress = now.progress_ms || 0;

      const trackId = now.trackId || now.title || "";
      const trackChanged = trackId && trackId !== lastTrackId;
      if (trackChanged) {
        lastTrackId = trackId;
        canvasUrl = null;
        if (settings.cover === "canvas" && now.trackId && !String(now.trackId).startsWith("demo-")) {
          try {
            const c = await fetch(`/api/canvas/${now.trackId}`).then((r) => r.json());
            canvasUrl = c.url;
          } catch {
            canvasUrl = null;
          }
        }
      }
      if (settings.magicColors && (trackChanged || !lastMagic)) {
        const src = now.image ? proxied(now.image) : "";
        accent = await extractAccent(src);
      } else if (!settings.magicColors) {
        accent = settings.accentColor || "#1db954";
      }
      lastMagic = !!settings.magicColors;
      applyColors(settings, accent);

      const signature = JSON.stringify({
        player: settings.player,
        playerScale: settings.playerScale,
        playerOpacity: settings.playerOpacity,
        cover: settings.cover,
        coverGlow: settings.coverGlow,
        playerGlow: settings.playerGlow,
        magicColors: settings.magicColors,
        accentColor: settings.accentColor,
        theme: settings.theme,
        coverBlur: settings.coverBlur,
        hideVisualizer: settings.hideVisualizer,
        placement: settings.placement,
        appearEffect: settings.appearEffect,
        appearDuration: settings.appearDuration,
        hideDuration: settings.hideDuration,
        appearDelay: settings.appearDelay,
        track: trackId,
        image: now.image,
        canvasUrl,
        title: now.title,
        artist: now.artist,
        ui: 13,
      });
      if (signature !== lastSig) {
        lastSig = signature;
        render(settings, now);
      }
      playerEl.classList.toggle("playing", !!now.is_playing);
      syncControls();
      if (isPreview && (now.needsAuth || now.message) && !now.title) {
        playerEl.className = "player compact";
        playerEl.classList.remove("hidden");
        playerEl.innerHTML = `<div class="card songinfo" style="padding:18px 20px;max-width:420px">
          <div class="title">${escapeHtml(now.needsAuth ? "Spotify pas encore autorisé" : "En attente de lecture")}</div>
          <div class="artist">${escapeHtml(now.message || "Lance une musique dans Spotify.")}</div>
        </div>`;
        lastSig = "";
      } else {
        handleVisibility(settings, now, trackChanged || (!lastPlaying && now.is_playing));
      }
      lastPlaying = !!now.is_playing;
    } catch (err) {
      console.warn(err);
    }
  }

  poll();
  setInterval(poll, 2000);
  setInterval(tick, 200);
})();
