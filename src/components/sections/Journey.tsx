'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Rocket,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ONBOARDING_URLS } from '@/lib/constants'

const STEPS = [
  {
    n: '01',
    title: 'Postulación',
    description:
      'Completa el formulario de beca en menos de 10 minutos. Cuéntanos tu historia y tu proyecto.',
    icon: ClipboardCheck,
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-brand-primary/10',
    text: 'text-brand-primary',
    duration: '10 min',
  },
  {
    n: '02',
    title: 'Diagnóstico',
    description:
      'El sistema te asignará un nivel de arranque y un equipo especializado diseñará tu plan de negocio personalizado para ser ejecutado en tres meses.',
    icon: Rocket,
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-brand-secondary/10',
    text: 'text-brand-secondary',
    duration: 'Personalizado',
  },
  {
    n: '03',
    title: 'Aceleramiento',
    description:
      'Implementación del Kit Digital Mujer CEO avalado por Cavecom-e para la reconstrucción y aceleramiento de tu emprendimiento o negocio.',
    icon: TrendingUp,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-brand-accent/10',
    text: 'text-brand-accent',
    duration: '3 meses',
  },
  {
    n: '04',
    title: 'Egreso',
    description:
      'Obtendrás tu Certificado de Mujer CEO avalado por Cavecom-e y de acceso vitalicio a la comunidad.',
    icon: Award,
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-brand-primary/10',
    text: 'text-brand-primary',
    duration: 'Vitalicio',
  },
]

const CHECKLIST = [
  'Plan de negocio personalizado validado',
  'Tienda online activa (Kit Mujer CEO)',
  'Acompañamiento y sesiones de mentoría',
  'Certificado de Mujer CEO avalado por Cavecom-e',
  'Acceso vitalicio a la comunidad',
  'Networking con red de mentoras y empresarias',
]

export function Journey() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-muted/30 to-white" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 mask-fade-r" />

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
            <Rocket className="h-3.5 w-3.5 text-brand-primary" />
            Tu Camino
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-deep text-balance sm:text-4xl md:text-5xl">
            De idea a negocio
            <span className="gradient-text"> en 4 pasos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty">
            Un proceso claro, acompañado y medible. En 3 meses transformamos tu emprendimiento.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Connecting line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="pointer-events-none absolute top-12 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-brand-border to-transparent lg:block" />
              )}

              <div className="relative h-full rounded-3xl border border-brand-border bg-white p-6 shadow-soft transition-all hover:shadow-lift hover:-translate-y-1">
                {/* Step number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${step.bg} ${step.text} transition-transform group-hover:scale-110`}
                  >
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-bold text-brand-border group-hover:text-brand-muted transition-colors">
                    {step.n}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-brand-deep">{step.title}</h3>
                  <span className="rounded-full bg-brand-muted px-2 py-0.5 text-[10px] font-semibold text-brand-primary">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 rounded-b-3xl bg-gradient-to-r ${step.color} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-3xl gradient-primary p-[1.5px] shadow-glow"
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-6 md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-deep">
                  Al egresar del Programa Renacer tendrás:
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Resultados tangibles y verificables. No es un curso más: es una transformación
                  integral de tu emprendimiento.
                </p>
                <div className="mt-6">
                  <Button asChild className="rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 font-semibold text-sm">
                    <a href={ONBOARDING_URLS.becas}>
                      Comenzar mi postulación
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CHECKLIST.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <span className="text-sm font-medium text-brand-deep">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
