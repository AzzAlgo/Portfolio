# Claude Code Starter Kit — Website Revamp

Four files. Drop them into the root of your Portfolio repo and follow the steps in `KICKOFF_PROMPT.md`.

## Files

| File | Purpose | Read by |
|------|---------|---------|
| `CLAUDE.md` | Project memory — Claude Code auto-reads this at session start. Contains who you are, what we're building, working agreement, quality bars. | Claude Code (automatic) |
| `WEBSITE_REVAMP_BRIEF.md` | The full Phase A (Audit) + Phase B (Transformation) brief with new positioning, IA, design tokens, page-by-page direction, validation gates. | Claude Code (instructed) |
| `audit.sh` | Bash script that runs the automated portion of the audit (typo grep, code-smell grep, html-validate, linkinator, Lighthouse). | Claude Code runs it |
| `KICKOFF_PROMPT.md` | The exact text you paste into Claude Code as your first message. Also explains the flow on your side. | **You** |

## How to use

1. **Copy these 4 files** to your repo root.
2. **Optional but recommended — install audit tools** (one-time):
   ```bash
   npm i -g lighthouse html-validate linkinator
   pip install codespell
   ```
3. **Commit them** so they're tracked:
   ```bash
   git add CLAUDE.md WEBSITE_REVAMP_BRIEF.md audit.sh KICKOFF_PROMPT.md README_KIT.md
   git commit -m "docs: add Claude Code starter kit for website revamp"
   ```
4. **Open Claude Code** in the repo root.
5. **Paste the kickoff prompt** from `KICKOFF_PROMPT.md` (the block between the `===` lines).
6. **Walk Claude Code through Gates A and B** — it stops at each one for your approval.

## Two-gate process at a glance

```
   You paste prompt
        │
        ▼
   Claude reads CLAUDE.md + BRIEF + audit.sh
        │
        ▼
   Claude summarizes understanding ──► you confirm + answer Open Decisions
        │
        ▼
   Branch: revamp/phase-1
        │
        ▼
   ┌─────────────── PHASE A — AUDIT ───────────────┐
   │  Run audit.sh                                  │
   │  Complete manual audit sections                │
   │  Commit AUDIT_REPORT.md                        │
   │  Open draft PR                                 │
   └────────────────────┬───────────────────────────┘
                        │
                        ▼
                  🛑  GATE A
                You review report
                You approve
                        │
                        ▼
   ┌──────────── PHASE B — TRANSFORMATION ──────────┐
   │  New positioning, IA, copy                     │
   │  New design tokens (palette, typography)       │
   │  Refactor HTML / CSS / JS                      │
   │  Print stylesheet, SEO meta, JSON-LD           │
   │  Favicons, og-image, robots, sitemap           │
   │  Hit Lighthouse bars                           │
   └────────────────────┬───────────────────────────┘
                        │
                        ▼
                  🛑  GATE B
                You review preview + PR
                You merge yourself → GitHub Pages deploys
```

## Quality bars at GATE B (non-negotiable)

- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- Zero console errors
- Zero broken links/images
- Renders cleanly at 360 / 768 / 1024 / 1440 px
- Dark mode works without contrast failures
- Print stylesheet produces a usable résumé printout

If any bar misses, the work is not done.
