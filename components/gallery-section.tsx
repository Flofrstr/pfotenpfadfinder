import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PawBackground } from '@/components/paw-background'
import { Button } from '@/components/ui/button'
import { GALLERY_PHOTOS } from '@/lib/gallery-data'
import { cn } from '@/lib/utils'

const PREVIEW_PHOTOS = [
  { id: 14, caption: 'Auslastung' },
  { id: 119, caption: 'Entspannung' },
  { id: 103, caption: 'Soziale Kontakte' },
  { id: 30, caption: 'Entdecken' },
].flatMap(({ id, caption }) => {
  const photo = GALLERY_PHOTOS.find(candidate => candidate.id === id)
  return photo ? [{ ...photo, caption }] : []
})

export function GallerySection() {
  return (
    <section
      id="einblicke"
      aria-labelledby="einblicke-heading"
      className="relative w-full scroll-mt-40 overflow-hidden bg-accent/5 py-12 md:py-24 lg:py-32"
    >
      <PawBackground variant="f" />
      <div className="relative container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2
            id="einblicke-heading"
            className="mx-auto mb-6 max-w-3xl text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Kleine Momente. <br />
            <span className="text-accent">Großes Hundeglück.</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/70 md:text-lg">
            Neue Wege erschnüffeln, Hundefreunde treffen und zwischendurch gemütlich dösen. So
            genießen die Vierbeiner ihre Zeit bei Pfotenpfadfinder.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start gap-4 sm:gap-6 lg:grid-cols-4">
          {PREVIEW_PHOTOS.map((photo, index) => (
            <figure
              key={photo.id}
              className={cn(
                'rounded-2xl bg-background p-2.5 shadow-sm ring-1 ring-foreground/5 sm:p-3',
                index % 2 === 1 && 'mt-8 lg:mt-12',
              )}
            >
              <div className="overflow-hidden rounded-xl bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1400px) 300px, (min-width: 1024px) 23vw, 44vw"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <figcaption className="px-1 pt-4 pb-2 text-center font-gluten text-base sm:text-xl">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            Echte Schnappschüsse. Echte Lieblingsmomente.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/einblicke">
              Alle Einblicke entdecken <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
