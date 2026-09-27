import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SITE_DATA } from '@/lib/site-data'

interface SocialImageOptions {
  heading?: string
  description?: string
}

export async function createSocialImage({
  heading = 'Dein Hund.\nIn guten Händen.',
  description = 'Hundebetreuung & Gassi-Service',
}: SocialImageOptions = {}) {
  const [photo, headingFont, bodyFont, css] = await Promise.all([
    readFile(join(process.cwd(), 'public/pfotenpfadfinder.jpg')),
    readFile(join(process.cwd(), 'public/fonts/Gluten-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/Inter_18pt-Regular.ttf')),
    readFile(join(process.cwd(), 'app/globals.css'), 'utf8'),
  ])
  // ImageResponse has no stylesheet context: resolve the site's light-theme tokens.
  const lightTheme = css.match(/:root\s*\{([^}]+)\}/)?.[1] ?? ''
  const color = (name: string) => {
    const value = lightTheme.match(new RegExp(`--${name}:\\s*([^;]+);`))?.[1]
    if (!value) throw new Error(`Missing social image color token: ${name}`)
    return `hsl(${value.trim().split(/\s+/).join(', ')})`
  }

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: color('background'),
        color: color('foreground'),
        fontFamily: 'Inter',
        padding: 56,
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          width: 690,
          height: 800,
          borderRadius: '50%',
          background: color('secondary'),
          right: -170,
          top: -80,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', width: 625, position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            fontFamily: 'Gluten',
            fontWeight: 700,
            fontSize: 42,
          }}
        >
          <svg width="46" height="46" viewBox="0 0 24 24" fill={color('accent')}>
            <ellipse cx="5" cy="8" rx="2.5" ry="3.3" transform="rotate(-25 5 8)" />
            <ellipse cx="10" cy="4.5" rx="2.5" ry="3.3" />
            <ellipse cx="16" cy="5" rx="2.5" ry="3.3" transform="rotate(15 16 5)" />
            <ellipse cx="20" cy="10" rx="2.5" ry="3.3" transform="rotate(30 20 10)" />
            <path d="M5 18c0-3 4-8 7-8s7 5 7 8c0 5-5 2-7 2s-7 3-7-2Z" />
          </svg>
          {SITE_DATA.name}
        </div>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Gluten',
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1.12,
            marginTop: 68,
            maxWidth: 620,
          }}
        >
          {heading}
        </div>
        <div
          style={{ display: 'flex', fontSize: 28, marginTop: 25, maxWidth: 570, lineHeight: 1.4 }}
        >
          {description}
        </div>
        <div style={{ display: 'flex', marginTop: 'auto', flexDirection: 'column', gap: 10 }}>
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 6,
              borderRadius: 3,
              background: color('accent'),
              marginBottom: 12,
            }}
          />
          <div style={{ display: 'flex', fontSize: 24 }}>Gevelsberg & Umgebung</div>
          <div style={{ display: 'flex', fontSize: 19, color: color('muted-foreground') }}>
            Gassi gehen. Wohlfühlen. Dazugehören.
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 45,
          top: 67,
          width: 444,
          height: 496,
          padding: 12,
          borderRadius: 24,
          background: color('background'),
          transform: 'rotate(3deg)',
          boxShadow: `0 16px 36px ${color('border')}`,
        }}
      >
        {/* oxlint-disable-next-line nextjs/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${photo.toString('base64')}`}
          alt=""
          width={420}
          height={472}
          style={{ objectFit: 'cover', borderRadius: 14 }}
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Gluten', data: headingFont, style: 'normal', weight: 700 },
        { name: 'Inter', data: bodyFont, style: 'normal', weight: 400 },
      ],
    },
  )
}
