import { Container, Eyebrow, ButtonLink, IllustrativeTag, NeevMark, Stamp } from "../components/ui"
import { IconCamera, IconClipboard, IconDocument, IconMic, IconShield } from "../components/icons"
import { Reveal } from "../components/Reveal"

const MAILTO = "mailto:hello@neev.build?subject=Site%20Survey%20early%20access"

/* Mailto links can't go through ButtonLink (it routes non-hash paths via <Link>),
   so we mirror the primary button styles on a real <a> element. */
const btnPrimaryFull =
  "inline-flex w-full items-center justify-center gap-2 rounded-[10px] font-sans font-semibold leading-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage h-11 px-5 text-[0.95rem] bg-marigold text-ink shadow-[0_1px_0_rgba(27,25,22,0.18),0_6px_16px_rgba(214,133,12,0.28)] hover:bg-marigold-press hover:shadow-[0_1px_0_rgba(27,25,22,0.18),0_3px_10px_rgba(214,133,12,0.3)] active:translate-y-px"

const inputCls =
  "h-11 w-full rounded-[10px] border border-line bg-canvas px-4 font-mono text-[0.82rem] text-ink placeholder:text-faint disabled:cursor-not-allowed"

const labelCls = "mb-1.5 block font-sans text-[0.85rem] font-semibold text-ink-soft"

const steps = [
  {
    num: "01",
    icon: IconMic,
    title: "Walk & capture",
    body: "Pace the plot with your phone. Speak measurements and notes, snap corners, levels and road access.",
  },
  {
    num: "02",
    icon: IconClipboard,
    title: "Review the draft",
    body: "The AI structures your capture into a survey. You check and confirm it. Same rule as everywhere in Neev: you commit.",
  },
  {
    num: "03",
    icon: IconDocument,
    title: "Share the PDF",
    body: "A professional survey document with your firm's name on it. Send it to the client before you've left the plot.",
  },
]

const pdfDims = [
  { k: "Plot", v: "30 × 50 ft" },
  { k: "Orientation", v: "E" },
  { k: "Road", v: "24 ft" },
  { k: "Soil", v: "note: red, firm" },
]

/* --------------------------- branded PDF mock (right) --------------------------- */

function SurveyPdfMock() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-line bg-card shadow-[var(--shadow-lift)] -rotate-1">
      {/* letterhead band */}
      <div className="flex items-center gap-3 border-b border-line bg-sand px-5 py-4 sm:px-6">
        <NeevMark size={24} />
        <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Your firm's name · Site survey
        </p>
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
          Plot 14 · Whitefield (illustrative)
        </p>
        <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">
          Captured 10 Jun · 07:42 am
        </p>

        {/* skeleton body text */}
        <div className="mt-5 space-y-2.5" aria-hidden="true">
          <div className="rule-fade" />
          <div className="rule-fade w-[88%]" />
          <div className="rule-fade w-[72%]" />
        </div>

        {/* dimensions table */}
        <dl className="mt-5 overflow-hidden rounded-[6px] border border-line">
          {pdfDims.map((row, i) => (
            <div
              key={row.k}
              className={`flex items-baseline justify-between gap-4 px-3.5 py-2 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">{row.k}</dt>
              <dd className="font-mono text-[0.72rem] tabular-nums text-ink">{row.v}</dd>
            </div>
          ))}
        </dl>

        {/* photo slots */}
        <ul className="mt-5 grid grid-cols-3 gap-2.5">
          {["NE corner", "Road face", "Level"].map((slot) => (
            <li
              key={slot}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-[6px] bg-sage-tint text-sage"
            >
              <IconCamera size={18} />
              <span className="font-mono text-[0.56rem] uppercase tracking-[0.1em]">{slot}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-2" aria-hidden="true">
          <div className="rule-fade w-[64%]" />
          <div className="rule-fade w-[46%]" />
        </div>

        {/* footer */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
          <Stamp tone="sage">Survey · Day 0</Stamp>
          <IllustrativeTag />
        </div>
      </div>
    </div>
  )
}

/* --------------------------------- the page --------------------------------- */

export function SiteSurvey() {
  return (
    <>
      {/* ---------------------------------- hero ---------------------------------- */}
      <section className="relative overflow-hidden bg-canvas pt-36 pb-16 sm:pt-44">
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse 70% 70% at 42% 30%, black 30%, transparent 74%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 42% 30%, black 30%, transparent 74%)",
          }}
        />
        <Container className="relative">
          <Reveal>
            <Eyebrow tone="marigold">Free tool · no login, no card</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-[3.4rem]">
              Walk the plot. Speak what you see. Get the PDF.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-muted">
              The Site Survey is a free, public tool for Day 0 of any project. Capture a plot the way you'd
              describe it to a colleague, and get a clean, professionally branded survey PDF in minutes.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------- three steps ------------------------------- */}
      <section className="py-12">
        <Container>
          <h2 className="sr-only">How the free tool works</h2>
          <ul className="grid gap-5 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.num} delay={i * 90}>
                <div className="h-full rounded-[14px] border border-line bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong">
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-sage-tint text-sage"
                      aria-hidden="true"
                    >
                      <step.icon size={19} />
                    </span>
                    <span className="font-mono text-[0.72rem] tabular-nums text-muted">{step.num}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[1.15rem] font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* -------------------------------- tool panel -------------------------------- */}
      <section className="py-12">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* ------------------------------ survey builder ------------------------------ */}
            <Reveal>
              <div className="folded-card p-8">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pr-6">
                  <h2 className="font-display text-[1.4rem] font-bold text-ink">Survey builder</h2>
                  <span className="proposed px-2 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.13em] text-muted">
                    Preview · opens with early access
                  </span>
                </div>

                <form className="mt-6" aria-label="Survey builder preview" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div>
                      <label className={labelCls} htmlFor="survey-location">
                        Plot location
                      </label>
                      <input
                        id="survey-location"
                        type="text"
                        className={inputCls}
                        placeholder="Whitefield, Bengaluru (illustrative)"
                        disabled
                        aria-disabled="true"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelCls} htmlFor="survey-dimensions">
                          Plot dimensions
                        </label>
                        <input
                          id="survey-dimensions"
                          type="text"
                          className={inputCls}
                          placeholder="30 × 50 ft"
                          disabled
                          aria-disabled="true"
                        />
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="survey-road">
                          Road access &amp; width
                        </label>
                        <input
                          id="survey-road"
                          type="text"
                          className={inputCls}
                          placeholder="East-facing · 24 ft"
                          disabled
                          aria-disabled="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="survey-notes">
                        Site notes (or speak them)
                      </label>
                      <div className="relative">
                        <textarea
                          id="survey-notes"
                          rows={4}
                          className="w-full rounded-[10px] border border-line bg-canvas px-4 py-3 pr-12 font-mono text-[0.82rem] leading-relaxed text-ink placeholder:text-faint disabled:cursor-not-allowed"
                          placeholder="Slight slope to the rear, neighbour wall on the south side…"
                          disabled
                          aria-disabled="true"
                        />
                        <span
                          className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-sage-tint text-sage"
                          aria-hidden="true"
                        >
                          <IconMic size={16} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 flex items-start gap-2.5 rounded-[10px] bg-sage-tint px-3.5 py-3 text-[0.85rem] leading-snug text-sage-press">
                    <span className="mt-0.5 shrink-0 text-sage" aria-hidden="true">
                      <IconShield size={16} />
                    </span>
                    The live tool is rolling out with early access; every field also works by voice.
                  </p>

                  <a href={MAILTO} className={`${btnPrimaryFull} mt-6`}>
                    Get the tool when it opens
                  </a>
                </form>
              </div>
            </Reveal>

            {/* --------------------------------- PDF mock --------------------------------- */}
            <Reveal delay={120}>
              <div className="overflow-hidden px-2 py-3 lg:px-4">
                <div className="mx-auto w-full max-w-md">
                  <SurveyPdfMock />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* -------------------------------- honesty note ------------------------------- */}
      <section className="py-8">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-[0.95rem] leading-relaxed text-muted">
              Why free? Because Day 0 is where trust starts. A clean survey costs you nothing and shows you
              exactly how Neev treats evidence. If it earns your next step, we both win.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------- CTA strip --------------------------------- */}
      <section className="pb-24 pt-4">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink to="/#book-demo" size="lg">
                Book a demo
              </ButtonLink>
              <ButtonLink to="/" variant="ghost" size="lg">
                Back to the product
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
