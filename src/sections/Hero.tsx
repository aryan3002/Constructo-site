import type { CSSProperties, ReactNode } from "react"
import { ButtonLink, Container, Eyebrow, IllustrativeTag, Money, Stamp } from "../components/ui"
import {
  IconArrowRight,
  IconCamera,
  IconClipboard,
  IconMic,
  IconReceipt,
  IconWaveform,
} from "../components/icons"
import { Reveal } from "../components/Reveal"

/* ------------------------------ local helpers ------------------------------ */

function EvidenceChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-sand py-1 pl-2 pr-2.5 font-mono text-[0.64rem] leading-none text-ink-soft">
      <span className="text-muted" aria-hidden="true">
        {icon}
      </span>
      {label}
    </li>
  )
}

function RowKicker({ word, dotClass, textClass }: { word: string; dotClass: string; textClass: string }) {
  return (
    <p className={`flex items-center gap-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] ${textClass}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} aria-hidden="true" />
      {word}
    </p>
  )
}

/** Gentle vertical drift for the floating evidence cards (CSS-only). */
const floatStyle = (duration: string, delay: string): CSSProperties => ({
  animation: `neev-hero-float ${duration} ease-in-out ${delay} infinite alternate`,
})

function ConnectorCurve({ className, path }: { className: string; path: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute text-sage opacity-40 ${className}`}
      width="52"
      height="36"
      viewBox="0 0 52 36"
      fill="none"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 5" strokeLinecap="round" />
    </svg>
  )
}

/* ---------------------------------- hero ----------------------------------- */

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-canvas pt-36 pb-24 sm:pt-44 sm:pb-32 scroll-mt-24">
      <style>{`
        @keyframes neev-hero-float {
          from { transform: translateY(-3px); }
          to   { transform: translateY(3px); }
        }
      `}</style>

      {/* Blueprint grid backdrop, dissolving toward the edges */}
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 72% 62% at 50% 36%, black 32%, transparent 76%)",
          WebkitMaskImage: "radial-gradient(ellipse 72% 62% at 50% 36%, black 32%, transparent 76%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14">
          {/* ------------------------------ copy ------------------------------ */}
          <div>
            <Reveal>
              <Eyebrow>BUILT FOR INDIAN CONSTRUCTION · WHATSAPP-NATIVE</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.7rem,5.6vw,4.3rem)] font-bold leading-[1.05] tracking-tight text-ink">
                Every site decision, from evidence, before{" "}
                <span className="whitespace-nowrap font-mono text-[0.88em] font-semibold tracking-[-0.05em] text-marigold-press">
                  7:15am
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-relaxed text-muted">
                Neev turns WhatsApp messages, site photos and voice notes into one trustworthy record of your project,
                then gives the owner, the site team, the accountant and the homeowner each an honest view of it.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <ButtonLink to="/#book-demo" size="lg">
                  Book a demo
                </ButtonLink>
                <ButtonLink to="/site-survey" variant="secondary" size="lg">
                  Try the free Site Survey
                  <IconArrowRight size={18} />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 font-mono text-[0.78rem] leading-relaxed tracking-[0.14em] text-muted">
                AI PROPOSES · A HUMAN COMMITS · EVERY NUMBER TRACES TO ITS EVIDENCE
              </p>
            </Reveal>
          </div>

          {/* ------------------------- the morning brief ------------------------ */}
          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
            <Reveal delay={200}>
              <div className="folded-card relative w-full max-w-[420px] shadow-[var(--shadow-lift)]">
                {/* card header */}
                <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                  <div className="flex items-baseline justify-between gap-3 pr-7">
                    <p className="font-mono text-[0.7rem] tracking-[0.14em] text-faint">TUESDAY · 7:14 AM</p>
                    <IllustrativeTag />
                  </div>
                  <p className="mt-3.5 font-display text-[1.15rem] font-semibold tracking-tight text-ink">
                    Your 3 decisions today
                  </p>
                  <p className="mt-0.5 text-[0.85rem] text-muted">Indiranagar 2BHK+ · Day 142</p>
                </div>

                {/* decision rows */}
                <ul className="mt-4 pb-5 sm:pb-6">
                  {/* row 1: needs a decision */}
                  <li className="px-5 sm:px-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <RowKicker word="Decide" dotClass="bg-warn" textClass="text-warn" />
                      <Money amount={84300} className="text-[0.95rem] font-semibold text-ink" />
                    </div>
                    <p className="mt-1.5 text-[0.92rem] font-semibold leading-snug text-ink">
                      Approve steel top-up: 12mm TMT runs short for Friday's slab
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      <EvidenceChip icon={<IconCamera size={12} />} label="Site photo · 6:48am" />
                      <EvidenceChip icon={<IconClipboard size={12} />} label="Stock count" />
                    </ul>
                    <div className="mt-3.5 flex gap-2" aria-hidden="true">
                      <button
                        type="button"
                        tabIndex={-1}
                        className="inline-flex h-8 cursor-default items-center justify-center rounded-[8px] bg-marigold px-4 font-sans text-[0.78rem] font-semibold leading-none text-ink shadow-[0_1px_0_rgba(27,25,22,0.15)]"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="inline-flex h-8 cursor-default items-center justify-center rounded-[8px] border border-line-strong bg-card px-4 font-sans text-[0.78rem] font-semibold leading-none text-ink-soft"
                      >
                        Hold
                      </button>
                    </div>
                  </li>

                  {/* row 2: info */}
                  <li className="mt-4 px-5 sm:px-6">
                    <div className="rule-fade mb-4" aria-hidden="true" />
                    <RowKicker word="Update" dotClass="bg-info" textClass="text-info" />
                    <p className="mt-1.5 text-[0.92rem] font-semibold leading-snug text-ink">
                      Electrician returns Thursday · conduit work resumes
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      <ul className="flex flex-wrap gap-1.5">
                        <EvidenceChip icon={<IconWaveform size={12} />} label="Voice note · 0:42 · Ravi S." />
                      </ul>
                      <Stamp tone="sage">Committed · Ravi</Stamp>
                    </div>
                  </li>

                  {/* row 3: verified */}
                  <li className="mt-4 px-5 sm:px-6">
                    <div className="rule-fade mb-4" aria-hidden="true" />
                    <div className="flex items-baseline justify-between gap-3">
                      <RowKicker word="Done" dotClass="bg-ok" textClass="text-ok" />
                      <Money amount={19250} className="text-[0.95rem] text-ink" />
                    </div>
                    <p className="mt-1.5 text-[0.92rem] font-semibold leading-snug text-ink">
                      Cement delivery verified · 50 bori, slip matches PO
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      <ul className="flex flex-wrap gap-1.5">
                        <EvidenceChip icon={<IconReceipt size={12} />} label="Delivery slip" />
                        <EvidenceChip icon={<IconCamera size={12} />} label="Photo" />
                      </ul>
                      <Stamp tone="ok">Verified</Stamp>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* ------------- floating evidence (feeds into the brief) ------------- */}

            {/* voice note: above the card, left */}
            <div className="pointer-events-none absolute -top-9 -left-4 hidden lg:block" aria-hidden="true">
              <Reveal delay={420}>
                <div className="relative" style={floatStyle("6.5s", "-1s")}>
                  <div className="flex items-center gap-2 rounded-full border border-line bg-card py-1.5 pl-2 pr-3 shadow-[var(--shadow-card)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-tint text-sage">
                      <IconMic size={13} />
                    </span>
                    <span className="flex items-end gap-[2.5px]">
                      {[5, 10, 7, 13, 8, 11, 5, 12, 6].map((h, i) => (
                        <span key={i} className="w-[2px] rounded-full bg-sage" style={{ height: h }} />
                      ))}
                    </span>
                    <span className="font-mono text-[0.66rem] text-muted">0:42</span>
                  </div>
                  <ConnectorCurve className="top-full right-0" path="M48 2 C 44 16, 34 26, 18 33" />
                </div>
              </Reveal>
            </div>

            {/* site photo: fully in the column gap, clear of the brief's text */}
            <div className="pointer-events-none absolute bottom-10 -left-[150px] hidden xl:block" aria-hidden="true">
              <Reveal delay={500}>
                <div className="relative" style={floatStyle("7.5s", "-3.5s")}>
                  <div className="w-[124px] rounded-[10px] border border-line bg-card p-1.5 shadow-[var(--shadow-card)]">
                    <div className="flex h-[68px] items-center justify-center rounded-[7px] bg-sage-tint text-sage">
                      <IconCamera size={20} />
                    </div>
                    <p className="mt-1.5 px-1 pb-0.5 font-mono text-[0.58rem] leading-none text-muted">slab_pour.jpg</p>
                  </div>
                  <ConnectorCurve className="top-3 left-full ml-1" path="M3 4 C 18 8, 32 16, 47 30" />
                </div>
              </Reveal>
            </div>

            {/* delivery slip: below the card, right */}
            <div className="pointer-events-none absolute -bottom-9 -right-3 hidden lg:block" aria-hidden="true">
              <Reveal delay={580}>
                <div className="relative" style={floatStyle("6s", "-2s")}>
                  <div className="flex items-center gap-2 rounded-[10px] border border-line bg-card px-3 py-2 shadow-[var(--shadow-card)]">
                    <span className="text-sage">
                      <IconReceipt size={14} />
                    </span>
                    <Money amount={19250} className="text-[0.7rem] leading-none text-ink-soft" />
                  </div>
                  <ConnectorCurve className="bottom-full left-4 mb-1" path="M44 34 C 36 22, 22 10, 6 3" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ------------------------------ scroll hint ----------------------------- */}
        <Reveal delay={120}>
          <div className="mt-20 sm:mt-24">
            <div className="rule-fade mx-auto max-w-md" aria-hidden="true" />
            <p className="mt-5 text-center">
              <a
                href="#problem"
                className="font-mono text-[0.7rem] tracking-[0.18em] text-muted transition-colors duration-200 hover:text-ink"
              >
                THE WHATSAPP REALITY ↓
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
