'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Instagram, Phone, Send } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="kontakt" className="w-full bg-accent/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center justify-center space-y-3 text-center">
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Kontaktiere mich
          </h2>
          <p className="max-w-[600px] text-lg text-foreground/70">
            Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich freue mich auf deine
            Nachricht!
          </p>
        </div>

        {/* Kontakt-Karten */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="tel:+4915772199639" className="group">
            <Card className="h-full border-2 border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Telefon</h3>
                  <p className="text-foreground/80 transition-colors group-hover:text-accent">
                    0157 72199639
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="mailto:pfotenpfadfinder@gmail.com" className="group">
            <Card className="h-full border-2 border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">E-Mail</h3>
                  <p className="text-sm text-foreground/80 transition-colors group-hover:text-accent">
                    pfotenpfadfinder@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="https://instagram.com/Pfotenpfadfinder"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="h-full border-2 border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Instagram className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Instagram</h3>
                  <p className="text-foreground/80 transition-colors group-hover:text-accent">
                    @Pfotenpfadfinder
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Kontaktformular - Netlify Forms */}
        <Card className="mx-auto max-w-2xl border-2 border-accent/20 shadow-lg">
          <CardContent className="p-8 md:p-10">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Send className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 text-center text-2xl font-bold md:text-3xl">Nachricht senden</h3>
            <p className="mb-8 text-center text-foreground/70">
              Fülle das Formular aus und ich melde mich schnellstmöglich bei dir.
            </p>

            <form name="contact" method="POST" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Dein Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  required
                  className="h-12 border-accent/20 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Deine E-Mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  required
                  className="h-12 border-accent/20 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Deine Nachricht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Deine Nachricht an mich..."
                  required
                  className="min-h-[160px] resize-none border-accent/20 focus:border-accent"
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-accent text-base font-semibold text-background shadow-md transition-all hover:bg-accent/90 hover:shadow-lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Nachricht senden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
