'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Crown, Rocket, Sprout, ArrowRight, Clock3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ONBOARDING_URLS } from '@/lib/constants'
import { useSubscribeModal } from '@/components/layout/SubscribeModalProvider'

/** Fila de contenido de una columna (tabla "Elemento / Detalle"). */
type FeatureRow =
  /** Detalle = "Incluido" */
  | { kind: 'check'; label: string }
  /** Detalle = "Todo lo anterior" */
  | { kind: 'previo'; label: string }
  /** Detalle = lista de viñetas */
  | { kind: 'list'; label: string; items: string[] }
  /** Detalle = valor simple */
  | { kind: 'value'; label: string; value: string }
  /** Detalle = "próximamente" (feature aún no disponible) */
  | { kind: 'soon'; label: string }

interface Plan {
  /** Columna / etapa (título de la tarjeta). */
  tier: string
  icon: React.ElementType
  popular: boolean
  accentBg: string
  accentText: string
  ctaText: string
  /** Muestra el icono de mano señalando 👉 delante del CTA. */
  ctaEmoji?: boolean
  /** Ruta de registro (abre el modal de suscripción). */
  url: string
  features: FeatureRow[]
}

const PLANS: Plan[] = [
  {
    tier: 'Semilla',
    icon: Sprout,
    popular: false,
    accentBg: 'bg-brand-muted',
    accentText: 'text-brand-secondary-ink',
    ctaText: 'Solicitar Beca',
    ctaEmoji: true,
    url: ONBOARDING_URLS.becas,
    features: [
      { kind: 'check', label: 'Diagnóstico inicial / Hoja de ruta' },
      { kind: 'check', label: 'Boletín informativo (mensual)' },
      { kind: 'check', label: 'Acceso a comunidad' },
      { kind: 'check', label: 'Acceso a los foros' },
      { kind: 'check', label: 'Soporte emocional' },
      { kind: 'check', label: 'Cursos (asincrónicos)' },
      { kind: 'check', label: '¿Quieres avanzar?' },
      {
        kind: 'list',
        label: 'Requisitos técnicos / Equipos',
        items: ['Computador', 'Teléfono inteligente'],
      },
    ],
  },
  {
    tier: 'Temprana',
    icon: Rocket,
    popular: true,
    accentBg: 'gradient-primary-strong',
    accentText: 'text-white',
    ctaText: 'Activar / Net Digital Mujer',
    url: ONBOARDING_URLS.kitMujerCeo,
    features: [
      { kind: 'previo', label: 'Nivel previo' },
      {
        kind: 'list',
        label: 'Capacitación',
        items: [
          'Carreras Emprendedoras del año',
          'Calificadas con-causality',
          'Miembro Ecosystem-E',
          'Diplomado',
          'Becas / Bootcamps',
        ],
      },
      { kind: 'list', label: 'Networking y Visibilidad', items: ['Rondas B2B', 'Vitrina Digital'] },
      { kind: 'value', label: 'Seguimiento', value: 'Plan de seguimiento' },
      { kind: 'value', label: 'Estado del negocio', value: 'Emprendimiento activo' },
      { kind: 'soon', label: 'Marketplace Pariendo Ideas' },
    ],
  },
  {
    tier: 'Consolidada / Legado',
    icon: Crown,
    popular: false,
    accentBg: 'bg-gradient-to-br from-salmon-600 via-salmon-700 to-salmon-800',
    accentText: 'text-white',
    ctaText: 'Agenda una asesoría',
    url: ONBOARDING_URLS.aceleracion,
    features: [
      { kind: 'previo', label: 'Nivel previo' },
      { kind: 'value', label: 'Asesoría / Enfoque', value: 'Asesorías personalizadas' },
      { kind: 'value', label: 'Expansión', value: 'Rondas Digital' },
      { kind: 'value', label: 'Estado del negocio', value: 'Formalidad' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

/** Renderiza una fila de la tabla Elemento / Detalle, siempre con ícono ✓ (estilo Semilla). */
function FeatureRowItem({ row, popular }: { row: FeatureRow; popular: boolean }) {
  const checkCls = `mt-0.5 h-5 w-5 shrink-0 ${
    popular ? 'text-brand-secondary-ink' : 'text-brand-secondary-ink/70'
  }`

  if (row.kind === 'list') {
    return (
      <span className="block space-y-1.5">
        <span className="flex items-start gap-2.5">
          <CheckCircle2 className={checkCls} />
          <span className="text-sm font-semibold leading-snug text-brand-deep">{row.label}</span>
        </span>
        {row.items.map((item) => (
          <span key={item} className="flex items-start gap-2.5 pl-7">
            <CheckCircle2 className={checkCls} />
            <span className="text-sm leading-snug text-brand-deep">{item}</span>
          </span>
        ))}
      </span>
    )
  }

  if (row.kind === 'soon') {
    return (
      <span className="flex flex-wrap items-center gap-2">
        <Clock3 className={checkCls} />
        <span className="text-sm font-semibold leading-snug text-brand-deep">{row.label}</span>
        <span className="rounded-full bg-brand-muted px-2.5 py-0.5 text-xs font-bold text-brand-deep">
          Próximamente
        </span>
      </span>
    )
  }

  const text =
    row.kind === 'check'
      ? row.label
      : row.kind === 'previo'
        ? `${row.label}: Todo lo anterior`
        : `${row.label}: ${row.value}`

  return (
    <span className="flex items-start gap-2.5">
      <CheckCircle2 className={checkCls} />
      <span className="text-sm leading-snug text-brand-deep">{text}</span>
    </span>
  )
}

export function Pricing() {
  const { openSubscribeModal } = useSubscribeModal()

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-muted/60 via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 mask-fade-r" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-border/16 blur-3xl" />
      <img src="/decor/confeti.svg" alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-24 right-6 -z-10 w-24 -rotate-6 opacity-75 md:w-32" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-border/16 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass border border-brand-border/80 px-4 py-1.5 text-xs font-semibold text-brand-deep shadow-soft">
            <Crown className="h-3.5 w-3.5 text-brand-secondary-ink" />
            Registro — Planes
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-deep text-balance sm:text-4xl md:text-5xl">
            El plan perfecto para cada
            <span className="gradient-text"> etapa de tu negocio</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
            Emprende, crece o escala. Nuestros planes se adaptan a tu ritmo con herramientas,
            mentoría y comunidad diseñadas para mujeres emprendedoras.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-6 md:gap-5 lg:grid-cols-3 lg:items-stretch"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={cardVariants}
              className={`group relative flex flex-col rounded-3xl transition-all duration-500 ${
                plan.popular
                  ? 'bg-card p-6 md:p-8 shadow-glow lg:scale-105 lg:z-10 lg:py-10 border-2 border-salmon-500/50'
                  : 'border border-brand-border bg-card p-6 md:p-8 shadow-soft hover:shadow-lift hover:-translate-y-1'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full gradient-primary-strong px-5 py-2 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Más popular
                  </span>
                </div>
              )}

              {/* Background glow for popular */}
              {plan.popular && (
                <div className="pointer-events-none absolute -inset-px rounded-3xl gradient-primary opacity-10 blur-sm" />
              )}

              <div className="relative flex flex-1 flex-col">
                {/* Plan header */}
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${plan.accentBg} ${plan.accentText} shadow-soft transition-transform group-hover:scale-110`}
                  >
                    <plan.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-deep sm:text-2xl">
                      {plan.tier}
                    </h3>
                  </div>
                </div>

                {/* Description removed: precios y toggle fuera (decisión 2026-11) */}

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="group/btn w-full rounded-full h-12 text-sm font-semibold btn-brand shadow-glow"
                  >
                    <a
                      href={plan.url}
                      onClick={(ev) => {
                        ev.preventDefault()
                        openSubscribeModal({ originUrl: plan.url })
                      }}
                    >
                      {plan.ctaEmoji && <span className="mr-1.5 text-base leading-none">👉</span>}
                      {plan.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

                {/* Features (Elemento / Detalle) */}
                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={`${plan.tier}-${i}`}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      <FeatureRowItem row={feature} popular={plan.popular} />
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 rounded-b-3xl transition-transform duration-500 group-hover:scale-x-100 ${
                  plan.popular
                    ? 'gradient-primary'
                    : plan.tier === 'Consolidada / Legado'
                      ? 'bg-gradient-to-r from-salmon-600 via-salmon-700 to-salmon-800'
                      : 'bg-fucsia'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note + guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-center text-sm text-muted-foreground">
            Todas las etapas incluyen acceso al marketplace Pariendo Ideas. Avanza a tu ritmo,
            sin compromisos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-brand-border bg-background/80 p-4 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-brand-deep">Registro gratuito</span>
            </div>
            <div className="h-4 w-px bg-brand-border" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-muted text-brand-secondary-ink">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-brand-deep">Setup gratuito</span>
            </div>
            <div className="h-4 w-px bg-brand-border" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-salmon-100 text-brand-secondary-ink">
                <Crown className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-brand-deep">Sin tarjeta de crédito</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
