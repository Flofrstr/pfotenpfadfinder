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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
