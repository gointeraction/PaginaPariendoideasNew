'use client'

import { motion } from 'framer-motion'
import { useLandingContent } from '@/lib/cms-service'

const PARTNERS = [
  'Google Cloud',
  'Firebase',
  'Cloudflare',
  'WhatsApp Business',
  'Radar',
  'LandiaAI',
  'Sellibri',
  'Avila Pay',
  'GoAgente IA',
  'BBM Intelligent',
]

export function TrustBar() {
  const cms = useLandingContent()
  const tools = (cms.trustBar && cms.trustBar.length > 0) ? cms.trustBar : PARTNERS

  return (
    <section className="relative border-y border-brand-border/60 bg-brand-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground shrink-0">
            Integrado con las mejores herramientas
          </p>
          <div className="relative w-full overflow-hidden mask-fade-r">
            <div className="flex gap-10 animate-marquee">
              {[...tools, ...tools].map((p, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="font-display text-lg md:text-xl font-bold text-brand-deep/40 hover:text-brand-deep/80 transition-colors whitespace-nowrap"
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
