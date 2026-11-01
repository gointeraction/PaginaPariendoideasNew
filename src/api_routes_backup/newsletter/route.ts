import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'El correo electrónico es obligatorio' },
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

    try {
      await db.newsletter.create({
        data: { email: trimmedEmail },
      })
    } catch (dbError: unknown) {
      // Handle duplicate email gracefully — Prisma throws P2002 for unique constraint violations
      if (
        dbError &&
        typeof dbError === 'object' &&
        'code' in dbError &&
        (dbError as { code: string }).code === 'P2002'
      ) {
        return NextResponse.json(
          { success: true, message: 'Ya estás suscrita a nuestro newsletter. ¡Gracias por tu interés!' },
          { status: 200 }
        )
      }
      throw dbError
    }

    return NextResponse.json(
      { success: true, message: '¡Gracias por suscribirte! Te mantendremos informada.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Newsletter API]', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Intenta de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
