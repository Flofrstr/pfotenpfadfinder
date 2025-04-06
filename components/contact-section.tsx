import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="kontakt" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-lazydog text-3xl md:text-4xl font-bold tracking-tight">Kontaktieren Sie uns</h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-lazydog text-2xl font-semibold">Kontaktdaten</h3>
              <div className="flex items-center gap-2 mt-4">
                <Mail className="h-5 w-5 text-accent" />
                <Link href="mailto:pfotenpfadfinder@gmail.com" className="text-lg hover:text-accent transition-colors">
                  pfotenpfadfinder@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Instagram className="h-5 w-5 text-accent" />
                <Link
                  href="https://instagram.com/Pfotenpfadfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-accent transition-colors"
                >
                  @Pfotenpfadfinder
                </Link>
              </div>
            </div>

            <div className="bg-accent/5 p-6 rounded-lg">
              <h3 className="font-lazydog text-xl font-semibold mb-4">Unsere Betreuungszeiten</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span className="font-medium">8:00 - 20:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Samstag:</span>
                  <span className="font-medium">9:00 - 18:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Sonntag:</span>
                  <span className="font-medium">Nach Vereinbarung</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-lazydog text-2xl font-semibold text-center md:text-left">Nachricht senden</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Input type="text" placeholder="Ihr Name" required className="border-accent/20 focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail"
                    required
                    className="border-accent/20 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Ihre Nachricht"
                    required
                    className="min-h-[150px] border-accent/20 focus:border-accent"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-accent text-background hover:bg-accent/90">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

