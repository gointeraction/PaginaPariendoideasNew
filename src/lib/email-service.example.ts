/**
 * PLANTILLA de servicio de envío de correos transaccionales (API Radarsystems).
 *
 * ⚠️ Este archivo es una PLANTILLA para el repositorio (el real,
 * src/lib/email-service.ts, está en .gitignore porque contiene credenciales).
 * Para usarlo en local: copia este archivo como `email-service.ts` y rellena
 * las credenciales de tu cuenta Radarsystems.
 *
 * El sitio se exporta estático (output: "export"), por lo que NO existen
 * rutas /api en el servidor: el envío se hace por HTTPS POST multipart
 * directamente desde el navegador hacia la API transaccional.
 *
 * Tras cada registro se envían DOS correos:
 *  1. Bienvenida a la persona registrada, con botón hacia su onboarding.
 *  2. Aviso con los datos del lead a pariendoideass@gmail.com.
 *
 * Sin fallback: si la API falla se devuelve ok: false y el formulario
 * muestra el error (nada de mailto).
 */

import { ONBOARDING_BASE_URL } from './constants'

export const LEAD_EMAIL = 'pariendoideass@gmail.com'

/** Configuración de la API de envío de correos transaccionales (multipart/form-data). */
export const EMAIL_API = {
  /** URL del endpoint transaccional. */
  endpoint: 'https://api.radarsystems.net/api/send/mt',
  /** Método HTTP del envío. */
  method: 'POST' as const,
  /** Credenciales de la aplicación (REEMPLAZAR con las tuyas). */
  clientId: 'TU_CLIENT_ID',
  secretKey: 'TU_SECRET_KEY',
  /** Campaña y empresa destino (IDs de la cuenta Radarsystems). */
  idCampaign: 'TU_ID_CAMPAÑA',
  idCompany: 'TU_ID_EMPRESA',
}

export interface LeadData {
  nombre: string
  apellidos: string
  email: string
  telefono: string
  ecosistema: string
  programaBeca: string
}

export interface SendResult {
  ok: boolean
  via: 'api'
  message: string
}

/* =====================================================================
   Codificación de caracteres

   La API Radarsystems interpreta los campos como Latin-1 (los UTF-8 se
   recibían como "suscripciÃ³n"). Solución estándar que NO depende del
   charset que asuma el servidor:
    - body  → entidades HTML numéricas (ASCII puro) que cualquier cliente
              renderiza con acentos correctos.
    - affair → encoded-word RFC 2047 (=?UTF-8?B?..?=) que cualquier
              cliente de correo decodifica como UTF-8.
   ===================================================================== */

/** Convierte los caracteres no-ASCII en entidades HTML numéricas (&#243;). */
function toHtmlEntities(str: string): string {
  return str.replace(/[^\u0000-\u007F]/g, (c) => `&#${c.codePointAt(0)};`)
}

/**
 * Codifica un asunto como encoded-words RFC 2047 (=?UTF-8?B?..?=).
 * Cada word se limita a ≤75 caracteres (regla RFC 2047 §6.1.1): se parte
 * el texto en fragments de ≤45 bytes para que el base64 no exceda el tope;
 * los decoders estándar ignoran el espacio entre words consecutivos.
 */
function toMimeEncodedWord(str: string): string {
  const encoder = new TextEncoder()
  const encodeChunk = (chunk: string): string => {
    const bytes = encoder.encode(chunk)
    let binary = ''
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
    return `=?UTF-8?B?${btoa(binary)}?=`
  }
  const words: string[] = []
  let chunk = ''
  let chunkBytes = 0
  for (const ch of str) {
    const size = encoder.encode(ch).length
    if (chunk && chunkBytes + size > 45) {
      words.push(encodeChunk(chunk))
      chunk = ''
      chunkBytes = 0
    }
    chunk += ch
    chunkBytes += size
  }
  if (chunk) words.push(encodeChunk(chunk))
  return words.join(' ')
}

/** Asunto del correo de bienvenida. */
export const WELCOME_SUBJECT = '¡Bienvenidas a Pariendo Ideas, transformando realidades!'

/** Plantilla HTML del correo de bienvenida, con botón hacia el onboarding. */
export function buildWelcomeHtml(originUrl: string): string {
  const url = originUrl || ONBOARDING_BASE_URL
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
    <div style="background:#1e575b;padding:26px 28px;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.35;">¡Bienvenidas a Pariendo Ideas, transformando realidades!</h1>
    </div>
    <div style="padding:26px 28px;">
      <p style="margin:0 0 18px;color:#1f2937;font-size:15px;line-height:1.6;">
        Estamos muy contentos de que formes parte de este equipo. Para ir al siguiente nivel,
        necesitamos que completes el siguiente registro:
      </p>
      <p style="margin:0 0 26px;text-align:center;">
        <a href="${url}"
           style="display:inline-block;background:#1e575b;color:#ffffff;text-decoration:none;font-weight:bold;font-size:15px;padding:14px 32px;border-radius:999px;border:1px solid #e8a89a;">
          Completar mi registro
        </a>
      </p>
      <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.6;">
        Si el botón no funciona, copia y pega este enlace en tu navegador:
        <br /><a href="${url}" style="color:#1e575b;">${url}</a>
      </p>
    </div>
    <div style="background:#144044;padding:16px 28px;">
      <p style="margin:0;color:#ffffff;font-size:12px;opacity:.85;">
        Pariendo Ideas · Primer Hub de Aceleramiento Femenino de Latinoamérica
      </p>
    </div>
  </div>`
}

/** Plantilla HTML con la información enviada por el usuario (aviso al equipo). */
export function buildLeadHtml(lead: LeadData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#144044;background:#f8faf9;width:220px;">${label}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#1f2937;">${value || '—'}</td>
    </tr>`

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#1e575b;padding:22px 24px;border-radius:14px 14px 0 0;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;">Nueva suscripción — Pariendo Ideas</h1>
      <p style="margin:6px 0 0;color:#e8a89a;font-size:13px;">Formulario de registro (modal de suscripción)</p>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-top:none;">
      ${row('Nombre', lead.nombre)}
      ${row('Apellido', lead.apellidos)}
      ${row('Correo', lead.email)}
      ${row('Teléfono', lead.telefono)}
      ${row('Ecosistema', lead.ecosistema)}
      ${row('Programa de becas de interés', lead.programaBeca)}
      ${row('Fecha', new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' }))}
      ${row('Origen', 'https://pariendoideas.com (Modal de suscripción)')}
    </table>
    <p style="font-size:12px;color:#6b7280;padding:14px 4px 0;">
      Este mensaje fue generado automáticamente por el formulario de suscripción de la web Pariendo Ideas.
    </p>
  </div>`
}

/** Envía un correo transaccional vía API multipart/form-data. Lanza si falla. */
async function sendTransactional(to: string, affair: string, bodyHtml: string): Promise<void> {
  const fd = new FormData()
  fd.append('client_id', EMAIL_API.clientId)
  fd.append('secret_key', EMAIL_API.secretKey)
  // Asunto RFC 2047 (ASCII) y cuerpo en entidades HTML (ASCII): la API
  // convierte UTF-8 a Latin-1, así que no enviamos bytes UTF-8 crudos.
  fd.append('affair', toMimeEncodedWord(affair))
  fd.append('body', toHtmlEntities(bodyHtml))
  fd.append('email', to)
  fd.append('id_campaign', EMAIL_API.idCampaign)
  fd.append('id_company', EMAIL_API.idCompany)

  const res = await fetch(EMAIL_API.endpoint, {
    method: EMAIL_API.method,
    body: fd,
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`HTTP ${res.status}${detail ? ` — ${detail.slice(0, 200)}` : ''}`)
  }
}

/**
 * Envía los dos correos del registro:
 *  1. Bienvenida a la persona (con botón hacia su onboarding).
 *  2. Aviso con los datos del lead a pariendoideass@gmail.com.
 *
 * Sin fallback: cualquier fallo devuelve ok: false para que el
 * formulario muestre el error y la persona pueda reintentar.
 */
export async function sendLeadEmail(
  lead: LeadData,
  originUrl: string = ONBOARDING_BASE_URL
): Promise<SendResult> {
  try {
    await Promise.all([
      sendTransactional(lead.email, WELCOME_SUBJECT, buildWelcomeHtml(originUrl)),
      sendTransactional(
        LEAD_EMAIL,
        `Nueva suscripción: ${lead.nombre} ${lead.apellidos} — ${lead.ecosistema}`,
        buildLeadHtml(lead)
      ),
    ])
    return {
      ok: true,
      via: 'api',
      message: '¡Listo! Te enviamos un correo de bienvenida con el botón para continuar.',
    }
  } catch (error) {
    console.error('Fallo el envío de correos transaccionales:', error)
    return {
      ok: false,
      via: 'api',
      message:
        'No pudimos enviar los correos en este momento. Por favor, inténtalo de nuevo en unos minutos.',
    }
  }
}
