'use client'

import { useState, useEffect } from 'react'
import { firestore } from './firebase'
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { ONBOARDING_URLS } from './constants'

export interface SlideItem {
  id: number
  tag: string
  badge: string
  title: string
  titleHighlight: string
  description: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
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
  slides: SlideItem[]
  allies: AllyItem[]
  trustBar: string[]
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
  slides: [
    {
      id: 1,
      tag: 'Programa Renacer 2025',
      badge: 'Becas del 100% abiertas',
      title: '¡Acelera tu negocio',
      titleHighlight: 'con nuestra red sin barreras!',
      description:
        'Únete hoy, accede a becas de hasta el 100 % y descubre todos los beneficios que tenemos para ti.',
      primaryCtaText: 'Solicitar Beca',
      primaryCtaHref: ONBOARDING_URLS.becas,
      secondaryCtaText: 'Ver Programa Impulso',
      secondaryCtaHref: '#impulso',
      active: true,
    },
    {
      id: 2,
      tag: 'Kit Mujer CEO',
      badge: 'E-commerce & Marca Digital',
      title: 'Construye tu imperio digital',
      titleHighlight: 'sin complicaciones técnicas',
      description:
        'Todo lo que necesitas en un solo lugar: tienda online responsiva, pasarelas de pago integradas, catálogo digital interactivo y gestión automatizada de pedidos.',
      primaryCtaText: 'Activar mi Kit Mujer CEO',
      primaryCtaHref: ONBOARDING_URLS.kitMujerCeo,
      secondaryCtaText: 'Ver Precios y Planes',
      secondaryCtaHref: '#pricing',
      active: true,
    },
    {
      id: 3,
      tag: 'Aceleración & Mentorías',
      badge: 'Acompañamiento 1:1',
      title: 'Crece de la mano de quienes',
      titleHighlight: 'ya recorrieron el camino',
      description:
        'Mentorías personalizadas con empresarias líderes que te guiarán en estrategia de negocio, finanzas, marketing digital y escalabilidad.',
      primaryCtaText: 'Comenzar Aceleración',
      primaryCtaHref: ONBOARDING_URLS.aceleracion,
      secondaryCtaText: 'Conoce las Mentoras',
      secondaryCtaHref: '#mentorship',
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
  trustBar: [
    'Google Cloud',
    'Firebase',
    'Cloudflare',
    'WhatsApp Business',
    'Radar',
    'LandiaAI',
    'Sellibri',
    'Avila Pay',
    'GoAgente IA',
    'BBM Intelligent',
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
 * Hook reactivo para consumir el contenido de la landing con fallback inmediato y sincronización en tiempo real
 */
export function useLandingContent() {
  const [content, setContent] = useState<LandingPageContent>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(STORAGE_KEY)
        if (cached) {
          return { ...DEFAULT_CMS_CONTENT, ...JSON.parse(cached) }
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
            const data = snapshot.data() as LandingPageContent
            const merged = { ...DEFAULT_CMS_CONTENT, ...data }
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
      return { ...DEFAULT_CMS_CONTENT, ...(snapshot.data() as LandingPageContent) }
    }
  } catch (err) {
    console.warn('Failed to fetch from Firestore, using cache or defaults:', err)
  }

  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(STORAGE_KEY)
      if (cached) {
        return { ...DEFAULT_CMS_CONTENT, ...JSON.parse(cached) }
      }
    } catch {}
  }

  return DEFAULT_CMS_CONTENT
}
