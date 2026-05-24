# WEBSITE REVAMP BRIEF — Azzam HANNOUF Portfolio
**Iteration:** Target #1 — Website Revamp
**Owner:** Azzam HANNOUF
**Executor:** Claude Code
**Branch:** `revamp/phase-1` (do not work on `main`)
**Two-gate process:** GATE A (Audit) → GATE B (Transformation)

---

## 1. CONTEXT & GOAL

The current site `https://azzalgo.github.io/Portfolio/` is a developer-portfolio template (purple theme, percentage skill bars, generic copy). It does not match Azzam's actual seniority: 15+ years on >1 B€ industrial programs, PMP, MBA Finance.

**Goal of this iteration:** rebuild the site so that a CFO, Program Director, or senior recruiter visiting it would conclude in <30 seconds: *"this is a senior cost management professional, not a junior portfolio."*

Same stack (vanilla HTML/CSS/JS on GitHub Pages). No framework migration. The lift is in **positioning, copy, design system, content depth, and code quality** — not in tooling.

---

## 2. NEW POSITIONING (the story the site must tell)

**Headline positioning (use this exact framing or refine, do not invent something else):**
> Senior Cost & Project Management consultant. **EVM and Total Cost Management** for billion-euro industrial programs.

**Sub-positioning:**
> 15 years of delivery across nuclear (incl. >1 B€ SMR), energy, water EPC, oil & gas and aerospace. PMP. MBA Finance.

**Three credibility anchors that must appear above the fold:**
1. **>1 B€** — largest program scope.
2. **15+ years** — tenure.
3. **4+ industries** — versatility (nuclear, energy, water, aerospace).

**Dual audience (the site must serve both without choosing):**
- **Hiring decision-makers** — looking at Azzam for a Director / Head of Cost / Head of PMO position.
- **Consulting clients** — looking for a senior consultant for a mission.

The CTA structure must reflect this duality (see section 7).

---

## 3. PHASE A — AUDIT (do this first, stop at GATE A)

### A.1 Run the audit script

A bash script `audit.sh` is provided in this kit. Run it from the repo root and capture the output into `/docs/AUDIT_REPORT.md`.

### A.2 Manual audit checklist

Beyond what the script catches, you manually review and report on:

**Content audit**
- Every section's copy: is it precise? does it use cost management vocabulary? does it lead with outcomes?
- Project descriptions: do they lead with **budget + role + outcome**, or just task lists?
- Typos and grammatical errors (current site has at least: `Enginnering`, `discription`, `placeholer`, `Projet`, `Mechanical Enginner`, malformed `>` in Project 3).
- Calls to action: are they clear? are they targeting the right audience?
- About text: does it say "I am a senior cost management reference," or does it say "results-oriented project manager" (which says nothing)?

**Positioning audit**
- Does the homepage hero communicate cost management specialization, or just "Project Manager"?
- Do the credentials (PMP, MBA, eng. degree) appear prominently or are they buried?
- Are the largest program metrics (>1 B€, 15+ years) front and center?

**Technical audit**
- Lighthouse scores (mobile + desktop) — from the script.
- Console errors and warnings.
- Broken links, missing images, 404s.
- HTML validation issues.
- Accessibility: alt text on every image, semantic landmarks, heading hierarchy (H1→H2→H3 with no skips), focus states on interactive elements, ARIA where needed, contrast ratios.
- Responsive issues at 360px / 768px / 1024px / 1440px.
- Dark mode visual issues (the current dark mode toggle exists — verify it works without contrast failures).
- Print rendering — open `print preview`, screenshot, report what breaks.

**Code quality audit**
- Inline `style=""` attributes — list them.
- Duplicated CSS rules.
- Orphan CSS classes (declared but never used).
- JS issues: unused variables, missing event listener cleanup, missing null checks (current `main.js` has at least one — `themeButton` has no null check before `.addEventListener`).
- File size: total page weight in KB, broken down by HTML/CSS/JS/IMG.

**Design audit**
- Color palette: list every color used (hex/HSL). Identify if the palette communicates "senior consultant" (it does not — current purple is template-y).
- Typography: list every font, weight, size used. Identify hierarchy issues.
- Spacing: identify inconsistencies in padding/margin scale.
- Visual references: the percentage skill bars, the gradient blob avatar, the "Years/Projects/Industry" stat boxes — evaluate each one for whether it belongs on a senior consultant's site.

### A.3 Output: `/docs/AUDIT_REPORT.md`

Structure:
```markdown
# Audit Report — <date>
## 1. Summary (5 bullets max — the biggest issues)
## 2. Positioning gaps
## 3. Content gaps & typos
## 4. Technical findings (with Lighthouse scores table)
## 5. Code quality findings
## 6. Design findings
## 7. Recommended priority list (P0 / P1 / P2)
## 8. Open questions for the Owner
```

### 🛑 GATE A — STOP HERE

After producing the audit report, **stop**. Commit on the `revamp/phase-1` branch with message `docs: audit report`. Open a draft PR. Notify the owner.

**You wait for explicit "approved, proceed to Phase B" before touching any other file.**

---

## 4. PHASE B — TRANSFORMATION

Only start this phase after GATE A is approved.

### B.1 New Information Architecture

The current site is a single-page scroll with: Home → About → Skills → Qualification → Projects → Contact.

The revamped site **stays single-page** (single-page suits a résumé/profile and keeps GitHub Pages deployment simple), but the sections change as follows:

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | **Hero** | Positioning statement + 3 credibility metrics + dual CTA |
| 2 | **About / Profile** | Senior narrative bio, credentials, languages |
| 3 | **Expertise** | What Azzam does — 4 service pillars, not skill bars |
| 4 | **Selected Engagements** | Project cards reframed around cost outcomes |
| 5 | **Career** | Timeline (Education + Experience + Certifications) — keep but simplify |
| 6 | **Toolkit** | Software + methods, as a clean tagged list — not progress bars |
| 7 | **Contact** | Contact info + form + CV download (EN + FR) |
| 8 | **Footer** | Minimal: name, role, socials, copyright, link to LinkedIn |

**Sections removed:** the "Skills with percentage bars" pattern. Replaced by Expertise (pillars) + Toolkit (tagged list). Self-assessing language proficiency at 90% is a portfolio cliché and reads as junior.

### B.2 Page-by-page content direction

#### Hero
- **H1:** `Azzam HANNOUF`
- **H2:** `Cost Management & EVM for billion-euro industrial programs`
- **Sub:** `Senior consultant — PMP, MBA Finance. 15 years across nuclear, energy, water and aerospace.`
- **Stat row (3 anchors):** `>1 B€ — largest program scope` | `15+ years — delivery` | `4 industries — nuclear · energy · water · aerospace`
- **CTAs (two, side by side):**
  - Primary: `Discuss a mission →`  (scrolls to Contact)
  - Secondary: `Download CV` (with EN/FR sub-menu, like current site)

#### About
- Replace the current generic "results-oriented project manager" paragraph with a 3–4 sentence senior narrative. Draft:
  > "I lead cost management on complex industrial programs — most recently as PMO Cost Manager on a >1 B€ small modular reactor program. My background blends mechanical engineering (UTBM), an MBA in Finance (emlyon), and a PMP certification, which lets me sit at the intersection of engineering, finance and program governance. I work in English and French across France, the GCC and Northern Europe."

#### Expertise (replaces "Skills")
Four pillars, each one a card with a short paragraph (NOT a progress bar):
1. **Cost Management & EVM** — Cost Estimate Plans, Cost Management Plans, EVM (CPI/SPI/EAC/ETC/TCPI), Earned Schedule, baseline control, AACE-aligned practices.
2. **PMO Setup & Governance** — PMO structuring, cost & risk processes, KPI design, executive reporting, lessons-learned systems.
3. **Risk & Contingency** — quantitative risk analysis with @RISK, Monte Carlo modeling, AACE-aligned contingency setting.
4. **Contract & Claim Management** — claim quantification, schedule analysis, variance investigation, mémoire technique for disputes.

#### Selected Engagements (replaces "Projects")
Reframe each project card around **role + budget + outcome**, not task lists. Format:

```
[Industry tag]  [Confidentiality tag if applicable]
PROJECT NAME or DESCRIPTOR (anonymized if needed)
Role · Budget · Duration · Location
————————————
1-paragraph context (what was the program)
1-paragraph contribution (what Azzam owned)
1-paragraph outcome (what changed because of him — quantified where possible)
```

Use the engagements already documented in the dossier (SMR Newcleo, Comeca HPC, Tefal Artus, Framatome HPC supply chain, Suido Kiko Wadeeah/Asir/Makhwat, Baker Hughes ADNOC/MTO/Khabarovsk, etc.). Confirm anonymization needs with the Owner at GATE B.

Keep the Swiper carousel **only if** there are 5+ engagements. If fewer, switch to a 2-column grid — carousels hide content and hurt SEO.

#### Career timeline
Keep the tabbed timeline (Education / Experience / Certifications) — it works. Improvements:
- Fix all typos (`Enginnering`, `Enginner`, `Projet`).
- Add "Master in MBA" → "MBA, Finance specialization".
- Add company logos next to entries if available (subtle, monochrome).

#### Toolkit (replaces percentage-bar Skills)
Three columns of tag-style chips:
- **Project & Cost** — Primavera P6, MS Project, EVM, Trello/Jira
- **Data & Analytics** — Power BI, Power Query, @RISK, Python, FORTRAN, C/C++
- **Engineering** — AutoCAD, AutoCAD P&ID, Plant 3D, Catia, Ansys, Biowin

No percentages. No bars.

#### Contact
Keep the existing FormSubmit setup (it works). Improvements:
- Clearer labels ("Your name", "Your email", "Subject", "Message").
- Honeypot field for bot prevention.
- Polite confirmation message after submit (currently FormSubmit redirects — verify the redirect target).
- Add a Calendly link (Open Decision OD-W3 — if Azzam has one).

### B.3 Design system (concrete tokens)

**Color palette — senior consulting / financial authority direction:**

```css
:root {
  /* Brand */
  --color-ink:        #0B1929;  /* near-black navy, primary text */
  --color-ink-muted:  #4A5763;  /* secondary text */
  --color-paper:      #FAF8F3;  /* warm off-white, main background */
  --color-paper-alt:  #F1ECE3;  /* slightly darker cream, section breaks */
  --color-rule:       #D9D1C2;  /* divider lines */

  /* Accent — choose ONE during GATE B, do not use both */
  --color-accent:     #B8864B;  /* warm copper — option A (recommended) */
  /* --color-accent: #1E3A5F;     deep oxford blue — option B */

  /* States */
  --color-success:    #2F6E4F;
  --color-warning:    #B86B1F;
  --color-link:       var(--color-accent);
}

[data-theme="dark"] {
  --color-ink:        #ECE7DC;
  --color-ink-muted:  #9DA5AE;
  --color-paper:      #0E1620;
  --color-paper-alt:  #131C28;
  --color-rule:       #243140;
  --color-accent:     #C9A36C;  /* slightly warmer accent in dark */
}
```

**Typography:**

```css
:root {
  /* Headings — editorial serif for gravitas in hero/section titles */
  --font-display: 'Fraunces', 'Cormorant Garamond', Georgia, serif;
  /* Body — clean modern sans */
  --font-body:    'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  /* Monospace for tags / metrics */
  --font-mono:    'JetBrains Mono', ui-monospace, 'SF Mono', monospace;
}
```

Use serif **only for the hero H1, the H2 hero positioning, and section titles**. Everywhere else: Inter. Do not mix display and body fonts in the same paragraph.

**Spacing scale** — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px. Map to CSS custom properties `--space-1` through `--space-9`. **Do not introduce off-scale values.**

**Radii** — only 3 values: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`. Do not use `60% 40% 40% 60%` blob shapes (current home image) — replace with a clean circular crop or a rectangular editorial photo.

**Shadows** — at most 2 elevation levels. Subtle, low-spread. No glow effects.

**Motion** — minimal. Page-level: smooth scroll (already in). Element-level: 200ms ease on hover for buttons/links. **No carousels with auto-rotation. No bouncing arrows. No morphing blob animation.**

**Imagery** — replace the gradient-blob avatar with one of:
- Option 1: a clean square headshot, slightly desaturated, sitting in a fixed crop.
- Option 2: no headshot at all on hero — use a strong typographic hero. Headshot moves to About section only.
Recommend Option 2 — more editorial, more senior.

### B.4 Code quality requirements

- Add a print stylesheet (`@media print`) so the site prints as a clean résumé.
- Remove all inline `style=""` attributes.
- Add `loading="lazy"` to non-critical images.
- Add `width` and `height` attributes to all `<img>` tags (prevents CLS).
- Add proper `alt` text everywhere (not empty `alt=""` unless decorative).
- Add `aria-current="page"` to the active nav link (driven by the existing scroll-spy JS).
- Add semantic landmarks: `<main>`, `<nav>`, `<header>`, `<footer>` (already there — verify).
- Wrap social icon links with `aria-label`.
- Add `rel="noopener noreferrer"` to every `target="_blank"` link.
- Add a proper `<meta name="description">` and OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- Add JSON-LD `Person` schema in `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Azzam HANNOUF",
    "jobTitle": "Senior Cost Management Consultant",
    "url": "https://azzalgo.github.io/Portfolio/",
    "sameAs": ["https://www.linkedin.com/in/azzamh/"]
  }
  ```
- Fix `main.js`:
  - Null-check `themeButton` before `addEventListener`.
  - Use `IntersectionObserver` for the scroll-spy nav (current implementation runs on every scroll event — wasteful).
  - Move all theme constants to the top of the file in a single config block.
- Add `robots.txt`, `sitemap.xml`, `site.webmanifest`.
- Generate a proper favicon set (16, 32, 180 apple-touch, 192, 512).
- Generate an `og-image.png` (1200×630) — name + role typographic card on brand background.

### B.5 Files to deliver

Modified:
- `index.html` (heavily rewritten — new sections, new copy, new metadata)
- `assets/css/styles.css` (new design tokens, new component styles, print styles)
- `assets/js/main.js` (refactored, IntersectionObserver, null checks)

New:
- `/docs/AUDIT_REPORT.md`
- `/docs/DECISIONS.md` (with at least: palette choice, accent choice, font load strategy, hero image decision)
- `/docs/COPY.md` (final approved copy, EN version)
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `favicons/` (icon set)
- `og-image.png`

### 🛑 GATE B — STOP HERE

When transformation is complete:
1. Verify Lighthouse scores meet the bars in `CLAUDE.md`.
2. Verify mobile rendering at 360/768/1024/1440.
3. Verify print rendering.
4. Verify dark mode.
5. Commit the work on `revamp/phase-1`.
6. Push the branch.
7. Open a PR titled `Website revamp — Phase 1` with:
   - A "before / after" summary of changes.
   - Lighthouse score table.
   - Screenshots at 3 breakpoints + print preview.
   - List of decisions taken (with link to `/docs/DECISIONS.md`).
   - List of any open questions for the Owner.
8. **Wait for owner approval to merge.** Do not merge yourself.

---

## 5. OPEN DECISIONS (Owner answers when kicking off, defaults apply if not answered)

| ID | Decision | Default |
|----|----------|---------|
| OD-W1 | Language: EN-only first, or EN + FR from day one? | **EN-only first**, FR added in a follow-up. |
| OD-W2 | Accent color: warm copper (#B8864B) or deep oxford blue (#1E3A5F)? | **Copper** — more distinctive. |
| OD-W3 | Calendly link to add to Contact section? | None — keep only the form. |
| OD-W4 | Headshot on hero, or text-only hero with headshot in About? | **Text-only hero**, headshot in About. |
| OD-W5 | Engagement anonymization needed (client names, project names)? | **Keep client names** where already public (Newcleo, Comeca, Framatome, Baker Hughes, Tefal, Suido Kiko). Confirm with Owner if any should be anonymized. |
| OD-W6 | Newsletter signup in this phase? | **No** — defer to a later phase. |
| OD-W7 | Replace photos with new ones, or keep existing? | **Keep existing for now**, flag photos that don't reach a professional bar in the audit. |

---

## 6. RULES OF ENGAGEMENT (read before starting)

1. Work on branch `revamp/phase-1`. Never on `main`.
2. Stop at **GATE A** before touching any non-doc file.
3. Stop at **GATE B** before merging.
4. Log every meaningful decision in `/docs/DECISIONS.md`.
5. If the brief is ambiguous, ask **one** clear question, then wait.
6. Do not add libraries without justifying the cost (each one is added page weight).
7. Do not touch CV PDF files in `assets/pdf/`.
8. Do not change the social links — copy the URLs verbatim from the existing `index.html`.
9. If the Lighthouse bar is not met at GATE B, **do not** declare done. Fix and re-measure.
