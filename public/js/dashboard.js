(() => {
  const $ = (id) => document.getElementById(id);
  let settings = null;
  let status = null;

  const fields = [
    "coverGlow",
    "playerGlow",
    "magicColors",
    "coverBlur",
    "hideVisualizer",
    "hideOnPause",
    "songChangeOnly",
  ];

  function fillLangSelect() {
    const sel = $("lang-select");
    if (!sel || sel.options.length) return;
    const current = localStorage.getItem("hopplay-lang") || (navigator.language || "en").slice(0, 2);
    (window.HOPPLAY_LANGS || []).forEach(([code, label]) => {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = label;
      if (code === current || (code === "en" && !window.HOPPLAY_I18N[current] && !sel.value)) opt.selected = true;
      sel.appendChild(opt);
    });
    if (window.HOPPLAY_I18N[current]) sel.value = current;
    sel.addEventListener("change", () => {
      localStorage.setItem("hopplay-lang", sel.value);
      window.hopplayApplyI18n();
      render();
    });
  }

  async function load() {
    fillLangSelect();
    window.hopplayApplyI18n();
    const [s, st] = await Promise.all([
      fetch("/api/settings").then((r) => r.json()),
      fetch("/api/status").then((r) => r.json()),
    ]);
    settings = s;
    status = st;
    render();
  }

  function currentProfile() {
    return settings.profiles.find((p) => p.id === settings.activeProfile) || settings.profiles[0];
  }

  function render() {
    const p = currentProfile();
    const select = $("profile-select");
    select.innerHTML = settings.profiles
      .map((x) => `<option value="${x.id}" ${x.id === p.id ? "selected" : ""}>${escapeHtml(x.name)}</option>`)
      .join("");
    $("profile-name").value = p.name;

    document.querySelectorAll("#player-styles button").forEach((b) => {
      b.classList.toggle("active", b.dataset.player === p.player);
    });
    document.querySelectorAll("#cover-styles button").forEach((b) => {
      b.classList.toggle("active", b.dataset.cover === p.cover);
    });
    document.querySelectorAll("#place-grid button").forEach((b) => {
      b.classList.toggle("active", b.dataset.place === (p.placement || "bl"));
    });

    fields.forEach((k) => {
      const el = $(k);
      if (el) el.checked = !!p[k];
    });
    $("hideOnPauseDelay").value = p.hideOnPauseDelay;
    $("songChangeDuration").value = p.songChangeDuration;
    $("theme").value = p.theme;
    $("accentColor").value = p.accentColor || "#1db954";
    $("color-row").style.opacity = p.magicColors ? "0.4" : "1";

    $("redirect-uri").textContent = status.redirectUri;
    $("clientId").value = status.clientId || $("clientId").value;
    $("widget-url").textContent = widgetUrl(p.id);
    const previewSrc = `/widget.html?preview=1&profile=${encodeURIComponent(p.id)}`;
    const iframe = $("preview");
    if (!iframe.getAttribute("src") || !iframe.getAttribute("src").includes(`profile=${p.id}`)) {
      iframe.src = previewSrc;
    }

    const badge = $("conn-badge");
    const banner = $("auth-banner");
    if (status.connected) {
      badge.textContent = window.hopplayT("connected");
      badge.classList.remove("off");
      banner.classList.add("hidden");
    } else {
      badge.textContent = window.hopplayT("demoMode");
      badge.classList.add("off");
      banner.classList.remove("hidden");
    }

    const params = new URLSearchParams(location.search);
    const msg = $("spotify-msg");
    if (params.get("spotify") === "connected") {
      msg.textContent = window.hopplayT("spotifyConnected");
      msg.classList.remove("err");
    } else if (params.get("spotify") === "error") {
      msg.textContent = params.get("message") || window.hopplayT("spotifyError");
      msg.classList.add("err");
    }
  }

  function widgetUrl(profileId) {
    return `http://127.0.0.1:${location.port || 3000}/widget.html?token=${status.widgetToken}&profile=${profileId}`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  async function saveProfile(patch) {
    const p = { ...currentProfile(), ...patch };
    settings.activeProfile = p.id;
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile: p, activeProfile: p.id }),
    });
    await load();
  }

  $("profile-select").addEventListener("change", async (e) => {
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activeProfile: e.target.value }),
    });
    await load();
  });

  $("profile-name").addEventListener("change", () => saveProfile({ name: $("profile-name").value }));

  $("btn-add-profile").addEventListener("click", async () => {
    await fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: window.hopplayT("newProfile") }),
    });
    await load();
  });

  $("btn-del-profile").addEventListener("click", async () => {
    const p = currentProfile();
    await fetch(`/api/profiles/${p.id}`, { method: "DELETE" });
    await load();
  });

  document.querySelectorAll("#player-styles button").forEach((b) => {
    b.addEventListener("click", () => saveProfile({ player: b.dataset.player }));
  });
  document.querySelectorAll("#cover-styles button").forEach((b) => {
    b.addEventListener("click", () => saveProfile({ cover: b.dataset.cover }));
  });
  document.querySelectorAll("#place-grid button").forEach((b) => {
    b.addEventListener("click", () => saveProfile({ placement: b.dataset.place }));
  });

  fields.forEach((k) => {
    $(k).addEventListener("change", () => saveProfile({ [k]: $(k).checked }));
  });
  $("hideOnPauseDelay").addEventListener("change", () => saveProfile({ hideOnPauseDelay: Number($("hideOnPauseDelay").value) }));
  $("songChangeDuration").addEventListener("change", () => saveProfile({ songChangeDuration: Number($("songChangeDuration").value) }));
  $("theme").addEventListener("change", () => saveProfile({ theme: $("theme").value }));
  $("accentColor").addEventListener("input", () => saveProfile({ accentColor: $("accentColor").value }));

  $("btn-save-creds").addEventListener("click", async () => {
    const msg = $("spotify-msg");
    msg.textContent = window.hopplayT("verifying");
    msg.classList.remove("err");
    const res = await fetch("/api/spotify/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: $("clientId").value.trim(),
        clientSecret: $("clientSecret").value.trim(),
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      msg.textContent = json.error || "Erreur";
      msg.classList.add("err");
    } else {
      msg.textContent = window.hopplayT("credsOk");
      msg.classList.remove("err");
      window.location.href = json.loginUrl || "/api/spotify/login";
    }
  });

  $("btn-disconnect").addEventListener("click", async () => {
    await fetch("/api/spotify/disconnect", { method: "POST" });
    await load();
  });

  $("btn-copy-redirect").addEventListener("click", () => {
    navigator.clipboard.writeText($("redirect-uri").textContent);
  });
  $("btn-copy-url").addEventListener("click", () => {
    navigator.clipboard.writeText($("widget-url").textContent);
  });
  $("btn-demo-next").addEventListener("click", async () => {
    await fetch("/api/demo/next", { method: "POST" });
    await load();
  });
  $("btn-regen").addEventListener("click", async () => {
    await fetch("/api/token/regenerate", { method: "POST" });
    await load();
  });
  $("btn-stop").addEventListener("click", async () => {
    if (!confirm(window.hopplayT("stopConfirm"))) return;
    try {
      await fetch("/api/stop", { method: "POST" });
    } catch {}
    document.body.innerHTML = `<main style="padding:48px;max-width:520px"><h1>Hopplay</h1><p>${window.hopplayT("serverStopped")}</p><p class="sub">${window.hopplayT("startAgain")}</p></main>`;
  });


  load();
})();
