import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pfotenpfadfinder.jpg?height=1080&width=1920"
          alt="Glücklicher Hund mit Besitzer"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          priority
        />
        <div className="bg-background/70 absolute inset-0"></div>
      </div>

      <div className="relative z-10 container px-6 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-8 text-center md:text-left">
          <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="hidden sm:inline">PFOTENPFADFINDER - </span>Mit Herz und Pfote an der
            Seite deines Lieblings
          </h1>
          <p className="text-foreground/90 mx-auto max-w-2xl text-base leading-relaxed sm:text-lg md:mx-0 md:text-xl">
            Glückliche Pfoten, sorglose Stunden - Hundebetreuung und Gassi-Service für zufriedene
            und ausgelastete Hunde.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 w-full sm:w-auto"
            >
              <Link href="#kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#services">Mehr erfahren</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
