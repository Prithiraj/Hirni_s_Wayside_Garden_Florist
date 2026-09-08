# Hirni’s Wayside Garden Florist — Design & Implementation Plan

_Last updated: 2026-09-09_

This document is the implementation contract for the GitHub Pages redesign. It records the evidence baseline, visual reasoning, conversion priorities, technical approach and launch constraints so future revisions stay grounded in the actual business.

## 1. Evidence baseline

Primary business source: [hirnisflorist.net](https://hirnisflorist.net/), cross-checked against the Google Maps listing supplied for Hirni’s Wayside Garden Florist.

Facts used in the site:

- Business: **Hirni’s Wayside Garden Florist**.
- Street address: **9950 SW 57th Ave, FL 33156**. The current business site uses **Miami** while Google can label the locality **Pinecrest**; street and ZIP are consistent. The demo uses Miami to match the owner-controlled site, but production NAP should be confirmed.
- Phone: **(305) 661-6266**.
- Email: **hirnisinfo@gmail.com**.
- Hours: **Monday–Saturday, 9 AM–5 PM; Sunday closed**.
- Family-owned for **over 60 years**.
- Current storefront states same-day delivery for qualifying orders placed **before 10 AM**; availability can vary.
- Documented strengths include fresh floral arrangements, Phalaenopsis orchids, tropical/exotic flowers, indoor and patio plants, blooming plants, custom arrangements, gift/fruit baskets, weddings/events and local delivery.
- The redesign does **not** hard-code prices. Product and shopping CTAs go to the official live catalog so price, availability, substitution and checkout policy remain authoritative there.
- Review excerpts are kept separate from Google rating totals; different review channels are never merged into a fabricated aggregate.

## 2. Audience

Primary audience: local and remote gift buyers who need a trustworthy florist for birthdays, sympathy, anniversaries, romance, congratulations and spontaneous gifts.

Secondary audiences:

- orchid and plant buyers who value a real garden/florist shop rather than a commodity flower marketplace;
- customers who want a custom arrangement and prefer to specify a color palette, flowers or feeling;
- wedding and event customers who need floristry expertise and consultation;
- local visitors looking for a physical shop in the Miami/Pinecrest area.

## 3. Conversion goals

Priority order:

1. **Shop Flowers** → current Hirni’s commerce catalog.
2. **Create a Custom Arrangement** → current custom-order flow.
3. **Call the Shop** → `(305) 661-6266`.
4. **Get Directions** → the supplied Google Maps listing.
5. **Wedding & Event Flowers** → current wedding collection/contact path.

The GitHub Pages site is intentionally a high-conversion brand layer in front of the existing commerce system, not a replacement checkout.

## 4. Creative direction

### Miami Garden Legacy

The design should feel **lush, warm, established, editorial and premium without becoming formal or sterile**.

Visual cues:

- old-Miami garden-shop warmth;
- deep botanical green and warm ivory;
- orchids and tropical flowers as memorable brand signals;
- real Hirni’s flower photography as the primary visual anchor;
- elegant editorial serif typography paired with a restrained sans serif;
- generous whitespace to keep abundant floral imagery from feeling chaotic;
- subtle organic motion instead of novelty animation.

Avoid:

- generic blush-pink wedding templates;
- black-and-gold “luxury florist” clichés;
- fake scarcity or countdown timers;
- autoplay carousels;
- game-like interactions;
- generated imagery pretending to be the real shop, team or purchasable product.

## 5. Color system

| Token | Value | Purpose |
| --- | --- | --- |
| Garden Ink | `#173127` | primary text and footer accents |
| Wayside Green | `#24513d` | primary CTA and botanical identity |
| Deep Leaf | `#0f241c` | dark editorial sections |
| Garden Ivory | `#f7f2e8` | page background |
| Paper | `#fffdf8` | cards and image frames |
| Orchid | `#a63b78` | selective floral accent |
| Terracotta | `#9b5142` | heritage accent |
| Mist | `#dce9df` | story/background panels |
| Pollen | `#d7a84b` | decorative details only |

Flower photography provides the strongest saturated colors.

## 6. Typography

- Display/editorial: **Cormorant Garamond**, with Georgia fallback.
- Body/UI: **Inter**, with system fallbacks.
- Script fonts are intentionally avoided for navigation, pricing, hours and other important information.
- Large serif headlines carry the sense of heritage; UI copy remains practical and legible.

## 7. Image strategy

### Real photography first

The implementation uses current product photography served from Hirni’s official storefront/BloomNation CDN. Real photos are used for the hero, product cards, orchid feature and gallery.

Recommended final production shoot:

- exterior and signage;
- real shop/garden atmosphere;
- designers at work;
- hands building arrangements;
- orchids and tropical plants;
- finished work on the design table;
- wrapping/handoff moments;
- family archive images owned by the family.

### Generated/procedural visuals

CSS flower forms and the Three.js petal field are decorative only. They never represent a product for sale and never replace the real business photography.

### Rights note

Before a commercial-domain launch, confirm the right to reuse current storefront/CDN imagery outside the existing platform. Third-party Google reviewer images, competitor imagery, wedding editorial images and random social photos are excluded unless separately licensed.

## 8. Information architecture

Single-page homepage structure:

1. Utility strip
2. Sticky navigation
3. Hero
4. Trust/value strip
5. Shop by feeling
6. Signature products linked to live catalog
7. Orchids & plants feature
8. Family story / longevity
9. Custom arrangement process
10. Weddings & events
11. Social proof
12. Gallery
13. Location / contact / hours
14. Final CTA
15. Footer / social links

Top navigation keeps the most distinctive brand territory — **Orchids & Plants** and **Our Story** — visible instead of hiding everything under a generic shop menu.

## 9. Section-by-section layout

### Hero

- Headline: **“Flowers with roots in Miami.”**
- Primary CTA: **Shop Flowers**.
- Secondary CTA: **Create something custom**.
- Real Phalaenopsis orchid photography framed editorially.
- Supporting proof: 60+ years, current 10 AM same-day cutoff statement, six open days.
- Three.js petals sit behind the content and photo; they are not the focal point.

### Trust strip

Four concise proof points: local family ownership, orchid expertise, custom/seasonal design, Miami-Dade delivery.

### Shop by feeling

Emotion-first cards for Birthday, Sympathy, Love and Just Because. Procedural floral art adds color without pretending to be a product.

### Signature products

Three representative designs use real business photography and link to the live storefront. No static prices.

### Orchids & plants

Large real orchid image, stronger editorial copy and CTA to plant inventory / phone consultation.

### Story

A large “60+ years” typographic moment and concise family-business copy. No invented founding year.

### Custom

Three-step explanation: share the feeling → designers work with seasonal material → order for pickup/delivery. Availability language stays cautious and evidence-backed.

### Weddings & events

High-value service section with decorative generated flower forms and a link to the live wedding collection. No fake wedding photography.

### Reviews

Short excerpts currently associated with the official storefront. Review channels are not combined.

### Gallery

Real product photography mixed with editorial captions and a physical-address statement.

### Visit

Address, hours, phone, email, direct directions link and same-day-delivery wording.

### Final CTA

Strong two-action close: **Shop Flowers** and **Create something custom**.

## 10. Three.js / animation plan

Three.js is an optional enhancement, not core UI.

- Lightweight ambient petals only in the hero.
- Abstract/translucent shapes with slow motion.
- Subtle pointer influence.
- Canvas is behind interactive content and marked `aria-hidden`.
- Three.js is dynamically imported only on larger screens when reduced-motion is not requested.
- If loading/WebGL fails, the site remains fully usable.
- `prefers-reduced-motion: reduce` removes the canvas and nonessential reveal movement.

Other motion uses CSS transitions and IntersectionObserver reveals only.

## 11. Responsive behavior

Mobile-first behavior:

- hero stacks copy before image;
- navigation becomes an accessible disclosure menu;
- CTA sizes remain touch-friendly;
- occasion/product grids reduce from multi-column to single column;
- phone and email links are directly tappable;
- gallery reorganizes without requiring swipe-only carousels;
- Three.js is disabled on small screens to protect clarity, battery and performance.

## 12. Accessibility

Target: **WCAG 2.2 AA**.

Implemented requirements:

- semantic landmarks and one primary H1;
- skip link;
- keyboard-operable navigation;
- `aria-expanded` state on the mobile menu;
- visible `:focus-visible` outline;
- meaningful alt text for real flower imagery;
- decorative SVG/CSS/Three.js visuals excluded from the accessibility tree;
- no critical content inside canvas;
- reduced-motion handling;
- practical touch-target sizing;
- high-contrast text and controls.

## 13. Performance

- Static HTML/CSS/vanilla JavaScript; no frontend framework.
- Three.js is dynamically imported only when useful.
- Hero photo is loaded immediately; below-fold photos are lazy-loaded.
- Image containers define stable aspect ratios to reduce layout shift.
- Real catalog photography is reused via the existing CDN in this demo.
- Core contact, navigation and CTA content is still useful if JavaScript fails.

Targets:

- LCP ≤ 2.5 s on a reasonable mobile connection;
- CLS ≤ 0.1;
- INP ≤ 200 ms.

## 14. SEO / local discovery

Homepage title:

> Hirni’s Wayside Garden Florist | Miami Florist, Orchids & Flower Delivery

Meta description:

> Family-owned for over 60 years, Hirni’s Wayside Garden Florist creates distinctive flowers, orchids and plants with Miami-area delivery and custom arrangements.

Included:

- canonical GitHub Pages demo URL;
- Open Graph title/description/image;
- `Florist` Schema.org JSON-LD with verified contact, address and hours;
- semantic heading hierarchy;
- `robots.txt`;
- `sitemap.xml`.

Before production-domain migration, confirm canonical locality wording (Miami vs Pinecrest) and make NAP consistent across site, structured data and Google Business Profile.

## 15. Rights / licensing notes

- **Preferred production assets:** owner-supplied original photography, logo and family archive material.
- **Current demo:** official storefront/CDN product images; verify cross-platform reuse rights before commercial launch.
- **Do not use without permission:** Google reviewer photography, competitor images, editorial/news images, wedding-photographer work or reposted social imagery.
- CSS/Three.js florals are original decorative UI elements and do not depict purchasable products.

## 16. Implementation sequence

1. Freeze evidence and verified URLs.
2. Document this plan.
3. Build semantic static shell and metadata.
4. Implement mobile-first tokens/layout.
5. Add verified copy and live-commerce links.
6. Add real official-storefront photography.
7. Add decorative floral art and optional Three.js enhancement.
8. Add accessibility states and reduced-motion behavior.
9. Add Schema.org, OG, robots and sitemap.
10. Add GitHub Pages deployment workflow.
11. Deploy from `main`, inspect Actions logs, fix any Pages configuration issues and verify the live URL.

## 17. Acceptance criteria

- [x] Design feels specific to Hirni’s, not a generic florist theme.
- [x] Real Hirni’s flower photography is central to the experience.
- [x] Orchids/tropicals and 60+ year family story are prominent.
- [x] Shop Flowers is the clearest action.
- [x] Custom Arrangement, Call and Directions are obvious.
- [x] No invented prices, services, hours or policies.
- [x] Review channels are not merged.
- [x] Three.js complements rather than replaces photography.
- [x] Site remains useful if JS/Three.js fails.
- [x] Reduced-motion behavior is implemented.
- [x] Keyboard navigation and visible focus states are implemented.
- [x] Semantic HTML and JSON-LD are included.
- [x] Mobile-first responsive behavior is included.
- [x] GitHub Pages deployment workflow is configured.
- [ ] Owner confirms reuse rights for current storefront/CDN imagery before commercial-domain launch.
- [ ] Owner supplies original storefront/team/process photography for the strongest production version.
- [ ] Preferred Miami/Pinecrest locality wording is confirmed before production-domain SEO migration.
