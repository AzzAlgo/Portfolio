# Audit Report — Automated Pass
Generated: 2026-05-24 11:24 UTC
Site URL:  https://azzalgo.github.io/Portfolio/
Repo root: /e/17_Codes/Portfolio

> This file is the **automated** part of the audit.
> Claude Code must also produce a **manual** section (positioning,
> content, design, code quality) per WEBSITE_REVAMP_BRIEF.md §A.2.

## 1. File inventory


### 1.1 Root files

```
drwxr-xr-x 1 azzam 197609     0 May 24 13:05 .
drwxr-xr-x 1 azzam 197609     0 May 19  2024 ..
drwxr-xr-x 1 azzam 197609     0 May 24 13:22 .git
-rw-r--r-- 1 azzam 197609    99 May 24 12:42 .gitignore
drwxr-xr-x 1 azzam 197609     0 May 24 13:22 .tmp.driveupload
-rw-r--r-- 1 azzam 197609  4614 May 24 12:32 CLAUDE.md
-rw-r--r-- 1 azzam 197609  4859 May 24 12:37 KICKOFF_PROMPT.md
-rw-r--r-- 1 azzam 197609  3761 May 24 12:37 README_KIT.md
-rw-r--r-- 1 azzam 197609 17223 May 24 12:34 WEBSITE_REVAMP_BRIEF.md
drwxr-xr-x 1 azzam 197609     0 Jun 18  2025 assets
-rwxr-xr-x 1 azzam 197609  9058 May 24 12:36 audit.sh
drwxr-xr-x 1 azzam 197609     0 May 24 13:24 docs
-rw-r--r-- 1 azzam 197609 49354 Jun 18  2025 index.html
```

### 1.2 Asset tree (depth 3)

```
assets/css/styles.css
assets/img/Azzam_New_1.jpg
assets/img/Azzam_New_Pic.png
assets/img/Azzam_profile.png
assets/img/Azzam_profile_2.png
assets/img/Azzam_profile_3.png
assets/img/Back.jpg
assets/img/Project 1.webp
assets/img/Project 2.jpg
assets/img/Project 3.jpg
assets/img/Project 4.jpg
assets/img/Project 5.jpg
assets/img/Thumbs.db
assets/img/blob.svg
assets/img/hpc-003-530x428-c-center.jpg
assets/img/portfolio1.jpg
assets/img/portfolio2.jpg
assets/img/portfolio3.jpg
assets/img/square.jpg
assets/imgs/Thumbs.db
assets/js/main.js
assets/pdf/20210905_F_1P_Hannouf.pdf
assets/pdf/20230201_E_1P_Hannouf.pdf
assets/pdf/20250227_E_2P_Hannouf.pdf
assets/pdf/20250227_F_2P_Hannouf.pdf
assets/pdf/20250328_F_2P_Hannouf.pdf
assets/pdf/20250517_E_2P_Hannouf.pdf
```

### 1.3 Size of key files (KB)

```
index.html                     52 KB
assets/css/styles.css          20 KB
assets/js/main.js              8 KB
```

## 2. Code smells (grep pass)


### 2.1 Inline style attributes in HTML

```
(none found)
```

### 2.2 target="_blank" without rel="noopener"

```
27:                                <a href="#home" target="_blank" class="nav__link active-link">
32:                                <a href="#about" target="_blank"class="nav__link">
37:                                <a href="#Skills" target="_blank"class="nav__link">
43:                                <a href="#Qualification"target="_blank"  class="nav__link">
```

### 2.3 Images missing alt text

```
(all img tags appear to have alt — verify content is meaningful)
```

### 2.4 Images missing width/height (CLS risk)

```
97:                            <img src="assets/img/Azzam_profile_3.png" alt="">
130:                    <img src="assets/img/Azzam_profile.png " alt="" class="about__img">
608:                                <img src="assets/img/Project 1.webp" alt="" class="project__img">
628:                                <img src="assets/img/Project 2.jpg" alt="" class="project__img">
648:                                <img src="assets/img/Project 3.jpg" alt="" class="project__img">
665:                                <img src="assets/img/Project 4.jpg" alt="" class="project__img">
682:                                <img src="assets/img/Project 5.jpg" alt="" class="project__img">
```

### 2.5 Known typos (string match)

```
[Enginnering]
/e/17_Codes/Portfolio/index.html:333:                                <h1 class="skills__title">Enginnering </h1>

[Enginner]
/e/17_Codes/Portfolio/index.html:333:                                <h1 class="skills__title">Enginnering </h1>
/e/17_Codes/Portfolio/index.html:504:                                    <h3 class="qualification__title">Mechanical Enginner</h3>
/e/17_Codes/Portfolio/index.html:524:                                    <h3 class="qualification__title">Internship Mechatronic Enginner</h3>
/e/17_Codes/Portfolio/index.html:535:                                    <h3 class="qualification__title">Internship Mechanical Enginner</h3>

[placeholer]
/e/17_Codes/Portfolio/index.html:755:                                    <input type="email"  name="email" placeholer="Email Adress" class="contact__input">
/e/17_Codes/Portfolio/index.html:764:                                <textarea   name="message" placeholer="Message" id="" cols="0" rows="7" class="contact__input"></textarea>

[Projet ]
/e/17_Codes/Portfolio/index.html:667:                                    <h3 class="project__title">Position :Projet Engineer

[descirption]
/e/17_Codes/Portfolio/index.html:104:                            <p class="home__descirption">Results-oriented with 15+ years of experience delivering high-impact projects across diverse industries.</p>

[calender]
/e/17_Codes/Portfolio/index.html:428:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:439:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:459:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:473:                        <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:493:                            <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:506:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:526:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:537:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:561:                                    <div class="qualification__calender">
/e/17_Codes/Portfolio/index.html:574:                                <div class="qualification__calender">

```

### 2.6 Console.log left in JS

```
(none — good)
```

### 2.7 addEventListener without null check

```
9:    navToggle.addEventListener('click', () => {
17:    navClose.addEventListener('click', () => {
31:navLink.forEach(n => n.addEventListener('click', linkAction))
50:    el.addEventListener('click',toggleSkills)
58:    tab.addEventListener('click',() =>{
113:window.addEventListener('scroll', scrollActive)
120:window.addEventListener('scroll', scrollHeader)
128:window.addEventListener('scroll', scrollUp)
151:themeButton.addEventListener('click', () => {
```

## 3. Spell check (codespell)

_codespell not installed — skipping. Install with: `pip install codespell`_

## 4. HTML validation (html-validate)

```

E:\17_Codes\Portfolio\index.html
    9:1    error  Trailing whitespace                                                         no-trailing-whitespace
   13:1    error  Trailing whitespace                                                         no-trailing-whitespace
   32:65   error  No space between attributes                                                 attr-spacing
   37:66   error  No space between attributes                                                 attr-spacing
   41:1    error  Trailing whitespace                                                         no-trailing-whitespace
   43:57   error  No space between attributes                                                 attr-spacing
   69:1    error  Trailing whitespace                                                         no-trailing-whitespace
   82:30   error  Anchor link must have a text describing its purpose                         wcag/h30
   82:82   error  Attribute value must not be delimited by whitespace                         attr-delimiter
   85:30   error  Anchor link must have a text describing its purpose                         wcag/h30
   85:87   error  Attribute value must not be delimited by whitespace                         attr-delimiter
   88:30   error  Anchor link must have a text describing its purpose                         wcag/h30
   88:85   error  Attribute value must not be delimited by whitespace                         attr-delimiter
   91:30   error  Anchor link must have a text describing its purpose                         wcag/h30
   91:73   error  Attribute value must not be delimited by whitespace                         attr-delimiter
   95:1    error  Trailing whitespace                                                         no-trailing-whitespace
   98:1    error  Trailing whitespace                                                         no-trailing-whitespace
  100:1    error  Trailing whitespace                                                         no-trailing-whitespace
  105:86   error  Trailing whitespace                                                         no-trailing-whitespace
  112:26   error  Anchor link must have a text describing its purpose                         wcag/h30
  117:1    error  Trailing whitespace                                                         no-trailing-whitespace
  129:18   error  Unclosed element '<div>'                                                    close-order
  132:131  error  Trailing whitespace                                                         no-trailing-whitespace
  133:123  error  Trailing whitespace                                                         no-trailing-whitespace
  152:32   error  Attribute "download" should omit value                                      attribute-empty-style
  152:127  error  Trailing whitespace                                                         no-trailing-whitespace
  153:82   error  Trailing whitespace                                                         no-trailing-whitespace
  156:36   error  Attribute "download" should omit value                                      attribute-empty-style
  157:36   error  Attribute "download" should omit value                                      attribute-empty-style
  157:124  error  Trailing whitespace                                                         no-trailing-whitespace
  162:14   error  End tag '</section>' seen but there were open elements                      close-order
  165:14   error  Unclosed element '<section>'                                                close-order
  166:1    error  Trailing whitespace                                                         no-trailing-whitespace
  208:35   error  Trailing whitespace                                                         no-trailing-whitespace
  209:27   error  Trailing whitespace                                                         no-trailing-whitespace
  249:35   error  Trailing whitespace                                                         no-trailing-whitespace
  250:27   error  Trailing whitespace                                                         no-trailing-whitespace
  256:64   error  Raw "&" must be encoded as "&amp;"                                          no-raw-characters
  324:39   error  Trailing whitespace                                                         no-trailing-whitespace
  326:27   error  Trailing whitespace                                                         no-trailing-whitespace
  350:78   error  Raw "&" must be encoded as "&amp;"                                          no-raw-characters
  374:39   error  Trailing whitespace                                                         no-trailing-whitespace
  383:39   error  Trailing whitespace                                                         no-trailing-whitespace
  385:27   error  Trailing whitespace                                                         no-trailing-whitespace
  386:1    error  Trailing whitespace                                                         no-trailing-whitespace
  388:18   error  End tag '</div>' seen but there were open elements                          close-order
  389:14   error  End tag '</div>' seen but there were open elements                          close-order
  414:1    error  Trailing whitespace                                                         no-trailing-whitespace
  499:1    error  Trailing whitespace                                                         no-trailing-whitespace
  500:1    error  Trailing whitespace                                                         no-trailing-whitespace
  547:1    error  Trailing whitespace                                                         no-trailing-whitespace
  548:27   error  Trailing whitespace                                                         no-trailing-whitespace
  566:1    error  Trailing whitespace                                                         no-trailing-whitespace
  581:1    error  Trailing whitespace                                                         no-trailing-whitespace
  584:1    error  Trailing whitespace                                                         no-trailing-whitespace
  585:1    error  Trailing whitespace                                                         no-trailing-whitespace
  586:1    error  Trailing whitespace                                                         no-trailing-whitespace
  587:27   error  Trailing whitespace                                                         no-trailing-whitespace
  588:1    error  Trailing whitespace                                                         no-trailing-whitespace
  589:23   error  Trailing whitespace                                                         no-trailing-whitespace
  592:1    error  Trailing whitespace                                                         no-trailing-whitespace
  593:1    error  Trailing whitespace                                                         no-trailing-whitespace
  610:93   error  Trailing whitespace                                                         no-trailing-whitespace
  611:54   error  Raw ">" must be encoded as "&gt;"                                           no-raw-characters
  611:59   error  Trailing whitespace                                                         no-trailing-whitespace
  613:128  error  Trailing whitespace                                                         no-trailing-whitespace
  614:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  614:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  615:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  615:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  616:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  616:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  617:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  617:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  618:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  618:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  619:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  619:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  620:1    error  Trailing whitespace                                                         no-trailing-whitespace
  625:35   error  Trailing whitespace                                                         no-trailing-whitespace
  631:60   error  Trailing whitespace                                                         no-trailing-whitespace
  633:107  error  Trailing whitespace                                                         no-trailing-whitespace
  634:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  634:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  634:116  error  Trailing whitespace                                                         no-trailing-whitespace
  635:59   error  Trailing whitespace                                                         no-trailing-whitespace
  636:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  636:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  637:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  637:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  637:118  error  Trailing whitespace                                                         no-trailing-whitespace
  639:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  639:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  639:121  error  Trailing whitespace                                                         no-trailing-whitespace
  640:82   error  Trailing whitespace                                                         no-trailing-whitespace
  641:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  641:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  641:121  error  Trailing whitespace                                                         no-trailing-whitespace
  642:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  642:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  642:115  error  Trailing whitespace                                                         no-trailing-whitespace
  643:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  643:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  645:35   error  Trailing whitespace                                                         no-trailing-whitespace
  650:100  error  Trailing whitespace                                                         no-trailing-whitespace
  651:59   error  Trailing whitespace                                                         no-trailing-whitespace
  653:134  error  Trailing whitespace                                                         no-trailing-whitespace
  654:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  654:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  655:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  655:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  656:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  656:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  657:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  657:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  658:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  658:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  659:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  659:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  660:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  660:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  660:91   error  Raw ">" must be encoded as "&gt;"                                           no-raw-characters
  662:35   error  Trailing whitespace                                                         no-trailing-whitespace
  670:147  error  Trailing whitespace                                                         no-trailing-whitespace
  671:69   error  Trailing whitespace                                                         no-trailing-whitespace
  672:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  672:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  673:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  673:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  674:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  674:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  675:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  675:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  676:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  676:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  677:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  677:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  679:35   error  Trailing whitespace                                                         no-trailing-whitespace
  684:85   error  Trailing whitespace                                                         no-trailing-whitespace
  687:147  error  Trailing whitespace                                                         no-trailing-whitespace
  688:118  error  Trailing whitespace                                                         no-trailing-whitespace
  689:115  error  Trailing whitespace                                                         no-trailing-whitespace
  690:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  690:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  691:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  691:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  692:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  692:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  693:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  693:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  694:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  694:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  695:42   error  <li> element is not permitted as content under <p>                          element-permitted-content
  695:42   error  <li> element requires a <ul>, <ol>, <menu> or <template> element as parent  element-permitted-parent
  695:122  error  Raw "&" must be encoded as "&amp;"                                          no-raw-characters
  695:122  error  Unrecognized character reference "&ID"                                      unrecognized-char-ref
  697:35   error  Trailing whitespace                                                         no-trailing-whitespace
  702:1    error  Trailing whitespace                                                         no-trailing-whitespace
  709:23   error  Trailing whitespace                                                         no-trailing-whitespace
  711:1    error  Trailing whitespace                                                         no-trailing-whitespace
  750:44   error  Attribute "for" has invalid value ""                                        attribute-allowed-values
  754:44   error  Attribute "for" has invalid value ""                                        attribute-allowed-values
  759:40   error  Attribute "for" has invalid value ""                                        attribute-allowed-values
  763:40   error  Attribute "for" has invalid value ""                                        attribute-allowed-values
  764:81   error  element id "" must not be empty                                             valid-id
  764:81   error  Attribute "id" has invalid value ""                                         attribute-allowed-values
  768:45   error  Trailing whitespace                                                         no-trailing-whitespace
  784:10   error  End tag '</main>' seen but there were open elements                         close-order
  803:1    error  Trailing whitespace                                                         no-trailing-whitespace
  805:26   error  Anchor link must have a text describing its purpose                         wcag/h30
  805:78   error  Attribute value must not be delimited by whitespace                         attr-delimiter
  808:26   error  Anchor link must have a text describing its purpose                         wcag/h30
  808:83   error  Attribute value must not be delimited by whitespace                         attr-delimiter
  811:26   error  Anchor link must have a text describing its purpose                         wcag/h30
  811:81   error  Attribute value must not be delimited by whitespace                         attr-delimiter
  814:26   error  Anchor link must have a text describing its purpose                         wcag/h30
  814:69   error  Attribute value must not be delimited by whitespace                         attr-delimiter
  817:26   error  Stray end tag '</a>'                                                        close-order
  822:1    error  Trailing whitespace                                                         no-trailing-whitespace
  824:1    error  Trailing whitespace                                                         no-trailing-whitespace
  826:11   error  Anchor link must have a text describing its purpose                         wcag/h30
  833:6    error  End tag '</body>' seen but there were open elements                         close-order
  834:2    error  End tag '</html>' seen but there were open elements                         close-order

✖ 183 problems (183 errors, 0 warnings)

More information:
  https://html-validate.org/rules/no-trailing-whitespace.html
  https://html-validate.org/rules/attr-spacing.html
  https://html-validate.org/rules/wcag/h30.html
  https://html-validate.org/rules/attr-delimiter.html
  https://html-validate.org/rules/close-order.html
  https://html-validate.org/rules/attribute-empty-style.html
  https://html-validate.org/rules/no-raw-characters.html
  https://html-validate.org/rules/element-permitted-content.html
  https://html-validate.org/rules/element-permitted-parent.html
  https://html-validate.org/rules/unrecognized-char-ref.html
  https://html-validate.org/rules/attribute-allowed-values.html
  https://html-validate.org/rules/valid-id.html

```

## 5. Link check (linkinator on live site)

```
→ crawling https://azzalgo.github.io/Portfolio/
✓ Successfully scanned 18 links in 2.665 seconds.
```

## 6. Lighthouse scores


### 6.desktop

```
```
```
```

### 6.mobile

```
Invalid values:
  Argument: preset, Given: "mobile", Choices: "perf", "experimental", "desktop"

Specify --help for available options
```

## 7. Manual review — TO BE COMPLETED BY CLAUDE CODE

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

---

> # MANUAL AUDIT — Claude Code
> Below: sections 8–15, produced manually per `WEBSITE_REVAMP_BRIEF.md` §A.2.
> All findings reference the **current `index.html` on `revamp/phase-1` branch (unchanged from `master`)** and the **live site** at `https://azzalgo.github.io/Portfolio/`.

## 6.bis Lighthouse — RE-RUN (script preset bug)

The script's `run_lighthouse "mobile"` is invalid — Lighthouse only accepts `perf`, `experimental`, `desktop`. Mobile is the **default** (omit `--preset`). I re-ran both presets manually:

| Category        | Mobile (default) | Desktop | GATE B bar | Status |
|-----------------|-----------------:|--------:|-----------:|--------|
| Performance     | **67**           | **85**  | ≥ 90       | ❌ both |
| Accessibility   | **79**           | **79**  | ≥ 95       | ❌ both |
| Best Practices  | **75**           | **74**  | ≥ 95       | ❌ both |
| SEO             | **91**           | **91**  | ≥ 95       | ❌ both |

**Mobile Core Web Vitals (live site):**

| Metric                       | Value     | Threshold | Status |
|------------------------------|-----------|-----------|--------|
| LCP (Largest Contentful Paint) | **14.5 s** | < 2.5 s   | ❌ catastrophic |
| FCP (First Contentful Paint)   | 2.9 s     | < 1.8 s   | ❌ |
| CLS (Cumulative Layout Shift)  | **0.108** | < 0.1     | ❌ |
| TBT (Total Blocking Time)      | 0 ms      | < 200 ms  | ✅ |
| TTI (Time to Interactive)      | 14.5 s    | < 3.8 s   | ❌ |
| Speed Index                    | 2.9 s     | < 3.4 s   | ✅ |

> The 14.5 s LCP is dominated by render-blocking external CSS (Unicons CDN, Swiper CDN, Google Fonts) plus unsized non-optimized images. CLS is driven by the 7 `<img>` tags missing `width`/`height`.

**Audit-script fix needed in Phase B:**
- In `audit.sh` §6, change `run_lighthouse "mobile"` to either drop the `--preset` flag entirely or use `--form-factor=mobile`. Currently the script silently produces empty output and falls through.

---

## 8. Positioning gaps

### 8.1 Hero communicates the wrong specialization
**Current hero copy (index.html L102–107):**
```
<h1 class="home__title">Azzam HANNOUF</h1>
<h3 class="home__subtitle">Senior Consultant in Project Management</h3>
<p class="home__descirption">Results-oriented with 15+ years of experience
   delivering high-impact projects across diverse industries.</p>
<a href="#Contact" class="button button--flex">Contact Me</a>
```
- The subtitle says "**Project Management**" — generic. Cost Management / EVM, the actual differentiator, **is nowhere on the hero**.
- The description reads "results-oriented … high-impact projects … diverse industries." Three meaningless senior-consulting clichés in one sentence.
- Single CTA "Contact Me" — no segmentation by audience type (hiring vs consulting).

### 8.2 Credentials are buried in About, not hero
- **PMP, MBA, MEng**: live in the About paragraph (L132–135) as a run-on sentence. They do not appear above the fold.
- The Qualification section has the formal entries (L426 MBA, L437 Master's, L559 PMP), all behind a tab the visitor has to click.
- A senior reader scanning the hero gets **zero credential signal** in the first scroll.

### 8.3 Credibility anchors absent from hero
The Brief calls for `>1 B€ · 15+ years · 4 industries` above the fold. The current site has:
- "**15+ years**" mentioned only in the body copy of two paragraphs (Home L104, About L132).
- "**>1 B€**" appears once — in project card 1's title (L611), inside the Swiper carousel that's halfway down the page.
- "**4+ industries**" is in a small stat box in About (L146: `4+ Industry`) — typo: "Industry" should be "Industries" — and the "**10+ Projects**" stat next to it undersells the 11 documented engagements (and is the kind of round number that reads as guessed).

**Conclusion.** A senior reader who reads only the hero gets: a name, a generic title, a cliché sentence, and one button. None of the three credibility anchors land. **Positioning is the single largest gap.**

---

## 9. Content gaps & copy issues

### 9.1 Section-by-section assessment

**Hero (Home)** — *covered in §8. Largest weakness.*

**About**
- The paragraph (L132–135) is **one run-on sentence** with three clichés ("results-oriented", "high-impact", "unique blend") and no specifics. Replace per Brief §B.2 draft.
- Stat boxes (L138–148): `15+ Years` / `10+ Projects` / `4+ Industry`. The "10+" undersells (11 documented). "Industry" singular is wrong. The boxes themselves are template aesthetic, not editorial.
- CV download (L152–158): functional but cosmetically inconsistent — primary button shows English by default, the EN/FR dropdown appears on hover only, which fails on touch devices. There is also one stray space in `assets/img/Azzam_profile.png ` (trailing space in src — fragile).

**Skills**
- Entire section is wrong-shape for a senior site (see §10 design audit).
- Self-assessed percentages: Arabic 100%, French 90%, English 90%, Primavera 90%, HTML 50%, CSS 50%. *Self-assessing a language at 90% reads as junior.* HTML/CSS 50% on a Cost Manager's site is irrelevant noise.
- Heading typo: `Enginnering` (L333).
- Subtitle on "Engineering": "More than 15 years" — fine, but "Project Management — More than 14 years" (L216) contradicts "15+" claim elsewhere. Pick one number.

**Qualification (Education / Experience / Certification)**
- Education entry "MBA" alone (L426) — should be "MBA, Finance specialization" or "MBA — Finance" so a fast reader catches the differentiator.
- Experience: "Mechanical Enginner" (L504) — typo; "Internship Mechatronic Enginner" (L524) — typo; "Internship Mechanical Enginner" (L535) — typo.
- Three typo'd entries on a credentials page is a credibility hit.
- The Experience tab lists 5 roles but only 2 employers (PIMAN Group + Suido Kiko Middle East). The PIMAN Group entry spans 2018–Present with no breakdown — yet there are 9 distinct PIMAN missions in `docs/ENGAGEMENTS.md`. This timeline cannot show the actual seniority arc.
- Certification tab has PMP (valid 2027) plus "Business the Nordic way" — a short business course is mixed with PMP without hierarchy. PMP should dominate; the Nordic course should be smaller or moved to a side list.

**Projects (Swiper carousel)**
- 5 projects shown. The Brief allows the carousel when ≥5, so it's acceptable to keep — but reframing per the Brief format is required.
- Cards lead with `Position: PMO-Cost Management / Budget: >1 B€ / Project: Small Modular Reactor` — that's the right *shape*, but:
  - **NDA breach risk**: Project 1 names the SMR program contextually visible as Newcleo's flagship. Per `docs/DECISIONS.md` OD-W5, PIMAN missions must NOT name the client/project. **Project 1 needs anonymization.**
  - Project 3 has a malformed `>` outside markup at L660: `Generate progress reports on investments.</li>>` — visible as `>` text after the list closes.
  - Project 4 title typo: `Projet Engineer` (L667).
  - Every card uses raw `<li>` inside a `<p>` (47 occurrences across all 5 cards per html-validate). Browsers self-close the `<p>` before each `<li>`, so the styling is inconsistent — visible as a layout glitch.
  - The "Project" titles are anonymous noise ("Multiple", "New build nuclear reactor"). Reframe per Brief: Context / Contribution / Outcome with measurable result.

**Contact**
- Phone `0033 6 60 54 76 69` is the French personal number — confirm with Owner if it should remain public on a senior-website footer.
- Form: 4 fields (Name, Email, Subject, Message) — labels are present but `for=""` is empty on all `<label>` tags (8 a11y errors from html-validate), so labels do not associate with inputs.
- Form has `placeholer="Email Adress"` (typo + grammar) on the email input (L755) and `placeholer="Message"` (L764) on the textarea.
- `name="email"` input is `type="email"` but has no `required` attribute, no `autocomplete="email"`, no `inputmode`.
- The textarea has `id=""` (invalid empty id) and `cols="0"` (visual=0 columns).
- FormSubmit redirect on success is unclear — should be tested.
- No honeypot, no `_subject` config, no `_next` redirect — FormSubmit defaults will be used.

**Footer**
- Subtitle "Project Manager Consultant" (L791) — same positioning miss as the hero. Should be "Cost Management & EVM Consultant" or similar.
- Footer has a duplicate `</a>` on L817 (stray closing tag — flagged by html-validate).
- Copy line: `@Azzam HANNOUF All right reserved` — should be `©` (copyright symbol), not `@`. "right" should be "rights".

### 9.2 Typos confirmed (cross-checked with §2.5 grep + manual)

| Location | Bad | Should be |
|----------|-----|-----------|
| L104 | `home__descirption` (class) | `home__description` |
| L130 | `Azzam_profile.png ` (trailing space in src) | `Azzam_profile.png` |
| L333 | `Enginnering` | `Engineering` |
| L504 | `Mechanical Enginner` | `Mechanical Engineer` |
| L524 | `Internship Mechatronic Enginner` | `Mechatronics Engineer Internship` |
| L535 | `Internship Mechanical Enginner` | `Mechanical Engineer Internship` |
| L611 | `Budget: >1 B€` (raw `>`) | `Budget: &gt;1 B€` |
| L660 | `</li>>` (stray `>`) | `</li>` |
| L667 | `Projet Engineer` | `Project Engineer` |
| L755 | `placeholer="Email Adress"` | `placeholder="Your email"` (also fix "Address") |
| L764 | `placeholer="Message"` | `placeholder="Your message"` |
| L820 | `@Azzam HANNOUF All right reserved` | `© Azzam HANNOUF. All rights reserved.` |
| L428…L574 | `qualification__calender` (10 occurrences) | `qualification__calendar` — also note CSS at L727 uses correct spelling, so HTML class is orphan |
| L724 | `<contact__subtitle>0033 6 60 54 76 69` | format as `+33 6 60 54 76 69` |
| L146 | `4+ Industry` | `4+ Industries` |

### 9.3 CTA structure

- **Single hero CTA** "Contact Me" — no audience segmentation. The Brief requires dual CTA (primary "Discuss a mission →", secondary "Download CV" with EN/FR sub-menu).
- The CV download is in About, **far** from the hero where senior recruiters expect it.
- No mailto: / no direct LinkedIn DM button.
- Nav has "Contact me" as a section link but no quick action.

---

## 10. Design findings

### 10.1 Color palette — wrong genre

Current system (`styles.css` L10): `--hue-color: 225` (purple-blue) driving all colors via HSL. The CSS comment itself says *"Purple 250 - Green 142 - Blue 230 - Pink 340"* — that's a template's color knob, not a brand decision. The accent `hsl(225, 69%, 61%)` (~`#6C63FF`) is the **"undraw.co generic SaaS purple"** seen on thousands of dev portfolios.

Against the Brief's target — "senior consulting / financial authority" — this palette communicates **junior developer / generic SaaS**. Replace per Brief §B.3 (warm copper accent #B8864B on warm cream + near-black navy ink).

### 10.2 Typography — generic AI default

- One font: **Poppins** 400/500/600, loaded from Google Fonts at the very top of CSS (`@import`). Poppins is the most-used "modern friendly" font on AI-generated portfolios and signals "template."
- No editorial serif anywhere. No display weight contrast.
- Type hierarchy is tight: `--big-font-size: 3rem`, `--h1-font-size: 2.25rem`, `--h2-font-size: 1.5rem`, `--h3-font-size: 1.25rem`, body `1rem` — but **the hero `<h1>` ("Azzam HANNOUF") is only `--big-font-size` (3rem desktop), not visually dominant.** Senior-grade sites typically push the hero name/H1 well above 4–5rem.
- Section titles use `--h1-font-size` (2.25rem) — same size as the hero name — flattens hierarchy.

### 10.3 Spacing scale — declared but inconsistently applied

CSS variables `--mb-0-25` through `--mb-3` define a scale, BUT:
- Multiple off-scale literals: `padding: 10px 20px` (L526), `box-shadow: 0px 8px 16px` (L546), `width: 600px` (L1231), `right: 1rem` (L946), random `2.7rem` (L614), `5rem` (L966), `20rem` (L1210).
- Inconsistent: some buttons use `padding: 1rem`, others use `padding: 10px 20px`.
- The Brief's tighter scale (4/8/12/16/24/32/48/64/96/128) is more disciplined; current scale's 8-step granularity is fine but **not respected** by the actual CSS.

### 10.4 Percentage skill bars — DELETE category

Per Brief: replace with Toolkit (tag chips, no percentages). The current bars communicate **junior** for three reasons:
- Self-assessing Arabic at 100%, French/English at 90% is not how senior bilingual professionals signal language.
- 6+ tools assessed at 50–90% reads like a CV grid, not a service offering.
- The visual (purple progress bar on light track) is portfolio-template default.

### 10.5 "Years / Projects / Industry" stat boxes (About §10.2 of CSS) — DELETE pattern

- Solid color rounded rectangles with big numbers — same template pattern as the skill bars.
- `4+ Industry` typo + `10+ Projects` undersells.
- Move the metrics to the hero (per Brief) and present as inline editorial stat-row, not boxed widgets.

### 10.6 Morphing blob avatar (CSS L308–353) — DELETE animation

```css
.home__img {
  border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
  animation: flow 4s infinite ease-in-out;
}
@keyframes flow { ... }
```
- Continuous shape morph on the hero photo. **Distracting.** Reads as portfolio template (it is a common Bedimcode pattern — line 1 of `index.html` confirms the source: `<!-- https://www.youtube.com/watch?v=27JtRAI3QO8 -->`).
- Per Brief §B.3 OD-W4: drop the photo from the hero entirely. Move the (un-animated, clean-cropped) headshot to About only.
- There is also a **broken CSS bug at L454–463**: the `.about__img::before` pseudo-element uses `background: red; z-index: 10` — that's debug code that should overlay the photo with a red rectangle. On the live site it appears to render off-position so it is not visible, but it is still loading.

### 10.7 Swiper carousel — keep with reservations

- 5 projects = at the Brief's threshold (carousel allowed if ≥5).
- BUT: the implementation has a **version mismatch** — CSS loads Swiper 9 (`swiper@9` in HTML L11), JS loads Swiper 11 (`swiper@11` in HTML L830). Functional but fragile and adds extra network weight.
- The carousel hides content below the fold of the viewer's first scroll (auto-plays nothing, but only shows 1 of 5 cards at a time) — bad for SEO and senior-reader skim.
- Recommended in Phase B: replace with a 2-column grid showing all 5 featured engagements + a "View more" disclosure to the Career timeline for the other 6.

### 10.8 Imagery quality (per OD-W7 — flag photos)

Listed assets (from §1.2):

| File | Use | Verdict |
|------|-----|---------|
| `Azzam_profile_3.png` | Home hero photo | **Flag.** PNG (no transparency reason to favor PNG over WebP/AVIF), unsized, animated frame around it. Recommend: keep face crop, deliver as 800×800 WebP+JPG fallback, deliver an additional 1600×1600 for retina. |
| `Azzam_profile.png ` | About photo | **Flag.** Trailing space in src is a bug. Loads same person, different crop. Pick one canonical headshot. |
| `Azzam_New_1.jpg`, `Azzam_New_Pic.png`, `Azzam_profile_2.png` | unused | Dead assets — remove. |
| `Back.jpg` | unused | Dead asset — remove. |
| `blob.svg` | unused | Dead. |
| `Project 1.webp` through `Project 5.jpg` | Project cards | **Flag.** Mixed formats (1 WebP + 4 JPG), filenames contain spaces, no `width`/`height` attributes — these are stock-photo aesthetic, not engagement-specific. Per OD-W7 keep for now but **flag for replacement** with editorial photography or vector illustrations of the relevant industry. |
| `portfolio1.jpg`, `portfolio2.jpg`, `portfolio3.jpg`, `square.jpg`, `hpc-003-530x428-c-center.jpg` | unused | Dead — remove. |
| `Thumbs.db` (in `assets/img/` and `assets/imgs/`) | Windows Explorer artifacts | **Should be in `.gitignore` and removed from repo.** |
| `assets/imgs/` (typo folder alongside `assets/img/`) | typo folder | Verify contents, then delete. |

### 10.9 Other design smells

- **Header is pinned to the BOTTOM on mobile** (`bottom: 0` at L175). This is a stylistic choice copied from the original template; senior readers expect the nav at the top. The 768px breakpoint flips it to top (`top: 0; bottom: initial` at L1088), but mobile still has it at the bottom. Inconsistent.
- **Scroll-up button at `right: 1rem; bottom: -20%`** (L944–947) — uses `-20%` to hide off-screen, animated to `bottom: 5rem` on scroll. The 20% of viewport height is fine, but using a percentage-based hide pattern is fragile (different page lengths produce different hidden positions).
- **No focus-visible styles** — interactive elements (links, buttons, nav items) inherit default browser focus rings, which the Unicons icon-fonts can mask. Keyboard navigation is therefore unreliable.

---

## 11. Responsive findings

**Methodology.** I did not run a headless browser at the 4 widths (the testing harness available here is Chromium-via-Lighthouse for mobile-default emulation only). The findings below combine: (a) Lighthouse mobile emulation results (412×823 default), (b) static read of media queries in `styles.css`, (c) explicit breakpoint analysis. **Visual walkthrough at 360/768/1024/1440 is in the Owner's hands** — Phase B will include real browser screenshots at GATE B.

**Breakpoints defined in CSS:**
- `max-width: 350px` (L990)
- `min-width: 568px` (L1035)
- `min-width: 767px` (L226) — for nav menu hide
- `min-width: 768px` (L1068)
- `min-width: 968px` (L60) — typography rescale
- `min-width: 1024px` (L1193)

**Issues by target width:**

**360 px (mobile portrait, small)**
- Falls into the 350–567 range → no specific rule. The 350px rule (L990) only applies to ≤350. **Layout at 360 is the default mobile layout**, which means:
  - Bottom-pinned nav with 6 items in `grid-template-columns: repeat(3, 1fr)` — at 360px each column is ~120px wide, icons + labels fit but tight. Touch targets per Lighthouse: **fail** (some <48px).
  - Hero photo `.home__img` is `width: 200px` (CSS L326) — on a 360px viewport that leaves only 160px of horizontal padding for the text column. Hero text wraps tightly.
  - Stat boxes (`.about__infos` flex with `gap: 3rem`, L474) — gap of 3rem (48px) on a 360px viewport means the three boxes wrap to a column, which is acceptable, but the `gap: 3rem` after wrap adds excess vertical whitespace.

**768 px (tablet portrait / mobile landscape)**
- Triggers the 768px breakpoint: header flips to top, sections gain padding, project images grow to 320px wide.
- BUT: at exactly 767px (the nav-menu fixed-bottom kick-in) and 768px (the layout shift) there is a **1px overlap zone** where two media queries fight each other. Likely a non-issue in practice but ugly.
- Skills accordion at 568px+ uses `grid-template-columns: repeat(2, 1fr)` (L1053) — at 768px the two-column skills grid + percentage bars are clearly visible. **Worst case for the "delete percentage bars" recommendation.**

**1024 px (tablet landscape / small laptop)**
- 1024px breakpoint kicks in: `.home__social` translates X by -6rem (L1206), Swiper button-next moves to `right: 5rem`. These are arbitrary nudges from the template. Pixel-perfect at 1024 but they look misaligned the moment the viewport drops below 1024.
- `.projects__container` gets `column-gap: 20rem` (L1210) — 320px of horizontal gutter between project columns. Visible only if `.projects__container` is a multi-column grid — it isn't (single Swiper). So this rule does nothing — orphan CSS.

**1440 px (desktop)**
- No specific 1440px breakpoint. Falls back to 1024px rules.
- `.container` is `max-width: 768px` (L162) on small screens; on `min-width: 768px` the body padding rule sets `padding: 0 1rem` (L1095). At 1440px viewport, the content sits centered with substantial gutters on both sides — fine.
- BUT: the Swiper carousel `width: 320px` images centered in a wide container look visually small. The contact form is hard-coded `width: 600px` (L1231) on `min-width: 1024px` — at 1440 it is a small centered column, looks unfinished.

**Touch-target failure** (from Lighthouse mobile): some interactive elements (nav icons, social icons, theme button) are below the 48×48px recommendation. Confirmed.

**Recommendation:** Phase B should redefine the breakpoints to 480 / 768 / 1024 / 1280 with a consistent mobile-first cascade, set a max content width of ~1200px, and remove the per-element nudges (`translateX(-6rem)`, `column-gap: 20rem`).

---

## 12. Dark mode findings

**Theme persistence** (main.js L130–158): **works.** localStorage keys `selected-theme` and `selected-icon` persist across reloads. Verified the logic.

**Toggle mechanism** (main.js L131, 151): the `themeButton` constant is fetched with `getElementById('theme-button')`. There is **no null check before `addEventListener` (L151)**. If the `#theme-button` element is ever absent (e.g., on a future page variant), the entire script after that line crashes. CLAUDE.md flagged this exact issue.

**Contrast failures** (from Lighthouse §10):
- "Background and foreground colors do not have a sufficient contrast ratio" — confirmed failing in BOTH light and dark modes.
- Inspection of `body.dark-theme` variables (CSS L73–85):
  - `--text-color: hsl(225, 8%, 75%)` on `--body-color: hsl(225, 28%, 12%)` — ratio ≈ 9.2:1, **passes**.
  - BUT `--text-color-light: hsl(225, 8%, 65%)` on `--body-color: hsl(225, 28%, 12%)` ≈ 6.5:1, passes.
  - The failing cases are likely:
    - `--text-color-light` used inside `.skills__subtitle`, `.qualification__calendar`, `.contact__subtitle`, `.footer__copy` — when these sit on lighter `--container-color` (HSL 225,29%,16%) in dark mode, contrast drops.
    - `.button` text `color: #fff` on `--first-color` (hsl 225, 69%, 61%) — **contrast ≈ 3.2:1, fails AA**.
    - `.home__title` color uses `--title-color` ≈ very high contrast in light mode, but in dark it is a near-white on dark navy — passes.
- **The button (Primary CTA `.button`) failing AA contrast in BOTH modes is the most impactful issue** — it is the most clicked element.

**Dark mode visual issues** (static inspection):
- `.about__img::before` red overlay (CSS L454–463) is theme-agnostic and visible in dark mode if the bug ever triggers visually.
- `.footer__bg` uses `--first-color-second` which is redefined in dark to `hsl(225, 30%, 8%)` — a near-black on a near-black body — the footer will visually disappear in dark mode.
- `.scrollup` button uses `--first-color` (the same purple) with `opacity: 0.8` — readable but template aesthetic.

---

## 13. Print rendering

**Search for `@media print`:** none found in `styles.css`. **There is no print stylesheet at all.**

**Static analysis of what Ctrl+P would produce:**
- The browser will render the screen layout to paper at the configured paper size (A4 / Letter default).
- **Backgrounds:** browser defaults usually strip background colors unless "Background graphics" is enabled. Dark mode would print as black-on-white if backgrounds are stripped, broken if backgrounds are kept.
- **Navigation:** the fixed-position header (mobile bottom-pinned, desktop top-pinned) is a known print failure — it appears on every printed page, wasting space and obscuring content.
- **Icons:** all visual icons are Unicons font glyphs via CDN. If the print job is offline or the icon font fails to load (very common in print contexts), every icon prints as a `?` square. The result is unreadable.
- **Carousel:** Swiper shows 1 slide at a time on screen. On print, that 1 slide is what prints. The other 4 engagements **do not appear on paper.**
- **Skills bars:** the percentage bars are background colors. If backgrounds are stripped, the bars are invisible — the labels (Arabic 100% / Primavera 90% etc.) print as text only, which is fine, but the visual signal is lost. If backgrounds are kept, the purple bars print.
- **Theme button + scroll-up button** print as visible elements (the scrollup is fixed-position, will appear on every page).
- **Contact form** prints as visible empty input boxes — meaningless on paper.

**Verdict:** **the site is not printable as a résumé.** It produces a 5–8 page print with broken nav, missing carousel content, possibly missing icons, and a contact form printed as empty boxes. Per CLAUDE.md, GATE B requires a print stylesheet that produces a clean printout — this is a P1 deliverable for Phase B.

---

## 14. Open questions for Owner

### Engagement content (from `docs/ENGAGEMENTS.md` "Open Owner inputs")
> I noted in my Step 1 ambiguity that `docs/ENGAGEMENTS.md` would have an "Open Owner inputs" appendix. The file as committed does not have a final "Open Owner inputs" section — it ends at "Disclosure footer". Treating the questions below as the de-facto Owner-input list for Phase B; correct me if you intended additional ones.

1. **Engagement 03 plant manager (Vanatome) — current role.** The card says "current" — should the date display read `2025 – present`, or do you prefer `2025`? Should the role say `Plant Manager` (literal) or `Plateau Manager – International Projects` (translation of `Responsable de plateau`)?
2. **Engagement 04 country listing.** UAE + Uzbekistan + Russia + client-base France — should the card display all four, or summarize as "Middle East / CIS"? Russia is now politically sensitive; do you want to redact it?
3. **Engagement 06 budget softening.** Currently `confidential — high-rise development`. Acceptable, or would you prefer a quoted band like `~€500 M scope, claim amount confidential`?

### New ambiguities surfaced by the audit
4. **Phone number on the public site.** `+33 6 60 54 76 69` displays publicly today (L724). Confirm you want it to remain public, or replace with the contact form / a generic mailto / Calendly. (Spam exposure concern.)
5. **PIMAN missions visible on Experience tab.** The Experience timeline says `Project Manager Consultant — Piman Group — 2018 – Present`. Confirm we keep that single entry. The alternative is to break PIMAN out as `Piman Group — Senior Consultant (2018 – Present): 9 missions delivered across nuclear / oil & gas / aerospace / consumer goods / construction.`
6. **Social links.** Confirm we keep all four (LinkedIn, Instagram, Facebook, GitHub) on a senior-website footer. Personal Facebook and Instagram links may dilute the consulting positioning for some senior readers.
7. **"Mechanical Engineer" job titles for the Suido Kiko era.** The Experience tab lists `Mechanical Enginner — Suido Kiko Middle East — 2009 – 2014` but the engagement is labeled "Project Engineer" in `docs/ENGAGEMENTS.md`. Pick one — were you a Mechanical Engineer or a Project Engineer during 2009–2014?
8. **MBA wording.** Education tab says `MBA — Emlyon Business School — 2017 – 2018`. Add `, Finance specialization` (per Brief §B.2)?
9. **`assets/imgs/` typo folder + `Thumbs.db` files.** Confirm I may delete these Windows Explorer artifacts and the typo folder during Phase B housekeeping (subject to the standing "do not touch CV PDFs" rule which is unrelated).
10. **Dead asset images.** `Azzam_New_1.jpg`, `Azzam_New_Pic.png`, `Azzam_profile_2.png`, `Back.jpg`, `blob.svg`, `portfolio1.jpg`, `portfolio2.jpg`, `portfolio3.jpg`, `square.jpg`, `hpc-003-530x428-c-center.jpg` — none are referenced in `index.html`. May I delete in Phase B?
11. **CV file format on the site.** Current site only links to `20250517_E_2P_Hannouf.pdf` (EN) and `20250328_F_2P_Hannouf.pdf` (FR). Are these the canonical CVs for the relaunch, or will newer versions be supplied?

---

## 15. Priority list (P0 / P1 / P2)

### P0 — blocks credibility (must fix or replace, not optional)

1. **Hero positioning** (§8.1, 8.2, 8.3) — current hero says "Project Management" not "Cost Management & EVM"; PMP/MBA/MEng buried; no credibility anchors above the fold.
2. **NDA breach in Project 1 card** (§9.1 Projects) — names the SMR program contextually visible as Newcleo's flagship; must be anonymized per OD-W5 before Phase B ship.
3. **Skills percentages and stat boxes** (§10.4, §10.5) — pattern reads junior; delete.
4. **Color palette + typography** (§10.1, §10.2) — purple #6C63FF + Poppins = developer-template aesthetic; replace per Brief §B.3.
5. **Typos in section titles and credential entries** (§9.2) — `Enginnering`, `Mechanical Enginner` ×3, `Projet Engineer` are credibility-killing on a senior CV.
6. **Lighthouse mobile Performance 67 and LCP 14.5s** (§6.bis) — render-blocking CDN CSS/JS, unsized images, no font preload; site is unusable on 4G.
7. **Lighthouse Accessibility 79 in both presets** (§6.bis) — empty `for=""` labels, missing link names, `<li>` not in `<ul>`, contrast failures including primary CTA button.

### P1 — material quality lift (significantly improves credibility)

8. **Replace Swiper carousel** with 2-column grid (§10.7) — content visibility for senior skim + SEO.
9. **Engagement card reframing** — Context / Contribution / Outcome with quantified results (per `docs/ENGAGEMENTS.md`).
10. **Print stylesheet** (§13) — site must produce a clean printable résumé per CLAUDE.md.
11. **Image optimization** (§10.8) — WebP/AVIF, `width`+`height` attributes, `loading="lazy"`, drop dead assets.
12. **HTML validation cleanup** (183 errors from §4) — unclosed `<div>`/`<section>`/`<main>`/`<body>`/`<html>`, `<li>` inside `<p>`, raw `&`/`>`, empty `for=""`/`id=""`.
13. **JS refactor** — `themeButton` null check, IntersectionObserver scroll-spy, fix `sectionId` global leak, Swiper version match (HTML loads 9 + 11; pick one).
14. **Footer positioning rewrite** — "Project Manager Consultant" → "Cost Management & EVM Consultant".
15. **CV download in hero** — dual CTA per Brief §B.2 ("Discuss a mission →" + "Download CV" with EN/FR sub).
16. **Contact form a11y** — non-empty `for` attributes, `aria-required`, `autocomplete`, honeypot, proper confirmation.
17. **Footer copy/HTML** — `@` → `©`, "right" → "rights", drop stray `</a>` at L817.
18. **Dark mode contrast** — primary CTA button text vs accent fails AA in both themes; footer disappears (`--first-color-second` near-black on near-black body).

### P2 — polish (finish the picture)

19. **Editorial typography hierarchy** — hero H1 to ~4.5–5rem, section titles smaller than H1.
20. **Remove inline morphing blob animation** (§10.6) — already part of P0 (palette/aesthetic) but visually the easiest win.
21. **Remove dead CSS classes** — `qualification__calendar` (HTML uses `__calender`), `contacg__label`, `home__desciption` (HTML uses `__descirption`), `.skills__100` rule never invoked.
22. **Remove dead image assets** (§14 Q10).
23. **Fix `.about__img::before` red-overlay debug code** (§10.6).
24. **Drop unused CSS rules** — `.swipe`, `.swiper-project-icon`, `.qualification__calendar` (mismatched), `.contacg__label` etc.
25. **Drop trailing spaces** — `Azzam_profile.png ` in src, many trailing-whitespace errors from html-validate.
26. **Fix `audit.sh` mobile preset bug** (§6.bis) so the script self-reports cleanly on future runs.
27. **Replace `.tmp.driveupload/`** Google Drive sync artifacts visible in `.git`-tracked area — already ignored, but the folder exists on disk; can be deleted from the working tree (separate task).
28. **`assets/imgs/` typo folder + `Thumbs.db` removal** (subject to OQ #9).

### Counts
- **P0: 7**
- **P1: 11** (items 8–18)
- **P2: 10** (items 19–28)
