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

const ECOSYSTEM = [
  {
    id: 'ecommerce',
    title: 'E-commerce Integrado',
    icon: ShoppingBag,
    color: 'from-purple-500 to-fuchsia-500',
    description:
      'Tu tienda online con catálogo de productos, gestión de inventario, pagos con MercadoPago/Stripe y dashboard de ventas.',
    features: ['CRUD productos', 'Inventario básico', 'MercadoPago & Stripe', 'Dashboard de ventas'],
    stat: { value: '1.2K+', label: 'tiendas activas' },
  },
  {
    id: 'pos',
    title: 'Punto de Venta (POS)',
    icon: CreditCard,
    color: 'from-orange-500 to-amber-500',
    description:
      'Interfaz de venta rápida, registro de transacciones, reportes diarios y modo offline con sync posterior.',
    features: ['Venta rápida', 'Registro de transacciones', 'Reportes diarios', 'Modo offline'],
    stat: { value: '$1.8M', label: 'procesado en POS' },
  },
  {
    id: 'marketplace',
    title: 'Marketplace de Talento',
    icon: Store,
    color: 'from-pink-500 to-rose-500',
    description:
      'Publica servicios y productos, búsqueda por categoría, sistema de reseñas y perfil público de emprendedora.',
    features: ['Publicar servicios', 'Búsqueda filtrada', 'Reseñas y rating', 'Perfil público'],
    stat: { value: '8.5K+', label: 'listings publicados' },
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
          eyebrow="Ecosistema Digital Integrado"
          title={
            <>
              Tu negocio, en un solo
              <span className="gradient-text"> Kit Mujer CEO</span>
            </>
          }
          description="E-commerce, POS, marketplace, eventos y educación — todo conectado para que gestiones y hagas crecer tu emprendimiento sin cambiar de plataforma."
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

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${e.color} text-white shadow-md transition-transform duration-500 group-hover:scale-110`}>
                    <e.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className={`font-display text-2xl font-bold bg-gradient-to-br ${e.color} bg-clip-text text-transparent`}>
                      {e.stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {e.stat.label}
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-brand-deep">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.description}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {e.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 rounded-lg bg-brand-muted/50 px-2.5 py-1.5 text-xs font-medium text-brand-deep/80"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${e.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
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
              {CATEGORIES.map((c) => (
                <button
                  key={c.name}
                  className="group flex items-center gap-2 rounded-xl border border-brand-border bg-white p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${c.color}`}>
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-brand-deep group-hover:text-brand-primary transition-colors">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mini POS preview */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <PosPreview />
          <SalesStats />
        </div>
      </div>
    </section>
  )
}

function PosPreview() {
  const products = [
    { name: 'Arepas Artesanales', price: 5.0, qty: 2, emoji: '🫓' },
    { name: 'Mermelada casera', price: 8.5, qty: 1, emoji: '🍯' },
    { name: 'Velas aromáticas', price: 12.0, qty: 3, emoji: '🕯️' },
  ]
  const total = products.reduce((sum, p) => sum + p.price * p.qty, 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className="relative rounded-3xl border border-brand-border bg-white p-6 shadow-lift overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange-200/40 blur-2xl" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
            <Receipt className="h-5 w-5" />
          </span>
          <div>
            <div className="font-semibold text-brand-deep">Punto de Venta</div>
            <div className="text-xs text-muted-foreground">Sesión #1248 · María González</div>
          </div>
        </div>
        <Badge className="bg-emerald-100 text-emerald-700 border-0 hover:bg-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1" />
          En línea
        </Badge>
      </div>

      <div className="mt-5 space-y-2">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-muted/30 p-2.5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-lg shadow-soft">
              {p.emoji}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-brand-deep truncate">{p.name}</div>
              <div className="text-xs text-muted-foreground">${p.price.toFixed(2)} · {p.qty}u</div>
            </div>
            <div className="font-semibold text-brand-deep">${(p.price * p.qty).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-brand-deep p-4 text-white">
        <div>
          <div className="text-xs text-white/60 uppercase tracking-wider">Total a cobrar</div>
          <div className="font-display text-2xl font-bold">${total.toFixed(2)}</div>
        </div>
        <Button className="gradient-primary text-white border-0 rounded-full shadow-glow hover:opacity-90">
          <Wallet className="mr-2 h-4 w-4" />
          Cobrar
        </Button>
      </div>
    </motion.div>
  )
}

function SalesStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className="flex flex-col gap-4"
    >
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Ventas de la semana
          </span>
          <Badge className="bg-emerald-100 text-emerald-700 border-0 hover:bg-emerald-100">+18%</Badge>
        </div>
        <div className="mt-3 font-display text-3xl font-bold gradient-text">$2,847</div>
        <div className="mt-4 grid grid-cols-7 gap-1 h-20 items-end">
          {[35, 55, 40, 70, 50, 90, 75].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t gradient-primary opacity-80"
                style={{ height: `${h}%` }}
              />
              <span className="text-[9px] text-muted-foreground">
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl border border-brand-border bg-white p-5 shadow-soft">
          <Package className="h-6 w-6 text-purple-600" />
          <div className="mt-3 font-display text-2xl font-bold text-brand-deep">324</div>
          <div className="text-xs text-muted-foreground">Pedidos este mes</div>
        </div>
        <div className="rounded-3xl border border-brand-border bg-white p-5 shadow-soft">
          <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
          <div className="mt-3 font-display text-2xl font-bold text-brand-deep">4.9</div>
          <div className="text-xs text-muted-foreground">Calificación promedio</div>
        </div>
      </div>

      <Button asChild variant="outline" className="rounded-full border-2 border-brand-border text-brand-deep hover:bg-brand-muted/40">
        <Link href="#kit-mujer-ceo">
          Explorar el Kit completo
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  )
}
