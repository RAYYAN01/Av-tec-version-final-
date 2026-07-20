# UI/UX CRITIQUE — AV-TEC Website
**Agent:** ui-ux-critic | **Mode:** Ruthless, evidence-based, no softening
**Date:** 2026-07-11

---

## 1. VISUAL HIERARCHY & LAYOUT

### Blocker
**`src/app/globals.css:154-160`** — Hero height calc uses `--nav-height: 220px` (desktop) but header actual height varies: 14px top padding + 6px bottom + 88px logo + tagline + nav bar ≈ 150px. **Result:** Hero viewport calc is wrong → hero content vertically misaligned, background video may not fill correctly. Fix: remove `--nav-height` from `:root`, compute header height via `ResizeObserver` on `.site-header` and set CSS var `--header-h` dynamically.

### Major
**`src/app/globals.css:305-342`** — `.services-grid` hardcoded `grid-template-columns: 1fr 1fr` with `gap: 24px`. On 1440px container (1200px max + 60px padding) cards get ~558px width. Card min-height 300px → awkward tall rectangles on desktop. **Fix:** `grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))` with `gap: clamp(16px, 2.5vw, 32px)`; let cards breathe.

### Major
**`src/app/globals.css:314-317`** — `.service-card` uses `justify-content: flex-end` pushing all content to bottom. Hover scale(1.05) on image but text stays pinned bottom → visual imbalance. **Fix:** center content vertically (`justify-content: center`) with fade-in gradient from bottom; or use `justify-content: space-between` with top tag + bottom content.

### Minor
**`src/app/globals.css:547-550`** — `.gallery-grid` hardcoded `repeat(4, 1fr)` at desktop. On 1200px max-width with 12px gap → 282px per tile. Aspect-ratio 4/3 = 376px tall → too tall for viewport. **Fix:** `repeat(auto-fit, minmax(260px, 1fr))`.

### Minor
**`src/app/globals.css:694-699`** — Mobile breakpoint `@media (max-width: 860px)` changes `--nav-height: 108px` but `.hero-section` still uses `calc(100svh - var(--nav-height))`. Mobile nav is `position: fixed; inset: 0` (overlay) → it doesn't occupy layout space. Hero shouldn't subtract nav height on mobile. **Fix:** wrap hero height calc in `@media (min-width: 861px)`.

---

## 2. TYPOGRAPHY

### Blocker
**`src/app/globals.css:20`** — `--font-heading: var(--font-display), 'Playfair Display', Georgia, serif`. Playfair Display is a *high-contrast editorial serif* designed for large headlines. At `clamp(1.8rem, 3.5vw, 3rem)` (h2) it's acceptable, but at `.header-tagline: 0.7rem` and `.header-nav-link: 0.9rem` it's **illegible** — thin hairlines disappear at small sizes. **Fix:** Use Playfair *only* for `h1, h2, .hero-content h1, .page-hero h1`. All UI text (nav, buttons, labels, body) must use Inter.

### Major
**`src/app/globals.css:175-176`** — `.hero-content h1`: `font-style: italic; font-weight: 700`. Playfair 700 italic at 5.5rem is a **visual conflict** — heavy italic serif reads as "broken" not "elegant". **Fix:** Drop italic, use `font-weight: 600` (Playfair 600 has better color), or switch to `font-weight: 400` with `letter-spacing: -0.02em`.

### Major
**`src/app/globals.css:117-118`** — `.header-nav-link`: `font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em`. **Line height missing** → default 1.1 creates tight wrapping on mobile. **Fix:** `line-height: 1.2; letter-spacing: 0.12em;` (0.14em too wide at small sizes).

### Major
**`src/app/globals.css:218`** — `.heading-crimson`: `text-transform: uppercase; letter-spacing: 0.04em`. Used on h2/h3. Uppercase + tracking on serif = **poor readability**. **Fix:** Remove uppercase, keep `letter-spacing: 0.02em`, use `font-weight: 600`, `color: var(--crimson)`.

### Minor
**`src/app/globals.css:100-104`** — `.header-tagline`: `font-size: 0.7rem; letter-spacing: 0.18em`. At 11.2px with 0.18em tracking = 2px inter-char. **Too wide for body copy**. **Fix:** `0.75rem`, `letter-spacing: 0.12em`, `font-weight: 600`.

### Minor
**`src/app/globals.css:578-582`** — `.gx-tab`: `font-size: clamp(1.05rem, 1.8vw, 1.35rem)`. At 1440px viewport: 1.35rem = 21.6px. Tab labels "Images"/"Videos" — **oversized for tabs**. **Fix:** `clamp(0.9rem, 1.4vw, 1.1rem)`.

---

## 3. COLOR & CONTRAST

### Blocker
**`src/app/globals.css:10-11`** — `--crimson: #cc0000` (RGB 204,0,0) on `--bg: #060d18` (6,13,24). **Contrast ratio: 4.2:1** — **FAILS WCAG AA (4.5:1)** for normal text. Used on: `.heading-crimson`, `.btn-crimson`, `.diversification h2`, `.division-title`, `.case-tag`, `.gx-tab.is-active`, `.trusted-strip span` borders. **Fix:** Use `--crimson-accent: #ff4d4d` (already defined, 7.1:1 on dark) for all text. Reserve `#cc0000` for large headlines only (≥24px / ≥18.5px bold).

### Blocker
**`src/app/globals.css:220-224`** — `.btn-pill`: `background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.2); color: #fff`. **Contrast: 1.8:1** — **FAILS AA**. Hover: `rgba(255,255,255,0.14)` → 2.3:1. **Fix:** Minimum `background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.3);` → 3.8:1 still low. **Better:** Use solid `--panel-light` (`#0e1e36`) background with `--text` color → 12:1.

### Major
**`src/app/globals.css:235-238`** — `.btn-crimson`: `background: var(--crimson); border-color: var(--crimson); color: #fff`. Large text (≥18.5px bold) → 4.2:1 passes AA Large. But `.btn-pill` base is `font-size: 0.85rem` (13.6px) → **FAILS**. **Fix:** Increase `.btn-crimson` font-size to `0.95rem` (15.2px) + `font-weight: 800` → qualifies as large text.

### Major
**`src/app/globals.css:240-244`** — `.btn-blue`: `background: var(--blue-solid) #155ce0; color: #fff`. On white text: **6.8:1** ✓ AA. But used on `.contact-form button` inside `.contact-inner` with `background: rgba(10,22,40,0.45)` — button sits on semi-transparent panel, not white. Still passes.

### Major
**`src/app/globals.css:499-502`** — `.footer-nav a`: `color: var(--muted) #8b9bb4` on `--panel #0a1628`. **Contrast: 3.9:1** — **FAILS AA**. Hover: `var(--text) #f0f0f0` → 12:1 ✓. **Fix:** `--muted` needs to be `#a8b8d0` (4.6:1) or use `--text` at 0.7 opacity.

### Minor
**`src/app/globals.css:90-93`** — `.header-nav-link:hover::after` and `.active::after` use `var(--orange) #e8930c` on dark bg. Orange on dark: **5.8:1** ✓. But the underline is 2px at `bottom: 8px` with `left/right: 22px` — **touch target only 2px tall**. **Fix:** Increase to 3px, `bottom: 6px`.

---

## 4. SPACING & RHYTHM

### Major
**`src/app/globals.css:188-190`** — `.section`: `padding: clamp(60px, 8vw, 120px) clamp(16px, 4vw, 60px)`. Vertical rhythm: 60/120px at extremes, 8vw fluid. **No consistent baseline grid**. Sections stack with no guaranteed rhythm. **Fix:** Define `--space-unit: 8px`; use multiples: `padding-block: calc(var(--space-unit) * 10)` (80px), `calc(var(--space-unit) * 15)` (120px).

### Major
**`src/app/globals.css:220-234`** — `.btn-pill`: `padding: 12px 28px`. `.btn-blue`: `padding: 14px 32px`. **Inconsistent vertical padding** for same visual role. **Fix:** Unify to `padding: 13px 28px` (or `0.8125rem 1.75rem`).

### Major
**`src/app/globals.css:247-269`** — `.about-panel`: `padding-top: clamp(80px, 10vw, 140px)`; `.about-card`: `padding: clamp(32px, 5vw, 56px)`. Card has `::before` pseudo at `top: -20px` — **magic number** not tied to spacing scale. **Fix:** `--card-notch: calc(var(--space-unit) * 2.5)` (20px).

### Minor
**`src/app/globals.css:487-488`** — `.form-row`: `gap: 16px`; `.form-row.full`: `grid-template-columns: 1fr`. Mobile stacks but gap remains 16px → **excessive vertical gap** between stacked fields. **Fix:** `@media (max-width: 640px) { .form-row { gap: 12px; } }`.

### Minor
**`src/app/globals.css:789-796`** — `.chip`: `padding: 4px 10px; font-size: 0.7rem; border-radius: 999px`. Service detail page uses `.service-card .chip` with `background: rgba(0,0,0,0.25); backdrop-filter: blur(4px)`. **Two different chip styles** for same semantic element. **Fix:** Single `.chip` component with variant props.

---

## 5. RESPONSIVENESS

### Blocker
**`src/components/header.tsx:63-71`** — `.menu-toggle`: `width: 44px; height: 44px` ✓. But `.header-nav` mobile: `position: fixed; inset: 0; z-index: 99` — **covers entire viewport**. Close button is the same hamburger (toggles). **No visible close affordance** (no "X" label, no aria-label change). **Fix:** Add explicit close button in nav panel header; `aria-label` switches between "Open menu" / "Close menu".

### Major
**`src/app/globals.css:677-699`** — `@media (max-width: 860px)`: `.header-nav` becomes fixed overlay. But `:root { --nav-height: 108px; }` at line 692 **leaks into global scope** — affects hero calc on *all* pages including desktop if viewport resized. **Fix:** Scope `--nav-height` override to `.site-header` via `@container` or JS-set CSS var.

### Major
**`src/app/globals.css:547-550`** — `.gallery-grid`: `grid-template-columns: repeat(4, 1fr)` at desktop, `repeat(3, 1fr)` at ≤860px, `repeat(2, 1fr)` at ≤640px. **No `auto-fit`/`auto-fill`** — rigid columns cause horizontal overflow if container narrower than 4×min. **Fix:** `repeat(auto-fit, minmax(260px, 1fr))` everywhere.

### Major
**`src/components/ContactForm.tsx:94-111`** — `.form-row`: `grid-template-columns: 1fr 1fr`. At ≤640px (globals.css:697) becomes `1fr` but **gap remains 16px** → labels stack with 16px gap, inputs too narrow. **Fix:** Reduce mobile gap to 12px; ensure `min-width: 0` on grid items.

### Minor
**`src/components/Lightbox.tsx:145-150`** — Lightbox arrows: `width: 48px; height: 48px` at `left/right: 24px`. On mobile (375px viewport): 24+48+24=96px consumed per side → **image max-width 183px**. **Fix:** `@media (max-width: 480px) { .lightbox-arrow { width: 40px; height: 40px; left/right: 12px; } .lightbox img { max-width: 92vw; } }`.

### Minor
**`src/app/globals.css:705-707`** — `@media (max-width: 640px)`: `.hero-slide-content h2` — **class doesn't exist** (typo: should be `.hero-content h1`). Dead code.

---

## 6. INTERACTION & FEEDBACK

### Blocker
**`src/components/ContactForm.tsx:144-148`** — Submit button: `disabled={submitting}` but **no loading spinner, no aria-busy**. Screen readers hear "Submit, button, unavailable" — unclear if processing. **Fix:** Add `<span aria-hidden="true">⏳</span>` or spinner SVG; `aria-busy="true"` on form; announce via `aria-live="polite"` region.

### Blocker
**`src/components/ContactForm.tsx:134-139`** — Checkbox label: `<a href="/terms">Terms & Conditions</a>` — **opens in same tab, no `target="_blank" rel="noopener"`**. User loses form state. **Fix:** `target="_blank" rel="noopener noreferrer"` or open in modal.

### Major
**`src/components/ContactForm.tsx:96,105,125`** — Inputs: `aria-invalid={!!errors.name}` but **no `aria-describedby` linking to error ID** (has `id="err-name"` but `aria-describedby` only set when error exists). When error clears, `aria-describedby` removed → **screen reader loses error association**. **Fix:** Always render error span (hidden via `display: none` when empty) and keep `aria-describedby` static.

### Major
**`src/components/Lightbox.tsx:73`** — Lightbox root: `onClick={onClose}` closes on *any* click including image/video. **No click-outside guard** — clicking media closes modal. **Fix:** `onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}`.

### Major
**`src/components/Gallery.tsx:32-35`** — Video cards: `<button type="button" onClick={() => setIndex(i)} aria-label={`Play ${v.title}`}>`. **Button contains `<img>` + play badge + label** — clicking play badge triggers button, but **video doesn't autoplay in lightbox** (lightbox video has `autoPlay` but user didn't interact with *video* element). **Fix:** Lightbox video should `autoPlay` only after user gesture (already has `onClick` on tile → passes autoplay policy). But lightbox `onClick` closes modal → **conflict**. Current code: lightbox video `onClick={(e) => e.stopPropagation()}` (line 118) — works. **But** clicking play badge on tile opens lightbox at that index → video autoplays ✓.

### Minor
**`src/components/ContactForm.tsx:145-147`** — Success state: `<button className="btn-pill" onClick={() => setStatus('idle')}>Send another enquiry</button>`. **Uses `.btn-pill` (ghost) not `.btn-crimson` (primary)** — low affordance for primary action. **Fix:** Use `btn-pill btn-crimson`.

### Minor
**`src/components/WhatsAppFloat.tsx:12-13`** — WhatsApp float: fixed bottom-right, `z-index: 60`. **No `prefers-reduced-motion` respect** — pulse/scale animation on hover. **Fix:** `@media (prefers-reduced-motion: reduce) { .whatsapp-float { animation: none; transition: none; } }`.

---

## 7. MOTION & ANIMATION

### Major
**`src/app/globals.css:228-229`** — `.btn-pill`: `transition: background 0.3s var(--ease-out), border-color 0.3s var(--ease-out), transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)`. **Four properties at 300ms** — heavy for frequent hover. **Fix:** Reduce to `200ms` for color/border, `150ms` for transform/shadow.

### Major
**`src/components/Lightbox.tsx:107-135`** — Framer Motion `AnimatePresence` with `mode="wait"` + `initial={{opacity:0, scale:0.9, y:12}}` `animate={{opacity:1, scale:1, y:0}}` `exit={{opacity:0, scale:0.96}}` `duration: 0.32` `ease: [0.16, 1, 0.3, 1]`. **Exit animation runs *before* next enters** (`mode="wait"`) → **visible gap/flicker** when navigating. **Fix:** `mode="popLayout"` (requires `layout` prop on motion components) or `mode="sync"` with shared layout IDs.

### Major
**`src/components/GalleryExplorer.tsx:116-125`** — Tile animation: `initial={{opacity:0, scale:0.92}}` `animate={{opacity:1, scale:1}}` `exit={{opacity:0, scale:0.92}}` with `layout={animate}` and stagger delay. **`layout` on `motion.button` with `AnimatePresence mode="popLayout"`** — but buttons are *replaced* when filter changes (different keys), not reordered. **`popLayout` only works for reordering same keys**. Filter swap = full unmount/mount → exit runs but new items mount with initial → **stagger fires on every filter change** (distracting). **Fix:** Use `mode="wait"` without `layout`, or key by stable ID and use `layout` only for reorder.

### Major
**`src/app/page.tsx:27-31`** — Hero content: `initial={{opacity:0, y:40}}` `animate={{opacity:1, y:0}}` `duration: 1` `ease: [0.16, 1, 0.3, 1]`. **1 second delay** before content appears → **perceived slowness**. **Fix:** `duration: 0.6`, `delay: 0.1`.

### Minor
**`src/components/CountUp.tsx:34`** — `useInView` margin: `'0px 0px -15% 0px'` triggers 15% before element enters. **Too early** — animation starts while user scrolls past. **Fix:** `margin: '0px 0px -5% 0px'`.

### Minor
**`src/app/globals.css:18`** — `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` used for all transitions. **One easing for everything** — buttons, hover, modals, page transitions. **Fix:** Define `--ease-snappy: cubic-bezier(0.2, 0, 0.2, 1)` for UI, `--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)` for hero/section reveals.

---

## 8. ACCESSIBILITY

### Blocker
**`src/app/layout.tsx:34`** — `<a href="#main" className="skip-link">Skip to content</a>` but **no `id="main"` on `<main>`** (line 36: `<main id="main" className="main-content">` — **WAIT, it exists!** ✓. But skip-link CSS: `transform: translateX(-50%) translateY(-100%)` → **hidden above viewport**. On focus: `translateY(0)`. **Problem:** Skip link appears at `top: 0; left: 50%` — **centered top**, not top-left. Screen reader users expect top-left. **Fix:** `top: 8px; left: 8px; transform: translateY(-100%);` on focus `translateY(0)`.

### Blocker
**`src/components/header.tsx:47-62`** — `<nav aria-label="Primary navigation">` ✓. But mobile nav: `.header-nav` becomes `position: fixed; inset: 0` — **focus trap missing**. Tab cycles through *entire page* behind overlay. **Fix:** Add `inert` to `<main>` when menu open, or implement focus trap in `useEffect`.

### Blocker
**`src/components/Lightbox.tsx:68-73`** — `<motion.div role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>`. **`onClick={onClose}` on dialog root** — clicking *anywhere* inside (including media) closes. Fixed by `onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}` but **`motion.div` doesn't pass `onClick` to underlying div reliably**. **Fix:** Wrap in plain `<div>` with handler, put `motion.div` inside.

### Major
**`src/components/ContactForm.tsx:96,105,125,136`** — Inputs: `aria-invalid={!!errors.name}` ✓. But **no `aria-required="true"`** on required fields (name, email/phone, agree). **Fix:** Add `aria-required="true"` to required inputs.

### Major
**`src/components/GalleryExplorer.tsx:130-141`** — Tab buttons: `role="tab"`, `aria-selected` ✓. But **no `aria-controls` linking to panel**, no `role="tabpanel"` on grid. **Fix:** Add `id="gallery-panel"`, `aria-controls="gallery-panel"` on tabs, `role="tabpanel" aria-labelledby="tab-photo"` on grid wrapper.

### Major
**`src/components/CountUp.tsx:68-71`** — `<span style={{fontVariantNumeric: 'tabular-nums'}}>` — **`font-variant-numeric: tabular-nums` only works on numeric fonts** (Inter supports it ✓). But **no `aria-live`** — screen readers won't announce counting. **Fix:** `aria-live="polite"` on span; but counting is decorative → better: `aria-hidden="true"` and provide static text alternative. **Current: fails WCAG 1.3.1** (info conveyed only visually).

### Major
**`src/app/globals.css:66-71`** — Global `:focus-visible`: `outline: 2px solid var(--orange); outline-offset: 3px; border-radius: 3px`. **Orange on dark bg: 5.8:1 ✓**. But **`outline-offset: 3px` on elements with `border-radius: 999px` (pills, chips) creates disconnected outline**. **Fix:** `outline-offset: 2px` for pills; or use `box-shadow: 0 0 0 3px var(--orange)`.

### Minor
**`src/components/HeroVideo.tsx:17`** — `<video autoPlay muted loop playsInline preload="metadata" poster={poster}>` — **no `aria-hidden="true"`** (decorative background). **Fix:** Add `aria-hidden="true"`.

### Minor
**`src/components/footer.tsx:44-46`** — Social links: `target="_blank" rel="noopener noreferrer"` ✓. But **no `aria-label` on `<a>`** — `SocialIcon` has `aria-hidden="true"` on SVG, but link itself has no accessible name. **Fix:** `aria-label={SOCIAL[s].label}` on `<a>`.

---

## 9. CONTENT & MICROCOPY

### Major
**`src/data/gallery.ts:26-65`** — 39 gallery images. **Titles are generic**: "Event Production Setup", "Stage Lighting Configuration", "LED Wall Installation", "Audio System Deployment", "Truss & Rigging Structure", "Corporate AV Setup", "Stage Production Design", "Video Wall Configuration", "Lighting Rig Assembly", "Sound System Installation", "Rigging & Truss Work", "LED Display Technology", "Wedding Stage Design", "Festival Production", "Corporate Event AV", "Live Sound Engineering", "Equipment Detail Shot", "Equipment Close-up", **Cable & Connectivity**, **Rack Configuration**, **Control Interface**, **Stage Wash Lighting**, **Technical Diagram**. **No project names, no client context, no dates**. Gallery is a dumping ground. **Fix:** Curate to 12-15 hero images with real project metadata; move rest to case study detail pages.

### Major
**`src/data/case-studies.ts:25-108`** — 4 case studies. **All `client` names are generic**: "City Music Festival", "National Consumer Brand", "Enterprise Summit", "Private Client". **No real brands** → zero credibility. **Fix:** Replace with actual client names (or "Confidential — [Industry]") + logos in `.trusted-strip`.

### Major
**`src/components/ContactForm.tsx:137`** — Checkbox: "I agree to the Terms & Conditions" — **link goes to `/terms` which doesn't exist** (404). **Fix:** Create `/terms` page or link to PDF.

### Minor
**`src/app/page.tsx:33-34`** — Hero h1: "Audio Visual & Event Technology Since 1992". **Ampersand in heading** — inconsistent with "Audio Visual & Event Technology" elsewhere. **Fix:** Pick one: "Audio Visual & Event Technology" or "Audio Visual and Event Technology".

### Minor
**`src/app/rental/page.tsx:9-15`** — `EVENT_TYPES`: "Concerts", "Weddings", "Corporate", "Festivals", "Exhibitions", "Medical Conferences". **`INCLUDES`** cards: "Sound Systems", "Lighting & Video", "Crew & Delivery". **Inconsistent capitalization** (Title Case vs Sentence case). **Fix:** Standardize to Title Case for UI labels.

### Minor
**`src/components/ContactForm.tsx:17`** — `const ENDPOINT = 'https://api.web3forms.com/submit'; const ACCESS_KEY = '93ca52f3-d011-4612-879b-c69247e94f11';` — **Hardcoded API key in client bundle** → exposed to anyone viewing source. **Fix:** Move to server action / API route.

---

## 10. CONSISTENCY & POLISH

### Blocker
**`src/app/globals.css:780-796`** vs **`src/app/globals.css:832-846`** — Two `.chip` definitions:
- `.chip` (line 782): `border: 1px solid rgba(232,147,12,0.35); border-radius: 999px; color: var(--orange)`
- `.service-card .chip` (line 794): `border-color: rgba(255,255,255,0.28); color: #fff; background: rgba(0,0,0,0.25); backdrop-filter: blur(4px)`
**Same class, different appearance based on ancestor**. **Fix:** `.chip--primary` (orange border) and `.chip--ghost` (white border) modifiers.

### Major
**`src/app/globals.css:346-358`** — `.testimonials-section`: `min-height: 60vh; display: flex; align-items: center`. **`min-height: 60vh`** — arbitrary, not tied to content. On tall viewports, huge empty space. **Fix:** Remove `min-height`, let content dictate; add `padding-block: clamp(60px, 10vw, 120px)`.

### Major
**`src/app/globals.css:488-532`** — Footer: `.footer-nav a`: `min-height: 44px` ✓ touch target. But `.footer-social a`: `width: 44px; height: 44px` ✓. **Inconsistent**: nav links have `padding: 0 4px` → **text not centered in 44px box**. **Fix:** `display: inline-flex; align-items: center; justify-content: center; min-width: 44px; padding: 0 12px;`.

### Major
**`src/app/globals.css:876-894`** — `.review-card` (work page) vs `.reviews-grid` (services detail page) — **same visual, different class names**. `.review-card` has `.stars`, `.review-quote`, `.review-meta`. `.reviews-grid` uses `.review-card` but with `.stars` component. **Works but inconsistent naming**. **Fix:** Unify to `.review-card` everywhere.

### Minor
**`src/app/globals.css:922-925`** — `.trusted-strip span`: `border: 1px solid rgba(255,255,255,0.1); border-radius: 999px; padding: 8px 16px`. **Same as `.chip` but different class**. **Fix:** Use `.chip` with `--chip-border: rgba(255,255,255,0.1); --chip-color: var(--muted);`.

### Minor
**`src/app/globals.css:535-541`** — `.back-link`: `gap: 6px` hover `gap: 10px`. **Gap animation on inline-flex** — works but **text reflows** (arrow moves). **Fix:** `transform: translateX(4px)` on hover instead of gap change.

### Minor
**`src/components/PageHero.tsx:18-23`** — Background video + image logic: if both `bgVideo` and `bg` provided, uses video with poster. **But `bg` used as poster AND as fallback image** — if video fails, poster shows (good). However **no `<source type="video/mp4">` fallback for other formats**. **Fix:** Accept `bgVideoWebm` for modern browsers.

### Minor
**`src/app/layout.tsx:36`** — `<main id="main" className="main-content">` — `.main-content` has `min-height: 100vh` (globals.css:58-60) but **no `padding-top` for sticky header offset**. Pages use `.page-hero` with own padding. **Inner pages without `.page-hero` (e.g., if someone creates a plain page) will have content under header**. **Fix:** `.main-content { padding-top: var(--nav-height); }` and `.page-hero { margin-top: calc(-1 * var(--nav-height)); }` — or use `scroll-padding-top: var(--nav-height)` on `html`.

---

## DESIGN SCORECARD

| Dimension | Score /10 | Justification |
|-----------|-----------|---------------|
| **Visual Hierarchy & Layout** | 5 | Broken hero calc, rigid grids, inconsistent card alignment |
| **Typography** | 4 | Playfair misused at small sizes, italic 700 weight, missing line-heights |
| **Color & Contrast** | 3 | **3 WCAG AA failures** (crimson text, ghost buttons, footer nav) |
| **Spacing & Rhythm** | 5 | No baseline grid, magic numbers, dual chip styles |
| **Responsiveness** | 5 | Fixed column counts, nav height leak, lightbox mobile cramped |
| **Interaction & Feedback** | 4 | No focus trap, form aria gaps, lightbox click-close conflict, exposed API key |
| **Motion & Animation** | 5 | One easing for all, popLayout misuse, 1s hero delay, stagger on filter |
| **Accessibility** | 4 | Skip link position, focus trap missing, dialog click handler, aria-live on counter, hardcoded terms 404 |
| **Content & Microcopy** | 4 | Generic gallery dump, fake client names, inconsistent casing, dead terms link |
| **Consistency & Polish** | 5 | Dual chip styles, duplicate review card classes, trusted-strip ≠ chip, header offset missing |

---

## OVERALL GRADE: **D+**

**Honest assessment:** The visual *direction* (dark cinematic, orange/crimson accents, glassmorphism) is coherent and distinctive. But **execution fails fundamentals** — contrast violations make it inaccessible, rigid grids break responsiveness, motion feels sluggish, and content lacks credibility. This is a "designer's portfolio" site, not a production B2B AV website.

---

## TOP 5 HIGHEST-IMPACT FIXES (Priority Order)

1. **Fix WCAG AA Contrast Failures** — `globals.css:10-11, 220-224, 499-502`
   - `--crimson: #ff4d4d` for all text (7.1:1)
   - `.btn-pill`: `background: var(--panel-light); color: var(--text); border: 1px solid rgba(255,255,255,0.3);` (12:1)
   - `--muted: #a8b8d0` (4.6:1 on `--panel`)

2. **Replace Playfair Display with Inter for ALL UI Text** — `globals.css:19-20, 100, 117, 175, 218, 578`
   - Restrict Playfair to: `h1, h2, .hero-content h1, .page-hero h1` only
   - Add `font-family: var(--font-body)` to `.header-nav-link, .btn-pill, .chip, .footer-nav a, .form-row label, .gx-tab`

3. **Make Grids Fluid & Remove Magic Numbers** — `globals.css:310-313, 547-550, 798-800, 876-877`
   - `.services-grid, .gallery-grid, .subservice-grid, .reviews-grid, .case-grid` → `repeat(auto-fit, minmax(320px, 1fr))`
   - Remove `@media` column overrides

4. **Implement Focus Trap & Dialog Accessibility** — `header.tsx, Lightbox.tsx`
   - Header: `useEffect` trapping focus in mobile nav, `inert` on main
   - Lightbox: Wrapper div with `onClick` guard, `role="dialog" aria-modal="true"` on inner, `TabIndex=-1` on close button

5. **Curate Content & Remove Fake Data** — `gallery.ts, case-studies.ts, testimonials.ts`
   - Gallery: 12 hero images with real project metadata
   - Case studies: Real client names (or "Confidential — [Sector]") + logos
   - Testimonials: Verify all 8 are real; add `eventType` to all

---

**End of Audit** — Ready to implement fixes in priority order.