'use client'

import * as React from 'react'
import { ImageUploader } from './ImageUploader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Image as ImageIcon,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  Plus,
  FolderOpen,
} from 'lucide-react'

interface MediaItem {
  id: string
  name: string
  url: string
  createdAt: string
  size?: string
}

const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'media-01',
    name: 'Logo Oficial Pariendo Ideas',
    url: '/logo.svg',
    createdAt: '2026-09-06',
    size: '1.2 KB',
  },
  {
    id: 'media-02',
    name: 'Banner Social OpenGraph WhatsApp',
    url: '/og-image.jpg',
    createdAt: '2026-09-06',
    size: '614 KB',
  },
]

export function MediaManager() {
  const [mediaList, setMediaList] = React.useState<MediaItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('pariendo_cms_media_library')
        if (saved) return JSON.parse(saved)
      } catch {}
    }
    return INITIAL_MEDIA
  })

  const [copiedId, setCopiedId] = React.useState<string | null>(null)
  const [newImageTitle, setNewImageTitle] = React.useState('')
  const [tempUrl, setTempUrl] = React.useState('')

  const handleAddMedia = (url: string) => {
    if (!url) return
    const newItem: MediaItem = {
      id: `media-${Date.now()}`,
      name: newImageTitle.trim() || `Imagen ${mediaList.length + 1}`,
      url,
      createdAt: new Date().toISOString().slice(0, 10),
    }

    const updated = [newItem, ...mediaList]
    setMediaList(updated)
    setNewImageTitle('')
    setTempUrl('')
    try {
      localStorage.setItem('pariendo_cms_media_library', JSON.stringify(updated))
    } catch {}
  }

  const handleDelete = (id: string) => {
    const updated = mediaList.filter((m) => m.id !== id)
    setMediaList(updated)
    try {
      localStorage.setItem('pariendo_cms_media_library', JSON.stringify(updated))
    } catch {}
  }

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => {
      setCopiedId(null)
    }, 3000)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-brand-primary" />
            Galería y Banco de Medios
          </h2>
          <p className="text-sm text-muted-foreground">
            Sube fotografías, logotipos y artes para usarlos en cualquier sección de la landing page.
          </p>
        </div>
      </div>

      {/* Zona de Subida de Nueva Imagen */}
      <div className="p-6 rounded-2xl border border-brand-border/80 bg-card/60 shadow-sm space-y-4">
        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
          <Plus className="w-4 h-4 text-brand-primary" />
          Subir Nuevo Recurso a la Galería
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Nombre / Etiqueta del Recurso</label>
            <Input
              value={newImageTitle}
              onChange={(e) => setNewImageTitle(e.target.value)}
              placeholder="ej. Logo Aliado X, Foto Mentora, Banner..."
              className="h-10 text-xs"
            />
          </div>
          <div>
            <ImageUploader
              value={tempUrl}
              onChange={(url) => {
                setTempUrl(url)
                if (url) handleAddMedia(url)
              }}
              label="Seleccionar Archivo"
              folder="general_media"
            />
          </div>
        </div>
      </div>

      {/* Rejilla de Imágenes Almacenadas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {mediaList.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-brand-border/70 bg-card overflow-hidden shadow-sm hover:border-brand-primary/50 transition flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-brand-muted/30 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={item.url}
                alt={item.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = '/logo.svg'
                }}
              />
            </div>

            <div className="p-3 space-y-2">
              <p className="text-xs font-semibold text-foreground truncate" title={item.name}>
                {item.name}
              </p>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{item.createdAt}</span>
                {item.size && <span>{item.size}</span>}
              </div>

              <div className="flex items-center gap-1.5 pt-2 border-t border-brand-border/40">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(item.id, item.url)}
                  className="flex-1 text-[11px] h-7 px-2"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500 mr-1" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      <span>Copiar URL</span>
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(item.id)}
                  className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  title="Eliminar de la galería"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
