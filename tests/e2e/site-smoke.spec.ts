import { expect, test, type Page } from '@playwright/test'

import { FAQ_CATEGORIES, SITE_DATA } from '../../lib/site-data'

const canonicalPages = [
  {
    path: '/',
    canonical: SITE_DATA.url,
    title: 'Pfotenpfadfinder | Hundebetreuung Gevelsberg & Gassi-Service',
  },
  {
    path: '/impressum',
    canonical: `${SITE_DATA.url}/impressum`,
    title: 'Impressum | Pfotenpfadfinder',
  },
  {
    path: '/datenschutz',
    canonical: `${SITE_DATA.url}/datenschutz`,
    title: 'Datenschutzerklärung | Pfotenpfadfinder',
  },
] as const

function monitorBrowserErrors(page: Page) {
  const errors: string[] = []

  page.on('console', message => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`)
  })
  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`))

  return () => expect(errors, 'Die Route erzeugt Browser- oder Hydration-Fehler').toEqual([])
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_match, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_match, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
}

function htmlToText(value: string): string {
  return decodeHtmlEntities(
    value
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function sectionFromInitialHtml(html: string, id: string): string {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const section = new RegExp(
    `<section\\b[^>]*\\bid=["']${escapedId}["'][^>]*>[\\s\\S]*?<\\/section>`,
    'i',
  ).exec(html)?.[0]

  expect(section, `SSR-HTML enthält keine <section id="${id}">`).toBeDefined()
  return section ?? ''
}

test.describe('kanonische Seiten', () => {
  for (const route of canonicalPages) {
    test(`${route.path} besitzt eindeutige vollständige Metadaten`, async ({ page }) => {
      const assertNoBrowserErrors = monitorBrowserErrors(page)
      const response = await page.goto(route.path, { waitUntil: 'load' })

      expect(response?.status()).toBe(200)
      await expect(page.locator('head title')).toHaveCount(1)
      await expect(page).toHaveTitle(route.title)
      await expect(page.locator('head meta[name="description"]')).toHaveCount(1)
      await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1)
      await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute(
        'href',
        route.canonical,
      )

      const openGraph = {
        title: page.locator('head meta[property="og:title"]'),
        description: page.locator('head meta[property="og:description"]'),
        url: page.locator('head meta[property="og:url"]'),
        image: page.locator('head meta[property="og:image"]'),
        imageAlt: page.locator('head meta[property="og:image:alt"]'),
      }

      for (const tag of Object.values(openGraph)) await expect(tag).toHaveCount(1)
      await expect(openGraph.title).toHaveAttribute('content', route.title)
      await expect(openGraph.url).toHaveAttribute('content', route.canonical)
      await expect(openGraph.image).toHaveAttribute('content', /^https:\/\/.+/)
      await expect(openGraph.imageAlt).not.toHaveAttribute('content', '')

      await expect(page.locator('head meta[name="twitter:card"]')).toHaveAttribute(
        'content',
        'summary_large_image',
      )
      await expect(page.locator('head meta[name="twitter:title"]')).toHaveAttribute(
        'content',
        route.title,
      )

      const footerContact = page.locator('footer').getByRole('link', { name: 'Kontakt' })
      await expect(footerContact).toHaveAttribute('href', '/#kontakt')
      assertNoBrowserErrors()
    })
  }

  test('eine unbekannte Route ist eine saubere noindex-404', async ({ page }) => {
    const response = await page.goto('/nicht-vorhanden-playwright-smoke', { waitUntil: 'load' })

    expect(response?.status()).toBe(404)
    await expect(page.locator('head title')).toHaveCount(1)
    await expect(page.locator('head meta[name="robots"]')).toHaveCount(1)
    await expect(page.locator('head meta[name="robots"]')).toHaveAttribute('content', /noindex/i)
    await expect(page.locator('head link[rel="canonical"]')).toHaveCount(0)
    await expect(page.locator('head meta[property="og:url"]')).toHaveCount(0)
    await expect(page).not.toHaveTitle(canonicalPages[0].title)
  })
})

test.describe('agentenlesbares initiales HTML', () => {
  test('enthält die echten Preise bereits ohne Hydration', async ({ request }) => {
    const response = await request.get('/')
    expect(response.status()).toBe(200)

    const initialHtml = await response.text()
    const priceMarkup = sectionFromInitialHtml(initialHtml, 'preise')
    const priceText = htmlToText(priceMarkup)
    const requiredPrices = [
      SITE_DATA.pricing.dayCare.firstDog,
      SITE_DATA.pricing.overnight.firstDog,
      SITE_DATA.pricing.walk30.firstDog,
      SITE_DATA.pricing.walk60.firstDog,
      SITE_DATA.pricing.meetAndGreet.firstDog,
      SITE_DATA.pricing.trialDay.firstDog,
      SITE_DATA.pricing.trialOvernight.firstDog,
    ]

    for (const amount of requiredPrices) {
      expect(priceText).toMatch(new RegExp(`(?:^|\\D)${amount}(?:[,.]00)?\\s*€`))
    }

    expect(priceText).toMatch(/0,60\s*€\s*(?:pro Kilometer|\/\s*km)/i)
    expect(priceText).toContain('Gevelsberg, Schwelm, Ennepetal, Hasslinghausen')

    for (const amount of new Set(requiredPrices)) {
      expect(priceMarkup).toMatch(new RegExp(`<data\\b[^>]*\\bvalue=["']${amount}["']`, 'i'))
    }
  })

  test('enthält sämtliche FAQ-Fragen und Antworten in semantischen Details', async ({
    request,
  }) => {
    const response = await request.get('/')
    expect(response.status()).toBe(200)

    const initialHtml = await response.text()
    const faqMarkup = sectionFromInitialHtml(initialHtml, 'faq')
    const faqText = htmlToText(faqMarkup)
    const faqItems = FAQ_CATEGORIES.reduce<Array<{ question: string; answer: string }>>(
      (items, category) => {
        items.push(...category.items)
        return items
      },
      [],
    )

    expect(faqMarkup.match(/<details\b/gi)?.length).toBeGreaterThanOrEqual(faqItems.length)
    expect(faqMarkup.match(/<summary\b/gi)?.length).toBeGreaterThanOrEqual(faqItems.length)

    for (const item of faqItems) {
      expect(faqText).toContain(normalizeText(item.question))
      expect(faqText).toContain(normalizeText(item.answer))
    }
  })
})

test.describe('Crawler- und Agenten-Routen', () => {
  test('robots.txt trennt Such-/User-Agenten von Trainingscrawlern', async ({ request }) => {
    const response = await request.get('/robots.txt')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('text/plain')
    const body = await response.text()

    for (const allowedAgent of [
      'OAI-SearchBot',
      'ChatGPT-User',
      'Claude-SearchBot',
      'Claude-User',
    ]) {
      const block = body
        .split(/\r?\n\s*\r?\n/)
        .find(candidate => new RegExp(`^User-Agent: ${allowedAgent}$`, 'im').test(candidate))
      expect(block, `robots.txt enthält keinen Block für ${allowedAgent}`).toBeDefined()
      expect(block).toMatch(/^Allow: \/$/im)
      expect(block).not.toMatch(/^Disallow: \/$/im)
    }

    for (const blockedAgent of ['GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot']) {
      const block = body
        .split(/\r?\n\s*\r?\n/)
        .find(candidate => new RegExp(`^User-Agent: ${blockedAgent}$`, 'im').test(candidate))
      expect(block, `robots.txt enthält keinen Block für ${blockedAgent}`).toBeDefined()
      expect(block).toMatch(/^Disallow: \/$/im)
    }

    expect(body).toContain(`Sitemap: ${SITE_DATA.url}/sitemap.xml`)
  })

  test('sitemap.xml enthält ausschließlich die drei kanonischen Seiten', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('xml')
    const body = await response.text()
    const urls = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decodeHtmlEntities(match[1]))

    expect(urls).toEqual([
      SITE_DATA.url,
      `${SITE_DATA.url}/impressum`,
      `${SITE_DATA.url}/datenschutz`,
    ])
    expect(body).not.toMatch(/<(?:lastmod|changefreq|priority)>/i)
  })

  test('llms.txt beschreibt Fakten, Preise, Voraussetzungen und direkte Links', async ({
    request,
  }) => {
    const response = await request.get('/llms.txt')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('text/plain')
    const body = normalizeText(await response.text())

    for (const area of SITE_DATA.serviceAreas) expect(body).toContain(area)
    for (const requirement of SITE_DATA.requirements) expect(body).toContain(requirement)
    for (const link of ['#about', '#preise', '#faq', '#kontakt']) expect(body).toContain(link)

    expect(body).toMatch(/35,00\s*€/)
    expect(body).toMatch(/40,00\s*€/)
    expect(body).toMatch(/0,60\s*€[^.]*Kilometer/i)
    expect(body).toContain(SITE_DATA.contact.email)
    expect(body).not.toContain('PetCareService')
  })

  test('contact-form.html bleibt ein noindex-Blueprint mit identischen Feldnamen', async ({
    request,
  }) => {
    const response = await request.get('/contact-form.html')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('text/html')
    const body = await response.text()

    expect(body).toMatch(/<meta\b[^>]*name=["']robots["'][^>]*content=["']noindex, nofollow["']/i)
    expect(body).toMatch(/<form\b[^>]*action=["']\/["'][^>]*method=["']POST["']/i)
    for (const field of ['form-name', 'bot-field', 'name', 'email', 'phone', 'message']) {
      expect(body).toMatch(new RegExp(`\\bname=["']${field}["']`))
    }
  })
})
