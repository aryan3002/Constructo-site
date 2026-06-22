import { Hero } from "../sections/Hero"
import { Problem } from "../sections/Problem"
import { HowItWorks } from "../sections/HowItWorks"
import { InAppChat } from "../sections/InAppChat"
import { Trust } from "../sections/Trust"
import { Personas } from "../sections/Personas"
import { PricingSection } from "../sections/PricingSection"
import { MobileApp } from "../sections/MobileApp"
import { FinalCta } from "../sections/FinalCta"

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <InAppChat />
      <Trust />
      <Personas />
      <PricingSection />
      <MobileApp />
      <FinalCta />
    </>
  )
}
