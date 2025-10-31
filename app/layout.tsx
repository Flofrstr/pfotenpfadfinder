import type React from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Montserrat, Gluten } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

// Dynamically import Toaster as it's not needed immediately
const Toaster = dynamic(() =>
  import('@/components/ui/sonner').then(mod => ({ default: mod.Toaster })),
)

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const gluten = Gluten({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-gluten',
  display: 'swap',
  preload: true,
  fallback: ['cursive', 'system-ui'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pfotenpfadfinder-hundebetreuung.de'),
  title: 'Hundebetreuung Gevelsberg | Pfotenpfadfinder - Gassi-Service & Hundesitting',
  description:
    'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung & Urlaubsbetreuung für Ihren Hund. Liebevoll und zuverlässig.',
  keywords: [
    'Hundebetreuung Gevelsberg',
    'Hundebetreuung',
    'Gassi-Service',
    'Gassi-Service Gevelsberg',
    'Hundesitting',
    'Hundesitting Gevelsberg',
    'Gevelsberg',
    'Schwelm',
    'Ennepetal',
    'Witten',
    'Hasslinghausen',
    'Wetter Ruhr',
    'Sprockhövel',
    'Wuppertal',
    'Hagen',
    'Tagesbetreuung Hund',
    'Urlaubsbetreuung Hund',
    'Hund Gassi gehen',
    'Hundebetreuung Ennepe-Ruhr-Kreis',
  ],
  authors: [{ name: 'Michelle Wattenberg - Pfotenpfadfinder' }],
  creator: 'Pfotenpfadfinder',
  publisher: 'Pfotenpfadfinder',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pfotenpfadfinder-hundebetreuung.de',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://pfotenpfadfinder-hundebetreuung.de',
    siteName: 'Pfotenpfadfinder',
    title: 'Hundebetreuung Gevelsberg | Pfotenpfadfinder - Gassi-Service & Hundesitting',
    description:
      'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung & Urlaubsbetreuung für Ihren Hund. Liebevoll und zuverlässig.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hundebetreuung Gevelsberg | Pfotenpfadfinder - Gassi-Service & Hundesitting',
    description:
      'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung & Urlaubsbetreuung für Ihren Hund.',
  },
}

// JSON-LD Structured Data für Google Search Logo
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pfotenpfadfinder - Hundebetreuung Gevelsberg',
  url: 'https://pfotenpfadfinder-hundebetreuung.de',
  logo: 'https://pfotenpfadfinder-hundebetreuung.de/pfotenpfadfinder-vorschau.png',
  description:
    'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung und Urlaubsbetreuung für Ihren Hund. Liebevoll und zuverlässig.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Geerstraße 34',
    addressLocality: 'Gevelsberg',
    postalCode: '58285',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+4915772199639',
    contactType: 'customer service',
    availableLanguage: ['German', 'de'],
    email: 'pfotenpfadfinder@gmail.com',
  },
  sameAs: ['https://www.instagram.com/pfotenpfadfinder'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: 24 33% 94%;
                --foreground: 32 67% 16%;
                --card: 0 0% 100%;
                --card-foreground: 32 67% 16%;
                --popover: 0 0% 100%;
                --popover-foreground: 32 67% 16%;
                --primary: 329 27% 60%;
                --primary-foreground: 329 27% 98%;
                --secondary: 32 33% 85%;
                --secondary-foreground: 32 67% 25%;
                --muted: 32 33% 90%;
                --muted-foreground: 32 33% 40%;
                --accent: 329 27% 60%;
                --accent-foreground: 329 27% 10%;
                --destructive: 0 84.2% 60.2%;
                --destructive-foreground: 0 0% 98%;
                --border: 32 33% 80%;
                --input: 32 33% 80%;
                --ring: 329 27% 60%;
                --radius: 0.5rem;
              }
              .dark {
                --background: 32 67% 8%;
                --foreground: 24 33% 94%;
                --card: 32 67% 12%;
                --card-foreground: 24 33% 94%;
                --popover: 32 67% 12%;
                --popover-foreground: 24 33% 94%;
                --primary: 329 27% 60%;
                --primary-foreground: 329 27% 98%;
                --secondary: 32 67% 16%;
                --secondary-foreground: 24 33% 85%;
                --muted: 32 67% 20%;
                --muted-foreground: 32 33% 60%;
                --accent: 329 27% 60%;
                --accent-foreground: 329 27% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 0 0% 98%;
                --border: 32 67% 20%;
                --input: 32 67% 20%;
                --ring: 329 27% 60%;
              }
              body { margin: 0; }
              * { box-sizing: border-box; }
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${gluten.variable} bg-background text-foreground font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
