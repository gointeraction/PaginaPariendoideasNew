'use client'

import Link from 'next/link'
import {
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Heart,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const FOOTER_LINKS = [
  {
    title: 'Programa Impulso',
    links: [
      { label: 'Acompañamiento Psicosocial', href: '#impulso' },
      { label: 'Reconstrucción Digital', href: '#impulso' },
      { label: 'Becas de Formación', href: '#beca' },
      { label: 'Mentoría 1:1', href: '#mentoria' },
    ],
  },
  {
    title: 'Kit Mujer CEO',
    links: [
      { label: 'E-commerce integrado', href: '#kit-mujer-ceo' },
      { label: 'Punto de Venta (POS)', href: '#kit-mujer-ceo' },
      { label: 'Marketplace de Talento', href: '#marketplace' },
      { label: 'P.I. Fest — Eventos', href: '#eventos' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Foro de emprendedoras', href: '#comunidad' },
      { label: 'Directorio', href: '#comunidad' },
      { label: 'Grupos de interés', href: '#comunidad' },
      { label: 'Tablón de oportunidades', href: '#comunidad' },
    ],
  },
  {
    title: 'Plataforma',
    links: [
      { label: 'Iniciar sesión', href: '#login' },
      { label: 'Crear cuenta', href: '#register' },
      { label: 'Soporte', href: '#soporte' },
      { label: 'Términos y privacidad', href: '#legal' },
    ],
  },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-brand-deep text-white">
      {/* Decorative top gradient line */}
      <div className="h-1 w-full gradient-primary" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-brand-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Newsletter CTA */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 py-14 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
              Únete al movimiento
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight text-balance">
              Recibe oportunidades, becas y herramientas
              <span className="block gradient-text">para hacer crecer tu emprendimiento.</span>
            </h3>
            <p className="mt-3 text-white/70 max-w-xl text-pretty">
              Más de 12,000 mujeres de Venezuela y LATAM ya forman parte de la comunidad
              Pariendo Ideas. Llega el próximo boletín cada lunes a tu correo.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 self-end w-full"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="h-12 flex-1 rounded-full bg-white/10 border-white/15 text-white placeholder:text-white/50 backdrop-blur focus-visible:ring-brand-secondary/60"
              />
              <Button
                type="submit"
                className="h-12 px-6 rounded-full gradient-primary text-white border-0 shadow-glow hover:opacity-90"
              >
                Suscribirme
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/50">
              Al suscribirte aceptas recibir comunicaciones de Pariendo Ideas. Puedes darte de baja cuando quieras.
            </p>
          </form>
        </div>

        {/* Links grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white shadow-glow">
                <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold">
                Pariendo<span className="gradient-text-purple-pink"> Ideas</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
              Hub de aceleramiento digital femenino. Acompañamos a mujeres emprendedoras,
              CEO y profesionales en reconversión digital en Venezuela y LATAM.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-gradient-to-br hover:from-brand-primary hover:to-brand-secondary hover:text-white transition-all"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center text-sm text-white/65 hover:text-white transition-colors"
                    >
                      <span className="mr-0 h-px w-0 bg-brand-accent transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid gap-4 py-6 border-t border-white/10 sm:grid-cols-2 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-accent" />
            <span>hola@pariendoideas.com</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-end">
            <MapPin className="h-4 w-4 text-brand-accent" />
            <span>Caracas, Venezuela · Cobertura LATAM</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-6 border-t border-white/10 sm:flex-row sm:items-center sm:justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} Pariendo Ideas. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con
            <Heart className="h-3.5 w-3.5 fill-brand-secondary text-brand-secondary" />
            para las mujeres emprendedoras de LATAM
          </p>
        </div>
      </div>
    </footer>
  )
}
