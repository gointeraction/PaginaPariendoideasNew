import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollUtilities } from '@/components/layout/ScrollUtilities'
import { MainSlider } from '@/components/sections/MainSlider'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Modules } from '@/components/sections/Modules'
import { ImpulsoProgram } from '@/components/sections/ImpulsoProgram'
import { KitMujerCEO } from '@/components/sections/KitMujerCEO'
import { Pricing } from '@/components/sections/Pricing'
import { Mentorship } from '@/components/sections/Mentorship'
import { Events } from '@/components/sections/Events'
import { Community } from '@/components/sections/Community'
import { Journey } from '@/components/sections/Journey'
import { ImpactStats } from '@/components/sections/ImpactStats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Resources } from '@/components/sections/Resources'
import { Allies } from '@/components/sections/Allies'
import { FAQ } from '@/components/sections/FAQ'
import { ScholarshipCTA } from '@/components/sections/ScholarshipCTA'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollUtilities />
      <Navbar />
      <main className="flex-1">
        <MainSlider />
        {/* <Hero /> - Removido por estar duplicado con el MainSlider */}
        <TrustBar />
        <Modules />
        <ImpulsoProgram />
        <KitMujerCEO />
        <Pricing />
        <Mentorship />
        {/* <Events /> - Ocultado temporalmente por solicitud */}
        <Community />
        <Journey />
        {/* <ImpactStats /> - Ocultado por solicitud */}
        <Testimonials />
        <Resources />
        <Allies />
        <FAQ />
        <ScholarshipCTA />
      </main>
      <Footer />
    </div>
  )
}
