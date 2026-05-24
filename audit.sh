#!/usr/bin/env bash
# audit.sh — Audit script for the Azzam HANNOUF portfolio revamp
# Run from the repo root: ./audit.sh
# Outputs to: docs/AUDIT_REPORT.md (appends a machine section)
#
# Required tools (script will report missing ones and skip those sections):
#   - grep, find, wc, awk  (standard unix)
#   - node + npx           (for lighthouse, html-validate, linkinator)
#   - codespell            (pip install codespell) — for typo detection
#
# Tip: run `npm i -g lighthouse html-validate linkinator` once before first run.

set -u
REPO_ROOT="$(pwd)"
OUT_DIR="${REPO_ROOT}/docs"
OUT_FILE="${OUT_DIR}/AUDIT_REPORT.md"
SITE_URL="${SITE_URL:-https://azzalgo.github.io/Portfolio/}"

mkdir -p "${OUT_DIR}"

# ------------------------------------------------------------------
# Helpers
# ------------------------------------------------------------------
hr() { printf '\n---\n\n' >> "$OUT_FILE"; }
section() { printf '\n## %s\n\n' "$1" >> "$OUT_FILE"; }
sub() { printf '\n### %s\n\n' "$1" >> "$OUT_FILE"; }
code_block_open() { printf '```%s\n' "${1:-}" >> "$OUT_FILE"; }
code_block_close() { printf '```\n' >> "$OUT_FILE"; }
has() { command -v "$1" >/dev/null 2>&1; }

# ------------------------------------------------------------------
# Header
# ------------------------------------------------------------------
cat > "$OUT_FILE" <<EOF
# Audit Report — Automated Pass
Generated: $(date -u +"%Y-%m-%d %H:%M UTC")
Site URL:  ${SITE_URL}
Repo root: ${REPO_ROOT}

> This file is the **automated** part of the audit.
> Claude Code must also produce a **manual** section (positioning,
> content, design, code quality) per WEBSITE_REVAMP_BRIEF.md §A.2.
EOF

# ------------------------------------------------------------------
# 1. File inventory
# ------------------------------------------------------------------
section "1. File inventory"

sub "1.1 Root files"
code_block_open
ls -la "${REPO_ROOT}" 2>/dev/null | grep -v '^total' >> "$OUT_FILE"
code_block_close

sub "1.2 Asset tree (depth 3)"
code_block_open
find "${REPO_ROOT}/assets" -maxdepth 3 -type f 2>/dev/null \
  | sed "s|${REPO_ROOT}/||" \
  | sort >> "$OUT_FILE" || echo "(no assets directory)" >> "$OUT_FILE"
code_block_close

sub "1.3 Size of key files (KB)"
code_block_open
for f in index.html assets/css/styles.css assets/js/main.js; do
  if [[ -f "${REPO_ROOT}/${f}" ]]; then
    size_kb=$(du -k "${REPO_ROOT}/${f}" | cut -f1)
    printf "%-30s %s KB\n" "$f" "$size_kb" >> "$OUT_FILE"
  fi
done
code_block_close

# ------------------------------------------------------------------
# 2. Code grep — known smells
# ------------------------------------------------------------------
section "2. Code smells (grep pass)"

sub "2.1 Inline style attributes in HTML"
code_block_open
grep -n 'style="' "${REPO_ROOT}/index.html" 2>/dev/null >> "$OUT_FILE" \
  || echo "(none found)" >> "$OUT_FILE"
code_block_close

sub "2.2 target=\"_blank\" without rel=\"noopener\""
code_block_open
grep -n 'target="_blank"' "${REPO_ROOT}/index.html" 2>/dev/null \
  | grep -v 'rel=' >> "$OUT_FILE" \
  || echo "(none found — good)" >> "$OUT_FILE"
code_block_close

sub "2.3 Images missing alt text"
code_block_open
grep -nE '<img[^>]*>' "${REPO_ROOT}/index.html" 2>/dev/null \
  | grep -v 'alt=' >> "$OUT_FILE" \
  || echo "(all img tags appear to have alt — verify content is meaningful)" >> "$OUT_FILE"
code_block_close

sub "2.4 Images missing width/height (CLS risk)"
code_block_open
grep -nE '<img[^>]*>' "${REPO_ROOT}/index.html" 2>/dev/null \
  | grep -vE 'width=.*height=|height=.*width=' >> "$OUT_FILE" \
  || echo "(all img tags appear to have width+height)" >> "$OUT_FILE"
code_block_close

sub "2.5 Known typos (string match)"
TYPO_PATTERNS=(
  'Enginnering' 'Enginner' 'discription' 'placeholer' 'Projet '
  'descirption' 'calender'
)
code_block_open
for pattern in "${TYPO_PATTERNS[@]}"; do
  matches=$(grep -nH "$pattern" "${REPO_ROOT}/index.html" 2>/dev/null || true)
  if [[ -n "$matches" ]]; then
    printf '[%s]\n%s\n\n' "$pattern" "$matches" >> "$OUT_FILE"
  fi
done
code_block_close

sub "2.6 Console.log left in JS"
code_block_open
grep -n 'console\.' "${REPO_ROOT}/assets/js/main.js" 2>/dev/null >> "$OUT_FILE" \
  || echo "(none — good)" >> "$OUT_FILE"
code_block_close

sub "2.7 addEventListener without null check"
code_block_open
grep -n 'addEventListener' "${REPO_ROOT}/assets/js/main.js" 2>/dev/null >> "$OUT_FILE" \
  || echo "(no addEventListener calls found — check if expected)" >> "$OUT_FILE"
code_block_close

# ------------------------------------------------------------------
# 3. Typo / spelling pass with codespell (if available)
# ------------------------------------------------------------------
section "3. Spell check (codespell)"
if has codespell; then
  code_block_open
  codespell --skip="*.pdf,*.png,*.jpg,*.jpeg,*.webp,*.svg,*.gif,*.ico,node_modules,.git" \
    "${REPO_ROOT}" 2>&1 >> "$OUT_FILE" || true
  code_block_close
else
  echo "_codespell not installed — skipping. Install with: \`pip install codespell\`_" >> "$OUT_FILE"
fi

# ------------------------------------------------------------------
# 4. HTML validation
# ------------------------------------------------------------------
section "4. HTML validation (html-validate)"
if has npx; then
  code_block_open
  cd "${REPO_ROOT}"
  npx --yes html-validate index.html 2>&1 >> "$OUT_FILE" || true
  code_block_close
else
  echo "_npx not available — skipping html-validate._" >> "$OUT_FILE"
fi

# ------------------------------------------------------------------
# 5. Link check (linkinator on the live site)
# ------------------------------------------------------------------
section "5. Link check (linkinator on live site)"
if has npx; then
  code_block_open
  npx --yes linkinator "${SITE_URL}" --recurse --silent 2>&1 \
    | head -200 >> "$OUT_FILE" || true
  code_block_close
else
  echo "_npx not available — skipping link check._" >> "$OUT_FILE"
fi

# ------------------------------------------------------------------
# 6. Lighthouse (mobile + desktop)
# ------------------------------------------------------------------
section "6. Lighthouse scores"

run_lighthouse() {
  local form_factor="$1"
  local out_json="/tmp/lh_${form_factor}.json"
  sub "6.${form_factor}"
  # Lighthouse accepts presets: perf | experimental | desktop.
  # "mobile" is the default form factor — passed by omitting --preset.
  local preset_flag=""
  if [[ "${form_factor}" != "mobile" ]]; then
    preset_flag="--preset=${form_factor}"
  fi
  if has npx; then
    code_block_open
    npx --yes lighthouse "${SITE_URL}" \
      ${preset_flag} \
      --output=json --output-path="${out_json}" \
      --chrome-flags="--headless=new --no-sandbox" \
      --quiet 2>&1 | tail -20 >> "$OUT_FILE" || true
    code_block_close

    if [[ -f "${out_json}" ]]; then
      code_block_open
      node -e "
        const r = require('${out_json}');
        const s = r.categories;
        const fmt = (k) => (s[k] ? Math.round(s[k].score * 100) : '?');
        console.log('Performance     :', fmt('performance'));
        console.log('Accessibility   :', fmt('accessibility'));
        console.log('Best Practices  :', fmt('best-practices'));
        console.log('SEO             :', fmt('seo'));
      " 2>/dev/null >> "$OUT_FILE" || true
      code_block_close
    fi
  else
    echo "_npx not available — skipping Lighthouse._" >> "$OUT_FILE"
  fi
}

run_lighthouse "desktop"
run_lighthouse "mobile"

# ------------------------------------------------------------------
# 7. Manual review reminder
# ------------------------------------------------------------------
section "7. Manual review — TO BE COMPLETED BY CLAUDE CODE"

cat >> "$OUT_FILE" <<'EOF'
The automated pass above only catches mechanical issues. Per
`WEBSITE_REVAMP_BRIEF.md` §A.2, you (Claude Code) must now manually
add the following sections to this report:

- [ ] **Positioning gaps** — does the hero communicate Cost Management
      specialization, or just "Project Manager"? Are the >1 B€ /
      15+ yrs / 4 industries metrics front and center?
- [ ] **Content gaps** — section by section, what's missing or weak?
- [ ] **Design findings** — palette, typography, spacing, imagery,
      animations — evaluate each against "senior consultant"
      positioning, not "developer portfolio".
- [ ] **Responsive findings** — test at 360 / 768 / 1024 / 1440 px.
      Report what breaks at each breakpoint.
- [ ] **Dark mode findings** — toggle dark mode, check contrast,
      check that the theme persists across reloads.
- [ ] **Print rendering** — open Print Preview. Screenshot. Is it
      usable as a printed résumé? Document what breaks.
- [ ] **Open questions for Owner** — list ambiguities you need
      resolved before Phase B.

Append these as sections 8–14 of this report, then STOP at GATE A.
EOF

# ------------------------------------------------------------------
# Done
# ------------------------------------------------------------------
echo ""
echo "Audit complete."
echo "Report written to: ${OUT_FILE}"
echo ""
echo "Next: open ${OUT_FILE}, complete the manual review sections,"
echo "      commit on branch revamp/phase-1, and stop at GATE A."
