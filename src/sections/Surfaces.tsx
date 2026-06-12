import type { ReactNode } from "react"
import { Reveal } from "../components/Reveal"
import { Container, Eyebrow, IllustrativeTag, Money, SectionHead } from "../components/ui"
import { IconCamera, IconCheck, IconCheckSeal, IconHome, IconMic, IconSun } from "../components/icons"

/* ----------------------------- shared caption ----------------------------- */

function Caption({
  tag,
  title,
  audience,
  children,
}: {
  tag: string
  title: string
  audience: string
  children: ReactNode
}) {
  return (
    <div className="mt-7">
      <Eyebrow>{tag}</Eyebrow>
      <h3 className="mt-2.5 text-[1.35rem] font-bold leading-snug text-ink">{title}</h3>
      <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">{audience}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{children}</p>
    </div>
  )
}

/* ------------------------- 1 · THE DESK (browser) ------------------------- */

const materialRows = [
  { item: "TMT 12mm", vendor: "SteelCo", amount: 84300, tone: "ok" as const, status: "Reconciled ✓" },
  { item: "PPC Cement", vendor: "Sharma Traders", amount: 19250, tone: "warn" as const, status: "2 slips pending" },
  { item: "M-Sand", vendor: "local", amount: 36000, tone: "ok" as const, status: "Reconciled ✓" },
]

function DeskMock() {
  return (
    <div className="w-full max-w-[420px] rounded-[18px] border border-line bg-card shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        <span className="mx-auto rounded-md bg-sand px-2.5 py-0.5 font-mono text-[0.62rem] text-muted">
          desk.neev.app
        </span>
        <IllustrativeTag />
      </div>

      {/* material register */}
      <div className="px-3.5 py-3">
        <div className="flex items-baseline justify-between">
          <p className="text-[0.8rem] font-semibold text-ink">Material register</p>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">This week</span>
        </div>

        <ul className="mt-2 divide-y divide-line border-y border-line">
          {materialRows.map((row) => (
            <li key={row.item} className="flex items-center gap-2.5 py-2">
              <span className="min-w-0 flex-1 truncate text-[0.72rem] text-ink">
                {row.item} <span className="text-muted">· {row.vendor}</span>
              </span>
              <Money amount={row.amount} className="shrink-0 text-[0.7rem] text-ink" />
              <span
                className={`shrink-0 rounded-full px-2 py-[2px] font-mono text-[0.6rem] whitespace-nowrap ${
                  row.tone === "ok" ? "bg-ok-tint text-ok" : "bg-warn-tint text-warn"
                }`}
              >
                {row.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[0.68rem] text-muted">Week total</span>
          <Money amount={139550} className="text-[0.72rem] font-semibold text-ink" />
        </div>
      </div>
    </div>
  )
}

/* -------------------------- 2 · THE SITE (phone) -------------------------- */

const waveHeights = [8, 14, 22, 12, 28, 18, 32, 24, 14, 26, 10, 18, 7]

function SiteMock() {
  return (
    <div className="w-[240px] max-w-full rounded-[18px] border-2 border-line bg-card shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <span className="mx-auto mt-2 block h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden="true" />

      <div className="px-3.5 pt-2 pb-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.62rem] tracking-wide text-muted">7:15 AM ब्रीफ़</p>
          <IconSun size={13} className="text-marigold-press" />
        </div>

        {/* mic capture */}
        <div className="mt-5 flex flex-col items-center">
          <span
            className="flex h-20 w-20 items-center justify-center rounded-full bg-marigold text-ink ring-4 ring-marigold-tint shadow-[0_1px_0_rgba(27,25,22,0.18),0_6px_16px_rgba(214,133,12,0.28)]"
            aria-hidden="true"
          >
            <IconMic size={30} />
          </span>
          <p className="mt-3 text-center text-[0.8rem] leading-snug text-ink">बोलकर दर्ज करें · Speak to record</p>
          <div className="mt-3 flex items-end gap-[3px]" aria-hidden="true">
            {waveHeights.map((h, i) => (
              <span key={i} className="w-[3px] rounded-full bg-sage/50" style={{ height: h }} />
            ))}
          </div>
        </div>

        {/* recent entries */}
        <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">Recent</p>
        <ul className="mt-1.5 space-y-1.5">
          <li className="flex items-center gap-2 rounded-[10px] border border-line px-2.5 py-2">
            <IconCheckSeal size={14} className="shrink-0 text-ok" />
            <span className="min-w-0 truncate text-[0.72rem] text-ink">50 bori cement</span>
            <span className="ml-auto shrink-0 font-mono text-[0.6rem] text-ok">✓ committed</span>
          </li>
          <li className="flex items-center gap-2 rounded-[10px] border border-line px-2.5 py-2">
            <IconCamera size={14} className="shrink-0 text-muted" />
            <span className="min-w-0 truncate text-[0.72rem] text-ink">Shuttering photo</span>
            <span className="ml-auto shrink-0 font-mono text-[0.6rem] text-muted">· 2m ago</span>
          </li>
        </ul>

        <IllustrativeTag className="mt-3 block text-center" />
      </div>
    </div>
  )
}

/* -------------------------- 3 · THE GLASS (phone) ------------------------- */

function GlassMock() {
  return (
    <div className="w-[240px] max-w-full rounded-[18px] border-2 border-line bg-card p-1.5 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <span className="mx-auto mt-1 mb-1.5 block h-1.5 w-1.5 rounded-full bg-line-strong" aria-hidden="true" />

      <div className="rounded-[12px] bg-sage-tint px-3 pt-3 pb-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[0.78rem] font-semibold text-ink">Your home this week</p>
          <IconHome size={14} className="text-sage" />
        </div>

        <p className="mt-4 font-display text-[1.08rem] font-bold leading-snug text-sage-press">
          Nothing needs you today ✓
        </p>

        <ul className="mt-4 space-y-3">
          <li>
            <p className="text-[0.75rem] font-medium text-ink">
              Kitchen <span className="text-muted">· tiling underway</span>
            </p>
            <div
              className="mt-1.5 flex h-16 items-center justify-center rounded-[8px] border border-line bg-card text-faint"
              aria-hidden="true"
            >
              <IconCamera size={18} />
            </div>
          </li>
          <li className="flex items-start gap-1.5">
            <IconCheck size={14} className="mt-[3px] shrink-0 text-sage-press" />
            <p className="text-[0.75rem] font-medium text-ink">
              Bedroom 2 <span className="text-muted">· wiring done, verified</span>
            </p>
          </li>
        </ul>

        <div className="rule-fade mt-4" />
        <p className="mt-2.5 font-mono text-[0.6rem] leading-relaxed text-muted">
          Updated yesterday · approved by your contractor
        </p>
        <IllustrativeTag className="mt-1.5 block" />
      </div>
    </div>
  )
}

/* --------------------------------- section -------------------------------- */

export function Surfaces() {
  return (
    <section id="product" className="bg-sand border-y border-line py-24 sm:py-32 scroll-mt-24">
      <Container>
        <SectionHead
          eyebrow="The product"
          title="One record. Three honest windows."
          lede="Neev is a single source of truth wearing three faces, each shaped for the person looking through it."
        />

        <ul className="mt-14 grid gap-14 sm:mt-16 sm:gap-16 lg:grid-cols-3 lg:gap-8">
          <li>
            <Reveal>
              <div className="mx-auto w-full max-w-md lg:max-w-none">
                <div className="flex items-end justify-center lg:min-h-[430px]">
                  <DeskMock />
                </div>
                <Caption tag="THE DESK" title="The command centre" audience="FOR THE OWNER & OFFICE">
                  Material specs, payment reconciliation, every active site at a glance, with every figure one tap
                  from its evidence.
                </Caption>
              </div>
            </Reveal>
          </li>

          <li>
            <Reveal delay={100}>
              <div className="mx-auto w-full max-w-md lg:max-w-none">
                <div className="flex items-end justify-center lg:min-h-[430px]">
                  <SiteMock />
                </div>
                <Caption tag="THE SITE" title="Built for gloves and glare" audience="FOR THE SITE TEAM">
                  Voice-first capture in Hindi or English, big targets for dusty thumbs, and the 7:15am brief that
                  starts the owner's day with three decisions, not three hundred messages.
                </Caption>
              </div>
            </Reveal>
          </li>

          <li>
            <Reveal delay={200}>
              <div className="mx-auto w-full max-w-md lg:max-w-none">
                <div className="flex items-end justify-center lg:min-h-[430px]">
                  <GlassMock />
                </div>
                <Caption tag="THE GLASS" title="The calm window" audience="FOR THE HOMEOWNER">
                  A room-by-room view built only from human-approved facts. Most days it says the best thing a build
                  can say: nothing needs you.
                </Caption>
              </div>
            </Reveal>
          </li>
        </ul>
      </Container>
    </section>
  )
}
