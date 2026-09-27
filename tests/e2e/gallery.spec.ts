import { expect, test } from '@playwright/test'

test('Galerie filtert und zeigt Fotos ohne zusätzliche Bildansicht', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/einblicke')
  const gallery = page.getByRole('region', { name: 'Fotogalerie', exact: true })
  const thumbnails = gallery.getByRole('img')
  await expect(thumbnails).toHaveCount(120)

  for (const label of ['Bitte lächeln!', 'Auf Schnüffeltour']) {
    await page.getByRole('button', { name: label, exact: true }).click()
    await expect(
      gallery.getByRole('img', {
        name: 'Heller Hund mit Geschirr sitzt auf einem sonnigen Waldweg',
      }),
    ).toHaveCount(1)
  }
  await page.getByRole('button', { name: 'Kuschelzeit', exact: true }).click()
  await expect(
    gallery.getByRole('img', {
      name: 'Schwarzer Hund lässt sich auf der Terrasse am Kinn streicheln',
    }),
  ).toHaveCount(1)
  await page.getByRole('button', { name: 'Spiel & Spaß', exact: true }).click()
  await expect(
    gallery.getByRole('img', { name: 'Weißer Hund läuft über eine grüne Wiese' }),
  ).toHaveCount(1)

  const restFilter = page.getByRole('button', { name: 'Dösen & Träumen', exact: true })
  await restFilter.click()
  await expect(restFilter).toHaveAttribute('aria-pressed', 'true')
  await expect(thumbnails).toHaveCount(41)
  for (const id of [10, 18, 21, 26]) {
    await expect(gallery.locator(`img[src*="hundemoment-${id}.webp"]`)).toHaveCount(0)
  }
  await thumbnails.first().click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page).toHaveURL(/\/einblicke$/)
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
  await page.getByRole('button', { name: 'Alle Einblicke', exact: true }).click()
  await expect(thumbnails).toHaveCount(120)
  expect(errors).toEqual([])
})

for (const theme of ['light', 'dark']) {
  test(`Galerie und Vorschau passen auf Mobilgerät und Desktop (${theme})`, async ({
    page,
  }, testInfo) => {
    await page.addInitScript(value => localStorage.setItem('theme', value), theme)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 })
      await page.goto('/einblicke')
      await expect(page.locator('html')).toHaveClass(new RegExp(theme))
      await expect
        .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
        .toBe(true)
      const firstPhoto = page.getByRole('region', { name: 'Fotogalerie' }).getByRole('img').first()
      await firstPhoto.scrollIntoViewIfNeeded()
      await expect
        .poll(() =>
          firstPhoto.evaluate(
            (image: HTMLImageElement) =>
              image.complete && image.naturalWidth > 0 && image.height > 100,
          ),
        )
        .toBe(true)
      await page.screenshot({ path: testInfo.outputPath(`gallery-${width}-${theme}.png`) })
      await page.goto('/#einblicke')
      await expect(page.getByRole('link', { name: 'Alle Einblicke entdecken' })).toBeVisible()
      await page
        .locator('section#einblicke')
        .screenshot({ path: testInfo.outputPath(`preview-${width}-${theme}.png`) })
      await page.getByRole('link', { name: 'Alle Einblicke entdecken' }).click()
      await expect(page).toHaveURL(/\/einblicke$/)
    }
  })
}

test('Einblicke sind über das mobile Menü erreichbar', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 667 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Mobiles Menü öffnen' }).click()
  const navigation = page.getByRole('navigation', { name: 'Mobile Hauptnavigation' })
  await navigation.getByRole('link', { name: 'Einblicke', exact: true }).click()
  await expect(page).toHaveURL(/\/einblicke$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Schnüffeln. Spielen. Einfach Hund sein.',
  )
})
