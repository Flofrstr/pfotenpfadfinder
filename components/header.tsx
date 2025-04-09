"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-gluten text-2xl font-bold">Pfotenpfadfinder</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Startseite
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Leistungen
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              Über uns
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Kontakt
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
} 