'use client'

import * as React from 'react'
import { SubscribeModal } from './SubscribeModal'
import { ONBOARDING_BASE_URL } from '@/lib/constants'

export interface OpenSubscribeModalOptions {
  /**
   * Ruta de onboarding que "habría abierto" el botón. Se conserva y se usa
   * como botón del correo de bienvenida (?programa=..., &sector=..., etc.).
   */
  originUrl?: string
  /** Correo precargado en el formulario (opcional). */
  defaultEmail?: string
}

interface SubscribeModalContextValue {
  openSubscribeModal: (options?: OpenSubscribeModalOptions) => void
}

const SubscribeModalContext = React.createContext<SubscribeModalContextValue | null>(null)

/**
 * Hook para abrir el modal de suscripción desde cualquier botón.
 *
 * Uso explícito por botón (sin interceptor global):
 *
 *   const { openSubscribeModal } = useSubscribeModal()
 *   <a href={ONBOARDING_URLS.becas}
 *       onClick={(e) => {
 *         e.preventDefault()
 *         openSubscribeModal({ originUrl: ONBOARDING_URLS.becas })
 *       }}>
 *
 * El `href` se mantiene como respaldo sin JavaScript y para SEO.
 */
export function useSubscribeModal(): SubscribeModalContextValue {
  const ctx = React.useContext(SubscribeModalContext)
  if (!ctx) {
    throw new Error('useSubscribeModal debe usarse dentro de <SubscribeModalProvider>')
  }
  return ctx
}

/**
 * Proveedor único del modal de suscripción. Se monta en el layout raíz,
 * de modo que todas las páginas (landing, dashboard, portales) comparten
 * una sola instancia del modal.
 */
export function SubscribeModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<{
    open: boolean
    originUrl: string
    defaultEmail: string
  }>({ open: false, originUrl: ONBOARDING_BASE_URL, defaultEmail: '' })

  const openSubscribeModal = React.useCallback((options?: OpenSubscribeModalOptions) => {
    setState({
      open: true,
      originUrl: options?.originUrl || ONBOARDING_BASE_URL,
      defaultEmail: options?.defaultEmail || '',
    })
  }, [])

  const close = React.useCallback(() => {
    setState((prev) => ({ ...prev, open: false }))
  }, [])

  const value = React.useMemo(() => ({ openSubscribeModal }), [openSubscribeModal])

  return (
    <SubscribeModalContext.Provider value={value}>
      {children}
      <SubscribeModal
        open={state.open}
        onClose={close}
        defaultEmail={state.defaultEmail}
        originUrl={state.originUrl}
      />
    </SubscribeModalContext.Provider>
  )
}
