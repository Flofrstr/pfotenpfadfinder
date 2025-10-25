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
  title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
  description:
    'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Ihrer Nähe. Wir kümmern uns um Ihren Vierbeiner, wenn Sie keine Zeit haben.',
  openGraph: {
    title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
    description:
      'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Ihrer Nähe. Wir kümmern uns um Ihren Vierbeiner, wenn Sie keine Zeit haben.',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/pfotenpfadfinder.jpg',
        width: 1200,
        height: 630,
        alt: 'Pfotenpfadfinder - Hundebetreuung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pfotenpfadfinder - Liebevolle & professionelle Hundebetreuung',
    description:
      'Professionelle und liebevolle Hundebetreuung und Gassi-Service in Ihrer Nähe. Wir kümmern uns um Ihren Vierbeiner, wenn Sie keine Zeit haben.',
    images: ['/pfotenpfadfinder.jpg'],
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
        className={`${montserrat.variable} ${gluten.variable} bg-background text-foreground font-sans`}
      >
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
