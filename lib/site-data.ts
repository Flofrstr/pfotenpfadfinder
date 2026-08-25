export type ServiceArea = 'Gevelsberg' | 'Schwelm' | 'Ennepetal' | 'Hasslinghausen'

export interface TieredPrice {
  firstDog: number
  additionalDogs: readonly [number, number]
}

export interface PricingConfig {
  currency: 'EUR'
  travelPerKilometer: number
  dayCare: TieredPrice
  overnight: TieredPrice
  walk30: TieredPrice
  walk60: TieredPrice
  meetAndGreet: TieredPrice
  trialDay: TieredPrice
  trialOvernight: TieredPrice
  holidayMultiplier: number
  neverAlonePerBillingUnit: number
}

export type FAQIcon = 'shield' | 'euro' | 'graduation-cap' | 'clock' | 'check-circle'

interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  title: string
  icon: FAQIcon
  items: readonly FAQItem[]
}

interface SiteService {
  id: string
  name: string
  description: string
  url: string
}

export interface SiteData {
  name: string
  legalName: string
  url: string
  description: string
  owner: string
  founded: string
  contact: {
    phone: string
    phoneDisplay: string
    email: string
  }
  address: {
    street: string
    postalCode: string
    locality: string
    countryCode: 'DE'
    country: string
  }
  social: {
    instagram: string
    instagramHandle: string
  }
  serviceAreas: readonly ServiceArea[]
  services: readonly SiteService[]
  pricing: PricingConfig
  faqCategories: readonly FAQCategory[]
  availability: {
    headline: string
    detail: string
    bookedThrough: string
    reviewAfter: string
  }
  requirements: readonly string[]
}

export const PRICING = {
  currency: 'EUR',
  travelPerKilometer: 0.6,
  dayCare: { firstDog: 35, additionalDogs: [25, 25] },
  overnight: { firstDog: 40, additionalDogs: [30, 30] },
  walk30: { firstDog: 15, additionalDogs: [5, 5] },
  walk60: { firstDog: 25, additionalDogs: [5, 5] },
  meetAndGreet: { firstDog: 15, additionalDogs: [0, 0] },
  trialDay: { firstDog: 20, additionalDogs: [10, 10] },
  trialOvernight: { firstDog: 25, additionalDogs: [15, 10] },
  holidayMultiplier: 1.5,
  neverAlonePerBillingUnit: 5,
} as const satisfies PricingConfig

export const SERVICE_AREAS = [
  'Gevelsberg',
  'Schwelm',
  'Ennepetal',
  'Hasslinghausen',
] as const satisfies readonly ServiceArea[]

export const FAQ_CATEGORIES = [
  {
    id: 'versicherung-sicherheit',
    title: 'Versicherung & Sicherheit',
    icon: 'shield',
    items: [
      {
        question: 'Ist mein Hund während der Betreuung versichert?',
        answer:
          'Ja, ich verfüge über eine Hundebetreuer-Betriebshaftpflichtversicherung. Diese deckt Schäden ab, die während meiner Betreuung entstehen könnten. Zusätzlich benötigt dein Hund eine eigene Hundehaftpflichtversicherung – bitte prüfe dabei, ob deine Versicherung auch bei Betreuung durch Dritte greift, da nicht alle Policen dies automatisch abdecken. So ist im Schadensfall alles rund um dein Tier vollständig abgesichert.',
      },
      {
        question: 'Was passiert im Notfall?',
        answer:
          'Im Notfall kontaktiere ich dich sofort und bringe deinen Hund bei Bedarf direkt zum Tierarzt. Ich bin in Erster Hilfe für Hunde geschult und habe immer die Kontaktdaten deines Tierarztes griffbereit.',
      },
    ],
  },
  {
    id: 'preise-buchung',
    title: 'Preise & Buchung',
    icon: 'euro',
    items: [
      {
        question: 'Was kostet die Hundebetreuung?',
        answer:
          'Meine Preise für einen Hund:\n\n• Tagesbetreuung (max. 12 Std): 35 € pro Tag\n• Urlaubsbetreuung mit Übernachtung: 40 € pro Tag\n• Kennenlernen (ca. 60 Min inkl. Gassirunde): 15 €\n\nBei mehreren Hunden aus einem Haushalt reduziert sich der Preis pro weiteren Hund. Alle Details und die interaktive Preisübersicht findest du in der Services-Sektion.',
      },
      {
        question: 'Was kostet der Gassi-Service?',
        answer:
          'Meine Preise für einen Hund:\n\n• Gassi-Service 30 Min: ab 15 €\n• Gassi-Service 60 Min: ab 25 €\n• Kennenlernen (ca. 60 Min inkl. Gassirunde): 15 €\n\nBei mehreren Hunden aus einem Haushalt reduziert sich der Preis pro weiteren Hund. Die Anfahrt innerhalb von Gevelsberg, Schwelm, Ennepetal und Hasslinghausen kostet 0,60 € pro Kilometer. Alle Details findest du in der Services-Sektion.',
      },
      {
        question: 'Wie läuft die Buchung für Neukunden ab?',
        answer:
          'Buchungen sind nach einem Kennenlerntermin jederzeit möglich. Für alles, was mit Übernachtungen zu tun hat, bitte ich um möglichst viel Vorlauf, da vorab ein Kennenlernen sowie ein Probetag und eine Probeübernachtung stattfinden müssen. Absagen sollten mindestens 24 Stunden vorher erfolgen. Bei kurzfristigen Notfällen (z. B. Krankheit) finden wir natürlich immer eine Lösung.',
      },
      {
        question: 'Wie lange im Voraus sollte ich eine Betreuung buchen?',
        answer:
          'Für den Gassi-Service und die Tagesbetreuung kannst du nach dem ersten Kennenlerntermin auch kurzfristig buchen – je nach Verfügbarkeit. Für die Urlaubsbetreuung mit Übernachtung empfehle ich möglichst viel Vorlauf, da hier vorab ein Kennenlernen, ein Probetag und idealerweise eine Probeübernachtung stattfinden sollten. Nach diesen Probeterminen kann natürlich auch kurzfristig gebucht werden, sofern mein Kalender es hergibt. Die Erfahrung zeigt jedoch: Je mehr Vorlauf du einplanst, desto besser kann ich alles vorbereiten und desto höher ist die Verfügbarkeit.',
      },
    ],
  },
  {
    id: 'qualifikation-erfahrung',
    title: 'Qualifikation & Erfahrung',
    icon: 'graduation-cap',
    items: [
      {
        question: 'Welche Qualifikationen hast du als Hundesitter?',
        answer:
          'Ich bin mit Hunden aufgewachsen und habe dadurch viel Erfahrung im Umgang mit ihnen gesammelt. Ich verfüge über die erforderliche §11-Erlaubnis nach dem Tierschutzgesetz und bin in Erster Hilfe für Hunde geschult. Zudem bilde ich mich regelmäßig durch Seminare weiter und sammle bereits praktische Erfahrung durch Praktika. Seit Januar 2026 bin ich in Ausbildung zur Hundepsychologin und Hundetrainerin.',
      },
      {
        question: 'Kannst du auch mit ängstlichen oder schwierigen Hunden umgehen?',
        answer:
          'Ich habe bereits mehrfach positive Erfahrungen mit ängstlichen und unsicheren Hunden gesammelt und konnte dabei eine gute Bindung zu ihnen aufbauen. Auch wenn ich hierzu keine spezielle Ausbildung habe, gehe ich sehr einfühlsam und geduldig vor. Durch meine laufende Ausbildung zur Hundepsychologin vertiefe und professionalisiere ich dieses Wissen. Bei verhaltensauffälligen Hunden plane ich grundsätzlich mehr Zeit für das Kennenlernen ein und passe die Betreuung individuell an die Bedürfnisse des Hundes an.',
      },
    ],
  },
  {
    id: 'ablauf-organisation',
    title: 'Ablauf & Organisation',
    icon: 'clock',
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
    id: 'voraussetzungen-praktisches',
    title: 'Voraussetzungen & Praktisches',
    icon: 'check-circle',
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
] as const satisfies readonly FAQCategory[]

export const SITE_DATA = {
  name: 'Pfotenpfadfinder',
  legalName: 'Pfotenpfadfinder - Hundebetreuung Gevelsberg',
  url: 'https://pfotenpfadfinder-hundebetreuung.de',
  description:
    'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung und Urlaubsbetreuung für deinen Hund – liebevoll und zuverlässig.',
  owner: 'Michelle Wattenberg',
  founded: '2025-02',
  contact: {
    phone: '+4915772199639',
    phoneDisplay: '0157 72199639',
    email: 'pfotenpfadfinder@gmail.com',
  },
  address: {
    street: 'Geerstraße 34',
    postalCode: '58285',
    locality: 'Gevelsberg',
    countryCode: 'DE',
    country: 'Deutschland',
  },
  social: {
    instagram: 'https://www.instagram.com/pfotenpfadfinder',
    instagramHandle: '@pfotenpfadfinder',
  },
  serviceAreas: SERVICE_AREAS,
  services: [
    {
      id: 'tagesbetreuung',
      name: 'Tagesbetreuung',
      description: 'Liebevolle Tagesbetreuung für Hunde bis zu zwölf Stunden.',
      url: 'https://pfotenpfadfinder-hundebetreuung.de/#preise',
    },
    {
      id: 'urlaubsbetreuung',
      name: 'Urlaubsbetreuung',
      description: 'Hundebetreuung mit Übernachtung während deines Urlaubs.',
      url: 'https://pfotenpfadfinder-hundebetreuung.de/#preise',
    },
    {
      id: 'gassi-service',
      name: 'Gassi-Service',
      description: 'Individuelle Gassirunden für 30 oder 60 Minuten.',
      url: 'https://pfotenpfadfinder-hundebetreuung.de/#preise',
    },
    {
      id: 'kennenlernen',
      name: 'Kennenlernen und Probetermine',
      description: 'Kennenlernen mit Gassirunde, Probetag und Probeübernachtung.',
      url: 'https://pfotenpfadfinder-hundebetreuung.de/#preise',
    },
  ],
  pricing: PRICING,
  faqCategories: FAQ_CATEGORIES,
  availability: {
    headline: 'Bis einschließlich Dezember ausgebucht',
    detail: 'Termine ab Januar können bereits angefragt werden.',
    bookedThrough: '2026-12-31',
    reviewAfter: '2027-01-01',
  },
  requirements: [
    'Gültige Impfungen (Tollwut, SHPPI und Zwingerhusten)',
    'Aktueller Parasitenschutz',
    'Hundehaftpflichtversicherung',
    'Ausgefüllte Checkliste zum Hund',
    'Gesunder und für die jeweilige Betreuung geeigneter Hund',
  ],
} as const satisfies SiteData
