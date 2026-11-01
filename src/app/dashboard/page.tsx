'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShoppingBag,
  Calendar,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ONBOARDING_URLS } from '@/lib/constants'

export default function DashboardPage() {
  const [searchEmail, setSearchEmail] = React.useState('')
  const [isConsulted, setIsConsulted] = React.useState(true)

  // Datos de demostración de la usuaria activa
  const userData = {
    name: 'Emprendedora Pariendo Ideas',
    businessName: 'Mi Negocio Digital',
    city: 'Caracas, Venezuela',
    program: 'Programa IMPULSO & Kit Mujer CEO',
    status: 'aprobada', // 'aprobada' | 'evaluacion' | 'pendiente'
    scholarshipPercentage: '100%',
    cohort: 'Cohorte Renacer 2026',
    mentorName: 'Carolina Pérez',
    mentorSpecialty: 'Estrategia de Negocios y Finanzas',
    nextSession: 'Jueves 10 de Septiembre · 4:00 PM (VET)',
    completedSteps: 3,
    totalSteps: 4,
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navbar del Portal */}
      <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-card/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-brand-border/60 p-1 flex items-center justify-center">
                <Image
                  src="/logo-pariendo-symbol.png"
                  alt="Pariendo Ideas"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-tight font-serif text-foreground">
                Pariendo Ideas
              </span>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold">
              Portal Emprendedora
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/584120000000?text=Hola%2C%20necesito%20soporte%20en%20mi%20portal%20de%20Pariendo%20Ideas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 hover:bg-emerald-500/20 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Soporte WhatsApp</span>
            </a>

            <Button asChild variant="outline" size="sm" className="text-xs h-8">
              <Link href="/">
                <ArrowLeft className="w-3 h-3 mr-1" />
                <span>Volver al Inicio</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Contenido Principal del Portal */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        {/* Banner de Bienvenida y Estatus de Beca */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-border/80 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-card p-6 sm:p-10 shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <Badge className="bg-emerald-600 text-white font-medium px-3 py-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Beca 100% Otorgada
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">
                  {userData.cohort}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-foreground">
                ¡Bienvenida a tu espacio de aceleración!
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Tu diagnóstico ha sido validado exitosamente. Ya cuentas con acompañamiento activo, acceso al Kit Mujer CEO y sesiones de mentoría personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                asChild
                className="w-full sm:w-auto h-11 px-6 rounded-full gradient-primary text-white shadow-glow hover:opacity-90 font-semibold text-sm"
              >
                <a href={ONBOARDING_URLS.becas}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Continuar Diagnóstico
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Rejilla de Módulos Activos de la Emprendedora */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Mi Camino & Progreso */}
          <div className="rounded-2xl border border-brand-border/70 bg-card p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-brand-primary">Paso 3 de 4</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Tu Ruta de Aceleración</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Acompañamiento integral con aval académico y empresarial Cavecom-e.
              </p>
            </div>
            <div className="w-full bg-brand-muted/60 h-2 rounded-full overflow-hidden">
              <div className="bg-brand-primary h-full rounded-full w-3/4" />
            </div>
            <ul className="text-xs space-y-2 text-muted-foreground pt-1">
              <li className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Postulación & Diagnóstico inicial
              </li>
              <li className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Asignación de Beca 100%
              </li>
              <li className="flex items-center gap-2 text-foreground font-medium">
                <Clock className="w-4 h-4 text-brand-primary shrink-0" />
                Activación del Kit Mujer CEO (En curso)
              </li>
              <li className="flex items-center gap-2 opacity-60">
                <div className="w-4 h-4 rounded-full border border-current shrink-0" />
                Graduación & Certificación Cavecom-e
              </li>
            </ul>
          </div>

          {/* Tarjeta 2: Kit Mujer CEO */}
          <div className="rounded-2xl border border-brand-border/70 bg-card p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-600">
                Herramientas
              </Badge>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Kit Mujer CEO</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Ecosistema digital listo para vender en bolívares y divisas.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <div className="p-2.5 rounded-lg border border-brand-border/50 bg-brand-muted/20 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Catálogo & Tienda Online</span>
                <span className="text-emerald-600 font-semibold">Listo</span>
              </div>
              <div className="p-2.5 rounded-lg border border-brand-border/50 bg-brand-muted/20 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Punto de Venta POS</span>
                <span className="text-emerald-600 font-semibold">Activo</span>
              </div>
              <div className="p-2.5 rounded-lg border border-brand-border/50 bg-brand-muted/20 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Pasarelas de Pago</span>
                <span className="text-brand-primary font-semibold">Configurado</span>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full text-xs h-9">
              <a href={ONBOARDING_URLS.kitMujerCeo}>
                <span>Configurar Catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
          </div>

          {/* Tarjeta 3: Mentoría 1:1 */}
          <div className="rounded-2xl border border-brand-border/70 bg-card p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs border-amber-500/30 text-amber-600">
                Agendada
              </Badge>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Mi Mentora 1:1</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Guía personalizada con empresarias líderes del ecosistema.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-brand-border/60 bg-brand-muted/20 space-y-1">
              <p className="text-xs font-bold text-foreground">{userData.mentorName}</p>
              <p className="text-[11px] text-muted-foreground">{userData.mentorSpecialty}</p>
              <p className="text-[11px] text-brand-primary font-medium pt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {userData.nextSession}
              </p>
            </div>
            <Button asChild className="w-full text-xs h-9 bg-brand-primary text-white hover:bg-brand-primary/90">
              <a href={ONBOARDING_URLS.aceleracion}>
                <span>Acceder a Sesión Virtual</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Recursos & Soporte Directo */}
        <div className="p-6 rounded-2xl border border-brand-border/70 bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">
                Centro de Guías y Recursos del Programa
              </h4>
              <p className="text-xs text-muted-foreground">
                Descarga plantillas financieras, guía de marketing y normativas de e-commerce.
              </p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="text-xs shrink-0">
            <Link href="/#impulso">Explorar Recursos</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border/40 py-6 text-center text-xs text-muted-foreground">
        Plataforma Pariendo Ideas © {new Date().getFullYear()} · Impulsando mujeres hacia el éxito empresarial
      </footer>
    </div>
  )
}
