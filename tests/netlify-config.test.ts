import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

const netlifyConfig = readFileSync(join(process.cwd(), 'netlify.toml'), 'utf8')

function normalizeConfig(value: string): string {
  return value.replace(/\r\n/g, '\n')
}

describe('Netlify-Produktionsvertrag', () => {
  const config = normalizeConfig(netlifyConfig)

  it('pinnt die Build-Runtime auf Node 24', () => {
    expect(config).toMatch(/\[build\.environment]\s+[\s\S]*?NODE_VERSION\s*=\s*"24"/)
  })

  it('setzt die vereinbarten globalen Sicherheits-Header', () => {
    expect(config).toContain(
      `Content-Security-Policy = "base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'self'"`,
    )
    expect(config).toContain(
      'Permissions-Policy = "camera=(), microphone=(), geolocation=(), payment=(), usb=()"',
    )
    expect(config).toContain('Referrer-Policy = "strict-origin-when-cross-origin"')
    expect(config).toContain('X-Content-Type-Options = "nosniff"')
    expect(config).toContain('X-Frame-Options = "DENY"')
  })

  it('schließt den Formular-Blueprint zusätzlich per Response-Header aus dem Index aus', () => {
    expect(config).toMatch(
      /\[\[headers]]\s+for\s*=\s*"\/contact-form\.html"\s+\[headers\.values]\s+X-Robots-Tag\s*=\s*"noindex, nofollow"/,
    )
  })

  it('cached gehashte Next-Assets unveränderlich und direkte Assets konservativ', () => {
    expect(config).toMatch(
      /for\s*=\s*"\/_next\/static\/\*"[\s\S]*?Cache-Control\s*=\s*"public, max-age=31536000, immutable"/,
    )
    expect(config).toContain(
      'Cache-Control = "public, max-age=86400, stale-while-revalidate=604800"',
    )
  })

  it('verwendet keinen veralteten expliziten Next.js-Adapter', () => {
    expect(config).not.toContain('@netlify/plugin-nextjs')
  })
})
