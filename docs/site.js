"use strict";

const SITE = {
  detect() {
    const params = new URLSearchParams(location.search);
    const query = params.get("lang");
    if (query && window.I18N[query]) return query;
    try {
      const saved = localStorage.getItem("gb-lang");
      if (saved && window.I18N[saved]) return saved;
    } catch {
      /* ignore */
    }
    const nav = (navigator.languages || [navigator.language || "fr"]).map((s) => String(s).toLowerCase());
    for (const n of nav) {
      if (n.startsWith("zh") && (n.includes("tw") || n.includes("hk") || n.includes("hant") || n.includes("mo"))) {
        return "zh-TW";
      }
      if (window.I18N[n]) return n;
      const base = n.split("-")[0];
      if (base === "zh") return "zh";
      if (window.I18N[base]) return base;
    }
    return "fr";
  },

  t(lang, key) {
    return (window.I18N[lang] && window.I18N[lang][key]) || window.I18N.en[key] || window.I18N.fr[key] || key;
  },

  apply(lang) {
    const meta = (window.I18N_LANGS || []).find((item) => item.id === lang) || { dir: "ltr" };
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir || "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = SITE.t(lang, el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = SITE.t(lang, el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", SITE.t(lang, el.getAttribute("data-i18n-placeholder")));
    });
    const title = SITE.t(lang, "metaTitle");
    const description = SITE.t(lang, "metaDescription");
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDesc) ogDesc.setAttribute("content", description);
    const select = document.getElementById("lang");
    if (select && select.value !== lang) select.value = lang;
    try {
      localStorage.setItem("gb-lang", lang);
    } catch {
      /* ignore */
    }
    const url = new URL(location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
    document.dispatchEvent(new CustomEvent("gb-lang", { detail: lang }));
  },

  fillSelect(select) {
    if (!select) return;
    select.innerHTML = "";
    (window.I18N_LANGS || []).forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      select.appendChild(option);
    });
  },

  boot() {
    const select = document.getElementById("lang");
    SITE.fillSelect(select);
    const lang = SITE.detect();
    if (select) {
      select.value = lang;
      select.addEventListener("change", () => SITE.apply(select.value));
    }
    SITE.apply(lang);
  }
};

window.SITE = SITE;
document.addEventListener("DOMContentLoaded", () => SITE.boot());
