# Documento de Estilo y Diseño — Pariendo Ideas

**Referencia:** manual de marca Pariendo Ideas
**Plataforma:** Next.js + Tailwind CSS + shadcn/ui
**Última actualización:** sistema de color **por tipo de elemento** (títulos = marrón, acento = salmon ink, decoración = arena, **gold solo en botones**), verificación WCAG AA 0 fallos en claro y oscuro (543 elementos); todos los botones de onboarding abren el modal de suscripción (25 en 14 componentes), envío de bienvenida + aviso por API Radarsystems sin fallback.

---

## 1. Paleta de Colores

### Principales (manual de marca)

| Token | Hex | Uso |
|-------|-----|-----|
| **brand-primary** (fucsia, 2026-11-18) | `#D6336C` | Primario de UI: focus rings, tokens `--primary/--ring/--chart-1/--sidebar-*`, gradientes. **El verde teal quedó SOLO en hover de `.btn-brand` y en el footer** |
| **brand-secondary** (salmon) | `#E8A89A` | Bordes decorativos, hover, iconos sobre superficies oscuras |
| **brand-accent** (gold) | `#F8B400` | **Color por defecto de `.btn-brand`** (con texto `#3A2800`) + decoración sin texto. El hover del botón es verde teal |

### Sistema de color por tipo de elemento (decisión 2026-11)

| Tipo de elemento | Color | Token / clases |
|------------------|-------|----------------|
| Títulos y texto fuerte | **Rosa pastel literal** | `--brand-deep` · `text-brand-deep` = **`#E9AB9E` en AMBOS modos** (decisión literal de la usuaria 2026-11-18; ~1.95:1 en claro — ver §10) |
| Subtítulos, enlaces, acento, estrellas, iconos | Salmon ink | `--brand-secondary-ink` · `text-brand-secondary-ink` (light `#A94B3C` / dark `#F0BFB4`) |
| Decoración: blobs `blur-3xl`, bordes, chips | Arena | `--brand-border` · `bg-brand-border/*` |
| Marcos/iconos con texto **blanco** | **Multicolor vibrante** | Rotación AA: `from-violeta to-fucsia` · `from-salmon-700 to-fucsia` · `from-fucsia to-violeta-osc` · `from-fucsia-osc to-violeta` · `from-violeta-osc to-fucsia-osc` (todos ≥4.5:1 con blanco) |
| Barras de progreso (sin texto) | Multicolor | `from-fucsia to-violeta` (también `from-salmon-500 to-fucsia` en los degradados placeholder del blog) |
| Chips / etiquetas | Salmon | `bg-salmon-100 text-salmon-900` (6.5:1) · hover `bg-salmon-200 hover:text-salmon-950` |
| Estados semánticos | Funcionales | emerald (aprobada) · blue (rechazada) · teal (Kit activo) · salmon (evaluación/agendada) |
| **Botones** | Gold → verde en hover | `.btn-brand` (default gold, hover teal `#1E575B`) |
| **Decoración sin texto** (blobs, bordes, ilustraciones) | Multicolor + **gold permitido** | `--color-gold` en gradientes decorativos/bordes; nunca detrás de texto (decisión 2026-11-18) |

### Paleta multicolor vibrante (2026-11-18 — reemplaza al marrón oscuro en la UI)

> Decisión de la usuaria: "multicolor fuera del manual" para dar más color y dinamismo. La escala `brown` queda en el tema pero **sin usos en la UI**.

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-fucsia` | `#D6336C` | Degradados con texto blanco (4.6:1) · acentos |
| `--color-fucsia-osc` | `#B02A5B` | Degradados con texto blanco (6.3:1) |
| `--color-violeta` | `#7C3AED` | Degradados con texto blanco (5.7:1) |
| `--color-violeta-osc` | `#5B21B6` | Degradados con texto blanco |
| `--color-coral` | `#FF6B6B` | **Solo decoración** (2.8:1 con blanco) |
| `--color-lila` | `#A855F7` | Decoración / acentos sin texto blanco encima |

**Ilustraciones SVG** en `public/decor/` (`flor`, `arco`, `hojas`, `confeti`, `ondas`) — insertadas en 10 secciones como `<img>` decorativo con `alt="" aria-hidden -z-10 pointer-events-none`.

### Secundarias

| Token | Hex | Uso |
|-------|-----|-----|
| arena | `#E5D3B3` | Fondos suaves, texturas |
| marrón | `#A7876B` | ~~Detalles, iconografía secundaria~~ — **sin uso en UI desde 2026-11-18** (solo escala legacy en el tema) |
| blanco | `#FFFFFF` | Fondos, texto sobre teal |

### Tokens de superficie y texto

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--background` | `#FFFFFF` | `#0E1718` | Fondo de página |
| `--foreground` | `#142225` | `#F2F6F6` | Texto principal |
| `--card` | `#FFFFFF` | `#162122` | Tarjetas, paneles |
| `--brand-surface` | `#144044` | `#144044` | Footer, superficies de marca (no se aclara en dark) |
| `--brand-deep` | `#E9AB9E` (pastel literal) | `#E9AB9E` (pastel literal) | Títulos y texto fuerte (decisión literal 2026-11-18) |
| `--brand-secondary-ink` | `#A94B3C` (salmon ink) | `#F0BFB4` | Subtítulos, enlaces, acento, estrellas, iconos |
| `--brand-accent-ink` | `#9A6100` | `#FFCD4D` | Gold legible (reservado; sin uso actual fuera de botones) |

### Pasos de color para texto legible (WCAG)

- **rosa pastel (títulos):** `text-brand-deep` = **`#E9AB9E` literal en ambos modos** (decisión de la usuaria 2026-11-18; da ~1.95:1 sobre blanco → la auditoría WCAG registra fallos en claro — aceptado a sabiendas, ver §10)
- **salmon ink (acento):** `text-brand-secondary-ink` (`#A94B3C` claro / `#F0BFB4` oscuro); chips → `text-salmon-900` sobre `bg-salmon-100` (6.5:1)
- **teal:** **solo** hover de `.btn-brand` y footer (banda `bg-brand-surface #144044`); nunca como color de UI fuera de esos dos lugares desde 2026-11-18
- **gold:** color por defecto de `.btn-brand` + **decoración sin texto** (blobs, bordes, ilustraciones, extremos de degradados decorativos); nunca como texto de contenido

> Regla práctica: los tonos medios (`teal-500/600`, `salmon-500/600`, `gold-600/700`) **no** sirven como texto sobre fondo oscuro → siempre añadir la variante `dark:`.

### Neutros (calados al manual)

Se eliminaron las escalas frías genéricas (slate / zinc / neutral / gray) y se sustituyeron por neutros cálidos derivados del teal. **Se conservan los colores funcionales:** `emerald` (éxito/estado), `blue` (enlaces/información), `red` (errores), `cyan`. Se añadió la escala **`brown` 50–950** (marrón `#A7876B` calado) — **desde 2026-11-18 sin usos en la UI** (reemplazada por la paleta multicolor).

### Gradientes

- **gradient-primary:** `linear-gradient(to right, #E8A89A 0%, #E8A89A 55%, #D6336C 100%)` — salmon → **fucsia** (2026-11-18: sin teal). **Solo decorativo** (barras, bordes `p-[1.5px]`, tiles de icono, badges). Nunca en botones con texto.
- **gradient-primary-soft:** salmon → fucsia → **violeta 12%** (sin teal desde 2026-11-18).
- **gradient-hero:** radiales salmon/fucsia/**gold** (sin teal; gold decorativo permitido desde 2026-11-18).
- **gradient-text:** `120deg, #E9AB9E → #E8A89A` (rosa pastel literal; ambos ≥4.5:1 sobre claro → **no**: a 1.95:1 en claro, decisión literal 2026-11-18).
  - **Variantes para fondos oscuros** (en `globals.css`): `.dark .gradient-text` y `footer .gradient-text` → `120deg, #E8A89A 0%, #F0BFB4 55%, #E8A89A 100%`; `.dark .gradient-text-brand` y `footer .gradient-text-brand` → `#E8A89A → #F0BFB4`. El footer es siempre banda oscura, por eso aplica también en claro.
- **gradient-border::before:** `135deg, #F8B400 → #D6336C` (gold → fucsia; decorativo sin texto, 2026-11-18; antes arena → marrón).
- **Regla dark:** nunca usar `from-white / via-white / to-white` literal en decorados `-z-10` ni en tarjetas → usar `from-background` (+ variantes `dark:` cuando el tono medio lo pida). En claro `background` = blanco, así que el aspecto no cambia.

---

## 2. Tipografía

| Familia | Rol | Pesos |
|---------|-----|-------|
| **Lora** (`font-display`) | Titulares y destacados | 400–700 |
| **Montserrat** (`font-sans`) | Cuerpo de texto, UI, labels | 400–700 |

### Jerarquía

| Clase | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| text-6xl | 3.75rem | Bold | Hero |
| text-4xl | 2.25rem | Bold | Secciones |
| text-2xl | 1.5rem | Bold | Encabezados |
| text-xl | 1.25rem | Semibold | Tarjetas |
| text-base | 1rem | Normal | Texto |
| text-sm | 0.875rem | Normal | Secundario |
| text-xs | 0.75rem | Normal | Labels / eyebrows (`uppercase tracking-[0.18em]`) |

---

## 3. Componentes

### Header Sticky
- `bg-background/95 + backdrop-blur` (clase `.glass`), `z-50`, `h-16`
- En dark, `.glass` pasa a `rgba(15,26,27,0.72)` para que el texto de marca claro se lea

### Botones (`.btn-brand`) — sin degradado

Sistema de botón sólido definido en `globals.css` **fuera de `@layer`** para poder sobrescribir las utilidades de Tailwind:

| Estado | Fondo | Borde | Texto |
|--------|-------|-------|-------|
| Default | `#F8B400` (gold) | `1px solid #B88000` | `#3A2800` ← **principal gold desde 2026-11-18** |
| **Hover** | `#1E575B` (teal) | `#144044` | `#FFFFFF` ← **el verde vive SOLO aquí** |
| Active | `#19494D` | `#144044` | `#FFFFFF` |
| Disabled | opacidad 50% | — | — |

- Transición: `background-color, border-color, color, box-shadow` a `0.25s ease`
- Uso: `<Button className="btn-brand">…</Button>` — aplica a CTA de los 3 planes de Pricing, MainSlider «EMPIEZA AQUÍ», Modules, Mentorship, botones del dashboard y del panel admin, y al botón flotante "volver arriba". Es el **único** lugar donde se usa el gold (hover).
- Chip activo del filtro FAQ: `bg-fucsia border border-brand-secondary text-white shadow-glow` (4.6:1 con blanco; antes `bg-teal-500`, 2026-11-18).
- La variante experimental `.btn-brand-alt` y `.shadow-glow-gold` fueron **eliminadas** de `globals.css` (sin uso); el glow dorado del CTA del slider se conserva porque es del botón.

### Botones secundarios
- Outline: `border border-brand-border bg-background hover:bg-accent`
- Ghost / texto: `text-brand-secondary-ink hover:text-brand-secondary-ink` (salmon ink, nunca teal de texto)

### Tarjetas
- `rounded-3xl border border-brand-border bg-card`
- `hover:shadow-xl hover:-translate-y-1` · hover de borde: `hover:border-brand-secondary-ink`
- En dark usar `bg-card` (nunca `bg-white`)

### Badges y chips
- Chips: `rounded-full bg-salmon-100 text-salmon-900` (6.5:1) · hover `bg-salmon-200 hover:text-salmon-950`
- Iconos en marco: `bg-gradient-to-br from-brown-700 to-brown-900 text-white` (≥4.5:1)
- Estados semánticos: `bg-emerald-500/10 text-emerald-700` (aprobada) · `bg-blue-500/10 text-blue-700` (rechazada) · `bg-teal-500/10 text-teal-600` (Kit activo) · `bg-salmon-500/10 text-salmon-900` (evaluación/agendada)
- En dark añadir la variante `dark:` correspondiente (p. ej. `dark:text-salmon-300`)

---

## 4. Modo Oscuro

- Clase `dark` en `<html>`, tokens `--background / --foreground / --card` definidos en `.dark`
- Superficies: `bg-white` → `bg-card`; `bg-white/70–95` → `bg-background/NN`
- `.glass` oscurecido (ver arriba)
- **Exentos** (permanecen claros por diseño): Footer, AdminLogin, ImageUploader, AlliesEditor, mosaicos de logo
- Texto de marca: siempre con par `light` + `dark:` cuando el tono es medio

---

## 5. Layout

- Container: `mx-auto px-4`
- Secciones: `py-16 md:py-24`
- Grid: `gap-6` o `gap-8`
- Tarjetas internas: `p-6` o `p-8`

---

## 6. Responsive

- Mobile: base · SM: 640px · MD: 768px · LG: 1024px

---

## 7. Animaciones

- Tarjetas: `hover:shadow-xl hover:-translate-y-1`
- Iconos: `group-hover:scale-110`
- Botones: cambio de color en hover (`.btn-brand`), no `hover:opacity-90`
- Transiciones: `duration-300`

---

## 8. Slider principal

- 4 slides con imagen de fondo (`public/slider1.jpeg`, `slider2.jpeg`, `slider3.jpeg`, `slider4.jpeg`), **sin ninguna veladura blanca**: se eliminaron los dos overlays (gradiente lateral blanco y sombra inferior `/45`) para que las fotos se vean a su tono natural — las imágenes son oscuras (decisión de la usuaria 2026-11-18). Card base `bg-white`, sombra inferior blanca. Slide 4 = campaña "Emprendedora del Año" con CTA externo a Instagram (no usa el modal)
- **Ajuste de texto por slide (`contentAlign`):** slides **1 y 2 → izquierda** (`justify-start` + `text-left` por defecto); slides **3 y 4 → derecha** (`justify-end` + `text-right` en el bloque, `<p>` con `ml-auto` y fila del CTA con `items-end sm:justify-end`) porque en esas dos fotos las caras están a la izquierda y el texto las tapaba (decisión de la usuaria 2026-11-18)
- **Todas las fotos al mismo tamaño:** el alto de la card lo fija el contenido, así que cada slide medía distinto (563/623/654/532 px). Se unificó con `min-h` **idéntico para los 4 slides** y con margen sobre el caso más alto medido con iframes a varios anchos: **375→696 · 640→557 · 768→654 · 1024→684 · 1360→654** ⇒ `min-h-[720px] sm:min-h-[580px] md:min-h-[700px] lg:min-h-[700px]`. Verificado: 722/582/702/702 px iguales en los 4 slides a 375/640/1024/desktop, sin desbordes
- **Colores del slider (actualización 2026-11-18, "letras en blanco"):** título `<h2>` **blanco** `#FFF`, *highlight* del título también **blanco** (se quitó el degradado pink), descripción **blanco**, badge de fechas `border-[#E8A89A]/60 bg-white/15 text-white`, badge tag `bg-[#E8A89A]/15 text-white`; **botones sin cambios**: CTA `btn-brand` (gold → hover verde), flechas `text-[#A94B3C]`, play/pause y puntos. *Antes: título `#E9AB9E`, descripción `#A94B3C`, overlay blanco lateral (2026-11-17/18).* Ojo: usar color **sólido** — `text-[#hex]/NN` en Tailwind v4 no genera la regla.
- **1 solo CTA** por slide: «EMPIEZA AQUÍ» → `https://onboarding.pariendoideas.com`.
- Sin div de métricas; sin CTA secundario; controles («DESTACADOS · SLIDER N de 3» + play/pause + flechas) **debajo** del slider.
- SEO: un único `<h1>` sr-only, slides en `<h2>`, `fetchPriority="high"` en la primera imagen.

## 9. Modal de suscripción

- **Todos los botones que iban a `onboarding.pariendoideas.com` abren este modal** (navbar, footer, slider, hero, secciones y dashboard): 25 botones en 14 componentes, sin interceptor global — cada botón llama explícitamente con `onClick` a `openSubscribeModal({ originUrl })`.
- Infraestructura: `SubscribeModalProvider` (montado en `src/app/layout.tsx`) + hook `useSubscribeModal()` (`SubscribeModalProvider.tsx`); una sola instancia del modal para todo el sitio. Cada botón conserva su `href` como respaldo sin JavaScript y para SEO.
- `originUrl` = la ruta de onboarding que habría abierto el botón; se conserva para que el **correo de bienvenida** apunte al mismo programa (`?programa=kit-mujer-ceo`, `&sector=…`, `&mentora=…`, etc.).
- Campos: Nombre, Apellido, Correo, Teléfono, **Ecosistema** (12 opciones — la última **"Otro"** abre un campo de texto libre que se envía como `Otro: …`) y **Programa de becas** (11 opciones), todos con label visible. `role="dialog"` + `aria-modal`, foco atrapado, scroll de página bloqueado; el formulario del footer precarga el correo.
- Envío (`email-service.ts`) directo a la **API Radarsystems** (`POST https://api.radarsystems.net/api/send/mt`, `multipart/form-data`, campaña 60 / empresa 25) — **sin fallback `mailto`**: si la API falla, el formulario muestra el error y permite reintentar.
- Tras registrarse salen **dos correos**: 1) bienvenida a la persona («¡Bienvenidas a Pariendo Ideas, transformando realidades!» + botón «Completar mi registro» hacia `originUrl`); 2) aviso con los datos del lead a `pariendoideass@gmail.com`.
- Vista de éxito «¡Gracias, {nombre}!» indicando que el correo de bienvenida ya fue enviado.

---

## 10. Accesibilidad (contraste WCAG AA)

Auditoría programática (parser de `rgb/rgba` con alfa, compositing de capas, gradientes de texto con `background-clip: text` excluidos como fondo, transición del toggle de tema esperada antes de muestrear) recorriendo **todos los nodos de texto**:

| Elemento | Texto | Iconos |
|------|-------|--------|
| `/` landing completa | **0 fallos** (claro 543 elementos · oscuro 543) | 0 fallos |
| `/` con modal abierto | 0 fallos (claro 131 · oscuro 125) | 0 fallos |
| `/dashboard` | 0 fallos (claro y oscuro) | 0 fallos |
| `/gestor-pariendo-admin` (login) | 0 fallos (claro y oscuro) | 0 fallos |

**Auditoría 2026-11-18 (estado final tras la ronda de legibilidad):** `--brand-deep` en claro quedó en **`#B04A5C`** (5.3:1) para texto pequeño; los **títulos display ≥18px conservan el pastel `#E9AB9E`** (decisión expresa de la usuaria, ~1.95:1), aplicado por una regla CSS en `@layer utilities` con especificidad **(0,1,1)** — gana a `.text-brand-deep` (0,1,0) y pierde ante los `group-hover:` de Tailwind v4 (`.group-hover\:x:is(:where(.group):hover *)` = 0,2,0) para no romper el hover de tarjetas. *Ojo:* `.font-display` sin `:where` en esa regla la subía a (0,2,0), empataba con el hover y lo rompía.

| Modo | Fallos inesperados | Detalle |
|------|------|---------|
| Claro | **0** | 40 títulos pastel + 23 `gradient-text` = decisión aceptada · 169/169 textos pequeños legibles (`#B04A5C`) |
| Oscuro | **0** | 443 elementos ok · 1 FP: `<h2>` del slider (efBg no ve gradientes/overlay) |

Los badges, chips e iconos con contenido blanco usan **`.gradient-primary-strong`** (`#AE5344 → #D6336C`, ≥4.6:1); `.gradient-primary` (`#E8A89A → #D6336C`, 1.9:1) quedó solo decorativo (barras, bordes y brillos sin texto encima).

> Nota de método: al auditar el modo oscuro conviene esperar ≥900ms tras activar `.dark` — las tarjetas usan `transition-all duration-500` y el fondo tarda 500ms en cambiar mientras el texto voltea al instante; muestreando antes salen falsos positivos.

Umbrales aplicados: **4.5:1** para texto normal, **3:1** para texto grande (≥24px, o ≥18.66px en bold) e iconos.

Verificación de gold: en el DOM renderizado **no queda ninguna clase `*-gold-*`** salvo el nombre de archivo de un logo aliado (`gold-stetic-clinic.png`).

> Pendiente: el panel interno del gestor requiere login con Google y no pudo auditararse todavía.

---

## Auditoría 2026-11-24 (cambios de estilo/UX aplicados)

- **Títulos display → vino `#8E2936` en modo claro** (decisión de la usuaria; el rosa pálido `#e9ab9e` daba 2.1:1 sobre crema, mínimo exigido 4.5:1). Nuevo token **`--title-ink`**: `#8e2936` en claro / `#e9ab9e` en oscuro (el pastel sigue siendo legible sobre fondo oscuro). La regla de títulos en `@layer utilities` ahora usa `color: var(--title-ink)` y **conserva la especificidad (0,1,1)** (gana a `.text-brand-deep`, pierde ante el hover v4 (0,2,0) — mantener ese detalle).
- **`.gradient-text` en claro → `linear-gradient(120deg, #8e2936, #a94b3c)`**; en `.dark` y dentro de `footer` conserva el pastel `#e9ab9e → #e8a89a` (reglas `:where()`/`.dark` más abajo en el CSS).
- **Navbar sticky siempre sólida:** contenedor `bg-[#FAF7F2] dark:bg-[#0F1A1B]` + `shadow-soft` + borde permanente (antes `glass` translúcido al hacer scroll, que mezclaba el logo con los textos de abajo). Menú móvil y hamburguesa también sólidos.
- **`scroll-padding-top: 6rem` en `html`:** los anclajes (`#modulos`, `#mentoria`…) ya no caen debajo de la cabecera fija. El botón "volver arriba" (ScrollUtilities) ya cumplía la regla de 600px.
- **Logos aliados en cajas uniformes:** caja interior **166×56 px** para los 11 logos; el fondo se adapta a cada PNG — **blanco** para los 7 con fondo claro (sellibri, go-interaction, disglobal, dropanas, benflor, renacer-contable, arte-medio-w3) y **`#141414`** para los 4 con fondo oscuro incrustado (bbm-intelligent, cocrea, bestway-marketing, gold-stetic-clinic). *No* se usó fondo oscuro uniforme para todos: los 7 logos claros se habrían visto como manchas oscuras.
- Verificado en local y en pruebas (`a3fbd4877b04bd0a`): títulos `rgb(142,41,54)` claros / `rgb(233,171,158)` oscuros, navbar `rgb(250,247,242)`, 0 errores de consola.
