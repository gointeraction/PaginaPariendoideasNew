'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, TrendingUp, Heart, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './Modules'
import { ONBOARDING_URLS } from '@/lib/constants'

type Testimonial = {
  name: string
  initials: string
  role: string
  location: string
  gradient: string
  content: string
  rating: number
  highlight: string
  icon: typeof TrendingUp
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'María González',
    initials: 'MG',
    role: 'Fundadora · Arepas María',
    location: 'Caracas, Venezuela',
    gradient: 'from-pink-400 to-rose-500',
    content:
      'Llegué al Programa Impulso en mi momento más difícil. El acompañamiento psicosocial me devolvió la confianza y la reconstrucción digital me dio las herramientas. Hoy vendo 200 arepas diarias y empleo a 3 mujeres.',
    rating: 5,
    highlight: '+340% en ventas',
    icon: TrendingUp,
  },
  {
    name: 'Carolina Pérez',
    initials: 'CP',
    role: 'Mentora · Marketing Digital',
    location: 'Buenos Aires, Argentina',
    gradient: 'from-purple-400 to-fuchsia-500',
    content:
      'Como mentora he acompañado a más de 90 emprendedoras. El matching del algoritmo es impresionante: me conecta con mujeres que realmente necesitan mi experiencia. La comunidad es mi segunda familia.',
    rating: 5,
    highlight: '98 sesiones 1:1',
    icon: Heart,
  },
  {
    name: 'Valentina Rodríguez',
    initials: 'VR',
    role: 'CEO · Fintech Ella',
    location: 'Bogotá, Colombia',
    gradient: 'from-orange-400 to-amber-500',
    content:
      'El Kit Mujer CEO me permitió profesionalizar mi negocio. El POS me ahorra 10 horas semanales, el e-commerce duplicó mis ventas y el marketplace me trajo 5 clientas corporativas en 2 meses.',
    rating: 5,
    highlight: '2x en 60 días',
    icon: Award,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/40 via-white to-purple-50/40" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="HISTORIAS QUE INSPIRAN"
          title={
            <>
              CONECTA CON MUJERES QUE
              <span className="gradient-text block"> PARIERON SUS IDEAS… HOY SON EXITOSAS Y RESILIENTES</span>
            </>
          }
          description="Historias reales de emprendedoras resilientes que reconstruyeron su vida y negocio hoy cuentan con el acompañamiento de PARIENDO IDEAS."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-brand-border text-brand-deep hover:bg-brand-muted/50 font-semibold text-sm px-6 shadow-soft"
          >
            <a href="#historias">
              <Sparkles className="mr-2 h-4 w-4 text-brand-primary" />
              Historias que inspiran
            </a>
          </Button>

          <Button
            asChild
            className="rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 font-semibold text-sm px-7"
          >
            <a href={ONBOARDING_URLS.becas}>
              Únete ya
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div id="historias" className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-brand-border bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="pointer-events-none absolute -top-4 -right-4 h-20 w-20 rounded-full gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />

              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <Quote className="h-9 w-9 text-brand-primary/30" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-2.5 py-1 text-xs font-semibold text-brand-primary">
                  <t.icon className="h-3.5 w-3.5" />
                  {t.highlight}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mt-3 text-sm text-brand-deep/85 leading-relaxed flex-1">
                "{t.content}"
              </blockquote>

              {/* Author */}
              <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-border pt-4">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white text-sm font-bold`}>
                  {t.initials}
                </span>
                <div>
                  <div className="font-semibold text-brand-deep text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="text-[10px] text-muted-foreground/80">{t.location}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-14 rounded-3xl gradient-primary p-[1.5px] shadow-glow"
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-4 md:divide-x divide-brand-border">
              {[
                { value: '94%', label: 'reportan aumento de ingresos', icon: TrendingUp },
                { value: '12K+', label: 'empresarias en la comunidad', icon: Sparkles },
                { value: '4.9★', label: 'satisfacción promedio', icon: Star },
                { value: '87%', label: 'completan el programa', icon: Award },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`text-center ${i > 0 ? 'md:pl-8' : ''}`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand-primary mb-3">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
