"use client"

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
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
            <span className="font-gluten text-2xl font-bold">PFOTENPFADFINDER</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
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
        <div className="flex items-center justify-end flex-1">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
} 