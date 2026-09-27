import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, PawPrint } from 'lucide-react'
import { DogGallery } from '@/components/dog-gallery'
import { PawBackground } from '@/components/paw-background'
import { Button } from '@/components/ui/button'
import { SITE_DATA } from '@/lib/site-data'

const title = 'Schnüffeln. Spielen. Einfach Hund sein. | Pfotenpfadfinder'
const description =
  'Neugierige Nasen, neue Hundefreunde und gemütliche Pausen: Entdecke die Lieblingsmomente der Vierbeiner bei Pfotenpfadfinder in Gevelsberg.'
const socialImage = {
  url: '/einblicke/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Pfotenpfadfinder – Schnüffeln. Spielen. Einfach Hund sein.',
}

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_DATA.url}/einblicke` },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${SITE_DATA.url}/einblicke`,
    siteName: SITE_DATA.name,
    title,
    description,
    images: [socialImage],
  },
  twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
}

export default function EinblickePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section
        className="relative overflow-hidden pt-4 pb-8 md:pt-8 md:pb-12"
        aria-labelledby="gallery-heading"
      >
        <PawBackground variant="b" />
        <div className="relative container px-4 md:px-6">
          <Link
            href="/#einblicke"
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-foreground/65 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Zur Startseite
          </Link>
          <div className="mx-auto mt-4 max-w-3xl text-center md:mt-8">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium">
              <PawPrint className="size-4 text-accent" aria-hidden="true" />
              Einblicke ins Hundeleben
            </p>
            <h1
              id="gallery-heading"
              className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Schnüffeln. Spielen. <br />
              <span className="text-accent">Einfach Hund sein.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Neugierige Nasen, neue Hundefreunde und gemütliche Pausen. Hier wird geschnüffelt,
              gespielt und auch mal ausgiebig gedöst.
            </p>
          </div>
        </div>
      </section>
      <section aria-label="Fotogalerie" className="container px-4 pb-16 md:px-6 md:pb-24">
        <DogGallery />
      </section>
      <section
        className="border-t border-accent/15 bg-accent/5 py-16 md:py-20"
        aria-labelledby="gallery-contact-heading"
      >
        <div className="container px-4 text-center md:px-6">
          <PawPrint className="mx-auto mb-5 size-8 text-accent" aria-hidden="true" />
          <h2 id="gallery-contact-heading" className="text-3xl font-bold md:text-4xl">
            Lernen wir uns kennen?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-foreground/75">
            Du möchtest mich und meine Betreuung kennenlernen? Erzähl mir von deinem Vierbeiner. Ich
            freue mich auf euch!
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full">
            <Link href="/#kontakt">
              Kennenlernen anfragen <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
