'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ShoppingBag,
  Star,
  Instagram,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ONBOARDING_BASE_URL } from '@/lib/constants'
import { useLandingContent } from '@/lib/cms-service'
import { useSubscribeModal } from '@/components/layout/SubscribeModalProvider'

const SLIDES = [
  {
    id: 1,
    image: '/slider1.jpeg',
    tag: 'Programa Impulso 2026',
    badge: 'Becas del 100% abiertas',
    title: 'Deja de ser una emprendedora invisible:',
    titleHighlight: 'conviértete en la dueña del mercado que te pertenece…',
    description:
      'Porque el talento ya lo tienes; solo necesitas la estructura, la fuerza y la red del Primer Hub de Aceleramiento femenino de Latinoamérica para escalar sin techos ni excusas.',
    primaryCta: { text: 'Quiero ser parte', href: ONBOARDING_BASE_URL, icon: Sparkles },
    contentAlign: 'left' as const,
    theme: {
      badgeColor:
        'border-[#e8a89a]/60 bg-[#e8a89a]/15 text-white',
      glow: 'shadow-[0_0_50px_-12px_rgba(232,168,154,0.45)]',
    },
  },
  {
    id: 2,
    image: '/slider2.jpeg',
    tag: 'Kit Mujer CEO',
    badge: 'E-commerce & Marca Digital',
    title: 'Haz realidad tu sueño de Parir tu Gran Idea',
    titleHighlight: 'con un equipo que te acompaña y cree en tu potencial…',
    description:
      'Nunca te sentirás sola. Te acompañamos paso a paso en la estructuración, el diseño y tu modelo de negocio para escalar en el mercado digital.',
    primaryCta: { text: 'Quiero ser parte', href: ONBOARDING_BASE_URL, icon: ShoppingBag },
    contentAlign: 'left' as const,
    theme: {
      badgeColor:
        'border-[#e8a89a]/60 bg-[#e8a89a]/15 text-white',
      glow: 'shadow-[0_0_50px_-12px_rgba(232,168,154,0.35)]',
    },
  },
  {
    id: 3,
    image: '/slider3.jpeg',
    tag: 'Red de Mentorías 1:1',
    badge: '+450 Mentoras Certificadas',
    title: 'Convierte tu idea en un negocio rentable y formalizado',
    titleHighlight: 'sin perderte en el camino.',
    description:
      'Porque tener una gran visión no basta; te damos la estructura, el acompañamiento estratégico y las herramientas del comercio digital para que tu emprendimiento despegue con bases sólidas desde el primer día.',
    primaryCta: { text: 'Quiero ser parte', href: ONBOARDING_BASE_URL, icon: Star },
    // Texto a la derecha: en esta foto las caras están alineadas a la izquierda
    contentAlign: 'right' as const,
    theme: {
      badgeColor:
        'border-[#e8a89a]/60 bg-[#e8a89a]/15 text-white',
      glow: 'shadow-[0_0_50px_-12px_rgba(248,180,0,0.4)]',
    },
  },
  {
    id: 4,
    image: '/slider4.jpeg',
    tag: 'Emprendedora del Año',
    badge: '🚀 Del 19 de nov. 2026 al 19 de mar. 2027',
    title: 'Por el Día Internacional de la Mujer Emprendedora, en Pariendo Ideas celebramos tu talento.',
    titleHighlight: 'Postúlate como la Emprendedora del Año.',
    description:
      'Gana premios, becas y potencia tu negocio. Porque juntas somos más.',
    // CTA externo a Instagram (NO abre el modal de suscripción)
    primaryCta: { text: '¡Postúlate ya!', href: 'https://instagram.com/pariendoideas_', icon: Instagram },
    // Texto a la derecha: no debe tapar las caras del grupo
    contentAlign: 'right' as const,
    theme: {
      badgeColor:
        'border-[#e8a89a]/60 bg-[#e8a89a]/15 text-white',
      glow: 'shadow-[0_0_50px_-12px_rgba(214,51,108,0.4)]',
    },
  },
]

export function MainSlider() {
  const cms = useLandingContent()
  const { openSubscribeModal } = useSubscribeModal()
  const activeSlides = React.useMemo(() => {
    return SLIDES.map((s, index) => {
      const cmsSlide = cms.slides?.[index]
      // Sin entrada en el CMS: se conserva el slide local (activo por defecto).
      // (sin este "active: true" el filter de abajo descartaría el slide 4)
      if (!cmsSlide) return { ...s, active: true }
      return {
        ...s,
        tag: cmsSlide.tag || s.tag,
        badge: cmsSlide.badge || s.badge,
        title: cmsSlide.title || s.title,
        titleHighlight: cmsSlide.titleHighlight || s.titleHighlight,
        description: cmsSlide.description || s.description,
        primaryCta: {
          ...s.primaryCta,
          text: cmsSlide.primaryCtaText || s.primaryCta.text,
          href: cmsSlide.primaryCtaHref || s.primaryCta.href,
        },
        image: cmsSlide.imageUrl || s.image,
        active: cmsSlide.active !== false,
      }
    }).filter((s) => s.active)
  }, [cms.slides])

  const [current, setCurrent] = React.useState(0)
  const [isAutoplay, setIsAutoplay] = React.useState(true)

  const safeLength = activeSlides.length || 1

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % safeLength)
  }, [safeLength])

  const prevSlide = React.useCallback(() => {
    setCurrent((prev) => (prev - 1 + safeLength) % safeLength)
  }, [safeLength])

  React.useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(timer)
  }, [isAutoplay, nextSlide])

  const slide = activeSlides[current % safeLength] || SLIDES[0]

  // Slides 3 y 4: el bloque de texto va a la derecha para no tapar las caras
  const isTextRight = slide.contentAlign === 'right'

  // CTA externo (p. ej. Instagram): se abre en pestaña nueva y NO pasa por el modal
  const slideHref = slide.primaryCta.href
  const isExternalCta =
    slideHref.startsWith('http') && !slideHref.startsWith(ONBOARDING_BASE_URL)

  return (
    <section
      id="slider-principal"
      className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-muted/60 via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-fade-r" />

      {/* Decorative Blur Blobs */}
      <div className="pointer-events-none absolute -top-20 right-10 h-80 w-80 rounded-full bg-brand-border/40 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute bottom-10 -left-10 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl animate-blob"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* H1 único de la página (SEO: jerarquía H1 > H2 > H3) */}
        <h1 className="sr-only">
          Pariendo Ideas — Primer Hub de Aceleramiento Femenino de Latinoamérica para mujeres emprendedoras
        </h1>

        {/* Main Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-brand-border shadow-lift bg-white md:rounded-[2rem] min-h-[480px] sm:min-h-[460px] md:min-h-[520px]"
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Sin veladuras blancas: las fotos tienen tono oscuro y se ven a su
                color natural (decisión de la usuaria 2026-11-18) */}

            {/* Content — left column (slides 1-2) / right column (slides 3-4).
                min-h idéntico en TODOS los slides para que las fotos se vean
                con el mismo tamaño (medido: máx. 696px @375 · 557 @640 ·
                654 @768 · 684 @1024 · 654 @1360 → 720/580/700/700 cubre). */}
            <div
              className={`relative flex min-h-[720px] items-center px-6 py-12 sm:min-h-[580px] sm:px-10 md:min-h-[700px] md:px-14 lg:min-h-[700px] lg:px-16 ${
                isTextRight ? 'justify-end' : ''
              }`}
            >
              <div className={`w-full max-w-2xl ${isTextRight ? 'text-right' : ''}`}>
                {/* Badge & Tag */}
                <div className="inline-flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={`px-3 py-1 text-xs font-semibold backdrop-blur ${slide.theme.badgeColor}`}>
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                    {slide.tag}
                  </Badge>
                  <span className="rounded-full border border-[#e8a89a]/60 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {slide.badge}
                  </span>
                </div>

                {/* Slide Title */}
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                  {slide.title}{' '}
                  <span className="block text-white">
                    {slide.titleHighlight}
                  </span>
                </h2>

                {/* Description */}
                <p
                  className={`mt-4 max-w-xl text-base leading-relaxed text-white md:text-lg ${
                    isTextRight ? 'ml-auto' : ''
                  }`}
                >
                  {slide.description}
                </p>

                {/* Single CTA */}
                <div
                  className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                    isTextRight ? 'items-end sm:justify-end' : 'items-start lg:justify-start'
                  }`}
                >
                  <Button
                    asChild
                    size="lg"
                    className={`group h-12 rounded-full btn-brand ${slide.theme.glow} px-7 text-base`}
                  >
                    <Link
                      href={slideHref}
                      target={isExternalCta ? '_blank' : undefined}
                      rel={isExternalCta ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        // Los CTAs de onboarding abren el modal de suscripción;
                        // cualquier otra URL configurada en el CMS navega normal.
                        if (slideHref.startsWith(ONBOARDING_BASE_URL)) {
                          e.preventDefault()
                          openSubscribeModal({ originUrl: slideHref })
                        }
                      }}
                    >
                      <slide.primaryCta.icon className="mr-2 h-5 w-5" />
                      {slide.primaryCta.text}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Control Bar (bajo el slider): indicador + autoplay + flechas */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-ping" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Destacados · Slider {current + 1} de {SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Play / Pause toggle */}
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              title={isAutoplay ? 'Pausar reproducción automática' : 'Reanudar reproducción automática'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-border bg-white/80 dark:bg-slate-900/80 text-muted-foreground hover:text-foreground transition shadow-soft"
            >
              {isAutoplay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Diapositiva anterior"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white/80 dark:bg-slate-900/80 text-[#a94b3c] dark:text-white hover:bg-brand-muted transition shadow-soft"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Diapositiva siguiente"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white/80 dark:bg-slate-900/80 text-[#a94b3c] dark:text-white hover:bg-brand-muted transition shadow-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots & Progress Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border/60 pt-4">
          <div className="flex items-center gap-3">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className="group relative py-2"
                aria-label={`Ir al slide ${idx + 1}`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === idx
                        ? 'w-10 gradient-primary'
                        : 'w-2.5 bg-brand-border group-hover:bg-muted-foreground'
                    }`}
                  />
                  <span className={`text-xs font-semibold transition-colors ${current === idx ? 'text-foreground' : 'text-muted-foreground'}`}>
                    0{s.id}. {s.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Autoplay Progress Bar */}
          <div className="h-1.5 w-full sm:w-48 overflow-hidden rounded-full bg-brand-border/40">
            <motion.div
              key={current + (isAutoplay ? '-active' : '-paused')}
              initial={{ width: '0%' }}
              animate={{ width: isAutoplay ? '100%' : '0%' }}
              transition={{ duration: isAutoplay ? 7 : 0, ease: 'linear' }}
              className="h-full gradient-primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
