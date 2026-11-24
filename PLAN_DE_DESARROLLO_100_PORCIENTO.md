# ðŸ“‹ Plan Maestro Integral de Desarrollo: Pariendo Ideas al 100%

> **DiagnÃ³stico y Estado del Ecosistema (Septiembre 2026):**  
> La plataforma principal estÃ¡ desarrollada en Next.js 16 (Turbopack, Tailwind CSS v4, Framer Motion, Lucide Icons) y desplegada en producciÃ³n en Firebase Hosting sobre el dominio principal `pariendoideas.com`.  
> Todas las secciones y llamados a la acciÃ³n (CTAs) de la Landing Page han sido unificados y conectados directamente a la plataforma de diagnÃ³stico y registro en **`https://onboarding.pariendoideas.com/`** mediante parÃ¡metros de ruta especÃ­ficos.  
> Este documento detalla la arquitectura, el inventario de secciones activas, el estado de implementaciÃ³n y la hoja de ruta tÃ©cnica para alcanzar la operatividad total del ecosistema digital.

---

## 1. ðŸ” AuditorÃ­a de Estado: Implementado vs. Requerido

| Ãrea / Componente | Estado Actual en ProducciÃ³n | FunciÃ³n & Destino en Onboarding |
|---|---|---|
| **Navbar & Cabecera** | âœ… 100% Activo y Responsive | NavegaciÃ³n suave y botÃ³n "Solicitar Beca" a `?programa=becas` (enlace "Iniciar sesiÃ³n" ocultado por directriz comercial) |
| **Slider Principal (`MainSlider`)** | âœ… 100% Activo (3 slides rotativos) | Slide 1 âž” `?programa=becas`<br>Slide 2 âž” `?programa=kit-mujer-ceo`<br>Slide 3 âž” `?programa=aceleracion` |
| **Hero Secundario** | âŒ Ocultado / Removido | Eliminado para evitar duplicidad de contenido con el `MainSlider` |
| **Marquesina de Herramientas (`TrustBar`)** | âœ… 100% Actualizado | Marquee con Google Cloud, Firebase, Cloudflare, WhatsApp Business, Radar, LandiaAI, Sellibri, Avila Pay, GoAgente IA, BBM Intelligent |
| **MÃ³dulos Core (`Modules`)** | âœ… 100% Vinculado | Tarjetas de Impulso (`becas`), Kit Mujer CEO (`kit-mujer-ceo`) y AceleraciÃ³n (`aceleracion`) |
| **Programa Impulso (`ImpulsoProgram`)** | âœ… 100% Actualizado con nuevo copy | 3 submÃ³dulos + bloque "Â¿CÃ³mo funciona?" con los 3 pasos hacia la optimizaciÃ³n y financiamiento flexible |
| **Kit Mujer CEO (`KitMujerCEO`)** | âœ… 100% Actualizado | 3 Cuadros por etapas (Semilla, Temprana, Marketplace) + 8 CategorÃ­as + Red de Mujeres LÃ­deres en Sectores Clave |
| **Precios y MembresÃ­as (`Pricing`)** | âœ… 100% Vinculado | Plan Semilla (`becas`), Plan Pro (`kit-mujer-ceo`) y Plan Elite (`aceleracion`) |
| **MentorÃ­as 1:1 (`Mentorship`)** | âœ… 100% Activo e Interactivo | Carrusel con los 8 Mentores Oficiales (fotos de estudio, sin estrellas, nombres y especialidades oficiales) + agendamiento directo |
| **Tu Camino (`Journey`)** | âœ… 100% Actualizado | Los 4 pasos oficiales (PostulaciÃ³n, DiagnÃ³stico, Aceleramiento con Kit CEO, Egreso con aval Cavecom-e) |
| **Historias que Inspiran (`Testimonials`)** | âœ… 100% Actualizado | Titular oficial de mujeres exitosas y resilientes + botones "Historias que inspiran" y "Ãšnete ya" |
| **Aliados EstratÃ©gicos (`Allies`)** | âœ… 100% Actualizado (11 Aliados) | Tarjetas limpias (isotipo + nombre) de las 11 empresas aliadas, listas para carga de logotipos |
| **Llamado de Cierre (`ScholarshipCTA`)** | âœ… 100% Actualizado | Tarjeta oficial de Onboarding y DiagnÃ³stico inteligente con IA que sustituye al formulario mock |
| **Eventos (`Events`)** | â¸ Ocultado temporalmente | Ocultado por solicitud comercial para concentrar el trÃ¡fico en Onboarding |
| **EstadÃ­sticas de Impacto (`ImpactStats`)** | â¸ Ocultado temporalmente | Ocultado por solicitud comercial para mantener la pÃ¡gina Ã¡gil y directa |

---

## 2. ðŸ”— Mapeo Integral de Enlaces a la Plataforma de Onboarding

Todos los accesos estÃ¡n centralizados en [`src/lib/constants.ts`](file:///c:/Users/IAEGEA/Webpariendoideas/src/lib/constants.ts) apuntando a la plataforma `https://onboarding.pariendoideas.com`:

```
[PLATAFORMA ONBOARDING: https://onboarding.pariendoideas.com]
â”‚
â”œâ”€â”€ PROGRAMA BECAS E IMPULSO
â”‚   â””â”€â”€ /?programa=becas
â”‚       â”œâ”€â”€ BotÃ³n "Solicitar Beca" (Navbar desktop y mÃ³vil)
â”‚       â”œâ”€â”€ Slide 1 del Slider Principal
â”‚       â”œâ”€â”€ Tarjeta "Programa IMPULSO" (MÃ³dulos)
â”‚       â”œâ”€â”€ SubmÃ³dulos "Psicosocial" y "MentorÃ­a 1:1"
â”‚       â”œâ”€â”€ Plan Semilla (SecciÃ³n Pricing)
â”‚       â”œâ”€â”€ BotÃ³n de Proceso ("Tres pasos para iniciar tu reconstrucciÃ³n")
â”‚       â”œâ”€â”€ BotÃ³n "Ãšnete ya" (Historias que inspiran)
â”‚       â””â”€â”€ Tarjeta Principal de Onboarding (SecciÃ³n Cierre Beca)
â”‚
â”œâ”€â”€ PROGRAMA KIT MUJER CEO
â”‚   â””â”€â”€ /?programa=kit-mujer-ceo
â”‚       â”œâ”€â”€ Slide 2 del Slider Principal
â”‚       â”œâ”€â”€ Tarjeta "Kit Mujer CEO" (MÃ³dulos)
â”‚       â”œâ”€â”€ Plan Pro (SecciÃ³n Pricing)
â”‚       â”œâ”€â”€ Cuadro 1: Etapa Semilla (?programa=kit-mujer-ceo&etapa=semilla)
â”‚       â”œâ”€â”€ Cuadro 2: Etapa Temprana (?programa=kit-mujer-ceo&etapa=temprana)
â”‚       â”œâ”€â”€ Cuadro 3: Canales y Marketplace (?programa=kit-mujer-ceo&etapa=marketplace)
â”‚       â”œâ”€â”€ 8 CategorÃ­as del Ecosistema (?programa=kit-mujer-ceo&sector=[sector])
â”‚       â”œâ”€â”€ Red de Mujeres LÃ­deres: Sectores Clave (Estilo de Vida, ProducciÃ³n, Servicios)
â”‚       â””â”€â”€ BotÃ³n "Cobrar en POS"
â”‚
â”œâ”€â”€ PROGRAMA ACELERACIÃ“N & MENTORÃAS
â”‚   â””â”€â”€ /?programa=aceleracion
â”‚       â”œâ”€â”€ Slide 3 del Slider Principal
â”‚       â”œâ”€â”€ Tarjeta "AceleraciÃ³n Digital" (MÃ³dulos)
â”‚       â”œâ”€â”€ Plan Elite (SecciÃ³n Pricing)
â”‚       â”œâ”€â”€ BotÃ³n "Comenzar aceleraciÃ³n" (Banner Matching de MentorÃ­as)
â”‚       â””â”€â”€ Agendamiento directo por mentora:
â”‚           â”œâ”€â”€ ?programa=aceleracion&mentora=carolina-perez
â”‚           â”œâ”€â”€ ?programa=aceleracion&mentora=valentina-rodriguez
â”‚           â”œâ”€â”€ ?programa=aceleracion&mentora=mariana-lopez
â”‚           â””â”€â”€ ?programa=aceleracion&mentora=daniela-torres
â”‚
â””â”€â”€ ACCESO ADMINISTRATIVO OCULTO (CMS)
    â””â”€â”€ /gestor-pariendo-admin (Protegido con Google Auth / Firebase y lista blanca de correos)
```

---

## 3. ðŸ¢ Directorio Oficial de Aliados EstratÃ©gicos

Las 11 organizaciones aliadas desplegadas en [`Allies.tsx`](file:///c:/Users/IAEGEA/Webpariendoideas/src/components/sections/Allies.tsx) en formato limpio para logotipos:

1. **Sellibri** (Comercio & Plataforma) â€” `/logosaliados/sellibri.png`
2. **Go Interaction Marketing** (Marketing & Crecimiento) â€” `/logosaliados/go-interaction.png`
3. **BBM Intelligent** (Sistemas Inteligentes & IA) â€” `/logosaliados/bbm-intelligent.png`
4. **Cocrea** (Arquitectura & Feng Shui) â€” `/logosaliados/cocrea.png`
5. **Disglobal** (Soluciones Comerciales) â€” `/logosaliados/disglobal.png`
6. **Dropanas** (LogÃ­stica & DistribuciÃ³n) â€” `/logosaliados/dropanas.png`
7. **Benflor** (Desarrollo Productivo) â€” `/logosaliados/benflor.png`
8. **Renacer Contable** (AsesorÃ­a Financiera & Contable) â€” `/logosaliados/renacer-contable.png`
9. **Arte Medio W3** (DiseÃ±o & Creatividad Digital) â€” `/logosaliados/arte-medio-w3.png`
10. **BestWay Marketing** (Estrategia Digital) â€” `/logosaliados/bestway-marketing.png`
11. **Gold Stetic Clinic** (Salud EstÃ©tica & Bienestar) â€” `/logosaliados/gold-stetic-clinic.png`

---

## 3.1 ðŸ‘¥ Directorio Oficial de Mentoras y Mentores

Los 8 profesionales de la red desplegados en el carrusel de [`Mentorship.tsx`](file:///c:/Users/IAEGEA/Webpariendoideas/src/components/sections/Mentorship.tsx):

1. **Dra. Heidy Oropeza** â€” MÃ©dica y Asesora de Bienestar Integrativo (`/mentores/1.png`)
2. **Prof. Wolfan BellorÃ­n** â€” Profesor de Oratoria y LocuciÃ³n (`/mentores/2.png`)
3. **Ing. Carlos Moreno** â€” Experto en Blockchain y Criptoactivos (`/mentores/3.png`)
4. **Lic. JosÃ© YvÃ¡n BohÃ³rquez** â€” Experto en Inteligencia Artificial (IA) (`/mentores/4.png`)
5. **Lic. Celsa Perez** â€” Experta en ProgramaciÃ³n NeurolingÃ¼Ã­stica (PNL) (`/mentores/5.png`)
6. **Lic. Soley Medina** â€” Licenciada en ContadurÃ­a y Finanzas (`/mentores/6.png`)
7. **Arq. Dioraisa Lo Martire** â€” Arquitecta Especialista en DiseÃ±o de Interiores y Feng Shui (`/mentores/7.png`)
8. **Abg. Wendy MÃ©ndez** â€” Abogada Especialista en Derecho Contractual (`/mentores/8.png`)

---

## 4. ðŸ› ï¸ Arquitectura TÃ©cnica del Ecosistema

```mermaid
graph TD
    subgraph Landing_PariendoIdeas [Frontend Landing: pariendoideas.com]
        LP1[MainSlider & Navbar]
        LP2[Programa Impulso]
        LP3[Kit Mujer CEO & Sectores]
        LP4[MentorÃ­as 1:1]
        LP5[Testimonios & Aliados]
        LP6[Tarjeta Onboarding CTA]
    end

    subgraph Subapp_Onboarding [Plataforma Onboarding: onboarding.pariendoideas.com]
        ON1[Auth & Login /auth/login]
        ON2[DiagnÃ³stico Inteligente en 5 Pasos]
        ON3[Algoritmo de ClasificaciÃ³n IA]
        ON4[AsignaciÃ³n de Beca / Financiamiento]
        ON5[ActivaciÃ³n de Kit Digital]
    end

    subgraph Backend_Firebase [Firebase Cloud Project: webperiendoideas]
        FB1[(Cloud Firestore)]
        FB2[Firebase Authentication]
        FB3[Firebase Storage]
        FB4[Cloud Hosting CDN]
    end

    LP1 -->|?programa=becas / kit / aceleracion| ON1
    LP2 -->|?programa=becas| ON2
    LP3 -->|?programa=kit-mujer-ceo| ON5
    LP4 -->|?programa=aceleracion&mentora=...| ON4
    LP6 -->|?programa=becas| ON2

    ON1 --> FB2
    ON2 --> FB1
    ON3 --> FB1
    ON4 --> FB1
    ON5 --> FB1
    Landing_PariendoIdeas --> FB4
```

---

## 5. ðŸ“… Hoja de Ruta para Operatividad al 100%

### Fase 1: Landing Page & Redirecciones (COMPLETADA âœ…)
- [x] CorrecciÃ³n de DNS y despliegue sobre `pariendoideas.com` en Firebase Hosting.
- [x] EliminaciÃ³n de bloques duplicados (`Hero`).
- [x] CentralizaciÃ³n de URLs de Onboarding con parÃ¡metros dinÃ¡micos (`src/lib/constants.ts`).
- [x] ConexiÃ³n de todos los botones y CTAs a `https://onboarding.pariendoideas.com/`.
- [x] Ocultamiento de mÃ³dulos secundarios (`Events` e `ImpactStats`).
- [x] Ocultamiento de botones pÃºblicos de "Iniciar sesiÃ³n" (Navbar, Footer, CTA).
- [x] ActualizaciÃ³n de textos oficiales de Programa Impulso, Kit Mujer CEO, 4 Pasos de Tu Camino y Testimonios.
- [x] Carga y simplificaciÃ³n de los 11 Aliados EstratÃ©gicos (Sellibri corregido).
- [x] ActualizaciÃ³n de la marquesina de herramientas tecnolÃ³gicas integradas.
- [x] **Manejador de Contenido (CMS) en ruta oculta `/gestor-pariendo-admin`** con autenticaciÃ³n Google y permisos de administrador (`pariendoideass@gmail.com`).
- [x] ConexiÃ³n reactiva en tiempo real de Slider Principal, Aliados y Marquesina al CMS vÃ­a Cloud Firestore.

### Fase 2: GestiÃ³n de Logotipos y Recursos Visuales (COMPLETADA âœ…)
- [x] GeneraciÃ³n y configuraciÃ³n oficial de tarjeta social OpenGraph / Twitter (`og-image.jpg`) para previsualizaciones en WhatsApp y redes.
- [x] HabilitaciÃ³n en el CMS de carga directa de URLs de logotipos oficiales (SVG / PNG) para los 11 aliados.
- [x] Soporte dinÃ¡mico de fallback visual con isotipos de alta gama en [`Allies.tsx`](file:///c:/Users/IAEGEA/Webpariendoideas/src/components/sections/Allies.tsx).

### Fase 3: SincronizaciÃ³n Bidireccional con la Plataforma de Onboarding (EN CURSO ðŸ”„)
- [x] ConfiguraciÃ³n de enlaces dinÃ¡micos con parÃ¡metros URL en la Landing (`?programa=...`, `&sector=...`, `&mentora=...`).
- [ ] VerificaciÃ³n de lectura de parÃ¡metros en `onboarding.pariendoideas.com` para preselecciÃ³n de flujo.
- [ ] Canal de retorno: BotÃ³n de regreso a la Landing o al Dashboard al culminar el diagnÃ³stico.

### Fase 4: Portales Privados y Dashboards (COMPLETADA âœ…)
- [x] **Portal de la Emprendedora (`/dashboard`):** Estado de postulaciÃ³n a beca (100% Otorgada), etapas de aceleraciÃ³n, acceso a Kit Mujer CEO y agenda de mentorÃ­a 1:1.
- [x] **Bandeja de Postulaciones en el CMS (`/gestor-pariendo-admin`):** MÃ©tricas en vivo de postuladas, filtros, aprobaciÃ³n de becas y botÃ³n directo de contacto por WhatsApp.
- [x] **Reglas de Seguridad Firestore (`firestore.rules`):** Blindaje de permisos de lectura y escritura restringido para `pariendoideass@gmail.com`.

---

*Ãšltima actualizaciÃ³n: Septiembre 2026 â€” Desplegado y verificado en producciÃ³n.*
