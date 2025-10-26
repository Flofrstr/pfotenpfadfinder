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
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Lass uns sprechen
            </h2>
            <p className="text-foreground/70 max-w-[700px] md:text-lg">
              Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich freue mich auf deine
              Nachricht!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main Form */}
          <Card className="border-accent/20 shadow-sm">
            <CardContent className="p-6 md:p-8">
              {isSuccess && (
                <div className="mb-6 flex items-start gap-3 rounded-lg bg-green-500/10 p-4 text-green-700 dark:text-green-400">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
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
                suppressHydrationWarning
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dein Name"
                    required
                    className="border-accent/20 focus:border-accent placeholder:text-foreground/40 h-12"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    required
                    className="border-accent/20 focus:border-accent placeholder:text-foreground/40 h-12"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Schreib mir deine Nachricht..."
                    required
                    className="border-accent/20 focus:border-accent placeholder:text-foreground/40 min-h-[150px] resize-none"
                    suppressHydrationWarning
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-background hover:bg-accent/90 h-12 w-full font-semibold transition-all disabled:opacity-50"
                  suppressHydrationWarning
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold">Direkter Kontakt</h3>
              <p className="text-foreground/70 text-sm">Du kannst mich auch direkt erreichen</p>
            </div>

            <Link href="tel:+4915772199639" className="group block">
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Phone className="text-accent h-5 w-5" />
                </div>
                <div className="pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    Telefon
                  </div>
                  <div className="group-hover:text-accent font-medium transition-colors">
                    0157 72199639
                  </div>
                </div>
              </div>
            </Link>

            <Link href="mailto:pfotenpfadfinder@gmail.com" className="group block">
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Mail className="text-accent h-5 w-5" />
                </div>
                <div className="min-w-0 pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    E-Mail
                  </div>
                  <div className="group-hover:text-accent font-medium break-all transition-colors">
                    pfotenpfadfinder@gmail.com
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://instagram.com/Pfotenpfadfinder"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 flex items-start gap-4 rounded-lg border p-4 transition-all">
                <div className="bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Instagram className="text-accent h-5 w-5" />
                </div>
                <div className="pt-1">
                  <div className="text-foreground/50 mb-1 text-xs font-medium tracking-wider uppercase">
                    Instagram
                  </div>
                  <div className="group-hover:text-accent font-medium transition-colors">
                    @Pfotenpfadfinder
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
