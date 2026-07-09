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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-deep via-purple-900 to-brand-deep" />

      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-brand-secondary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-primary/30 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="text-white"
          >
            <Badge className="bg-white/10 text-white border-0 hover:bg-white/10 backdrop-blur">
              <Gift className="h-3 w-3 mr-1 text-brand-accent" />
              Beca de Reconstrucción · Convocatoria 2025
            </Badge>

            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Tu reconstrucción empieza
              <span className="block gradient-text">con una sola decisión.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-white/75 max-w-xl text-pretty">
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
                  className="flex items-start gap-2.5 text-sm text-white/90"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-primary text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{b.text}</span>
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
                <Link href="#register">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Solicitar mi Beca ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <span className="text-xs text-white/60">
                ⏱ Postula en menos de 5 minutos · Sin compromiso
              </span>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex items-center gap-4 text-white/70 text-xs">
              <div className="flex -space-x-2">
                {['from-pink-400 to-rose-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500', 'from-violet-400 to-purple-500'].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-[10px] font-bold ring-2 ring-brand-deep`}
                  >
                    {['M', 'C', 'A', 'L'][i]}
                  </span>
                ))}
              </div>
              <span>
                <strong className="text-white">+3,200 emprendedoras</strong> ya recibieron su beca este año
              </span>
            </div>
          </motion.div>

          {/* Right form preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 rounded-3xl gradient-primary opacity-30 blur-2xl" />
            <div className="relative rounded-3xl bg-white p-6 md:p-8 shadow-lift">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-deep">
                    Solicitud de Beca
                  </h3>
                  <p className="text-xs text-muted-foreground">Programa IMPULSO · Renacer 2025</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white">
                  <Gift className="h-5 w-5" />
                </span>
              </div>

              {/* Progress */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-brand-muted overflow-hidden">
                  <div className="h-full w-1/3 gradient-primary rounded-full" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Paso 1/3</span>
              </div>

              {/* Mock form fields */}
              <div className="mt-5 space-y-3">
                <div>
                  <label className="text-xs font-medium text-brand-deep">¿Cuál es tu motivación?</label>
                  <div className="mt-1.5 rounded-xl border border-brand-border bg-brand-muted/40 px-3 py-2.5 text-xs text-muted-foreground">
                    Quiero reconstruir mi emprendimiento después de...
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-brand-deep">Módulo de interés</label>
                    <div className="mt-1.5 rounded-xl border border-brand-border bg-brand-muted/40 px-3 py-2.5 text-xs text-muted-foreground">
                      Reconstrucción Digital
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-brand-deep">Disponibilidad</label>
                    <div className="mt-1.5 rounded-xl border border-brand-border bg-brand-muted/40 px-3 py-2.5 text-xs text-muted-foreground">
                      Matutina
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-5 w-full rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90">
                <Link href="#register">
                  Continuar solicitud
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                🔒 Tus datos están seguros. No compartimos tu información.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
