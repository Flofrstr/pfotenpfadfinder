"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Phone, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Nachricht erfolgreich gesendet!", {
          description: "Ich melde mich schnellstmöglich bei dir.",
        })
        // Formular zurücksetzen
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Fehler beim Senden", {
          description: data.error || "Bitte versuche es später erneut.",
        })
      }
    } catch (error) {
      toast.error("Verbindungsfehler", {
        description: "Bitte überprüfe deine Internetverbindung.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  return (
    <section id="kontakt" className="w-full py-12 md:py-24 lg:py-32 bg-accent/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Kontaktiere mich
          </h2>
          <p className="max-w-[600px] text-foreground/70 text-lg">
            Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich freue mich auf deine Nachricht!
          </p>
        </div>

        {/* Kontakt-Karten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="tel:+4915772199639" className="group">
            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <p className="text-foreground/80 group-hover:text-accent transition-colors">
                    0157 72199639
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="mailto:pfotenpfadfinder@gmail.com" className="group">
            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                  <p className="text-foreground/80 group-hover:text-accent transition-colors text-sm">
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
            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Instagram className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                  <p className="text-foreground/80 group-hover:text-accent transition-colors">
                    @Pfotenpfadfinder
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Kontaktformular */}
        <Card className="border-2 border-accent/20 shadow-lg max-w-2xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Send className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">Nachricht senden</h3>
            <p className="text-center text-foreground/70 mb-8">
              Fülle das Formular aus und ich melde mich schnellstmöglich bei dir.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Dein Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="border-accent/20 focus:border-accent h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Deine E-Mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="deine@email.de"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="border-accent/20 focus:border-accent h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Deine Nachricht
                </label>
                <Textarea
                  id="message"
                  placeholder="Deine Nachricht an mich..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="min-h-[160px] border-accent/20 focus:border-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent text-background hover:bg-accent/90 h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

