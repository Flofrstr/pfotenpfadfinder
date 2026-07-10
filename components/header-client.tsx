'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

import { ModeToggle } from '@/components/mode-toggle'

const loadMobileMenuDrawer = () => import('@/components/mobile-menu-drawer')
const MobileMenuDrawer = dynamic(loadMobileMenuDrawer, { ssr: false })

interface HeaderClientProps {
  availability: {
    headline: string
    detail: string
  }
}

const NAVIGATION = [
  { href: '/#about', label: 'Über mich' },
  { href: '/#warum-ich', label: 'Mein Service' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#kontakt', label: 'Kontakt' },
] as const

export function HeaderClient({ availability }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasOpenedMenu, setHasOpenedMenu] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const preloadMobileMenu = () => {
    void loadMobileMenuDrawer()
  }

  const openMenu = () => {
    setHasOpenedMenu(true)
    setIsMenuOpen(true)
  }

  const closeMenu = useCallback((returnFocus = true) => {
    setIsMenuOpen(false)
    if (returnFocus) requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [])

  return (
    <>
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
        {isBannerVisible && (
          <div className="border-b border-rose-800/40 bg-rose-950/50 text-rose-100 dark:bg-rose-950/50 dark:text-rose-100">
            <div className="container flex items-center justify-between gap-3 py-3">
              <div className="flex flex-1 items-center justify-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                </span>
                <p className="text-center text-xs font-medium sm:text-sm">
                  <span className="font-bold">{availability.headline}</span>
                  <span className="mx-1.5 hidden sm:inline">|</span>
                  <br className="sm:hidden" />
                  {availability.detail}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBannerVisible(false)}
                className="shrink-0 rounded p-1 text-rose-400/60 transition-colors hover:text-rose-200"
                aria-label="Verfügbarkeitshinweis schließen"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
        <div className="container flex h-16 items-center">
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

          <nav
            aria-label="Hauptnavigation"
            className="hidden flex-1 items-center justify-center lg:flex"
          >
            <div className="flex items-center gap-6">
              {NAVIGATION.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden lg:block">
              <ModeToggle />
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="hover:bg-accent/10 rounded-md p-2 transition-colors lg:hidden"
              onClick={isMenuOpen ? () => closeMenu() : openMenu}
              onPointerEnter={preloadMobileMenu}
              onFocus={preloadMobileMenu}
              aria-label={isMenuOpen ? 'Mobiles Menü schließen' : 'Mobiles Menü öffnen'}
              aria-controls="mobile-navigation-dialog"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {hasOpenedMenu && <MobileMenuDrawer isOpen={isMenuOpen} onClose={closeMenu} />}
    </>
  )
}
