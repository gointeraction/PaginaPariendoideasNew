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

const BENEFITS = [
  { icon: Heart, text: 'Acompañamiento psicosocial y bienestar emocional' },
  { icon: Rocket, text: 'Reconstrucción digital acelerada con KIT personalizado' },
  { icon: GraduationCap, text: 'Mentoría 1:1 con expertas certificadas' },
  { icon: Users, text: 'Acceso completo a la comunidad de 12K+ emprendedoras' },
  { icon: Calendar, text: 'Eventos P.I. Fest gratuitos durante la beca' },
  { icon: Star, text: 'Certificación al completar el programa' },
]

export function ScholarshipCTA() {
  return (
    <section id="beca" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50/80 via-purple-50/50 to-white" />

      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-72 w-72 rounded-full bg-brand-accent/15 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="text-slate-900"
          >
            <Badge className="bg-white/90 text-slate-900 border border-slate-300 hover:bg-white shadow-soft backdrop-blur font-semibold">
              <Gift className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
              Beca de Reconstrucción · Convocatoria 2025
            </Badge>

            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 text-balance">
              Tu reconstrucción empieza
              <span className="block gradient-text">con una sola decisión.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-slate-900 font-medium max-w-xl text-pretty">
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
                  className="flex items-start gap-2.5 text-sm text-slate-900 font-medium"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-primary text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="leading-snug text-slate-900 font-medium">{b.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group h-13 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 px-7 py-3.5 text-base"
              >
                <a href={ONBOARDING_URLS.becas}>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Solicitar mi Beca ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <span className="text-xs text-slate-900 font-medium">
                ⏱ Postula en menos de 5 minutos · Sin compromiso
              </span>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex items-center gap-4 text-slate-900 font-medium text-xs">
              <div className="flex -space-x-2">
                {['from-pink-400 to-rose-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500', 'from-violet-400 to-purple-500'].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-[10px] font-bold ring-2 ring-white`}
                  >
                    {['M', 'C', 'A', 'L'][i]}
                  </span>
                ))}
              </div>
              <span className="text-slate-900 font-medium">
                <strong className="text-slate-900 font-bold">+3,200 emprendedoras</strong> ya recibieron su beca este año
              </span>
            </div>
          </motion.div>

          {/* Right Onboarding CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 rounded-3xl gradient-primary opacity-30 blur-2xl" />
            <div className="relative rounded-3xl bg-white p-7 md:p-9 shadow-lift border border-brand-border/60">
              <div className="flex items-center justify-between">
                <Badge className="bg-brand-muted text-brand-primary border-0 font-semibold px-3 py-1">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  Plataforma Oficial
                </Badge>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl gradient-primary text-white shadow-md">
                  <Rocket className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-deep leading-tight">
                  Realiza tu Onboarding en
                  <span className="gradient-text block">Pariendo Ideas</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Completa nuestro diagnóstico guiado y descubre la ruta exacta de crecimiento para tu negocio, con acompañamiento, tecnología y acceso prioritario a becas.
                </p>
              </div>

              {/* Onboarding steps highlights */}
              <div className="mt-6 space-y-3">
                {[
                  {
                    step: '1',
                    title: 'Diagnóstico Guiado de 5 Pasos',
                    desc: 'Evaluación rápida de la etapa y madurez de tu emprendimiento.',
                  },
                  {
                    step: '2',
                    title: 'Clasificación con Inteligencia Artificial',
                    desc: 'Detección automática de tus necesidades críticas y potencial.',
                  },
                  {
                    step: '3',
                    title: 'Asignación de Beca o Programa',
                    desc: 'Activación inmediata de mentorías, herramientas y comunidad.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3.5 rounded-2xl bg-brand-muted/40 p-3.5 border border-brand-border/70 transition-colors hover:bg-brand-muted/70"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl gradient-primary text-white text-xs font-bold shadow-sm">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-brand-deep">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button
                  asChild
                  className="w-full h-12 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 font-semibold text-sm"
                >
                  <a href={ONBOARDING_URLS.becas}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Iniciar Onboarding Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Trust footer */}
              <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  ⏱ 100% Online · 5 min
                </span>
                <span className="inline-flex items-center gap-1">
                  🔒 Datos 100% protegidos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
