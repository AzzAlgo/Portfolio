# KICKOFF PROMPT — Paste this into Claude Code

> Copy the block below (everything between the `===` lines) and paste it as your **first message** to Claude Code from inside the repo root.
> Before you do, make sure these files exist in the repo root: `CLAUDE.md`, `WEBSITE_REVAMP_BRIEF.md`, `audit.sh`.

---

```
=========================================================================

You are starting work on revamping my personal website (a vanilla
HTML/CSS/JS site deployed on GitHub Pages at
https://azzalgo.github.io/Portfolio/).

Three documents in this repo are your authority and you must read them
all, in this order, before doing anything else:

  1. CLAUDE.md                   — project memory & working agreement
  2. WEBSITE_REVAMP_BRIEF.md     — the full Phase A + Phase B brief
  3. audit.sh                    — the audit script you will run

DO NOT START CODING YET. Do this sequence:

  Step 1 — Read all three files above end to end. Acknowledge to me in
           one short message what you understood: the goal in your
           own words, the two gates (A and B), and any ambiguity you
           noticed.

  Step 2 — Wait for me to confirm we are aligned. If I answer
           Open Decisions OD-W1 to OD-W7 in my reply, capture them
           in /docs/DECISIONS.md before moving on. If I do not answer,
           apply the defaults listed in the brief and note that in
           the decisions log.

  Step 3 — Once I say "proceed", create the working branch
           `revamp/phase-1` (do NOT work on main), then run Phase A:
              a. Execute ./audit.sh from the repo root.
              b. Complete the manual sections per the brief §A.2.
              c. Commit the report to docs/AUDIT_REPORT.md with
                 message: "docs: audit report".
              d. Push the branch and open a draft PR.
              e. STOP at GATE A. Summarize findings in the chat with
                 a P0/P1/P2 priority list and your top 3
                 recommendations. Wait for my approval.

  Step 4 — Only when I explicitly say "approved, proceed to Phase B",
           start the transformation per the brief §B.

Hard rules (non-negotiable):

  - Never push to main. Branch only.
  - Stop at both gates. No exceptions.
  - If a brief is ambiguous, ask one clear question. Do not assume.
  - Log every meaningful decision in /docs/DECISIONS.md.
  - Do not add libraries, fonts, or tracking without my approval.
  - Do not touch the CV PDF files in assets/pdf/.
  - Preserve all existing social links exactly.
  - Lighthouse bar at GATE B: Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO ≥ 95
    on mobile. If not met, the work is not done.

Begin with Step 1.

=========================================================================
```

---

## What happens next (for you, the Owner)

1. **You paste the prompt** above into Claude Code.
2. Claude Code will **read the 3 files** and reply with its understanding + any ambiguities. Read its summary carefully — this is the moment to course-correct if it misunderstood anything.
3. **You answer Open Decisions OD-W1 to OD-W7** (or accept defaults) and say *"proceed"*.
4. Claude Code creates the branch, runs `audit.sh`, completes the manual audit, commits the report, opens a draft PR, and **stops at GATE A**.
5. **You review the audit report.** Walk through it section by section. Push back where you disagree. When satisfied, reply *"approved, proceed to Phase B"*.
6. Claude Code rebuilds the site per the brief, stops at **GATE B**, and shows you screenshots + Lighthouse scores + a PR.
7. **You review the preview.** Request changes if needed. When happy, you merge the PR to `main` yourself — GitHub Pages picks it up and deploys.

---

## Quick answers you'll want ready before you start

Skim these so the conversation moves fast when Claude Code asks:

- **OD-W1 Language:** EN-only first, FR later? Or both from day one?
- **OD-W2 Accent color:** copper `#B8864B` or oxford blue `#1E3A5F`?
- **OD-W3 Calendly link** to add to Contact? If yes, paste the URL.
- **OD-W4 Hero:** text-only (recommended) or with headshot?
- **OD-W5 Anonymization:** keep current client names (Newcleo, Comeca, Framatome, Baker Hughes, Tefal, Suido Kiko) — confirm if any must be hidden.
- **OD-W6 Newsletter** in this phase? (default: no)
- **OD-W7 New photos** or keep existing?

---

## If something goes off the rails

- If Claude Code starts coding before GATE A approval → tell it to stop, revert any unstaged changes, and re-read `CLAUDE.md`.
- If Claude Code pushes to `main` → revert immediately and remind it of the working agreement.
- If Lighthouse scores fall short at GATE B → do not accept the merge. Tell it to fix and re-measure.
- If the audit report is shallow → ask for the manual sections to be redone with specific examples.
