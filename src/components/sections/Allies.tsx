'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Star, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ALLIES = [
  {
    name: 'MercadoPago',
    category: 'Pagos digitales',
    description: 'Pasarela de pagos integrada para Venezuela y LATAM.',
    initial: 'MP',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Stripe',
    category: 'Pagos globales',
    description: 'Procesamiento internacional para clientes fuera de LATAM.',
    initial: 'S',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Google for Startups',
    category: 'Cloud & Herramientas',
    description: 'Créditos de Google Cloud y workspace para emprendedoras.',
    initial: 'G',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Canva for Education',
    category: 'Diseño',
    description: 'Cuenta Canva Pro gratuita para la comunidad.',
    initial: 'C',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Meta Emprende',
    category: 'Marketing',
    description: 'Créditos publicitarios y formación en WhatsApp Business.',
    initial: 'M',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'UN Women',
    category: 'Aliado estratégico',
    description: 'Acompañamiento institucional en empoderamiento femenino.',
    initial: 'UN',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Banco de Venezuela',
    category: 'Financiamiento',
    description: 'Línea de microcréditos para egresadas del programa.',
    initial: 'BV',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'Hub Caracas',
    category: 'Coworking',
    description: 'Espacios físicos gratuitos para sesiones y eventos.',
    initial: 'HC',
    gradient: 'from-purple-500 to-fuchsia-500',
  },
]

export function Allies() {
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

        {/* Allies grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {ALLIES.map((ally, i) => (
            <motion.div
              key={ally.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-soft transition-all hover:shadow-lift hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${ally.gradient} text-white text-sm font-bold shadow-soft transition-transform group-hover:scale-110`}
                >
                  {ally.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="truncate font-display text-sm font-bold text-brand-deep">
                      {ally.name}
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-1 bg-brand-muted text-brand-primary border-0 text-[9px] font-semibold uppercase tracking-wide"
                  >
                    {ally.category}
                  </Badge>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{ally.description}</p>

              {/* Hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${ally.gradient} transition-transform duration-500 group-hover:scale-x-100`}
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
