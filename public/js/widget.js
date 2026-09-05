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
    const s = Math.max(0, Math.floor(ms / 1000));
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
          <div class="vinyl-label">${img ? `<img src="${img}" alt="" />` : ""}</div>
          <div class="vinyl-spindle"></div>
        </div>
      </div>`;
    }
    return `
      <div class="cover ${type} ${glow}">
        ${img ? `<img class="${ken}" src="${img}" alt="" />` : ""}
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
    playerEl.className = `player ${style}${np.is_playing ? " playing" : ""}${profile.coverBlur ? " blur-on" : ""}${profile.hideVisualizer ? " hide-viz" : ""}`;

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
    }

    playerEl.innerHTML = inner;
    const titleEl = $(".title", playerEl);
    if (titleEl && titleEl.scrollWidth > titleEl.parentElement.clientWidth + 4) {
      titleEl.classList.add("animated-title");
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setVisible(show) {
    playerEl.classList.toggle("hidden", !show);
    playerEl.setAttribute("aria-hidden", show ? "false" : "true");
  }

  function handleVisibility(profile, np, trackChanged) {
    clearTimeout(hideTimer);
    if (!np.item && !np.title) {
      setVisible(false);
      return;
    }

    if (profile.songChangeOnly) {
      if (trackChanged) {
        setVisible(true);
        clearTimeout(songSwitchTimer);
        songSwitchTimer = setTimeout(
          () => setVisible(false),
          (Number(profile.songChangeDuration) || 8) * 1000
        );
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
      localProgress = now.progress_ms || localProgress;
    }
    const bar = document.getElementById("active");
    if (bar && now.duration_ms) {
      bar.style.width = `${Math.min(100, (localProgress / now.duration_ms) * 100)}%`;
    }
    const style = settings.player;
    if (style === "shell") {
      const hash = $(".hash", playerEl);
      if (hash) hash.textContent = `[${hashProgress(localProgress, now.duration_ms)}]`;
    }
    playerEl.querySelectorAll(".times span, .songtime > span").forEach((el, i, arr) => {
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
        fetch("/api/now-playing"),
      ]);
      const sJson = await sRes.json();
      const nJson = await nRes.json();
      settings = sJson.profile || sJson.profiles?.[0];
      now = nJson;
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
        cover: settings.cover,
        coverGlow: settings.coverGlow,
        magicColors: settings.magicColors,
        accentColor: settings.accentColor,
        theme: settings.theme,
        coverBlur: settings.coverBlur,
        hideVisualizer: settings.hideVisualizer,
        placement: settings.placement,
        track: trackId,
        image: now.image,
        canvasUrl,
        title: now.title,
        artist: now.artist,
        ui: 4,
      });
      if (signature !== lastSig) {
        lastSig = signature;
        render(settings, now);
      }
      playerEl.classList.toggle("playing", !!now.is_playing);
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
  setInterval(poll, 1000);
  setInterval(tick, 200);
})();
