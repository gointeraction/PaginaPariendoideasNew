'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  ShoppingBag,
  Rocket,
  ArrowUpRight,
  Check,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Module = {
  id: string
  name: string
  tagline: string
  description: string
  icon: typeof Heart
  gradient: string
  glow: string
  accentText: string
  features: string[]
  cta: string
  href: string
  highlight?: boolean
}

const MODULES: Module[] = [
  {
    id: 'impulso',
    name: 'IMPULSO',
    tagline: 'Programa Renacer',
    description:
      'Acompañamiento integral para reconstruir tu vida y tu emprendimiento. Psicosocial, digital y mentoría.',
    icon: Heart,
    gradient: 'from-pink-500 via-rose-500 to-fuchsia-500',
    glow: 'shadow-glow-pink',
    accentText: 'text-rose-600',
    features: [
      'Acompañamiento psicosocial y bienestar',
      'Reconstrucción Digital Acelerada',
      'Becas de formación y mentoría 1:1',
      'Seguimiento emocional semanal',
    ],
    cta: 'Solicitar Beca de Reconstrucción',
    href: '#beca',
    highlight: true,
  },
  {
    id: 'kit-mujer-ceo',
    name: 'KIT MUJER CEO',
    tagline: 'Ecosistema Digital Integrado',
    description:
      'Todo lo que necesitas para gestionar y hacer crecer tu negocio: e-commerce, POS, marketplace y eventos.',
    icon: ShoppingBag,
    gradient: 'from-purple-500 via-fuchsia-500 to-violet-500',
    glow: 'shadow-glow',
    accentText: 'text-purple-600',
    features: [
      'E-commerce integrado con pagos',
      'Punto de Venta (POS) offline-ready',
      'Marketplace de Talento Femenino',
      'Eventos P.I. Fest y networking',
    ],
    cta: 'Activar mi Kit Mujer CEO',
    href: '#kit-mujer-ceo',
  },
  {
    id: 'aceleracion-digital',
    name: 'ACELERACIÓN DIGITAL',
    tagline: 'Reconstrucción Digital',
    description:
      'Programa intensivo de reconversión digital con contenido secuencial, mentoría experta y certificación.',
    icon: Rocket,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    glow: 'shadow-glow-orange',
    accentText: 'text-orange-600',
    features: [
      'KIT Digital personalizado',
      'Contenido secuencial por módulos',
      'Mentoría 1:1 con expertas',
      'Certificación al completar',
    ],
    cta: 'Comenzar aceleración',
    href: '#aceleracion',
  },
]

export function Modules() {
  return (
    <section id="modulos" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Tres caminos, un mismo destino"
          title={
            <>
              Elige tu camino de
              <span className="gradient-text"> aceleramiento</span>
            </>
          }
          description="Cada módulo está diseñado para acompañarte en una etapa distinta de tu viaje como emprendedora. Puedes iniciar por cualquiera y combinarlos según tus necesidades."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <ModuleCard key={m.id} module={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ module: m, index }: { module: Module; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-500 hover:-translate-y-1',
        m.highlight
          ? 'border-brand-border shadow-glow'
          : 'border-brand-border/70 shadow-soft hover:shadow-lift'
      )}
    >
      {/* Decorative gradient blob */}
      <div
        className={cn(
          'pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25',
          m.gradient
        )}
      />

      {/* Highlight badge */}
      {m.highlight && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full gradient-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-glow">
          <Sparkles className="h-3 w-3" />
          Más solicitado
        </span>
      )}

      {/* Icon */}
      <div
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
          m.gradient,
          m.glow
        )}
      >
        <m.icon className="h-7 w-7" strokeWidth={2.2} />
      </div>

      {/* Tagline */}
      <div className="mt-5">
        <span className={cn('text-xs font-semibold uppercase tracking-[0.18em]', m.accentText)}>
          {m.tagline}
        </span>
        <h3 className="mt-1 font-display text-2xl font-bold text-brand-deep">{m.name}</h3>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>

      {/* Features */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {m.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-brand-deep/85">
            <span
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white',
                m.gradient
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant="outline"
        className={cn(
          'mt-7 w-full rounded-full border-2 bg-white hover:bg-brand-muted/40 group/cta',
          m.highlight ? 'border-brand-primary/40 text-brand-primary' : 'border-brand-border text-brand-deep'
        )}
      >
        <Link href={m.href}>
          {m.cta}
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </Button>
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full gradient-primary" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand-deep text-balance md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-4 text-base md:text-lg text-muted-foreground text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
