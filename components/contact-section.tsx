import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

import { ContactForm } from '@/components/contact-form'
import { PawBackground } from '@/components/paw-background'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_DATA } from '@/lib/site-data'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative w-full overflow-hidden bg-accent/5 py-12 md:py-24 lg:py-32"
    >
      <PawBackground variant="e" />

      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Lass uns quatschen
            </h2>
            <p className="max-w-[700px] text-foreground/70 md:text-lg">
              Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich freue mich auf deine
              Nachricht!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
          <Card className="border-accent/20 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold">Direkter Kontakt</h3>
              <p className="text-sm text-foreground/70">Du kannst mich auch direkt erreichen</p>
            </div>

            <Link href={`tel:${SITE_DATA.contact.phone}`} className="group block">
              <div className="flex items-start gap-4 rounded-lg border border-accent/20 p-4 transition-all hover:border-accent/40 hover:bg-accent/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div className="pt-1">
                  <div className="mb-1 text-xs font-medium tracking-wider text-foreground/50 uppercase">
                    Telefon
                  </div>
                  <div className="font-medium transition-colors group-hover:text-accent">
                    {SITE_DATA.contact.phoneDisplay}
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`mailto:${SITE_DATA.contact.email}`} className="group block">
              <div className="flex items-start gap-4 rounded-lg border border-accent/20 p-4 transition-all hover:border-accent/40 hover:bg-accent/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div className="min-w-0 pt-1">
                  <div className="mb-1 text-xs font-medium tracking-wider text-foreground/50 uppercase">
                    E-Mail
                  </div>
                  <div className="font-medium break-all transition-colors group-hover:text-accent">
                    {SITE_DATA.contact.email}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={SITE_DATA.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start gap-4 rounded-lg border border-accent/20 p-4 transition-all hover:border-accent/40 hover:bg-accent/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <InstagramIcon className="h-5 w-5 text-accent" />
                </div>
                <div className="pt-1">
                  <div className="mb-1 text-xs font-medium tracking-wider text-foreground/50 uppercase">
                    Instagram
                  </div>
                  <div className="font-medium transition-colors group-hover:text-accent">
                    {SITE_DATA.social.instagramHandle}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
