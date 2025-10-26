import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Datenschutzerklärung - Pfotenpfadfinder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'hsl(24, 33%, 94%)',
          padding: '80px',
        }}
      >
        {/* Paw icon */}
        <div
          style={{
            display: 'flex',
            marginBottom: '40px',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100" height="100">
            <path
              d="M256 224c-79.4 0-192 122.8-192 200.3 0 34.9 26.8 55.8 71.7 55.8 48.8 0 81.1-25.1 120.3-25.1 39.5 0 71.9 25.1 120.3 25.1 44.9 0 71.7-20.9 71.7-55.8C448 346.8 335.4 224 256 224zm-147.3-12.6c-10.4-34.7-42.4-57.1-71.6-50.1-29.1 7-44.3 40.7-33.9 75.3 10.4 34.7 42.4 57.1 71.6 50.1 29.1-7 44.3-40.7 33.9-75.3zm84.7-20.8c30.9-8.1 46.4-49.9 34.6-93.4s-46.5-72-77.5-63.9-46.4 49.9-34.6 93.4c11.8 43.4 46.5 72 77.5 63.9zm281.4-29.3c-29.1-7-61.2 15.5-71.6 50.1-10.4 34.7 4.8 68.4 33.9 75.3 29.1 7 61.2-15.5 71.6-50.1 10.4-34.7-4.8-68.4-33.9-75.3zm-156.3 29.3c30.9 8.1 65.6-20.5 77.5-63.9 11.8-43.4-3.6-85.2-34.6-93.4s-65.6 20.5-77.5 63.9c-11.8 43.4 3.6 85.2 34.6 93.4z"
              fill="hsl(329, 27%, 60%)"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 700,
              color: 'hsl(32, 67%, 16%)',
              lineHeight: 1.2,
              marginBottom: '30px',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            Datenschutz
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'hsl(32, 67%, 25%)',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Pfotenpfadfinder · Hundebetreuung
          </p>
        </div>

        {/* Contact Info */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            fontSize: '22px',
            color: 'hsl(32, 67%, 28%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📞</span>
            <span>0157 72199639</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📧</span>
            <span>pfotenpfadfinder@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📷</span>
            <span>@Pfotenpfadfinder</span>
          </div>
        </div>

        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '12px',
            background: 'hsl(329, 27%, 60%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
