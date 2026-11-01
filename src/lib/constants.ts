/**
 * Enlaces externos y rutas del ecosistema Pariendo Ideas
 */

export const ONBOARDING_BASE_URL = 'https://onboarding.pariendoideas.com'

export const ONBOARDING_URLS = {
  // Becas y Solicitud de Beca de Reconstrucción
  becas: `${ONBOARDING_BASE_URL}/?programa=becas`,
  
  // Activar Kit Mujer CEO
  kitMujerCeo: `${ONBOARDING_BASE_URL}/?programa=kit-mujer-ceo`,
  
  // Comenzar Aceleración Digital y Mentorías
  aceleracion: `${ONBOARDING_BASE_URL}/?programa=aceleracion`,
  mentoria: `${ONBOARDING_BASE_URL}/?programa=aceleracion`,

  // Submódulos específicos de Impulso
  psicosocial: `${ONBOARDING_BASE_URL}/?programa=psicosocial`,
  reconstruccionDigital: `${ONBOARDING_BASE_URL}/?programa=aceleracion`,
  mentoriaBecas: `${ONBOARDING_BASE_URL}/?programa=becas`,

  // Módulos específicos de Kit Mujer CEO
  ecommerce: `${ONBOARDING_BASE_URL}/?programa=kit-mujer-ceo`,
  pos: `${ONBOARDING_BASE_URL}/?programa=kit-mujer-ceo`,
  marketplace: `${ONBOARDING_BASE_URL}/?programa=kit-mujer-ceo`,

  // Portal y Autenticación
  login: `${ONBOARDING_BASE_URL}/auth/login`,
  registro: `${ONBOARDING_BASE_URL}/auth/register`,
}

export const getMentorBookingUrl = (mentorName: string) => {
  const slug = mentorName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
  return `${ONBOARDING_URLS.aceleracion}&mentora=${slug}`
}
