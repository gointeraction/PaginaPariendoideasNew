'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  Sprout,
  GraduationCap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sendLeadEmail, type LeadData } from '@/lib/email-service'

export const ECOSISTEMAS = [
  'Gastronomía o comida',
  'Turismo',
  'Bienes',
  'Salud',
  'Artesanía',
  'Belleza',
  'Orfebrería',
  'Diseño',
  'Moda',
  'Agronomía',
  'Startups',
  'Otro',
] as const

export const PROGRAMAS_BECA = [
  'Inteligencia artificial',
  'Oratoria y Liderazgo',
  'PNL',
  'Finanzas para no financieras',
  'Arquitectura y Feng Shui',
  'Ciberseguridad',
  'Marketing Digital',
  'Yoga',
  'Mindfulness',
  'Derecho para emprendedoras',
  'Comercio electrónico',
] as const

const FIELD_CLASS =
  'h-11 w-full rounded-xl border border-brand-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:border-brand-primary dark:bg-slate-900'

const LABEL_CLASS =
  'flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground'

const CHEVRON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"

const emptyLead = (email = ''): LeadData => ({
  nombre: '',
  apellidos: '',
  email,
  telefono: '',
  ecosistema: '',
  programaBeca: '',
})

interface SubscribeModalProps {
  open: boolean
  onClose: () => void
  defaultEmail?: string
  /** Ruta de onboarding que abrió el modal (destino del correo de bienvenida). */
  originUrl?: string
}

export function SubscribeModal({
  open,
  onClose,
  defaultEmail = '',
  originUrl = '',
}: SubscribeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="subscribe-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-brand-border bg-card shadow-lift"
          >
            {/* Cabecera */}
            <div className="relative bg-gradient-to-br from-fucsia to-violeta-osc px-6 py-5 text-white">
              <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-brand-secondary/25 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Únete al movimiento
                  </span>
                  <h2
                    id="subscribe-modal-title"
                    className="mt-1 font-display text-xl font-bold leading-snug sm:text-2xl"
                  >
                    Suscríbete a Pariendo Ideas
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar formulario"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            <SubscribeBody defaultEmail={defaultEmail} onClose={onClose} originUrl={originUrl} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/**
 * Cuerpo del modal. Vive dentro del subárbol que se monta al abrir,
 * así su estado se inicializa con el correo precargado sin usar efectos.
 */
function SubscribeBody({
  defaultEmail,
  onClose,
  originUrl,
}: {
  defaultEmail: string
  onClose: () => void
  originUrl: string
}) {
  const [form, setForm] = React.useState<LeadData>(() => emptyLead(defaultEmail))
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = React.useState('')
  // Texto libre cuando el ecosistema elegido es "Otro"
  const [ecosistemaOtro, setEcosistemaOtro] = React.useState('')

  // Escape + bloquear scroll de fondo + foco inicial
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => document.getElementById('lead-nombre')?.focus(), 120)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      window.clearTimeout(t)
    }
  }, [onClose])

  const set =
    (key: keyof LeadData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      setStatus('idle')
      setErrorMsg('')
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const payload: LeadData = {
        ...form,
        ecosistema:
          form.ecosistema === 'Otro' ? `Otro: ${ecosistemaOtro.trim()}` : form.ecosistema,
      }
      const result = await sendLeadEmail(payload, originUrl)
      if (result.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(result.message)
      }
    } catch {
      setStatus('error')
      setErrorMsg('No pudimos enviar tus datos. Inténtalo de nuevo.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center px-6 py-12 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15">
          <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-foreground">
          ¡Gracias, {form.nombre || 'emprendedora'}!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Recibimos tus datos. Te enviamos un correo de bienvenida con el botón para completar tu
          registro. Revisa también tu carpeta de spam.
        </p>
        <Button type="button" onClick={onClose} className="mt-6 h-11 rounded-full btn-brand px-8">
          Cerrar
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
      <p className="text-sm text-muted-foreground">
        Cuéntanos un poco de ti y te enviamos las becas y oportunidades relevantes para tu
        emprendimiento.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="lead-nombre" className={LABEL_CLASS}>
            <User className="h-3.5 w-3.5" /> Nombre
          </label>
          <Input
            id="lead-nombre"
            required
            value={form.nombre}
            onChange={set('nombre')}
            placeholder="María"
            autoComplete="given-name"
            className={FIELD_CLASS}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-apellidos" className={LABEL_CLASS}>
            <User className="h-3.5 w-3.5" /> Apellido
          </label>
          <Input
            id="lead-apellidos"
            required
            value={form.apellidos}
            onChange={set('apellidos')}
            placeholder="Pérez"
            autoComplete="family-name"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="lead-email" className={LABEL_CLASS}>
            <Mail className="h-3.5 w-3.5" /> Correo
          </label>
          <Input
            id="lead-email"
            type="email"
            required
            value={form.email}
            onChange={set('email')}
            placeholder="tu@email.com"
            autoComplete="email"
            className={FIELD_CLASS}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-telefono" className={LABEL_CLASS}>
            <Phone className="h-3.5 w-3.5" /> Teléfono
          </label>
          <Input
            id="lead-telefono"
            type="tel"
            required
            value={form.telefono}
            onChange={set('telefono')}
            placeholder="+58 412 000 0000"
            autoComplete="tel"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-ecosistema" className={LABEL_CLASS}>
          <Sprout className="h-3.5 w-3.5" /> Ecosistema al que perteneces
        </label>
        <select
          id="lead-ecosistema"
          required
          value={form.ecosistema}
          onChange={set('ecosistema')}
          className={`${FIELD_CLASS} appearance-none bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
          style={{ backgroundImage: CHEVRON }}
        >
          <option value="">Selecciona tu ecosistema</option>
          {ECOSISTEMAS.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        {form.ecosistema === 'Otro' && (
          <Input
            id="lead-ecosistema-otro"
            required
            value={ecosistemaOtro}
            onChange={(e) => {
              setEcosistemaOtro(e.target.value)
              setStatus('idle')
              setErrorMsg('')
            }}
            placeholder="Describe tu ecosistema (ej: Consultoría, Educación…)"
            aria-label="Describe tu ecosistema"
            autoComplete="off"
            className={FIELD_CLASS}
          />
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-programa" className={LABEL_CLASS}>
          <GraduationCap className="h-3.5 w-3.5" /> Programa de becas de interés
        </label>
        <select
          id="lead-programa"
          required
          value={form.programaBeca}
          onChange={set('programaBeca')}
          className={`${FIELD_CLASS} appearance-none bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
          style={{ backgroundImage: CHEVRON }}
        >
          <option value="">Selecciona un programa</option>
          {PROGRAMAS_BECA.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-300"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="h-12 w-full rounded-full btn-brand px-6 text-base font-semibold disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Suscribirme
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Al suscribirte aceptas recibir comunicaciones de Pariendo Ideas. Puedes darte de baja cuando
        quieras.
      </p>
    </form>
  )
}
