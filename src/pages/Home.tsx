import { Hero } from "../sections/Hero"
import { Problem } from "../sections/Problem"
import { Shift } from "../sections/Shift"
import { HowItWorks } from "../sections/HowItWorks"
import { InAppChat } from "../sections/InAppChat"
import { Surfaces } from "../sections/Surfaces"
import { Homeowners } from "../sections/Homeowners"
import { Trust } from "../sections/Trust"
import { Lifecycle } from "../sections/Lifecycle"
import { SurveyCallout } from "../sections/SurveyCallout"
import { Personas } from "../sections/Personas"
import { PricingSection } from "../sections/PricingSection"
import { Faq } from "../sections/Faq"
import { MobileApp } from "../sections/MobileApp"
import { FinalCta } from "../sections/FinalCta"

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Shift />
      <HowItWorks />
      <InAppChat />
      <Surfaces />
      <Homeowners />
      <Trust />
      <Lifecycle />
      <SurveyCallout />
      <Personas />
      <PricingSection />
      <Faq />
      <MobileApp />
      <FinalCta />
    </>
  )
}
