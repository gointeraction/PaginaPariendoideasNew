'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
  Star,
  Heart,
  Rocket,
  Users,
  ShoppingBag,
  GraduationCap,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ONBOARDING_URLS } from '@/lib/constants'

const STATS = [
  { value: '12K+', label: 'Emprendedoras activas', icon: Users },
  { value: '450+', label: 'Mentoras certificadas', icon: Star },
  { value: '3.2K', label: 'Becas otorgadas', icon: GraduationCap },
  { value: '$1.8M', label: 'Ventas generadas', icon: ShoppingBag },
]

const MODULE_PILLS = [
  { label: 'Impulso', icon: Heart, color: 'from-pink-500 to-rose-500' },
  { label: 'Kit Mujer CEO', icon: ShoppingBag, color: 'from-purple-500 to-fuchsia-500' },
  { label: 'Aceleración Digital', icon: Rocket, color: 'from-orange-500 to-amber-500' },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-muted via-white to-white" />
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50 mask-fade-r" />

      {/* Animated blobs */}
      <div className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-brand-secondary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-primary/25 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute -bottom-20 right-1/3 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass border border-brand-border/80 px-3.5 py-1.5 text-xs font-medium text-brand-deep shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
              </span>
              Programa Renacer 2025 — Convocatoria abierta
              <Badge className="ml-1 gradient-primary text-white border-0 hover:opacity-90">Becas</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-deep text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem]"
            >
              Donde las mujeres
              <span className="block">
                <span className="gradient-text">parimos ideas</span>
                <span className="text-brand-deep"> que cambian el mundo.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty truncate lg:mx-0"
            >
              Hub de aceleramiento digital femenino para Venezuela y LATAM. Acompañamiento
              psicosocial, reconstrucción digital acelerada, mentoría 1:1 y un ecosistema
              completo para que tu emprendimiento despegue.
            </motion.p>

            {/* Module pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {MODULE_PILLS.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white/70 px-3 py-1.5 text-sm font-medium text-brand-deep shadow-soft backdrop-blur"
                >
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${m.color} text-white`}>
                    <m.icon className="h-3 w-3" />
                  </span>
                  {m.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group h-13 w-full sm:w-auto rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 px-7 py-3.5 text-base"
              >
                <a href={ONBOARDING_URLS.becas}>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Solicita tu Beca de Reconstrucción
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 w-full sm:w-auto rounded-full border-2 border-brand-border bg-white/70 text-brand-deep hover:bg-brand-muted/60 px-7 py-3.5 text-base backdrop-blur"
              >
                <Link href="#story">
                  <PlayCircle className="mr-2 h-5 w-5 text-brand-primary" />
                  Ver cómo funciona
                </Link>
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            >
              <div className="flex -space-x-3">
                {['from-pink-400 to-rose-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500', 'from-violet-400 to-purple-500', 'from-fuchsia-400 to-pink-500'].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-xs font-bold ring-2 ring-white shadow-soft`}
                  >
                    {['MG', 'CP', 'AR', 'LS', 'JV'][i]}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                  <span className="ml-1.5 text-sm font-semibold text-brand-deep">4.9/5</span>
                </div>
                <p className="text-xs text-muted-foreground">+2,800 reseñas de emprendedoras</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <HeroVisual reduce={reduce} />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-border bg-brand-border shadow-soft md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group relative bg-white p-6 md:p-8 transition-colors hover:bg-brand-muted/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-primary transition-transform group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text-purple-pink">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroVisual({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Main card — Dashboard preview */}
      <div className="relative rounded-3xl gradient-primary p-[1.5px] shadow-glow group transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.25)]">
        <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-5 md:p-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-muted/30 group-hover:to-white">
          {/* Card header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl gradient-primary text-white">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-brand-deep">Mi Dashboard</div>
                <div className="text-xs text-muted-foreground">Hola, María 👋</div>
              </div>
            </div>
            <Badge className="bg-brand-muted text-brand-primary border-0 hover:bg-brand-muted">
              Plan PRO
            </Badge>
          </div>

          {/* Progress overview */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: 'Impulso', value: 72, color: 'from-pink-500 to-rose-500' },
              { label: 'Kit CEO', value: 58, color: 'from-purple-500 to-fuchsia-500' },
              { label: 'Mentoría', value: 90, color: 'from-orange-500 to-amber-500' },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl bg-brand-muted/50 p-3 sm:p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  {p.label}
                </div>
                <div className="mt-1 font-display text-xl font-bold text-brand-deep">{p.value}%</div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                    style={{ width: `${p.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Activity list */}
          <div className="mt-5 space-y-2.5">
            {[
              { icon: '🛍️', title: 'Nueva venta — Arepas Artesanales', sub: 'Hace 2 min · $25.00', accent: 'text-emerald-600' },
              { icon: '🎯', title: 'Sesión de mentoría confirmada', sub: 'Martes 10:00 AM · Carolina P.', accent: 'text-brand-primary' },
              { icon: '🎓', title: 'Beca de Reconstrucción aprobada', sub: 'Felicitaciones María!', accent: 'text-brand-accent' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white p-3 shadow-soft"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-base">
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-brand-deep">{item.title}</div>
                  <div className={`truncate text-xs ${item.accent}`}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card — Sales */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 sm:-left-10 top-32 hidden lg:block w-44 rounded-2xl border border-brand-border bg-white p-4 shadow-lift"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">Ventas del mes</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            +24%
          </span>
        </div>
        <div className="mt-2 font-display text-2xl font-bold text-brand-deep">$3,420</div>
        <div className="mt-3 flex h-10 items-end gap-1 overflow-hidden">
          {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 min-h-[4px] rounded-t gradient-primary opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating card — Mentor */}
      <motion.div
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 sm:-right-8 -bottom-6 hidden lg:block w-52 rounded-2xl border border-brand-border bg-white p-4 shadow-lift"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white text-xs font-bold">
            CP
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-brand-deep">Carolina Pérez</div>
            <div className="text-[10px] text-muted-foreground">Mentora · Marketing Digital</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-brand-muted/50 p-2">
          <Quote className="h-4 w-4 text-brand-primary" />
          <p className="text-xs text-brand-deep">"Tu marca tiene potencial enorme en Instagram Reels."</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-brand-accent text-brand-accent" />
            ))}
          </div>
          <span className="text-xs font-semibold text-brand-deep">98 sesiones</span>
        </div>
      </motion.div>

      {/* Decorative ring */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full border-2 border-dashed border-brand-primary/30 animate-spin-slow" />
    </div>
  )
}
