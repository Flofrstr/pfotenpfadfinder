'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand Name */}
        <div className="flex flex-1 items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/womenWithDogs.svg"
              alt="Pfotenpfadfinder Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-gluten text-xl font-bold sm:text-2xl">PFOTENPFADFINDER</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Leistungen
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Über mich
            </Link>
            <Link
              href="#kontakt"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Kontakt
            </Link>
          </div>
        </nav>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <ModeToggle />
          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 transition-colors hover:bg-accent/10 lg:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Leistungen
              </Link>
              <Link
                href="#about"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Über mich
              </Link>
              <Link
                href="#kontakt"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
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
