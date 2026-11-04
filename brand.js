/* Andy Plester Golf — shared site behaviour */

// Header background on scroll
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Mark the current page in both navigation menus.
(function () {
  var file = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-link").forEach(function (link) {
    var href = (link.getAttribute("href") || "").split("#")[0];
    if (!href) return;
    var linkFile = href.split("/").pop() || "index.html";
    if (linkFile === file || (file === "" && linkFile === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
})();

// Mobile menu
(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var backdrop = document.querySelector(".menu-backdrop");
  if (!header || !toggle || !menu) return;

  function open() {
    header.classList.add("is-open");
    menu.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    header.classList.remove("is-open");
    menu.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    header.classList.contains("is-open") ? close() : open();
  });
  if (backdrop) backdrop.addEventListener("click", close);
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("is-open")) { close(); toggle.focus(); }
  });
})();

// Smooth-scroll for same-page anchors (accounting for fixed header)
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var header = document.querySelector(".site-header");
      var offset = header ? header.getBoundingClientRect().height + 16 : 76;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });
})();

// Reveal-on-scroll with staggered groups (respects reduced motion)
(function () {
  // Turn each [data-stagger] container's children into reveal items with an
  // incremental delay, so grids fan in one after another.
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    var step = parseInt(group.getAttribute("data-stagger"), 10) || 85;
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.classList.add("reveal");
      child.style.setProperty("--rd", (i * step) + "ms");
    });
  });

  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (e) { e.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
  els.forEach(function (e) { io.observe(e); });
})();

// Approximate local-currency estimate next to USD prices.
// Skillest charges in USD, so this is only a friendly "≈" guide; rates are approximate.
(function () {
  var els = document.querySelectorAll(".price[data-usd]");
  if (!els.length) return;
  var RATES = { GBP:0.79, EUR:0.92, CAD:1.37, AUD:1.53, NZD:1.66, CHF:0.88,
    SEK:10.7, NOK:10.9, DKK:6.9, ZAR:18.5, JPY:157, INR:83, AED:3.67, SGD:1.35, HKD:7.8 };
  var REGION = { GB:"GBP", IE:"EUR", DE:"EUR", FR:"EUR", ES:"EUR", IT:"EUR", NL:"EUR",
    BE:"EUR", AT:"EUR", PT:"EUR", FI:"EUR", GR:"EUR", LU:"EUR", SK:"EUR", SI:"EUR",
    EE:"EUR", LV:"EUR", LT:"EUR", CY:"EUR", MT:"EUR", CA:"CAD", AU:"AUD", NZ:"NZD",
    CH:"CHF", SE:"SEK", NO:"NOK", DK:"DKK", ZA:"ZAR", JP:"JPY", IN:"INR", AE:"AED",
    SG:"SGD", HK:"HKD" };
  var loc = navigator.language || "en-US";
  var region = (loc.split("-")[1] || "").toUpperCase();
  var ccy = REGION[region];
  if (!ccy || !RATES[ccy]) return; // USD or unsupported region: leave USD only
  var fmt;
  try { fmt = new Intl.NumberFormat(loc, { style: "currency", currency: ccy, maximumFractionDigits: 0 }); }
  catch (e) { return; }
  els.forEach(function (el) {
    var usd = parseFloat(el.getAttribute("data-usd"));
    if (!usd) return;
    var per = el.querySelector(".per") ? "/mo" : "";
    var note = document.createElement("div");
    note.className = "price-local";
    note.textContent = "≈ " + fmt.format(Math.round(usd * RATES[ccy])) + per;
    el.insertAdjacentElement("afterend", note);
  });
})();
