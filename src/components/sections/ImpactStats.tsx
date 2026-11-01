'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { TrendingUp, Globe2, Award, HeartHandshake } from 'lucide-react'

const IMPACT_STATS = [
  {
    value: 12400,
    suffix: '+',
    prefix: '',
    label: 'Emprendedoras aceleradas',
    description: 'Mujeres que han transformado su vida y negocio con nosotros.',
    icon: TrendingUp,
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-brand-primary/10',
    text: 'text-brand-primary',
  },
  {
    value: 3200000,
    prefix: '$',
    suffix: '',
    label: 'Ventas generadas por la comunidad',
    description: 'Ingresos reales generados a través del Kit Mujer CEO.',
    icon: Award,
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-brand-secondary/10',
    text: 'text-brand-secondary',
  },
  {
    value: 87,
    prefix: '',
    suffix: '%',
    label: 'Aumentan sus ingresos en 6 meses',
    description: 'De las egresadas del Programa Renacer.',
    icon: HeartHandshake,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-brand-accent/10',
    text: 'text-brand-accent',
  },
  {
    value: 12,
    prefix: '',
    suffix: '',
    label: 'Países en LATAM',
    description: 'Venezuela, Colombia, Perú, Argentina, Chile, Ecuador, México y más.',
    icon: Globe2,
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-brand-primary/10',
    text: 'text-brand-primary',
  },
]

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      return `${prefix}${(latest / 1000000).toFixed(decimals + 1)}M${suffix}`
    }
    if (latest >= 1000) {
      return `${prefix}${Math.round(latest).toLocaleString('es-VE')}${suffix}`
    }
    return `${prefix}${Math.round(latest)}${suffix}`
  })

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [isInView, value, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export function ImpactStats() {
  return (
    <section id="impacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Light background with subtle blur accents */}
      <div className="absolute inset-0 -z-10 bg-neutral-50/60" />
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-secondary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-black shadow-sm">
            <TrendingUp className="h-3.5 w-3.5 text-brand-secondary" />
            Nuestro Impacto
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-black text-balance sm:text-4xl md:text-5xl">
            Números que cuentan
            <span className="block text-black">historias de transformación</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-black font-normal text-pretty">
            Cada cifra representa una mujer que reconstruyó su futuro, una familia que salió adelante
            y una comunidad que crece junto a nosotras.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300"
            >
              {/* Glow on hover */}
              <div
                className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <div className="relative">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.text} transition-transform group-hover:scale-110`}
                >
                  <stat.icon className="h-6 w-6" />
                </span>

                <div className="mt-5 font-display text-4xl font-bold md:text-5xl text-black">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-2 text-sm font-bold text-black">{stat.label}</div>
                <div className="mt-2 text-xs leading-relaxed text-black/80 font-medium">{stat.description}</div>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${stat.color} transition-transform duration-500 group-hover:scale-x-100`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm md:flex-row md:justify-between md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {['from-pink-400 to-rose-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500', 'from-violet-400 to-purple-500'].map(
                (g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-xs font-bold ring-2 ring-white`}
                  >
                    {['MG', 'CP', 'AR', 'LS'][i]}
                  </span>
                )
              )}
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-black">
                +12,400 mujeres ya transformaron su realidad
              </p>
              <p className="text-sm text-black/80 font-medium">Únete a la comunidad más grande de LATAM</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-3 text-black">
            <span className="text-2xl font-bold text-black">94%</span>
            <span className="text-xs leading-tight font-medium text-black">recomiendan<br />Pariendo Ideas</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
