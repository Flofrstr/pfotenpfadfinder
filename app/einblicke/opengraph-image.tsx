import { createSocialImage } from '@/lib/social-image'

export const dynamic = 'force-static'
export const alt = 'Pfotenpfadfinder – Schnüffeln. Spielen. Einfach Hund sein.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return createSocialImage({
    heading: 'Einfach\nHund sein.',
    description: 'Einblicke in unseren Hundealltag.',
  })
}
