import type { ReactNode } from "react"
import { Reveal } from "../components/Reveal"
import { Container, IllustrativeTag, Money, SectionHead, Stamp } from "../components/ui"
import {
  IconCamera,
  IconChat,
  IconCheck,
  IconCheckSeal,
  IconLayers,
  IconMic,
  IconShield,
  IconWaveform,
} from "../components/icons"

/* ------------------------------- thread mock ------------------------------- */

const voiceBars = [6, 12, 8, 16, 10, 18, 13, 9, 15, 7, 11, 5]

function SenderLine({ name, time }: { name: string; time: string }) {
  return (
    <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">
      {name} · {time}
    </p>
  )
}

function ThreadMock() {
  return (
    <div className="w-[280px] max-w-full rounded-[18px] border-2 border-line bg-card shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <span className="mx-auto mt-2 block h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden="true" />

      {/* thread header */}
      <div className="flex items-center justify-between border-b border-line px-3.5 pb-2.5 pt-2">
        <div className="min-w-0">
          <p className="truncate text-[0.78rem] font-semibold text-ink">Indiranagar 2BHK+ · Crew</p>
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted">9 members · site</p>
        </div>
        <span className="shrink-0 rounded-full bg-sage-tint px-2 py-[3px] font-mono text-[0.56rem] uppercase tracking-[0.12em] text-sage-press">
          Live thread
        </span>
      </div>

      <div className="space-y-3 px-3.5 py-3.5">
        {/* 1 · voice note arrives */}
        <div>
          <SenderLine name="Ravi S." time="7:02 am" />
          <div className="mt-1 rounded-[12px] rounded-tl-[4px] border border-line bg-canvas p-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage">
                <IconMic size={13} />
              </span>
              <span className="flex items-end gap-[2px]" aria-hidden="true">
                {voiceBars.map((h, i) => (
                  <span key={i} className="w-[2.5px] rounded-full bg-sage/60" style={{ height: h }} />
                ))}
              </span>
              <span className="ml-auto font-mono text-[0.6rem] text-muted">0:31</span>
            </div>
            <p className="mt-1.5 text-[0.72rem] leading-snug text-muted">"aaj 12 mazdoor, 2 mason"</p>
          </div>
        </div>

        {/* 2 · smart-suggest chip (AI proposes) */}
        <div className="flex justify-center">
          <p className="inline-flex max-w-full items-baseline gap-1.5 rounded-[10px] border-[1.5px] border-dashed border-marigold-press/50 bg-marigold-tint px-3 py-1.5">
            <span className="font-mono text-[0.56rem] uppercase tracking-[0.12em] text-marigold-press">Neev</span>
            <span className="text-[0.7rem] font-medium leading-snug text-ink">
              Log attendance? 12 workers · 2 mason{" "}
              <span aria-hidden="true" className="text-marigold-press">
                →
              </span>
            </span>
          </p>
        </div>

        {/* 3 · committed attendance card */}
        <div className="rounded-[12px] border border-line bg-card p-3 shadow-[var(--shadow-card)]">
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">Attendance · Tue</p>
          <p className="mt-1 text-[0.78rem] font-semibold leading-snug text-ink">12 workers · 2 masons on site</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-line bg-sand px-2 py-[3px] font-mono text-[0.56rem] leading-none text-ink-soft">
              <IconWaveform size={10} />
              voice · 0:31
            </span>
            <Stamp tone="ok" className="!text-[0.52rem]">
              Committed · Meena · 7:04am
            </Stamp>
          </div>
        </div>

        {/* 4 · challan photo arrives */}
        <div>
          <SenderLine name="Deepak" time="8:11 am" />
          <div className="mt-1 w-[150px] rounded-[12px] rounded-tl-[4px] border border-line bg-canvas p-1.5">
            <div
              className="flex h-14 items-center justify-center rounded-[8px] bg-sage-tint text-sage"
              aria-hidden="true"
            >
              <IconCamera size={18} />
            </div>
            <p className="mt-1 px-0.5 font-mono text-[0.54rem] leading-none text-muted">challan_081.jpg</p>
          </div>
        </div>

        {/* 5 · self-reconciled delivery card */}
        <div className="rounded-[12px] border border-line bg-card p-3 shadow-[var(--shadow-card)]">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">Delivery · GRN-081</p>
            <Money amount={19250} className="text-[0.72rem] font-semibold text-ink" />
          </div>
          <p className="mt-1 text-[0.78rem] font-semibold leading-snug text-ink">50 bori PPC · Sharma Traders</p>
          <p className="mt-1.5 inline-flex items-center gap-1 font-mono text-[0.6rem] text-ok">
            <IconCheck size={11} />
            matches open PO
          </p>
          <div className="mt-2">
            <Stamp tone="ok" className="!text-[0.52rem]">
              Committed · Meena · 8:14am
            </Stamp>
          </div>
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-2">
          <span className="flex-1 truncate text-[0.68rem] text-faint">Message · @neev to ask</span>
          <IconMic size={14} className="shrink-0 text-muted" aria-hidden="true" />
        </div>

        <IllustrativeTag className="block text-center" />
      </div>
    </div>
  )
}

/* ----------------------------- membrane split ------------------------------ */

function Membrane() {
  return (
    <div className="rounded-[14px] border border-line bg-card p-5 shadow-[var(--shadow-card)] sm:p-6">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sage">The membrane</p>
      <p className="mt-1.5 text-[1.02rem] font-semibold text-ink">One committed fact, two faces.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {/* dense crew face */}
        <div className="rounded-[10px] border border-line bg-canvas p-3.5">
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">Crew thread</p>
          <p className="mt-1.5 font-mono text-[0.7rem] leading-relaxed text-ink-soft">
            GRN-081 · 50 bori PPC @ ₹385
            <br />
            Sharma Traders · <Money amount={19250} className="text-ink" />
          </p>
        </div>
        {/* calm homeowner face */}
        <div className="rounded-[10px] border border-line bg-sage-tint p-3.5">
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-sage-press">Homeowner view</p>
          <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink">
            Cement arrived for your ground-floor slab. Checked and verified by Meena ✓
          </p>
        </div>
      </div>

      <div className="rule-fade mt-4" aria-hidden="true" />
      <p className="mt-2.5 text-center font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
        Same fact · figures verified identical
      </p>
    </div>
  )
}

/* ------------------------------ feature cards ------------------------------ */

const FEATURES: { icon: ReactNode; title: string; line: ReactNode }[] = [
  {
    icon: <IconMic size={19} />,
    title: "Voice-to-card",
    line: "Hold to talk in Hindi. It releases as a filled card, not a blob.",
  },
  {
    icon: <IconCamera size={19} />,
    title: "Camera-as-sensor",
    line: "Snap a challan. OCR fills a delivery card and matches it to the open PO before the phone is back in your pocket.",
  },
  {
    icon: <IconCheckSeal size={19} />,
    title: "Proof-locked approvals",
    line: "An approval card refuses to commit without evidence. It stamps who, when and what it binds to, and stays reversible for a window.",
  },
  {
    icon: <IconChat size={19} />,
    title: "@ask the project",
    line: "Ask in-thread, get a cited answer. The AI never produces the number; deterministic math does. It abstains rather than guess.",
  },
  {
    icon: <IconLayers size={19} />,
    title: "Catch me up",
    line: (
      <>
        A 30-message argument collapses into one resolved line: 100 bori (not 110), GRN booked,{" "}
        <Money amount={3800} className="text-[0.88em] text-ink-soft" /> credit.
      </>
    ),
  },
  {
    icon: <IconShield size={19} />,
    title: "The Sentinel",
    line: "Notices what didn't happen: no attendance logged by 11am, a delivery that never arrived. One calm nudge a day.",
  },
]

/* --------------------------------- section -------------------------------- */

export function InAppChat() {
  return (
    <section id="in-app-chat" className="scroll-mt-24 border-t border-line bg-sand py-24 sm:py-32">
      <Container>
        <SectionHead
          eyebrow="The flagship · In-app chat"
          title="Make the thread the product."
          lede="Neev doesn't fight WhatsApp. It absorbs the work that dies in a WhatsApp scroll. The crew already lives in a thread, so that's where the record is born: every voice note, photo and reply turns itself into proof. AI drafts it; a named person commits it."
        />

        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-16">
          {/* the argument */}
          <div>
            <Reveal>
              <p className="max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
                The feel is WhatsApp-grade: one fast thread with voice, photos and replies that holds up on a patchy
                site network. Underneath sits the intelligence layer, an AI-native system of record wearing a chat
                costume.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
                So a Hindi voice note becomes a structured card, not a six-second blob nobody can search. A paper
                challan becomes a self-reconciling delivery, not a JPEG. And a casual "haan theek hai" becomes a
                stamped, reversible approval the whole crew can see, not a screenshot someone disputes at month-end.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 max-w-xl">
                <Membrane />
              </div>
            </Reveal>
          </div>

          {/* the proof */}
          <Reveal delay={140} className="justify-self-center lg:justify-self-end">
            <ThreadMock />
          </Reveal>
        </div>

        {/* what the thread does today */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-[1.35rem] font-bold text-ink">What the thread does today</h3>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sage-press">
                All six · live in the crew thread
              </p>
            </div>
          </Reveal>

          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 70}>
                <div className="h-full rounded-[14px] border border-line bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-sand text-ink-soft"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <h4 className="mt-4 text-[1.08rem] font-bold leading-snug text-ink">{f.title}</h4>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{f.line}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <p className="mt-8 text-center font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
              Works alongside WhatsApp · rich chat is rolling out to every conversation, homeowner included
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
