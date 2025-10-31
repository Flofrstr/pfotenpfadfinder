import type React from 'react'
import type { Metadata } from 'next'
import { Montserrat, Gluten } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const gluten = Gluten({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-gluten',
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
