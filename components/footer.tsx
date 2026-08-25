import Link from 'next/link'
import { PawPrintIcon as Paw } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full border-t border-foreground/10 bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Paw className="h-5 w-5 text-accent" />
            <p className="text-sm text-foreground/70">
              © {currentYear} Pfotenpfadfinder. Alle Rechte vorbehalten.
            </p>
          </div>

          <nav aria-label="Rechtliches und Kontakt" className="flex gap-4 sm:gap-6">
            <Link href="/impressum" className="text-sm transition-colors hover:text-accent">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm transition-colors hover:text-accent">
              Datenschutz
            </Link>
            <Link href="/#kontakt" className="text-sm transition-colors hover:text-accent">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
