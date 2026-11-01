'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  CreditCard,
  Store,
  Calendar,
  Users,
  BookOpen,
  TrendingUp,
  Wallet,
  Globe,
  Star,
  ArrowUpRight,
  Package,
  Receipt,
  Sparkles,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'
import { ONBOARDING_URLS } from '@/lib/constants'

const ECOSYSTEM = [
  {
    id: 'semilla',
    stage: 'Etapa Semilla',
    title: 'Análisis Psicosocial y Formación Personal',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description:
      'Fortalecemos tu base personal para potenciar tu liderazgo profesional con el respaldo de especialistas.',
    features: [
      {
        title: 'Acompañamiento especializado',
        desc: 'Sesiones personalizadas con psicólogas y terapeutas.',
      },
      {
        title: 'Bienestar y mentalidad',
        desc: 'Talleres de meditación y ejercicios para la gestión del bienestar.',
      },
      {
        title: 'Diagnóstico individual',
        desc: 'Análisis psicosocial y reporte conclusivo personalizado.',
      },
      {
        title: 'Formación ejecutiva',
        desc: 'Capacitación en Economía Digital (Becas disponibles del 25%, 50%, 75% y 100%).',
      },
    ],
    stat: { value: 'Becas 100%', label: 'Disponibles' },
    href: `${ONBOARDING_URLS.kitMujerCeo}&etapa=semilla`,
  },
  {
    id: 'temprana',
    stage: 'Etapa Temprana',
    title: 'e-Commerce Integrado (Tu Tienda Online)',
    icon: ShoppingBag,
    color: 'from-purple-500 to-fuchsia-500',
    description:
      'Te ofrecemos tu tienda online equipada con todos los elementos necesarios para que tu negocio crezca y se consolide en la economía digital. Incluye la Certificación KYC y Dominio propio avalado por Cavecom-e.',
    features: [
      {
        title: 'Catálogo e Inventario',
        desc: 'Gestión organizada de tu oferta y stock en tiempo real.',
      },
      {
        title: 'Pasarela de Pago & Facturación',
        desc: 'Procesamiento seguro de transacciones y emisión de comprobantes en línea.',
      },
      {
        title: 'Logística y Delivery',
        desc: 'Integración de soluciones para el despacho y entrega de productos.',
      },
      {
        title: 'Equipos POS y Fiscales',
        desc: 'Punto de Venta con tarjetas, impresoras fiscales y balanzas digitales.',
      },
    ],
    stat: { value: 'Cavecom-e', label: 'Aval y certificación' },
    href: `${ONBOARDING_URLS.kitMujerCeo}&etapa=temprana`,
  },
  {
    id: 'marketplace',
    stage: 'Canales & Marketplace',
    title: 'Canales de Venta y Marketplace Multiplataforma',
    icon: Store,
    color: 'from-orange-500 to-amber-500',
    description:
      'Te ofrecemos exposición estratégica en los principales canales de venta y redes sociales, incluyendo nuestra plataforma comercial exclusiva: Marketplace Pariendo Ideas.',
    features: [
      {
        title: 'Marketplace Pariendo Ideas',
        desc: 'Vitrina digital para exhibir y vender tus productos dentro de nuestra red.',
      },
      {
        title: 'Integración con Redes Sociales',
        desc: 'Conexión directa de tus canales sociales con tu inventario sincronizado.',
      },
      {
        title: 'Publicidad CEO – SEM',
        desc: 'Estrategias de promoción y posicionamiento en motores de búsqueda.',
      },
      {
        title: 'Directorio Especializado',
        desc: 'Registro en nuestra red exclusiva de empresas y empresarias.',
      },
    ],
    stat: { value: 'Multi-canal', label: 'Exposición y ventas' },
    href: `${ONBOARDING_URLS.kitMujerCeo}&etapa=marketplace`,
  },
]

const CATEGORIES = [
  { name: 'Educación', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  { name: 'Comunidad', icon: Users, color: 'bg-purple-50 text-purple-600' },
  { name: 'Mentores', icon: Sparkles, color: 'bg-pink-50 text-pink-600' },
  { name: 'Gastronomía', icon: Package, color: 'bg-orange-50 text-orange-600' },
  { name: 'Turismo', icon: Globe, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Moda', icon: ShoppingBag, color: 'bg-fuchsia-50 text-fuchsia-600' },
  { name: 'Tecnología', icon: TrendingUp, color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Salud', icon: Heart, color: 'bg-rose-50 text-rose-600' },
]

export function KitMujerCEO() {
  return (
    <section id="kit-mujer-ceo" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/40 via-white to-white" />
      <div className="pointer-events-none absolute top-40 -right-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="KIT DIGITAL MUJER CEO"
          title={
            <>
              Tu negocio en
              <span className="gradient-text"> un solo clic</span>
            </>
          }
          description="En Pariendo Ideas te ofrecemos herramientas tecnológicas de última generación para que des un salto hacia la economía digital y consolides la estructura de tu emprendimiento."
        />

        {/* Ecosystem grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ECOSYSTEM.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Top gradient strip */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${e.color}`} />

              <div className="p-6 flex flex-col justify-between h-[calc(100%-6px)]">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${e.color} text-white shadow-md transition-transform duration-500 group-hover:scale-110`}>
                        <e.icon className="h-6 w-6" />
                      </div>
                      <span className="inline-flex rounded-full bg-brand-muted px-2.5 py-1 text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                        {e.stage}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`font-display text-lg font-bold bg-gradient-to-br ${e.color} bg-clip-text text-transparent`}>
                        {e.stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        {e.stat.label}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-lg md:text-xl font-bold text-brand-deep leading-snug">{e.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{e.description}</p>

                  <div className="mt-4 space-y-2">
                    {e.features.map((f, fi) => (
                      <div
                        key={fi}
                        className="rounded-xl bg-brand-muted/40 p-2.5 border border-brand-border/60 text-xs transition-colors hover:bg-brand-muted/70"
                      >
                        <div className="font-semibold text-brand-deep flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${e.color}`} />
                          {f.title}
                        </div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed pl-3">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <a
                    href={e.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-2.5 transition-all"
                  >
                    Activar en Onboarding
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12 rounded-3xl border border-brand-border bg-gradient-to-br from-white to-brand-muted/40 p-8 shadow-soft">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-md">
              <Badge className="bg-brand-muted text-brand-primary border-0 hover:bg-brand-muted">
                Categorías del ecosistema
              </Badge>
              <h3 className="mt-3 font-display text-2xl font-bold text-brand-deep">
                Encuentra oportunidades en cada sector
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Conecta con emprendedoras de tu industria y descubre productos, servicios y colaboraciones.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CATEGORIES.map((c) => {
                const categorySlug = c.name
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/\s+/g, '-')
                const categoryUrl = `${ONBOARDING_URLS.kitMujerCeo}&sector=${categorySlug}`

                return (
                  <a
                    key={c.name}
                    href={categoryUrl}
                    className="group flex items-center gap-2 rounded-xl border border-brand-border bg-white p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft hover:border-brand-primary/40"
                  >
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${c.color} group-hover:scale-110 transition-transform`}>
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold text-brand-deep group-hover:text-brand-primary transition-colors">
                      {c.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Network & Strategic Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-14 rounded-3xl border border-brand-border bg-gradient-to-br from-white via-fuchsia-50/20 to-purple-50/30 p-8 md:p-10 shadow-soft"
        >
          <div className="max-w-3xl">
            <Badge className="bg-brand-muted text-brand-primary border-0 font-semibold px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Red de Mujeres Líderes
            </Badge>
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-brand-deep leading-tight">
              Te conectamos con mujeres líderes y emprendedoras en marcha
              <span className="gradient-text block"> para potenciar productos, servicios y colaboraciones de alto valor.</span>
            </h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Impulsamos e interconectamos a mujeres emprendedoras y empresarias en sectores clave de la economía:
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* Cluster 1 */}
            <div className="flex flex-col justify-between rounded-2xl border border-brand-border/70 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md">
                    <Heart className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-brand-deep">
                    Estilo de Vida & Bienestar
                  </h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Gastronomía', 'Turismo', 'Bienestar', 'Salud', 'Belleza', 'Moda'].map((item) => (
                    <a
                      key={item}
                      href={`${ONBOARDING_URLS.kitMujerCeo}&sector=${encodeURIComponent(item.toLowerCase())}`}
                      className="rounded-lg bg-pink-50/80 px-2.5 py-1 text-xs font-medium text-pink-700 hover:bg-pink-100 hover:text-pink-900 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Cluster 2 */}
            <div className="flex flex-col justify-between rounded-2xl border border-brand-border/70 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md">
                    <Package className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-brand-deep">
                    Diseño & Producción
                  </h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Artesanía', 'Orfebrería', 'Agronomía'].map((item) => (
                    <a
                      key={item}
                      href={`${ONBOARDING_URLS.kitMujerCeo}&sector=${encodeURIComponent(item.toLowerCase())}`}
                      className="rounded-lg bg-orange-50/80 px-2.5 py-1 text-xs font-medium text-orange-700 hover:bg-orange-100 hover:text-orange-900 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Cluster 3 */}
            <div className="flex flex-col justify-between rounded-2xl border border-brand-border/70 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-md">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-brand-deep">
                    Innovación, Servicios & Comercio
                  </h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Educación y Mentoría', 'Startups', 'Comercio Minorista'].map((item) => (
                    <a
                      key={item}
                      href={`${ONBOARDING_URLS.kitMujerCeo}&sector=${encodeURIComponent(item.toLowerCase())}`}
                      className="rounded-lg bg-purple-50/80 px-2.5 py-1 text-xs font-medium text-purple-700 hover:bg-purple-100 hover:text-purple-900 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom call to action banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white p-6 border border-brand-border/80 shadow-soft">
            <div>
              <div className="font-display text-lg font-bold text-brand-deep">
                Encuentra tu comunidad y posiciona tu negocio.
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Accede a la red de colaboración exclusiva y acelera el crecimiento de tu emprendimiento.
              </p>
            </div>
            <Button asChild className="rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90 px-6 shrink-0">
              <a href={ONBOARDING_URLS.kitMujerCeo}>
                Activar mi Kit Mujer CEO
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
