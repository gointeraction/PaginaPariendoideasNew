'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Heart,
  ShoppingBag,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle2,
  TrendingUp,
  MessageSquareText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ONBOARDING_URLS } from '@/lib/constants'
import { useLandingContent } from '@/lib/cms-service'

const SLIDES = [
  {
    id: 1,
    tag: 'Programa Renacer 2025',
    badge: 'Becas del 100% abiertas',
    title: '¡Acelera tu negocio',
    titleHighlight: 'con nuestra red sin barreras!',
    description:
      'Únete hoy, accede a becas de hasta el 100 % y descubre todos los beneficios que tenemos para ti.',
    primaryCta: { text: 'Solicitar Beca', href: ONBOARDING_URLS.becas, icon: Sparkles },
    secondaryCta: { text: 'Ver Programa Impulso', href: '#impulso' },
    theme: {
      gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
      badgeColor: 'bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20',
      highlightColor: 'from-pink-500 via-purple-500 to-rose-500',
      glow: 'shadow-[0_0_50px_-12px_rgba(236,72,153,0.3)]',
      cardBorder: 'border-pink-500/30',
    },
    metrics: [
      { label: 'Emprendedoras', value: '12K+' },
      { label: 'Becas Entregadas', value: '3,200+' },
      { label: 'Tasa de Éxito', value: '94%' },
    ],
    visual: 'hero_program',
  },
  {
    id: 2,
    tag: 'Kit Mujer CEO',
    badge: 'E-commerce & Marca Digital',
    title: 'Construye tu imperio digital',
    titleHighlight: 'sin complicaciones técnicas',
    description:
      'Todo lo que necesitas en un solo lugar: tienda online responsiva, pasarelas de pago integradas, catálogo digital interactivo y gestión automatizada de pedidos.',
    primaryCta: { text: 'Activar mi Kit Mujer CEO', href: ONBOARDING_URLS.kitMujerCeo, icon: ShoppingBag },
    secondaryCta: { text: 'Ver Precios y Planes', href: '#pricing' },
    theme: {
      gradient: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
      badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
      highlightColor: 'from-purple-500 via-fuchsia-500 to-indigo-500',
      glow: 'shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]',
      cardBorder: 'border-purple-500/30',
    },
    metrics: [
      { label: 'Ventas Generadas', value: '$1.8M+' },
      { label: 'Tiendas Activas', value: '1,450' },
      { label: 'Tiempo de Setup', value: '< 24h' },
    ],
    visual: 'ecommerce_kit',
  },
  {
    id: 3,
    tag: 'Red de Mentorías 1:1',
    badge: '+450 Mentoras Certificadas',
    title: 'Aprende de expertas',
    titleHighlight: 'que ya recorrieron el camino',
    description:
      'Conexión directa con mujeres líderes en finanzas, marketing digital, estrategia legal y modelos de negocio. Sesiones personalizadas adaptadas a la etapa de tu idea.',
    primaryCta: { text: 'Comenzar aceleración', href: ONBOARDING_URLS.aceleracion, icon: Star },
    secondaryCta: { text: 'Conocer Mentoras', href: '#mentoria' },
    theme: {
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
      highlightColor: 'from-amber-500 via-orange-500 to-rose-500',
      glow: 'shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]',
      cardBorder: 'border-amber-500/30',
    },
    metrics: [
      { label: 'Mentoras', value: '450+' },
      { label: 'Horas Guía', value: '18,500' },
      { label: 'Calificación', value: '4.9/5' },
    ],
    visual: 'mentorship_network',
  },
]

export function MainSlider() {
  const cms = useLandingContent()
  const activeSlides = React.useMemo(() => {
    return SLIDES.map((s, index) => {
      const cmsSlide = cms.slides?.[index]
      if (!cmsSlide) return s
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
        secondaryCta: {
          ...s.secondaryCta,
          text: cmsSlide.secondaryCtaText || s.secondaryCta.text,
          href: cmsSlide.secondaryCtaHref || s.secondaryCta.href,
        },
        imageUrl: cmsSlide.imageUrl || undefined,
        active: cmsSlide.active !== false,
      }
    }).filter((s) => s.active)
  }, [cms.slides])

  const [current, setCurrent] = React.useState(0)
  const [isAutoplay, setIsAutoplay] = React.useState(true)
  const reduce = useReducedMotion()

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

  return (
    <section
      id="slider-principal"
      className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-muted/60 via-background to-background" />
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${slide.theme.gradient} transition-colors duration-1000`} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 mask-fade-r" />

      {/* Decorative Blur Blobs */}
      <div className="pointer-events-none absolute -top-20 right-10 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute bottom-10 -left-10 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl animate-blob"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Top Control Bar / Slide Indicators Header */}
        <div className="mb-6 flex items-center justify-between">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white/80 dark:bg-slate-900/80 text-brand-deep dark:text-white hover:bg-brand-muted transition shadow-soft"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Diapositiva siguiente"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white/80 dark:bg-slate-900/80 text-brand-deep dark:text-white hover:bg-brand-muted transition shadow-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            {/* Left Content Column */}
            <div className="text-center lg:text-left">
              {/* Badge & Tag */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <Badge variant="outline" className={`px-3 py-1 text-xs font-semibold ${slide.theme.badgeColor}`}>
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  {slide.tag}
                </Badge>
                <span className="rounded-full bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-xs font-medium text-muted-foreground border border-brand-border shadow-soft backdrop-blur">
                  {slide.badge}
                </span>
              </div>

              {/* Slide Title */}
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                {slide.title}{' '}
                <span className={`block bg-gradient-to-r ${slide.theme.highlightColor} bg-clip-text text-transparent`}>
                  {slide.titleHighlight}
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground lg:mx-0">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className={`group h-12 rounded-full gradient-primary text-white border-0 ${slide.theme.glow} hover:opacity-95 px-7 text-base`}
                >
                  <Link href={slide.primaryCta.href}>
                    <slide.primaryCta.icon className="mr-2 h-5 w-5" />
                    {slide.primaryCta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-2 border-brand-border bg-white/80 dark:bg-slate-900/80 text-foreground hover:bg-brand-muted px-6 text-base backdrop-blur"
                >
                  <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                </Button>
              </div>

              {/* Quick Metrics Bar */}
              <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-brand-border/80 bg-white/60 dark:bg-slate-900/60 p-3.5 shadow-soft backdrop-blur">
                {slide.metrics.map((m, i) => (
                  <div key={i} className="text-center lg:text-left px-2">
                    <div className="font-display text-xl md:text-2xl font-bold text-foreground">{m.value}</div>
                    <div className="text-[11px] md:text-xs text-muted-foreground font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className={`rounded-3xl border ${slide.theme.cardBorder} bg-white/90 dark:bg-slate-900/90 p-4 sm:p-6 shadow-lift backdrop-blur relative overflow-hidden`}>
                {(slide as any).imageUrl ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-inner bg-brand-muted/20">
                    <img
                      src={(slide as any).imageUrl}
                      alt={slide.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <>
                    {slide.visual === 'hero_program' && <VisualProgram reduce={reduce} />}
                    {slide.visual === 'ecommerce_kit' && <VisualEcommerce reduce={reduce} />}
                    {slide.visual === 'mentorship_network' && <VisualMentorship reduce={reduce} />}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Pagination Dots & Progress Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border/60 pt-4">
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

function VisualProgram({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 font-bold">
            <Heart className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground">Beca Impulso Mujer</h4>
            <p className="text-xs text-muted-foreground">Estado: Convocatoria Activa</p>
          </div>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
          Aprobación 98%
        </Badge>
      </div>

      <div className="rounded-2xl bg-brand-muted/50 p-4 space-y-3">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-muted-foreground">Progreso de Cohorte 2025</span>
          <span className="text-foreground font-semibold">1,240 / 1,500 Becas Asignadas</span>
        </div>
        <div className="h-2 w-full rounded-full bg-brand-border overflow-hidden">
          <div className="h-full w-[82%] gradient-primary rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-brand-border p-3 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-pink-500" />
          <div>
            <div className="text-xs font-bold text-foreground">Apoyo Psicosocial</div>
            <div className="text-[10px] text-muted-foreground">Sesiones semanales</div>
          </div>
        </div>
        <div className="rounded-xl border border-brand-border p-3 flex items-center gap-3">
          <Zap className="h-5 w-5 text-purple-500" />
          <div>
            <div className="text-xs font-bold text-foreground">Formación Digital</div>
            <div className="text-[10px] text-muted-foreground">4 Módulos intensivos</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-3 border border-pink-500/20">
        <Users className="h-5 w-5 text-brand-primary" />
        <p className="text-xs text-foreground font-medium">
          "Pariendo Ideas me dio la confianza y las herramientas para lanzar mi negocio."
        </p>
      </div>
    </div>
  )
}

function VisualEcommerce({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 font-bold">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground">Panel de Ventas CEO</h4>
            <p className="text-xs text-muted-foreground">Tienda: "Moda Sustentable VZ"</p>
          </div>
        </div>
        <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
          En Línea
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-3.5">
          <span className="text-[11px] font-medium text-muted-foreground">Ingresos Hoy</span>
          <div className="text-2xl font-bold font-display text-foreground mt-0.5">$480.00</div>
          <span className="inline-flex items-center text-[10px] font-semibold text-emerald-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-0.5" /> +32% vs ayer
          </span>
        </div>
        <div className="rounded-2xl bg-fuchsia-500/5 border border-fuchsia-500/20 p-3.5">
          <span className="text-[11px] font-medium text-muted-foreground">Pedidos Procesados</span>
          <div className="text-2xl font-bold font-display text-foreground mt-0.5">24 Ordenes</div>
          <span className="text-[10px] text-muted-foreground mt-1 block">100% Pagos verificados</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold text-muted-foreground">Últimas transacciones</div>
        {[
          { title: 'Vestido Artesanal Lino', amount: '+$85.00', status: 'Pagado por PagoMóvil' },
          { title: 'Kit Accesorios Eco', amount: '+$42.50', status: 'Pagado por Zelle' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border border-brand-border p-2.5">
            <div>
              <div className="text-xs font-semibold text-foreground">{item.title}</div>
              <div className="text-[10px] text-muted-foreground">{item.status}</div>
            </div>
            <span className="text-xs font-bold text-emerald-600">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VisualMentorship({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 font-bold">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground">Sesión de Mentoría 1:1</h4>
            <p className="text-xs text-muted-foreground">Confirmada · Próximo Martes</p>
          </div>
        </div>
        <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20">
          En Vivo
        </Badge>
      </div>

      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-sm shadow-md">
          CP
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="font-semibold text-sm text-foreground truncate">Dra. Carolina Pérez</h5>
          <p className="text-xs text-muted-foreground truncate">Especialista en Estrategia Financiera & Scaling</p>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-[11px] font-bold text-foreground ml-1">5.0 (140 reseñas)</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-brand-border p-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-foreground flex items-center gap-1.5">
            <MessageSquareText className="h-3.5 w-3.5 text-amber-500" /> Tema de la sesión:
          </span>
          <span className="text-[10px] bg-brand-muted px-2 py-0.5 rounded-md font-medium text-muted-foreground">
            60 Minutos
          </span>
        </div>
        <p className="text-xs text-muted-foreground pl-5">
          "Optimización de margen bruto y estrategia de precios para internacionalización de servicios."
        </p>
      </div>

      <Button className="w-full h-10 rounded-xl gradient-primary text-white text-xs font-semibold">
        <Award className="mr-1.5 h-4 w-4" /> Reservar cupo con tu Mentora
      </Button>
    </div>
  )
}
