import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "./Reveal"

/* ---------------------------------- layout --------------------------------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

/* ---------------------------------- brand ---------------------------------- */

export function NeevMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" focusable="false">
      <rect width="96" height="96" rx="21.5" fill="var(--color-ink)" />
      <g transform="translate(19.2,19.2) scale(0.576)">
        <circle cx="50" cy="28" r="5.5" fill="var(--color-marigold)" />
        <path d="M29 67 L50 45 L71 67" fill="none" stroke="var(--color-marigold)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="24" y="74" width="52" height="8" rx="4" fill="var(--color-marigold)" />
      </g>
    </svg>
  )
}

export function Wordmark({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <NeevMark size={size} />
      <span className="font-display text-[1.35rem] font-bold tracking-tight text-ink">Neev</span>
    </span>
  )
}

/* --------------------------------- buttons --------------------------------- */

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-sans font-semibold leading-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:opacity-50"

const btnVariants = {
  primary:
    "bg-marigold text-ink shadow-[0_1px_0_rgba(27,25,22,0.18),0_6px_16px_rgba(214,133,12,0.28)] hover:bg-marigold-press hover:shadow-[0_1px_0_rgba(27,25,22,0.18),0_3px_10px_rgba(214,133,12,0.3)] active:translate-y-px",
  secondary:
    "border border-line-strong bg-card text-ink shadow-card hover:border-ink-soft hover:bg-canvas active:translate-y-px",
  ghost: "text-ink-soft hover:bg-sand hover:text-ink",
  /* for use on the dark ink final-CTA band */
  "primary-on-ink":
    "bg-marigold text-ink shadow-[0_1px_0_rgba(0,0,0,0.3),0_8px_24px_rgba(240,162,31,0.25)] hover:bg-marigold-press active:translate-y-px",
  "ghost-on-ink": "border border-[rgba(243,239,230,0.3)] text-canvas hover:border-canvas hover:bg-[rgba(243,239,230,0.08)]",
} as const

const btnSizes = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[52px] px-7 text-[1.05rem]",
  sm: "h-9 px-4 text-[0.875rem]",
} as const

type BtnVariant = keyof typeof btnVariants
type BtnSize = keyof typeof btnSizes

type ButtonLinkProps = {
  to: string
  variant?: BtnVariant
  size?: BtnSize
  children: ReactNode
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

/** Button-styled link. Uses <a> for hash anchors and external URLs, <Link> for internal routes. */
export function ButtonLink({ to, variant = "primary", size = "md", children, className = "", ...rest }: ButtonLinkProps) {
  const cls = `${btnBase} ${btnVariants[variant]} ${btnSizes[size]} ${className}`
  if (to.startsWith("#") || to.startsWith("http")) {
    return (
      <a href={to} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls} {...rest}>
      {children}
    </Link>
  )
}

type ButtonProps = {
  variant?: BtnVariant
  size?: BtnSize
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = "primary", size = "md", children, className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${btnBase} ${btnVariants[variant]} ${btnSizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

/* ------------------------------ section heading ----------------------------- */

export function Eyebrow({ children, tone = "sage" }: { children: ReactNode; tone?: "sage" | "marigold" | "canvas" }) {
  const color =
    tone === "marigold" ? "text-marigold-press" : tone === "canvas" ? "text-[rgba(243,239,230,0.75)]" : "text-sage"
  return (
    <p className={`font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] ${color}`}>
      {children}
    </p>
  )
}

type SectionHeadProps = {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  align?: "left" | "center"
  onInk?: boolean
}

export function SectionHead({ eyebrow, title, lede, align = "left", onInk = false }: SectionHeadProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <Eyebrow tone={onInk ? "canvas" : "sage"}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-3 font-display text-[2rem] font-bold leading-[1.12] sm:text-[2.6rem] ${onInk ? "text-canvas" : "text-ink"}`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={160}>
          <p className={`mt-4 text-[1.08rem] leading-relaxed ${onInk ? "text-[rgba(243,239,230,0.75)]" : "text-muted"}`}>
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/* --------------------------------- details --------------------------------- */

/** Mono rupee figure with Indian grouping, e.g. ₹1,20,000 */
export function Money({ amount, className = "" }: { amount: number; className?: string }) {
  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {"₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount)}
    </span>
  )
}

export function Stamp({ children, tone = "ok", className = "" }: { children: ReactNode; tone?: "ok" | "sage" | "warn" | "muted"; className?: string }) {
  const color =
    tone === "ok" ? "text-ok" : tone === "sage" ? "text-sage" : tone === "warn" ? "text-warn" : "text-muted"
  return <span className={`stamp ${color} ${className}`}>{children}</span>
}

/** Small "illustrative data" disclaimer for product mocks */
export function IllustrativeTag({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted ${className}`}>
      Illustrative
    </span>
  )
}
