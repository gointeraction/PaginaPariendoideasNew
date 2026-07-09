'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  ArrowRight,
  Clock,
  TrendingUp,
  PenTool,
  Video,
  FileText,
  Download,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const RESOURCES = [
  {
    type: 'Guía',
    typeIcon: FileText,
    title: 'Guía de Reconstrucción Digital para Emprendedoras',
    description:
      'Un manual completo de 48 páginas con el paso a paso para relanzar tu negocio en el mundo digital tras una crisis.',
    duration: '48 págs',
    category: 'E-book',
    color: 'from-purple-500 to-fuchsia-500',
    accent: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    featured: true,
  },
  {
    type: 'Video',
    typeIcon: Video,
    title: 'Cómo validar tu idea de negocio en 7 días',
    description:
      'Workshop grabado con Carolina Pérez sobre validación rápida de ideas usando Instagram y encuestas.',
    duration: '45 min',
    category: 'Workshop',
    color: 'from-pink-500 to-rose-500',
    accent: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
    featured: false,
  },
  {
    type: 'Plantilla',
    typeIcon: Download,
    title: 'Plantilla de Canvas de Modelo de Negocio',
    description:
      'Template editable en Canva con ejemplos reales de emprendedoras de la comunidad Pariendo Ideas.',
    duration: 'Editable',
    category: 'Recurso',
    color: 'from-orange-500 to-amber-500',
    accent: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
    featured: false,
  },
]

const BLOG_POSTS = [
  {
    title: '5 estrategias de Instagram Reels que triplicaron mis ventas',
    excerpt: 'María González, egresada del Programa Renacer, comparte cómo pasó de $200 a $3,400 mensuales.',
    author: 'María González',
    authorInitials: 'MG',
    authorGradient: 'from-pink-400 to-rose-500',
    date: '12 Jul 2025',
    readTime: '6 min',
    category: 'Marketing Digital',
    tag: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Punto de venta vs. E-commerce: ¿cuál necesito primero?',
    excerpt: 'Guía práctica para decidir qué herramienta del Kit Mujer CEO implementar según tu etapa.',
    author: 'Carolina Pérez',
    authorInitials: 'CP',
    authorGradient: 'from-purple-400 to-fuchsia-500',
    date: '08 Jul 2025',
    readTime: '8 min',
    category: 'Kit CEO',
    tag: 'from-purple-500 to-fuchsia-500',
  },
  {
    title: 'Mentalidad financiera: cómo salir de deudas como emprendedora',
    excerpt: 'Acompañamiento psicosocial aplicado a finanzas personales. Casos reales del Programa Renacer.',
    author: 'Ana Rodríguez',
    authorInitials: 'AR',
    authorGradient: 'from-orange-400 to-amber-500',
    date: '02 Jul 2025',
    readTime: '5 min',
    category: 'Bienestar',
    tag: 'from-orange-500 to-amber-500',
  },
]

export function Resources() {
  return (
    <section id="recursos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-muted/40 to-white" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass border border-brand-border/80 px-4 py-1.5 text-xs font-semibold text-brand-deep shadow-soft">
              <BookOpen className="h-3.5 w-3.5 text-brand-primary" />
              Recursos & Blog
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-deep text-balance sm:text-4xl md:text-5xl">
              Aprende de
              <span className="gradient-text"> emprendedoras reales</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              Guías gratuitas, workshops grabados, plantillas y artículos escritos por nuestra
              comunidad de mentoras y egresadas.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="shrink-0 rounded-full border-brand-border bg-white/70 text-brand-deep hover:bg-brand-muted/60 backdrop-blur"
          >
            <Link href="#blog">
              Ver todos los recursos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Featured resources */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-brand-border bg-white p-6 shadow-soft transition-all hover:shadow-lift hover:-translate-y-1 ${
                resource.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Featured badge */}
              {resource.featured && (
                <div className="absolute right-4 top-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full gradient-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-glow">
                    <TrendingUp className="h-3 w-3" />
                    Destacado
                  </span>
                </div>
              )}

              {/* Icon block */}
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${resource.bg} ${resource.accent} transition-transform group-hover:scale-110`}
              >
                <resource.typeIcon className="h-7 w-7" />
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className={`bg-gradient-to-r ${resource.color} text-white border-0 text-[10px] font-semibold uppercase tracking-wide`}
                >
                  {resource.type}
                </Badge>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {resource.duration}
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-bold text-brand-deep group-hover:text-brand-primary transition-colors">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {resource.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                <span className="text-xs font-medium text-muted-foreground">{resource.category}</span>
                <Link
                  href="#download"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:gap-2 transition-all"
                >
                  Descargar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Hover gradient line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${resource.color} transition-transform duration-500 group-hover:scale-x-100`}
              />
            </motion.article>
          ))}
        </div>

        {/* Blog posts */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <PenTool className="h-5 w-5 text-brand-primary" />
            <h3 className="font-display text-2xl font-bold text-brand-deep">Último del blog</h3>
            <div className="ml-2 h-px flex-1 bg-gradient-to-r from-brand-border to-transparent" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition-all hover:shadow-lift hover:-translate-y-1"
              >
                {/* Image placeholder with gradient */}
                <div className={`relative h-40 bg-gradient-to-br ${post.tag} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-deep shadow-soft backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/20 blur-xl" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-bold leading-snug text-brand-deep group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-brand-border pt-4">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${post.authorGradient} text-white text-[10px] font-bold`}
                    >
                      {post.authorInitials}
                    </span>
                    <span className="text-xs font-medium text-brand-deep">{post.author}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
