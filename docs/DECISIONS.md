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
