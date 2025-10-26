import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Impressum - Pfotenpfadfinder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const glutenFont = await readFile(join(process.cwd(), 'public/fonts/Gluten-Bold.ttf'))
  const interFont = await readFile(join(process.cwd(), 'public/fonts/Inter_18pt-Regular.ttf'))
  const interBoldFont = await readFile(join(process.cwd(), 'public/fonts/Inter_18pt-Bold.ttf'))

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
              fontSize: '80px',
              fontWeight: 700,
              color: 'hsl(32, 67%, 16%)',
              lineHeight: 1.2,
              marginBottom: '30px',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              fontFamily: 'Gluten',
            }}
          >
            Impressum
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'hsl(32, 67%, 25%)',
              lineHeight: 1.4,
              margin: 0,
              fontFamily: 'Inter',
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
            fontFamily: 'Inter',
            fontWeight: 700,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(32, 67%, 28%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <span>0157 72199639</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(32, 67%, 28%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <span>pfotenpfadfinder@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(32, 67%, 28%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
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
      fonts: [
        {
          name: 'Gluten',
          data: glutenFont,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Inter',
          data: interFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBoldFont,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
