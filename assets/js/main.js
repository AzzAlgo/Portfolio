/* =============================================================
   main.js — Azzam HANNOUF site behaviour
   No frameworks. No external runtime dependencies.
   ============================================================= */
'use strict';

(() => {

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ----------- THEME (dark / light) ----------- */
  const STORAGE_KEY = 'azzam-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const btn = $('#theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function initTheme() {
    const stored = (() => { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } })();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored || (prefersDark ? 'dark' : 'light'));

    const btn = $('#theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore quota errors */ }
    });
  }

  /* ----------- MOBILE NAV ----------- */
  function initMobileNav() {
    const toggle   = $('#nav-toggle');
    const menu     = $('#nav-menu');
    const backdrop = $('#nav-backdrop');
    if (!toggle || !menu || !backdrop) return;

    const open = () => {
      menu.dataset.open = 'true';
      backdrop.dataset.open = 'true';
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    };
    const close = () => {
      menu.dataset.open = 'false';
      backdrop.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    };

    toggle.addEventListener('click', () => {
      (menu.dataset.open === 'true' ? close : open)();
    });
    backdrop.addEventListener('click', close);
    $$('.nav__menu a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ----------- CV DOWNLOAD DROPDOWN ----------- */
  function initCvDropdown() {
    const wrap   = $('#cv-dropdown');
    const toggle = $('#cv-toggle');
    if (!wrap || !toggle) return;

    const close = () => { wrap.dataset.open = 'false'; toggle.setAttribute('aria-expanded', 'false'); };
    const open  = () => { wrap.dataset.open = 'true';  toggle.setAttribute('aria-expanded', 'true'); };

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      (wrap.dataset.open === 'true' ? close : open)();
    });
    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    $$('.cv-dropdown__item').forEach(a => a.addEventListener('click', close));
  }

  /* ----------- HEADER SHADOW ON SCROLL ----------- */
  function initHeaderScroll() {
    const header = $('#header');
    if (!header) return;
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;';
    document.body.prepend(sentinel);
    const io = new IntersectionObserver(entries => {
      header.classList.toggle('header--scrolled', !entries[0].isIntersecting);
    }, { threshold: 0 });
    io.observe(sentinel);
  }

  /* ----------- SCROLL-SPY (active nav link via IntersectionObserver) ----------- */
  function initScrollSpy() {
    const sections = $$('section[id]');
    const links = $$('.nav__list a[href^="#"]');
    if (!sections.length || !links.length) return;

    const linkBySection = new Map();
    for (const link of links) {
      const id = link.getAttribute('href').slice(1);
      if (!linkBySection.has(id)) linkBySection.set(id, []);
      linkBySection.get(id).push(link);
    }

    let activeId = null;
    const setActive = (id) => {
      if (id === activeId) return;
      activeId = id;
      links.forEach(l => l.removeAttribute('aria-current'));
      const matches = linkBySection.get(id);
      if (matches) matches.forEach(l => l.setAttribute('aria-current', 'true'));
    };

    const io = new IntersectionObserver(entries => {
      // Pick the entry most-visible in the viewport.
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(s => io.observe(s));
  }

  /* ----------- CAREER TABS ----------- */
  function initCareerTabs() {
    const tabs = $$('.career__tab');
    const panels = $$('.career__panel');
    if (!tabs.length || !panels.length) return;

    function activate(tab) {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(p => {
        const on = p.id === tab.dataset.target;
        p.dataset.active = on ? 'true' : 'false';
        if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
      });
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', e => {
        let next = null;
        if (e.key === 'ArrowRight') next = tabs[(idx + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(idx - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); activate(next); next.focus(); }
      });
    });
  }

  /* ----------- SCROLL-UP BUTTON (visibility via IntersectionObserver) ----------- */
  function initScrollUp() {
    const btn = $('#scroll-up');
    if (!btn) return;
    const trigger = document.createElement('div');
    trigger.style.cssText = 'position:absolute;top:80vh;left:0;width:1px;height:1px;pointer-events:none;';
    document.body.prepend(trigger);
    const io = new IntersectionObserver(entries => {
      btn.dataset.visible = (!entries[0].isIntersecting) ? 'true' : 'false';
    }, { threshold: 0 });
    io.observe(trigger);
  }

  /* ----------- INIT ----------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initTheme();
    initMobileNav();
    initCvDropdown();
    initHeaderScroll();
    initScrollSpy();
    initCareerTabs();
    initScrollUp();
  }

})();
