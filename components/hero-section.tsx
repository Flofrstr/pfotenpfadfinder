import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Glücklicher Hund mit Besitzer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-lazydog text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Pfotenpfadfinder: Liebevolle & professionelle Betreuung für Ihren Vierbeiner
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl">
            Ihr Hund verdient die beste Betreuung, auch wenn Sie keine Zeit haben. Wir bieten liebevolle und
            zuverlässige Hundebetreuung und Gassi-Service, damit Ihr Vierbeiner glücklich bleibt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90">
              <Link href="#kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Mehr erfahren</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

