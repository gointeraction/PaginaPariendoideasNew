'use client'

import * as React from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import {
  LandingPageContent,
  DEFAULT_CMS_CONTENT,
  fetchCurrentLandingContent,
  saveLandingContent,
  ADMIN_EMAILS,
} from '@/lib/cms-service'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { SliderEditor } from '@/components/admin/SliderEditor'
import { AlliesEditor } from '@/components/admin/AlliesEditor'
import { TrustBarEditor } from '@/components/admin/TrustBarEditor'
import { ApplicationsManager } from '@/components/admin/ApplicationsManager'
import { MediaManager } from '@/components/admin/MediaManager'
import { Button } from '@/components/ui/button'
import {
  Save,
  LogOut,
  ExternalLink,
  RotateCcw,
  Sliders,
  Building2,
  Layers,
  Users,
  FolderOpen,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function GestorPariendoAdminPage() {
  const [user, setUser] = React.useState<User | null>(null)
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null)
  const [authChecking, setAuthChecking] = React.useState(true)

  const [content, setContent] = React.useState<LandingPageContent>(DEFAULT_CMS_CONTENT)
  const [activeTab, setActiveTab] = React.useState<'slider' | 'allies' | 'trustbar' | 'applications' | 'media'>('slider')
  const [isSaving, setIsSaving] = React.useState(false)
  const [feedback, setFeedback] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [hasChanges, setHasChanges] = React.useState(false)

  // Escuchar estado de autenticación
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser?.email) {
        const email = currentUser.email.toLowerCase()
        const authorized = ADMIN_EMAILS.some((adm) => adm.toLowerCase() === email)
        setIsAuthorized(authorized)
      } else {
        setIsAuthorized(false)
      }
      setAuthChecking(false)
    })

    return () => unsubscribe()
  }, [])

  // Cargar contenido actual
  React.useEffect(() => {
    if (isAuthorized) {
      fetchCurrentLandingContent().then((data) => {
        setContent(data)
      })
    }
  }, [isAuthorized])

  const handleSave = async () => {
    setIsSaving(true)
    setFeedback(null)
    try {
      const ok = await saveLandingContent(content, user?.email || undefined)
      if (ok) {
        setFeedback({
          type: 'success',
          message: '¡Cambios guardados y publicados con éxito en producción!',
        })
        setHasChanges(false)
      } else {
        setFeedback({
          type: 'success',
          message: 'Cambios guardados localmente. Se sincronizarán automáticamente con Firestore.',
        })
        setHasChanges(false)
      }
    } catch (e: any) {
      setFeedback({
        type: 'error',
        message: 'Error al guardar los cambios: ' + (e.message || 'Error desconocido'),
      })
    } finally {
      setIsSaving(false)
      setTimeout(() => {
        setFeedback(null)
      }, 5000)
    }
  }

  const handleReset = () => {
    if (confirm('¿Estás segura/o de restablecer todos los valores originales de la landing?')) {
      setContent(DEFAULT_CMS_CONTENT)
      setHasChanges(true)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
    setIsAuthorized(false)
  }

  if (authChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-brand-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-medium">Verificando credenciales de acceso...</p>
        </div>
      </div>
    )
  }

  if (!user || !isAuthorized) {
    return (
      <AdminLogin
        onLoginSuccess={(email) => {
          setIsAuthorized(true)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Barra de Navegación del Panel CMS */}
      <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-card/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm p-1 border border-brand-border/60 flex items-center justify-center">
              <Image
                src="/logo-pariendo-symbol.png"
                alt="Pariendo Ideas"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
                CMS Pariendo Ideas
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] rounded-full bg-brand-primary/10 text-brand-primary font-semibold">
                  Admin
                </span>
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-brand-muted/30 transition-colors border border-brand-border/60"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ver Landing</span>
            </Link>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs h-9"
              title="Restablecer textos por defecto"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:mr-1" />
              <span className="hidden sm:inline">Restablecer</span>
            </Button>

            <Button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="bg-brand-primary text-white hover:bg-brand-primary/90 text-xs sm:text-sm h-9 px-4 font-semibold shadow-md shadow-brand-primary/20"
            >
              {isSaving ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1.5" />
              ) : (
                <Save className="w-4 h-4 mr-1.5" />
              )}
              <span>Guardar</span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="h-9 w-9 text-muted-foreground hover:text-destructive"
              title="Cerrar sesión"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Alerta flotante de feedback */}
      {feedback && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4">
          <div
            className={`p-4 rounded-xl border flex items-center justify-between gap-3 text-sm animate-in slide-in-from-top-2 ${
              feedback.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-destructive/10 border-destructive/20 text-destructive'
            }`}
          >
            <div className="flex items-center gap-2">
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <span className="font-medium">{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="text-xs opacity-70 hover:opacity-100 underline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Cuerpo Principal del CMS */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Selector de Pestañas */}
        <div className="flex border-b border-brand-border/60 mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('slider')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'slider'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Slider Principal (3 Slides)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('allies')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'allies'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Aliados Estratégicos ({content.allies.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('trustbar')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'trustbar'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Herramientas / Marquesina ({content.trustBar.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'applications'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Postulaciones & Becas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'media'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            <span>Galería de Medios</span>
          </button>
        </div>

        {/* Contenido de la pestaña activa */}
        <div className="bg-card/50 rounded-2xl border border-brand-border/60 p-6 sm:p-8">
          {activeTab === 'slider' && (
            <SliderEditor
              slides={content.slides}
              onChange={(newSlides) => {
                setContent({ ...content, slides: newSlides })
                setHasChanges(true)
              }}
            />
          )}

          {activeTab === 'allies' && (
            <AlliesEditor
              allies={content.allies}
              onChange={(newAllies) => {
                setContent({ ...content, allies: newAllies })
                setHasChanges(true)
              }}
            />
          )}

          {activeTab === 'trustbar' && (
            <TrustBarEditor
              tools={content.trustBar}
              onChange={(newTools) => {
                setContent({ ...content, trustBar: newTools })
                setHasChanges(true)
              }}
            />
          )}

          {activeTab === 'applications' && <ApplicationsManager />}

          {activeTab === 'media' && <MediaManager />}
        </div>
      </main>

      {/* Footer del Admin */}
      <footer className="border-t border-brand-border/40 py-4 text-center text-xs text-muted-foreground">
        Panel de Administración Exclusivo • Pariendo Ideas © {new Date().getFullYear()} • Conectado a Firebase
      </footer>
    </div>
  )
}
