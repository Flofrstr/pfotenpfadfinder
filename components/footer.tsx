import Link from 'next/link'
import { PawPrintIcon as Paw } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-foreground/10 bg-background relative z-10 w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Paw className="text-accent h-5 w-5" />
            <p className="text-foreground/70 text-sm">
              © {currentYear} Pfotenpfadfinder. Alle Rechte vorbehalten.
            </p>
          </div>

          <nav className="flex gap-4 sm:gap-6">
            <Link href="/impressum" className="hover:text-accent text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="#kontakt" className="hover:text-accent text-sm transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
