import { Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

import { ContactForm } from '@/components/contact-form'
import { PawBackground } from '@/components/paw-background'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_DATA } from '@/lib/site-data'

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-accent/5 relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
    >
      <PawBackground variant="e" />

      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Lass uns quatschen
            </h2>
            <p className="text-foreground/70 max-w-[700px] md:text-lg">
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
              <p className="text-foreground/70 text-sm">Du kannst mich auch direkt erreichen</p>
            </div>

            <Link href={`tel:${SITE_DATA.contact.phone}`} className="group block">
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Phone className="text-accent h-5 w-5" aria-hidden="true" />
                </div>
                <div className="pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    Telefon
                  </div>
                  <div className="group-hover:text-accent font-medium transition-colors">
                    {SITE_DATA.contact.phoneDisplay}
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`mailto:${SITE_DATA.contact.email}`} className="group block">
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Mail className="text-accent h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    E-Mail
                  </div>
                  <div className="group-hover:text-accent font-medium break-all transition-colors">
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
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Instagram className="text-accent h-5 w-5" aria-hidden="true" />
                </div>
                <div className="pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    Instagram
                  </div>
                  <div className="group-hover:text-accent font-medium transition-colors">
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
