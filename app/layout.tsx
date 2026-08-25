import type React from 'react'
import type { Metadata } from 'next'
import { Gluten, Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SITE_DATA } from '@/lib/site-data'

const montserrat = Montserrat({
  subsets: ['latin'],
  preload: false,
  variable: '--font-montserrat',
})

const gluten = Gluten({
  subsets: ['latin'],
  weight: '700',
  preload: false,
  variable: '--font-gluten',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  applicationName: SITE_DATA.name,
  title: {
    default: SITE_DATA.name,
    template: `%s | ${SITE_DATA.name}`,
  },
  authors: [{ name: `${SITE_DATA.owner} – ${SITE_DATA.name}` }],
  creator: SITE_DATA.name,
  publisher: SITE_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${gluten.variable} bg-background font-sans text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
