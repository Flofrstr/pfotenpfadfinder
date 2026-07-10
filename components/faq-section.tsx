import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Euro,
  GraduationCap,
  Shield,
  type LucideIcon,
} from 'lucide-react'

import { PawBackground } from '@/components/paw-background'
import { FAQ_CATEGORIES, type FAQIcon } from '@/lib/site-data'

const FAQ_ICONS: Record<FAQIcon, LucideIcon> = {
  shield: Shield,
  euro: Euro,
  'graduation-cap': GraduationCap,
  clock: Clock,
  'check-circle': CheckCircle2,
}

export function FAQSection() {
  return (
    <section id="faq" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="d" />

      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/5 absolute top-20 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute right-0 bottom-20 h-[600px] w-[600px] translate-x-1/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Häufig gestellte Fragen
            </h2>
            <p className="text-foreground/70 mx-auto max-w-2xl text-lg md:text-xl">
              Hier findest du Antworten auf die wichtigsten Fragen rund um meine Hundebetreuung.
              Falls deine Frage nicht dabei ist, kontaktiere mich gerne direkt!
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_CATEGORIES.map(category => {
              const Icon = FAQ_ICONS[category.icon]

              return (
                <details
                  key={category.id}
                  className="group/category border-accent/20 bg-card overflow-hidden rounded-xl border shadow-sm"
                >
                  <summary className="hover:bg-accent/5 flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-left md:gap-4 md:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2 md:gap-3">
                      <span className="bg-accent/10 text-accent flex shrink-0 items-center justify-center rounded-lg p-2.5">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xl font-bold md:text-2xl">{category.title}</span>
                    </span>
                    <ChevronDown
                      className="text-accent h-6 w-6 shrink-0 transition-transform group-open/category:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="border-accent/10 space-y-3 border-t p-3 md:p-6">
                    {category.items.map(item => (
                      <details
                        key={item.question}
                        className="group/question border-accent/10 bg-background/50 overflow-hidden rounded-lg border"
                      >
                        <summary className="hover:bg-accent/5 flex cursor-pointer list-none items-start justify-between gap-3 p-3 text-left md:p-4 [&::-webkit-details-marker]:hidden">
                          <span className="flex-1 leading-snug font-semibold wrap-break-word">
                            {item.question}
                          </span>
                          <ChevronDown
                            className="text-accent h-5 w-5 shrink-0 transition-transform group-open/question:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="border-accent/10 border-t px-3 pt-3 pb-4 md:px-4">
                          <p className="text-foreground/80 leading-relaxed wrap-break-word whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
              )
            })}
          </div>

          <div className="from-accent/10 to-accent/5 mt-12 rounded-2xl bg-linear-to-br p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold">Noch Fragen?</h3>
            <p className="text-foreground/80 mb-6 text-lg">
              Ich beantworte dir gerne alle weiteren Fragen persönlich!
            </p>
            <a
              href="#kontakt"
              className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center rounded-lg px-8 py-3 font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
