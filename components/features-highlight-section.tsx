'use client'

import { Sparkles, Heart, Home, ShieldCheck, Cross, Settings, Handshake, Bell } from 'lucide-react'
import { PawBackground } from '@/components/paw-background'

export function FeaturesHighlightSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Sauberes Umfeld',
      description:
        'Hygiene hat bei mir höchste Priorität. Dein Hund wird in einem sauberen, gepflegten Zuhause betreut.',
    },
    {
      icon: Heart,
      title: 'Familiäres Umfeld',
      description:
        'Dein Vierbeiner wird Teil unserer Familie und nimmt aktiv an unserem Alltag teil – wie ein eigenes Familienmitglied.',
    },
    {
      icon: Home,
      title: 'Wie Zuhause',
      description:
        'Auf die Couch? Ins Bett? Was dein Hund zuhause darf, darf er auch bei mir. Keine neuen Regeln – dein Liebling soll sich genauso wohlfühlen wie daheim.',
    },
    {
      icon: ShieldCheck,
      title: 'Veterinäramt geprüft',
      description:
        'Zertifiziert nach §11 Abs.1 Nr. 3, 5, 8a Tierschutzgesetz und vollumfänglich versichert durch eine Betriebshaftpflichtversicherung.',
    },
    {
      icon: Cross,
      title: 'Erste Hilfe geschult',
      description:
        'Im Notfall weiß ich, was zu tun ist. Ich bin in Erster Hilfe für Hunde geschult und habe alle Kontaktdaten griffbereit – inklusive eurer Tierarzt-Nummer und Notfallkontakt.',
    },
    {
      icon: Settings,
      title: 'Individuelle Betreuung',
      description:
        'Maximal 2-3 Hunde gleichzeitig. Auf Wunsch auch exklusive Einzelbetreuung für deinen Liebling.',
    },
    {
      icon: Handshake,
      title: 'Persönliches Kennenlernen',
      description:
        'Vor der ersten Betreuung lernen wir uns in Ruhe kennen – damit du sicher sein kannst, dass die Chemie stimmt.',
    },
    {
      icon: Bell,
      title: 'Regelmäßige Updates',
      description:
        'Du erhältst Foto-Updates per WhatsApp, so weißt du immer, wie es deinem Liebling geht.',
    },
  ]

  return (
    <section className="bg-accent/5 relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="d" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent/10 absolute top-40 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute right-1/4 bottom-20 h-[400px] w-[400px] translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Was meinen Service ausmacht
            </h2>
            <p className="text-foreground/70 mx-auto max-w-[700px] md:text-lg">
              Darauf lege ich bei meiner Arbeit besonderen Wert
            </p>
          </div>

          {/* Features Grid */}
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              // Verschiedene Verschiebungen für jede Karte
              const offsets = [
                'translate-y-0',
                'translate-y-4',
                '-translate-y-2',
                'translate-y-2',
                '-translate-y-3',
                'translate-y-3',
                'translate-y-1',
                '-translate-y-1',
              ]
              const rotations = [
                'rotate-0',
                'rotate-1',
                '-rotate-1',
                'rotate-0',
                'rotate-1',
                '-rotate-1',
                'rotate-0',
                'rotate-1',
              ]
              return (
                <div
                  key={index}
                  className={`group relative transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${offsets[index]} ${rotations[index]}`}
                >
                  {/* Card */}
                  <div className="bg-card border-accent/20 hover:border-accent/40 relative h-full overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    {/* Gradient overlay on hover */}
                    <div className="from-accent/5 to-accent/0 absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="relative space-y-4">
                      {/* Icon */}
                      <div className="bg-accent/10 group-hover:bg-accent/20 inline-flex items-center justify-center rounded-xl p-3 transition-colors duration-300">
                        <Icon className="text-accent h-6 w-6" strokeWidth={2} />
                      </div>

                      {/* Text */}
                      <div className="space-y-2">
                        <h3 className="text-lg leading-tight font-bold">{feature.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
