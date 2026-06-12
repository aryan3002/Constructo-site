import { Container, Eyebrow } from "../components/ui"
import { Reveal } from "../components/Reveal"

/* Button classes mirror ButtonLink variants `primary-on-ink` / `ghost-on-ink`
   (size lg) from components/ui; plain <a> needed here because mailto: is
   neither a hash anchor nor a router path. */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-sans font-semibold leading-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:opacity-50 h-[52px] px-7 text-[1.05rem]"
const btnPrimaryOnInk =
  "bg-marigold text-ink shadow-[0_1px_0_rgba(0,0,0,0.3),0_8px_24px_rgba(240,162,31,0.25)] hover:bg-marigold-press active:translate-y-px"
const btnGhostOnInk =
  "border border-[rgba(243,239,230,0.3)] text-canvas hover:border-canvas hover:bg-[rgba(243,239,230,0.08)]"

export function FinalCta() {
  return (
    <section
      id="book-demo"
      className="relative overflow-hidden border-b border-[rgba(243,239,230,0.14)] bg-ink py-24 text-canvas sm:py-32 scroll-mt-24"
    >
      {/* faint marigold warmth rising from below the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(760px_460px_at_50%_112%,rgba(240,162,31,0.07),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(243,239,230,0.12)_18%,rgba(243,239,230,0.12)_82%,transparent)]"
      />

      <Container className="relative text-center">
        {/* foundation mark: the Neev layers, settling onto marigold */}
        <Reveal>
          <div aria-hidden="true" className="mb-7 flex flex-col items-center gap-[5px]">
            <span className="h-[3px] w-7 rounded-full bg-[rgba(243,239,230,0.28)]" />
            <span className="h-[3px] w-9 rounded-full bg-[rgba(243,239,230,0.5)]" />
            <span className="h-[3px] w-11 rounded-full bg-marigold" />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Eyebrow tone="canvas">Early access</Eyebrow>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[2.2rem] font-bold leading-[1.1] tracking-tight text-canvas sm:text-[3rem]">
            <span lang="hi" className="font-sans font-bold text-marigold">
              नींव
            </span>{" "}
            means foundation. Give your next project one.
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-5 max-w-xl text-[1.08rem] leading-relaxed text-[rgba(243,239,230,0.72)]">
            Book a 30-minute demo, or get early access for your next project. We onboard early sites
            personally, a few at a time.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:hello@neev.build?subject=Neev%20demo"
              className={`${btnBase} ${btnPrimaryOnInk} w-full sm:w-auto`}
            >
              Book a demo
            </a>
            <a
              href="mailto:hello@neev.build?subject=Early%20access"
              className={`${btnBase} ${btnGhostOnInk} w-full sm:w-auto`}
            >
              Get early access
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-widest text-[rgba(243,239,230,0.5)]">
            Pre-launch · Onboarding a few sites at a time · hello@neev.build
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
