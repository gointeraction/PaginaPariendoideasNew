'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, MessageCircleQuestion, ChevronDown, Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const FAQ_CATEGORIES = ['Todas', 'Becas', 'Mentoría', 'Kit CEO', 'Comunidad'] as const

const FAQS = [
  {
    category: 'Becas',
    question: '¿Quiénes pueden aplicar a las Becas de Reconstrucción Digital?',
    answer:
      'Mujeres emprendedoras mayores de 18 años, residentes de Venezuela o LATAM, que tengan un proyecto de negocio (formal o informal) o una idea validada. Se evalúa motivación, viabilidad del proyecto y compromiso con el programa. Priorizamos mujeres víctimas de violencia, jefas de hogar y en situación de vulnerabilidad económica.',
  },
  {
    category: 'Becas',
    question: '¿Las becas y el programa tienen algún costo?',
    answer:
      'No. Las Becas de Reconstrucción Digital cubren el 100% del programa: acompañamiento psicosocial, formación digital, mentoría 1:1 y acceso al KIT Digital. El Programa Renacer (IMPULSO) es 100% gratuito gracias a nuestros aliados y donantes.',
  },
  {
    category: 'Mentoría',
    question: '¿Cómo funciona el matching con mi mentora?',
    answer:
      'Al inscribirte completas un perfil de habilidades, objetivos y áreas de interés. Nuestro sistema de matching inteligente te conecta con la mentora certificada que mejor se ajusta a tu perfil y sector. Las sesiones son 1:1, virtuales, y puedes agendarlas desde tu dashboard.',
  },
  {
    category: 'Mentoría',
    question: '¿Cuántas sesiones de mentoría incluye el programa?',
    answer:
      'El Programa Renacer incluye 6 sesiones de mentoría 1:1 distribuidas en 3 meses. Las emprendedoras con Kit Mujer CEO PRO tienen acceso ilimitado a sesiones de mentoría especializada según disponibilidad. Cada sesión dura 50 minutos y queda grabada en tu dashboard.',
  },
  {
    category: 'Kit CEO',
    question: '¿Qué incluye exactamente el KIT Mujer CEO?',
    answer:
      'El KIT Mujer CEO es un ecosistema digital integrado: tienda online (e-commerce), punto de venta (POS), acceso a marketplace, gestión de eventos, comunidad, módulo educativo y panel de métricas. Todo sincronizado en una sola plataforma con tu marca personalizada.',
  },
  {
    category: 'Kit CEO',
    question: '¿Puedo vender productos físicos y digitales?',
    answer:
      'Sí. El KIT CEO soporta productos físicos (con inventario, envíos y POS), productos digitales (cursos, e-books, plantillas), servicios y suscripciones. La pasarela de pagos integrada soporta MercadoPago, Stripe, transferencias y pago móvil (Venezuela).',
  },
  {
    category: 'Comunidad',
    question: '¿Cómo accedo a la comunidad Pariendo Ideas?',
    answer:
      'Al inscribirte en cualquier programa recibes acceso completo a la comunidad: foros temáticos, mensajería directa, grupos por sector (gastronomía, moda, tecnología, etc.), tablón de oportunidades y directorio de emprendedoras. La comunidad es 100% femenina y moderada.',
  },
  {
    category: 'Comunidad',
    question: '¿Los P.I. Fest son presenciales o virtuales?',
    answer:
      'Ambos. Realizamos 4 P.I. Fest presenciales al año (Caracas, Maracaibo, Valencia y ciudades LATAM) y 12 virtuales. Los eventos presenciales incluyen networking, workshops, feria de emprendedoras y speakers internacionales. Las entradas tienen descuento para miembros activas.',
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof FAQ_CATEGORIES)[number]>(
    'Todas'
  )
  const [query, setQuery] = React.useState('')

  const filtered = React.useMemo(() => {
    return FAQS.filter((f) => {
      const matchesCategory = activeCategory === 'Todas' || f.category === activeCategory
      const matchesQuery =
        query.trim() === '' ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-muted/30 to-white" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-r" />
      <div className="pointer-events-none absolute top-20 -right-20 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass border border-brand-border/80 px-4 py-1.5 text-xs font-semibold text-brand-deep shadow-soft">
            <MessageCircleQuestion className="h-3.5 w-3.5 text-brand-primary" />
            Preguntas Frecuentes
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-deep text-balance sm:text-4xl md:text-5xl">
            Resolvemos tus
            <span className="gradient-text"> dudas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty">
            Todo lo que necesitas saber sobre becas, mentoría, el Kit Mujer CEO y nuestra comunidad.
          </p>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca una pregunta…"
              className="h-12 rounded-full border-brand-border bg-white/80 pl-11 pr-4 text-base shadow-soft backdrop-blur focus-visible:ring-brand-primary"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'gradient-primary text-white shadow-glow'
                    : 'border border-brand-border bg-white/70 text-brand-deep hover:bg-brand-muted/60 backdrop-blur'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-brand-border bg-white p-10 text-center shadow-soft">
              <HelpCircle className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 font-medium text-brand-deep">No encontramos resultados</p>
              <p className="text-sm text-muted-foreground">Prueba con otra palabra o categoría.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft first:rounded-2xl"
                  >
                    <AccordionTrigger className="px-5 py-5 text-left hover:no-underline hover:bg-brand-muted/40 transition-colors group">
                      <div className="flex items-start gap-3 pr-4">
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand-primary">
                          <HelpCircle className="h-4 w-4" />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="mb-1 bg-brand-muted text-brand-primary border-0 text-[10px] font-semibold uppercase tracking-wide"
                            >
                              {faq.category}
                            </Badge>
                          </div>
                          <span className="font-display text-base font-semibold text-brand-deep group-hover:text-brand-primary transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0">
                      <div className="ml-10 border-l-2 border-brand-border pl-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl gradient-primary p-[1.5px] shadow-glow sm:flex-row sm:p-[1.5px]"
        >
          <div className="flex-1 rounded-[calc(1.5rem-1.5px)] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="font-display text-xl font-bold text-brand-deep">
                  ¿Tienes otra pregunta?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Nuestro equipo te responde en menos de 24 horas.
                </p>
              </div>
              <Button
                asChild
                className="shrink-0 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 px-6"
              >
                <Link href="#contacto">
                  Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
