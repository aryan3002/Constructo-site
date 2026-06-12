# Fable prompt — add two sections: Homeowner + Flagship In-App Chat

> Hand this to Fable 5 (run it IN the existing `Constructo_saas` repo). You are EXTENDING the existing site, not rebuilding it. Match the current design language exactly — reuse the tokens, primitives, and mock patterns already in the codebase. Stay honest: this product is pre-pilot, so feature claims describe product capability, never customers — and clearly separate what's shipped from what's "rolling out / coming."

## Context (the existing site)

Vite + React + TS + Tailwind 4, single long-scroll `src/pages/Home.tsx` composing section components from `src/sections/`. Reuse, don't reinvent:
- **Primitives** (`src/components/ui.tsx`): `Container`, `SectionHead` (eyebrow + h2 + lede), `Eyebrow`, `ButtonLink`, `Money` (renders ₹ Indian-grouped in mono), `Stamp` (rotated "✓ COMMITTED · NAME" chip), `IllustrativeTag`.
- **Motion**: `Reveal` (scroll fade-up; stagger children 60–120ms).
- **Icons** (`src/components/icons.tsx`): includes `IconChat` (currently unused — use it), `IconHome`, `IconShield`, `IconMic`, `IconCamera`, `IconEye`, `IconCheckSeal`, `IconWaveform`, `IconReceipt`.
- **Tokens** (`src/index.css`): `bg-canvas` #F3EFE6, `bg-sand` #EFEADF, `bg-card` #FAF7F0, `text-ink` #1B1916, `text-muted` #7A7368, `bg-marigold` #F0A21F (scarce — CTAs/highlights only), `text-sage`/`bg-sage-tint` #3E7A66 (calm/homeowner), status `ok/warn/risk/info` (+ `-tint`), `border-line`. Fonts: `font-display` (Bricolage), `font-sans` (Mukta), `font-mono` (IBM Plex Mono — all numbers/timestamps/eyebrows/stamps).
- **Mock patterns to reuse**: the phone frame + mic + waveform + evidence chips from `SiteMock` (in `Surfaces.tsx`); the sage-tint `GlassMock`; the folded-card + `.proposed` (dashed = AI draft) → solid+`Stamp` (committed = truth) pattern from `Hero.tsx`/`Shift.tsx`; the dark-ink evidence-trace card from `Trust.tsx`.
- Section shell pattern: `<section id="..." className="scroll-mt-24 bg-canvas py-24 sm:py-32"><Container>…</Container></section>`, alternate `bg-canvas`/`bg-sand`, wrap content in `<Reveal>`.

---

# SECTION 1 — Flagship In-App Chat  (file: `src/sections/InAppChat.tsx`, id `in-app-chat`)

**Placement:** insert in `Home.tsx` **right after `HowItWorks`, before `Surfaces`.** It's the bridge — HowItWorks describes the capture→commit flow abstractly; this shows it happening live in the thread; Surfaces then shows the three faces of the record it creates. Add a nav link "Chat" → `/#in-app-chat` (or fold under Product). Background: `bg-sand` (so it stands apart from the canvas sections around it). Mark it the flagship.

**Eyebrow:** `THE FLAGSHIP · IN-APP CHAT`
**Headline (h2):** **"Make the thread the product."**
**Lede:** "Neev doesn't fight WhatsApp — it absorbs the work that dies in a WhatsApp scroll. The crew already lives in a thread, so that's where the record is born: every voice note, photo, and reply turns itself into proof. AI drafts it; a named person commits it."

**Body concept (2 short paragraphs):** WhatsApp-grade *feel* (one fast thread, voice, photos, replies, offline-tolerant) with an intelligence layer underneath — an AI-native system of record wearing a chat costume. A Hindi voice note becomes a structured card, not a 6-second blob nobody can search. A paper challan becomes a self-reconciling delivery, not a JPEG. A casual "haan theek hai" becomes a stamped, reversible approval the whole crew can see — not a screenshot someone disputes at month-end.

**Feature grid (4–6 cards, icon + title + one line). Lead with shipped:**
- **Voice-to-card** `IconMic` — Hold-to-talk in Hindi; it releases as a *filled card*, not a blob. **[shipped]**
- **Camera-as-sensor** `IconCamera` — Snap a challan; OCR fills a delivery card and matches it to the open PO before your phone's back in your pocket. **[shipped]**
- **Proof-locked approvals** `IconCheckSeal` — An approval card *refuses to commit without evidence*; it stamps who approved it, when, and what it's bound to — reversible for a window. **[shipped]**
- **@ask the project** `IconChat` — Ask in-thread, get a cited answer. The AI never produces the number — deterministic math does; it abstains rather than guess. **[shipped]**
- **Catch me up** `IconLayers`/`IconEye` — A 30-message argument collapses into one resolved line: "100 bori (not 110), GRN booked, ₹3,800 credit." **[shipped]**
- **The Sentinel** `IconShield` — Notices what *didn't* happen — no attendance logged by 11am, a delivery that never arrived — one calm nudge a day. **[shipped]**

**The hero mock (build this — it's the proof):** a phone frame (reuse `SiteMock`'s frame) showing a short thread:
1. a voice-note bubble — `🎙 0:31 · "aaj 12 mazdoor, 2 mason"` with a small waveform;
2. a marigold **smart-suggest chip** appearing — `Log attendance? 12 workers · 2 mason →`;
3. a **committed card** inline below — an Attendance/Delivery card with evidence chips (`slip`, `photo`), a green `✓ matches open PO`, and a `Stamp` "COMMITTED · MEENA · 6:52am". Use the `.proposed` dashed → solid+stamp transition to show draft→truth. Add `IllustrativeTag`.

**Optional second visual (nice-to-have): the membrane split** — same committed fact, two faces side by side: a dense crew bubble (raw figures, vendor name) vs a calm sage-tint homeowner card (digit-safe, no chaos), with a hairline note "same fact · figures verified identical."

**Honesty guardrails (must follow):**
- Framing is **"works alongside WhatsApp / absorbs the workflows,"** NEVER "we replaced WhatsApp."
- The deep features above are real **in the contractor crew thread today** — mock them confidently.
- The "rich chat for *every* participant (homeowner, groups)" is **rolling out** — if you imply universality, say "rolling out to every conversation," not "done."
- Say **"live thread"**, not "real-time / WebSocket."
- Show voice→card, but don't imply unattended money approvals by voice.

---

# SECTION 2 — For Homeowners  (file: `src/sections/Homeowners.tsx`, id `for-homeowners`)

**Placement:** insert in `Home.tsx` **right after `Surfaces`, before `Trust`** — it expands the "Glass" surface into the emotional payoff of the whole product tour. Background: `bg-canvas`. **Move the nav anchor** `/#for-homeowners` to point at THIS new section (today it points at a sub-item inside `Surfaces` — fix that). Give it real room — this is currently the weakest part of the site and it's half the product.

**Eyebrow:** `FOR HOMEOWNERS · THE CALM SIDE`
**Headline (h2):** **"Relax. Nothing needs you today."**
**Lede:** "Building a home is the most anxious purchase of your life. Neev turns it into one calm, honest sentence a day — and it's structurally incapable of lying to you, because every word on your screen is something a real person did, or approved the saying of."

**The anxiety→answer block (4 small cards — the 4 a.m. spikes, each with its fix):**
- **Silence** → *"No photo for 3 days — is something wrong?"* → Neev explains the quiet: "Your slab is curing. Concrete needs time, not work. No photos this week is expected."
- **Jargon** → *"Deshuttering after 14 days curing…?"* → Plain words, every time.
- **Money** → *"A charge I didn't expect — who agreed to this?"* → Every extra cost arrives as a story before any Approve button: what, why, +₹, who proposed it, running total.
- **Decision** → *"Tile colour, at 9pm, with no context?"* → One decision at a time, context-rich, "reversible until [date]."

**The trust line (give it weight, maybe a sage band or pull-quote):** "You never see the raw 50–100 daily site photos, the vendor names, or the money you shouldn't. You see only real, human-approved updates. The AI is a translator behind glass, never an oracle — a hallucinated 'your slab was poured today' physically cannot reach you."

**Feature list (lead with shipped; clearly mark the rest "coming"):**
- **Honest progress, never a fake %** — a time-bar from start to handover, so normal curing never reads as "stalled." **[shipped]**
- **Quiet-period detection** — "nothing needs you," with the reason why. **[shipped]**
- **"Reviewed by [name] ✓"** — provenance is a real person, not an AI sparkle. **[shipped]**
- **Change-order story cards** — watch costs accumulate transparently; never discover them. **[shipped]**
- **The Sunday letter** — your week, in 3 calm sentences, human-reviewed. **[shipped]**
- **Household members** — family can always comment; only owners can approve a charge. **[shipped]**
- *Coming:* room-by-room view · approve materials & drawings in-app · "ask your home" grounded assistant. **[mark clearly as coming — do NOT show as shipped]**

**The mocks (reuse/extend `GlassMock`, sage-tint, calm — no emoji, no progress ring):**
1. **The empty home screen you trust** *(the brand in one screen)* — "Riverside House" (the home's name, not "Project #4471") · a time-bar · **"On track. Nothing needs you today."** said as good news.
2. **The quiet-period card** — "Quiet on site — and that's normal. Ground-floor slab poured Sunday, curing ~14 days. Next: column shuttering ~12 Jun."
3. **The change-order story card** — "Extra waterproofing — bathroom floors. WHY: screed uneven; extra coats stop leaks below. +₹38,000 · +2 days · proposed by your engineer · 3 photos · not yet charged · changes so far +₹1.2L," with an **Approve** button (note: owners only) *below* the story.

**Closing differentiator line:** "Versus a contractor's WhatsApp updates: WhatsApp is a chat, not a record — unsearchable, untranslated, no audit trail, 'who agreed to this?' unanswerable. Neev is a structured, attributed, searchable memory of the biggest purchase of your life — where every approval names who authorised it and every change carries its reason."

**Honesty guardrails:** room-by-room view, in-app material *approval*, and the ask-assistant are **coming, not shipped** — label them. Hindi is real but English-first is the current default (don't headline it). No "trusted by" / customer claims (pre-pilot).

---

## Wiring checklist (do all)
1. Create `src/sections/InAppChat.tsx` and `src/sections/Homeowners.tsx` using the section shell + `Reveal` + existing primitives.
2. In `src/pages/Home.tsx`: import both; insert `InAppChat` after `HowItWorks` (before `Surfaces`); insert `Homeowners` after `Surfaces` (before `Trust`).
3. In `src/sections/Nav.tsx`: repoint `/#for-homeowners` to the new section; add a "Chat" link → `/#in-app-chat`.
4. Reuse tokens/fonts/mock patterns verbatim — the two new sections must be indistinguishable in craft from Hero/Surfaces/Trust.
5. Keep `IllustrativeTag` on every product mock. Run `npm run build` clean.
