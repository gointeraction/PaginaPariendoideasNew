'use client'

import { useState, useEffect } from 'react'
import { firestore } from './firebase'
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { ONBOARDING_BASE_URL, ONBOARDING_URLS } from './constants'

export interface SlideItem {
  id: number
  tag: string
  badge: string
  title: string
  titleHighlight: string
  description: string
  primaryCtaText: string
  primaryCtaHref: string
  imageUrl?: string
  active?: boolean
}

export interface AllyItem {
  id: string
  name: string
  category: string
  logoUrl?: string
  active: boolean
}

export interface LandingPageContent {
  /** Versión del contenido local. Si Firestore tiene una versión anterior,
   *  se ignoran sus slides para no pisar los textos vigentes. */
  contentVersion?: number
  slides: SlideItem[]
  allies: AllyItem[]
  announcement?: {
    enabled: boolean
    text: string
    badge: string
    linkUrl: string
  }
  updatedAt?: string
  updatedBy?: string
}

export const ADMIN_EMAILS = [
  'pariendoideass@gmail.com',
]

export const DEFAULT_CMS_CONTENT: LandingPageContent = {
  contentVersion: 2,
  slides: [
    {
      id: 1,
      tag: 'Programa Impulso 2026',
      badge: 'Becas del 100% abiertas',
      title: 'Deja de ser una emprendedora invisible:',
      titleHighlight: 'conviértete en la dueña del mercado que te pertenece…',
      description:
        'Porque el talento ya lo tienes; solo necesitas la estructura, la fuerza y la red del Primer Hub de Aceleramiento femenino de Latinoamérica para escalar sin techos ni excusas.',
      primaryCtaText: 'Quiero ser parte',
      primaryCtaHref: ONBOARDING_BASE_URL,
      active: true,
    },
    {
      id: 2,
      tag: 'Kit Mujer CEO',
      badge: 'E-commerce & Marca Digital',
      title: 'Haz realidad tu sueño de Parir tu Gran Idea',
      titleHighlight: 'con un equipo que te acompaña y cree en tu potencial…',
      description:
        'Nunca te sentirás sola. Te acompañamos paso a paso en la estructuración, el diseño y tu modelo de negocio para escalar en el mercado digital.',
      primaryCtaText: 'Quiero ser parte',
      primaryCtaHref: ONBOARDING_BASE_URL,
      active: true,
    },
    {
      id: 3,
      tag: 'Red de Mentorías 1:1',
      badge: '+450 Mentoras Certificadas',
      title: 'Convierte tu idea en un negocio rentable y formalizado',
      titleHighlight: 'sin perderte en el camino.',
      description:
        'Porque tener una gran visión no basta; te damos la estructura, el acompañamiento estratégico y las herramientas del comercio digital para que tu emprendimiento despegue con bases sólidas desde el primer día.',
      primaryCtaText: 'Quiero ser parte',
      primaryCtaHref: ONBOARDING_BASE_URL,
      active: true,
    },
    {
      id: 4,
      tag: 'Emprendedora del Año',
      badge: '🚀 Del 19 de nov. 2026 al 19 de mar. 2027',
      title: 'Por el Día Internacional de la Mujer Emprendedora, en Pariendo Ideas celebramos tu talento.',
      titleHighlight: 'Postúlate como la Emprendedora del Año.',
      description: 'Gana premios, becas y potencia tu negocio. Porque juntas somos más.',
      primaryCtaText: '¡Postúlate ya!',
      primaryCtaHref: 'https://instagram.com/pariendoideas_',
      active: true,
    },
  ],
  allies: [
    {
      id: 'sellibri',
      name: 'Sellibri',
      category: 'Comercio & Plataforma',
      logoUrl: '/logosaliados/sellibri.png',
      active: true,
    },
    {
      id: 'go-interaction',
      name: 'Go Interaction Marketing',
      category: 'Marketing & Crecimiento',
      logoUrl: '/logosaliados/go-interaction.png',
      active: true,
    },
    {
      id: 'bbm-intelligent',
      name: 'BBM Intelligent',
      category: 'Sistemas Inteligentes & IA',
      logoUrl: '/logosaliados/bbm-intelligent.png',
      active: true,
    },
    {
      id: 'cocrea',
      name: 'Cocrea',
      category: 'Arquitectura & Feng Shui',
      logoUrl: '/logosaliados/cocrea.png',
      active: true,
    },
    {
      id: 'disglobal',
      name: 'Disglobal',
      category: 'Soluciones Comerciales',
      logoUrl: '/logosaliados/disglobal.png',
      active: true,
    },
    {
      id: 'dropanas',
      name: 'Dropanas',
      category: 'Logística & Distribución',
      logoUrl: '/logosaliados/dropanas.png',
      active: true,
    },
    {
      id: 'benflor',
      name: 'Benflor',
      category: 'Desarrollo Productivo',
      logoUrl: '/logosaliados/benflor.png',
      active: true,
    },
    {
      id: 'renacer-contable',
      name: 'Renacer Contable',
      category: 'Asesoría Financiera & Contable',
      logoUrl: '/logosaliados/renacer-contable.png',
      active: true,
    },
    {
      id: 'arte-medio-w3',
      name: 'Arte Medio W3',
      category: 'Diseño & Creatividad Digital',
      logoUrl: '/logosaliados/arte-medio-w3.png',
      active: true,
    },
    {
      id: 'bestway-marketing',
      name: 'BestWay Marketing',
      category: 'Estrategia Digital',
      logoUrl: '/logosaliados/bestway-marketing.png',
      active: true,
    },
    {
      id: 'gold-stetic-clinic',
      name: 'Gold Stetic Clinic',
      category: 'Salud Estética & Bienestar',
      logoUrl: '/logosaliados/gold-stetic-clinic.png',
      active: true,
    },
  ],
  announcement: {
    enabled: false,
    text: 'Convocatoria abierta para la nueva cohorte del Programa Impulso.',
    badge: 'Nuevo',
    linkUrl: ONBOARDING_URLS.becas,
  },
}

const STORAGE_KEY = 'pariendo_cms_content_cache_v2'
const FIRESTORE_COLLECTION = 'site_content'
const FIRESTORE_DOC = 'landing_page_config'

/**
 * Fusiona lo almacenado (Firestore / localStorage) con los defaults vigentes.
 * Si la versión guardada es anterior a la actual, se conservan los slides
 * locales para que una actualización de textos no quede tapada por datos viejos.
 */
function mergeWithDefaults(stored: Partial<LandingPageContent> | null | undefined): LandingPageContent {
  const data = (stored || {}) as LandingPageContent
  const isCurrentVersion = data.contentVersion === DEFAULT_CMS_CONTENT.contentVersion
  return {
    ...DEFAULT_CMS_CONTENT,
    ...data,
    contentVersion: DEFAULT_CMS_CONTENT.contentVersion,
    slides:
      isCurrentVersion && Array.isArray(data.slides) && data.slides.length > 0
        ? data.slides
        : DEFAULT_CMS_CONTENT.slides,
    allies:
      Array.isArray(data.allies) && data.allies.length > 0
        ? data.allies
        : DEFAULT_CMS_CONTENT.allies,
  }
}

/**
 * Hook reactivo para consumir el contenido de la landing con fallback inmediato y sincronización en tiempo real
 */
export function useLandingContent() {
  const [content, setContent] = useState<LandingPageContent>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(STORAGE_KEY)
        if (cached) {
          return mergeWithDefaults(JSON.parse(cached))
        }
      } catch (e) {
        console.warn('Error reading CMS cache:', e)
      }
    }
    return DEFAULT_CMS_CONTENT
  })

  useEffect(() => {
    try {
      const docRef = doc(firestore, FIRESTORE_COLLECTION, FIRESTORE_DOC)
      const unsubscribe = onSnapshot(
        docRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const merged = mergeWithDefaults(snapshot.data() as LandingPageContent)
            setContent(merged)
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
            } catch {}
          }
        },
        (error) => {
          console.warn('Firestore snapshot listener error (fallback active):', error)
        }
      )
      return () => unsubscribe()
    } catch (err) {
      console.warn('Firestore initialization error:', err)
    }
  }, [])

  return content
}

/**
 * Guardar contenido en Firestore y en localStorage
 */
export async function saveLandingContent(newContent: LandingPageContent, userEmail?: string): Promise<boolean> {
  const payload: LandingPageContent = {
    ...newContent,
    contentVersion: DEFAULT_CMS_CONTENT.contentVersion,
    updatedAt: new Date().toISOString(),
    updatedBy: userEmail || 'admin',
  }

  // Guardar en cache local de inmediato
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch (e) {
      console.warn('Local storage write failed:', e)
    }
  }

  // Persistir en Firestore
  try {
    const docRef = doc(firestore, FIRESTORE_COLLECTION, FIRESTORE_DOC)
    await setDoc(docRef, payload, { merge: true })
    return true
  } catch (error) {
    console.error('Error saving content to Firestore:', error)
    // Aún así se guardó localmente
    return false
  }
}

/**
 * Cargar contenido puntual
 */
export async function fetchCurrentLandingContent(): Promise<LandingPageContent> {
  try {
    const docRef = doc(firestore, FIRESTORE_COLLECTION, FIRESTORE_DOC)
    const snapshot = await getDoc(docRef)
    if (snapshot.exists()) {
      return mergeWithDefaults(snapshot.data() as LandingPageContent)
    }
  } catch (err) {
    console.warn('Failed to fetch from Firestore, using cache or defaults:', err)
  }

  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(STORAGE_KEY)
      if (cached) {
        return mergeWithDefaults(JSON.parse(cached))
      }
    } catch {}
  }

  return DEFAULT_CMS_CONTENT
}
