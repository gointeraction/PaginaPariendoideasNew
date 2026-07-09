'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Video,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  PartyPopper,
  Mic,
  Coffee,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'

type Event = {
  title: string
  date: string
  day: string
  month: string
  time: string
  modality: 'VIRTUAL' | 'PRESENCIAL' | 'HIBRIDO'
  location: string
  category: string
  registered: number
  capacity: number
  gradient: string
  speakers: { name: string; role: string; initials: string }[]
}

const EVENTS: Event[] = [
  {
    title: 'P.I. Fest: Mujeres que Transforman',
    date: '14 Feb 2026',
    day: '14',
    month: 'FEB',
    time: '10:00 AM',
    modality: 'HIBRIDO',
    location: 'Caracas + Online',
    category: 'Festival',
    registered: 842,
    capacity: 1000,
    gradient: 'from-pink-500 to-rose-500',
    speakers: [
      { name: 'Carolina Pérez', role: 'CMO LATAM', initials: 'CP' },
      { name: 'Valentina Rodríguez', role: 'CFO Fintech', initials: 'VR' },
    ],
  },
  {
    title: 'Workshop: E-commerce con MercadoPago',
    date: '22 Feb 2026',
    day: '22',
    month: 'FEB',
    time: '4:00 PM',
    modality: 'VIRTUAL',
    location: 'Zoom',
    category: 'Workshop',
    registered: 320,
    capacity: 500,
    gradient: 'from-purple-500 to-fuchsia-500',
    speakers: [
      { name: 'Mariana López', role: 'Founder RetailCo', initials: 'ML' },
    ],
  },
  {
    title: 'Mentoring Day: 1:1 con expertas',
    date: '08 Mar 2026',
    day: '08',
    month: 'MAR',
    time: '9:00 AM',
    modality: 'PRESENCIAL',
    location: 'Caracas, USB',
    category: 'Mentoría',
    registered: 156,
    capacity: 200,
    gradient: 'from-orange-500 to-amber-500',
    speakers: [
      { name: 'Daniela Torres', role: 'CTO SaaS', initials: 'DT' },
      { name: 'Carolina Pérez', role: 'CMO LATAM', initials: 'CP' },
    ],
  },
]

const MODALITY_STYLES = {
  VIRTUAL: { label: 'Virtual', icon: Video, className: 'bg-blue-50 text-blue-700' },
  PRESENCIAL: { label: 'Presencial', icon: MapPin, className: 'bg-emerald-50 text-emerald-700' },
  HIBRIDO: { label: 'Híbrido', icon: Users, className: 'bg-purple-50 text-purple-700' },
}

export function Events() {
  return (
    <section id="eventos" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/40 via-white to-white" />
      <div className="pointer-events-none absolute top-20 -right-32 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="P.I. Fest · Eventos del hub"
            title={
              <>
                Festivales, workshops y
                <span className="gradient-text"> encuentros que inspiran</span>
              </>
            }
            description="Eventos virtuales y presenciales con mentoras, expertas y una comunidad lista para colaborar. Calendario activo todo el año."
          />
          <Button
            asChild
            variant="outline"
            className="hidden lg:inline-flex rounded-full border-2 border-brand-border text-brand-deep hover:bg-brand-muted/40"
          >
            <Link href="#eventos">
              Ver calendario completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <EventCard key={e.title} event={e} index={i} />
          ))}
        </div>

        {/* Ecosystem Festivo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl border border-brand-border bg-gradient-to-br from-brand-deep to-purple-900 p-8 md:p-10 overflow-hidden relative"
        >
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-brand-accent/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <Badge className="bg-white/10 text-white border-0 hover:bg-white/10 backdrop-blur">
                <PartyPopper className="h-3 w-3 mr-1" />
                Ecosistema Festivo
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                Networking interactivo y salas temáticas
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Espacios digitales y presenciales para conocer a otras emprendedoras, intercambiar
                experiencias y construir alianzas que impulsen tu negocio.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Mic, title: 'Salas temáticas', desc: 'Conversaciones por industria' },
                { icon: Coffee, title: 'Coffee breaks', desc: 'Networking 1:1 aleatorio' },
                { icon: Users, title: 'Comunidad activa', desc: '+12K emprendedoras' },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-white">
                    <f.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="mt-2.5 font-semibold text-white text-sm">{f.title}</div>
                  <div className="text-xs text-white/60">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function EventCard({ event: e, index }: { event: Event; index: number }) {
  const modalityStyle = MODALITY_STYLES[e.modality]
  const fillPct = Math.round((e.registered / e.capacity) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      {/* Cover */}
      <div className={`relative h-32 bg-gradient-to-br ${e.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute top-3 left-3 rounded-2xl bg-white/95 backdrop-blur px-3 py-2 text-center shadow-md">
          <div className="font-display text-xl font-bold text-brand-deep leading-none">{e.day}</div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{e.month}</div>
        </div>
        <Badge className={`absolute top-3 right-3 ${modalityStyle.className} border-0 hover:opacity-90`}>
          <modalityStyle.icon className="h-3 w-3 mr-1" />
          {modalityStyle.label}
        </Badge>
        <div className="absolute bottom-3 left-3 text-white">
          <Badge className="bg-white/20 text-white border-0 backdrop-blur hover:bg-white/20">
            <Sparkles className="h-3 w-3 mr-1" />
            {e.category}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-brand-deep leading-snug line-clamp-2">
          {e.title}
        </h3>

        <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-primary" />
            {e.date} · {e.time}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-primary" />
            {e.location}
          </div>
        </div>

        {/* Speakers */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-2">
            {e.speakers.map((s) => (
              <span
                key={s.name}
                title={`${s.name} · ${s.role}`}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 text-white text-[10px] font-bold ring-2 ring-white"
              >
                {s.initials}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">
            +{e.speakers.length} {e.speakers.length === 1 ? 'ponente' : 'ponentes'}
          </span>
        </div>

        {/* Capacity bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-muted-foreground">{e.registered}/{e.capacity} registradas</span>
            <span className="font-semibold text-brand-deep">{fillPct}% lleno</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-brand-muted overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${e.gradient}`}
              style={{ width: `${fillPct}%` }}
            />
          </div>
        </div>

        <Button
          asChild
          className="mt-4 w-full rounded-full gradient-primary text-white border-0 shadow-soft hover:opacity-90 text-xs"
        >
          <Link href="#eventos">
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            Registrarme
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
