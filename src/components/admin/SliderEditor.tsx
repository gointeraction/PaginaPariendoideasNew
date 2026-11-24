'use client'

import * as React from 'react'
import { SlideItem } from '@/lib/cms-service'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { Eye, Sparkles } from 'lucide-react'

interface SliderEditorProps {
  slides: SlideItem[]
  onChange: (slides: SlideItem[]) => void
}

export function SliderEditor({ slides, onChange }: SliderEditorProps) {
  const updateSlide = (index: number, field: keyof SlideItem, value: any) => {
    const updated = [...slides]
    updated[index] = {
      ...updated[index],
      [field]: value,
    }
    onChange(updated)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
        <div>
          <h2 className="text-xl font-bold text-foreground">Slider Principal (Cabecera)</h2>
          <p className="text-sm text-muted-foreground">
            Personaliza los textos, llamados a la acción (CTAs) y enlaces de los 3 slides de la landing.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className="rounded-xl border border-brand-border/70 bg-card p-6 shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-brand-border/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-salmon-100 text-brand-secondary-ink font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-foreground text-base">
                  Slide #{index + 1}: {slide.tag || 'Slide'}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor={`active-${index}`} className="text-xs text-muted-foreground cursor-pointer">
                  {slide.active !== false ? 'Visible' : 'Oculto'}
                </Label>
                <Switch
                  id={`active-${index}`}
                  checked={slide.active !== false}
                  onCheckedChange={(checked) => updateSlide(index, 'active', checked)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Etiqueta de Programa (Tag)</Label>
                <Input
                  value={slide.tag}
                  onChange={(e) => updateSlide(index, 'tag', e.target.value)}
                  placeholder="ej. Programa Impulso 2026"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Badge Superior</Label>
                <Input
                  value={slide.badge}
                  onChange={(e) => updateSlide(index, 'badge', e.target.value)}
                  placeholder="ej. Becas del 100% abiertas"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Título Principal</Label>
                <Input
                  value={slide.title}
                  onChange={(e) => updateSlide(index, 'title', e.target.value)}
                  placeholder="ej. ¡Acelera tu negocio"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Resaltado de Título (Gradiente)</Label>
                <Input
                  value={slide.titleHighlight}
                  onChange={(e) => updateSlide(index, 'titleHighlight', e.target.value)}
                  placeholder="ej. con nuestra red sin barreras!"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Descripción o Subtítulo</Label>
              <Textarea
                rows={2}
                value={slide.description}
                onChange={(e) => updateSlide(index, 'description', e.target.value)}
                placeholder="Descripción persuasiva del slide..."
              />
            </div>

            <div className="space-y-3 p-3 rounded-lg bg-brand-muted/20 border border-brand-border/40">
              <p className="text-xs font-bold text-brand-secondary-ink uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Botón Primario (Principal)
              </p>
              <div className="space-y-1.5">
                <Label className="text-xs">Texto del Botón</Label>
                <Input
                  value={slide.primaryCtaText}
                  onChange={(e) => updateSlide(index, 'primaryCtaText', e.target.value)}
                  placeholder="ej. Solicitar Beca"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">URL de Destino (Registro / Link)</Label>
                <Input
                  value={slide.primaryCtaHref}
                  onChange={(e) => updateSlide(index, 'primaryCtaHref', e.target.value)}
                  placeholder="https://onboarding.pariendoideas.com/?programa=..."
                />
              </div>
            </div>

            <div className="pt-3 border-t border-brand-border/30">
              <ImageUploader
                value={slide.imageUrl || ''}
                onChange={(url) => updateSlide(index, 'imageUrl', url)}
                label="Imagen de fondo del Slide (opcional — reemplaza la imagen por defecto)"
                aspectRatio="wide"
                folder="slider_images"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
