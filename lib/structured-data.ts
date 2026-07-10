import { FAQ_CATEGORIES, SITE_DATA } from '@/lib/site-data'

const organizationId = `${SITE_DATA.url}/#organization`

export const LOCAL_BUSINESS_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': organizationId,
  name: SITE_DATA.legalName,
  description: SITE_DATA.description,
  image: `${SITE_DATA.url}/pfotenpfadfinder.jpg`,
  logo: `${SITE_DATA.url}/pfotenpfadfinder-vorschau.png`,
  url: SITE_DATA.url,
  telephone: SITE_DATA.contact.phone,
  email: SITE_DATA.contact.email,
  foundingDate: SITE_DATA.founded,
  founder: {
    '@type': 'Person',
    name: SITE_DATA.owner,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_DATA.address.street,
    addressLocality: SITE_DATA.address.locality,
    postalCode: SITE_DATA.address.postalCode,
    addressCountry: SITE_DATA.address.countryCode,
  },
  areaServed: SITE_DATA.serviceAreas.map(name => ({
    '@type': 'Place',
    name,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hundebetreuung und Gassi-Service',
    itemListElement: SITE_DATA.services.map(service => ({
      '@type': 'Offer',
      url: service.url,
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': organizationId,
        },
        areaServed: SITE_DATA.serviceAreas.map(name => ({
          '@type': 'Place',
          name,
        })),
      },
    })),
  },
  sameAs: [SITE_DATA.social.instagram],
} as const

export const FAQ_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap(category =>
    category.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  ),
} as const

export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
