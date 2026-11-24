'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Check,
  Gift,
  Heart,
  Rocket,
  GraduationCap,
  Calendar,
  Users,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ONBOARDING_URLS } from '@/lib/constants'
import { useSubscribeModal } from '@/components/layout/SubscribeModalProvider'

const BENEFITS = [
  { icon: Heart, text: 'Acompañamiento psicosocial y bienestar emocional' },
  { icon: Rocket, text: 'Reconstrucción digital acelerada con KIT personalizado' },
  { icon: GraduationCap, text: 'Mentoría 1:1 con expertas certificadas' },
  { icon: Users, text: 'Acceso completo a la comunidad de 12K+ emprendedoras' },
  { icon: Calendar, text: 'Eventos P.I. Fest gratuitos durante la beca' },
  { icon: Star, text: 'Certificación al completar el programa' },
]

export function ScholarshipCTA() {
  const { openSubscribeModal } = useSubscribeModal()
  return (
    <section id="beca" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-salmon-50/80 via-salmon-50/50 to-white dark:from-salmon-50/20 dark:via-salmon-50/15 dark:to-background" />

      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-border/40 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-72 w-72 rounded-full bg-brand-border/30 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />
      <img src="/decor/ondas.svg" alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-10 right-6 -z-10 w-28 rotate-3 opacity-80 md:w-40" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Auditoría 2026-11-24: se eliminó la tarjeta interna "Realiza tu Registro"
            (duplicaba el CTA de registro, traía otra lista de pasos y un segundo
            botón al mismo destino) — queda UNA sola sección de beca con un CTA. */}
        <div className="mx-auto max-w-4xl">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="text-brand-deep"
          >
            <Badge className="bg-card/90 text-brand-deep border border-slate-300 hover:bg-card shadow-soft backdrop-blur font-semibold">
              <Gift className="h-3.5 w-3.5 mr-1.5 text-brand-secondary-ink" />
              Beca de Reconstrucción · Convocatoria 2026
            </Badge>

            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-brand-deep text-balance">
              Tu reconstrucción empieza
              <span className="block gradient-text">con una sola decisión.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-brand-deep font-medium max-w-xl text-pretty">
              Solicita la Beca de Reconstrucción del Programa IMPULSO. Recibe acompañamiento
              integral, mentoría experta y todas las herramientas digitales para hacer despegar
              tu emprendimiento — sin costo durante toda la duración del programa.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-brand-deep font-medium"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-primary-strong text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="leading-snug text-brand-deep font-medium">{b.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group h-13 rounded-full btn-brand shadow-glow px-7 py-3.5 text-base"
              >
                <a
                  href={ONBOARDING_URLS.becas}
                  onClick={(ev) => {
                    ev.preventDefault()
                    openSubscribeModal({ originUrl: ONBOARDING_URLS.becas })
                  }}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Solicitar Beca
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <span className="text-xs text-brand-deep font-medium">
                ⏱ Postula en menos de 5 minutos · Sin compromiso
              </span>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex items-center gap-4 text-brand-deep font-medium text-xs">
              <div className="flex -space-x-2">
                {['from-salmon-700 to-salmon-900', 'from-violeta to-fucsia', 'from-salmon-700 to-salmon-900', 'from-violeta to-fucsia'].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-[10px] font-bold ring-2 ring-white`}
                  >
                    {['M', 'C', 'A', 'L'][i]}
                  </span>
                ))}
              </div>
              <span className="text-brand-deep font-medium">
                <strong className="text-brand-deep font-bold">+3,200 emprendedoras</strong> ya recibieron su beca este año
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
