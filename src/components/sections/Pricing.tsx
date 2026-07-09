'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X, Sparkles, Crown, Rocket, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  tier: string
  icon: React.ElementType
  priceMonthly: number
  priceAnnual: number
  description: string
  popular: boolean
  color: string
  accentBg: string
  accentText: string
  gradientBtn: string
  features: PlanFeature[]
}

const PLANS: Plan[] = [
  {
    name: 'GRATIS',
    tier: 'Emprende',
    icon: Zap,
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Comienza tu viaje emprendedor con las herramientas esenciales.',
    popular: false,
    color: 'text-brand-deep',
    accentBg: 'bg-brand-muted',
    accentText: 'text-brand-primary',
    gradientBtn: 'bg-brand-deep hover:bg-brand-deep/90 text-white',
    features: [
      { text: 'Tienda online (hasta 10 productos)', included: true },
      { text: 'POS básico', included: true },
      { text: 'Perfil en marketplace', included: true },
      { text: 'Comunidad (acceso limitado)', included: true },
      { text: '0 sesiones de mentoría', included: false },
      { text: 'Soporte por email', included: true },
    ],
  },
  {
    name: 'PRO',
    tier: 'Crece',
    icon: Rocket,
    priceMonthly: 29,
    priceAnnual: 290,
    description: 'Lleva tu negocio al siguiente nivel con herramientas ilimitadas y mentoría.',
    popular: true,
    color: 'text-brand-primary',
    accentBg: 'gradient-primary',
    accentText: 'text-white',
    gradientBtn: 'gradient-primary text-white border-0 shadow-glow hover:opacity-90',
    features: [
      { text: 'Tienda online ilimitada + dominio personalizado', included: true },
      { text: 'POS completo + inventario', included: true },
      { text: 'Marketplace destacado', included: true },
      { text: 'Comunidad completa + grupos exclusivos', included: true },
      { text: '6 sesiones de mentoría 1:1 / mes', included: true },
      { text: 'Dashboard de métricas avanzado', included: true },
      { text: 'Soporte prioritario', included: true },
    ],
  },
  {
    name: 'ELITE',
    tier: 'Escala',
    icon: Crown,
    priceMonthly: 79,
    priceAnnual: 790,
    description: 'Escala sin límites con soporte dedicado, API y mentoría ilimitada.',
    popular: false,
    color: 'text-brand-accent',
    accentBg: 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500',
    accentText: 'text-white',
    gradientBtn: 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white border-0 shadow-glow-orange hover:opacity-90',
    features: [
      { text: 'Todo de PRO +', included: true },
      { text: 'Tiendas multi-idioma', included: true },
      { text: 'API & webhooks', included: true },
      { text: 'Mentoría ilimitada', included: true },
      { text: 'Acceso a P.I. Fest VIP', included: true },
      { text: 'Branding personalizado', included: true },
      { text: 'Account manager dedicado', included: true },
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-muted/60 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 mask-fade-r" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-accent/8 blur-3xl" />
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
            <Crown className="h-3.5 w-3.5 text-brand-primary" />
            Kit Mujer CEO — Planes
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

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Label
            htmlFor="billing-toggle"
            className={`text-sm font-medium cursor-pointer transition-colors ${
              !annual ? 'text-brand-deep' : 'text-muted-foreground'
            }`}
          >
            Mensual
          </Label>
          <div className="relative">
            <Switch
              id="billing-toggle"
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-[state=checked]:bg-brand-primary data-[state=unchecked]:bg-brand-border"
            />
          </div>
          <Label
            htmlFor="billing-toggle"
            className={`text-sm font-medium cursor-pointer transition-colors ${
              annual ? 'text-brand-deep' : 'text-muted-foreground'
            }`}
          >
            Anual
          </Label>
          <AnimatePresence>
            {annual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700"
              >
                Ahorra ~17%
              </motion.span>
            )}
          </AnimatePresence>
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
              key={plan.name}
              variants={cardVariants}
              className={`group relative flex flex-col rounded-3xl transition-all duration-500 ${
                plan.popular
                  ? 'bg-white p-6 md:p-8 shadow-glow lg:scale-105 lg:z-10 lg:py-10 border-2 border-brand-primary/30'
                  : 'border border-brand-border bg-white p-6 md:p-8 shadow-soft hover:shadow-lift hover:-translate-y-1'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-5 py-2 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Más popular
                  </span>
                </div>
              )}

              {/* Background glow for popular */}
              {plan.popular && (
                <div className="pointer-events-none absolute -inset-px rounded-3xl gradient-primary opacity-10 blur-sm" />
              )}

              <div className="relative">
                {/* Plan header */}
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${plan.accentBg} ${plan.accentText} shadow-soft transition-transform group-hover:scale-110`}
                  >
                    <plan.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${plan.color}`}>
                      {plan.name}
                    </div>
                    <div className="text-sm font-semibold text-brand-deep">{plan.tier}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-brand-deep">
                      ${annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    {plan.priceMonthly > 0 && (
                      <span className="text-sm font-medium text-muted-foreground">
                        /{annual ? 'año' : 'mes'}
                      </span>
                    )}
                  </div>
                  <AnimatePresence mode="wait">
                    {annual && plan.priceMonthly > 0 && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-1 text-xs text-emerald-600 font-medium"
                      >
                        Equivale a ${Math.round(plan.priceAnnual / 12)}/mes
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    asChild
                    size="lg"
                    className={`group/btn w-full rounded-full h-12 text-sm font-semibold ${plan.gradientBtn}`}
                  >
                    <Link href="#beca">
                      {plan.priceMonthly === 0
                        ? 'Comenzar gratis'
                        : plan.popular
                          ? 'Elegir PRO'
                          : 'Elegir ELITE'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

                {/* Features */}
                <ul className="flex-1 space-y-3.5">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature.text}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      {feature.included ? (
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${plan.popular ? 'text-brand-primary' : 'text-brand-primary/70'}`} />
                      ) : (
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/30" />
                      )}
                      <span
                        className={`text-sm leading-snug ${
                          feature.included
                            ? 'text-brand-deep'
                            : 'text-muted-foreground/50 line-through'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 rounded-b-3xl transition-transform duration-500 group-hover:scale-x-100 ${
                  plan.popular
                    ? 'gradient-primary'
                    : plan.name === 'ELITE'
                      ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'
                      : 'bg-brand-deep'
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
            Todos los planes incluyen acceso al marketplace Pariendo Ideas. Sin contratos de permanencia. Cancela cuando quieras.
          </p>
          <div className="flex items-center gap-6 rounded-2xl border border-brand-border bg-white/80 p-4 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-brand-deep">Garantía 30 días</span>
            </div>
            <div className="h-4 w-px bg-brand-border" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-muted text-brand-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-brand-deep">Setup gratuito</span>
            </div>
            <div className="h-4 w-px bg-brand-border" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
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
