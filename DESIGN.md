# Neev — Design System Contract

Every component in this site follows this document. Read it fully before writing any UI.

## What Neev is

Neev (नींव, "foundation") turns the chaos of an Indian construction project — WhatsApp
messages, site photos, voice notes, delivery slips — into ONE trustworthy, evidence-anchored
record, and gives every person their own honest view of it: owner, site team, accountant,
homeowner. Core thesis: **"AI proposes, a human commits."** Numbers come from deterministic
math, never a chatbot guess; every figure traces to its evidence. Money is tracking-only.
Nothing reaches the homeowner that a human hasn't approved.

Brand feeling: **blueprint warmth + calm daylight.** Warm, premium, engineered-yet-human,
honest. Think Linear/Stripe craft, but on warm paper with a ledger soul — NOT generic
tech-SaaS, NOT AI hype.

## Palette (Tailwind tokens — use these classes, never raw hex, never white)

| Token | Hex | Use |
|---|---|---|
| `canvas` | #F3EFE6 | page background (warm paper) |
| `sand` | #EFEADF | alternating section bands, recessed wells |
| `card` | #FAF7F0 | card surfaces (lifted off canvas; never #FFF) |
| `ink` | #1B1916 | headings, body, dark bands (Trust, FinalCta, Footer) |
| `ink-soft` | #3D3933 | secondary dark text |
| `muted` | #7A7368 | supporting text on light bg |
| `faint` | #A39B8D | tertiary labels, disclaimers |
| `marigold` / `marigold-press` / `marigold-tint` | #F0A21F / #D6850C / #FBEED3 | primary CTAs, key highlights. Scarce = premium. |
| `sage` / `sage-press` / `sage-tint` | #3E7A66 / #2E5C4D / #E3ECE7 | trust/calm accent, eyebrows, homeowner-calm UI |
| `ok` `warn` `risk` `info` (+ `-tint`) | #2F7D52 #C77A12 #B23A2E #3A6491 | semantic status; ALWAYS pair color with a word or icon, never color alone |
| `line` / `line-strong` | #DDD5C6 / #C9BFA9 | hairline rules, borders |

Text on dark ink bands: `text-canvas`, secondary `text-[rgba(243,239,230,0.72)]`.
Contrast rules: `muted` is the minimum for body text on canvas/sand. `faint` only for
≥0.62rem mono labels or decorative. Marigold backgrounds always carry `text-ink`.

## Type

- Display (`font-display`): **Bricolage Grotesque** — all h1–h4, weights 600–800,
  tight leading (1.05–1.15), `tracking-tight`. Headline scale: hero ~clamp(2.6rem→4.2rem),
  section h2 ~2–2.6rem.
- Body/UI (`font-sans`): **Mukta** — warm, India-grounded (pairs with Devanagari).
- Data/money (`font-mono`): **IBM Plex Mono** — ALL numbers, ₹ amounts, timestamps,
  eyebrows, stamps, labels. Rupees always Indian grouping: ₹1,20,000 (use `<Money>` or `inr()`).
- Mixed-language flavor: small touches of Hindi/Hinglish in product mocks
  ("50 bori cement aaya", "नींव") are on-brand. Use sparingly and purposefully.

## Shape, texture, depth

- Radii: cards 14px (`rounded-[14px]` or `rounded-card`... use arbitrary), tiles 10px, device frames 18px.
- Borders: 1px `border-line`; emphasized 1px `border-line-strong`.
- Shadows: `shadow-[var(--shadow-card)]` resting, `shadow-[var(--shadow-lift)]` for hero
  mocks/floats. Soft and warm, never harsh.
- Register/ledger motif (the signature — use it):
  - `.folded-card` — card with folded paper corner (committed records, callouts)
  - `.stamp` — rubber-stamp chip (e.g. `COMMITTED · RAVI`, `VERIFIED`) via `<Stamp>`
  - `.proposed` — dashed border = AI-proposed, not yet committed (vs solid = committed)
  - `.rule-fade` — fading hairline divider
  - `.blueprint-grid` — faint sage grid backdrop (hero, diagrams)
- Page-wide paper grain exists globally (`.grain` on app root) — don't re-add.

## Motion (restrained, purposeful)

- Use `<Reveal delay={n}>` (from `components/Reveal`) for scroll-entrance; stagger siblings
  by 60–120ms. Never animate more than ~6 items in one stagger group.
- Hover: subtle — `translate-y`, border darkening, shadow growth. 150–250ms.
- No spinning, no pulsing glows, no parallax stronger than a few px.
- `prefers-reduced-motion` is globally handled; don't add JS animation that bypasses CSS.

## Primitives (import from `../components/ui` and `../components/icons`)

- `Container` — max-w-6xl page gutter. All sections: `<section id="..."><Container>…`
- `ButtonLink to variant size` — variants: `primary` (marigold), `secondary` (outlined card),
  `ghost`, `primary-on-ink`, `ghost-on-ink`; sizes `sm md lg`
- `SectionHead eyebrow title lede align onInk` — standard section opener
- `Eyebrow tone` — mono uppercase kicker
- `Money amount` — ₹ Indian grouping, mono
- `Stamp tone` — stamped-record chip; `IllustrativeTag` — marks fake data in mocks
- `Wordmark` / `NeevMark` — brand
- Icons (1.7px stroke set): IconMic IconCamera IconReceipt IconChat IconCheck IconCheckSeal
  IconArrowRight IconLink IconSun IconHome IconDesk IconPhone IconRupee IconClipboard
  IconHardHat IconEye IconShield IconCompass IconLayers IconWallet IconDocument IconMenu
  IconClose IconPlay IconWaveform. Use these — do NOT inline new emoji or other icon sets.

## Section rhythm (backgrounds, in page order)

Hero=canvas+blueprint-grid · Problem=sand · Shift=canvas · HowItWorks=canvas ·
InAppChat=sand (border-t only; forms one sand chapter with Surfaces, split by
Surfaces' top hairline) · Surfaces=sand · Homeowners=canvas · Trust=INK (dark band) ·
Lifecycle=canvas · SurveyCallout=canvas (big folded-card) · Personas=sand ·
PricingSection=canvas · Faq=canvas · FinalCta=INK · Footer=INK. Sand/ink bands are full-bleed (`bg-sand` on section, content in Container).
Vertical padding: `py-24 sm:py-32` for major sections; dark bands `py-24 sm:py-28`.
Sections that are anchor targets need `id` + `scroll-mt-24`.

## Product mocks

Mocks are CLEAN PLACEHOLDER UIs built from real HTML/CSS (no images): warm card surfaces,
mono data, evidence chips, stamps. Every mock includes `<IllustrativeTag>` placed subtly.
All names/numbers are invented neutral placeholders (e.g. site "Indiranagar 2BHK+",
people "Ravi S.", "Meena", vendor "Sharma Traders"). NEVER real people/firms. Photos:
use warm CSS placeholder blocks (sand/sage tints + icon), clearly slots for real shots later.

## Copy voice

Confident, warm, plain-spoken, honest. Short punchy headlines. Specific beats generic
("50 bori of cement, traced to the photo" beats "seamless material tracking").
NO em dashes (—) anywhere: use commas, colons, periods, parentheses, or the
interpunct "·" (the house separator for mono labels and mock data) instead.
NO hype words: revolutionary, world's first, autonomous, supercharge, unleash, 10x.
The AI is the metabolism, not the mouth: it proposes; a named human commits.
Use the copy provided in your task EXACTLY — do not rewrite it.

## Accessibility (WCAG 2.1 AA — non-negotiable)

- Semantic landmarks: one `h1` per page, ordered headings, `<nav>` `<section>` lists as `<ul>`.
- Interactive elements: real `<a>`/`<button>`, visible focus (global focus-visible exists),
  44px min touch targets on mobile.
- Color never the only signal (pair icon/word with status colors).
- Decorative SVGs `aria-hidden`; meaningful images get alt/aria-label.
- FAQ accordions: `<details>/<summary>` or proper aria-expanded buttons.

## Responsive

Mobile-first. Test mentally at 375px, 768px, 1280px. Multi-column grids collapse to
single column; device-mock rows become stacked or horizontal-scroll (`scrollbar-none`).
No horizontal page overflow ever — be careful with rotated/absolutely-positioned decor
(wrap in `overflow-hidden`).

## Hard do-nots

No purple/blue gradients, glowing orbs, robots/brains, neon, dark-mode-by-default.
No fabricated logos/testimonials/ratings/user counts/funding (pre-launch).
No real people's data. No overclaiming. No pure #FFFFFF backgrounds.
