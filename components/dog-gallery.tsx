'use client'

import Image from 'next/image'
import { useState } from 'react'
import { GALLERY_PHOTOS, type GalleryCategory } from '@/lib/gallery-data'
import { cn } from '@/lib/utils'

const FILTERS = [
  { category: 'all', label: 'Alle Einblicke' },
  { category: 'portraits', label: 'Bitte lächeln!' },
  { category: 'friends', label: 'Hundefreunde' },
  { category: 'outdoors', label: 'Auf Schnüffeltour' },
  { category: 'play', label: 'Spiel & Spaß' },
  { category: 'cuddles', label: 'Kuschelzeit' },
  { category: 'rest', label: 'Dösen & Träumen' },
] as const

export function DogGallery() {
  const [category, setCategory] = useState<GalleryCategory | 'all'>('all')
  const photos =
    category === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter(photo => photo.categories.includes(category))

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 border-b border-foreground/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Bilder filtern" className="flex flex-wrap gap-2">
          {FILTERS.map(({ category: filter, label }) => (
            <button
              key={filter}
              type="button"
              aria-pressed={category === filter}
              onClick={() => setCategory(filter)}
              className={cn(
                'min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                category === filter
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-foreground/15 hover:border-foreground/40 hover:bg-secondary',
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="shrink-0 text-sm text-foreground/60" aria-live="polite" aria-atomic="true">
          {photos.length} Lieblingsmomente
        </p>
      </div>

      <div
        className="grid grid-flow-dense grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
        aria-label="Hundebilder"
      >
        {photos.map(photo => (
          <div
            key={photo.id}
            className={cn(
              'w-full overflow-hidden rounded-2xl bg-muted',
              photo.width > photo.height && 'col-span-2',
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={
                photo.width > photo.height
                  ? '(min-width: 1400px) 640px, (min-width: 1024px) 48vw, (min-width: 640px) 64vw, 94vw'
                  : '(min-width: 1400px) 310px, (min-width: 1024px) 23vw, (min-width: 640px) 30vw, 45vw'
              }
              className={cn(
                'h-full w-full object-cover',
                photo.width > photo.height ? 'aspect-[3/2]' : 'aspect-[3/4]',
              )}
            />
          </div>
        ))}
      </div>
    </>
  )
}
