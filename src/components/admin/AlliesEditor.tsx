'use client'

import * as React from 'react'
import { AllyItem } from '@/lib/cms-service'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { Plus, Trash2, Building2, Image as ImageIcon } from 'lucide-react'

interface AlliesEditorProps {
  allies: AllyItem[]
  onChange: (allies: AllyItem[]) => void
}

export function AlliesEditor({ allies, onChange }: AlliesEditorProps) {
  const updateAlly = (index: number, field: keyof AllyItem, value: any) => {
    const updated = [...allies]
    updated[index] = {
      ...updated[index],
      [field]: value,
    }
    onChange(updated)
  }

  const removeAlly = (index: number) => {
    const updated = allies.filter((_, i) => i !== index)
    onChange(updated)
  }

  const addAlly = () => {
    const newAlly: AllyItem = {
      id: `aliado-${Date.now()}`,
      name: 'Nueva Empresa Aliada',
      category: 'Alianza Estratégica',
      logoUrl: '',
      active: true,
    }
    onChange([...allies, newAlly])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
        <div>
          <h2 className="text-xl font-bold text-foreground">Aliados Estratégicos ({allies.length})</h2>
          <p className="text-sm text-muted-foreground">
            Administra las empresas y organizaciones que aparecen en la sección de Aliados. Puedes agregar sus URLs de logotipo o mantener el isotipo limpio.
          </p>
        </div>
        <Button
          type="button"
          onClick={addAlly}
          className="bg-brand-primary text-white hover:bg-brand-primary/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Agregar Aliado
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allies.map((ally, index) => {
          const initials = ally.name
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')
            .toUpperCase() || 'AL'

          return (
            <div
              key={ally.id || index}
              className={`rounded-xl border p-4 bg-card transition-all ${
                ally.active ? 'border-brand-border/80' : 'border-dashed border-muted-foreground/30 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xs shrink-0 overflow-hidden shadow-sm">
                    {ally.logoUrl ? (
                      <img
                        src={ally.logoUrl}
                        alt={ally.name}
                        className="w-full h-full object-contain p-1 bg-white"
                        onError={(e) => {
                          // fallback si la imagen no carga
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      initials
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground line-clamp-1">
                      {ally.name || 'Sin nombre'}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {ally.category || 'Categoría no definida'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    checked={ally.active}
                    onCheckedChange={(checked) => updateAlly(index, 'active', checked)}
                    title={ally.active ? 'Activo' : 'Inactivo'}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeAlly(index)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    title="Eliminar aliado"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-brand-border/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label className="text-[11px] text-muted-foreground">Nombre de la Empresa</Label>
                    <Input
                      value={ally.name}
                      onChange={(e) => updateAlly(index, 'name', e.target.value)}
                      placeholder="ej. Cavecom-e"
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[11px] text-muted-foreground">Categoría / Ramo</Label>
                    <Input
                      value={ally.category}
                      onChange={(e) => updateAlly(index, 'category', e.target.value)}
                      placeholder="ej. Comercio Electrónico"
                      className="h-8 text-xs"
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <ImageUploader
                    value={ally.logoUrl || ''}
                    onChange={(url) => updateAlly(index, 'logoUrl', url)}
                    label="Logotipo Oficial (SVG / PNG transparente)"
                    aspectRatio="square"
                    folder="allies_logos"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
