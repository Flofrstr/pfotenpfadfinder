import { expect, test, type Page } from '@playwright/test'

import { CONTACT_FORM_FIELDS } from '../../components/contact-form-fields'

function monitorBrowserErrors(page: Page) {
  const errors: string[] = []

  page.on('console', message => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`)
  })
  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`))

  return () => expect(errors, 'Die Interaktion erzeugt Browser- oder Hydration-Fehler').toEqual([])
}

test('der Sprunglink führt Tastaturnutzer direkt zum Hauptinhalt', async ({ page }) => {
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/', { waitUntil: 'load' })

  const skipLink = page.getByRole('link', { name: 'Zum Hauptinhalt springen' })
  await page.keyboard.press('Tab')
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeVisible()

  await page.keyboard.press('Enter')
  await expect(page.locator('main#main-content')).toBeFocused()
  await expect(page).toHaveURL(/#main-content$/)
  assertNoBrowserErrors()
})

test('das mobile Menü ist per Tastatur ein vollständiger Dialog', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/', { waitUntil: 'load' })

  const menuButton = page.locator('button[aria-controls="mobile-navigation-dialog"]')
  await expect(menuButton).toHaveAccessibleName(/menü öffnen/i)
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  await expect(menuButton).toHaveAttribute('aria-controls')
  await menuButton.click()

  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveAttribute('aria-modal', 'true')
  await expect(dialog.getByRole('navigation', { name: 'Mobile Hauptnavigation' })).toBeVisible()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  await expect(menuButton).toHaveAccessibleName(/menü schließen/i)
  await expect
    .poll(() => page.evaluate(() => getComputedStyle(document.body).overflow))
    .toBe('hidden')
  expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true)

  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  await expect(menuButton).toHaveAccessibleName(/menü öffnen/i)
  await expect(menuButton).toBeFocused()
  await expect
    .poll(() => page.evaluate(() => getComputedStyle(document.body).overflow))
    .not.toBe('hidden')
  assertNoBrowserErrors()
})

test('Preissteuerung und Carousel geben ihren Zustand verständlich aus', async ({ page }) => {
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/', { waitUntil: 'load' })

  const priceTabs = page.getByRole('tablist', { name: /preise/i })
  const overviewTab = priceTabs.getByRole('tab', { name: 'Preisübersicht' })
  const calculatorTab = priceTabs.getByRole('tab', { name: 'Preisrechner' })
  await expect(overviewTab).toHaveAttribute('aria-selected', 'true')
  await expect(calculatorTab).toHaveAttribute('aria-selected', 'false')
  await calculatorTab.click()
  await expect(calculatorTab).toHaveAttribute('aria-selected', 'true')
  await expect(overviewTab).toHaveAttribute('aria-selected', 'false')

  const oneDog = page.getByRole('button', { name: '1 Hund auswählen' })
  const twoDogs = page.getByRole('button', { name: '2 Hunde auswählen' })
  await expect(oneDog).toHaveAttribute('aria-pressed', 'true')
  await twoDogs.click()
  await expect(twoDogs).toHaveAttribute('aria-pressed', 'true')
  await expect(oneDog).toHaveAttribute('aria-pressed', 'false')

  await overviewTab.click()
  const firstAnimatedPrice = page.locator('[data-animated-number="true"]').first()
  await expect(firstAnimatedPrice).toHaveAttribute('data-value', '60')

  const holidayToggle = page.getByRole('button', { name: 'Feiertagspreise anzeigen' })
  await expect(holidayToggle).toHaveAttribute('aria-pressed', 'false')
  await holidayToggle.click()
  await expect(holidayToggle).toHaveAttribute('aria-pressed', 'true')

  await page.waitForTimeout(150)
  await expect(firstAnimatedPrice).toHaveAttribute('data-value', '90')
  await expect(firstAnimatedPrice).toHaveAttribute('data-animating', 'true')
  await expect(firstAnimatedPrice).not.toHaveText('90')
  await page.waitForTimeout(650)
  await expect(firstAnimatedPrice).toHaveAttribute('data-animating', 'true')
  await expect(firstAnimatedPrice).not.toHaveText('90')
  await expect(firstAnimatedPrice).toHaveAttribute('data-animating', 'false', {
    timeout: 2_500,
  })
  await expect(firstAnimatedPrice).toHaveText('90')

  await oneDog.click()
  await expect(firstAnimatedPrice).toHaveAttribute('data-value', '52.5')
  await page.waitForTimeout(150)
  await expect(firstAnimatedPrice).toHaveAttribute('data-animating', 'true')
  await expect(firstAnimatedPrice).toHaveText(/^\d{2}(,\d)?$/)
  await expect(firstAnimatedPrice).toHaveAttribute('data-animating', 'false', {
    timeout: 2_500,
  })
  await expect(firstAnimatedPrice).toHaveText('52,5')

  await expect(page.getByRole('button', { name: 'Vorheriges Testimonial' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Nächstes Testimonial' })).toBeVisible()
  assertNoBrowserErrors()
})

test('das sichtbare Kontaktformular hält den Netlify-Vertrag ein, ohne zu senden', async ({
  page,
}) => {
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/', { waitUntil: 'load' })

  const form = page.locator('section#kontakt form[name="contact"]')
  await expect(form).toHaveCount(1)
  await expect(form).toHaveAttribute('action', '/')
  await expect(form).toHaveAttribute('method', /post/i)
  await expect(form).toHaveAttribute('data-netlify', 'true')
  await expect(form).toHaveAttribute('netlify-honeypot', 'bot-field')
  await expect(form.locator('input[name="form-name"][value="contact"]')).toHaveCount(1)

  const honeypot = form.locator('input[name="bot-field"]')
  await expect(honeypot).toHaveAttribute('type', 'text')
  await expect(honeypot).not.toHaveAttribute('type', 'hidden')
  await expect(honeypot).toHaveAttribute('tabindex', '-1')

  for (const field of CONTACT_FORM_FIELDS) {
    const control = form.locator(`[name="${field.name}"]`)
    await expect(control).toHaveCount(1)
    await expect(control).toHaveAttribute('autocomplete', field.autoComplete)
    await expect(control).toHaveAttribute('maxlength', String(field.maxLength))
    if (field.required) await expect(control).toHaveAttribute('required', '')
    else await expect(control).not.toHaveAttribute('required', '')
  }

  await expect(form.locator('[aria-live="polite"]')).toHaveCount(0)
  await expect(page.locator('section#kontakt [aria-live="polite"]')).toHaveCount(1)
  assertNoBrowserErrors()
})
