import type { MetadataRoute } from 'next'

// Requerido con output: "export" (exportación estática)
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://pariendoideas.com/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
