# CLAUDE.md — Project Memory

> **Read this file at the start of every working session.** It is your single source of truth for who the owner is, what we're building, and how we work.

---

## Who the owner is

**Azzam HANNOUF** — Senior Consultant in Project & Cost Management.
- 15+ years of delivery on industrial programs: nuclear (incl. >1 B€ SMR), oil & gas, water EPC, aerospace, forging.
- Credentials: **PMP** (valid through 2027), **MBA Finance** (emlyon), Mechanical Engineering (UTBM).
- Operates in **EN and FR** (both fluent), based in France (Lyon area).
- LinkedIn: https://www.linkedin.com/in/azzamh/
- Current site: https://azzalgo.github.io/Portfolio/

## What we're building

A **revamped personal website** that does two jobs at once:
1. Acts as a **senior-grade online résumé** — ready to put in front of recruiters or hiring committees for **Director / Head of Cost Management / Head of PMO** positions.
2. Acts as a **professional landing page** — positions Azzam as a **reference on project Cost Management & EVM**, including AACE-aligned (not only PMI) practice.

**The target audience is senior:** CFOs, COOs, Program Directors, PMO Heads, senior recruiters. Tone, design and content must match that level. Not a developer-portfolio template aesthetic.

## What the site is NOT (this iteration)

- Not a full SaaS platform.
- Not a multi-language blog system yet.
- Not an EVM tool yet (that's a later phase).
- Not a migration to a new framework — we **stay on vanilla HTML/CSS/JS deployed via GitHub Pages**. Improvements only.

## Tech context (do not break these)

- **Repo:** GitHub, deployed to **GitHub Pages**. URL must keep working.
- **Stack:** vanilla `index.html` + `assets/css/styles.css` + `assets/js/main.js`. Swiper.js and Unicons CDN are already in.
- **No build step** — files must work directly when opened by GitHub Pages.
- **No tracking/analytics** added without explicit owner approval.
- **No external dependencies** added without justification (each one = page weight).

## How we work (working agreement)

1. **Read first, change second.** At session start, read `CLAUDE.md`, `WEBSITE_REVAMP_BRIEF.md`, and `/docs/DECISIONS.md` (if it exists).
2. **Two-gate process for this iteration:**
   - **GATE A — End of Audit Phase.** You stop, present findings, wait for owner approval before touching code.
   - **GATE B — End of Transformation Phase.** You stop, present the rebuilt site on a preview branch, wait for owner approval before merging to `main`.
3. **Never push to `main` directly.** Work on a branch (`revamp/phase-1`). Owner reviews preview, then merges.
4. **Decision log discipline.** Every non-trivial choice (palette, font, IA change, content rewrite) goes into `/docs/DECISIONS.md` with date + rationale.
5. **Conventional Commits.** `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `chore:`. One logical change per commit.
6. **No silent scope creep.** If you see something out of scope but valuable, raise it as a question. Do not just add it.
7. **Copyright discipline.** Never paste AACE or PMI documents verbatim. Paraphrase, cite, link.
8. **Ask, don't assume.** If a brief is ambiguous, ask one clear question. Default behavior: stop and ask.

## Quality bars (non-negotiable for this iteration)

- **Lighthouse:** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 on mobile.
- **No console errors** on any page.
- **No broken links, no broken images, no broken CV downloads.**
- **Mobile-first verified** at 360px, 768px, 1024px, 1440px widths.
- **Zero typos** in user-visible copy. Existing typos in current site (`Enginnering`, `discription`, `placeholer`, etc.) must be fixed.
- **WCAG AA contrast** for all text on all backgrounds (including dark mode).
- **Print stylesheet** — the site must produce a clean printout of the home + about + projects sections (the "résumé view").

## Files you will be creating or modifying

Existing (will be modified):
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/*` (may add, may replace)
- `assets/pdf/*` (CV files — do not break these)

New (you will create as part of the work):
- `/docs/AUDIT_REPORT.md`
- `/docs/DECISIONS.md`
- `/docs/COPY.md` — final copy in EN (and FR if applicable)
- `print.css` (or extension of styles.css) — print stylesheet
- `robots.txt`, `sitemap.xml`
- `site.webmanifest`, favicons (proper set)
- `og-image.png` (1200×630 for social sharing)

## When the owner asks "what's the status?"

Answer with: which phase, what's done, what's blocking, what's the next gate. Be concise.
