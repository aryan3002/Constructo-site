import type { ReactNode } from "react"
import { Reveal } from "../components/Reveal"
import { Container, IllustrativeTag, Money, SectionHead } from "../components/ui"
import { IconCheck, IconHome } from "../components/icons"

/* --------------------------- the 4 a.m. anxieties --------------------------- */

const ANXIETIES = [
  {
    kicker: "Silence",
    time: "4:07 am",
    fear: "No photo for three days. Is something wrong?",
    fix: "Neev explains the quiet: your slab is curing. Concrete needs time, not work. No photos this week is expected.",
  },
  {
    kicker: "Jargon",
    time: "4:12 am",
    fear: "Deshuttering after 14 days curing…?",
    fix: "Plain words, every time. Every update is translated before it reaches you.",
  },
  {
    kicker: "Money",
    time: "4:18 am",
    fear: "A charge I didn't expect. Who agreed to this?",
    fix: "Every extra cost arrives as a story before any Approve button: what, why, the amount, who proposed it, the running total.",
  },
  {
    kicker: "Decision",
    time: "4:26 am",
    fear: "Tile colour, at 9pm, with no context?",
    fix: "One decision at a time, with context, reversible until a stated date.",
  },
]

/* ------------------------------- phone mocks ------------------------------- */

function GlassFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[250px] max-w-full rounded-[18px] border-2 border-line bg-card p-1.5 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <span className="mx-auto mt-1 mb-1.5 block h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden="true" />
      <div className="rounded-[12px] bg-sage-tint px-3.5 pt-3.5 pb-4">{children}</div>
    </div>
  )
}

function GlassHeader() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[0.8rem] font-semibold text-ink">Riverside House</p>
      <IconHome size={14} className="text-sage" aria-hidden="true" />
    </div>
  )
}

function ReviewedBy({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="rule-fade mt-4" aria-hidden="true" />
      <p className="mt-2.5 font-mono text-[0.58rem] leading-relaxed text-muted">{children}</p>
      <IllustrativeTag className="mt-1.5 block" />
    </>
  )
}

/** 1 · the empty home screen you trust */
function HomeScreenMock() {
  return (
    <GlassFrame>
      <GlassHeader />

      {/* a bar of time, not a fake % */}
      <div className="mt-4">
        <div className="flex items-baseline justify-between font-mono text-[0.54rem] uppercase tracking-[0.12em] text-muted">
          <span>Started Feb</span>
          <span>Handover Dec</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-card" aria-hidden="true">
          <div className="h-full w-[38%] rounded-full bg-sage" />
        </div>
        <p className="mt-1 font-mono text-[0.54rem] uppercase tracking-[0.12em] text-muted">Month 4 of 11</p>
      </div>

      <p className="mt-5 font-display text-[1.12rem] font-bold leading-snug text-sage-press">
        On track. Nothing needs you today.
      </p>
      <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted">That's good news. Enjoy your evening.</p>

      <ReviewedBy>Updated this morning · reviewed by Asha V. ✓</ReviewedBy>
    </GlassFrame>
  )
}

/** 2 · the quiet-period card */
function QuietPeriodMock() {
  return (
    <GlassFrame>
      <GlassHeader />

      <p className="mt-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-sage-press">
        Quiet period · day 4 of 14
      </p>
      <p className="mt-1.5 font-display text-[1.12rem] font-bold leading-snug text-ink">
        Quiet on site, and that's normal.
      </p>
      <p className="mt-2 text-[0.75rem] leading-relaxed text-ink-soft">
        Ground-floor slab poured Sunday. Curing needs about 14 days of stillness, not work.
      </p>
      <p className="mt-2.5 text-[0.72rem] leading-relaxed text-muted">
        Next: column shuttering around <span className="font-mono text-[0.95em]">12 Jun</span>.
      </p>

      <ReviewedBy>Written from the site record · reviewed by Asha V. ✓</ReviewedBy>
    </GlassFrame>
  )
}

/** 3 · the change-order story card */
function ChangeOrderMock() {
  return (
    <GlassFrame>
      <GlassHeader />

      <p className="mt-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-sage-press">
        Change order · bathroom floors
      </p>
      <p className="mt-1.5 font-display text-[1.12rem] font-bold leading-snug text-ink">Extra waterproofing</p>

      <p className="mt-2.5 font-mono text-[0.54rem] uppercase tracking-[0.12em] text-muted">Why</p>
      <p className="mt-0.5 text-[0.75rem] leading-relaxed text-ink-soft">
        The screed came out uneven. Extra coats stop leaks into the rooms below.
      </p>

      <ul className="mt-3 space-y-1 font-mono text-[0.62rem] text-ink-soft">
        <li className="flex justify-between gap-2">
          <span className="text-muted">Cost</span>
          <span>
            +<Money amount={38000} className="text-[1em]" /> · +2 days
          </span>
        </li>
        <li className="flex justify-between gap-2">
          <span className="text-muted">Proposed by</span>
          <span>your engineer</span>
        </li>
        <li className="flex justify-between gap-2">
          <span className="text-muted">Evidence</span>
          <span>3 photos · not yet charged</span>
        </li>
        <li className="flex justify-between gap-2 border-t border-line pt-1">
          <span className="text-muted">Changes so far</span>
          <span>
            +<Money amount={120000} className="text-[1em]" />
          </span>
        </li>
      </ul>

      <div className="mt-3.5" aria-hidden="true">
        <button
          type="button"
          tabIndex={-1}
          className="inline-flex h-8 w-full cursor-default items-center justify-center rounded-[8px] bg-marigold px-4 font-sans text-[0.75rem] font-semibold leading-none text-ink shadow-[0_1px_0_rgba(27,25,22,0.15)]"
        >
          Approve
        </button>
        <p className="mt-1.5 text-center font-mono text-[0.54rem] uppercase tracking-[0.12em] text-muted">
          Owners approve · family can comment
        </p>
      </div>

      <ReviewedBy>The story comes first. The button comes last.</ReviewedBy>
    </GlassFrame>
  )
}

const MOCKS = [
  {
    mock: <HomeScreenMock />,
    title: "The home screen you trust",
    line: "Your home by its name, a bar of time, and the day's honest answer. Said as good news, because it is.",
  },
  {
    mock: <QuietPeriodMock />,
    title: "The quiet, explained",
    line: "Silence stops being scary when someone tells you why the site is still, and what comes next.",
  },
  {
    mock: <ChangeOrderMock />,
    title: "Every cost, as a story",
    line: "What, why, how much, who proposed it, and the running total. You watch costs accumulate; you never discover them.",
  },
]

/* ------------------------- shipped + coming features ------------------------ */

const SHIPPED: { title: string; line: string }[] = [
  { title: "Honest progress, never a fake %", line: "A time-bar from start to handover, so normal curing never reads as stalled." },
  { title: "Quiet-period detection", line: "\"Nothing needs you,\" with the reason why." },
  { title: "Reviewed by a named person ✓", line: "Provenance is a real human, not an AI sparkle." },
  { title: "Change-order story cards", line: "Watch costs accumulate transparently. Never discover them." },
  { title: "The Sunday letter", line: "Your week, in three calm sentences, human-reviewed." },
  { title: "Household members", line: "Family can always comment; only owners can approve a charge." },
]

/* --------------------------------- section -------------------------------- */

export function Homeowners() {
  return (
    <section id="for-homeowners" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead
          eyebrow="For homeowners · the calm side"
          title="Relax. Nothing needs you today."
          lede="Building a home is the most anxious purchase of your life. Neev turns it into one calm, honest sentence a day. And it is structurally incapable of lying to you: every word on your screen is something a real person did, or approved the saying of."
        />

        {/* the 4 a.m. spikes, answered */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ANXIETIES.map((a, i) => (
            <Reveal as="li" key={a.kicker} delay={i * 80}>
              <div className="flex h-full flex-col rounded-[14px] border border-line bg-card p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-risk">{a.kicker}</p>
                  <p className="font-mono text-[0.6rem] text-muted">{a.time}</p>
                </div>
                <p className="mt-2.5 text-[1.02rem] font-semibold leading-snug text-ink">"{a.fear}"</p>
                <div className="rule-fade my-4" aria-hidden="true" />
                <p className="text-[0.9rem] leading-relaxed text-muted">{a.fix}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* the glass rule */}
        <Reveal>
          <figure className="mt-16 rounded-[18px] bg-sage-press px-7 py-10 text-canvas sm:px-12 sm:py-12">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(243,239,230,0.65)]">
              The glass rule
            </p>
            <blockquote className="mt-4 max-w-3xl font-display text-[1.35rem] font-semibold leading-snug sm:text-[1.6rem]">
              You never see the raw 50 to 100 daily site photos, the vendor names, or the money you shouldn't. You see
              only real, human-approved updates.
            </blockquote>
            <figcaption className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[rgba(243,239,230,0.75)]">
              The AI is a translator behind glass, never an oracle. A hallucinated "your slab was poured today"
              physically cannot reach you.
            </figcaption>
          </figure>
        </Reveal>

        {/* the three calm screens */}
        <ul className="mt-16 grid gap-14 sm:mt-20 sm:gap-16 lg:grid-cols-3 lg:gap-8">
          {MOCKS.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 100}>
              <div className="mx-auto w-full max-w-md lg:max-w-none">
                <div className="flex items-end justify-center lg:min-h-[420px]">{m.mock}</div>
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-[1.15rem] font-bold leading-snug text-ink">{m.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-[0.92rem] leading-relaxed text-muted lg:mx-0 lg:max-w-none">
                    {m.line}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* what ships, what's coming */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <h3 className="text-[1.35rem] font-bold text-ink">In the homeowner app today</h3>
          </Reveal>

          <ul className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {SHIPPED.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage-press"
                    aria-hidden="true"
                  >
                    <IconCheck size={12} />
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-muted">
                    <strong className="font-semibold text-ink">{f.title}.</strong> {f.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="proposed mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 bg-card/60 px-5 py-4">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">Coming</span>
              <p className="text-[0.92rem] text-muted">
                Room-by-room view · approve materials &amp; drawings in-app · "ask your home", a grounded assistant
              </p>
            </div>
          </Reveal>
        </div>

        {/* versus the status quo */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[14px] border border-line bg-card p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                A contractor's WhatsApp updates
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                A chat, not a record: unsearchable, untranslated, no audit trail. "Who agreed to this?" has no answer.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-[14px] border border-sage/40 bg-sage-tint p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sage-press">Your Neev record</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                A structured, attributed, searchable memory of the biggest purchase of your life. Every approval names
                who authorised it; every change carries its reason.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
