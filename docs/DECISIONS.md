# Decisions Log

> One entry per non-trivial decision. Append-only. Newer entries at the bottom.
> Format: ID — topic — decision — date — rationale.

---

## OD-W1 — Language
**Decision:** EN-only first. FR follow-up in a later iteration.
**Date:** 2026-05-24
**Rationale:** Faster to ship. EN is the primary language for the senior recruiter and international consulting audience the site targets.

## OD-W2 — Accent color
**Decision:** Warm copper, `#B8864B` (light theme) / `#C9A36C` (dark theme).
**Date:** 2026-05-24
**Rationale:** More distinctive than the oxford-blue alternative against the navy + cream palette. Signals premium consulting without being generic corporate.

## OD-W3 — Calendly link
**Decision:** None for now. Contact form only.
**Date:** 2026-05-24
**Rationale:** Avoids third-party request and tracking overhead in this iteration. Revisit if inbound volume justifies it.

## OD-W4 — Hero composition
**Decision:** Text-only hero. Headshot moves to About section.
**Date:** 2026-05-24
**Rationale:** Editorial, more senior. The credibility metrics (>1 B€, 15+ yrs, 4 industries) carry the hero; a headshot above the fold would compete with them and read more "personal brand" than "senior reference."

## OD-W5 — Engagement naming and NDA discipline
**Decision:** All engagements performed under the PIMAN Group consulting contract are confidential. **Client company name and project name MUST NOT appear** on the public site for any PIMAN-mission engagement. Sector descriptors only (e.g. "a French nuclear OEM", "a Tier-1 aerospace OEM"). Role, budget, duration, country, year, and outcome metrics ARE OK to display.
Two engagements (Suido Kiko Team Leader and Suido Kiko Project Engineer, both Jeddah KSA, 2009–2017) pre-date the PIMAN contract — they were direct employment. Client (Suido Kiko Middle East) and project names (Wadeeah, Asir, Makhwat; NWC) may be displayed for those two.
Authoritative source for all engagement content: `docs/ENGAGEMENTS.md`.
**Date:** 2026-05-24
**Rationale:** NDA compliance is non-negotiable. Confidentiality discipline also reads as senior on a senior-grade website. A disclosure footer in the Selected Engagements section explicitly signals the NDA discipline — see `docs/ENGAGEMENTS.md` for the exact wording to use.

## OD-W6 — Newsletter signup
**Decision:** Not in this phase.
**Date:** 2026-05-24
**Rationale:** Out of scope for the website revamp. Will be reintroduced when there is content cadence to justify the funnel (insights articles, lead magnets).

## OD-W7 — Photos
**Decision:** Keep existing photos for this iteration. Audit must flag any image that does not meet a senior-consultant professional bar (resolution, framing, lighting, dated styling).
**Date:** 2026-05-24
**Rationale:** No time budget for a new photo shoot in this iteration. The quality bar still applies to whatever ships — weak photos are flagged for replacement in a later iteration.

---

## Ambiguities resolved at kickoff

### Engagement source
**Decision:** `docs/ENGAGEMENTS.md` is the source of truth for Phase B content. 11 engagements documented; 5 flagged ★ as recommended featured set for the homepage; remaining 6 belong in the Career timeline as compact entries. Three "Open Owner inputs" listed at the bottom of that file must be answered as part of Phase B kickoff and confirmed by the Owner at GATE B.
**Date:** 2026-05-24

### Fonts
**Decision:** Self-host Fraunces, Inter, JetBrains Mono. No Google Fonts. Implementation: `@font-face` with `font-display: swap`. Subset to Latin + Latin Extended only.
**Weights to ship:**
- Fraunces 600 only — display weight, used for hero H1, hero H2, and section titles. Nothing else.
- Inter 400 / 500 / 600 — body text and UI.
- JetBrains Mono 400 — tag chips, monospace use only.
**Graceful degradation (allowed if Lighthouse mobile Performance < 90 after font integration):**
- Cascade (a): drop JetBrains Mono → `ui-monospace, "SF Mono", monospace` system stack.
- Cascade (b): drop Inter → `system-ui, -apple-system, "Segoe UI", sans-serif` system stack.
- Cascade (c) — last resort: keep Fraunces for hero H1 only; drop other display uses to `system-ui`.
Every fallback taken must be logged in this file with the before/after Lighthouse score that triggered it.
**Date:** 2026-05-24
**Rationale:** Self-hosting avoids third-party DNS lookup and GDPR considerations around Google Fonts. The graceful-degradation policy makes the 90/95/95/95 Lighthouse bar enforceable — Fraunces is the brand-critical font, the rest are degradable.

### Unreferenced CV PDFs in assets/pdf/
**Decision:** The 4 untracked PDFs in `assets/pdf/` (`20210905_F_1P_Hannouf.pdf`, `20230201_E_1P_Hannouf.pdf`, `20250227_E_2P_Hannouf.pdf`, `20250227_F_2P_Hannouf.pdf`) stay on disk, untracked, undeleted, and NOT added to `.gitignore`. The kickoff prompt's hard rule "do not touch CV PDFs in assets/pdf/" is the operating rule and supersedes any earlier conversational instruction. Owner will handle in a separate focused commit later.
**Date:** 2026-05-24
**Rationale:** Avoids mixing concerns. PDF cleanup is a distinct task that warrants its own commit so the audit trail stays clean.

---

## Phase B inputs from GATE A review (2026-05-24)

### Engagement card selection and layout
**Decision:** **3 flagship engagements only** on the homepage, displayed as a responsive grid (3-col on desktop ≥1024 px, 2-col at 768–1023 px, single column on mobile). **NOT a carousel.**

Featured set (from `docs/ENGAGEMENTS.md`):
1. ★ Engagement 01 — Cost Manager · >1 B€ Advanced Modular Reactor programme
2. ★ Engagement 02 — Senior PM · Gen-III nuclear LV switchboards · ~110 M€
3. ★ Engagement 03 — UK Program Manager · Nuclear valve plateau (current)

Remaining 8 engagements move to the Career timeline as compact nested entries (under the single PIMAN block per OQ #5 below, or under their respective pre-PIMAN named entries).
**Date:** 2026-05-24
**Rationale:** 3 cards forces stronger signal. Nuclear-heavy selection sharpens the "Cost Management for billion-euro industrial programs" positioning. The "4 industries" hero claim is supported by the rich Career timeline, **not** by the visible card set — therefore the Career timeline MUST show full industry breadth (nuclear, oil & gas, water, consumer goods, aerospace, construction) to make the hero claim defensible.

### OQ #5 — Career timeline structure (post-2018)
**Decision:** Single PIMAN entry with a **nested mission list**, structured as:
```
PIMAN Group — Senior Consultant in Cost & Project Management
2018 – present · Lyon
   · mission 1 — sector descriptor, role, duration
   · mission 2 — sector descriptor, role, duration
   · …
```
Suido Kiko entries (2009–2017) remain as separate named entries per OD-W5 (pre-PIMAN, direct employment).
**Date:** 2026-05-24
**Rationale:** Honest representation of consulting reality. Structurally reinforces NDA discipline (one client = PIMAN; the missions describe sectors, not their downstream end-clients).

### OQ #4 — Phone visibility on the public site
**Decision:** **Remove the phone number from every visible page.** Email + form only. Phone may stay on the downloaded CV PDFs (which are click-gated).
**Date:** 2026-05-24
**Rationale:** Senior-grade contact pattern. Prevents number scraping. Inbound senior contacts go through email/form, not cold call.

### OQ #1 — Engagement 03 (UK Program Manager) date display
**Implicit decision:** Display as `2025 – present`. Role title is `UK Program Manager` per the `docs: refine engagement 03 role title` commit just made (`ENGAGEMENTS.md` updated).
**Date:** 2026-05-24

### OQ #2 — Engagement 04 country listing
**Pending Owner decision.** Default: list all three (UAE, Uzbekistan, Russia). If sensitive, summarize as "Middle East / CIS". To be resolved at GATE B if the choice materially affects the card design — otherwise carry forward to a follow-up iteration.

### OQ #3 — Engagement 06 budget softening
**Pending Owner decision.** Default: keep as `confidential — high-rise development`. Sufficient for the public site; not visible on the homepage (Engagement 06 is in the Career timeline only).

### NDA breach on current Project 1 (Newcleo SMR named in card copy)
**Decision:** Replace current Project 1 card content with the Engagement 01 wording from `docs/ENGAGEMENTS.md` as part of Phase B HTML rewrite. Sector descriptor only — "Advanced Modular Reactor programme" — no client name.
**Date:** 2026-05-24
**Rationale:** OD-W5 PIMAN NDA compliance is non-negotiable.

### audit.sh `mobile` preset bug
**Decision:** Patch as part of Phase B code cleanup. The script's `run_lighthouse "mobile"` call is invalid (Lighthouse accepts `perf` / `experimental` / `desktop` only; mobile is the default with no preset). Replace with a no-preset invocation. Verify with a clean re-run at GATE B.
**Date:** 2026-05-24

### GATE B non-negotiables (reminder — restated for posterity)
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- Zero console errors, zero broken links.
- Render verified at 360 / 768 / 1024 / 1440 px.
- Dark mode contrast passes WCAG AA on all text-on-background pairs.
- Print stylesheet produces a usable résumé printout.
- Career timeline shows full industry breadth (nuclear + oil-gas + water + consumer + aerospace + construction) to support the "4 industries" hero claim given the nuclear-heavy card selection.
- STOP at GATE B with a PR; do NOT merge.

### Ask-rather-than-assume rule (Phase B)
If at any point during Phase B I hit a decision that materially affects **positioning, NDA scope, or the Lighthouse bar**, I will STOP and ask rather than assume.
