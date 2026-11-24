# Worklog — Pariendo Ideas (Hub de Aceleramiento Femenino)

## Project Overview
Plataforma integral de aceleramiento digital femenino para Venezuela y LATAM.
Tres módulos principales:
1. **IMPULSO** (Programa Renacer) — Acompañamiento Psicosocial, Reconstrucción Digital, Becas y Mentoría
2. **KIT MUJER CEO** (Ecosistema Digital Integrado) — E-commerce, POS, Marketplace, Eventos, Comunidad, Educación
3. **ACELERACIÓN DIGITAL** (Reconstrucción Digital) — Becas, Mentoría 1:1, KIT Digital

## Design System
- **Paleta:** Primary #A855F7 (Púrpura), Secondary #EC4899 (Rosa), Accent #F97316 (Naranja)
- **Background:** #FFFFFF, Foreground: #2D2640
- **Gradientes:** gradient-primary (púrpura→rosa→naranja), gradient-hero, text-gradient
- **Tipografía:** Geist Sans, jerarquía text-6xl/text-4xl/text-2xl/text-xl
- **Componentes:** rounded-3xl cards, gradient buttons, sticky header h-16

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui
- Framer Motion para animaciones
- Lucide React para iconos

---
Task ID: 0
Agent: Main (Coordinator)
Task: Inicialización del proyecto, lectura de documentos y planificación

Work Log:
- Leídos los 8 documentos de requisitos (A-G + Estilo y Diseño)
- Verificada estructura del proyecto Next.js 16 existente
- Creado plan de desarrollo con 15 tareas
- Configurado worklog para seguimiento

Stage Summary:
- Proyecto listo para comenzar desarrollo
- Stack confirmado: Next.js 16 + Tailwind 4 + shadcn/ui + Framer Motion
- Diseño basado en paleta púrpura/rosa/naranja con gradientes vibrantes

---
Task ID: 1
Agent: Main (Coordinator)
Task: Desarrollo completo de la landing page de Pariendo Ideas

Work Log:
- Configurado sistema de diseño global (globals.css) con paleta de marca:
  * Primary: #A855F7 (Púrpura), Secondary: #EC4899 (Rosa), Accent: #F97316 (Naranja)
  * Gradientes: gradient-primary, gradient-hero, gradient-text
  * Clases utilitarias: glass, shadow-glow, bg-grid, bg-dots
  * Animaciones: float, blob, marquee, pulse-glow, shimmer
- Configurado layout.tsx con metadata en español, fuentes Geist + Playfair Display
- Creado Navbar sticky con glassmorphism, logo con gradiente, menú responsive
- Creado Footer completo con newsletter, 4 columnas de links, redes sociales, contacto
- Construido Hero de clase mundial:
  * Headline con gradiente "Donde las mujeres parimos ideas que cambian el mundo"
  * Dashboard preview flotante con métricas, actividad y barra de progreso
  * Cards flotantes (ventas del mes, mentora destacada) con animaciones
  * Stats strip con 4 métricas (12K+ emprendedoras, 450+ mentoras, etc.)
- Construido TrustBar con marquee de partners (MercadoPago, Stripe, etc.)
- Construido sección Modules con los 3 módulos principales:
  * IMPULSO (Programa Renacer) - destacado como "Más solicitado"
  * KIT MUJER CEO (Ecosistema Digital Integrado)
  * ACELERACIÓN DIGITAL (Reconstrucción Digital)
- Construido ImpulsoProgram con 3 submódulos detallados:
  * Acompañamiento Psicosocial y Bienestar
  * Reconstrucción Digital Acelerada
  * Becas de Formación y Mentoría 1:1
  * Sección de proceso en 3 pasos
- Construido KitMujerCEO con:
  * 3 tarjetas (E-commerce, POS, Marketplace) con stats
  * 8 categorías del ecosistema (Educación, Comunidad, Mentores, Gastronomía, etc.)
  * Preview interactivo de POS con productos y total
  * Stats de ventas con gráfico de barras semanal
- Construido Mentorship con:
  * 8 chips de especialidades filtrables
  * 4 mentoras destacadas con rating, idiomas, verificación
  * Sección de matching en 3 pasos con gradiente
- Construido Events (P.I. Fest) con:
  * 3 eventos con fecha, modalidad, speakers, capacidad
  * Ecosistema Festivo con networking, salas temáticas, coffee breaks
- Construido Community con:
  * 4 features (Foro, Mensajería, Grupos, Tablón)
  * Posts en vivo con autor, categoría, likes, comentarios
  * Directorio teaser con avatares
- Construido Testimonials con 3 historias + banner de stats (94%, 12K+, 4.9★, 87%)
- Construido ScholarshipCTA con:
  * Formulario preview de solicitud de beca
  * Lista de 6 beneficios
  * CTA principal con gradiente y trust row
- Configurado next.config.ts con allowedDevOrigins
- Iniciado dev server en puerto 3000 (webpack mode)
- Verificado con agent-browser: todas las secciones renderizan correctamente
- Verificado con VLM: diseño confirmado como "profesional y de clase mundial"
- Lint pasa sin errores

Stage Summary:
- Landing page completa con 10 secciones principales
- Diseño world-class con paleta púrpura/rosa/naranja y gradientes vibrantes
- Animaciones con Framer Motion (float, blob, hover effects)
- Componentes shadcn/ui + utilidades custom (glass, gradient-text, shadow-glow)
- Responsive mobile-first con menú hamburguesa
- Footer sticky al fondo (flex min-h-screen flex-col + mt-auto)
- Todas las secciones verificadas visualmente con VLM
- Servidor dev estable en http://21.0.12.232:3000 (webpack mode, IPv4 bind)

Próximos pasos recomendados:
- Generar imágenes reales de marca (hero background, mentoras, productos)
- Implementar páginas de auth (login, register, onboarding wizard)
- Implementar dashboard funcional con datos reales
- Integrar Prisma para persistencia de becas, mentorías, eventos
- Añadir más micro-interacciones y detalles visuales

---
Task ID: 2
Agent: Main (Coordinator) — Cron Review Round 1
Task: QA con agent-browser, fix de issues y nuevas features (FAQ, Impact Stats, Journey, Resources, Allies, Scroll Utilities)

Work Log:
- Revisado worklog.md previo — proyecto tenía landing page completa con 10 secciones
- Verificado estado del dev server: estaba caído, reiniciado con watchdog (node next dev -p 3000 -H 0.0.0.0)
- Realizado QA completo con agent-browser en http://21.0.12.232:3000
- Análisis VLM del Hero: identificados issues menores de layout (falsa alarma en su mayoría)
- Análisis VLM de secciones medias: sin errores críticos de renderizado
- Verificada responsividad móvil (375px): 8/10, sin overflow ni texto cortado
- Creadas 6 nuevas secciones/componentes:
  1. FAQ.tsx — Sección de preguntas frecuentes con buscador en vivo, filtros por categoría y accordion interactivo
  2. ImpactStats.tsx — Sección de métricas de impacto con contadores animados (useMotionValue + animate), fondo oscuro con gradientes
  3. Resources.tsx — Sección de recursos y blog con 3 featured resources + 3 blog posts con gradientes y hover effects
  4. Allies.tsx — Grid de 8 aliados estratégicos (MercadoPago, Stripe, Google, Canva, Meta, UN Women, etc.) con stat strip
  5. Journey.tsx — Timeline de 4 pasos (Postula → Diagnóstico → Aceleramos → Egresas) con checklist de egreso
  6. ScrollUtilities.tsx — Barra de progreso de scroll + botón "volver arriba" flotante con animación
- Actualizado page.tsx con las 6 nuevas secciones (ahora 16 secciones total)
- Actualizado Navbar con 7 links (Impulso, Kit CEO, Mentoría, Proceso, Impacto, Recursos, FAQ)
- Verificado interactividad del FAQ: accordion expande/contrae correctamente, filtro de búsqueda funciona
- Lint pasa sin errores
- Dev server estable compilando en ~300ms por request

Stage Summary:
- Landing page expandida de 10 a 16 secciones principales
- Nuevas funcionalidades interactivas: FAQ con search+filter, contadores animados, scroll progress bar, back-to-top
- Diseño mantenido coherente con paleta de marca (#A855F7, #EC4899, #F97316)
- Sección ImpactStats con fondo oscuro (brand-deep) para contraste visual
- Todas las secciones verificadas con VLM (7-9/10 de calidad)
- Sin errores de renderizado, lint, ni runtime
- Server accesible en http://21.0.12.232:3000

Próximos pasos recomendados:
- Generar imágenes reales de marca para Hero, blog posts y testimonios
- Implementar páginas de auth (login, register, onboarding wizard)
- Integrar Prisma para persistencia de becas, mentorías, eventos
- Añadir más micro-interacciones (hover effects en cards de módulos)
- Implementar dark mode toggle funcional
- Crear API endpoints para newsletter signup y contact form
- Añadir más contenido al blog (artículos completos)

---
Task ID: 3
Agent: Main (Coordinator)
Task: Migración de paleta a manual de marca + contraste WCAG + sistema de botones

Work Log:
- Migrado el flujo de trabajo a local: repo clonado, dependencias instaladas, dev server en http://localhost:3000 (Node 20.19.4 vía fnm), Firebase CLI v15.34.2 autenticado en el proyecto webperiendoideas
- Reescrito globals.css con la paleta del manual de marca:
  * brand-primary #1E575B (teal), brand-secondary #E8A89A (salmon), brand-accent #F8B400 (gold)
  * Secundarias: arena #E5D3B3, marrón #A7876B
  * Neutros slate/zinc/neutral/gray recalados a neutros cálidos; se conservan colores funcionales emerald/blue/red/cyan
  * Tokens de tinta: --brand-secondary-ink #b85a4a, --brand-accent-ink #9a6100; pasos salmon-700 #ae5344, gold-600 #b88000, gold-700 #966900
  * --brand-surface #144044 estable en ambos modos; --brand-deep se aclara en dark (#eaf2f2)
  * .gradient-primary reescrito teal dominante con cola cálida (solo uso decorativo)
- Cambiadas fuentes: Lora (titulares) + Montserrat (cuerpo) en layout.tsx
- Remapeo masivo de color en .tsx: 304 clases + 9 utilidades + 4 rgba; 0 restos de la paleta antigua (#A855F7 / #EC4899 / #F97316)
- Correcciones de contraste en 14 archivos .tsx (surface + ink + pasos gold/salmon), text-brand-border -> text-slate-500 en Journey, chips KitMujerCEO opacos, ScholarshipCTA (text-slate-900 -> text-brand-deep, bg-white -> bg-card), Modules/ImpulsoProgram/MainSlider con variantes dark:
- Modo oscuro: 46 bg-white -> bg-card, 9 bg-white/70-95 -> bg-background/NN, .dark .glass -> rgba(15,26,27,0.72); exentos Footer, AdminLogin, ImageUploader, AlliesEditor, mosaicos de logo
- Botones sin degradado (petición del usuario): creada la clase .btn-brand fuera de @layer
  * Default: fondo #1e575b, borde 1px solid #e8a89a, texto #ffffff
  * Hover: fondo #f8b400, borde y texto #144044 (el texto cambia); Active: #dfa100
  * Aplicada a 13 botones CTA + 6 botones bg-brand-primary text-white + FAB "volver arriba" + chip activo de FAQ (ahora bg-teal-500 border-brand-secondary)
  * 21 archivos .tsx modificados por btn-brand.mjs
- Auditoría de contraste programática con browser.evaluate (ratio WCAG + compositing de alfa + imagen de fondo manda, con transiciones desactivadas para no leer valores a mitad de transición)
- Resultado final: 0 fallos de texto y 0 de iconos en /, /dashboard y /gestor-pariendo-admin, en modo claro Y oscuro
  * /dashboard dark: corregidos badges "Herramientas" y "Agendada" + icono ShoppingBag con dark:text-teal-300 / dark:text-gold-300
- Actualizado ESTILO_Y_DISENO.md.md con la paleta, tipografía, sistema de botones y tabla de accesibilidad

Stage Summary:
- Web migrada a flujo local (clonar -> editar -> probar -> deploy)
- Paleta y tipografía del manual aplicadas en landing + dashboard + gestor admin, claro y oscuro
- Botones a color sólido con borde y hover de marca (sin degradado)
- Contraste WCAG AA verificado programáticamente en las 3 rutas
- Nada commiteado aún; pendiente npm run build + npm run deploy con confirmación del usuario

Próximos pasos recomendados:
- Auditar el panel interno del gestor (requiere login con Google)
- npm run build y revisar /out
- Commit + push al repo y npm run deploy cuando el usuario confirme


## Slider principal rediseñado + variante de botón (2026-11-11)

- MainSlider: se conservan los 3 slides, ahora con imagen de fondo (slider1.png / slider2.jpeg / slider3.jpeg copiadas a public/)
- Layout nuevo: texto a la izquierda sobre zona oscura con degradado rgba(13,43,46,.97) -> transparente hacia la derecha, para que se vea la foto en el tercio derecho
- 1 solo CTA por slide (eliminados "Ver Precios y Planes", "Conoce las Mentoras", "Ver Programa Impulso") y eliminado el div completo de métricas
- Eliminadas las tarjetas visuales derechas (VisualProgram / VisualEcommerce / VisualMentorship) e imports sin uso
- CMS: eliminados secondaryCtaText/secondaryCtaHref de SlideItem, DEFAULT_CMS_CONTENT y SliderEditor; eliminado trustBar de LandingPageContent; imageUrl ahora reemplaza la imagen de fondo por defecto
- Nueva variante .btn-brand-alt (fondo gold + borde teal, hover inverso a teal) aplicada solo al CTA del slider para comparar con .btn-brand (12 botones restantes)
- Verificado: 0 fallos de contraste WCAG en / (claro y oscuro), ESLint limpio, npm run build OK


## Textos nuevos del slider + CTA único + SEO + modal de suscripción (2026-11-11)

- Slider (MainSlider): 3 slides con los textos nuevos aprobados por la usuaria (titulares, subtítulos y bajadas de los 3 slides)
  * CTA único "EMPIEZA AQUÍ" en los 3 slides -> https://onboarding.pariendoideas.com (raíz)
  * Controles "DESTACADOS · SLIDER 1 de 3" + play/pause + flechas MOVIDOS debajo del slider
  * H1 único sr-only para SEO; slides en H2; fetchPriority="high" en la imagen del primer slide
  * .btn-brand-alt solo en el CTA del slider; los 12 botones restantes quedan como estaban (decisión de la usuaria: no unificar)
- CMS (cms-service.ts): contentVersion: 2 + mergeWithDefaults() para que Firestore no sobrescriba los textos nuevos
- SEO: metadata + canonical + robots + JSON-LD en layout.tsx; sitemap.ts con export const dynamic = 'force-static' (requisito de output: "export"); noindex en los layouts de portales (/dashboard, /gestor-pariendo-admin)
- Modal de suscripción (SubscribeModal + Footer): botón "Suscribirme" del footer abre modal con 6 campos (Nombre, Apellido, Correo, Teléfono, Ecosistema [11 opciones], Programa de becas [11 opciones])
  * Envío por email-service.ts: POST HTTPS a EMAIL_API.endpoint (aún vacío -> pendiente JSON de la API transaccional de la usuaria); fallback mailto:pariendoideass@gmail.com
  * Plantillas texto/HTML con destinatario pariendoideass@gmail.com
  * Prueba E2E completa con mock server local: payload de 6 campos + to + asunto con acentos correctos; vista "¡Gracias, Ana!" confirmada
- Auditoría WCAG definitiva (parser con oklab()/color(srgb)/hex, alpha de rgba con comas, gradientes de text-clip excluidos como fondo, recorrido previo para disparar animaciones whileInView):
  * Página claro: 0 fallos (114 elementos) | Página oscuro: 0 fallos (114)
  * Modal claro: 0 fallos (131 elementos) | Modal oscuro: 0 fallos (125)
- Fixes de dark mode (rompían por "from-white" literal y gradientes de texto oscuros):
  * 12 decorados/tarjetas: from-white -> from-background + variantes dark: (Allies, FAQ, Community, Events, Hero, Journey, Mentorship, Pricing, Resources, KitMujerCEO x3, ImpulsoProgram, ScholarshipCTA, Testimonials)
  * globals.css: .dark .gradient-text / footer .gradient-text con stops luminosos (#7fd4d6 -> #e8a89a -> #f8b400); igual para .gradient-text-brand
  * Footer: disclaimer text-white/50 -> white/65; placeholder white/50 -> white/70
- Verificado al cierre: npm run build OK (8 rutas + /sitemap.xml), ESLint limpio en los 14 archivos editados
- Nada commiteado aún (la usuaria pidió esperar); deploy pendiente de confirmación


## Botones de onboarding -> modal de suscripción + API Radarsystems (2026-11-16)

- Nuevo enfoque (decisión de la usuaria): TODOS los botones que iban a onboarding.pariendoideas.com abren el modal de suscripción; SIN interceptor global (cada botón llama explícitamente a la función) y SIN fallback mailto (si la API falla, se muestra el error en el formulario)
- Nuevo archivo src/components/layout/SubscribeModalProvider.tsx:
  * SubscribeModalProvider montado en src/app/layout.tsx (envuelve a ThemeProvider) -> una sola instancia del modal para todo el sitio
  * Hook useSubscribeModal() expone openSubscribeModal({ originUrl, defaultEmail }); si un componente se usa fuera del provider lanza error explícito
- Cada botón conserva su href (respaldo sin JS y SEO) y añade onClick con e.preventDefault() + openSubscribeModal({ originUrl: <url que habría abierto> }) para que el correo de bienvenida apunte a la ruta clickeada
  * 25 botones parcheados en 14 componentes: Navbar (2: desktop + móvil), Footer (form newsletter con defaultEmail + link "Becas de Formación" detectado por startsWith(ONBOARDING_BASE_URL)), MainSlider (CTA con guarda: solo intercepta si la URL es de onboarding, si no navega normal), Hero, ImpulsoProgram (2), Journey, KitMujerCEO (6: e.href, categoryUrl, 3 chips de sector, CTA), Mentorship (2: getMentorBookingUrl + aceleración), Pricing (helper planOnboardingUrl), Modules (ModuleCard), ScholarshipCTA (2), Testimonials, dashboard (3)
- src/lib/email-service.ts REESCRITO para API Radarsystems (POST https://api.radarsystems.net/api/send/mt, multipart/form-data):
  * client_id `ccbaa650…` (oculto), secret_key `APP_SECRET_9b1089…` (oculto), id_campaign 60, id_company 25
  * sendLeadEmail(lead, originUrl) envía en paralelo DOS correos: 1) bienvenida a la persona (asunto "¡Bienvenidas a Pariendo Ideas, transformando realidades!", plantilla buildWelcomeHtml con botón "Completar mi registro" hacia originUrl) 2) aviso con los datos a pariendoideass@gmail.com (buildLeadHtml con tabla)
  * Sin fallback: fallo HTTP -> ok:false -> el formulario muestra el error y permite reintentar
- SubscribeModal.tsx: nueva prop originUrl (la pasa el provider), sendLeadEmail(form, originUrl); vista de éxito ahora menciona el correo de bienvenida con el botón de onboarding
- CORS verificado contra api.radarsystems.net desde el navegador (respondió HTTP 500 por parámetros faltantes = peticiones permitidas)
- Prueba E2E (fetch interceptado, sin correos reales): navbar + slider + Kit + dashboard + footer -> modal abre siempre, URL no cambia; payload capturado correcto en ambos correos (bienvenida con body que contiene ?programa=kit-mujer-ceo, aviso a pariendoideass@gmail.com, affair con acentos, id_campaign 60/id_company 25); footer precarga el correo en el modal; vista de éxito correcta; 0 errores de consola
- ESLint 0 errores en 17 archivos; npm run build OK (8 rutas)
- Prueba REAL de envío realizada con éxito (2026-11-16): ambos correos HTTP 200 {"status":true} — bienvenida a vgjorgeluis20@gmail.com + aviso a pariendoideass@gmail.com
- Fix de codificación (2026-11-17): los correos llegaban en mojibake ("suscripciÃ³n" = UTF-8 interpretado como Latin-1 por la API Radarsystems). Solución estándar sin depender del charset del servidor en email-service.ts:
  * body → toHtmlEntities(): todos los no-ASCII a entidades HTML numéricas (&#243;) = ASCII puro en el campo
  * affair → toMimeEncodedWord(): encoded-words RFC 2047 =?UTF-8?B?..?= troceados en words ≤75 chars (fragments ≤45 bytes)
  * Ambos envíos de prueba HTTP 200 con payload verificado (affair decodifica a "Nueva suscripción: ...", body sin bytes UTF-8 crudos)
- Pendiente: commit/push/deploy solo con confirmación


## "Onboarding" → "Registro" + nueva sección de planes (2026-11-17)

- Cambio de terminología (la usuaria: "muchas personas no saben los términos"): toda la copy visible que decía "Onboarding" ahora dice "Registro":
  * ScholarshipCTA: "Realiza tu Onboarding en" → "Realiza tu Registro en"; "Iniciar Onboarding Ahora" → "Iniciar Registro Ahora"
  * KitMujerCEO: "Activar en Onboarding" → "Activar en Registro"
  * SubscribeModal (vista de éxito): "completar tu registro en el onboarding" → "completar tu registro"
  * SliderEditor (admin): label "URL de Destino (Onboarding / Link)" → "(Registro / Link)"
  * No se tocaron identificadores internos ni URLs (ONBOARDING_URLS, onboarding.pariendoideas.com)
- Sección Pricing REESCRITA con las 3 columnas que pasó la usuaria (categoría "Registro"):
  * Semilla: 7 filas "Incluido" (Diagnóstico/Hoja de ruta, Boletín, Comunidad, Foros, Soporte emocional, Cursos asincrónicos, ¿Quieres avanzar?) + Requisitos técnicos (Computador, Teléfono inteligente); CTA "👉 Postúlate"
  * Temprana (badge "Más popular"): Nivel previo (chip "Todo lo anterior"), Capacitación (5 ítems literales incl. "con-causality"), Networking y Visibilidad (Rondas B2B, Vitrina Digital), Seguimiento (Plan de seguimiento), Estado del negocio (Emprendimiento activo); CTA "Activar / Net Digital Mujer"
  * Consolidada / Legado: Nivel previo, Asesoría/Enfoque (Asesorías personalizadas), Expansión (Rondas Digital), Estado del negocio (Formalidad); CTA "Agenda una asesoría"
  * Tipos de fila nuevos: check "Incluido" · previo (chip) · list (viñetas) · value (etiqueta+valor); textos literales tal cual los pasó la usuaria (decisión)
  * Fuera: precios $0/$29/$79, toggle Mensual/Anual, descripciones por plan, badges de "GRATIS/PRO/ELITE"; badge de sección → "Registro — Planes"; nota inferior → "Avanza a tu ritmo, sin compromisos" + chip "Registro gratuito"
  * CTAs abren el modal de suscripción con el mismo mapeo de rutas (becas / kitMujerCeo / aceleración)
- Verificación: 0 "onboarding" visible en el DOM, 3 columnas presentes, sin precios ni toggle, 0 errores de consola, ESLint OK, tsc sin errores nuevos (corregido el tipado de `ease` en cardVariants), npm run build OK (8 rutas), capturas de las 3 columnas correctas
- Ajuste posterior (misma fecha, decisión de la usuaria): items unificados con el estilo Semilla (ícono ✓ salmon + texto marrón en TODAS las filas y sub-items; sin viñetas, sin chip, sin etiquetas en mayúsculas — las filas "value"/"previo" ahora son "Etiqueta: valor" con ✓) y quitada la palabra "REGISTRO" del nombre de las tarjetas: solo queda la etapa como `<h3>` título (font-display xl/2xl bold marrón). Verificado: 27 íconos ✓, títulos Semilla/Temprana/Consolidada, ESLint OK, tsc OK, build OK, capturas de las 3 columnas correctas, 0 errores de consola


## Borde de esquinas + Community + stats (2026-11-17)

- **Bug de borde cortado en esquinas** (banners "Encuentra a tu mentora ideal en 3 pasos" y "Al egresar del Programa Renacer tendrás"): la clase era `rounded-[calc(1.5rem-1.5px)]` — **CSS inválido** (calc exige espacios alrededor del `-`) + valor fijo que no coincidía con el tema, así que el div interior quedaba sin radio y sus esquinas cuadradas tapaban el degradado del borde.
  * Fix: `rounded-[calc(var(--radius-3xl)_-_1.5px)]` (el tema define `--radius-3xl: calc(var(--radius) + 20px)` = 34px; interior = 32.5px → curvas concéntricas, línea continua)
  * Mismo fix aplicado a los otros 2 lugares con el patrón roto: FAQ.tsx y Hero.tsx (Hero está comentado en page.tsx pero se corrigió igual)
  * Verificado en navegador: exterior 34px / interior 32.5px en Mentorship, Journey y FAQ; capturas con esquinas continuas
- **Sección Community eliminada** (por solicitud): Foro de comunidad, Mensajería directa, Grupos de interés, Tablón de oportunidades, Actividad reciente y Directorio de emprendedoras
  * `page.tsx`: import y `<Community />` retirados (comentado como Events/ImpactStats, siguiendo el patrón existente); Community.tsx queda en el repo sin uso
  * Pendiente de decisión: 4 enlaces del footer apuntan a `#comunidad` (Foro de emprendedoras, Directorio, Grupos de interés, Tablón de oportunidades) y ahora el ancla no existe
- **Banner de stats eliminado** de Testimonials (94% / 12K+ / 4.9★ / 87%): bloque completo `motion.div` de "Stats banner" fuera
- **Footer**: los 4 enlaces de la columna "Comunidad" (Foro de emprendedoras, Directorio, Grupos de interés, Tablón de oportunidades) ahora apuntan a `#testimonios` en lugar de `#comunidad` (ancla inexistente tras eliminar la sección). Verificado: 0 enlaces rotos hacia #comunidad; quedan 4 anclas rotas pre-existentes sin relación (#top, #marketplace, #soporte, #legal)
- Verificación: 0 apariciones de los textos eliminados, sección `#comunidad` inexistente, 0 errores de consola, ESLint OK, npm run build OK (8 rutas)
- **Deploy a canal de vista previa (2026-11-17):** `npx firebase hosting:channel:deploy pruebas --expires 7d` → **https://webperiendoideas--pruebas-m65ehrlv.web.app** (expira 2026-11-24, versión `684ba19d99d31cfe`, sitio `webperiendoideas`, 117 archivos)
  * Verificado en la URL de pruebas: 3 columnas de planes nuevas, sin precios, 0 "onboarding" visible, copy "Registro", Community y stats fuera, footer → `#testimonios`, 0 errores de consola
  * Producción NO se tocó; commit/push pendientes con confirmación


## Fase de colores: sistema de color por tipo de elemento (2026-11-16)

- Decisión de la usuaria (via question): estrategia "por tipo de elemento" + "gold SOLO en botones" (sin mezclar colores)
- Sistema aplicado en toda la web:
  * Títulos/texto fuerte = marrón (--brand-deep: #7C5E45 claro / #D9C3AC oscuro)
  * Subtítulos/enlaces/acento/estrellas/iconos = salmon ink (--brand-secondary-ink: #A94B3C claro / #F0BFB4 oscuro)
  * Decoración (blobs blur-3xl, bordes, chips) = arena (bg-brand-border/*)
  * Marcos/iconos con texto blanco = marrón oscuro (from-brown-700 to-brown-900, >= 4.5:1)
  * Barras de progreso = from-brown-500 to-brown-700; chips = bg-salmon-100 text-salmon-900 (6.5:1)
  * Gold #F8B400 EXCLUSIVO de botones (.btn-brand hover/active + glow del CTA del slider)
- Fase 1 (botones): MainSlider CTA, Pricing (3 planes), Modules CTA, Mentorship y dashboard pasan a .btn-brand
- Fase 2 (globals.css): escala brown 50-950 en @theme; tokens brand-deep/secondary-ink light+dark redefinidos; utilidades reescritas:
  * gradient-primary = teal -> marrón #755C47 (sin gold); gradient-primary-soft = teal/salmon/arena al 12%
  * gradient-hero: radial gold -> arena; gradient-text light = #7C5E45 -> #A94B3C; dark/footer = #D9C3AC -> #F0BFB4 -> #E8A89A
  * gradient-border::before = arena -> marrón; eliminados .btn-brand-alt y .shadow-glow-gold (muertos)
- Fase 3 (barrido .tsx, 3 pasadas PowerShell):
  * text-brand-primary / text-brand-accent-ink -> text-brand-secondary-ink (21 archivos); blobs teal/salmon/gold -> bg-brand-border/*
  * avatares -> pares salmon-700..900 / brown-700..900 (blanco >= 4.5:1); marcos con texto blanco -> from-brown-700 to-brown-900
  * estados admin/dashboard gold -> salmon; FAQ activo restaurado a bg-teal-500; "Kit activo" conserva teal semántico
  * MainSlider: highlights slide1 salmon / slide2 marrón / slide3 salmon-marrón; badge slide2 -> brown
  * Footer iconos/underline -> brand-secondary; hover:border-brand-primary -> hover:border-brand-secondary-ink
- Bug de colisión corregido (lección: .Replace() de PowerShell es literal sin límites de palabra): 'bg-salmon-50' como prefijo de 'bg-salmon-500' produjo 7x bg-salmon-1000 -> restaurados dashboard (141/178/181/222), ApplicationsManager (193/250/298) y FAQ (142)
- Chips con 4.498:1 (text-salmon-700 sobre bg-salmon-100) -> text-salmon-900 (6.5:1); hovers -> hover:text-salmon-950
- Verificación:
  * Auditoría WCAG programática de la landing completa: modo claro 0 fallos (543 elementos) · modo oscuro 0 fallos (543)
  * DOM renderido sin ninguna clase *-gold-* (solo el nombre de un logo aliado)
  * 0 errores de consola; ESLint limpio en todos los archivos de colores (4 errores pre-existing de react-hooks/set-state-in-effect en use-mobile.ts, carousel.tsx, ImageUploader.tsx:32, ThemeToggle.tsx:13)
  * npm run build OK (8 rutas); prueba visual manual en navegador (claro y oscuro: slider, Impulso, Pricing) correcta
- Documentación: ESTILO_Y_DISENO.md.md actualizado (secciones 1, 3 y 10 con el sistema por tipo)
- Pendiente: commit/push/deploy solo con confirmación de la usuaria


## Tipografía principal marrón → rosa + slider con gradiente blanco (2026-11-17)

- **Petición de la usuaria:** cambiar toda la tipografía principal (marrón) por el rosa `#E8A89A`, y en el slider principal pasar el gradiente de las imágenes a blanco con las letras en `#1E575B`.
- **Decisión (via question):** `#E8A89A` literal como texto en claro da solo 2.0:1 (WCAG AA pide 4.5:1) → la usuaria eligió **"Rosa oscuro AA + #E8A89A en oscuro"**:
  * `--brand-deep` light: `#7C5E45` (marrón) → **`#B04A5C`** (rosa fuerte, 5.3:1 en blanco / 4.7:1 en crema)
  * `--brand-deep` dark: `#D9C3AC` (marrón claro) → **`#E8A89A`** (rosa literal, tal cual lo pedido)
- **Slider (MainSlider.tsx):**
  * Overlay gradiente de las imágenes: `rgba(13,43,46,…)` (#0D2B2E) → `rgba(255,255,255,…)` blanco (mobile + md)
  * Card base `bg-[#0d2b2e]` → `bg-white`; bottom shade `from-[#0d2b2e]/40` → `from-white/70`
  * Título h2, descripción, badge superior, badges de tema y highlight del título → **teal `#1E575B`** (los 3 slides)
  * Chip tag: `border-white/25 bg-white/15 text-white` → `border-[#1e575b]/30 bg-white/70 text-[#1e575b]`
- **Lección Tailwind v4:** `text-[#hex]/85` (color arbitrario + modificador de opacidad) **no genera la regla CSS** — la descripción del slider se quedaba con el color heredado. Fix: color sólido `text-[#1e575b]`. Idem `bg-background/90` en chips Resources → `bg-background` (fallaba el contraste sobre imagen)
- **Correcciones AA derivadas del nuevo rosa** (auditoría con parseo de `oklab()`/`lab()`/`color(srgb)` — Tailwind v4 serializa así; antes causaba falsos positivos):
  * `text-brand-deep/85|/80|/90|/70` → sólido en ImpulsoProgram, Modules, Testimonials, Community, Navbar (×2), ThemeToggle
  * KitMujerCEO: stats "Becas 100%", "Cavecom-e", "Multi-canal" (degradado marrón `bg-clip-text`) → `text-brand-deep` sólido
  * Testimonials: ubicaciones `text-muted-foreground/80` a 10px → sólido (3.86:1 → AA)
- Verificación: **auditoría WCAG 0 fallos en claro (451 elementos) Y 0 en oscuro (451)**; 0 errores de consola; tsc sin errores nuevos (3 pre-existing); `npm run build` OK (8 rutas); ESLint limpio en los archivos tocados (los 4 errores `react-hooks/set-state-in-effect` son pre-existing: ImageUploader:32, ThemeToggle:13, carousel:98, use-mobile:14)
- Pendiente: commit/push/deploy solo con confirmación de la usuaria; redespliegue del canal de pruebas


## Multicolor: fin del marrón oscuro + ilustraciones SVG + nombres de mentores (2026-11-18)

- **Nombres de mentores corregidos** (petición): "Arq. Dioraisa Lomartire" → **"Arq. Dioraisa Lo Martire"**; "Lic. Celsa Moza" → **"Lic. Celsa Perez"** (Mentorship.tsx + README.md + PLAN_DE_DESARROLLO_100_PORCIENTO.md; IDs internos intactos)
- **Decisión (via question):** "multicolor fuera del manual" para eliminar todo el marrón oscuro + "oro también en decoración sin texto" + "ilustraciones SVG creadas por mí" (no hay herramienta de generación de fotos en este entorno)
- **Paleta multicolor nueva** (globals.css `@theme`, comentarios indican "fuera del manual"):
  * `--color-fucsia: #d6336c` · `--color-fucsia-osc: #b02a5b` · `--color-violeta: #7c3aed` · `--color-violeta-osc: #5b21b6` (≥4.5:1 con blanco → aptos tras iconos/texto blanco)
  * `--color-coral: #ff6b6b` · `--color-lila: #a855f7` (**solo decoración**, <4.5:1 con blanco)
  * Escala `brown` se conserva en el tema pero **0 usos en la UI** (verificado)
- **Barrido de ~50 elementos** (todas las secciones activas):
  * Marcos de iconos/tarjetas con texto blanco: rotación de combos AA — `from-violeta to-fucsia`, `from-[#1e575b] to-fucsia`, `from-fucsia to-violeta-osc`, `from-violeta to-[#1e575b]`, `from-salmon-700 to-fucsia`, `from-fucsia-osc to-violeta-osc`
  * Barras de progreso (Journey, ImpactStats, Hero): `from-fucsia to-violeta`
  * Avatares/decorativos alternados con salmon-700..900
  * `gradient-primary`: `#1e575b → #755c47` (marrón) → **`#1e575b → #d6336c` (fucsia)**
  * `gradient-primary-soft`: marrón 12% → violeta 12%; `gradient-hero`: arena → gold (oro decorativo permitido)
  * `gradient-border::before`: arena→marrón → **`#f8b400 → #d6336c`**
  * Resources: badges `teal→fucsia`, avatares `violeta→fucsia`, placeholders de blog `from-gold-400 to-coral` (bloques grandes de color)
  * Allies: 9 tiles con rotación de combos (incl. `bestway` que era `zinc-800→950` oscuro)
- **Ilustraciones SVG** creadas en `public/decor/`: `flor.svg`, `arco.svg`, `hojas.svg`, `confeti.svg`, `ondas.svg` — colocadas en 10 secciones (Modules, Impulso, KitMujerCEO, Pricing, Mentorship, Journey, Testimonials, Resources, FAQ, ScholarshipCTA) como `<img>` decorativo `alt="" aria-hidden -z-10 pointer-events-none select-none`
- **⚠️ Incidente recuperado (lección):** el barrido PowerShell aplanó los arrays anidados del hashtable y aplicó `Replace('f','r')` a 8 archivos (y `c→o,a→u,t→a` en Resources). Recuperación: **source maps del build de producción** (`.next/server/chunks/ssr/*.js.map` con `sourcesContent`) → 7 archivos restaurados con **verificación byte a byte** (cifrar recuperado = disco corrupto); Community (sección oculta, sin mapa) **reconstruido a mano** con `git show HEAD:` como referencia de estructura; Resources/Hero/Events/ImpactStats salieron ilesos (los pares de 2+ elementos NO se aplanaron). **Lección: en PowerShell, pasar pares como PSCustomObject o hacer el script en Node; verificar con diff antes de dar por buena una sustitución masiva.**
- Verificación: 0 elementos con gradiente marrón en vivo (60 con gradientes nuevos), 10/10 SVGs cargados, nombres correctos en DOM, **auditoría WCAG 0 fallos claro (442) y oscuro (442)**, 0 errores de consola, tsc sin errores nuevos (3 pre-existing), ESLint OK (4 pre-existing), build OK (8 rutas)
- **Deploy canal de pruebas:** versión `4a7047f5353c5e78` → https://webperiendoideas--pruebas-m65ehrlv.web.app (expira 2026-11-25)
- Pendiente: commit/push/deploy producción solo con confirmación de la usuaria


## 4º slide "Emprendedora del Año" + rename del eyebrow de Impulso (2026-11-18)

- **Slide 4 agregado** en `MainSlider.tsx` (`public/slider4.jpeg`, 1584×672):
  * tag: `Emprendedora del Año` · badge: `🚀 Del 19 de nov. 2026 al 19 de mar. 2027`
  * título: "Por el Día Internacional de la Mujer Emprendedora, en Pariendo Ideas celebramos tu talento." + highlight "Postúlate como la Emprendedora del Año."
  * descripción: "Gana premios, becas y potencia tu negocio. Porque juntas somos más."
  * CTA **"¡Postúlate ya!"** → `https://instagram.com/pariendoideas_` — **enlace externo** (`target="_blank" rel="noopener noreferrer"`), **NO pasa por el modal** de suscripción (el interceptor solo actúa sobre `ONBOARDING_BASE_URL`)
  * tema: badge teal, highlight `from-[#1e575b] via-[#1e575b] to-fucsia`, glow fucsia
- **Fix necesario para que el slide 4 existiera:** `activeSlides` hacía `if (!cmsSlide) return s` y después `.filter(s => s.active)` → un slide sin entrada en el CMS quedaba **descartado** (el CMS/Firestore solo tiene 3). Ahora: `return { ...s, active: true }`. Esto además **eliminó el error pre-existing de tsc** en `MainSlider.tsx(98)` (unión sin `active`); quedan solo 2 errores pre-existing (examples/)
- Slide 4 añadido también a `DEFAULT_CMS_CONTENT.slides` en `cms-service.ts` (para el editor del admin). No se bump-eó `contentVersion` (para no descartar ediciones guardadas en Firestore)
- Contador/puntos del slider: "Slider N de **4**" y 4 puntos (automático vía `SLIDES.length`)
- **Eyebrow renombrado:** `ImpulsoProgram.tsx` → `"Programa de Mujer Emprendedora a Mujer CEO"` (antes "Programa IMPULSO · Renacer 2025"). *Otras apariciones de "Renacer 2025" NO tocadas (distinta cadena): tag del slide 1 (`MainSlider.tsx` + `cms-service.ts`), Hero oculto, placeholder del SliderEditor — pendiente de decisión de la usuaria*
- Verificación local: slide 4 completo en DOM (título/badge/fecha/CTA/imagen 1584×672 OK), CTA Instagram `target=_blank rel=noopener noreferrer`, **WCAG 0 fallos claro (443) y oscuro (443)**, 0 errores consola, tsc sin errores nuevos, ESLint 0, build OK (8 rutas)

## Ronda de color: menos verde (solo hover + footer), botones gold, títulos pastel y fotos del slider más visibles (2026-11-18)

- **Petición (literal):** "minimizar el color verde a solo el hover de los botones", "el principal de los botones el color gold", "letras de títulos por #e9ab9e en ambos modos oscuro y claro", "más colores en tonos rosa o claros pasteles", "cambia los degradados que pusiste en los SVG", "las imágenes de los slider se vean un poco más", "el footer sí dejalo verde y quita hola@pariendoideas.com y el botón Soporte"
- **Decisión vía question:** títulos **literal `#e9ab9e` en ambos modos** (la usuaria aceptó ~1.95:1 en claro; ver números de auditoría abajo)
- **globals.css:**
  * Tokens light: `--primary/--ring/--brand-primary/--chart-1/--sidebar-*` `#1e575b` → **`#d6336c` (fucsia)**; `--brand-deep` `#b04a5c` → **`#e9ab9e`**
  * Tokens dark: `--primary/--ring/--brand-primary/--chart-1/--sidebar-*` `#5f9ba0` → **`#e9ab9e`**; `--brand-deep` → **`#e9ab9e`** (mismo valor que claro)
  * `::selection` teal → fucsia 25%
  * **`.btn-brand`:** reposo **gold `#f8b400`** (texto `#3a2800`, borde `#b88000`) → **hover VERDE `#1e575b`** (texto blanco) → active `#19494d` (el verde queda SOLO en hover de botones, como pidió)
  * `gradient-primary`: teal→fucsia → **salmon `#e8a89a` → fucsia `#d6336c`**; `gradient-primary-soft` sin teal; `gradient-hero` sin teal; `gradient-text` → **`#e9ab9e → #e8a89a`**
  * `shadow-glow`, `bg-grid`, `bg-dots`, scrollbar, `pulse-glow`: todos teal → fucsia
- **MainSlider.tsx (fotos más visibles + paleta):**
  * overlay blanco mobile 0.96/0.91/0.8 → **0.9/0.8/0.6**; md 0.97/0.92/0.76/0.4/0.08 → **0.93/0.85/0.66/0.3/0.02**; bottom shade `from-white/70` → **`/45`** (la foto se ve mucho más)
  * h2 → **`text-[#e9ab9e]`**; descripción → `text-[#a94b3c]` (salmon ink, legible); badge de fechas → salmon/pink; flechas de navegación → `text-[#a94b3c]` (antes brand-deep que quedaba invisible en pastel)
  * `highlightColor` de los 4 slides → gradientes pink/fucsia (sin teal)
- **Secciones (barrido rosa):** Resources ×3, KitMujerCEO (array ×3 `from-salmon-700 to-fucsia` + inline ×3 `from-fucsia-osc to-violeta`), Allies 21 → salmon-700→fucsia y 63 → `to-fucsia-osc`, Testimonials ×3 → `from-violeta to-fucsia-osc`; tintes `teal-50` → `salmon-50` (Kit ×2, ScholarshipCTA, Testimonials); FAQ `bg-teal-500` → **`bg-fucsia`**; Pricing `bg-brand-surface` → **`bg-fucsia`**
- **SubscribeModal.tsx:** scrim `bg-[#0d2b2e]/70` → `bg-black/60`; header `bg-brand-surface` (verde) → **`bg-gradient-to-br from-fucsia to-violeta-osc`**
- **Footer.tsx (sí queda verde):** link **"Soporte" eliminado**; **email `hola@pariendoideas.com` eliminado** (la franja de contacto conserva solo ubicación, anclada a `sm:col-start-2`); hover de redes hardcodeado a teal `hover:from-[#5f9ba0] hover:to-[#1e575b]` (el token `brand-primary` ya no es verde); icono `Mail` quitado del import
- **SVGs decorativos recoloreados** (paleta rosa/pastel): `#1e575b` → `#e8a89a` y `#7c3aed` → `#d9c6f7` (lavanda pastel) en flor, arco, hojas, confeti, ondas; fucsia/coral/gold conservados
- **Fuera de esta ronda (anotado):** `Hero.tsx`, `Events.tsx`, `Community.tsx`, `ImpactStats.tsx` aún tienen `from-[#1e575b]` pero **están comentados en `page.tsx`** (no se renderizan); `email-service.ts` (plantillas de correo) y `dashboard` no se tocan
- **Verificación local:** tsc sin errores nuevos (2 pre-existing en examples/); ESLint solo los 4 pre-existing `react-hooks/set-state-in-effect`; `next build` OK (8 rutas); 0 errores de consola en localhost
- **Auditoría WCAG (2026-11-18, tras el cambio):** modo oscuro **1 fallo** (el H2 del slider, tarjeta siempre blanca); modo claro **209 fallos, todos `text-brand-deep #e9ab9e`** (80 títulos + 129 texto pequeño/listas a 1.95:1) + 23 con `gradient-text` + 12 badges blancos sobre degradado + **0 fallos de otros colores**. Son el efecto esperado de la decisión literal; queda en la usuaria si acepta el número o pide tono legible solo en texto pequeño
- **Slide 4 verificado en vivo:** "DESTACADOS · SLIDER 4 DE 4", copy literal completo, badge 🚀, CTA `¡Postúlate ya!` → Instagram `target="_blank"`; 4 puntos; hover del botón comprobado en DOM (reposo gold `#f8b400`, hover `rgb(30,87,91)` verde + texto blanco)
- **NO desplegado** (petición expresa: "todavía no subas eso al servidor de pruebas")
- Pendiente: respuesta sobre captcha + datos de mentores nuevos; commit/push/deploy solo con confirmación

## Ronda legibilidad + badges + modal "Otro" + blog rosa + 13 mentores + fix hover de títulos (2026-11-18)

- **Petición (literal):** "agrega una opción al final que diga 'Otro' para escribir", "las imágenes del blog cambia los colores porque se ve un poco feo", "agrega a estos mentores…", "no se leen bien las letras rosas pequeñas", "agrega una opción que diga 'Otro'"
- **Legibilidad texto rosa (globals.css):** `--brand-deep` claro `#e9ab9e` → **`#b04a5c`** (5.3:1) para texto pequeño; **títulos display ≥18px conservan el pastel `#e9ab9e`** (decisión aceptada con aviso ~1.95:1) vía regla en `@layer utilities`
- **Regla de títulos — especificidad Tailwind v4:** las 3 selectores quedan en **(0,1,1)**: ganan a `.text-brand-deep` (0,1,0) sin depender del orden y PIERDEN ante `.group-hover\:x:is(:where(.group):hover *)` = **(0,2,0)**. *Incidente:* la 2ª selector tenía `.font-display` sin `:where` → (0,2,0), empataba con el hover y al ir después en la capa lo rompía (los títulos no cambiaban al pasar el mouse); corregido con `:where(.font-display)` + `:is(span, div, p, …)` (mismo matching, verificado: 44 títulos pastel antes/después). Hover verificado en vivo: reposo `rgb(233,171,158)` → hover `rgb(169,75,60)` (`--brand-secondary-ink`)
- **`.gradient-primary-strong`** (`#ae5344 0-55% → #d6336c`, blanco ≥4.6:1) para chips/pasos/iconos con contenido **blanco** — 10 puntos en 7 archivos: Resources (Destacado), Modules (MÁS SOLICITADO), Pricing (icono plan + "Más popular"), Mentorship (pasos 1-3), ScholarshipCTA ×3, Events, Hero. `.gradient-primary` (1.9:1) queda **solo decorativo** (barras, bordes, brillos)
- **Modal "Otro":** opción `'Otro'` al final del select Ecosistema → abre Input `required` (`id="lead-ecosistema-otro"`); se envía `ecosistema: "Otro: …"` en `LeadData` **sin tocar `email-service.ts`**
- **Blog (Resources.tsx):** degradados placeholder `from-gold-400 to-coral` → **`from-salmon-500 to-fucsia`** ×3 (los posts usan degradados estáticos, no fotos)
- **Mentores +5:** luis-yanez/9.png, angelica-jalaff/10.png, gabriela-rodriguez/11.png, rafael-nunez/12.png, jaylene-mendoza/13.png = **13**; contador dinámico `({MENTORS.length} profesionales)`; cargos: Angélica Jalaff "Lic. en Contaduría Pública y Abogada", Gabriela Rodríguez "Marketing", Rafael Nuñez "Ciberseguridad", y **Luis Yanez + Jaylene Mendoza → "Mentor Pariendo Ideas"** (respuesta vía question; si la usuaria da los cargos exactos se cambian)
- **slider4.jpeg:** la usuaria subió el archivo a `public/` (171 KB, HEAD 200) — desaparece el 404 de consola en cada ciclo del carrusel
- **Verificación local:** tsc OK (2 pre-existing examples/), ESLint OK (4 pre-existing set-state-in-effect), **WCAG claro: 0 fallos inesperados** (40 títulos pastel + 23 gradient-text = decisión aceptada; 169/169 textos pequeños legibles), **WCAG oscuro: 443 ok / 0 fallos / 1 FP** (h2 slider sobre overlay), **consola: 0 errores**; modal "Otro" probado en DOM (aparece/desaparece el campo, Escape cierra)
- **Nota de método:** auditar oscuro inmediatamente tras agregar `.dark` da falsos positivos — las tarjetas usan `transition-all duration-500` y el fondo tarda 500ms en cambiar (el texto voltea al instante); esperar ≥900ms antes de muestrear
- **✅ DESPLEGADO A PRUEBAS** (petición expresa: "luego de esto lo subes al server de pruebas"): `next build` OK (8 rutas) + `firebase hosting:channel:deploy pruebas` → **https://webperiendoideas--pruebas-m65ehrlv.web.app** · versión `51a710caf40ee48c` · expira **2026-11-25 21:26** · verificado en vivo (13 mentores, blog rosa, 17 badges strong, 44 títulos pastel, slider4 200, regla de hover presente, consola 0 errores). **Producción NO tocada** (`webperiendoideas.web.app` intacta)
- Pendiente: captcha (Cloudflare, deferido por la usuaria), commit/push **solo con confirmación**

## Footer: nuevo CTA "Impulsa tu potencial" (2026-11-18)

- **Petición (literal):** "Vamos a cambiar el texto del footer, por este nuevo: ÚNETE AL PRIMER HUB DE ACELERAMIENTO FEMENINO · Título: Impulsa tu potencial con educación, tecnología y mentoría de alto impacto. · Subtítulo: Sé parte de una red de mujeres que se impulsan entre sí… · Botón: Quiero ser parte ↗️ · Las palabras (educación, tecnología y mentoría) en color rosa… actualizas el testing"
- **Footer.tsx (bloque CTA):** se reemplazó el newsletter (badge "Únete al movimiento" + "Recibe oportunidades…" + formulario de correo + "Suscribirme" + disclaimer) por:
  * badge: **"Únete al primer hub de aceleramiento femenino"** (pill `uppercase` con Sparkles, misma base visual)
  * h3: **"Impulsa tu potencial con `<span class="gradient-text">educación, tecnología y mentoría`</span> de alto impacto."** — las palabras destacadas usan `gradient-text`, que en el footer toma la variante clara `#e8a89a → #f0bfb4 → #e8a89a` (regla `footer .gradient-text`, WCAG ≥4.5 sobre `bg-brand-surface`)
  * subtítulo en la columna derecha (`text-white/70`, alineado abajo como el formulario viejo)
  * botón **"Quiero ser parte ↗"** (`btn-brand` + icono `ArrowUpRight`) → **abre el modal de suscripción** con `originUrl: ONBOARDING_BASE_URL` (mismo destino genérico que los CTAs principales)
- **Limpieza:** eliminados `email` state, `handleSubmit`, import de `Input` y `import * as React` (quedaron sin uso); `ONBOARDING_URLS` sigue usándose en `FOOTER_LINKS`
- **Verificación:** tsc OK (2 pre-existing), ESLint OK (4 pre-existing); DOM local y **canal de pruebas en vivo**: copy completo, `gradient-text` con la variante de footer, formulario/email y copy viejo ausentes, botón abre el modal, **0 errores de consola**
- **✅ Desplegado a pruebas:** `firebase hosting:channel:deploy pruebas` → https://webperiendoideas--pruebas-m65ehrlv.web.app · versión `cbea9ff0e65822f9` · expira 2026-11-25 · producción intacta

## Slider: fotos nuevas sin veladura + letras en blancas (2026-11-18)

- **Petición (literal):** "modifique las imagenes del slider como hice con los mentores, pero no se muestra la primera, ahora al estilo del slider le vamos a quitar la transparencia y dejas las letras en blanco, porque las imagenes tienen tono oscuro… los botones si los dejas igual"
- **Fix 1 — primera imagen:** la usuaria reemplazó las 4 fotos en `public/` (18-nov 22:47, todas `.jpeg`) pero el código apuntaba a `/slider1.png` → **404 → fondo blanco = "no se muestra la primera"**. Corregido en `MainSlider.tsx` a `/slider1.jpeg` (única referencia en código; el CMS no pisa `imageUrl`). Verificado: las 4 cargan (1280/1584/1584/1280 px)
- **Fix 2 — quitar la transparencia:** eliminados los 2 overlays blancos del slide (gradiente lateral `rgba(255,255,255,.93…) → transparente` y sombra inferior `bg-gradient-to-t from-white/45`); la card queda `img` + contenido directo → las fotos se ven a su tono
- **Fix 3 — letras en blanco:** `<h2>` `text-[#e9ab9e]` → **`text-white`**; *highlight* → **blanco** (se quitó el degradado pink `bg-clip-text`); descripción `text-[#a94b3c]` → **`text-white`**; badge tag → `text-white`; badge fechas → `bg-white/15 text-white` (antes `bg-white/80`); los 4 `badgeColor` de tema → `text-white`. **Eliminados los `highlightColor`** de los 4 slides (quedaron sin uso)
- **Botones SIN cambios:** CTA `btn-brand` (gold→verde), flechas `text-[#a94b3c]`, play/pause, puntos y barra de progreso
- **Verificación local:** 4 slides ciclados en DOM (img OK + título blanco + 0 overlays), consola 0 errores, tsc OK (2 pre-existing), ESLint OK (4 pre-existing), `next build` OK (8 rutas)

## Slider: slides 3-4 con texto a la derecha + todas las fotos al mismo tamaño (2026-11-18)

- **Petición (literal):** "en los 2 ultimos slider podemos pasar las letras al lado derecho de la imagen, porque se coloca encima de las caras de las personas, solo los slider 3 y 4" + "de las 2 que modificamos justificalas hacia la derecha, asi como las de las izquierda estan justificadas hacia ese sentido… y coloca todas las imagenes del mismo tamano"
- **`contentAlign` por slide** en `MainSlider.tsx`: `left` (slides 1-2) / `right` (slides 3-4). El contenedor usa `justify-end` y el bloque `text-right`; el `<p>` lleva `ml-auto` (para que su caja de `max-w-xl` se pegue a la derecha) y la fila del CTA `items-end sm:justify-end` (antes `items-start lg:justify-start`). Los badges (`inline-flex`) se alinean solos con el `text-right`
- **Mismo tamaño de imagen:** el alto lo decidía el texto → alturas distintas por slide (medido: **563 / 623 / 654 / 532** px en desktop). Medición con **iframes embebidos** a 5 anchos (no hay control de viewport en el navegador): máximo por breakpoint = **375→696 · 640→557 · 768→654 · 1024→684 · 1360→654**. Solución: `min-h` idéntico para los 4 slides con margen: **`min-h-[720px] sm:min-h-[580px] md:min-h-[700px] lg:min-h-[700px]`** (usa `min-h`, no `h`, para no recortar el texto si en algún viewport se desborda)
- **Verificación:** local e iframes → los 4 slides miden **722 (375) / 582 (640) / 702 (768,1024,desktop)** exactamente iguales, sin desbordes, slides 3-4 con `justify: flex-end` + `textAlign: right`, slides 1-2 a la izquierda; tsc OK (2 pre-existing), ESLint OK (4 pre-existing), consola 0 errores, `next build` OK
- **✅ Desplegado a pruebas:** `firebase hosting:channel:deploy pruebas` → versión **`d7681f6ef6f6c1f5`** (expira 2026-11-25 23:44), producción intacta. En vivo: HTML servido con `min-h-[700px]`, tarjeta de **702px**, letras blancas, 0 overlays, 0 errores de consola
- **Hallazgo (caché):** el HTML de Hosting se sirve con `Cache-Control: max-age=3600`, así que una pestaña abierta antes del deploy puede mostrar la versión vieja hasta 1 h (y pedir chunks que ya no existen → 2 "Refused to execute… MIME text/html"). Verificado que el HTML **fresco** (`cache: no-store`) ya trae las clases nuevas y que un documento nuevo sin caché no pide los chunks viejos. *Posible mejora futura: cabecera `max-age=0, must-revalidate` para HTML en `firebase.json`* — pendiente de decidir
- **Nota de método:** con la pestaña sin renderizar (ventana minimizada/oculta), `requestAnimationFrame` no corre → framer-motion congela `opacity:0` y `AnimatePresence mode="wait"` nunca monta el slide nuevo (el contador avanza pero el contenido queda fijo); comprobar `framesIn600ms` antes de concluir que hay un bug de render

## Facebook del footer, "Próximamente" en plan Temprana y CTA del footer en negrita (2026-11-19)

- **Petición (literal):** "colocale el enlace al boton de facebook dirigir a https://www.facebook.com/share/1A1U5ajm4N/ · en el modal de los planes, en el plan Temprana, al final colocar algo como que el marketplace es Proximamente · el boton del footer que dice, Quiero ser parte, colocale las letras en negrita"
- **Facebook (`Footer.tsx`):** `SOCIAL_LINKS` — el href de Facebook pasó de `'#'` a **`https://www.facebook.com/share/1A1U5ajm4N/`**; el render ahora detecta `href.startsWith('http')` y agrega `target="_blank" rel="noopener noreferrer"` (los demás íconos siguen con `#` y sin target)
- **Plan Temprana (`Pricing.tsx`):** no existe un "modal de planes" en el código (los planes son las tarjetas de Pricing; al hacer clic se abre el modal de suscripción) → la nota se agregó **al final de la lista de la tarjeta Temprana**: nuevo tipo de fila `kind: 'soon'` → icono `Clock3` + "Marketplace Pariendo Ideas" + píldora **"Próximamente"** (`bg-brand-muted text-brand-deep`, 5.3:1)
- **CTA footer:** `className="h-12 px-6 rounded-full btn-brand shadow-glow"` → **+ `font-bold`** en "Quiero ser parte"
- Verificación: tsc OK (2 pre-existing), ESLint OK (4 pre-existing), `next build` OK
- **✅ Desplegado a pruebas:** `firebase hosting:channel:deploy pruebas` → versión **`a989e2d4ee96bd40`** (expira 2026-11-26 12:39), producción intacta. Verificado en vivo con HTML fresco: Facebook `href` + `target="_blank" rel="noopener noreferrer"`, fila "Marketplace Pariendo Ideas · Próximamente" dentro de la tarjeta Temprana (píldora `#b04a5c` sobre `#f7f2e9`), botón "Quiero ser parte" `font-weight: 700`; 0 errores de consola
- **Nota:** el puerto 3000 tenía un dev server colgado (PID 25168 del 17-nov) que no respondía → terminado con `Stop-Process` y relanzado

## 🚀 Deploy a PRODUCCIÓN (2026-11-19)

- **Confirmación explícita de la usuaria** ("vamos a subir los cambios al servidor del produccion") → `npx firebase deploy --only hosting` → **release completo** (EXIT=0)
- **Antes del deploy (revisión de correos):** el sitio es export estático (`output: "export"`) → Firebase solo sirve archivos; el envío sale **del navegador** directo a `https://api.radarsystems.net/api/send/mt` con credenciales en `src/lib/email-service.ts`. Sin variables de entorno ni config de servidor que puedas fallar; `firebase.json` no tiene CSP. **Sonda CORS desde el origen de producción** (POST sin parámetros → respuesta legible `{"status":null,"msg":"Opps error al contactar con la empresa"}` = origen permitido, **sin enviar correo**)
- **Verificado en vivo** (`webperiendoideas.web.app` y dominio personalizado `pariendoideas.com`, HTML fresco): Facebook `href` + `target="_blank"` ✅ · fila "Próximamente" en plan Temprana ✅ · "Quiero ser parte" `font-weight: 700` ✅ · slider 702px con `min-h-[700px]` ✅ · **0 errores de consola**
- Estado: 55+ archivos modificados **sin commitear** (commit/push pendiente de confirmación)

## Rotación de credenciales Radarsystems (2026-11-19)

- **Petición:** cambiar los IDs del envío de correo → `EMAIL_API` en `src/lib/email-service.ts`:
  * `clientId` `ccbaa650…` → **`0ff150ef…`** (valor completo solo en local: `email-service.ts` está en `.gitignore` porque el repo es público)
  * `secretKey` `APP_SECRET_9b1089…` → **`APP_SECRET_318cb…`** (valor completo solo en local)
  * `idCampaign` `60` → **`1143`** · `idCompany` `25` → **`140`**
- Verificación build: tsc OK (2 pre-existing), ESLint OK (4 pre-existing), `next build` OK
- **Desplegado a pruebas** → versión **`263757cb358ae781`** (expira 2026-11-26 15:07). Bundle servido: credenciales **nuevas presentes** y **viejas ausentes** (13 scripts verificados)
- **Envío REAL de prueba desde pruebas con las credenciales nuevas: AMBOS HTTP 200 `{"status":true}`** (interceptando el fetch): 1) bienvenida a vgjorgeluis20@gmail.com 2) aviso a pariendoideass@gmail.com — campos `client_id`/`secret_key`/`id_campaign 1143`/`id_company 140` correctos en el payload; vista de éxito del modal OK; 0 errores de consola
- **Seguridad (nota para el worklog):** al ser export estático, las credenciales van **dentro del JS del navegador** (visible con DevTools) — igual que las anteriores; ocultarlas en el bundle no es seguridad real. Mitigaciones posibles: 1) **revocar/rotar las credenciales viejas** en el panel Radarsystems (ya quedaron expuestas en el bundle de producción anterior), 2) restringir origen/dominio en Radarsystems si su panel lo permite, 3) arquitectura con **proxy** (Cloud Function con el secreto en el servidor) → requiere plan Blaze de Firebase y dejar el export 100% estático
- **✅ Desplegado a PRODUCCIÓN** (`firebase deploy --only hosting`, EXIT=0) y verificado en `pariendoideas.com`: credenciales **nuevas presentes** / **viejas ausentes** en los 14 scripts, HTML fresco, **0 errores de consola**

## Auditoría completa de UX/contenido (2026-11-24)

- **Petición (literal):** "Header traslapado / Barra flotante choca con textos al hacer scroll / Bajo contraste / Títulos rosa pálido ilegibles sobre fondo crema / Bloques duplicados / Rutas dispersas / Colisiones visuales en navegación móvil" + tabla de soluciones (navbar fondo sólido #FAF7F2, títulos #8E2936 o #16302B, botón scroll-top tras 600px, logos en cajas uniformes) + "elementos a eliminar de inmediato" (4 listas de pasos → un solo flujo, fusionar Categorías + Red de Mujeres Líderes, eliminar duplicado de beca, unificar Impulso/Renacer, fusionar Tres caminos con Tres pilares, traducir scheduling/tracker, convocatorias 2025→2026)
- **Decisiones de la usuaria (2 rondas de preguntas):** 1) **mantener el slider** (no reemplazarlo por héroe único); 2) títulos → **#8E2936** (vino, no #16302B); 3) nombre unificado → **"Impulso"**; 4) un solo flujo = **Journey "De idea a negocio en 4 pasos"** → se elimina la sección `ImpulsoProgram.tsx` completa (navbar "Impulso" → `#modulos`; Mentoría conserva su "matching en 3 pasos"); 5) logos → cajas uniformes **ajustado**: 7 de 11 PNG traen fondo claro y 4 oscuro → cajas de igual tamaño con fondo por logo (**blanco para los 7 claros, #141414 para los 4 oscuros**), porque fondo oscuro uniforme para todos dejaría manchados los 7 logos claros; 6) beca repetida → se quita la tarjeta interna "Realiza tu Registro" de ScholarshipCTA; 7) embudo → becas **"Solicitar Beca"**, raíz **"Quiero ser parte"**
- **Navbar (`Navbar.tsx`):** contenedor siempre **sólido `#FAF7F2` / `#0F1A1B`** + `shadow-soft` + borde (antes `glass` translúcido solo al hacer scroll); menú móvil y hamburguesa también sólidos; nav "Impulso" → `#modulos`
- **Títulos (`globals.css`):** nuevo token `--title-ink` (**#8e2936** claro / **#e9ab9e** oscuro) y la regla de títulos display (0,1,1) ahora usa `var(--title-ink)`; `.gradient-text` en claro pasa a **#8e2936 → #a94b3c** (oscuro/footer conservan el pastel); `scroll-padding-top: 6rem` en `html` (los anclajes ya no quedan bajo la cabecera sticky); `ScrollUtilities` **ya cumplía** (botón ámbar aparece tras 600px) → sin cambio
- **Duplicados eliminados:** sección `ImpulsoProgram.tsx` **borrada** (3 pilares ≈ tarjeta IMPULSO de Modules + lista de pasos + anglicismos `scheduling`/`tracker` desaparecen con ella) · tarjeta interna de ScholarshipCTA (otra lista de 3 pasos) · bloque "Categorías del ecosistema" de KitMujerCEO (5/8 chips solapados con "Red de Mujeres Líderes"; sectores únicos **Tecnología** y **Comunidad** agregados a los chips)
- **Renombrados Impulso (antes "Renacer"):** MainSlider tag, cms-service, Journey checklist, FAQ ×2, Resources ×2, Modules tagline (`'Becas del 100%'`), ImpactStats, dashboard (`Cohorte Impulso 2026`), SliderEditor placeholder, Hero (`Programa Impulso 2026 — Convocatoria abierta`), JSON-LD de layout. **No tocar:** "Renacer Contable" (aliado) y fechas históricas de artículos ("Jul 2025")
- **Convocatoria:** badge de ScholarshipCTA `Convocatoria 2025` → **2026**
- **CTAs unificados (embudo becas → `ONBOARDING_URLS.becas`):** Navbar ×2, Modules IMPULSO, Hero, Journey, Testimonials, Pricing, ScholarshipCTA, Footer (link "Becas de Formación" → **"Solicitar Beca"**) → todas **"Solicitar Beca"**; raíz del onboarding (slider ×3 "EMPIEZA AQUÍ" y botón footer) → **"Quiero ser parte"**. Quedan sin tocar "Comenzar aceleración" (otro embudo: `aceleracion`), "Activar mi Kit Mujer CEO" (embudo kit) y "¡Postúlate ya!" (Instagram)
- **Logos aliados (`Allies.tsx`):** nuevo campo `boxBg: 'dark' | 'light'` por logo; caja interior uniforme **166×56 px** (`h-14 w-full rounded-xl`) con fondo **blanco** (sellibri, go-interaction, disglobal, dropanas, benflor, renacer-contable, arte-medio-w3) o **#141414** (bbm-intelligent, cocrea, bestway-marketing, gold-stetic-clinic); aliados nuevos desde el CMS heredan `light`
- **Verificación local (`serve out` en :3000):** navbar `rgb(250,247,242)` sólida, títulos `rgb(142,41,54)` (#8E2936) y `rgb(233,171,158)` en oscuro, sin `#impulso`, sin "Categorías del ecosistema", sin "Convocatoria 2025", sin "Renacer" (salvo Contable), CTAs solo "Solicitar Beca"/"Quiero ser parte", cajas de aliados 22× 166×56 con bg blanco/#141414, `scroll-padding-top: 96px`, **0 errores de consola**; tsc OK (2 pre-existing), ESLint OK (4 pre-existing), `next build` OK
- **✅ Desplegado a PRUEBAS:** `firebase hosting:channel:deploy pruebas` → versión **`a3fbd4877b04bd0a`** (expira **2026-12-01 19:35**), URL `https://webperiendoideas--pruebas-m65ehrlv.web.app/?fresh=audit20261124`. Verificado en vivo: mismos checks OK + **0 errores de consola**; producción intacta
- **Nota de método:** `browser.screenshot` devolvió el contenido en blanco (navbar fija sí pinta) aunque el DOM/estilos están correctos (`elementFromPoint` devuelve el H2 del slide con opacidad 1 e imagen cargada) → artefacto de pintura de la ventana oculta; verificación hecha por DOM/estilos en local y en vivo
- **Pendiente de la usuaria:** commit/push (~55+ archivos), `max-age=0` para HTML en `firebase.json`, revocación de credenciales viejas en Radarsystems / proxy Cloud Function
- **✅ Desplegado a PRODUCCIÓN (pedido explícito: "subelo al servidor de produccion"):** `firebase deploy --only hosting` (EXIT=0). Verificado en `pariendoideas.com` con HTML fresco (`?fresh=`): navbar `rgb(250,247,242)` sólida, títulos `rgb(142,41,54)`, sin `#impulso`, sin "Categorías del ecosistema", sin "Convocatoria 2025" (sí 2026), sin "Renacer" (salvo Contable), CTAs solo "Solicitar Beca"/"Quiero ser parte", cajas de aliados 22× 166×56 (blanco/#141414), `scroll-padding-top: 96px`, slider `min-h: 700px` intacto, **0 errores de consola**
