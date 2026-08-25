import { describe, expect, it } from 'vitest'

import { SITE_DATA } from '@/lib/site-data'
import {
  LOCAL_BUSINESS_STRUCTURED_DATA,
  serializeStructuredData,
  WEBSITE_STRUCTURED_DATA,
} from '@/lib/structured-data'

describe('strukturierte SEO-Daten', () => {
  it('beschreibt das lokale Unternehmen mit konsistentem Namen und Region', () => {
    expect(LOCAL_BUSINESS_STRUCTURED_DATA).toMatchObject({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_DATA.url}/#organization`,
      name: SITE_DATA.name,
      url: SITE_DATA.url,
      address: {
        addressLocality: SITE_DATA.address.locality,
        addressRegion: SITE_DATA.address.region,
        addressCountry: SITE_DATA.address.countryCode,
      },
    })
  })

  it('verknüpft die Website mit dem lokalen Unternehmen', () => {
    expect(WEBSITE_STRUCTURED_DATA).toEqual({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_DATA.url}/#website`,
      url: SITE_DATA.url,
      name: SITE_DATA.name,
      alternateName: 'Pfotenpfadfinder Hundebetreuung',
      inLanguage: 'de-DE',
      publisher: {
        '@id': `${SITE_DATA.url}/#organization`,
      },
    })
  })

  it('neutralisiert HTML-Startzeichen bei der Serialisierung', () => {
    expect(serializeStructuredData({ value: '</script><script>' })).toBe(
      '{"value":"\\u003c/script>\\u003cscript>"}',
    )
  })
})
