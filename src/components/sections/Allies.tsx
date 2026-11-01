'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Star, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useLandingContent } from '@/lib/cms-service'

const ALLIES = [
  {
    name: 'Sellibri',
    category: 'Comercio & Plataforma',
    initial: 'SL',
    logoUrl: '/logosaliados/sellibri.png',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Go Interaction Marketing',
    category: 'Marketing & Crecimiento',
    initial: 'GI',
    logoUrl: '/logosaliados/go-interaction.png',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'BBM Intelligent',
    category: 'Sistemas Inteligentes & IA',
    initial: 'BBM',
    logoUrl: '/logosaliados/bbm-intelligent.png',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Cocrea',
    category: 'Arquitectura & Feng Shui',
    initial: 'CC',
    logoUrl: '/logosaliados/cocrea.png',
    gradient: 'from-emerald-700 to-teal-800',
  },
  {
    name: 'Disglobal',
    category: 'Soluciones Comerciales',
    initial: 'DG',
    logoUrl: '/logosaliados/disglobal.png',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Dropanas',
    category: 'Logística & Distribución',
    initial: 'DP',
    logoUrl: '/logosaliados/dropanas.png',
    gradient: 'from-rose-500 to-blue-600',
  },
  {
    name: 'Benflor',
    category: 'Desarrollo Productivo',
    initial: 'BF',
    logoUrl: '/logosaliados/benflor.png',
    gradient: 'from-rose-600 to-red-700',
  },
  {
    name: 'Renacer Contable',
    category: 'Asesoría Financiera & Contable',
    initial: 'RC',
    logoUrl: '/logosaliados/renacer-contable.png',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    name: 'Arte Medio W3',
    category: 'Diseño & Creatividad Digital',
    initial: 'AM',
    logoUrl: '/logosaliados/arte-medio-w3.png',
    gradient: 'from-amber-600 to-yellow-700',
  },
  {
    name: 'BestWay Marketing',
    category: 'Estrategia Digital',
    initial: 'BW',
    logoUrl: '/logosaliados/bestway-marketing.png',
    gradient: 'from-zinc-800 to-zinc-950',
  },
  {
    name: 'Gold Stetic Clinic',
    category: 'Salud Estética & Bienestar',
    initial: 'GS',
    logoUrl: '/logosaliados/gold-stetic-clinic.png',
    gradient: 'from-amber-500 to-yellow-600',
  },
]

export function Allies() {
  const cms = useLandingContent()
  const activeAllies = React.useMemo(() => {
    if (cms.allies && cms.allies.length > 0) {
      return cms.allies
        .filter((a) => a.active)
        .map((a, i) => {
          const fallback = ALLIES[i % ALLIES.length] || ALLIES[0]
          const initials = a.name
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')
            .toUpperCase() || 'AL'
          return {
            name: a.name,
            category: a.category || fallback.category,
            initial: initials,
            logoUrl: a.logoUrl || fallback.logoUrl,
            gradient: fallback.gradient,
          }
        })
    }
    return ALLIES
  }, [cms.allies])

  return (
    <section id="aliados" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-brand-muted/40" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass border border-brand-border/80 px-4 py-1.5 text-xs font-semibold text-brand-deep shadow-soft">
            <Handshake className="h-3.5 w-3.5 text-brand-primary" />
            Nuestros Aliados
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-deep text-balance sm:text-4xl">
            Ecosistema de
            <span className="gradient-text"> aliados estratégicos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground text-pretty">
            Trabajamos con las mejores organizaciones para dar a nuestras emprendedoras herramientas
            de clase mundial, 100% gratuitas o subsidiadas.
          </p>
        </motion.div>

        {/* Allies grid - Large showcase cards for logos */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {activeAllies.map((ally, i) => (
            <motion.div
              key={ally.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-white p-5 sm:p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:border-brand-primary/50"
            >
              {/* Large Logo Showcase Container (5x+ larger than before) */}
              <div className="relative flex h-36 sm:h-44 w-full items-center justify-center rounded-2xl bg-brand-muted/20 p-4 transition-colors group-hover:bg-brand-muted/40">
                {ally.logoUrl ? (
                  <img
                    src={ally.logoUrl}
                    alt={ally.name}
                    className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                ) : (
                  <span
                    className={`inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${ally.gradient} text-white text-2xl font-bold shadow-soft`}
                  >
                    {ally.initial}
                  </span>
                )}
              </div>

              {/* Ally Name & Category */}
              <div className="mt-4 flex flex-1 flex-col items-center justify-center text-center">
                <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep group-hover:text-brand-primary transition-colors line-clamp-1">
                  {ally.name}
                </h3>
                {ally.category && (
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {ally.category}
                  </p>
                )}
              </div>

              {/* Hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${ally.gradient} transition-transform duration-500 group-hover:scale-x-100`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-border bg-white p-6 text-center shadow-soft sm:flex-row sm:gap-8 sm:text-left"
        >
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-brand-accent text-brand-accent" />
            <span className="font-display text-lg font-bold text-brand-deep">+38 aliados</span>
            <span className="text-sm text-muted-foreground">activos</span>
          </div>
          <div className="hidden h-8 w-px bg-brand-border sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold gradient-text">$2.4M</span>
            <span className="text-sm text-muted-foreground">en herramientas gratuitas distribuidas</span>
          </div>
          <div className="hidden h-8 w-px bg-brand-border sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-brand-secondary">12</span>
            <span className="text-sm text-muted-foreground">países con aliados locales</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
