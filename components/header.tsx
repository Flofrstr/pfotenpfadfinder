import { HeaderClient } from '@/components/header-client'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_DATA } from '@/lib/site-data'

export function Header() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <HeaderClient availability={SITE_DATA.availability} />
    </ThemeProvider>
  )
}
