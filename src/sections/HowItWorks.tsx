import type { ReactNode } from "react"
import { Container, IllustrativeTag, Money, SectionHead, Stamp } from "../components/ui"
import {
  IconArrowRight,
  IconCamera,
  IconCheck,
  IconCheckSeal,
  IconClipboard,
  IconLayers,
  IconMic,
  IconReceipt,
} from "../components/icons"
import { Reveal } from "../components/Reveal"

/* ------------------------------- connector rail ------------------------------ */

type RailKind = "dashed" | "solid" | "fade"

/** Desktop horizontal connector: marigold node + hairline trailing to the next node.
 *  Dashed before the commit step, solid after; the line itself tells the story. */
function RailAcross({ kind, label }: { kind: RailKind; label?: string }) {
  return (
    <div className="relative mb-6 hidden h-2.5 items-center lg:flex" aria-hidden="true">
      <span className="size-2.5 shrink-0 rounded-full bg-marigold shadow-[0_0_0_4px_var(--color-marigold-tint)]" />
      <span className="relative ml-2.5 h-px flex-1">
        {kind === "dashed" && <span className="absolute inset-0 border-t border-dashed border-line-strong" />}
        {kind === "solid" && <span className="absolute inset-0 border-t border-line-strong" />}
        {kind === "fade" && <span className="absolute inset-0 bg-gradient-to-r from-line-strong to-transparent" />}
        {label && (
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[0.58rem] uppercase tracking-[0.16em] whitespace-nowrap text-muted">
            {label}
          </span>
        )}
      </span>
    </div>
  )
}

/* --------------------------------- micro-mocks -------------------------------- */

function CaptureChip({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[0.68rem] text-ink-soft">
      {children}
    </li>
  )
}

function CaptureMock() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      <CaptureChip>
        <IconMic size={12} className="shrink-0 text-sage" />
        0:42
      </CaptureChip>
      <CaptureChip>
        <IconCamera size={12} className="shrink-0 text-sage" />
        photo
      </CaptureChip>
      <CaptureChip>
        <IconReceipt size={12} className="shrink-0 text-sage" />
        slip
      </CaptureChip>
    </ul>
  )
}

function StructureMock() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="proposed px-2.5 py-[5px] font-mono text-[0.68rem] text-muted">draft</span>
      <IconArrowRight size={14} className="shrink-0 text-faint" aria-hidden="true" />
      <span className="inline-flex items-center rounded-[10px] border border-line-strong bg-card px-2 py-[5px]">
        <Stamp tone="ok">Committed</Stamp>
      </span>
    </div>
  )
}

const surfaceWindows = [
  { label: "Desk", pos: "left-0 top-0" },
  { label: "Site", pos: "left-10 top-[14px]" },
  { label: "Glass", pos: "left-20 top-[28px]" },
]

function SurfaceMock() {
  return (
    <div className="relative h-[78px] w-full max-w-[220px]" aria-hidden="true">
      {surfaceWindows.map((w) => (
        <span
          key={w.label}
          className={`absolute ${w.pos} block w-[92px] overflow-hidden rounded-[7px] border border-line-strong bg-card shadow-[var(--shadow-card)]`}
        >
          <span className="block border-b border-line px-2 py-[3px] font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted">
            {w.label}
          </span>
          <span className="block h-7 px-2 pt-1.5">
            <span className="block h-1 w-3/4 rounded-full bg-sand" />
            <span className="mt-1 block h-1 w-1/2 rounded-full bg-sand" />
          </span>
        </span>
      ))}
    </div>
  )
}

function ActMock() {
  return (
    <div className="flex w-full max-w-[240px] items-center justify-between gap-3 rounded-[10px] border border-line-strong bg-card px-3 py-2">
      <span className="flex min-w-0 flex-col">
        <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">PO-0114</span>
        <span className="text-[0.85rem] font-semibold text-ink">
          Approve <Money amount={84300} className="text-[0.8rem]" />
        </span>
      </span>
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-full bg-marigold text-ink"
        aria-hidden="true"
      >
        <IconCheck size={13} />
      </span>
    </div>
  )
}

/* ----------------------------------- steps ----------------------------------- */

type Step = {
  num: string
  name: string
  icon: ReactNode
  title: string
  body: string
  mock: ReactNode
  rail: RailKind
  railLabel?: string
}

const steps: Step[] = [
  {
    num: "01",
    name: "CAPTURE",
    icon: <IconMic size={21} />,
    title: "Speak it, snap it, forward it.",
    body: "Voice notes, photos, delivery slips, WhatsApp: the way your team already works. No new habits, no data entry shift.",
    mock: <CaptureMock />,
    rail: "dashed",
    railLabel: "draft",
  },
  {
    num: "02",
    name: "STRUCTURE",
    icon: <IconClipboard size={21} />,
    title: "AI drafts. A person commits.",
    body: "The AI turns noise into a draft entry: quantity, rate, vendor, stage. A named person reviews it and commits. Dashed means draft; solid means truth.",
    mock: <StructureMock />,
    rail: "solid",
    railLabel: "committed",
  },
  {
    num: "03",
    name: "SURFACE",
    icon: <IconLayers size={21} />,
    title: "Everyone gets their honest slice.",
    body: "The owner's morning brief, the accountant's paper trail, the homeowner's calm view. Same record, different windows.",
    mock: <SurfaceMock />,
    rail: "solid",
  },
  {
    num: "04",
    name: "ACT",
    icon: <IconCheckSeal size={21} />,
    title: "Decide, reconcile, reassure.",
    body: "Approve material from evidence, reconcile payments against slips, and let the homeowner see progress without calling anyone.",
    mock: <ActMock />,
    rail: "fade",
  },
]

/* ---------------------------------- section ----------------------------------- */

export function HowItWorks() {
  const last = steps.length - 1
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead eyebrow="How it works" title="From site noise to a signed record, in four steps." />

        <ol className="mt-16 lg:grid lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              as="li"
              delay={i * 90}
              className={`relative pl-10 lg:flex lg:flex-col lg:pl-0 ${i === last ? "pb-0" : "pb-12 lg:pb-0"}`}
            >
              {/* mobile: marigold node on the left rail */}
              <span
                className="absolute left-0 top-[5px] size-2.5 rounded-full bg-marigold shadow-[0_0_0_4px_var(--color-marigold-tint)] lg:hidden"
                aria-hidden="true"
              />
              {/* mobile: vertical rail segment: dashed before step 02, solid after */}
              {i < last && (
                <span
                  className={`absolute bottom-0 left-[4.5px] top-[21px] lg:hidden ${
                    i === 0 ? "w-0 border-l border-dashed border-line-strong" : "w-px bg-line-strong"
                  }`}
                  aria-hidden="true"
                />
              )}

              {/* desktop: horizontal connector */}
              <RailAcross kind={s.rail} label={s.railLabel} />

              <div className={`lg:flex lg:flex-1 lg:flex-col ${i === last ? "lg:pr-0" : "lg:pr-9"}`}>
                <p className="font-mono text-[0.8rem] uppercase tracking-widest text-muted">
                  {s.num} · {s.name}
                </p>
                <div
                  className="mt-4 flex size-11 items-center justify-center rounded-[10px] border border-line bg-sand text-ink-soft"
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <h3 className="mt-4 font-display text-[1.25rem] font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted lg:mb-6">{s.body}</p>
                <div className="mt-6 lg:mt-auto">{s.mock}</div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 flex items-center gap-4 lg:mt-14">
            <span className="rule-fade block flex-1" aria-hidden="true" />
            <IllustrativeTag />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
