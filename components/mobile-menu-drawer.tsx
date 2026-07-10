'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Monitor, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

interface MobileMenuDrawerProps {
  isOpen: boolean
  onClose: (returnFocus?: boolean) => void
}

const NAVIGATION = [
  { href: '/#about', label: 'Über mich' },
  { href: '/#warum-ich', label: 'Mein Service' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#kontakt', label: 'Kontakt' },
] as const

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const { setTheme, theme } = useTheme()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      )
      const first = focusableElements.at(0)
      const last = focusableElements.at(-1)
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => onClose()}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            id="mobile-navigation-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-background fixed top-0 right-0 z-50 h-full w-full shadow-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center border-b px-4">
                <div className="flex flex-1 items-center gap-2">
                  <Image
                    src="/womenWithDogs.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <span id="mobile-navigation-title" className="font-gluten text-xl font-bold">
                    PFOTENPFADFINDER
                  </span>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => onClose()}
                  className="hover:bg-accent/10 rounded-md p-2 transition-colors"
                  aria-label="Mobiles Menü schließen"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-1 flex-col px-6 py-8">
                <div className="flex flex-col gap-3">
                  <span className="text-muted-foreground text-sm">Design</span>
                  <div className="flex gap-3" role="group" aria-label="Farbschema auswählen">
                    <ThemeButton
                      label="Hell"
                      selected={theme === 'light'}
                      onClick={() => setTheme('light')}
                      icon={Sun}
                    />
                    <ThemeButton
                      label="Dunkel"
                      selected={theme === 'dark'}
                      onClick={() => setTheme('dark')}
                      icon={Moon}
                    />
                    <ThemeButton
                      label="Auto"
                      selected={theme === 'system'}
                      onClick={() => setTheme('system')}
                      icon={Monitor}
                    />
                  </div>
                </div>

                <div className="flex-1" />

                <nav aria-label="Mobile Hauptnavigation" className="mb-16 flex flex-col gap-6">
                  {NAVIGATION.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-primary w-full py-4 text-center text-2xl font-medium transition-colors"
                      onClick={() => onClose(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface ThemeButtonProps {
  label: string
  selected: boolean
  onClick: () => void
  icon: typeof Sun
}

function ThemeButton({ label, selected, onClick, icon: Icon }: ThemeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 transition-colors ${
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border hover:border-primary hover:bg-primary/10'
      }`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
