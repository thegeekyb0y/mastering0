# NickHaasmann Page Specification

## Overview
- **Target files:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `src/types/nickhaasmann.ts`
- **Screenshots:** `docs/design-references/nickhaasmann-desktop-full.png`, `docs/design-references/nickhaasmann-mobile-full.png`
- **Interaction model:** mostly static, hover-driven CTAs/cards, click-driven FAQ accordion.

## Computed Styles
- Body background: `rgb(10, 8, 8)`.
- Primary text: `rgb(255, 255, 255)`.
- Muted text: `rgb(103, 101, 101)`, `rgb(191, 191, 191)`.
- Card background: `rgb(21, 20, 20)`, `rgb(18, 16, 16)`, gradients from `rgb(21, 20, 20)` to `rgb(13, 12, 12)`.
- Primary accent: `rgb(255, 68, 51)`.
- Secondary accent: `rgb(255, 211, 51)`.
- Positive accent: `rgb(85, 225, 43)`.
- Font family: `Inter, sans-serif`.
- Header: fixed top, centered, height about `52px`, rounded/pill card, dark translucent background.
- Hero desktop: top-aligned, `min-height: 846px`, centered content, headline near `64px-80px`, max width about `900px`.
- Cards: rounded `24px-32px`, dark border `rgba(255,255,255,.1)`, glow/gradient overlays.

## States & Behaviors
- Buttons/cards hover: translate up by `-2px`, red border/glow increases, transition `200ms ease`.
- FAQ rows: click toggles answer visibility; closed height matches compact original rows.
- Responsive: at mobile width, all grids collapse to one column and headings use `40px-48px`.

### NH Score / Sleep Gauge Reveal
- Original capture files: `docs/design-references/nh-score-original-reveal-000ms.png` through `nh-score-original-reveal-800ms.png` and `docs/research/nh-score-original-frame-samples.json`.
- Original DOM: no live `<svg>`, `<circle>`, or `<path>` nodes inside the card. The arc is a Framer `div[data-framer-name="Group 39899"]` with `background-image: url("data:image/svg+xml,...")` containing path fills. There is therefore no runtime `stroke-dasharray` or `stroke-dashoffset` to read from the original DOM.
- Rest ring wrapper: `div[data-framer-name="Ring"]`, `transform: rotate(-30deg)`, `opacity: 1`, `will-change: transform`, `filter: none`, `box-shadow: none`.
- Inline SVG arc background includes a muted full circle with `fill="rgb(255,255,255)" opacity="0.15"`, an accent arc path with red gradient in the live German capture, and an end dot path. Provided visual references show the desired final green arc/dot.
- Crown icon: background SVG on `div[data-framer-name="Frame"]`, `41px x 41px`, fill `rgb(191,191,191)` at the captured initial state. Provided final reference shows red crown.
- Numbers: four separate `div[data-framer-name="65"]` nodes exist simultaneously with texts `65`, `78`, `82`, `95`; each is about `80px x 58px`. This is a rotating/translated number stack, not one mutating text node.
- Frame samples: after scroll-out then scroll-in, Framer held the initial state and then animated the ring/number transforms. Samples showed ring at `matrix(0.866025, -0.5, 0.5, 0.866025...)` (`rotate(-30deg)`) initially, overshooting to approximately `rotate(18.8deg)` around the captured active phase, then settling back to `rotate(-30deg)` within roughly `650ms` after the reveal begins.
- Trigger: scroll into view, Framer/IntersectionObserver-like viewport trigger. Animation replays when the component is scrolled out and back in.
- Clone implementation: use `motion/react` with `useInView({ amount: 0.45 })`, replaying every entry; animate a real SVG gauge arc via `strokeDashoffset`, animate the marker along the arc, and sequence the number stack `65 -> 78 -> 82 -> 95` before resting on `95`.

## Assets
- Local image manifest: `public/images/nickhaasmann/manifest.json`.
- Key assets used in clone: `asset-02`, `asset-04`, `asset-20`, `asset-21` through `asset-45` for hero/testimonial/gallery/profile sections.

## Text Content
- Main copy and labels are extracted verbatim from the live site where available: German headlines, CTA labels, testimonial names/roles, FAQ questions, comparison rows, and NH System pillars.
