# Documento de Estilo y Diseño — Pariendo Ideas

**Referencia:** https://campus.pariendoideas.com/
**Plataforma:** Next.js 14 + Tailwind CSS

---

## 1. Paleta de Colores

### Principales
- **Primary:** #A855F7 (Púrpura)
- **Secondary:** #EC4899 (Rosa)
- **Accent:** #F97316 (Naranja)
- **Background:** #FFFFFF (Blanco)
- **Foreground:** #2D2640 (Gris oscuro)
- **Muted:** #F5F3FF (Gris claro púrpura)
- **Border:** #E9D5FF (Borde púrpura claro)

### Gradientes
- **gradient-primary:** linear-gradient(to right, #A855F7, #EC4899, #F97316)
- **gradient-hero:** linear-gradient(to bottom right, rgba(168,85,247,0.2), rgba(236,72,153,0.1), rgba(249,115,22,0.2))
- **text-gradient:** gradient con clip-text

---

## 2. Tipografía

| Clase | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| text-6xl | 3.75rem | Bold | Hero |
| text-4xl | 2.25rem | Bold | Secciones |
| text-2xl | 1.5rem | Bold | Encabezados |
| text-xl | 1.25rem | Semibold | Tarjetas |
| text-base | 1rem | Normal | Texto |
| text-sm | 0.875rem | Normal | Secundario |
| text-xs | 0.75rem | Normal | Labels |

---

## 3. Componentes

### Header Sticky
- bg-background/95 + backdrop-blur
- z-50
- h-16

### Botones
- Primario: rounded-full gradient-primary text-white shadow-md
- Secundario: rounded-full border-2 border-primary/20
- CTA: rounded-full bg-white text-purple-900 shadow-xl

### Tarjetas
- rounded-3xl border bg-card
- hover:shadow-xl hover:-translate-y-1
- group-hover:scale-110 en iconos

### Badges
- rounded-full bg-purple-100 text-purple-700

---

## 4. Layout

- Container: mx-auto px-4
- Secciones: py-16 md:py-24
- Grid: gap-6 o gap-8
- Tarjetas internas: p-6 o p-8

---

## 5. Responsive

- Mobile: base
- SM: 640px
- MD: 768px
- LG: 1024px

---

## 6. Animaciones

- Tarjetas: hover:shadow-xl hover:-translate-y-1
- Iconos: group-hover:scale-110
- Botones: hover:opacity-90
- Transiciones: duration-300
