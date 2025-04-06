import Link from "next/link"
import { PawPrintIcon as Paw } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-foreground/10 py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Paw className="h-5 w-5 text-accent" />
            <p className="text-sm text-foreground/70">© {currentYear} Pfotenpfadfinder. Alle Rechte vorbehalten.</p>
          </div>

          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link href="#" className="text-sm hover:text-accent transition-colors">
              Datenschutz
            </Link>
            <Link href="#kontakt" className="text-sm hover:text-accent transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

