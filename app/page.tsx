import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials-section'
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

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
