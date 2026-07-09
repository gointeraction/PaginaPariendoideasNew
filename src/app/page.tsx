import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollUtilities } from '@/components/layout/ScrollUtilities'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Modules } from '@/components/sections/Modules'
import { ImpulsoProgram } from '@/components/sections/ImpulsoProgram'
import { KitMujerCEO } from '@/components/sections/KitMujerCEO'
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
        <Hero />
        <TrustBar />
        <Modules />
        <ImpulsoProgram />
        <KitMujerCEO />
        <Mentorship />
        <Events />
        <Community />
        <Journey />
        <ImpactStats />
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
