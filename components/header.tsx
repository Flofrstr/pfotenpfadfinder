'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'motion/react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <>
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
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
                href="/#about"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Über mich
              </Link>
              <Link
                href="/#warum-ich"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Mein Service
              </Link>
              <Link
                href="/#preise"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Preise
              </Link>
              <Link
                href="/#faq"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/#kontakt"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden lg:block">
              <ModeToggle />
            </div>
            {/* Mobile Menu Button */}
            <button
              className="hover:bg-accent/10 rounded-md p-2 transition-colors lg:hidden"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => {
                setIsMenuOpen(false)
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="bg-background fixed top-0 right-0 z-50 h-full w-full shadow-xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header with logo and close button */}
                <div className="flex h-16 items-center border-b px-4">
                  <div className="flex flex-1 items-center gap-2">
                    <Image
                      src="/womenWithDogs.svg"
                      alt="Pfotenpfadfinder Logo"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span className="font-gluten text-xl font-bold">PFOTENPFADFINDER</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                    }}
                    className="hover:bg-accent/10 rounded-md p-2 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col px-6 py-8">
                  {/* Theme Toggle at Top */}
                  <div className="flex flex-col gap-3">
                    <span className="text-muted-foreground text-sm">Design</span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setTheme('light')
                        }}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 transition-colors ${
                          theme === 'light'
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary hover:bg-primary/10'
                        }`}
                      >
                        <Sun className="h-5 w-5" />
                        <span className="text-sm font-medium">Hell</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('dark')
                        }}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 transition-colors ${
                          theme === 'dark'
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary hover:bg-primary/10'
                        }`}
                      >
                        <Moon className="h-5 w-5" />
                        <span className="text-sm font-medium">Dunkel</span>
                      </button>
                      <button
                        onClick={() => {
                          setTheme('system')
                        }}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 transition-colors ${
                          theme === 'system'
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary hover:bg-primary/10'
                        }`}
                      >
                        <Monitor className="h-5 w-5" />
                        <span className="text-sm font-medium">Auto</span>
                      </button>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Nav Links at Bottom */}
                  <nav className="mb-16 flex flex-col gap-6">
                    <Link
                      href="/#about"
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      Über mich
                    </Link>
                    <Link
                      href="/#warum-ich"
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      Mein Service
                    </Link>
                    <Link
                      href="/#preise"
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      Preise
                    </Link>
                    <Link
                      href="/#faq"
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/#kontakt"
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      Kontakt
                    </Link>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
