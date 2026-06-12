#!/usr/bin/env python3
"""One-off copy-editing sweep: replace em dashes with punctuation that fits each line.
Every replacement is an exact-match pair so nothing is rewritten blindly."""

import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

PAIRS: dict[str, list[tuple[str, str]]] = {
    "src/index.css": [
        ("lifted off canvas — never pure white", "lifted off canvas; never pure white"),
        ("folded corner — the register motif", "folded corner: the register motif"),
    ],
    "index.html": [
        ("<title>Neev — Every site decision, from evidence</title>",
         "<title>Neev · Every site decision, from evidence</title>"),
    ],
    "src/sections/Nav.tsx": [
        ('aria-label="Neev — home"', 'aria-label="Neev home"'),
    ],
    "src/sections/Hero.tsx": [
        ("Every site decision, from evidence — before", "Every site decision, from evidence, before"),
        ("record of your project —\n                then gives", "record of your project,\n                then gives"),
        ("{/* row 1 — needs a decision */}", "{/* row 1: needs a decision */}"),
        ("{/* row 2 — info */}", "{/* row 2: info */}"),
        ("{/* row 3 — verified */}", "{/* row 3: verified */}"),
        ("Approve steel top-up — 12mm TMT runs short", "Approve steel top-up: 12mm TMT runs short"),
        ("Electrician returns Thursday — conduit work resumes", "Electrician returns Thursday · conduit work resumes"),
        ("Cement delivery verified — 50 bori, slip matches PO", "Cement delivery verified · 50 bori, slip matches PO"),
        ("{/* voice note — above the card, left */}", "{/* voice note: above the card, left */}"),
        ("{/* site photo — fully in the column gap, clear of the brief's text */}",
         "{/* site photo: fully in the column gap, clear of the brief's text */}"),
        ("{/* delivery slip — below the card, right */}", "{/* delivery slip: below the card, right */}"),
    ],
    "src/sections/Surfaces.tsx": [
        ('{row.item} <span className="text-muted">— {row.vendor}</span>',
         '{row.item} <span className="text-muted">· {row.vendor}</span>'),
        ('Kitchen <span className="text-muted">— tiling underway</span>',
         'Kitchen <span className="text-muted">· tiling underway</span>'),
        ('Bedroom 2 <span className="text-muted">— wiring done, verified</span>',
         'Bedroom 2 <span className="text-muted">· wiring done, verified</span>'),
        ("three faces — each shaped for the person", "three faces, each shaped for the person"),
        ("every active site at a glance — with every figure", "every active site at a glance, with every figure"),
        ("big targets for dusty thumbs — and the 7:15am brief", "big targets for dusty thumbs, and the 7:15am brief"),
    ],
    "src/sections/Shift.tsx": [
        ("It listens to how the project already talks — WhatsApp, voice notes, photos — and drafts a structured record of what happened. Then a named person confirms it.",
         "It listens to how the project already talks: WhatsApp, voice notes, photos. It drafts a structured record of what happened, and then a named person confirms it."),
        ("{/* AI draft — dashed, unsure, asking */}", "{/* AI draft: dashed, unsure, asking */}"),
        ("(amount unconfirmed — awaiting review)", "(amount unconfirmed, awaiting review)"),
        ("{/* Committed record — solid, folded, stamped */}", "{/* Committed record: solid, folded, stamped */}"),
        ("50 bori PPC cement — Sharma Traders", "50 bori PPC cement · Sharma Traders"),
    ],
    "src/sections/HowItWorks.tsx": [
        ("solid after — the line itself tells the story.", "solid after; the line itself tells the story."),
        ("delivery slips, WhatsApp — the way your team already works",
         "delivery slips, WhatsApp: the way your team already works"),
        ("a draft entry — quantity, rate, vendor, stage", "a draft entry: quantity, rate, vendor, stage"),
        ("rail segment — dashed before step 02", "rail segment: dashed before step 02"),
    ],
    "src/sections/Personas.tsx": [
        ("The record writes itself — no evening data entry.", "The record writes itself, no evening data entry."),
        ("Relax — nothing needs you today.", "Relax. Nothing needs you today."),
    ],
    "src/sections/Lifecycle.tsx": [
        ("survey PDF the same day — free, even if you never pay us.",
         "survey PDF the same day. Free, even if you never pay us."),
        ("verified — not vibes-based", "verified, not vibes-based"),
        ("Marigold milestone dot — sits on the spine", "Marigold milestone dot: sits on the spine"),
        ("spine (lg) — dots land on it", "spine (lg): dots land on it"),
        ("Mono phase marker — above the dot on lg", "Mono phase marker: above the dot on lg"),
        ("the spine through all of it — the same record", "the spine through all of it: the same record"),
    ],
    "src/sections/Footer.tsx": [
        ('aria-label="Neev — home"', 'aria-label="Neev home"'),
        ("construction runs on — AI does the", "construction runs on: AI does the"),
        ("Pre-launch — this site describes", "Pre-launch · this site describes"),
    ],
    "src/sections/Trust.tsx": [
        ("the voice note — and the name of the person", "the voice note, and the name of the person"),
        ("warm marigold breath, top-left — barely there", "warm marigold breath, top-left, barely there"),
    ],
    "src/sections/FinalCta.tsx": [
        ("from components/ui — plain <a> needed here", "from components/ui; plain <a> needed here"),
        ("{/* foundation mark — the Neev layers, settling onto marigold */}",
         "{/* foundation mark: the Neev layers, settling onto marigold */}"),
    ],
    "src/sections/Faq.tsx": [
        ("No — and that's deliberate.", "No, and that's deliberate."),
        ("payments against evidence — slips, photos, entries.", "payments against evidence: slips, photos, entries."),
        ("The AI proposes — draft entries, summaries, flags.", "The AI proposes: draft entries, summaries, flags."),
        ("the mix in between — '50 bori aa gaya' is a perfectly good input.",
         "the mix in between. '50 bori aa gaya' is a perfectly good input."),
        ("Drafts stay visibly drafts — dashed, unconfirmed — until a person commits them.",
         "Drafts stay visibly drafts (dashed, unconfirmed) until a person commits them."),
        ("Access is role-based — a vendor never sees your margins — and you can export",
         "Access is role-based (a vendor never sees your margins) and you can export"),
    ],
    "src/sections/Problem.tsx": [
        ("hundreds of messages a day — the owner's group", "hundreds of messages a day: the owner's group"),
        ("The chaos collage — three overlapping", "The chaos collage: three overlapping"),
        ('name="Owner — Contractor"', 'name="Owner & Contractor"'),
    ],
    "src/sections/PricingSection.tsx": [
        ("under construction — not for every person", "under construction, not for every person"),
        ("are the product — not a premium add-on.", "are the product, not a premium add-on."),
        ("already fixed — and they won't change.", "already fixed, and they won't change."),
        ("{/* Principles — ledger rows */}", "{/* Principles: ledger rows */}"),
    ],
    "src/pages/Pricing.tsx": [
        ("under construction — not a per-user license", "under construction, not a per-user license"),
        ("are the product — never a paid add-on.", "are the product, never a paid add-on."),
        ("archived free — the record stays readable", "archived free; the record stays readable"),
        ("not on a rate card — every builder's", "not on a rate card; every builder's"),
    ],
    "src/pages/SiteSurvey.tsx": [
        ("You check and confirm it — same rule as everywhere in Neev: you commit.",
         "You check and confirm it. Same rule as everywhere in Neev: you commit."),
        ("Plot 14 — Whitefield (illustrative)", "Plot 14 · Whitefield (illustrative)"),
        ("Free tool — no login, no card", "Free tool · no login, no card"),
        ("describe it to a colleague — and get a clean", "describe it to a colleague, and get a clean"),
        ("Preview — opens with early access", "Preview · opens with early access"),
        ('placeholder="Whitefield, Bengaluru — illustrative"', 'placeholder="Whitefield, Bengaluru (illustrative)"'),
        ("with early access — every field also works by voice.", "with early access; every field also works by voice."),
        ("treats evidence — if it earns your next step, we both win.",
         "treats evidence. If it earns your next step, we both win."),
    ],
    "src/sections/SurveyCallout.tsx": [
        ("{/* header band — placeholder firm mark */}", "{/* header band: placeholder firm mark */}"),
        ("SITE SURVEY — PLOT 14, illustrative", "SITE SURVEY · PLOT 14, illustrative"),
        ("{/* left — pitch */}", "{/* left: pitch */}"),
        ("{/* right — survey PDF preview */}", "{/* right: survey PDF preview */}"),
        ("Yours to keep and share — whether or not", "Yours to keep and share, whether or not"),
        ("Free tool — no login, no card", "Free tool · no login, no card"),
    ],
}

failed = []
for rel, pairs in PAIRS.items():
    path = ROOT / rel
    text = path.read_text()
    for old, new in pairs:
        if old not in text:
            failed.append((rel, old[:60]))
            continue
        text = text.replace(old, new)
    path.write_text(text)

if failed:
    print("MISSED:")
    for rel, frag in failed:
        print(f"  {rel}: {frag}")
    sys.exit(1)
print(f"applied {sum(len(v) for v in PAIRS.values())} replacements across {len(PAIRS)} files")
