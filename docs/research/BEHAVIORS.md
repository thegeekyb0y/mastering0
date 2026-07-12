# Nick Haasmann Behaviors

- Target: `https://www.nickhaasmann.com/`
- Framework observed: Framer-generated static landing page.
- Global background: `rgb(10, 8, 8)` with vertical white line overlays and red radial glow gradients.
- Typography: Inter, Inter placeholder, sans-serif. Body text mostly `14px-18px`; large headings `64px-80px` desktop and reduced sharply on mobile.
- Navigation: fixed top-center pill at desktop with logo, section links, red outline/solid CTAs. Mobile uses compressed navigation treatment in original; clone keeps a responsive wrapped pill.
- Scroll behavior: no Lenis or custom scroll class found. Sections reveal through normal scroll with Framer transforms/opacity on some decorative elements; clone uses CSS transitions and hover states without custom scroll library.
- Click behavior: CTA links navigate to booking/anchor equivalents. FAQ rows appear as accordion-like closed rows in the original; clone implements expandable details for the same content.
- Hover behavior: buttons brighten/translate subtly; cards lift with stronger borders/shadows.
- Responsive behavior: desktop uses wide 2-3 column card grids and image collages. Mobile stacks every major section into one column, condenses nav links, and scales headings/images.

## Interaction Models

- Header: fixed/static overlay with hover-driven links and CTA.
- Hero: static layout with CTA hover state and layered review/media cards.
- Celebrity proof: static media cards.
- Problem: static three-column cards.
- Testimonials: static media card grid with play badges.
- Benefits: static grid of dashboard/chat/metric cards.
- Transformations: static image gallery using real assets.
- Quality-of-life cards: static metric cards.
- NH System: static pillar timeline/cards.
- Coach profile: static profile card plus horizontal image strip.
- Comparison: static comparison table.
- FAQ: click-driven accordion in clone, matching original closed-row visual treatment.
- Final CTA: static hero-style CTA with image/glow.
