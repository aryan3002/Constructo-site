import { Container, SectionHead, Money, Stamp, IllustrativeTag } from "../components/ui"
import { IconMic, IconCamera, IconReceipt, IconArrowRight } from "../components/icons"
import { Reveal } from "../components/Reveal"

const chipCls =
  "inline-flex items-center gap-1.5 rounded-full border border-line bg-sand px-2.5 py-1 font-mono text-[0.68rem] leading-none text-ink-soft"

export function Shift() {
  return (
    <section id="shift" className="scroll-mt-24 overflow-hidden bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead
          align="center"
          eyebrow="The shift"
          title="One record. AI proposes. A human commits."
          lede="Neev doesn't give your site another app to shout into. It listens to how the project already talks: WhatsApp, voice notes, photos. It drafts a structured record of what happened, and then a named person confirms it. Raw AI never reaches anyone who can't sanity-check it."
        />

        {/* The proposed → committed moment */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            aria-hidden="true"
            className="blueprint-grid absolute -inset-x-4 -inset-y-8 [mask-image:radial-gradient(72%_75%_at_50%_50%,black,transparent)]"
          />

          <div className="relative grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-0">
            {/* AI draft: dashed, unsure, asking */}
            <Reveal className="h-full">
              <article className="proposed flex h-full flex-col gap-3.5 bg-sand/60 p-5 sm:p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">AI draft</p>
                <p className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[0.7rem] leading-none text-ink-soft">
                  <IconMic size={12} />
                  <span>voice note · Meena · 6:51pm</span>
                </p>
                <p className="text-[0.95rem] leading-snug text-ink-soft">
                  Received 50 bori cement from Sharma Traders
                </p>
                <p className="font-mono text-[1.2rem] font-medium tabular-nums text-ink">
                  <Money amount={19250} />
                  <span className="text-warn">?</span>
                  <span className="sr-only">(amount unconfirmed, awaiting review)</span>
                </p>
              </article>
            </Reveal>

            {/* The review gate */}
            <Reveal delay={90} className="flex">
              <div className="flex w-full flex-col items-center justify-center gap-2.5 px-2 py-1 sm:px-4">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="hidden w-6 border-t-[1.5px] border-dashed border-line-strong sm:block"
                  />
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-card text-ink-soft shadow-[var(--shadow-card)]">
                    <IconArrowRight size={15} className="rotate-90 sm:rotate-0" />
                  </span>
                  <span aria-hidden="true" className="hidden w-6 border-t-[1.5px] border-line-strong sm:block" />
                </div>
                <p className="max-w-[9rem] text-center font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
                  A named human reviews
                </p>
              </div>
            </Reveal>

            {/* Committed record: solid, folded, stamped */}
            <Reveal delay={180} className="h-full">
              <article className="folded-card flex h-full flex-col gap-3.5 p-5 sm:p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">Ledger entry</p>
                <p className="text-[0.95rem] font-medium leading-snug text-ink">
                  50 bori PPC cement · Sharma Traders
                </p>
                <p className="font-mono text-[1.2rem] font-medium text-ink">
                  <Money amount={19250} />
                </p>
                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <span className={chipCls}>
                      <IconReceipt size={12} />
                      <span>slip</span>
                    </span>
                  </li>
                  <li>
                    <span className={chipCls}>
                      <IconCamera size={12} />
                      <span>photo</span>
                    </span>
                  </li>
                </ul>
                <p className="mt-auto pt-1">
                  <Stamp tone="ok">Committed · Meena · 6:52pm</Stamp>
                </p>
              </article>
            </Reveal>
          </div>

          <p className="relative mt-3 text-right">
            <IllustrativeTag />
          </p>
        </div>

        {/* The line under it all */}
        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <div aria-hidden="true" className="rule-fade mx-auto mb-8 max-w-xs" />
            <p className="font-display text-[1.25rem] font-semibold tracking-tight text-ink-soft">
              The AI is the metabolism. People stay the mouth.
            </p>
            <p className="mt-2 text-[0.92rem] text-muted">Heavy lifting by machine, truth by name.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
