import { Container, SectionHead } from "../components/ui"
import { IconCompass, IconDocument, IconHardHat, IconHome } from "../components/icons"
import { Reveal } from "../components/Reveal"

const phases = [
  {
    marker: "DAY 0",
    title: "Site Survey",
    icon: IconCompass,
    body: "Walk the plot, speak what you see. A professional, branded survey PDF the same day. Free, even if you never pay us.",
  },
  {
    marker: "WEEKS 1–6",
    title: "Design & material spec",
    icon: IconDocument,
    body: "Every choice recorded with rates and alternatives. The spec becomes a contract everyone can actually read.",
  },
  {
    marker: "MONTHS 2–12",
    title: "Execution & site audit",
    icon: IconHardHat,
    body: "Daily capture, weekly reconciliation, progress that’s verified, not vibes-based.",
  },
  {
    marker: "HANDOVER",
    title: "Handover & reassurance",
    icon: IconHome,
    body: "The homeowner watched it happen honestly. Handover becomes a formality, not a fight.",
  },
] as const

/** Marigold milestone dot: sits on the spine (lg) or the left rail (mobile). */
function MilestoneDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`h-3 w-3 rounded-full border border-marigold-press bg-marigold ring-4 ring-canvas ${className}`}
    />
  )
}

export function Lifecycle() {
  return (
    <section id="lifecycle" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead
          eyebrow="The journey"
          title="The spine of the build, from empty plot to handover."
        />

        <div className="relative mt-12 lg:mt-16">
          {/* Continuous hairline spine (lg): dots land on it; fades out past the last milestone */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[37.5px] hidden h-px bg-[linear-gradient(to_right,var(--color-line-strong)_72%,transparent)] lg:block"
          />

          <ul className="grid max-w-2xl gap-10 lg:max-w-none lg:grid-cols-4 lg:gap-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <Reveal
                  key={phase.marker}
                  as="li"
                  delay={i * 90}
                  className="relative pl-9 lg:flex lg:flex-col lg:pl-0"
                >
                  {/* Mobile rail: dot + connector segment down to the next milestone */}
                  <MilestoneDot className="absolute left-0 top-[3px] lg:hidden" />
                  {i < phases.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-10 left-[5.5px] top-6 w-px bg-line-strong lg:hidden"
                    />
                  )}

                  {/* Mono phase marker: above the dot on lg */}
                  <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted lg:h-5">
                    {phase.marker}
                  </p>

                  {/* Dot row on the spine (lg only) */}
                  <div className="relative mt-3 hidden h-3 lg:block">
                    <MilestoneDot className="absolute left-0 top-0" />
                  </div>

                  <article className="mt-3 rounded-[14px] border border-line bg-card p-6 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_2px_3px_rgba(27,25,22,0.05),0_10px_32px_rgba(27,25,22,0.09)] lg:mt-6 lg:flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-sage-tint text-sage">
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-[0.68rem] tracking-[0.14em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[1.12rem] font-semibold leading-snug text-ink">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{phase.body}</p>
                  </article>
                </Reveal>
              )
            })}
          </ul>

          <Reveal delay={120}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-[0.95rem] leading-relaxed text-muted lg:mt-14">
              <span
                aria-hidden="true"
                className="mr-2.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-marigold"
              />
              Neev is the spine through all of it: the same record, growing from first measurement
              to final key.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
