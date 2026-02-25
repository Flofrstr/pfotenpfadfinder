import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { FeaturesHighlightSection } from '@/components/features-highlight-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { ScrollProgress } from '@/components/scroll-progress'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pfotenpfadfinder-hundebetreuung.de',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pfotenpfadfinder-hundebetreuung.de/#organization',
  name: 'Pfotenpfadfinder - Hundebetreuung Gevelsberg',
  description:
    'Hundebetreuung in Gevelsberg und Umgebung. Gassi-Service, Tagesbetreuung und Urlaubsbetreuung für Ihren Hund',
  image: 'https://pfotenpfadfinder-hundebetreuung.de/pfotenpfadfinder.jpg',
  logo: 'https://pfotenpfadfinder-hundebetreuung.de/logo.svg',
  url: 'https://pfotenpfadfinder-hundebetreuung.de',
  telephone: '+4915772199639',
  email: 'pfotenpfadfinder@gmail.com',
  priceRange: '€€',
  foundingDate: '2025-02',
  founder: {
    '@type': 'Person',
    name: 'Michelle Wattenberg',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Geerstraße 34',
    addressLocality: 'Gevelsberg',
    postalCode: '58285',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.32885471546612,
    longitude: 7.342110033006871,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Gevelsberg',
    },
    {
      '@type': 'City',
      name: 'Schwelm',
    },
    {
      '@type': 'City',
      name: 'Ennepetal',
    },
    {
      '@type': 'City',
      name: 'Witten',
    },
    {
      '@type': 'City',
      name: 'Hasslinghausen',
    },
    {
      '@type': 'City',
      name: 'Sprockhövel',
    },
    {
      '@type': 'City',
      name: 'Wetter (Ruhr)',
    },
    {
      '@type': 'City',
      name: 'Wuppertal',
    },
    {
      '@type': 'City',
      name: 'Hagen',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hundebetreuung Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hundebetreuung',
          description: 'Tagesbetreuung für Hunde bis zu 12 Stunden',
          provider: {
            '@id': 'https://pfotenpfadfinder-hundebetreuung.de/#organization',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gassi gehen',
          description: 'Professioneller Gassi-Service für 30 oder 60 Minuten',
          provider: {
            '@id': 'https://pfotenpfadfinder-hundebetreuung.de/#organization',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Urlaubsbetreuung',
          description: 'Hundebetreuung mit Übernachtung während Ihres Urlaubs',
          provider: {
            '@id': 'https://pfotenpfadfinder-hundebetreuung.de/#organization',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kennenlernen',
          description: 'Erstes Kennenlernen mit Gassirunde',
          provider: {
            '@id': 'https://pfotenpfadfinder-hundebetreuung.de/#organization',
          },
        },
      },
    ],
  },
  sameAs: ['https://www.instagram.com/pfotenpfadfinder'],
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ist mein Hund während der Betreuung versichert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, ich verfüge über eine professionelle Hundebetreuer-Haftpflichtversicherung. Diese deckt Schäden ab, die während meiner Betreuung entstehen könnten. Zusätzlich benötigt dein Hund eine eigene Hundehaftpflichtversicherung – das ist für alle meine Kunden Voraussetzung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert im Notfall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Notfall kontaktiere ich dich sofort und bringe deinen Hund bei Bedarf direkt zum Tierarzt. Ich bin in Erster Hilfe für Hunde geschult und habe immer die Kontaktdaten deines Tierarztes griffbereit. Wir besprechen vorab, bis zu welchem Betrag ich im Notfall eigenständig handeln darf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Hundebetreuung in Gevelsberg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meine Preise findest du transparent auf der Website in der Services-Sektion. Für mehrere Hunde aus einem Haushalt gibt es Mengenrabatt. Anfahrt innerhalb Gevelsberg, Schwelm, Ennepetal und Hasslinghausen: €0,40/km.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig kann ich buchen oder absagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buchungen sind nach einem Kennenlerntermin jederzeit möglich. Absagen bitte mindestens 24 Stunden vorher. Bei kurzfristigen Notfällen (z.B. Krankheit) finden wir immer eine Lösung. Regelmäßige Termine können flexibel angepasst werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich dich vorher kennenlernen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, unbedingt! Das erste Kennenlernen (ca. 60 Min inkl. Gassirunde) ist wichtig, damit wir uns und deinen Hund in Ruhe kennenlernen, alle Details besprechen und schauen, ob die Chemie stimmt. Erst danach entscheidest du, ob du meinen Service buchen möchtest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Qualifikationen hast du als Hundesitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ich bringe langjährige Erfahrung mit Hunden mit und bin seit Januar 2026 in Ausbildung zur Hundepsychologin und Hundetrainerin. Ich verfüge über die erforderliche §11-Erlaubnis nach dem Tierschutzgesetz und bin in Erster Hilfe für Hunde geschult. Außerdem arbeite ich hauptberuflich im medizinischen Bereich (MTLA), was mir im Umgang mit Notfällen hilft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kannst du auch mit ängstlichen oder schwierigen Hunden umgehen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, ich habe Erfahrung mit ängstlichen und unsicheren Hunden, besonders aus dem Tierschutz. Durch meine laufende Ausbildung zur Hundepsychologin vertiefe ich dieses Wissen weiter. Bei verhaltensauffälligen Hunden plane ich mehr Zeit für das Kennenlernen ein und passe die Betreuung individuell an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich die Hundebetreuung von der Steuer absetzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Wenn ich den Service bei dir zu Hause durchführe (z.B. Gassi-Service von deiner Haustür, Urlaubsbetreuung bei dir), kannst du 20% der Kosten als haushaltsnahe Dienstleistung steuerlich absetzen. Dafür stelle ich dir eine ordnungsgemäße Rechnung aus. So sparst du bares Geld!',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <FeaturesHighlightSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
