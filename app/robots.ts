import type { MetadataRoute } from 'next'
import { SITE_DATA } from '@/lib/site-data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User'],
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot'],
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_DATA.url}/sitemap.xml`,
    host: SITE_DATA.url,
  }
}
