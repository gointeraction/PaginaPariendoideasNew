import type { Metadata } from "next";
import { Lora, Montserrat, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SubscribeModalProvider } from "@/components/layout/SubscribeModalProvider";

// Tipografía del manual de marca: Montserrat (cuerpo) + Lora (titulares)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pariendo Ideas — Hub de Aceleramiento Femenino | Venezuela & LATAM",
  description:
    "Plataforma integral de aceleramiento digital femenino. Impulso, Kit Mujer CEO y Aceleración Digital para emprendedoras, CEO y profesionales en reconversión digital.",
  keywords: [
    "Pariendo Ideas",
    "aceleramiento femenino",
    "mujeres emprendedoras",
    "Venezuela",
    "LATAM",
    "mentoría femenina",
    "Kit Mujer CEO",
    "Programa Impulso",
    "becas emprendimiento",
    "ecommerce mujeres",
  ],
  authors: [{ name: "Pariendo Ideas" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo-pariendo-symbol.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL('https://pariendoideas.com'),
  alternates: {
    canonical: 'https://pariendoideas.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Pariendo Ideas — Hub de Aceleramiento Femenino",
    description:
      "Primer Hub de Aceleramiento Femenino de Latinoamérica: becas, estructura, mentoría 1:1 y comercio digital para mujeres emprendedoras en Venezuela y LATAM.",
    url: "https://pariendoideas.com",
    siteName: "Pariendo Ideas",
    images: [
      {
        url: "/logo-pariendo-full.png",
        width: 1618,
        height: 1261,
        alt: "Pariendo Ideas — Hub de Aceleramiento Femenino",
      },
    ],
    type: "website",
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pariendo Ideas — Hub de Aceleramiento Femenino",
    description:
      "Primer Hub de Aceleramiento Femenino de Latinoamérica: becas, estructura, mentoría 1:1 y comercio digital para emprendedoras.",
    images: ["/logo-pariendo-full.png"],
  },
};

/** Datos estructurados (SEO semántico para buscadores e IA) */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pariendoideas.com/#organization",
      name: "Pariendo Ideas",
      url: "https://pariendoideas.com/",
      logo: "https://pariendoideas.com/logo-pariendo-full.png",
      description:
        "Primer Hub de Aceleramiento Femenino de Latinoamérica: becas, estructura, mentoría 1:1 y comercio digital para mujeres emprendedoras.",
      email: "hola@pariendoideas.com",
      areaServed: ["Venezuela", "LATAM"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Caracas",
        addressCountry: "VE",
      },
      sameAs: [
        "https://www.instagram.com/pariendoideas",
        "https://www.linkedin.com/company/pariendoideas",
        "https://www.facebook.com/pariendoideas",
        "https://www.youtube.com/@pariendoideas",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pariendoideas.com/#website",
      url: "https://pariendoideas.com/",
      name: "Pariendo Ideas",
      inLanguage: "es-VE",
      publisher: { "@id": "https://pariendoideas.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pariendoideas.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      serviceType: "Aceleramiento de negocios para mujeres emprendedoras",
      name: "Hub de Aceleramiento Femenino Pariendo Ideas",
      provider: { "@id": "https://pariendoideas.com/#organization" },
      areaServed: "Latinoamérica",
      url: "https://pariendoideas.com/",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Programas de aceleramiento y becas",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Programa Impulso — Becas del 100%" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kit Mujer CEO — E-commerce y marca digital" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mentoría 1:1 y Red de Mentorías" } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${montserrat.variable} ${lora.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SubscribeModalProvider>{children}</SubscribeModalProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
