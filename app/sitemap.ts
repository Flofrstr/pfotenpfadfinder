import type { MetadataRoute } from 'next'
import { SITE_DATA } from '@/lib/site-data'

const LAST_SIGNIFICANT_UPDATE = '2026-08-25'

const HOME_IMAGE_PATHS = [
  '/pfotenpfadfinder.jpg',
  '/ueber_mich_michelle-plus-hunde.jpeg',
  '/Wilma.jpeg',
  '/Pino.jpeg',
  '/Filou.jpeg',
  '/Bea_u._Günni.jpeg',
  '/Orca.jpeg',
  '/Fiebi.jpeg',
  '/Frieda.jpeg',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_DATA.url,
      lastModified: LAST_SIGNIFICANT_UPDATE,
      images: HOME_IMAGE_PATHS.map(path => new URL(path, SITE_DATA.url).href),
    },
    {
      url: `${SITE_DATA.url}/impressum`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
    {
      url: `${SITE_DATA.url}/datenschutz`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
  ]
}
