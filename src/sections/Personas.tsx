import type { ComponentType } from "react"
import { Container, SectionHead } from "../components/ui"
import { IconCompass, IconHardHat, IconWallet, IconHome } from "../components/icons"
import { Reveal } from "../components/Reveal"

type Persona = {
  icon: ComponentType<{ size?: number }>
  role: string
  promise: string
  detail: string
}

const personas: Persona[] = [
  {
    icon: IconCompass,
    role: "OWNER / BUILDER",
    promise: "Your 3 decisions for the day, from evidence, before 7:15am.",
    detail: "BRIEF · DECIDE · DONE BY CHAI",
  },
  {
    icon: IconHardHat,
    role: "SITE TEAM",
    promise: "Speak it once. The record writes itself, no evening data entry.",
    detail: "VOICE IN · WORK ON",
  },
  {
    icon: IconWallet,
    role: "ACCOUNTANT",
    promise: "Every rupee traced to a slip, a photo and a name.",
    detail: "RECONCILE IN HOURS, NOT WEEKENDS",
  },
  {
    icon: IconHome,
    role: "HOMEOWNER",
    promise: "Relax. Nothing needs you today. Your home, honestly.",
    detail: "CALM IS THE DEFAULT",
  },
]

export function Personas() {
  return (
    <section id="for-builders" className="bg-sand border-y border-line py-24 sm:py-32 scroll-mt-24">
      <Container>
        <SectionHead eyebrow="Who it's for" title="Four people. Four mornings. One record." />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.role} as="li" delay={i * 90} className="h-full">
                <article className="flex h-full flex-col rounded-[14px] border border-line bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-sand text-ink-soft">
                      <Icon size={21} />
                    </span>
                    <span className="font-mono text-[0.68rem] tabular-nums text-faint" aria-hidden="true">
                      07:15
                    </span>
                  </div>

                  <p className="mt-5 font-mono text-[0.68rem] font-medium uppercase tracking-widest text-sage">
                    {p.role}
                  </p>

                  <h3 className="mt-2 text-[1.05rem] font-semibold leading-snug text-ink">{p.promise}</h3>

                  <div className="mt-auto pt-5">
                    <div className="rule-fade" aria-hidden="true" />
                    <p className="mt-3 font-mono text-[0.75rem] tracking-[0.06em] text-muted">{p.detail}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
