# West Baltimore College Pathways

Final project for INFO 552 (Introduction to Web Design for Information Organizations), Drexel University, Spring 2026.

A community information website for first-generation college-bound students in West Baltimore (ZIP codes 21216 and 21217). The site collects what's needed for FAFSA, scholarships, college applications, tutoring, deadlines, and Baltimore-specific programs (CollegeBound Foundation, Maryland Ascent, BCCC Mayor's Scholars).

## What's included

**10 HTML pages** (the proposal called for 8+ with at least one subpage):

- `index.html` — Home (hero, stats, topic cards, programs, deadlines)
- `start-here.html` — Start Here (with FAQ accordion)
- `grade-checklist.html` — **Subpage** of Start Here
- `pay-for-college.html`
- `get-help-applying.html`
- `programs.html`
- `tutoring.html`
- `deadlines.html`
- `resources.html`
- `contact.html`

**Plus:**

- `styles.css` — single shared stylesheet
- `script.js` — small JS for two interactive features (extra credit):
  1. Mobile navigation toggle
  2. FAQ accordion on the Start Here page

## Visual direction

Inspired by Teachable.com — generous white space, photo-forward hero with text on the left and an image on the right, pill-shaped CTAs, big numbers in a stats strip, photo-topped program cards. The proposal's stated color palette (deep blue `#0B3D91`, gold `#F2C94C`, green `#276749`, brown-orange `#9C4221`) is unchanged; the brighter green `#2F8A60` appears as a secondary accent in a similar role to Teachable's signature mint.

## Photography

Photos are hot-linked from **Pexels** — a free stock photo service with a permissive license (free for commercial and non-commercial use, no attribution required, though we credit them in the footer anyway). The photos are chosen to represent the target audience: predominantly Black students (Baltimore City Public Schools is about 75% Black) and the educators and tutors who help them.

**A note on photos:** Photos load from Pexels' public CDN (`images.pexels.com`). When you open the site in any normal web browser (Chrome, Firefox, Safari, Edge), the photos load automatically — no setup needed. If you host the site on GitHub Pages, Netlify, or any web server, photos load there too.

The photos used:
- Confident young Black student in a library (hero)
- Tutor and student working together (homepage feature)
- Black male student in library (CollegeBound card)
- Student with papers and smartphone (Maryland Ascent card)
- Diverse students walking and laughing on campus (Mayor's Scholars card)
- Diverse students studying together (homepage program card)
- Teacher helping student on laptop (tutoring page, Get Help Applying page)

If you'd like to swap any photo for one specific to West Baltimore (a real local student, a counselor at a Baltimore school, etc.), just replace the `src=""` URL in the corresponding `<img>` tag. The path goes in the same spot.

## How to view the site

**The easy way:** Double-click `index.html`. It opens in your default browser. Click around — everything works.

**With a local server** (recommended for testing all features cleanly):
```
python3 -m http.server 8000
```
Then go to `http://localhost:8000/` in your browser.

**To host it online** (so others can see it): the simplest free option is GitHub Pages. Or Netlify. Or upload the folder to a Drexel personal-page directory.

## What's used (INFO 552 scope)

- Standards-compliant HTML5
- CSS (custom properties + flexbox)
- ~35 lines of vanilla JavaScript for the two interactive features
- No frameworks (no Bootstrap, React, Tailwind, etc.)
- Google Fonts (Inter), with Arial fallback when offline

## Accessibility

- Skip-to-content link on every page
- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- `aria-current="page"` on the active nav link
- `aria-expanded` on the menu toggle and FAQ questions
- Visible focus styles on links, buttons, and form fields
- Decorative SVG icons marked `aria-hidden="true"`
- All photos have descriptive `alt` text
- Color contrast meets WCAG AA (e.g. white on `#0B3D91` ≈ 9.5:1; dark text on white ≈ 16:1)

## Color palette (from the proposal)

| Use | Hex |
|---|---|
| Primary blue (headings, buttons, nav) | `#0B3D91` |
| Brighter accent green | `#2F8A60` |
| Original proposal green (badges, success) | `#276749` |
| Gold (highlights) | `#F2C94C` |
| Brown-orange (deadlines) | `#9C4221` |
| Background | `#F7FAFC` |
| Body text | `#1A202C` |

## Sources for the statistics on the homepage

- **21,927 Baltimore City high school students** — Baltimore City Public Schools enrollment, 2025–2026
- **11,470 advising sessions / 925 FAFSA completions** — CollegeBound Foundation, 2024–2025 annual data

## Folder structure

```
west-baltimore-college-pathways/
├── index.html
├── start-here.html
├── grade-checklist.html      (subpage of Start Here)
├── pay-for-college.html
├── get-help-applying.html
├── programs.html
├── tutoring.html
├── deadlines.html
├── resources.html
├── contact.html
├── styles.css
├── script.js
└── README.md                 (this file)
```
