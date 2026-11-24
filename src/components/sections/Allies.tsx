'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Star } from 'lucide-react'
import { useLandingContent } from '@/lib/cms-service'
import { cn } from '@/lib/utils'

type Ally = {
  name: string
  category: string
  initial: string
  logoUrl: string
  gradient: string
  /** Fondo de la caja uniforme del logo: 'dark' si el PNG trae fondo oscuro incrustado, 'light' si trae fondo claro (auditoría 2026-11-24: cajas de igual tamaño con fondo adaptado a cada logo) */
  boxBg?: 'dark' | 'light'
}

const ALLIES: Ally[] = [
  {
    name: 'Sellibri',
    category: 'Comercio & Plataforma',
    initial: 'SL',
    logoUrl: '/logosaliados/sellibri.png',
    gradient: 'from-violeta to-fucsia',
  },
  {
    name: 'Go Interaction Marketing',
    category: 'Marketing & Crecimiento',
    initial: 'GI',
    logoUrl: '/logosaliados/go-interaction.png',
    gradient: 'from-salmon-700 to-fucsia',
  },
  {
    name: 'BBM Intelligent',
    category: 'Sistemas Inteligentes & IA',
    initial: 'BBM',
    logoUrl: '/logosaliados/bbm-intelligent.png',
    boxBg: 'dark',
    gradient: 'from-violeta to-fucsia',
  },
  {
    name: 'Cocrea',
    category: 'Arquitectura & Feng Shui',
    initial: 'CC',
    logoUrl: '/logosaliados/cocrea.png',
    boxBg: 'dark',
    gradient: 'from-fucsia to-violeta-osc',
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
    gradient: 'from-salmon-700 to-fucsia',
  },
  {
    name: 'Benflor',
    category: 'Desarrollo Productivo',
    initial: 'BF',
    logoUrl: '/logosaliados/benflor.png',
    gradient: 'from-violeta to-fucsia',
  },
  {
    name: 'Renacer Contable',
    category: 'Asesoría Financiera & Contable',
    initial: 'RC',
    logoUrl: '/logosaliados/renacer-contable.png',
    gradient: 'from-violeta-osc to-fucsia-osc',
  },
  {
    name: 'Arte Medio W3',
    category: 'Diseño & Creatividad Digital',
    initial: 'AM',
    logoUrl: '/logosaliados/arte-medio-w3.png',
    gradient: 'from-violeta to-fucsia',
  },
  {
    name: 'BestWay Marketing',
    category: 'Estrategia Digital',
    initial: 'BW',
    logoUrl: '/logosaliados/bestway-marketing.png',
    boxBg: 'dark',
    gradient: 'from-fucsia-osc to-violeta-osc',
  },
  {
    name: 'Gold Stetic Clinic',
    category: 'Salud Estética & Bienestar',
    initial: 'GS',
    logoUrl: '/logosaliados/gold-stetic-clinic.png',
    boxBg: 'dark',
    gradient: 'from-fucsia to-violeta',
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
            boxBg: fallback.boxBg || 'light',
          }
        })
    }
    return ALLIES
  }, [cms.allies])

  return (
    <section id="aliados" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-brand-muted/40" />

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
            <Handshake className="h-3.5 w-3.5 text-brand-secondary-ink" />
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

        {/* Allies marquee - logos deslizantes (mismo esquema que la barra superior) */}
        <div className="relative mt-14 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee">
            {[...activeAllies, ...activeAllies].map((ally, i) => (
              <div
                key={ally.name + i}
                aria-hidden={i >= activeAllies.length}
                className="group mr-5 w-[170px] shrink-0 sm:w-[200px]"
              >
                <div className="flex min-h-[112px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-brand-border bg-card px-4 py-4 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-secondary-ink/50 hover:shadow-lift">
                  {/* Caja uniforme para todos los logos (auditoría 2026-11-24):
                      mismo tamaño para todos; el fondo se adapta a cada PNG
                      (oscuro → caja #141414, claro → caja blanca) para que los
                      logotipos con fondo incrustado integren sin bordes raros. */}
                  <div
                    className={cn(
                      'flex h-14 w-full items-center justify-center rounded-xl border border-brand-border/40',
                      ally.boxBg === 'dark' ? 'bg-[#141414]' : 'bg-white'
                    )}
                  >
                    {ally.logoUrl ? (
                      <img
                        src={ally.logoUrl}
                        alt={ally.name}
                        className="max-h-12 max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ally.gradient} text-white text-lg font-bold shadow-soft`}
                      >
                        {ally.initial}
                      </span>
                    )}
                  </div>
                  <h3 className="w-full truncate text-center font-display text-xs font-bold text-brand-deep group-hover:text-brand-secondary-ink transition-colors">
                    {ally.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-border bg-card p-6 text-center shadow-soft sm:flex-row sm:gap-8 sm:text-left"
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Star className="h-5 w-5 text-brand-secondary-ink" />
            <span className="font-display text-lg font-bold text-brand-deep">+38 aliados</span>
            <span className="text-sm text-muted-foreground">activos</span>
          </div>
          <div className="hidden h-8 w-px bg-brand-border sm:block" />
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-display text-lg font-bold gradient-text">$2.4M</span>
            <span className="text-sm text-muted-foreground">en herramientas gratuitas distribuidas</span>
          </div>
          <div className="hidden h-8 w-px bg-brand-border sm:block" />
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-display text-lg font-bold text-brand-secondary-ink">12</span>
            <span className="text-sm text-muted-foreground">países con aliados locales</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
