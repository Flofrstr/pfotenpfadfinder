import { createSocialImage } from '@/lib/social-image'

export const dynamic = 'force-static'
export const alt = 'Impressum – Pfotenpfadfinder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return createSocialImage({
    heading: 'Impressum',
    description: 'Die Menschen hinter Pfotenpfadfinder.',
  })
}
