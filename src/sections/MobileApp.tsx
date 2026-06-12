import { Container, Eyebrow } from "../components/ui"
import { Reveal } from "../components/Reveal"

function PhoneMockup() {
  return (
    <div className="mx-auto w-40 sm:w-52" style={{ filter: "drop-shadow(0 32px 64px rgba(27,25,22,0.22))" }}>
      <svg
        viewBox="0 0 168 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: "100%", height: "auto" }}
      >
        {/* Phone shell */}
        <rect width="168" height="340" rx="30" fill="var(--color-ink)" />

        {/* Side buttons */}
        <rect x="-2.5" y="88" width="4" height="22" rx="2" fill="var(--color-ink-soft)" />
        <rect x="-2.5" y="118" width="4" height="22" rx="2" fill="var(--color-ink-soft)" />
        <rect x="166.5" y="100" width="4" height="28" rx="2" fill="var(--color-ink-soft)" />

        {/* Screen */}
        <rect x="8" y="10" width="152" height="320" rx="24" fill="var(--color-canvas)" />

        {/* Dynamic island */}
        <rect x="56" y="16" width="56" height="12" rx="6" fill="var(--color-ink)" />

        {/* ─── Status bar ─── */}
        <text x="20" y="36" fontFamily="monospace" fontSize="8" fontWeight="600" fill="var(--color-ink)">7:15</text>
        <rect x="128" y="30" width="16" height="8" rx="2" stroke="var(--color-ink)" strokeWidth="1.2" fill="none" />
        <rect x="144" y="33" width="2" height="2" rx="0.5" fill="var(--color-ink)" />
        <rect x="129" y="31" width="12" height="6" rx="1" fill="var(--color-ink)" />

        {/* ─── App header ─── */}
        <g transform="translate(16,48) scale(0.3125)">
          <rect width="96" height="96" rx="21.5" fill="var(--color-ink)" />
          <g transform="translate(19.2,19.2) scale(0.576)">
            <circle cx="50" cy="28" r="5.5" fill="var(--color-marigold)" />
            <path d="M29 67 L50 45 L71 67" fill="none" stroke="var(--color-marigold)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="24" y="74" width="52" height="8" rx="4" fill="var(--color-marigold)" />
          </g>
        </g>
        <text x="52" y="61" fontFamily="sans-serif" fontSize="10.5" fontWeight="700" fill="var(--color-ink)">Neev</text>
        <text x="52" y="72" fontFamily="monospace" fontSize="6.5" fill="var(--color-muted)">Tuesday · Day 142</text>

        {/* Divider */}
        <line x1="16" y1="90" x2="152" y2="90" stroke="var(--color-line)" strokeWidth="1" />
        <text x="16" y="106" fontFamily="monospace" fontSize="6.5" fontWeight="600" letterSpacing="0.1em" fill="var(--color-faint)">TODAY'S DECISIONS</text>

        {/* ─── DECIDE card ─── */}
        <rect x="16" y="112" width="136" height="80" rx="10" fill="var(--color-card)" stroke="var(--color-line)" strokeWidth="1" />
        <rect x="24" y="120" width="38" height="10" rx="3" fill="var(--color-marigold-tint)" />
        <text x="28" y="128.5" fontFamily="monospace" fontSize="5.5" fontWeight="600" letterSpacing="0.05em" fill="var(--color-warn)">DECIDE</text>
        <text x="24" y="145" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="var(--color-ink)">Approve steel top-up</text>
        <text x="24" y="156" fontFamily="monospace" fontSize="6.5" fill="var(--color-muted)">12mm TMT · ₹84,300</text>
        <rect x="24" y="165" width="48" height="17" rx="5.5" fill="var(--color-marigold)" />
        <text x="48" y="177" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" fill="var(--color-ink)" textAnchor="middle">Approve</text>
        <rect x="78" y="165" width="34" height="17" rx="5.5" fill="none" stroke="var(--color-line-strong)" strokeWidth="1" />
        <text x="95" y="177" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="var(--color-muted)" textAnchor="middle">Hold</text>

        {/* ─── UPDATE card ─── */}
        <rect x="16" y="202" width="136" height="48" rx="10" fill="var(--color-card)" stroke="var(--color-line)" strokeWidth="1" />
        <rect x="24" y="210" width="36" height="10" rx="3" fill="var(--color-sage-tint)" />
        <text x="28" y="218.5" fontFamily="monospace" fontSize="5.5" fontWeight="600" letterSpacing="0.05em" fill="var(--color-sage)">UPDATE</text>
        <text x="24" y="234" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" fill="var(--color-ink)">Electrician returns Thu</text>
        <text x="24" y="244" fontFamily="monospace" fontSize="6.5" fill="var(--color-muted)">Ravi S. · conduit work</text>

        {/* ─── DONE card ─── */}
        <rect x="16" y="260" width="136" height="48" rx="10" fill="var(--color-card)" stroke="var(--color-line)" strokeWidth="1" />
        <rect x="24" y="268" width="28" height="10" rx="3" fill="var(--color-ok-tint)" />
        <text x="28" y="276.5" fontFamily="monospace" fontSize="5.5" fontWeight="600" letterSpacing="0.05em" fill="var(--color-ok)">DONE</text>
        <text x="24" y="292" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" fill="var(--color-ink)">Cement delivery verified</text>
        <text x="24" y="302" fontFamily="monospace" fontSize="6.5" fill="var(--color-muted)">50 bori · matches PO</text>

        {/* Home indicator */}
        <rect x="64" y="325" width="40" height="3" rx="1.5" fill="var(--color-ink)" fillOpacity="0.2" />
      </svg>
    </div>
  )
}

function AppleLogoIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
      {/* Leaf */}
      <path
        d="M13.8 5.2c.6-.8 1.5-1.3 2.2-1.3.1 1.1-.4 2.2-1.1 2.9-.6.7-1.6 1.1-2.2.5-.1-1 .5-1.7 1.1-2.1z"
        fill="var(--color-canvas)"
      />
      {/* Apple */}
      <path
        d="M15 8c-1 0-2 .7-3 .7S10 8 8.5 8C6 8 3.5 10 3.5 13.5c0 2.4.9 4.9 2.3 6.7 1 1.4 2 2.3 3.2 2.3s1.5-.7 2.9-.7 1.7.7 2.9.7 2.2-1.1 3.2-2.5c1-1.5 1.5-3 1.5-3.1-2.7-1-2.7-4.1-2.7-4.1 0-2.5 2.2-3.8 2.5-3.9C17.8 7 16 8 15 8z"
        fill="var(--color-canvas)"
      />
    </svg>
  )
}

function PlayLogoIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      {/* 4-color Google Play triangle */}
      {/* Upper-left quadrilateral: green */}
      <path d="M2 1L13 8L13 11L2 11Z" fill="#34A853" />
      {/* Upper-right triangle: blue */}
      <path d="M13 8L18 11L13 11Z" fill="#4285F4" />
      {/* Lower-left quadrilateral: red */}
      <path d="M2 11L13 11L13 14L2 21Z" fill="#EA4335" />
      {/* Lower-right triangle: yellow */}
      <path d="M13 11L18 11L13 14Z" fill="#FBBC05" />
    </svg>
  )
}

function AppStoreBadge() {
  return (
    <div
      className="inline-flex cursor-default select-none items-center gap-3.5 rounded-[14px] bg-ink px-5 py-3.5 opacity-60"
      role="img"
      aria-label="Coming soon on the App Store"
    >
      <AppleLogoIcon />
      <div>
        <p className="mb-0.5 font-mono text-[0.58rem] uppercase leading-none tracking-[0.15em] text-[rgba(243,239,230,0.5)]">
          Download on the
        </p>
        <p className="font-display text-[1rem] font-bold leading-tight text-canvas">App Store</p>
      </div>
    </div>
  )
}

function PlayStoreBadge() {
  return (
    <div
      className="inline-flex cursor-default select-none items-center gap-3.5 rounded-[14px] bg-ink px-5 py-3.5 opacity-60"
      role="img"
      aria-label="Coming soon on Google Play"
    >
      <PlayLogoIcon />
      <div>
        <p className="mb-0.5 font-mono text-[0.58rem] uppercase leading-none tracking-[0.15em] text-[rgba(243,239,230,0.5)]">
          Get it on
        </p>
        <p className="font-display text-[1rem] font-bold leading-tight text-canvas">Google Play</p>
      </div>
    </div>
  )
}

export function MobileApp() {
  return (
    <section className="border-b border-line bg-sand py-20 sm:py-28">
      <Container className="text-center">
        <Reveal>
          <Eyebrow>Coming soon</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-[2rem] font-bold leading-[1.12] text-ink sm:text-[2.6rem]">
            Your project, in your pocket
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Native iOS and Android apps are on the way, built for the site. Log decisions, capture photos, and see the day's priorities from anywhere on the project.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="my-12 flex justify-center">
            <PhoneMockup />
          </div>
        </Reveal>

        {/* "Coming soon" pill above badges */}
        <Reveal delay={300}>
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-canvas px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden="true" />
              In development
            </span>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>
        </Reveal>

        <Reveal delay={440}>
          <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
            Early access users get the app first
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
