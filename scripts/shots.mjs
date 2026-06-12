// Full-page screenshot harness for design review.
// Usage: node scripts/shots.mjs [outDir]
import { chromium } from "playwright"
import { mkdirSync } from "node:fs"

const out = process.argv[2] ?? "shots"
mkdirSync(out, { recursive: true })

const pages = [
  { path: "/", name: "home" },
  { path: "/pricing", name: "pricing" },
  { path: "/site-survey", name: "site-survey" },
]
const viewports = [
  { w: 1380, h: 900, tag: "desktop" },
  { w: 375, h: 812, tag: "mobile" },
]

const browser = await chromium.launch()
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    reducedMotion: "reduce", // capture final resting state, not mid-reveal
    deviceScaleFactor: vp.tag === "mobile" ? 2 : 1,
  })
  const page = await ctx.newPage()
  for (const p of pages) {
    await page.goto(`http://localhost:5173${p.path}`, { waitUntil: "networkidle" })
    await page.waitForTimeout(500)
    // step-scroll to the bottom so every IntersectionObserver Reveal fires
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(900) // fonts + reveal transitions settle
    await page.screenshot({ path: `${out}/${p.name}-${vp.tag}.png`, fullPage: true })
    console.log(`${p.name}-${vp.tag}.png`)
  }
  await ctx.close()
}
await browser.close()
