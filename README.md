# ðŸŒ¸ Pariendo Ideas â€” Plataforma Principal del Ecosistema Digital

> **Ecosistema Integral de Empoderamiento, ReconstrucciÃ³n Productiva y AceleraciÃ³n Digital para Mujeres Emprendedoras.**  
> **Dominio en ProducciÃ³n:** [https://pariendoideas.com](https://pariendoideas.com)  
> **Plataforma de DiagnÃ³stico y Onboarding:** [https://onboarding.pariendoideas.com](https://onboarding.pariendoideas.com)  
> **Repositorio Oficial:** [https://github.com/gointeraction/PaginaPariendoideasNew](https://github.com/gointeraction/PaginaPariendoideasNew)

---

## ðŸ“‹ Tabla de Contenidos

1. [DescripciÃ³n General](#-1-descripciÃ³n-general)
2. [Stack TecnolÃ³gico](#-2-stack-tecnolÃ³gico)
3. [Arquitectura del Ecosistema](#-3-arquitectura-del-ecosistema)
4. [EspecificaciÃ³n de Secciones de la Plataforma](#-4-especificaciÃ³n-de-secciones-de-la-plataforma)
5. [Mapeo de Enlaces y ParÃ¡metros a Onboarding](#-5-mapeo-de-enlaces-y-parÃ¡metros-a-onboarding)
6. [Portales Privados: Dashboard y Gestor CMS](#-6-portales-privados-dashboard-y-gestor-cms)
7. [Directorio Oficial de Mentores y Aliados](#-7-directorio-oficial-de-mentores-y-aliados)
8. [Sistema de DiseÃ±o y GuÃ­a de Estilo](#-8-sistema-de-diseÃ±o-y-guÃ­a-de-estilo)
9. [Matriz de MÃ³dulos de AutomatizaciÃ³n](#-9-matriz-de-mÃ³dulos-de-automatizaciÃ³n)
10. [Estructura del Proyecto](#-10-estructura-del-proyecto)
11. [InstalaciÃ³n, EjecuciÃ³n y Despliegue](#-11-instalaciÃ³n-ejecuciÃ³n-y-despliegue)

---

## ðŸŒŸ 1. DescripciÃ³n General

**Pariendo Ideas** es una plataforma tecnolÃ³gica diseÃ±ada para acompaÃ±ar a mujeres lÃ­deres y emprendedoras desde la reconstrucciÃ³n psicosocial y econÃ³mica hasta la digitalizaciÃ³n comercial, el comercio electrÃ³nico y la aceleraciÃ³n empresarial con inteligencia artificial y el respaldo de **Cavecom-e**.

El proyecto unifica tres pilares fundamentales:
- **Landing Page Interactiva y Reactiva (`/`)**: Conectada en tiempo real a **Cloud Firestore** para actualizar dinÃ¡micamente banners, aliados y herramientas tecnolÃ³gicas sin necesidad de recompilar.
- **Portal de la Emprendedora (`/dashboard`)**: Panel de seguimiento de becas otorgadas, ruta de aceleraciÃ³n, activaciÃ³n del Kit Mujer CEO y agendamiento de mentorÃ­as 1:1.
- **Gestor Administrativo CMS (`/gestor-pariendo-admin`)**: Panel de control protegido con **Firebase Google Auth** para administrar el Slider Principal, Marquesina TecnolÃ³gica, Aliados EstratÃ©gicos, GalerÃ­a Multimedia y Bandeja de Postulaciones en vivo.

---

## ðŸ› ï¸ 2. Stack TecnolÃ³gico

| CategorÃ­a | TecnologÃ­a | VersiÃ³n / Detalle |
|---|---|---|
| **Framework Frontend** | Next.js (App Router + Turbopack) | `^16.1.1` (Static Export / SPA HÃ­brido) |
| **LibrerÃ­a UI** | React + React DOM | `19.0.0` |
| **Lenguaje** | TypeScript | `^5` |
| **Estilos y DiseÃ±o** | Tailwind CSS v4 + `@tailwindcss/postcss` | `^4` |
| **Componentes Base** | Radix UI + shadcn/ui + Lucide Icons | Accesibles y personalizables |
| **Animaciones** | Framer Motion + Embla Carousel | `^12.23.2` / `^8.6.0` |
| **Backend Serverless** | Firebase (Auth, Firestore, Storage, Hosting) | `^12.18.0` (`webperiendoideas`) |
| **Estado y Formularios** | Zustand + React Hook Form + Zod | GestiÃ³n reactiva y validaciÃ³n |

---

## ðŸ—ï¸ 3. Arquitectura del Ecosistema

```mermaid
graph TD
    subgraph Landing_PariendoIdeas [Frontend Principal: pariendoideas.com]
        LP1[Navbar & MainSlider Reactivo]
        LP2[MÃ³dulos Core & Programa IMPULSO]
        LP3[Kit Mujer CEO & Sectores Clave]
        LP4[Planes de MembresÃ­a & MentorÃ­as 1:1]
        LP5[Comunidad, Tu Camino & Recursos]
        LP6[Testimonios, Aliados, FAQ & Beca CTA]
        DASH[Portal Emprendedora /dashboard]
        CMS[Gestor Admin CMS /gestor-pariendo-admin]
    end

    subgraph Subapp_Onboarding [Plataforma Onboarding: onboarding.pariendoideas.com]
        ON1[AutenticaciÃ³n & Registro]
        ON2[DiagnÃ³stico Inteligente en 5 Pasos]
        ON3[ClasificaciÃ³n IA & Scoring de Beca]
        ON4[ActivaciÃ³n de Kit Digital & MentorÃ­as]
    end

    subgraph Backend_Firebase [Firebase Cloud Project: webperiendoideas]
        FB1[(Cloud Firestore)]
        FB2[Firebase Authentication]
        FB3[Firebase Storage]
        FB4[Firebase Hosting CDN]
    end

    LP1 -->|?programa=becas / kit-mujer-ceo / aceleracion| ON2
    LP2 -->|?programa=becas| ON2
    LP3 -->|?programa=kit-mujer-ceo&etapa=...| ON4
    LP4 -->|?programa=aceleracion&mentora=...| ON4
    LP6 -->|?programa=becas| ON2

    CMS <-->|Lectura/Escritura Tiempo Real| FB1
    CMS <-->|Subida de ImÃ¡genes| FB3
    CMS <-->|Google Auth Whitelist| FB2
    LP1 <-->|SuscripciÃ³n onSnapshot| FB1
    DASH <-->|Estado de PostulaciÃ³n| FB1
```

---

## ðŸ§© 4. EspecificaciÃ³n de Secciones de la Plataforma

Todas las secciones se encuentran modularizadas en `src/components/sections/` y ensambladas en `src/app/page.tsx`:

| Orden | SecciÃ³n | Componente | Estado | EspecificaciÃ³n Funcional |
|---|---|---|---|---|
| **01** | **Barra de NavegaciÃ³n** | `layout/Navbar.tsx` | âœ… Activo | Header sticky con `backdrop-blur`, navegaciÃ³n suave por anclas (`#programas`, `#impulso`, `#kit-ceo`, `#precios`, `#mentoria`, `#comunidad`, `#aliados`) y CTA directo a **Solicitar Beca**. |
| **02** | **Slider Principal** | `sections/MainSlider.tsx` | âœ… Activo (CMS) | Carrusel hero rotativo de 3 slides sincronizado con Firestore (`cms/slider`):<br>1. *ReconstrucciÃ³n Productiva y Becas*<br>2. *Kit Mujer CEO (E-Commerce + POS)*<br>3. *AceleraciÃ³n Digital e IA con aval Cavecom-e* |
| **03** | **Marquesina TecnolÃ³gica** | `sections/TrustBar.tsx` | âœ… Activo (CMS) | Cinta continua de tecnologÃ­as que impulsan el ecosistema: *Google Cloud, Firebase, Cloudflare, WhatsApp Business, Radar, LandiaAI, Sellibri, Avila Pay, GoAgente IA, BBM Intelligent*. |
| **04** | **MÃ³dulos Core** | `sections/Modules.tsx` | âœ… Activo | PresentaciÃ³n ejecutiva de los 3 pilares: **Programa IMPULSO** (Becas y acompaÃ±amiento), **Kit Mujer CEO** (Herramientas comerciales) y **AceleraciÃ³n Digital** (Escalamiento y mentorÃ­a). |
| **05** | **Programa IMPULSO** | `sections/ImpulsoProgram.tsx` | âœ… Activo | Detalla los 3 pilares de reconstrucciÃ³n (*AcompaÃ±amiento Psicosocial, ReconstrucciÃ³n Digital y MentorÃ­a 1:1*) mÃ¡s el bloque **"Â¿CÃ³mo funciona?"** en 3 pasos hacia la optimizaciÃ³n y financiamiento flexible. |
| **06** | **Kit Mujer CEO** | `sections/KitMujerCEO.tsx` | âœ… Activo | Ecosistema tecnolÃ³gico comercial dividido en:<br>â€¢ **3 Etapas:** *Semilla, Etapa Temprana y Canales/Marketplace*<br>â€¢ **8 CategorÃ­as del Ecosistema**<br>â€¢ **Red de Mujeres LÃ­deres en Sectores Clave:** *Estilo de Vida, ProducciÃ³n y Servicios* |
| **07** | **Planes y MembresÃ­as** | `sections/Pricing.tsx` | âœ… Activo | Comparativa transparente de niveles:<br>â€¢ **Plan Semilla** (`?programa=becas`)<br>â€¢ **Plan Pro / Kit Mujer CEO** (`?programa=kit-mujer-ceo`)<br>â€¢ **Plan Elite / AceleraciÃ³n** (`?programa=aceleracion`) |
| **08** | **MentorÃ­as 1:1** | `sections/Mentorship.tsx` | âœ… Activo | Carrusel interactivo con los **8 Mentores Oficiales** de la red, especialidades verificadas y botÃ³n de agendamiento personalizado por mentor. |
| **09** | **Comunidad** | `sections/Community.tsx` | âœ… Activo | CÃ­rculos de apoyo, networking colaborativo entre fundadoras y espacios de crecimiento conjunto. |
| **10** | **Tu Camino (4 Pasos)** | `sections/Journey.tsx` | âœ… Activo | Hoja de ruta de la emprendedora:<br>1. *PostulaciÃ³n y Registro*<br>2. *DiagnÃ³stico Inteligente con IA*<br>3. *Aceleramiento con Kit Mujer CEO*<br>4. *Egreso y CertificaciÃ³n con aval Cavecom-e* |
| **11** | **Historias que Inspiran** | `sections/Testimonials.tsx` | âœ… Activo | Casos de Ã©xito y resiliencia de mujeres que transformaron sus negocios a travÃ©s de Pariendo Ideas. |
| **12** | **Centro de Recursos** | `sections/Resources.tsx` | âœ… Activo | GuÃ­as descargables, plantillas financieras, kits legales y herramientas prÃ¡cticas de gestiÃ³n. |
| **13** | **Aliados EstratÃ©gicos** | `sections/Allies.tsx` | âœ… Activo (CMS) | Grid de las **11 empresas e instituciones aliadas** sincronizado en tiempo real con Firestore (`cms/allies`). |
| **14** | **Preguntas Frecuentes** | `sections/FAQ.tsx` | âœ… Activo | AcordeÃ³n interactivo resolviendo dudas sobre becas, requisitos de postulaciÃ³n, Kit Mujer CEO y certificaciones. |
| **15** | **Llamado de Cierre (Beca CTA)** | `sections/ScholarshipCTA.tsx` | âœ… Activo | Tarjeta de conversiÃ³n final con acceso directo al **DiagnÃ³stico Inteligente con IA** en la plataforma de Onboarding. |
| **16** | **Pie de PÃ¡gina** | `layout/Footer.tsx` | âœ… Activo | Enlaces institucionales, programas, contacto, redes sociales y derechos reservados. |
| **â€”** | *Hero Secundario / Eventos / ImpactStats* | `Hero.tsx`, `Events.tsx`, `ImpactStats.tsx` | â¸ En Reserva | Componentes preservados en el cÃ³digo y desactivados en la vista principal por directriz comercial para maximizar la conversiÃ³n hacia Onboarding. |

---

## ðŸ”— 5. Mapeo de Enlaces y ParÃ¡metros a Onboarding

Centralizado en [`src/lib/constants.ts`](src/lib/constants.ts), cada llamado a la acciÃ³n redirige a `https://onboarding.pariendoideas.com` con parÃ¡metros especÃ­ficos para preconfigurar la experiencia de la usuaria:

```text
https://onboarding.pariendoideas.com
â”œâ”€â”€ /?programa=becas
â”‚   â”œâ”€â”€ BotÃ³n "Solicitar Beca" (Navbar desktop y mÃ³vil)
â”‚   â”œâ”€â”€ Slide 1 del Slider Principal
â”‚   â”œâ”€â”€ Tarjeta "Programa IMPULSO" (MÃ³dulos Core)
â”‚   â”œâ”€â”€ SubmÃ³dulos de Impulso y botÃ³n de 3 pasos
â”‚   â”œâ”€â”€ Plan Semilla (SecciÃ³n Precios)
â”‚   â”œâ”€â”€ BotÃ³n "Ãšnete ya" (Testimonios)
â”‚   â””â”€â”€ Tarjeta Principal de Cierre (ScholarshipCTA)
â”‚
â”œâ”€â”€ /?programa=kit-mujer-ceo
â”‚   â”œâ”€â”€ Slide 2 del Slider Principal
â”‚   â”œâ”€â”€ Tarjeta "Kit Mujer CEO" (MÃ³dulos Core)
â”‚   â”œâ”€â”€ Plan Pro (SecciÃ³n Precios)
â”‚   â”œâ”€â”€ Etapas: &etapa=semilla | &etapa=temprana | &etapa=marketplace
â”‚   â”œâ”€â”€ Sectores: &sector=[categoria]
â”‚   â””â”€â”€ BotÃ³n "Cobrar en POS" / Activar E-Commerce
â”‚
â””â”€â”€ /?programa=aceleracion
    â”œâ”€â”€ Slide 3 del Slider Principal
    â”œâ”€â”€ Tarjeta "AceleraciÃ³n Digital" (MÃ³dulos Core)
    â”œâ”€â”€ Plan Elite (SecciÃ³n Precios)
    â”œâ”€â”€ Banner de Matching de MentorÃ­as
    â””â”€â”€ Agendamiento por mentor: &mentora=[slug-del-mentor]
```

---

## ðŸ” 6. Portales Privados: Dashboard y Gestor CMS

### 6.1 Portal de la Emprendedora (`/dashboard`)
Ubicado en `src/app/dashboard/page.tsx`:
- VisualizaciÃ³n del estado de postulaciÃ³n a la **Beca de ReconstrucciÃ³n (100% Otorgada)**.
- Progreso por etapas dentro de la ruta de aceleraciÃ³n.
- Accesos directos a las herramientas del **Kit Mujer CEO** y sesiones de **MentorÃ­a 1:1**.

### 6.2 Gestor Administrativo CMS (`/gestor-pariendo-admin`)
Ubicado en `src/app/gestor-pariendo-admin/page.tsx` y respaldado por `src/lib/cms-service.ts`:
- **AutenticaciÃ³n Segura:** Protegido con Firebase Google Auth y lista blanca de correos autorizados (`pariendoideass@gmail.com`).
- **MÃ³dulos de AdministraciÃ³n:**
  - `ApplicationsManager.tsx`: Bandeja en tiempo real de postuladas desde el Onboarding, filtros por estado, aprobaciÃ³n de becas y contacto directo vÃ­a WhatsApp.
  - `SliderEditor.tsx`: EdiciÃ³n en vivo de tÃ­tulos, subtÃ­tulos, textos de botones, enlaces e imÃ¡genes del Slider Principal.
  - `AlliesEditor.tsx`: GestiÃ³n de los 11 aliados estratÃ©gicos, categorÃ­as y carga de logotipos.
  - `TrustBarEditor.tsx`: AdministraciÃ³n de las tecnologÃ­as mostradas en la marquesina.
  - `MediaManager.tsx` & `ImageUploader.tsx`: Subida de imÃ¡genes a Firebase Storage con compresiÃ³n automÃ¡tica en cliente (WebP/PNG optimizado).

---

## ðŸ‘¥ 7. Directorio Oficial de Mentores y Aliados

### 7.1 Red Oficial de Mentores (`Mentorship.tsx`)
1. **Dra. Heidy Oropeza** â€” MÃ©dica y Asesora de Bienestar Integrativo (`/Mentores/1.png`)
2. **Prof. Wolfan BellorÃ­n** â€” Profesor de Oratoria y LocuciÃ³n (`/Mentores/2.png`)
3. **Ing. Carlos Moreno** â€” Experto en Blockchain y Criptoactivos (`/Mentores/3.png`)
4. **Lic. JosÃ© YvÃ¡n BohÃ³rquez** â€” Experto en Inteligencia Artificial (IA) (`/Mentores/4.png`)
5. **Lic. Celsa Perez** â€” Experta en ProgramaciÃ³n NeurolingÃ¼Ã­stica (PNL) (`/Mentores/5.png`)
6. **Lic. Soley Medina** â€” Licenciada en ContadurÃ­a y Finanzas (`/Mentores/6.png`)
7. **Arq. Dioraisa Lo Martire** â€” Arquitecta Especialista en DiseÃ±o de Interiores y Feng Shui (`/Mentores/7.png`)
8. **Abg. Wendy MÃ©ndez** â€” Abogada Especialista en Derecho Contractual (`/Mentores/8.png`)

### 7.2 Aliados EstratÃ©gicos (`Allies.tsx`)
1. **Sellibri** â€” Comercio & Plataforma (`/logosaliados/sellibri.png`)
2. **Go Interaction Marketing** â€” Marketing & Crecimiento (`/logosaliados/go-interaction.png`)
3. **BBM Intelligent** â€” Sistemas Inteligentes & IA (`/logosaliados/bbm-intelligent.png`)
4. **Cocrea** â€” Arquitectura & Feng Shui (`/logosaliados/cocrea.png`)
5. **Disglobal** â€” Soluciones Comerciales (`/logosaliados/disglobal.png`)
6. **Dropanas** â€” LogÃ­stica & DistribuciÃ³n (`/logosaliados/dropanas.png`)
7. **Benflor** â€” Desarrollo Productivo (`/logosaliados/benflor.png`)
8. **Renacer Contable** â€” AsesorÃ­a Financiera & Contable (`/logosaliados/renacer-contable.png`)
9. **Arte Medio W3** â€” DiseÃ±o & Creatividad Digital (`/logosaliados/arte-medio-w3.png`)
10. **BestWay Marketing** â€” Estrategia Digital (`/logosaliados/bestway-marketing.png`)
11. **Gold Stetic Clinic** â€” Salud EstÃ©tica & Bienestar (`/logosaliados/gold-stetic-clinic.png`)

---

## ðŸŽ¨ 8. Sistema de DiseÃ±o y GuÃ­a de Estilo

### Paleta de Colores
- **Primary (PÃºrpura):** `#A855F7`
- **Secondary (Rosa):** `#EC4899`
- **Accent (Naranja):** `#F97316`
- **Background:** `#FFFFFF`
- **Foreground:** `#2D2640`
- **Muted:** `#F5F3FF`
- **Border:** `#E9D5FF`

### Gradientes Institucionales
- **Gradient Primary:** `linear-gradient(to right, #A855F7, #EC4899, #F97316)`
- **Gradient Hero:** `linear-gradient(to bottom right, rgba(168,85,247,0.2), rgba(236,72,153,0.1), rgba(249,115,22,0.2))`

### Componentes y Microinteracciones
- **Botones Primarios:** `rounded-full gradient-primary text-white shadow-md hover:opacity-90`
- **Tarjetas:** `rounded-3xl border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- **Badges:** `rounded-full bg-purple-100 text-purple-700`

---

## âš™ï¸ 9. Matriz de MÃ³dulos de AutomatizaciÃ³n

El ecosistema completo de **Pariendo Ideas** abarca 14 mÃ³dulos funcionales documentados en [`MODULOS_AUTOMATIZACION_PARIENDO_IDEAS.md`](MODULOS_AUTOMATIZACION_PARIENDO_IDEAS.md):

| # | MÃ³dulo | Objetivo Principal | Nivel de AutomatizaciÃ³n |
|---|---|---|---|
| **01** | **Auth & Onboarding** | Registro, verificaciÃ³n de identidad y perfilado por etapas. | 100% Automatizado |
| **02** | **IMPULSO (Renacer)** | Postulaciones a becas, scoring socioeconÃ³mico y seguimiento psicosocial. | 85% Automatizado |
| **03** | **Kit E-Commerce** | CreaciÃ³n de tiendas online, catÃ¡logo, checkout y control de inventario. | 95% Automatizado |
| **04** | **Punto de Venta (POS)** | Venta fÃ­sica rÃ¡pida, recibos por WhatsApp y sincronizaciÃ³n offline. | 90% Automatizado |
| **05** | **Marketplace B2C/C2C** | Directorio de servicios femeninos, cotizaciones y valoraciones. | 90% Automatizado |
| **06** | **Academia LMS** | Lecciones en video/guÃ­as, control de avance y certificados con QR. | 100% Automatizado |
| **07** | **Motor de MentorÃ­as** | Match inteligente mentora-alumna, calendario sincrÃ³nico y recordatorios. | 95% Automatizado |
| **08** | **Eventos & Ticketing** | Entradas P.I. Fest, emisiÃ³n de credenciales QR y check-in mÃ³vil. | 100% Automatizado |
| **09** | **Comunidad & GamificaciÃ³n** | CÃ­rculos de apoyo, insignias por logros y muro de networking. | 80% Automatizado |
| **10** | **Resource Hub** | Descarga segura de plantillas, contratos y guÃ­as segÃºn membresÃ­a. | 100% Automatizado |
| **11** | **Billing & Subscriptions** | Cobros recurrentes, pasarelas locales/internacionales y facturaciÃ³n. | 100% Automatizado |
| **12** | **Portal Aliados B2B** | MÃ©tricas en tiempo real de impacto social para patrocinadores. | 95% Automatizado |
| **13** | **CRM WhatsApp & Push** | Disparo de mensajes transaccionales y secuencias de retenciÃ³n. | 100% Automatizado |
| **14** | **Super Admin CMS** | GestiÃ³n integral de usuarias, contenidos, moderaciÃ³n y analÃ­ticas. | 80% Automatizado |

---

## ðŸ“ 10. Estructura del Proyecto

```text
Webpariendoideas/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ Mentores/                  # FotografÃ­as oficiales de los 8 mentores
â”‚   â”œâ”€â”€ logosaliados/              # Logotipos de las 11 organizaciones aliadas
â”‚   â”œâ”€â”€ og-image.jpg               # Tarjeta OpenGraph / WhatsApp preview
â”‚   â””â”€â”€ logopariendoideas.png      # Identidad visual oficial
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ dashboard/             # Portal privado de la emprendedora (/dashboard)
â”‚   â”‚   â”œâ”€â”€ gestor-pariendo-admin/ # Panel administrativo CMS (/gestor-pariendo-admin)
â”‚   â”‚   â”œâ”€â”€ globals.css            # Estilos globales y tokens Tailwind v4
â”‚   â”‚   â”œâ”€â”€ layout.tsx             # Metadatos SEO, OpenGraph y fuentes
â”‚   â”‚   â””â”€â”€ page.tsx               # Ensamblaje principal de la Landing Page
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ admin/                 # MÃ³dulos del CMS (Slider, Aliados, Postulaciones, Media)
â”‚   â”‚   â”œâ”€â”€ layout/                # Navbar, Footer y utilidades de scroll
â”‚   â”‚   â”œâ”€â”€ sections/              # Todas las secciones de la Landing Page
â”‚   â”‚   â””â”€â”€ ui/                    # Componentes reutilizables shadcn/ui + Radix
â”‚   â””â”€â”€ lib/
â”‚       â”œâ”€â”€ cms-service.ts         # Servicios reactivos de Firestore y Storage
â”‚       â”œâ”€â”€ constants.ts           # Rutas centralizadas hacia Onboarding
â”‚       â”œâ”€â”€ firebase.ts            # InicializaciÃ³n de Firebase Client SDK
â”‚       â””â”€â”€ utils.ts               # Helpers de clases y formato
â”œâ”€â”€ firebase.json                  # ConfiguraciÃ³n de Firebase Hosting y Firestore
â”œâ”€â”€ firestore.rules                # Reglas de seguridad de Cloud Firestore
â”œâ”€â”€ next.config.ts                 # ConfiguraciÃ³n de Next.js (output: export)
â””â”€â”€ package.json                   # Scripts y dependencias del proyecto
```

---

## ðŸš€ 11. InstalaciÃ³n, EjecuciÃ³n y Despliegue

### Prerrequisitos
- **Node.js** `>= 20.x` (o **Bun**)
- **Firebase CLI** (`npm install -g firebase-tools`) para despliegues en producciÃ³n

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone https://github.com/gointeraction/PaginaPariendoideasNew.git
cd PaginaPariendoideasNew
npm install
```

### 2. Variables de Entorno (`.env`)
El proyecto utiliza las credenciales pÃºblicas del proyecto de Firebase `webperiendoideas`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSy..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="webperiendoideas.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="webperiendoideas"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="webperiendoideas.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="109062625799"
NEXT_PUBLIC_FIREBASE_APP_ID="1:109062625799:web:95ee00f31db1e6da6328a2"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-L189E1NDVR"
```

### 3. Ejecutar servidor de desarrollo local
```bash
npm run dev
```
- **Landing Principal:** `http://localhost:3000`
- **Portal Emprendedora:** `http://localhost:3000/dashboard`
- **Gestor Admin CMS:** `http://localhost:3000/gestor-pariendo-admin`

### 4. Compilar y desplegar en producciÃ³n (Firebase Hosting)
```bash
# Generar build estÃ¡tico en la carpeta /out
npm run build

# Compilar y desplegar directamente a Firebase Hosting
npm run deploy
```

---

Â© **Pariendo Ideas** â€” *De la resiliencia al liderazgo empresarial.*
