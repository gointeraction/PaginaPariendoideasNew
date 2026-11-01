import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    const missingFields: string[] = []
    if (!name || typeof name !== 'string' || !name.trim()) missingFields.push('nombre')
    if (!email || typeof email !== 'string' || !email.trim()) missingFields.push('correo electrónico')
    if (!subject || typeof subject !== 'string' || !subject.trim()) missingFields.push('asunto')
    if (!message || typeof message !== 'string' || !message.trim()) missingFields.push('mensaje')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Los siguientes campos son obligatorios: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    const trimmedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'El formato del correo electrónico no es válido' },
        { status: 400 }
      )
    }

    await db.contact.create({
      data: {
        name: name.trim(),
        email: trimmedEmail,
        subject: subject.trim(),
        message: message.trim(),
      },
    })

    return NextResponse.json(
      { success: true, message: '¡Mensaje enviado! Nos pondremos en contacto contigo pronto.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API]', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Intenta de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
