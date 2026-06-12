import { ButtonLink, Container, Eyebrow, IllustrativeTag, NeevMark, Stamp } from "../components/ui"
import { IconArrowRight } from "../components/icons"
import { Reveal } from "../components/Reveal"

/* ------------------------------ PDF-page mock ------------------------------ */

function SurveyPdfMock() {
  return (
    <div className="relative mx-auto w-full max-w-[310px]">
      {/* decorative second page behind, for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2.5 translate-y-3 rotate-[2.75deg] rounded-[10px] border border-line bg-card opacity-50 shadow-[var(--shadow-card)]"
      />

      {/* page one */}
      <div className="relative rotate-1 overflow-hidden rounded-[10px] border border-line bg-card shadow-[var(--shadow-card)]">
        {/* header band: placeholder firm mark */}
        <div className="flex items-center justify-between gap-3 border-b border-line bg-sand px-4 py-3 sm:px-5">
          <span className="flex min-w-0 items-center gap-2">
            <NeevMark size={16} />
            <span className="truncate font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em] text-muted">
              Your firm&rsquo;s name
            </span>
          </span>
          <span className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">PDF</span>
        </div>

        <div className="px-4 py-5 sm:px-5">
          <p className="font-mono text-[0.64rem] font-medium tracking-[0.08em] text-ink sm:text-[0.7rem]">
            SITE SURVEY · PLOT 14, illustrative
          </p>
          <p className="mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            Surveyed 06 Jun · 09:40 am
          </p>

          {/* skeleton body lines */}
          <div aria-hidden="true" className="mt-5 space-y-3">
            <div className="rule-fade" />
            <div className="rule-fade w-11/12" />
            <div className="rule-fade w-4/5" />
            <div className="rule-fade w-11/12" />
          </div>

          {/* dimensions table */}
          <ul className="mt-6 divide-y divide-line border-y border-line">
            <li className="flex items-baseline justify-between gap-3 py-2">
              <span className="text-[0.78rem] text-muted">Plot</span>
              <span className="font-mono text-[0.72rem] tabular-nums text-ink">30 × 50 ft</span>
            </li>
            <li className="flex items-baseline justify-between gap-3 py-2">
              <span className="text-[0.78rem] text-muted">Road access</span>
              <span className="font-mono text-[0.72rem] tabular-nums text-ink">E, 24 ft</span>
            </li>
            <li className="flex items-baseline justify-between gap-3 py-2">
              <span className="text-[0.78rem] text-muted">Water point</span>
              <span className="font-mono text-[0.72rem] text-ink">On plot, NW</span>
            </li>
          </ul>

          {/* footer of the page */}
          <div className="mt-6 flex items-end justify-between gap-3">
            <Stamp tone="sage">Survey · Day 0</Stamp>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">Page 1 of 2</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <IllustrativeTag />
      </div>
    </div>
  )
}

/* --------------------------------- section --------------------------------- */

export function SurveyCallout() {
  return (
    <section id="survey" className="scroll-mt-24 bg-canvas pt-10 pb-24 sm:pb-32">
      <Container>
        <div className="folded-card p-8 sm:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* left: pitch */}
            <div>
              <Reveal>
                <Eyebrow tone="marigold">Free tool · no login, no card</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 font-display text-[1.8rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.2rem]">
                  Start with a free Site Survey.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  Walk the plot with your phone, note what matters, and get a clean, professionally branded survey PDF
                  in minutes. Yours to keep and share, whether or not you ever pay us a rupee.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ButtonLink to="/site-survey" size="lg">
                    Try it free
                    <IconArrowRight size={18} />
                  </ButtonLink>
                  <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
                    Takes about 10 minutes on site
                  </p>
                </div>
              </Reveal>
            </div>

            {/* right: survey PDF preview */}
            <Reveal delay={160} className="min-w-0">
              <SurveyPdfMock />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
