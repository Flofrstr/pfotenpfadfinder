import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pfotenpfadfinder.jpg?height=1080&width=1920"
          alt="Frau mit Brille kniet auf Waldweg zwischen zwei Hunden"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          priority
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/40"></div>
      </div>

      <div className="relative z-10 container px-6 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-block">
            <span className="bg-accent text-background inline-block rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase shadow-lg sm:text-sm">
              Glückliche Pfoten, sorglose Stunden
            </span>
          </div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Mit Herz und Pfote an der Seite deines Lieblings
          </h1>
          <p className="text-foreground mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
            Hundebetreuung und Gassi-Service für zufriedene und ausgelastete Hunde
          </p>
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
