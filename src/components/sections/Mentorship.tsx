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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'
import { ONBOARDING_URLS, getMentorBookingUrl } from '@/lib/constants'

type Mentor = {
  id: string
  name: string
  specialty: string
  image: string
}

const MENTORS: Mentor[] = [
  {
    id: 'dra-heidy-oropeza',
    name: 'Dra. Heidy Oropeza',
    specialty: 'Médica y Asesora de Bienestar Integrativo',
    image: '/Mentores/1.png',
  },
  {
    id: 'prof-wolfan-bellorin',
    name: 'Prof. Wolfan Bellorín',
    specialty: 'Profesor de Oratoria y Locución',
    image: '/Mentores/2.png',
  },
  {
    id: 'ing-carlos-moreno',
    name: 'Ing. Carlos Moreno',
    specialty: 'Experto en Blockchain y Criptoactivos',
    image: '/Mentores/3.png',
  },
  {
    id: 'lic-jose-yvan-bohorquez',
    name: 'Lic. José Yván Bohórquez',
    specialty: 'Experto en Inteligencia Artificial (IA)',
    image: '/Mentores/4.png',
  },
  {
    id: 'lic-celsa-moza',
    name: 'Lic. Celsa Moza',
    specialty: 'Experta en Programación Neurolingüística (PNL)',
    image: '/Mentores/5.png',
  },
  {
    id: 'lic-soley-medina',
    name: 'Lic. Soley Medina',
    specialty: 'Licenciada en Contaduría y Finanzas',
    image: '/Mentores/6.png',
  },
  {
    id: 'arq-dioraisa-lomartire',
    name: 'Arq. Dioraisa Lomartire',
    specialty: 'Arquitecta Especialista en Diseño de Interiores y Feng Shui',
    image: '/Mentores/7.png',
  },
  {
    id: 'abg-wendy-mendez',
    name: 'Abg. Wendy Méndez',
    specialty: 'Abogada Especialista en Derecho Contractual',
    image: '/Mentores/8.png',
  },
]

export function Mentorship() {
  const [isPaused, setIsPaused] = React.useState(false)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollAmount = container.clientWidth * 0.75
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  // Autoplay sutil del carrusel cuando no está pausado por el cursor o toque
  React.useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      if (!scrollRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section id="mentoria" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-muted/20 to-white" />
      <div className="pointer-events-none absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-brand-secondary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Mentoría 1:1"
          title={
            <>
              Aprende de mentoras y mentores que
              <span className="gradient-text"> ya recorrieron el camino</span>
            </>
          }
          description="Sesiones estratégicas personalizadas con nuestra red de especialistas para acelerar y consolidar tu emprendimiento."
        />

        {/* Carousel controls header */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-brand-deep">
              Red de Mentoras y Mentores Pariendo Ideas (8 profesionales)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="h-9 w-9 rounded-full border-brand-border bg-white text-brand-deep shadow-sm hover:border-brand-primary hover:text-brand-primary disabled:opacity-40"
              aria-label="Anterior mentor"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="h-9 w-9 rounded-full border-brand-border bg-white text-brand-deep shadow-sm hover:border-brand-primary hover:text-brand-primary disabled:opacity-40"
              aria-label="Siguiente mentor"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mentors Scrollable Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="mt-6 flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MENTORS.map((m) => (
            <div
              key={m.id}
              className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0 snap-start"
            >
              <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:border-brand-primary/50">
                {/* Mentor Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-muted/20">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Mentor Details - Sin estrellas, limpio y formal */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep group-hover:text-brand-primary transition-colors leading-snug">
                    {m.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {m.specialty}
                  </p>

                  <div className="mt-4 pt-4 border-t border-brand-border/60">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-2 border-brand-border text-brand-deep hover:border-brand-primary/40 hover:bg-brand-muted/40 text-xs font-semibold group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all shadow-sm"
                    >
                      <a href={getMentorBookingUrl(m.name)}>
                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                        Agendar sesión 1:1
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground sm:hidden">
          <span>Desliza para ver más mentores</span>
          <ArrowRight className="h-3 w-3" />
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
                  Nuestro algoritmo analiza tu categoría, etapa de negocio, necesidades específicas y
                  disponibilidad para asignarte las mentorías estratégicas que impulsarán tu crecimiento.
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90"
                >
                  <a href={ONBOARDING_URLS.aceleracion}>
                    Comenzar aceleración
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { n: '1', t: 'Postula', d: 'Completa tu diagnóstico en la plataforma', icon: Sparkles },
                  { n: '2', t: 'Agenda', d: 'Selecciona fecha y hora para tu sesión', icon: Calendar },
                  { n: '3', t: 'Conecta', d: 'Videollamada 1:1 con mentoría personalizada', icon: Video },
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
