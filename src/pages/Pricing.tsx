import { Link } from "react-router-dom"
import { Container, Eyebrow, IllustrativeTag, Stamp } from "../components/ui"
import {
  IconArrowRight,
  IconCheck,
  IconCheckSeal,
  IconDocument,
  IconHardHat,
  IconLayers,
} from "../components/icons"
import { Reveal } from "../components/Reveal"

const MAILTO = "mailto:hello@neev.build?subject=Neev%20early-access%20pricing"

/* Mailto links can't go through ButtonLink (it routes non-hash paths via <Link>),
   so we mirror the primary / ghost button styles on real <a> elements. */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-sans font-semibold leading-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
const btnPrimaryLg =
  `${btnBase} h-[52px] px-7 text-[1.05rem] bg-marigold text-ink shadow-[0_1px_0_rgba(27,25,22,0.18),0_6px_16px_rgba(214,133,12,0.28)] hover:bg-marigold-press hover:shadow-[0_1px_0_rgba(27,25,22,0.18),0_3px_10px_rgba(214,133,12,0.3)] active:translate-y-px`

const principles = [
  {
    icon: IconLayers,
    title: "Per active site",
    line: "Pay for sites under construction, not a per-user license that punishes you for inviting your team.",
  },
  {
    icon: IconHardHat,
    title: "Supervisor seats free",
    line: "Capture is the lifeblood of the record. We will never tax the people doing it.",
  },
  {
    icon: IconCheckSeal,
    title: "AI included",
    line: "Drafting, structuring and the 7:15am brief are the product, never a paid add-on.",
  },
  {
    icon: IconDocument,
    title: "Leave with everything",
    line: "Cancel anytime and export your full record, evidence included. It's yours.",
  },
]

const included = [
  "Unlimited supervisor seats",
  "The Desk, The Site & The Glass",
  "AI capture + the 7:15am morning brief",
  "Evidence vault & payment reconciliation",
  "Homeowner app for every project",
  "Free Site Survey tool",
]

const faqs = [
  {
    q: "What counts as an active site?",
    a: "A site where work is happening and the record is live that month. Finished or paused sites can be archived free; the record stays readable and exportable.",
  },
  {
    q: "Is the homeowner's app extra?",
    a: "No. The Glass ships with every active site. A calmer client is part of the product, not a premium.",
  },
  {
    q: "Will early-access builders keep their pricing?",
    a: "Yes. Whatever we agree with you in early access holds when we publish a rate card.",
  },
]

export function Pricing() {
  return (
    <>
      {/* ------------------------------- page hero ------------------------------ */}
      <section className="bg-canvas pb-16 pt-36 sm:pt-44">
        <Container>
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]">
              Simple, honest, per-site.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-muted">
              Early-access pricing is set in conversation, not on a rate card; every builder's
              volume is different. But how it works is already fixed, and it won't change after
              launch.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------- principles band --------------------------- */}
      <section className="border-y border-line bg-sand py-16">
        <Container>
          <h2 className="sr-only">How the pricing works</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-[14px] border border-line bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-sage-tint text-sage">
                    <p.icon size={21} />
                  </div>
                  <h3 className="mt-5 font-display text-[1.12rem] font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.line}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* --------------------------------- the tier ------------------------------ */}
      <section className="bg-canvas py-20">
        <Container>
          <h2 className="sr-only">The tier</h2>
          <Reveal className="mx-auto max-w-lg">
            <div className="folded-card p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4 pr-5">
                <p className="pt-1 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-muted">
                  PER ACTIVE SITE / MONTH
                </p>
                <Stamp tone="warn">Early access</Stamp>
              </div>

              <p className="mt-6 font-mono text-[3.1rem] font-medium leading-none tracking-tight text-ink">
                ₹{" "}
                <span
                  aria-hidden="true"
                  className="inline-block h-[5px] w-10 translate-y-[-0.55rem] rounded-full bg-line-strong"
                />
                <span className="sr-only">price to be set together</span>
              </p>
              <p className="mt-2.5 text-[0.95rem] text-muted">set with you during early access</p>

              <div className="rule-fade my-7" role="presentation" />

              <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-muted">
                Included
              </p>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck size={16} className="mt-[0.3rem] shrink-0 text-sage" />
                    <span className="text-[0.98rem] leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a href={MAILTO} className={`${btnPrimaryLg} w-full`}>
                  Talk to us about early access
                </a>
              </div>

              <div className="mt-6 text-center">
                <IllustrativeTag />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-center font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
              No per-user math · No AI upsell · No lock-in
            </p>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------- mini-FAQ ------------------------------ */}
      <section className="bg-canvas py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-[1.7rem] font-bold leading-tight text-ink sm:text-[2rem]">
                The fine print, in plain language.
              </h2>
            </Reveal>
            <div className="mt-8 border-t border-line">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={80 + i * 80}>
                  <details className="group border-b border-line">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-sans text-[1.05rem] font-semibold text-ink transition-colors duration-150 hover:text-sage-press [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <IconArrowRight
                        size={17}
                        className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-90"
                      />
                    </summary>
                    <p className="max-w-prose pb-6 pr-8 leading-relaxed text-muted">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------ closing strip ---------------------------- */}
      <section className="bg-canvas pb-24">
        <Container>
          <Reveal>
            <div className="rounded-[18px] border border-line bg-sand p-10 text-center">
              <h2 className="mx-auto max-w-xl font-display text-[1.6rem] font-bold leading-snug text-ink">
                Want a number? Let's talk about your sites.
              </h2>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href={MAILTO} className={`${btnPrimaryLg} w-full sm:w-auto`}>
                  Book a pricing call
                </a>
                <Link
                  to="/"
                  className={`${btnBase} h-[52px] w-full px-7 text-[1.05rem] text-ink-soft hover:bg-canvas hover:text-ink sm:w-auto`}
                >
                  Back to the product
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
