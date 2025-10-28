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
  title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
  description:
    'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Ihrer Nähe. Wir kümmern uns um Ihren Vierbeiner, wenn Sie keine Zeit haben.',
  keywords: [
    'Hundebetreuung',
    'Gassi-Service',
    'Hundesitting',
    'Gevelsberg',
    'Schwelm',
    'Ennepetal',
    'Hasslinghausen',
    'Hundepsychologin',
    'Hundetrainerin',
    'professionelle Hundebetreuung',
    'Tagesbetreuung Hund',
    'Urlaubsbetreuung Hund',
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
    title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
    description:
      'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Gevelsberg, Schwelm, Ennepetal und Umgebung.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
    description: 'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Ihrer Nähe.',
  },
}

// JSON-LD Structured Data für Google Search Logo
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pfotenpfadfinder',
  url: 'https://pfotenpfadfinder-hundebetreuung.de',
  logo: 'https://pfotenpfadfinder-hundebetreuung.de/pfotenpfadfinder-vorschau.png',
  description:
    'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Gevelsberg, Schwelm, Ennepetal und Umgebung.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gevelsberg',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: 'German',
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
