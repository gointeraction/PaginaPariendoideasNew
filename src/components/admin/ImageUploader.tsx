'use client'

import * as React from 'react'
import { storage } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload, X, Image as ImageIcon, Link2, Check, Loader2 } from 'lucide-react'

interface ImageUploaderProps {
  value?: string
  onChange: (url: string) => void
  label?: string
  aspectRatio?: 'square' | 'wide' | 'auto'
  folder?: string
}

export function ImageUploader({
  value,
  onChange,
  label = 'Imagen / Logotipo',
  aspectRatio = 'auto',
  folder = 'cms_images',
}: ImageUploaderProps) {
  const [mode, setMode] = React.useState<'upload' | 'url'>('upload')
  const [uploading, setUploading] = React.useState(false)
  const [urlInput, setUrlInput] = React.useState(value || '')
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setUrlInput(value || '')
  }, [value])

  // Función para comprimir imágenes del lado del cliente
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      // Si es SVG, devolver como data URL directamente
      if (file.type.includes('svg')) {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let { width, height } = img

          // Limitar ancho máximo a 1200px para optimizar rendimiento
          const MAX_DIM = 1200
          if (width > MAX_DIM || height > MAX_DIM) {
            if (width > height) {
              height = Math.round((height * MAX_DIM) / width)
              width = MAX_DIM
            } else {
              width = Math.round((width * MAX_DIM) / height)
              height = MAX_DIM
            }
          }

          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height)
            const compressedDataUrl = canvas.toDataURL('image/webp', 0.85)
            resolve(compressedDataUrl)
          } else {
            resolve(e.target?.result as string)
          }
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    })
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      // Primero obtener la versión optimizada / data URL
      const dataUrl = await compressImage(file)

      // Intentar subir a Firebase Storage
      try {
        const cleanName = file.name.replace(/[^a-zA-Z0-9_.-]/g, '_')
        const storageRef = ref(storage, `${folder}/${Date.now()}_${cleanName}`)
        
        // Convertir dataUrl a Blob para upload
        const res = await fetch(dataUrl)
        const blob = await res.blob()
        
        const snapshot = await uploadBytes(storageRef, blob)
        const downloadUrl = await getDownloadURL(snapshot.ref)
        onChange(downloadUrl)
      } catch (storageError) {
        console.warn('Firebase Storage no disponible o sin permisos. Usando data URL optimizada:', storageError)
        // Fallback garantizado: usar el data URL comprimido
        onChange(dataUrl)
      }
    } catch (err) {
      console.error('Error al procesar la imagen:', err)
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (urlInput.trim()) {
      onChange(urlInput.trim())
    }
  }

  const handleRemove = () => {
    onChange('')
    setUrlInput('')
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-brand-primary" />
          {label}
        </Label>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`text-[11px] px-2 py-0.5 rounded transition ${
              mode === 'upload' ? 'bg-brand-primary/10 text-brand-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Subir archivo
          </button>
          <span className="text-[10px] text-muted-foreground">|</span>
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`text-[11px] px-2 py-0.5 rounded transition ${
              mode === 'url' ? 'bg-brand-primary/10 text-brand-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Pegar URL
          </button>
        </div>
      </div>

      {value ? (
        <div className="relative group rounded-xl border border-brand-border/80 bg-brand-muted/20 p-2 flex items-center gap-3 overflow-hidden">
          <div
            className={`rounded-lg bg-white p-1 border border-brand-border/60 flex items-center justify-center overflow-hidden shrink-0 ${
              aspectRatio === 'square' ? 'w-14 h-14' : aspectRatio === 'wide' ? 'w-24 h-14' : 'w-16 h-14'
            }`}
          >
            <img
              src={value}
              alt="Previsualización"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = '/logo.svg'
              }}
            />
          </div>
          <div className="flex-1 min-w-0 pr-8">
            <p className="text-xs font-medium text-foreground truncate">
              {value.startsWith('data:') ? 'Imagen subida (Base64 optimizada)' : value}
            </p>
            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
              <Check className="w-3 h-3" /> Imagen asignada correctamente
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            className="absolute right-2 top-2 h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            title="Eliminar imagen"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : mode === 'upload' ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-brand-border/70 hover:border-brand-primary/60 rounded-xl p-4 text-center cursor-pointer transition bg-card hover:bg-brand-primary/5 flex flex-col items-center justify-center gap-2 group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
            onChange={handleFileChange}
            className="hidden"
          />
          {uploading ? (
            <div className="flex flex-col items-center gap-2 py-2">
              <Loader2 className="w-6 h-6 text-brand-primary animate-spin" />
              <p className="text-xs text-muted-foreground font-medium">Procesando y optimizando imagen...</p>
            </div>
          ) : (
            <>
              <div className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Haz clic para subir desde tu dispositivo
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  PNG, JPG, SVG o WebP (optimización automática)
                </p>
              </div>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Link2 className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://ejemplo.com/imagen.png"
              className="h-9 text-xs pl-8"
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="h-9 text-xs bg-brand-primary text-white hover:bg-brand-primary/90 shrink-0"
          >
            Aplicar
          </Button>
        </form>
      )}
    </div>
  )
}
