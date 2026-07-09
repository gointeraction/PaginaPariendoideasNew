import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
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
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Pariendo Ideas — Hub de Aceleramiento Femenino",
    description:
      "Acompañamiento psicosocial, reconstrucción digital acelerada y mentoría 1:1 para mujeres emprendedoras en Venezuela y LATAM.",
    siteName: "Pariendo Ideas",
    type: "website",
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pariendo Ideas — Hub de Aceleramiento Femenino",
    description:
      "Acompañamiento psicosocial, reconstrucción digital acelerada y mentoría 1:1 para mujeres emprendedoras.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
