"use client"

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2 flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/womenWithDogs.svg"
              alt="Pfotenpfadfinder Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="font-gluten text-xl sm:text-2xl font-bold">PFOTENPFADFINDER</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Leistungen
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Über uns
            </Link>
            <Link href="#kontakt" className="text-sm font-medium transition-colors hover:text-primary">
              Kontakt
            </Link>
          </div>
        </nav>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <ModeToggle />
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="#kontakt"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 

