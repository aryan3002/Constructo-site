import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Stagger delay in ms */
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "span"
}

/**
 * Scroll-triggered fade-up. Renders content immediately (no layout shift,
 * works without JS-driven measurement) and animates once when it enters
 * the viewport. Respects prefers-reduced-motion via the global CSS override.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Without IntersectionObserver support there is nothing to wait for: render shown.
  const [shown, setShown] = useState(() => typeof IntersectionObserver === "undefined")

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as "div"
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(22px)",
        transition: `opacity 0.7s var(--ease-out-soft) ${delay}ms, transform 0.7s var(--ease-out-soft) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
