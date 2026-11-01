'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, Layers } from 'lucide-react'

interface TrustBarEditorProps {
  tools: string[]
  onChange: (tools: string[]) => void
}

export function TrustBarEditor({ tools, onChange }: TrustBarEditorProps) {
  const [newTool, setNewTool] = React.useState('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTool.trim()) return
    onChange([...tools, newTool.trim()])
    setNewTool('')
  }

  const handleRemove = (index: number) => {
    onChange(tools.filter((_, i) => i !== index))
  }

  const handleUpdate = (index: number, val: string) => {
    const updated = [...tools]
    updated[index] = val
    onChange(updated)
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-brand-border/60">
        <h2 className="text-xl font-bold text-foreground">Marquesina de Herramientas Tecnológicas</h2>
        <p className="text-sm text-muted-foreground">
          Herramientas y plataformas que se muestran rotando continuamente en la marquesina (`TrustBar`).
        </p>
      </div>

      <form onSubmit={handleAdd} className="flex gap-3 max-w-md">
        <Input
          value={newTool}
          onChange={(e) => setNewTool(e.target.value)}
          placeholder="Nombre de la herramienta (ej. Stripe)"
          className="h-10"
        />
        <Button type="submit" className="bg-brand-primary text-white shrink-0">
          <Plus className="w-4 h-4 mr-1" /> Añadir
        </Button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2.5 rounded-lg border border-brand-border/70 bg-card shadow-sm"
          >
            <Layers className="w-4 h-4 text-brand-primary shrink-0" />
            <Input
              value={tool}
              onChange={(e) => handleUpdate(index, e.target.value)}
              className="h-8 text-xs font-medium"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleRemove(index)}
              className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
