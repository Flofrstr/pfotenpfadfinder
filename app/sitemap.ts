import type { MetadataRoute } from 'next'
import { SITE_DATA } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_DATA.url,
    },
    {
      url: `${SITE_DATA.url}/impressum`,
    },
    {
      url: `${SITE_DATA.url}/datenschutz`,
    },
  ]
}
