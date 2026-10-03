import { ArrowUpRight, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { GOOGLE_REVIEWS } from '@/lib/google-reviews'

function ReviewStars() {
  return (
    <span className="inline-flex gap-1 text-service-holiday">
      <span className="sr-only">5 von 5 Sternen</span>
      {[1, 2, 3, 4, 5].map(star => (
        <Star key={star} aria-hidden="true" className="size-4 fill-current" />
      ))}
    </span>
  )
}

export function GoogleReviews() {
  const checkedAt = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
  }).format(new Date(GOOGLE_REVIEWS.checkedAt))

  return (
    <section
      id="google-rezensionen"
      aria-labelledby="google-reviews-heading"
      className="relative mx-auto mt-12 max-w-6xl scroll-mt-36 rounded-3xl border border-border bg-background p-6 md:mt-16 md:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <h3 id="google-reviews-heading" className="text-xl font-semibold md:text-2xl">
            Liebe Worte auf Google
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-3xl font-semibold tabular-nums">
              {GOOGLE_REVIEWS.rating.toLocaleString('de-DE', { minimumFractionDigits: 1 })}
              <span className="ml-1 text-base font-normal text-muted-foreground">/ 5</span>
            </span>
            <ReviewStars />
            <span className="text-sm text-muted-foreground">
              aus {GOOGLE_REVIEWS.reviewCount} Rezensionen
            </span>
          </div>
        </div>
        <Button asChild variant="outline" className="w-full shrink-0 sm:w-auto">
          <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer">
            Alle Google-Rezensionen
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (öffnet einen neuen Tab)</span>
          </a>
        </Button>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {GOOGLE_REVIEWS.excerpts.map(review => (
          <figure key={review.url} className="flex flex-col rounded-2xl bg-secondary/60 p-5 md:p-6">
            <ReviewStars />
            <blockquote cite={review.url} className="mt-4 flex-1 text-sm leading-relaxed">
              <p>„{review.quote}“</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-foreground"
              >
                {review.initials}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{review.author}</p>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-8 items-center gap-1 rounded-sm text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Rezension auf Google
                  <ArrowUpRight aria-hidden="true" className="size-3" />
                  <span className="sr-only"> von {review.author} (öffnet einen neuen Tab)</span>
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Auszüge aus Google-Rezensionen · Stand:{' '}
        <time dateTime={GOOGLE_REVIEWS.checkedAt}>{checkedAt}</time>. Alle aktuellen Bewertungen
        findest du direkt auf Google.
      </p>
    </section>
  )
}
