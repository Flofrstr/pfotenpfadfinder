'use client'

import {
  Sparkles,
  Heart,
  Home,
  ShieldCheck,
  Cross,
  Settings,
  Handshake,
  Bell,
  HeartHandshake,
} from 'lucide-react'
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
    <section id="warum-ich" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
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
              Darauf lege ich bei der Hundebetreuung besonders viel Wert
            </p>
          </div>

          {/* Hero Feature - Die Beziehung */}
          <div className="mx-auto mb-12 max-w-3xl">
            <div className="group relative">
              {/* Glow effect */}
              <div className="from-accent/30 via-accent/20 to-accent/10 absolute -inset-1 rounded-3xl bg-linear-to-r opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />

              {/* Card */}
              <div className="from-accent/15 via-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 relative overflow-hidden rounded-3xl border-2 bg-linear-to-br p-8 shadow-lg transition-all duration-300 md:p-10">
                {/* Decorative paw pattern */}
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-accent"
                  >
                    <path d="M256 224c-79.4 0-192 122.8-192 200.3 0 34.9 26.8 55.8 71.7 55.8 48.8 0 81.1-25.1 120.3-25.1 39.5 0 71.9 25.1 120.3 25.1 44.9 0 71.7-20.9 71.7-55.8C448 346.8 335.4 224 256 224zm-147.3-12.6c-10.4-34.7-42.4-57.1-71.6-50.1-29.1 7-44.3 40.7-33.9 75.3 10.4 34.7 42.4 57.1 71.6 50.1 29.1-7 44.3-40.7 33.9-75.3zm84.7-20.8c30.9-8.1 46.4-49.9 34.6-93.4s-46.5-72-77.5-63.9-46.4 49.9-34.6 93.4c11.8 43.4 46.5 72 77.5 63.9zm281.4-29.3c-29.1-7-61.2 15.5-71.6 50.1-10.4 34.7 4.8 68.4 33.9 75.3 29.1 7 61.2-15.5 71.6-50.1 10.4-34.7-4.8-68.4-33.9-75.3zm-156.3 29.3c30.9 8.1 65.6-20.5 77.5-63.9 11.8-43.4-3.6-85.2-34.6-93.4s-65.6 20.5-77.5 63.9c-11.8 43.4 3.6 85.2 34.6 93.4z" />
                  </svg>
                </div>

                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                  {/* Icon */}
                  <div className="bg-accent/20 group-hover:bg-accent/30 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 md:h-24 md:w-24">
                    <HeartHandshake
                      className="text-accent h-10 w-10 md:h-12 md:w-12"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold md:text-3xl">
                      Die Beziehung steht im Mittelpunkt
                    </h3>
                    <p className="text-foreground/80 text-base leading-relaxed md:text-lg">
                      Für mich zählt nicht nur die Betreuung – sondern vor allem die echte
                      Verbindung zu jedem einzelnen Tier. Ich nehme mir die Zeit, deinen Hund
                      wirklich kennenzulernen: seine Persönlichkeit, seine Vorlieben, seine Ängste
                      und was ihn glücklich macht. Denn nur wenn Vertrauen und eine liebevolle
                      Beziehung entstehen, fühlt sich dein Vierbeiner bei mir rundum wohl und
                      geborgen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              // Verschiedene Verschiebungen für jede Karte - nur auf Desktop
              const offsets = [
                'md:translate-y-0',
                'md:translate-y-4',
                'md:-translate-y-2',
                'md:translate-y-2',
                'md:-translate-y-3',
                'md:translate-y-3',
                'md:translate-y-1',
                'md:-translate-y-1',
              ]
              const rotations = [
                'md:rotate-0',
                'md:rotate-1',
                'md:-rotate-1',
                'md:rotate-0',
                'md:rotate-1',
                'md:-rotate-1',
                'md:rotate-0',
                'md:rotate-1',
              ]
              return (
                <div
                  key={index}
                  className={`group relative transition-transform duration-300 hover:-translate-y-1 md:hover:rotate-0 ${offsets[index]} ${rotations[index]}`}
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
