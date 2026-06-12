import { Link } from "react-router-dom"
import { ButtonLink, Container, IllustrativeTag, SectionHead, Stamp } from "../components/ui"
import { IconCheck, IconCheckSeal, IconHardHat, IconLayers } from "../components/icons"
import { Reveal } from "../components/Reveal"

const principles = [
  {
    icon: IconLayers,
    title: "Per active site",
    line: "Pay for sites under construction, not for every person who opens the app.",
  },
  {
    icon: IconHardHat,
    title: "Supervisor seats are free",
    line: "The people doing the capturing never cost you a seat. Ever.",
  },
  {
    icon: IconCheckSeal,
    title: "AI included, not upsold",
    line: "Capture, drafting and the morning brief are the product, not a premium add-on.",
  },
]

const included = [
  "Unlimited supervisor seats",
  "The Desk, The Site & The Glass",
  "AI capture + the 7:15am brief",
  "Evidence vault & reconciliation",
  "Free Site Survey tool",
]

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead
          eyebrow="Pricing"
          title="Priced like a site cost, not a software tax."
          lede="Early-access pricing is set in conversation, not on a rate card. But the principles are already fixed, and they won't change."
        />

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-16">
          {/* Principles: ledger rows */}
          <ul className="order-2 divide-y divide-line border-y border-line lg:order-1">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100} className="flex gap-4 py-7 sm:gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-sage-tint text-sage">
                  <p.icon size={21} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-ink">{p.title}</h3>
                    <span className="font-mono text-[0.66rem] tracking-[0.14em] text-faint" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 leading-relaxed text-muted">{p.line}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Illustrative tier */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="folded-card p-8">
              <div className="flex items-start justify-between gap-4 pr-5">
                <p className="pt-1 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-muted">
                  PER ACTIVE SITE / MONTH
                </p>
                <Stamp tone="warn">Early access</Stamp>
              </div>

              <p className="mt-5 font-mono text-[3.1rem] font-medium leading-none tracking-tight text-ink">
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
                <ButtonLink to="/#book-demo" className="w-full">
                  Talk to us
                </ButtonLink>
              </div>
              <p className="mt-4 text-center">
                <Link
                  to="/pricing"
                  className="text-[0.95rem] font-medium text-sage transition-colors duration-150 hover:text-sage-press"
                >
                  See pricing details →
                </Link>
              </p>

              <div className="mt-6 text-center">
                <IllustrativeTag />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
