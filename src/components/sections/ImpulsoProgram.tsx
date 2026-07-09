'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HeartPulse,
  Laptop,
  GraduationCap,
  ArrowRight,
  Calendar,
  Sparkles,
  BookOpen,
  Headphones,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'

const SUBMODULES = [
  {
    id: 'psicosocial',
    title: 'Acompañamiento Psicosocial y Bienestar',
    icon: HeartPulse,
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    description:
      'Sesiones con psicólogas y terapeutas especializadas, recursos de bienestar y seguimiento emocional semanal.',
    items: [
      { icon: Headphones, label: 'Agenda sesiones 1:1 con psicólogas' },
      { icon: BookOpen, label: 'Biblioteca de meditaciones y ejercicios' },
      { icon: Calendar, label: 'Seguimiento emocional semanal' },
    ],
  },
  {
    id: 'digital',
    title: 'Reconstrucción Digital Acelerada',
    icon: Laptop,
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    description:
      'KIT de formación personalizado, contenido secuencial de digitalización y tracker de progreso por módulo.',
    items: [
      { icon: Sparkles, label: 'Solicita tu KIT de formación' },
      { icon: BookOpen, label: 'Contenido secuencial de digitalización' },
      { icon: TrendingUp, label: 'Progreso tracker por módulo' },
    ],
  },
  {
    id: 'mentoria',
    title: 'Becas de Formación y Mentoría 1:1',
    icon: GraduationCap,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    description:
      'Catálogo de becas, matching automático mentora-emprendedora y sesiones de mentoría con scheduling.',
    items: [
      { icon: BookOpen, label: 'Catálogo de becas disponibles' },
      { icon: Sparkles, label: 'Matching automático con mentora' },
      { icon: Calendar, label: 'Scheduling de sesiones de mentoría' },
    ],
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Solicita tu beca',
    description: 'Completa un formulario sencillo contándonos tu historia y necesidades.',
  },
  {
    step: '02',
    title: 'Evaluación personalizada',
    description: 'Nuestro equipo revisa tu solicitud y te asigna el módulo ideal.',
  },
  {
    step: '03',
    title: 'Comienza tu aceleración',
    description: 'Accede al programa, mentoras, recursos y comunidad de inmediato.',
  },
]

export function ImpulsoProgram() {
  return (
    <section id="impulso" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/40 via-white to-white" />
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -right-32 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Programa Renacer · IMPULSO"
          title={
            <>
              Reconstruye tu vida y tu emprendimiento,
              <span className="gradient-text-purple-pink"> paso a paso</span>
            </>
          }
          description="Un programa integral de acompañamiento que combina bienestar emocional, formación digital y mentoría experta para mujeres en proceso de reconversión."
        />

        {/* Submodules grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SUBMODULES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-brand-border bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ${s.text} transition-transform duration-500 group-hover:scale-110`}>
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 font-display text-lg font-bold text-brand-deep leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>

              <ul className="mt-5 space-y-2.5">
                {s.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5 text-sm text-brand-deep/85">
                    <span className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg ${s.bg} ${s.text}`}>
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <Link
                href="#beca"
                className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${s.text} hover:gap-2 transition-all`}
              >
                Conocer más
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <div className="mt-16 rounded-3xl border border-brand-border bg-gradient-to-br from-white to-brand-muted/40 p-8 md:p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Badge className="bg-brand-muted text-brand-primary border-0 hover:bg-brand-muted">
                ¿Cómo funciona?
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-brand-deep leading-tight">
                Tres pasos para iniciar tu
                <span className="gradient-text"> reconstrucción</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Diseñamos un proceso simple y humano. Te acompañamos en cada etapa.
              </p>
              <Button
                asChild
                className="mt-6 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90"
              >
                <Link href="#beca">
                  Solicitar mi Beca
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <div
                  key={s.step}
                  className="relative rounded-2xl bg-white p-5 border border-brand-border shadow-soft"
                >
                  <div className="font-display text-4xl font-bold gradient-text-purple-pink">
                    {s.step}
                  </div>
                  <h4 className="mt-2 font-semibold text-brand-deep">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-primary/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
