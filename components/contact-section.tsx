'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Instagram, Phone, Send, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const params = new URLSearchParams()
    params.append('form-name', 'contact')
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        params.append(key, value)
      }
    }

    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="bg-accent/5 w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center justify-center space-y-3 text-center">
          <h2 className="from-foreground to-foreground/70 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Kontaktiere mich
          </h2>
          <p className="text-foreground/70 max-w-[600px] text-lg">
            Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich freue mich auf deine
            Nachricht!
          </p>
        </div>

        {/* Kontakt-Karten */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="tel:+4915772199639" className="group">
            <Card className="border-accent/20 hover:border-accent h-full border-2 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <Phone className="text-accent h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Telefon</h3>
                  <p className="text-foreground/80 group-hover:text-accent transition-colors">
                    0157 72199639
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="mailto:pfotenpfadfinder@gmail.com" className="group">
            <Card className="border-accent/20 hover:border-accent h-full border-2 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <Mail className="text-accent h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">E-Mail</h3>
                  <p className="text-foreground/80 group-hover:text-accent text-sm transition-colors">
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
            <Card className="border-accent/20 hover:border-accent h-full border-2 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center space-y-3 p-8 text-center">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <Instagram className="text-accent h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Instagram</h3>
                  <p className="text-foreground/80 group-hover:text-accent transition-colors">
                    @Pfotenpfadfinder
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Kontaktformular - Netlify Forms */}
        <Card className="border-accent/20 mx-auto max-w-2xl border-2 shadow-lg">
          <CardContent className="p-8 md:p-10">
            <div className="mb-6 flex items-center justify-center">
              <div className="bg-accent/10 flex h-12 w-12 items-center justify-center rounded-full">
                <Send className="text-accent h-6 w-6" />
              </div>
            </div>
            <h3 className="mb-2 text-center text-2xl font-bold md:text-3xl">Nachricht senden</h3>
            <p className="text-foreground/70 mb-8 text-center">
              Fülle das Formular aus und ich melde mich schnellstmöglich bei dir.
            </p>

            {isSuccess && (
              <div className="mb-6 flex items-center gap-3 rounded-lg border-2 border-green-500/20 bg-green-500/10 p-4 text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">
                  Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
                </p>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

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
                  className="border-accent/20 focus:border-accent h-12"
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
                  className="border-accent/20 focus:border-accent h-12"
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
                  className="border-accent/20 focus:border-accent min-h-[160px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-background hover:bg-accent/90 h-12 w-full text-base font-semibold shadow-md transition-all hover:shadow-lg disabled:opacity-50"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
