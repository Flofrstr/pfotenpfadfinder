'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pfotenpfadfinder.jpg"
          alt="Frau mit Brille kniet auf Waldweg zwischen zwei Hunden"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/40"></div>
      </div>

      {/* Floating Trust Badge */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:right-8 md:bottom-12 md:left-auto md:translate-x-0 lg:right-12">
        <div className="group relative">
          {/* Glow effect */}
          <div className="from-accent/50 to-accent/30 dark:from-foreground/20 dark:to-foreground/10 absolute -inset-1 rounded-2xl bg-gradient-to-br opacity-75 blur-lg transition-all duration-300 group-hover:opacity-100 group-hover:blur-xl" />

          <div className="bg-accent dark:bg-secondary relative flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl transition-all duration-300 group-hover:scale-105 md:px-5 md:py-4">
            {/* Icon */}
            <div className="relative">
              <div className="dark:bg-accent/30 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 md:h-12 md:w-12">
                <ShieldCheck
                  className="dark:text-accent h-6 w-6 text-white md:h-7 md:w-7"
                  strokeWidth={2.5}
                />
              </div>
              {/* Checkmark Badge */}
              <div className="dark:border-secondary absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500 shadow-md">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M10.28 2.28L4.5 8.06 1.72 5.28a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06h.12z" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-left">
              <p className="dark:text-foreground text-sm font-bold text-white md:text-base">
                Veterinäramt geprüft
              </p>
              <p className="dark:text-muted-foreground text-xs text-white/80 md:text-sm">
                §11 TierSchG · Versichert
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container px-6 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-block">
            <span className="bg-accent text-background inline-block rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase shadow-lg sm:text-sm">
              Glückliche Pfoten, sorglose Stunden
            </span>
          </div>
          <p className="text-foreground font-gluten text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Mit Herz und Pfote an der Seite deines Lieblings
          </p>
          <h1 className="text-foreground mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl">
            Professionelle Hundebetreuung und Gassi-Service in Gevelsberg
          </h1>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 w-full sm:w-auto"
            >
              <Link href="#kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#services">Unsere Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
