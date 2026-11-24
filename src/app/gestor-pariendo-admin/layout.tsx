import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestor de contenido — Pariendo Ideas',
  description: 'Panel administrativo de contenido de Pariendo Ideas.',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
