import type { Metadata } from 'next'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { FAQSection } from '@/components/faq-section'
import { FeaturesHighlightSection } from '@/components/features-highlight-section'
import { HeroSection } from '@/components/hero-section'
import { ScrollProgress } from '@/components/scroll-progress'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SITE_DATA } from '@/lib/site-data'
import {
  FAQ_STRUCTURED_DATA,
  LOCAL_BUSINESS_STRUCTURED_DATA,
  serializeStructuredData,
} from '@/lib/structured-data'

const title = 'Pfotenpfadfinder | Hundebetreuung Gevelsberg & Gassi-Service'
const description =
  'Hundebetreuung in Gevelsberg, Schwelm, Ennepetal und Hasslinghausen: Gassi-Service, Tagesbetreuung und Urlaubsbetreuung – liebevoll und zuverlässig.'
const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Pfotenpfadfinder – liebevolle Hundebetreuung und Gassi-Service in Gevelsberg',
}

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: SITE_DATA.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_DATA.url,
    siteName: SITE_DATA.name,
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
}

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(LOCAL_BUSINESS_STRUCTURED_DATA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(FAQ_STRUCTURED_DATA) }}
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
