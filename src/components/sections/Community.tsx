'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Users,
  Briefcase,
  Heart,
  ArrowUpRight,
  MessagesSquare,
  Star,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './Modules'

const FEATURES = [
  {
    icon: MessageCircle,
    title: 'Foro de comunidad',
    description: 'Conversaciones por categorías, preguntas y respuestas con emprendedoras y mentoras.',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    stat: '5.2K+',
    statLabel: 'discusiones activas',
  },
  {
    icon: MessagesSquare,
    title: 'Mensajería directa',
    description: 'Conecta 1:1 con cualquier emprendedora o mentora del hub. Chat privado y seguro.',
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    stat: '24/7',
    statLabel: 'conectadas en tiempo real',
  },
  {
    icon: Users,
    title: 'Grupos de interés',
    description: 'Únete a colectivos temáticos: madres emprendedoras, tech, gastronomía y más.',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    stat: '48',
    statLabel: 'grupos activos',
  },
  {
    icon: Briefcase,
    title: 'Tablón de oportunidades',
    description: 'Trabajo, colaboraciones, alianzas y convocatorias publicadas por la comunidad.',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    stat: '120+',
    statLabel: 'oportunidades/mes',
  },
]

const COMMUNITY_POSTS = [
  {
    author: 'María González',
    initials: 'MG',
    gradient: 'from-pink-400 to-rose-500',
    category: 'Gastronomía',
    time: 'hace 2h',
    content: '¿Alguien ha exportado arepas artesanales a Panamá? Busco recomendaciones de logística 🙏',
    likes: 24,
    comments: 8,
  },
  {
    author: 'Ana Ruiz',
    initials: 'AR',
    gradient: 'from-purple-400 to-fuchsia-500',
    category: 'Tecnología',
    time: 'hace 5h',
    content: 'Lancé mi primer SaaS gracias a la mentoría de Daniela. ¡Facturé $1,200 en la primera semana! 🚀',
    likes: 86,
    comments: 23,
  },
  {
    author: 'Laura Silva',
    initials: 'LS',
    gradient: 'from-orange-400 to-amber-500',
    category: 'Moda',
    time: 'hace 1d',
    content: 'Busco socia para tienda de moda sostenible. Tengo producción, necesito fuerza comercial 💚',
    likes: 41,
    comments: 12,
  },
]

export function Community() {
  return (
    <section id="comunidad" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/30 to-white" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Comunidad & Networking"
          title={
            <>
              Una red que te
              <span className="gradient-text-purple-pink"> sostiene y te impulsa</span>
            </>
          }
          description="No estás sola. Foros, mensajería, grupos temáticos y un tablón de oportunidades para conectar con miles de mujeres emprendedoras."
        />

        {/* Features grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-brand-border bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${f.bg} ${f.text} transition-transform group-hover:scale-110`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-brand-deep">{f.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className={`font-display text-2xl font-bold bg-gradient-to-br ${f.color} bg-clip-text text-transparent`}>
                  {f.stat}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {f.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live community preview */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Posts */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-brand-border bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-brand-deep">
                Actividad reciente
              </h3>
              <Badge className="bg-emerald-100 text-emerald-700 border-0 hover:bg-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                En vivo
              </Badge>
            </div>

            <div className="mt-5 space-y-4">
              {COMMUNITY_POSTS.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-brand-border bg-brand-muted/30 p-4 hover:bg-brand-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${p.gradient} text-white text-xs font-bold`}>
                      {p.initials}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-brand-deep truncate">{p.author}</span>
                        <Badge variant="outline" className="text-[9px] py-0 px-1.5 border-brand-border text-muted-foreground">
                          {p.category}
                        </Badge>
                      </div>
                      <span className="text-[11px] text-muted-foreground">{p.time}</span>
                    </div>
                  </div>
                  <p className="mt-2.5 text-sm text-brand-deep/85 leading-relaxed">{p.content}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-brand-primary transition-colors">
                      <Heart className="h-3.5 w-3.5" />
                      {p.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-brand-primary transition-colors">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {p.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="mt-5 w-full rounded-full border-2 border-brand-border text-brand-deep hover:bg-brand-muted/40">
              <Link href="#comunidad">
                Ver todo el foro
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Directory teaser */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl border border-brand-border bg-gradient-to-br from-brand-deep to-purple-900 p-6 text-white overflow-hidden relative">
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-secondary/30 blur-2xl" />
              <Sparkles className="h-6 w-6 text-brand-accent" />
              <h3 className="mt-3 font-display text-xl font-bold">Directorio de emprendedoras</h3>
              <p className="mt-1.5 text-sm text-white/70">
                Filtra por país, categoría y etapa de negocio. Encuentra socias, proveedoras y clientas.
              </p>
              <div className="mt-4 flex -space-x-2">
                {['from-pink-400 to-rose-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500', 'from-violet-400 to-purple-500', 'from-fuchsia-400 to-pink-500'].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white text-[10px] font-bold ring-2 ring-brand-deep`}
                  >
                    {['MG', 'CP', 'AR', 'LS', 'JV'][i]}
                  </span>
                ))}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white text-[10px] font-bold ring-2 ring-brand-deep backdrop-blur">
                  +12K
                </span>
              </div>
              <Button asChild className="mt-5 w-full rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90">
                <Link href="#comunidad">
                  Explorar directorio
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-3xl border border-brand-border bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-primary" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Esta semana
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-display text-xl font-bold text-brand-deep">+342</div>
                  <div className="text-[10px] text-muted-foreground">nuevas</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-brand-deep">1.2K</div>
                  <div className="text-[10px] text-muted-foreground">posts</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-brand-deep">87</div>
                  <div className="text-[10px] text-muted-foreground">oportunidades</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
