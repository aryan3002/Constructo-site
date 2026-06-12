import { Reveal } from "../components/Reveal"
import { Container, SectionHead } from "../components/ui"

const faqs: { q: string; a: string }[] = [
  {
    q: "Does Neev replace WhatsApp?",
    a: "No, and that's deliberate. Your team keeps talking in WhatsApp and voice notes, the way every Indian site already runs. Neev captures from that flow and turns it into a structured record. We didn't build a product that depends on changing people's habits.",
  },
  {
    q: "Does Neev move my money?",
    a: "Never. Neev tracks and reconciles payments against evidence: slips, photos, entries. It holds no wallet and initiates no transactions. Your money stays wherever it is today.",
  },
  {
    q: "Does the AI make decisions?",
    a: "No. The AI proposes: draft entries, summaries, flags. A named human commits every fact, and every approval is a person's. The heavy lifting is machine; the pen stays in your hand.",
  },
  {
    q: "Our site runs in Hindi. Will it work?",
    a: "That's the default we built for. Voice capture works in Hindi, English, and the mix in between. '50 bori aa gaya' is a perfectly good input.",
  },
  {
    q: "What exactly does the homeowner see?",
    a: "A calm, room-by-room view assembled only from facts a human has approved. No raw AI output, no live site chaos. Most days it simply says: nothing needs you today.",
  },
  {
    q: "What happens when the AI gets something wrong?",
    a: "It never becomes truth. Drafts stay visibly drafts (dashed, unconfirmed) until a person commits them. A wrong draft gets corrected or discarded, and totals only ever count committed entries.",
  },
  {
    q: "Do my supervisors need training?",
    a: "If they can send a voice note, they can use Neev. Capture is speaking and photographing; the structure happens behind the scenes.",
  },
  {
    q: "Who owns the project data?",
    a: "You do. Access is role-based (a vendor never sees your margins) and you can export your full record, evidence included, whenever you want.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-canvas py-24 sm:py-32">
      <Container>
        <SectionHead eyebrow="FAQ" title="Asked, answered, honestly." />

        <ul className="mt-12 max-w-3xl border-t border-line sm:mt-16">
          {faqs.map((item, i) => (
            <Reveal key={item.q} as="li" delay={Math.min(i * 70, 280)}>
              <details className="group border-b border-line" open={i === 0}>
                <summary className="group/sum flex cursor-pointer list-none items-start justify-between gap-5 py-5 font-display text-[1.08rem] font-semibold leading-snug text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="w-7 shrink-0 font-mono text-[0.72rem] font-medium tracking-[0.08em] text-muted"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-6 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-200 group-hover/sum:border-line-strong group-hover/sum:text-ink group-open:rotate-45 group-open:border-line-strong group-open:text-ink"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 1.5v9M1.5 6h9" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-5 pl-11 pr-2 text-[1rem] leading-relaxed text-muted sm:pr-11">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
