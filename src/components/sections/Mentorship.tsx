'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Star,
  Calendar,
  Video,
  Award,
  Languages,
  ArrowRight,
  Quote,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'

type Mentor = {
  name: string
  initials: string
  specialty: string
  rating: number
  sessions: number
  gradient: string
  languages: string[]
  bio: string
}

const MENTORS: Mentor[] = [
  {
    name: 'Carolina Pérez',
    initials: 'CP',
    specialty: 'Marketing Digital',
    rating: 4.9,
    sessions: 98,
    gradient: 'from-pink-400 to-rose-500',
    languages: ['Español', 'Inglés'],
    bio: 'Estratega digital con 12 años en marketing. Ex-Google LATAM.',
  },
  {
    name: 'Valentina Rodríguez',
    initials: 'VR',
    specialty: 'Finanzas & Inversión',
    rating: 5.0,
    sessions: 124,
    gradient: 'from-purple-400 to-fuchsia-500',
    languages: ['Español', 'Portugués'],
    bio: 'CFO en fintech. Mentora de emprendedoras en levantamiento de capital.',
  },
  {
    name: 'Mariana López',
    initials: 'ML',
    specialty: 'E-commerce & Retail',
    rating: 4.8,
    sessions: 76,
    gradient: 'from-orange-400 to-amber-500',
    languages: ['Español'],
    bio: 'Fundadora de 3 tiendas online. Experta en logística y marketplace.',
  },
  {
    name: 'Daniela Torres',
    initials: 'DT',
    specialty: 'Desarrollo & Producto',
    rating: 4.9,
    sessions: 152,
    gradient: 'from-violet-400 to-purple-500',
    languages: ['Español', 'Inglés'],
    bio: 'CTO en startup SaaS. Mentora en producto digital y no-code.',
  },
]

const SPECIALTIES = [
  'Marketing Digital',
  'Finanzas',
  'Legal',
  'Tecnología',
  'E-commerce',
  'Liderazgo',
  'Branding',
  'Exportación',
]

export function Mentorship() {
  return (
    <section id="mentoria" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-fuchsia-50/30 to-white" />
      <div className="pointer-events-none absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Mentoría 1:1"
          title={
            <>
              Aprende de mentoras que
              <span className="gradient-text-purple-pink"> ya recorrieron el camino</span>
            </>
          }
          description="Matching automático según tu categoría, etapa e idioma. Sesiones por Zoom o Meet con recordatorios automáticos y feedback bidireccional."
        />

        {/* Specialties filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SPECIALTIES.map((s, i) => (
            <motion.button
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-full border border-brand-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand-deep/80 hover:border-brand-primary/40 hover:bg-brand-muted/50 hover:text-brand-primary transition-all"
            >
              {s}
            </motion.button>
          ))}
        </div>

        {/* Mentors grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MENTORS.map((m, i) => (
            <MentorCard key={m.name} mentor={m} index={i} />
          ))}
        </div>

        {/* Process banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-14 rounded-3xl gradient-primary p-[1.5px] shadow-glow"
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <Badge className="bg-brand-muted text-brand-primary border-0 hover:bg-brand-muted">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Cómo funciona el matching
                </Badge>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-brand-deep leading-tight">
                  Encuentra a tu mentora ideal
                  <span className="gradient-text"> en 3 pasos</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Nuestro algoritmo analiza tu categoría, etapa de negocio, idioma y
                  disponibilidad para sugerirte las mentoras con mejor scoring.
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90"
                >
                  <Link href="#beca">
                    Solicitar mentoría
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { n: '1', t: 'Filtra', d: 'Por especialidad, idioma y rating', icon: Sparkles },
                  { n: '2', t: 'Agenda', d: 'Selecciona fecha y hora disponibles', icon: Calendar },
                  { n: '3', t: 'Conecta', d: 'Videollamada con recordatorios', icon: Video },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="relative rounded-2xl bg-brand-muted/40 p-4 border border-brand-border"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg gradient-primary text-white text-xs font-bold">
                        {s.n}
                      </span>
                      <s.icon className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div className="mt-2 font-semibold text-brand-deep text-sm">{s.t}</div>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MentorCard({ mentor: m, index }: { mentor: Mentor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="flex items-start gap-3">
        <div className="relative">
          <span
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.gradient} text-white font-bold text-base shadow-md`}
          >
            {m.initials}
          </span>
          <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base font-bold text-brand-deep truncate">{m.name}</h3>
          <p className="text-xs text-muted-foreground">{m.specialty}</p>
          <div className="mt-1 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-brand-deep">{m.rating}</span>
            <span className="text-xs text-muted-foreground">· {m.sessions} sesiones</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {m.bio}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {m.languages.map((l) => (
          <span
            key={l}
            className="inline-flex items-center gap-1 rounded-full bg-brand-muted/60 px-2 py-0.5 text-[10px] font-medium text-brand-deep/70"
          >
            <Languages className="h-2.5 w-2.5" />
            {l}
          </span>
        ))}
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          <Award className="h-2.5 w-2.5" />
          Verificada
        </span>
      </div>

      <Button
        asChild
        variant="outline"
        className="mt-4 w-full rounded-full border-2 border-brand-border text-brand-deep hover:border-brand-primary/40 hover:bg-brand-muted/40 text-xs"
      >
        <Link href="#beca">
          <Calendar className="mr-1.5 h-3.5 w-3.5" />
          Agendar sesión
        </Link>
      </Button>
    </motion.div>
  )
}
