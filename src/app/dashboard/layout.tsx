import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panel de emprendedora — Pariendo Ideas',
  description: 'Panel privado de la comunidad Pariendo Ideas.',
  robots: { index: false, follow: false },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
