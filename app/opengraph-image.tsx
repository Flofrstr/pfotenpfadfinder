import { createSocialImage } from '@/lib/social-image'

export const dynamic = 'force-static'
export const alt =
  'Pfotenpfadfinder – Dein Hund. In guten Händen. Hundebetreuung & Gassi-Service in Gevelsberg und Umgebung.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return createSocialImage()
}
