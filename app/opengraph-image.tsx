import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SITE_DATA } from '@/lib/site-data'

export const dynamic = 'force-static'
export const alt = 'Pfotenpfadfinder – liebevolle Hundebetreuung und Gassi-Service in Gevelsberg'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/pfotenpfadfinder.jpg'))
  const photoDataUrl = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#2f2007',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* oxlint-disable-next-line nextjs/no-img-element */}
      <img
        src={photoDataUrl}
        alt=""
        width="1200"
        height="630"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          background:
            'linear-gradient(90deg, rgba(25, 16, 3, 0.93) 0%, rgba(25, 16, 3, 0.74) 50%, rgba(25, 16, 3, 0.08) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '720px',
          padding: '76px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
          {SITE_DATA.name}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '26px',
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          Hundebetreuung & Gassi-Service
        </div>
        <div style={{ display: 'flex', marginTop: '22px', fontSize: 23, lineHeight: 1.35 }}>
          Gevelsberg · Schwelm · Ennepetal · Hasslinghausen
        </div>
      </div>
    </div>,
    size,
  )
}
