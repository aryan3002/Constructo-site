import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Nav } from "./sections/Nav"
import { Footer } from "./sections/Footer"
import { Home } from "./pages/Home"
import { Pricing } from "./pages/Pricing"
import { SiteSurvey } from "./pages/SiteSurvey"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="grain min-h-screen bg-canvas">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-[10px] focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/site-survey" element={<SiteSurvey />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
