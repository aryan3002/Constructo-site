import { Link } from "react-router-dom"
import { Container, NeevMark } from "../components/ui"
import { Reveal } from "../components/Reveal"

type FooterLink = { label: string; to: string; external?: boolean }

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Product", to: "/#product" },
      { label: "In-app chat", to: "/#in-app-chat" },
      { label: "How it works", to: "/#how-it-works" },
      { label: "Pricing", to: "/pricing" },
      { label: "Free Site Survey", to: "/site-survey" },
    ],
  },
  {
    heading: "For",
    links: [
      { label: "Builders", to: "/#for-builders" },
      { label: "Homeowners", to: "/#for-homeowners" },
      { label: "Why trust Neev", to: "/#trust" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", to: "mailto:hello@neev.build", external: true },
      { label: "Book a demo", to: "/#book-demo" },
    ],
  },
]

const linkCls =
  "block py-1 text-[0.95rem] text-[rgba(243,239,230,0.8)] transition-colors duration-150 hover:text-canvas"

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-canvas">
      <Container>
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
          {/* Brand + mission */}
          <Reveal>
            <Link to="/" aria-label="Neev home" className="inline-flex items-center gap-2.5">
              <span className="inline-flex rounded-[7px] ring-1 ring-[rgba(243,239,230,0.22)]">
                <NeevMark size={26} />
              </span>
              <span className="font-display text-[1.3rem] font-bold tracking-tight text-canvas">Neev</span>
            </Link>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-[rgba(243,239,230,0.65)]">
              Neev (नींव) means foundation. We're building the layer of trust Indian construction runs on: AI does the
              heavy lifting, people commit the truth.
            </p>
          </Reveal>

          {/* Link columns */}
          <nav aria-label="Footer" className="mt-12 lg:mt-0 lg:shrink-0">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-14">
              {columns.map((col, i) => (
                <Reveal as="li" key={col.heading} delay={80 + i * 70}>
                  <h2 className="font-mono text-[0.68rem] font-medium uppercase tracking-widest text-[rgba(243,239,230,0.45)]">
                    {col.heading}
                  </h2>
                  <ul className="mt-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a href={link.to} className={linkCls}>
                            {link.label}
                          </a>
                        ) : (
                          <Link to={link.to} className={linkCls}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal line */}
        <Reveal delay={140}>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-[rgba(243,239,230,0.14)] pt-6 font-mono text-[0.7rem] text-[rgba(243,239,230,0.45)]">
            <p>© 2026 Neev · Made with care in India</p>
            <p>Pre-launch · this site describes the product as built for early access.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}
