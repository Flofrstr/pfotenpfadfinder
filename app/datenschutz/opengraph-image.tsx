import { createSocialImage } from '@/lib/social-image'

export const dynamic = 'force-static'
export const alt = 'Datenschutz – Pfotenpfadfinder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return createSocialImage({ heading: 'Datenschutz', description: 'Deine Daten in guten Händen.' })
}
