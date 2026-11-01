'use client'

import * as React from 'react'
import { firestore } from '@/lib/firebase'
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from 'firebase/firestore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  MessageCircle,
  Download,
  Filter,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

export interface ApplicationItem {
  id: string
  fullName: string
  email: string
  phone: string
  city: string
  businessName: string
  program: 'becas' | 'kit-mujer-ceo' | 'aceleracion'
  stage: 'idea' | 'semilla' | 'operando'
  status: 'aprobada' | 'evaluacion' | 'pendiente' | 'rechazada'
  score?: number
  createdAt: string
  notes?: string
}

const INITIAL_DEMO_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'app-001',
    fullName: 'María Elena Salazar',
    email: 'maria.salazar@gmail.com',
    phone: '+584121234567',
    city: 'Caracas, DC',
    businessName: 'Dulces Delicias Artesanales',
    program: 'becas',
    stage: 'semilla',
    status: 'aprobada',
    score: 95,
    createdAt: '2026-09-06T18:30:00Z',
  },
  {
    id: 'app-002',
    fullName: 'Gabriela Morales',
    email: 'gabi.morales@hotmail.com',
    phone: '+584249876543',
    city: 'Valencia, Carabobo',
    businessName: 'EcoModa Sustentable',
    program: 'kit-mujer-ceo',
    stage: 'operando',
    status: 'evaluacion',
    score: 88,
    createdAt: '2026-09-06T15:20:00Z',
  },
  {
    id: 'app-003',
    fullName: 'Karla Rivas',
    email: 'karla.rivas@outlook.com',
    phone: '+584145558899',
    city: 'Maracaibo, Zulia',
    businessName: 'Consultora Jurídica Digital',
    program: 'aceleracion',
    stage: 'operando',
    status: 'pendiente',
    score: 82,
    createdAt: '2026-09-06T12:10:00Z',
  },
]

export function ApplicationsManager() {
  const [applications, setApplications] = React.useState<ApplicationItem[]>(INITIAL_DEMO_APPLICATIONS)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [statusFilter, setStatusFilter] = React.useState<string>('todos')
  const [loading, setLoading] = React.useState(false)

  // Escuchar aplicaciones en Firestore
  React.useEffect(() => {
    try {
      const q = query(collection(firestore, 'scholarship_applications'))
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: ApplicationItem[] = []
            snapshot.forEach((doc) => {
              list.push({ id: doc.id, ...(doc.data() as any) })
            })
            setApplications(list)
          }
        },
        (err) => {
          console.warn('Firestore applications query error (using demo fallback):', err)
        }
      )
      return () => unsubscribe()
    } catch (e) {
      console.warn('Error connecting to applications collection:', e)
    }
  }, [])

  const handleStatusChange = async (id: string, newStatus: ApplicationItem['status']) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    )

    try {
      const docRef = doc(firestore, 'scholarship_applications', id)
      await updateDoc(docRef, { status: newStatus, updatedAt: new Date().toISOString() })
    } catch (err) {
      console.warn('Updated status locally:', err)
    }
  }

  const filtered = applications.filter((app) => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.city.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'todos' || app.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const stats = {
    total: applications.length,
    aprobadas: applications.filter((a) => a.status === 'aprobada').length,
    evaluacion: applications.filter((a) => a.status === 'evaluacion').length,
    pendientes: applications.filter((a) => a.status === 'pendiente').length,
  }

  const exportCSV = () => {
    const headers = 'ID,Nombre,Email,Telefono,Ciudad,Negocio,Programa,Etapa,Estatus,Fecha\n'
    const rows = filtered
      .map(
        (a) =>
          `"${a.id}","${a.fullName}","${a.email}","${a.phone}","${a.city}","${a.businessName}","${a.program}","${a.stage}","${a.status}","${a.createdAt}"`
      )
      .join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `postulaciones_pariendo_ideas_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-brand-primary" />
            Bandeja de Postulaciones & Diagnósticos
          </h2>
          <p className="text-sm text-muted-foreground">
            Gestión y aprobación de postulantes al Programa Impulso, Kit Mujer CEO y Aceleración.
          </p>
        </div>
        <Button
          type="button"
          onClick={exportCSV}
          variant="outline"
          className="text-xs h-9 flex items-center gap-1.5 border-brand-border"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Exportar CSV</span>
        </Button>
      </div>

      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl border border-brand-border/70 bg-card">
          <p className="text-xs font-semibold text-muted-foreground uppercase">Total Postuladas</p>
          <p className="text-2xl font-bold font-serif text-foreground mt-1">{stats.total}</p>
        </div>
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase">Becas Aprobadas</p>
          <p className="text-2xl font-bold font-serif text-emerald-600 mt-1">{stats.aprobadas}</p>
        </div>
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase">En Evaluación</p>
          <p className="text-2xl font-bold font-serif text-amber-600 mt-1">{stats.evaluacion}</p>
        </div>
        <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase">Pendientes</p>
          <p className="text-2xl font-bold font-serif text-blue-600 mt-1">{stats.pendientes}</p>
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre, negocio o ciudad..."
            className="pl-9 h-9 text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {['todos', 'aprobada', 'evaluacion', 'pendiente'].map((status) => (
            <Button
              key={status}
              type="button"
              variant={statusFilter === status ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter(status)}
              className="text-xs capitalize h-8 shrink-0"
            >
              {status === 'todos' ? 'Todas' : status}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Postulaciones */}
      <div className="space-y-3">
        {filtered.map((app) => (
          <div
            key={app.id}
            className="p-4 sm:p-5 rounded-xl border border-brand-border/70 bg-card hover:border-brand-primary/40 transition shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-base text-foreground">{app.fullName}</h4>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="font-medium text-xs text-brand-primary">{app.businessName}</span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] capitalize ${
                      app.status === 'aprobada'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                        : app.status === 'evaluacion'
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30'
                        : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30'
                    }`}
                  >
                    {app.status}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground flex items-center gap-3 flex-wrap">
                  <span>📍 {app.city}</span>
                  <span>✉️ {app.email}</span>
                  <span>📱 {app.phone}</span>
                  <span>🚀 Programa: <strong className="text-foreground uppercase">{app.program}</strong></span>
                </p>
              </div>

              {/* Botones de Acción Administrativa */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/${app.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(
                    app.fullName
                  )},%20te%20escribimos%20desde%20el%20equipo%20de%20Pariendo%20Ideas%20respecto%20a%20tu%20postulaci%C3%B3n.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  title="Contactar vía WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                {app.status !== 'aprobada' && (
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleStatusChange(app.id, 'aprobada')}
                    className="h-8 text-xs bg-brand-primary text-white hover:bg-brand-primary/90"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Aprobar Beca
                  </Button>
                )}

                {app.status !== 'evaluacion' && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(app.id, 'evaluacion')}
                    className="h-8 text-xs border-amber-500/40 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10"
                  >
                    <Clock className="w-3.5 h-3.5 mr-1" /> En Evaluación
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 border border-dashed rounded-xl text-muted-foreground text-sm">
            No se encontraron postulaciones con los filtros seleccionados.
          </div>
        )}
      </div>
    </div>
  )
}
