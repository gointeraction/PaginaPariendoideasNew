'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Impulso', href: '#impulso' },
  { label: 'Kit CEO', href: '#kit-mujer-ceo' },
  { label: 'Mentoría', href: '#mentoria' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl transition-all duration-500',
            scrolled
              ? 'glass shadow-soft border border-brand-border/60 px-4 py-2.5'
              : 'bg-transparent px-2 py-2'
          )}
        >
          {/* Logo */}
          <Link href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white shadow-glow transition-transform group-hover:scale-105">
              <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute -inset-1 rounded-xl bg-primary/30 -z-10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-brand-deep">
                Pariendo
                <span className="gradient-text-purple-pink"> Ideas</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Hub de Aceleramiento Femenino
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-brand-deep/80 hover:text-brand-deep transition-colors rounded-lg hover:bg-brand-muted/60 group"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-px gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="hidden sm:inline-flex text-brand-deep hover:bg-brand-muted/60"
            >
              <Link href="#login">Iniciar sesión</Link>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex gradient-primary text-white border-0 shadow-glow hover:opacity-90 rounded-full px-5"
            >
              <Link href="#beca">
                Solicitar Beca
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white/70 text-brand-deep hover:bg-brand-muted/60 transition"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 glass rounded-2xl shadow-lift border border-brand-border/60 p-3"
            >
              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-base font-medium text-brand-deep/90 rounded-xl hover:bg-brand-muted/60 transition flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
                <div className="h-px bg-brand-border/60 my-2" />
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" className="rounded-full border-brand-border">
                    <Link href="#login" onClick={() => setMobileOpen(false)}>Iniciar sesión</Link>
                  </Button>
                  <Button asChild className="gradient-primary text-white border-0 rounded-full">
                    <Link href="#beca" onClick={() => setMobileOpen(false)}>Solicitar Beca</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
