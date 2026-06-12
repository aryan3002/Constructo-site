import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ButtonLink, Container, Wordmark } from "../components/ui"
import { IconClose, IconMenu } from "../components/icons"

const NAV_LINKS = [
  { label: "Product", to: "/#product" },
  { label: "Chat", to: "/#in-app-chat" },
  { label: "How it works", to: "/#how-it-works" },
  { label: "For builders", to: "/#for-builders" },
  { label: "For homeowners", to: "/#for-homeowners" },
  { label: "Pricing", to: "/pricing" },
] as const

/* Desktop link: quiet ink-soft text, 2px marigold underline slides in on hover */
const desktopLinkCls =
  "relative inline-flex items-center py-2 text-[0.95rem] font-medium text-ink-soft transition-colors duration-150 hover:text-ink " +
  "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-marigold " +
  "after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-150 " +
  "hover:after:scale-x-100 hover:after:opacity-100"

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  /* Escape closes the mobile panel */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/92 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[68px]">
        {/* Brand */}
        <Link to="/" aria-label="Neev home" className="-ml-1 inline-flex items-center rounded-md p-1" onClick={close}>
          <Wordmark />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={desktopLinkCls}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to="https://constructo-topaz.vercel.app" size="sm" variant="secondary" target="_blank" rel="noopener noreferrer">
            Log in
          </ButtonLink>
          <ButtonLink to="/#book-demo" size="sm" variant="primary">
            Book a demo
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-ink transition-colors duration-150 hover:bg-sand lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </Container>

      {/* Mobile dropdown panel */}
      {open && (
        <div
          id="site-menu"
          className="absolute inset-x-0 top-full animate-[rise_0.25s_var(--ease-out-soft)_both] border-b border-line bg-canvas shadow-[var(--shadow-lift)] lg:hidden"
        >
          <nav aria-label="Primary">
            <Container className="pb-5 pt-1">
              <ul className="divide-y divide-line">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={close}
                      className="flex h-12 items-center text-[1.05rem] font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonLink to="https://constructo-topaz.vercel.app/login" size="md" variant="secondary" className="mt-4 w-full" target="_blank" rel="noopener noreferrer">
                Log in
              </ButtonLink>
              <ButtonLink to="/#book-demo" size="md" variant="primary" className="mt-2 w-full" onClick={close}>
                Book a demo
              </ButtonLink>
            </Container>
          </nav>
        </div>
      )}
    </header>
  )
}
