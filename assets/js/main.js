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

  /* ----------- MOTION HELPERS ----------- */
  const reduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const rafThrottle = (fn) => {
    let frame = null, lastArgs = null;
    return (...args) => {
      lastArgs = args;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        fn(...lastArgs);
      });
    };
  };

  /* ----------- A1 MAGNETIC PRIMARY CTA ----------- */
  function initMagneticCTA() {
    if (reduced() || !canHover()) return;
    const btn = document.querySelector('.hero__ctas .btn--primary');
    if (!btn) return;
    const parent = btn.parentElement;
    const RADIUS = 80;
    const MAX = 4;
    let rect = null;
    const refreshRect = () => { rect = btn.getBoundingClientRect(); };
    const onMove = rafThrottle((e) => {
      if (!rect) refreshRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < RADIUS) {
        const k = (RADIUS - dist) / RADIUS;
        btn.style.transform = `translate(${dx * k * (MAX / RADIUS)}px, ${dy * k * (MAX / RADIUS)}px)`;
      } else {
        btn.style.transform = '';
      }
    });
    const onLeave = () => { btn.style.transform = ''; };
    btn.style.transition = 'transform 300ms ease-out';
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    window.addEventListener('scroll', () => { rect = null; }, { passive: true });
    window.addEventListener('resize', () => { rect = null; });
  }

  /* ----------- A2 STAT HOVER FLICKER ----------- */
  function initStatFlicker() {
    if (reduced() || !canHover()) return;
    const stats = $$('.hero__stats .hero__stat-num');
    stats.forEach((el) => {
      const original = el.textContent;
      let busy = false;
      el.addEventListener('mouseenter', () => {
        if (busy) return;
        busy = true;
        const bumped = original.replace(/\d+/, (n) => String(parseInt(n, 10) + 1));
        el.textContent = bumped;
        setTimeout(() => { el.textContent = original; }, 150);
        setTimeout(() => { busy = false; }, 300);
      });
    });
  }

  /* ----------- A3 ENGAGEMENT BORDER SWEEP — lock state ----------- */
  function initEngagementSweepLock() {
    if (!canHover()) return; /* touch devices: hover CSS won't fire anyway */
    $$('.engagement').forEach((card) => {
      const onEnter = () => {
        /* wait one frame to let the CSS transition start, then lock at end */
        setTimeout(() => card.classList.add('is-swept'), 650);
        card.removeEventListener('mouseenter', onEnter);
      };
      card.addEventListener('mouseenter', onEnter, { once: false });
    });
  }

  /* ----------- A4 CAREER TIMELINE PROGRESSIVE DRAW ----------- */
  function initTimelineDraw() {
    const section = $('#career');
    if (!section) return;
    /* Inject one rule per panel timeline (so each tab has its own rule) */
    $$('.career__panel .timeline', section).forEach((tl) => {
      if (tl.querySelector('.timeline__rule')) return;
      const rule = document.createElement('span');
      rule.className = 'timeline__rule';
      rule.setAttribute('aria-hidden', 'true');
      tl.prepend(rule);
    });
    if (reduced()) return; /* CSS shows scaleY(1) under reduced motion */
    const rules = $$('.career__panel .timeline__rule', section);
    const update = rafThrottle(() => {
      const rect = section.getBoundingClientRect();
      const h = section.offsetHeight;
      const scrolled = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / h));
      const t = `scaleY(${scrolled})`;
      rules.forEach((r) => { r.style.transform = t; });
    });
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ----------- A5 SECTION TITLE LETTER STAGGER ----------- */
  function initSectionTitleStagger() {
    const titles = $$('h2.section__title');
    if (!titles.length) return;
    /* Split each title into per-letter spans wrapped in an aria-hidden span,
       and add a sr-only sibling holding the original text. */
    titles.forEach((h2) => {
      if (h2.dataset.split === 'true') return;
      const original = h2.textContent;
      const sr = document.createElement('span');
      sr.className = 'sr-only';
      sr.textContent = original;
      const visible = document.createElement('span');
      visible.setAttribute('aria-hidden', 'true');
      [...original].forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'title-letter';
        span.style.setProperty('--i', i);
        span.textContent = ch;
        visible.appendChild(span);
      });
      h2.textContent = '';
      h2.appendChild(sr);
      h2.appendChild(visible);
      h2.classList.add('has-letters');
      h2.dataset.split = 'true';
    });

    if (reduced()) {
      titles.forEach((h2) => h2.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    titles.forEach((h2) => io.observe(h2));
  }

  /* ----------- A6 ENGAGEMENTS SPOTLIGHT ----------- */
  function initEngagementsSpotlight() {
    if (reduced() || !canHover()) return;
    const section = $('#engagements');
    if (!section) return;
    let rect = null;
    const refreshRect = () => { rect = section.getBoundingClientRect(); };
    const onMove = rafThrottle((e) => {
      if (!rect) refreshRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mx', `${x}%`);
      section.style.setProperty('--my', `${y}%`);
    });
    const onEnter = () => { refreshRect(); section.classList.add('is-spotlight'); };
    const onLeave = () => { section.classList.remove('is-spotlight'); };
    section.addEventListener('mouseenter', onEnter);
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    window.addEventListener('scroll', () => { rect = null; }, { passive: true });
    window.addEventListener('resize', () => { rect = null; });
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
    /* Motion pass */
    initSectionTitleStagger();
    initTimelineDraw();
    initEngagementSweepLock();
    initMagneticCTA();
    initStatFlicker();
    initEngagementsSpotlight();
  }

})();
