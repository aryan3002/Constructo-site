import { Container, SectionHead, Money, Stamp, IllustrativeTag } from "../components/ui"
import { IconReceipt, IconCamera } from "../components/icons"
import { Reveal } from "../components/Reveal"

const COMMITMENTS = [
  {
    index: "01",
    claim: "Numbers come from math, not a model.",
    support:
      "Every total is deterministic arithmetic over committed entries. A chatbot never guesses a figure on this product.",
  },
  {
    index: "02",
    claim: "Every figure carries its evidence.",
    support:
      "Tap any amount and see the slip, the photo, the voice note, and the name of the person who committed it.",
  },
  {
    index: "03",
    claim: "No fake progress percentages.",
    support:
      "We show what's verifiably done, with proof attached. When we don't know, we say we don't know.",
  },
  {
    index: "04",
    claim: "Money is tracked, never moved.",
    support:
      "Neev reconciles what was paid against what was recorded. It holds no wallet and moves no rupee.",
  },
  {
    index: "05",
    claim: "The homeowner never sees raw AI.",
    support:
      "Nothing reaches the homeowner's window until a named human has approved it. Calm that's earned, not generated.",
  },
]

const TRACE = [
  { Icon: IconReceipt, label: "slip_081.jpg", when: "02 Aug" },
  { Icon: IconReceipt, label: "slip_094.jpg", when: "11 Aug" },
  { Icon: IconCamera, label: "delivery photo", when: "11 Aug" },
]

function EvidenceTraceCard() {
  return (
    <div className="max-w-sm rounded-[14px] border border-[rgba(243,239,230,0.14)] bg-[#262320] p-6 lg:max-w-none">
      {/* header */}
      <div className="flex items-baseline justify-between gap-3 border-b border-[rgba(243,239,230,0.12)] pb-3">
        <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[rgba(243,239,230,0.55)]">
          Evidence trail
        </p>
        <IllustrativeTag className="text-[rgba(243,239,230,0.4)]" />
      </div>

      {/* figure */}
      <div className="mt-5">
        <Money amount={240000} className="text-canvas text-[1.6rem] font-medium tracking-tight" />
        <p className="mt-1 text-[0.85rem] leading-snug text-[rgba(243,239,230,0.62)]">
          paid to Sharma Traders · Aug
        </p>
      </div>

      {/* vertical trace */}
      <div className="relative mt-6">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-[3px] top-2 w-px bg-[rgba(240,162,31,0.45)]"
        />
        <ul aria-label="Documents linked to this payment" className="space-y-3">
          {TRACE.map(({ Icon, label, when }) => (
            <li key={label} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-marigold" />
              <span className="inline-flex min-w-0 items-center gap-2 rounded-[8px] border border-[rgba(243,239,230,0.16)] bg-[rgba(243,239,230,0.05)] px-2.5 py-1.5 font-mono text-[0.72rem] text-[rgba(243,239,230,0.82)]">
                <Icon size={13} className="shrink-0 text-marigold" />
                <span className="truncate">{label}</span>
              </span>
              <span className="ml-auto shrink-0 font-mono text-[0.62rem] text-[rgba(243,239,230,0.4)]">{when}</span>
            </li>
          ))}
          <li className="flex items-center gap-3 pt-1">
            <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-marigold" />
            <Stamp tone="warn">Committed · Meena</Stamp>
          </li>
        </ul>
      </div>

      {/* footnote */}
      <p className="mt-5 border-t border-[rgba(243,239,230,0.12)] pt-3 font-mono text-[0.68rem] tracking-[0.08em] text-[rgba(243,239,230,0.55)]">
        3 documents · 0 guesses
      </p>
    </div>
  )
}

export function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-ink text-canvas py-24 sm:py-28 scroll-mt-24">
      {/* warm marigold breath, top-left, barely there */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(820px_520px_at_0%_0%,rgba(240,162,31,0.05),transparent_70%)]"
      />

      <Container className="relative">
        <SectionHead
          onInk
          eyebrow="Why you can trust it"
          title="Honest by architecture, not by promise."
          lede="Most AI products ask for your faith. Neev is built so you don't have to give it."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-16">
          {/* the ledger */}
          <ul className="max-w-4xl divide-y divide-[rgba(243,239,230,0.14)] border-y border-[rgba(243,239,230,0.14)]">
            {COMMITMENTS.map(({ index, claim, support }, i) => (
              <Reveal key={index} as="li" delay={i * 80}>
                <div className="grid grid-cols-[2.75rem_1fr] gap-x-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-x-6 sm:py-8">
                  <span
                    aria-hidden="true"
                    className="pt-[0.45rem] font-mono text-[0.78rem] font-medium tracking-[0.22em] text-marigold"
                  >
                    {index}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3rem] font-bold leading-[1.22] tracking-tight text-canvas sm:text-[1.5rem]">
                      {claim}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-[rgba(243,239,230,0.68)]">
                      {support}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* right rail: evidence trace mock */}
          <Reveal delay={200} className="lg:pt-2">
            <EvidenceTraceCard />
          </Reveal>
        </div>

        {/* closing line */}
        <Reveal delay={120}>
          <div className="mt-16 flex items-center gap-5 sm:mt-20">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(243,239,230,0.18)]"
            />
            <p className="max-w-xs text-center font-mono text-[0.7rem] font-medium tracking-[0.18em] text-[rgba(243,239,230,0.55)] sm:max-w-none">
              IF A NUMBER HAS NO EVIDENCE, NEEV WON'T SHOW IT.
            </p>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(243,239,230,0.18)]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
