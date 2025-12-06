'use client'

import { useState } from 'react'
import { ChevronDown, Shield, Euro, GraduationCap, Clock, CheckCircle2 } from 'lucide-react'
import { PawBackground } from '@/components/paw-background'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  items: FAQItem[]
}

export function FAQSection() {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set())
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

  const faqCategories: FAQCategory[] = [
    {
      title: 'Versicherung & Sicherheit',
      icon: <Shield className="h-5 w-5" />,
      items: [
        {
          question: 'Ist mein Hund während der Betreuung versichert?',
          answer:
            'Ja, ich verfüge über eine Hundebetreuer-Betriebshaftpflichtversicherung. Diese deckt Schäden ab, die während meiner Betreuung entstehen könnten. Zusätzlich sollte dein Hund eine eigene Hundehaftpflichtversicherung haben, damit im Schadensfall auch alles rund um dein Tier vollständig abgesichert ist',
        },
        {
          question: 'Was passiert im Notfall?',
          answer:
            'Im Notfall kontaktiere ich dich sofort und bringe deinen Hund bei Bedarf direkt zum Tierarzt. Ich bin in Erster Hilfe für Hunde geschult und habe immer die Kontaktdaten deines Tierarztes griffbereit.',
        },
      ],
    },
    {
      title: 'Preise & Buchung',
      icon: <Euro className="h-5 w-5" />,
      items: [
        {
          question: 'Was kostet die Hundebetreuung?',
          answer:
            'Meine Preise für einen Hund:\n\n• Tagesbetreuung (max. 12 Std): 30 € pro Tag\n• Urlaubsbetreuung mit Übernachtung: 35 € pro Tag\n• Kennenlernen (ca. 60 Min inkl. Gassirunde): 15 €\n\nBei mehreren Hunden aus einem Haushalt reduziert sich der Preis pro weiteren Hund. Alle Details und die interaktive Preisübersicht findest du in der Services-Sektion.',
        },
        {
          question: 'Was kostet der Gassi-Service?',
          answer:
            'Meine Preise für einen Hund:\n\n• Gassi-Service 30 Min: ab 12 €\n• Gassi-Service 60 Min: ab 20 €\n• Kennenlernen (ca. 60 Min inkl. Gassirunde): 15 €\n\nBei mehreren Hunden aus einem Haushalt reduziert sich der Preis pro weiteren Hund. Alle Details und die interaktive Preisübersicht findest du in der Services-Sektion.',
        },
        {
          question: 'Wie läuft die Buchung für Neukunden ab?',
          answer:
            'Buchungen sind nach einem Kennenlerntermin jederzeit möglich. Für alles, was mit Übernachtungen zu tun hat, bitte ich um möglichst viel Vorlauf, da vorab ein Kennenlernen sowie ein Probe­tag und eine Probe­übernachtung stattfinden müssen. Absagen sollten mindestens 24 Stunden vorher erfolgen. Bei kurzfristigen Notfällen (z. B. Krankheit) finden wir natürlich immer eine Lösung.',
        },
        {
          question: 'Wie lange im Voraus sollte ich eine Betreuung buchen?',
          answer:
            'Für den Gassi-Service und die Tagesbetreuung kannst du nach dem ersten Kennenlerntermin auch kurzfristig buchen – je nach Verfügbarkeit. Für die Urlaubsbetreuung mit Übernachtung empfehle ich möglichst viel Vorlauf, da hier vorab ein Kennenlernen, ein Probetag und idealerweise eine Probeübernachtung stattfinden sollten. Nach diesen Probeterminen kann natürlich auch kurzfristig gebucht werden, sofern mein Kalender es hergibt. Die Erfahrung zeigt jedoch: Je mehr Vorlauf du einplanst, desto besser kann ich alles vorbereiten und desto höher ist die Verfügbarkeit.',
        },
      ],
    },
    {
      title: 'Qualifikation & Erfahrung',
      icon: <GraduationCap className="h-5 w-5" />,
      items: [
        {
          question: 'Welche Qualifikationen hast du als Hundesitter?',
          answer:
            'Ich bin mit Hunden aufgewachsen und habe dadurch viel Erfahrung im Umgang mit ihnen gesammelt. Ich verfüge über die erforderliche §11-Erlaubnis nach dem Tierschutzgesetz und bin in Erster Hilfe für Hunde geschult. Zudem bilde ich mich regelmäßig durch Seminare weiter und sammle bereits praktische Erfahrung durch Praktika. Ab Januar 2026 werde ich meine Ausbildung zur Hundepsychologin und Hundetrainerin beginnen.',
        },
        {
          question: 'Kannst du auch mit ängstlichen oder schwierigen Hunden umgehen?',
          answer:
            'Ich habe bereits mehrfach positive Erfahrungen mit ängstlichen und unsicheren Hunden gesammelt und konnte dabei eine gute Bindung zu ihnen aufbauen. Auch wenn ich hierzu keine spezielle Ausbildung habe, gehe ich sehr einfühlsam und geduldig vor. Durch meine bevorstehende Ausbildung zur Hundepsychologin werde ich dieses Wissen vertiefen und professionalisieren. Bei verhaltensauffälligen Hunden plane ich grundsätzlich mehr Zeit für das Kennenlernen ein und passe die Betreuung individuell an die Bedürfnisse des Hundes an.',
        },
      ],
    },
    {
      title: 'Ablauf & Organisation',
      icon: <Clock className="h-5 w-5" />,
      items: [
        {
          question: 'Kann ich dich und deinen Service vorher kennenlernen?',
          answer:
            'Ja, unbedingt! Ein persönliches Kennenlernen (ca. 60 Minuten inkl. gemeinsamer Gassirunde, 15 €) ist der erste Schritt – egal, ob du meinen Gassi-Service oder eine Hundebetreuung planst. Dabei lernen wir uns und deinen Hund in Ruhe kennen, besprechen alle Details und schauen, ob die Chemie stimmt. Für die Hundebetreuung findet das Kennenlernen bei mir statt, damit dein Hund die Umgebung erleben kann, in der er zukünftig betreut wird. Beim Gassi-Service treffen wir uns bei euch, um gemeinsam in eurer Umgebung spazieren zu gehen. Natürlich bin ich flexibel und passe mich gerne euren Wünschen an. Wenn alles gut passt, kann anschließend ein Probetag (max. 12 Std.) stattfinden – und bei geplanter Urlaubsbetreuung auch eine Probeübernachtung.',
        },
        {
          question: 'Wie läuft der Gassi-Service ab?',
          answer:
            'Nach dem Kennenlernen hole ich deinen Hund zu den vereinbarten Zeiten zu Hause ab, gehe mit ihm Gassi (Wald, Felder oder Stadtpark – je nach Vorliebe) und bringe ihn wieder zurück. Du bekommst gerne Foto-Updates per WhatsApp. Die Gassirunde dauert 30 oder 60 Minuten – du entscheidest, was zu deinem Hund passt. Alles Weitere stimmen wir individuell ab.',
        },
        {
          question: 'Wie sieht ein Tag bei der Tagesbetreuung aus?',
          answer:
            'Bei der Tagesbetreuung (max. 12 Std) ist dein Hund bei mir und meinem Freund zu Hause. Dein Hund nimmt aktiv an unserem Familienleben teil. Da ich in Teilzeit arbeite, ist während meiner Arbeitszeiten mein Freund zu Hause, sodass (fast) immer jemand für deinen Vierbeiner da ist. Ich gebe mein Bestes, die bei euch zu Hause geltenden Regeln zu übernehmen, damit sich dein Hund wohlfühlt. Da dein Hund jedoch an unserem Alltag und Lebensstil teilnimmt, können wir nicht alle Routinen zu 100% beibehalten – wir passen uns gegenseitig an. Gerne sende ich dir zwischendurch Fotos und Updates, denn ich liebe es, diese besonderen Momente festzuhalten.',
        },
        {
          question: 'Wie viele Hunde betreust du gleichzeitig?',
          answer:
            'Ich betreue maximal 2-3 Hunde gleichzeitig, damit ich jedem ausreichend Aufmerksamkeit schenken kann. Wenn dein Hund sich in Gesellschaft anderer Hunde nicht wohlfühlt, nicht gut verträglich ist oder einfach die ungeteilte Aufmerksamkeit braucht, biete ich gerne eine exklusive Einzelbetreuung an. So kann ich mich voll und ganz auf die individuellen Bedürfnisse deines Vierbeiners konzentrieren. Für diese intensive 1:1-Betreuung zahlst du den Preis für 2 Hunde.\n\nWenn Hunde aus unterschiedlichen Haushalten zusammenkommen, werden alle Beteiligten vorab informiert. Vor der gemeinsamen Betreuung findet eine kontrollierte Zusammenführung statt, um sicherzustellen, dass sich die Hunde vertragen und miteinander harmonieren. Die Sicherheit und das Wohlbefinden aller Hunde haben dabei höchste Priorität.',
        },
        {
          question: 'Wo findet die Betreuung statt?',
          answer:
            'Beim Gassi-Service hole ich deinen Hund zu Hause ab und bringe ihn nach dem Spaziergang wieder zurück. Die Tages- und Urlaubsbetreuung findet ausschließlich bei mir zu Hause in Gevelsberg statt, wo dein Hund aktiv an unserem Familienleben teilnimmt und gut betreut wird.',
        },
        {
          question: 'Bietest du auch Einzelbetreuung an?',
          answer:
            'Ja, auf jeden Fall! Wenn dein Hund sich in Gesellschaft anderer Hunde nicht wohlfühlt, nicht gut verträglich ist oder einfach die ungeteilte Aufmerksamkeit braucht, biete ich gerne eine exklusive Einzelbetreuung an. So kann ich mich voll und ganz auf die individuellen Bedürfnisse deines Vierbeiners konzentrieren. Für diese intensive 1:1-Betreuung zahlst du den Preis für 2 Hunde.',
        },
      ],
    },
    {
      title: 'Voraussetzungen & Praktisches',
      icon: <CheckCircle2 className="h-5 w-5" />,
      items: [
        {
          question: 'Welche Voraussetzungen müssen erfüllt sein?',
          answer:
            'Für die Betreuung benötige ich von dir den Nachweis über gültige Impfungen deines Hundes (Tollwut, SHPPI, Zwingerhusten), einen aktuellen Parasitenschutz (Flöhe/Zecken, Entwurmung) und eine Hundehaftpflichtversicherung. Außerdem muss meine Checkliste mit allen wichtigen Informationen zu deinem Hund ausgefüllt werden. Dein Hund sollte gesund sein. Bei Gruppenspaziergängen oder gemeinsamer Betreuung mit anderen Hunden sollte dein Hund verträglich sein.',
        },
        {
          question: 'Was muss ich für die Betreuung mitbringen?',
          answer:
            'Für die Betreuung brauche ich ausreichend Futter für die Betreuungszeit, Medikamente mit Anleitung (falls nötig), Impfausweis, Kontaktdaten für Notfälle, Leine, Halsband/Geschirr und optional Lieblingsspielzeug oder Leckerlis. Bei Urlaubsbetreuung besprechen wir vorher eine detaillierte Checkliste.',
        },
        {
          question: 'Welche Informationen benötigst du vor der Betreuung?',
          answer:
            'Vor der ersten Betreuung bekommst du von mir eine Checkliste, die du bitte ausfüllst. Darin frage ich alle wichtigen Informationen zu deinem Hund ab: gewohnte Routinen und Fütterungszeiten, bekannte Kommandos, Verhaltensweisen und Besonderheiten, Tierarzt-Kontaktdaten, Notfallkontakte und vieles mehr. Diese Informationen helfen mir dabei, deinen Hund bestmöglich zu betreuen, seine Bedürfnisse zu verstehen und im Fall der Fälle schnell und richtig zu handeln. So kann ich sicherstellen, dass sich dein Vierbeiner bei mir wohlfühlt und gut aufgehoben ist.',
        },
      ],
    },
  ]

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(question)) {
        newSet.delete(question)
      } else {
        newSet.add(question)
      }
      return newSet
    })
  }

  return (
    <section id="faq" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="d" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/5 absolute top-20 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute right-0 bottom-20 h-[600px] w-[600px] translate-x-1/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Häufig gestellte Fragen
            </h2>
            <p className="text-foreground/70 mx-auto max-w-2xl text-lg md:text-xl">
              Hier findest du Antworten auf die wichtigsten Fragen rund um meine Hundebetreuung.
              Falls deine Frage nicht dabei ist, kontaktiere mich gerne direkt!
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-4">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="border-accent/20 bg-card overflow-hidden rounded-xl border shadow-sm"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="hover:bg-accent/5 flex w-full items-center justify-between gap-3 p-4 text-left md:gap-4 md:p-6"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-accent/10 text-accent flex shrink-0 items-center justify-center rounded-lg p-2.5">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold md:text-2xl">{category.title}</h3>
                  </div>
                  <div className="shrink-0">
                    <ChevronDown
                      className={`text-accent h-6 w-6 ${openCategories.has(categoryIndex) ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {/* Category Questions */}
                {openCategories.has(categoryIndex) && (
                  <div className="border-accent/10 space-y-3 border-t p-3 md:p-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-accent/10 bg-background/50 overflow-hidden rounded-lg border"
                      >
                        <button
                          onClick={() => toggleQuestion(`${categoryIndex}-${itemIndex}`)}
                          className="hover:bg-accent/5 flex w-full items-start justify-between gap-3 p-3 text-left md:p-4"
                        >
                          <p className="flex-1 leading-snug font-semibold wrap-break-word">
                            {item.question}
                          </p>
                          <div className="shrink-0">
                            <ChevronDown
                              className={`text-accent h-5 w-5 ${openQuestions.has(`${categoryIndex}-${itemIndex}`) ? 'rotate-180' : ''}`}
                            />
                          </div>
                        </button>
                        {openQuestions.has(`${categoryIndex}-${itemIndex}`) && (
                          <div className="border-accent/10 border-t px-3 pt-3 pb-4 md:px-4">
                            <p className="text-foreground/80 leading-relaxed wrap-break-word whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
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
