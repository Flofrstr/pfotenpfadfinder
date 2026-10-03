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

test('Preisübersicht, Rechner und Carousel sind verständlich bedienbar', async ({ page }) => {
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/', { waitUntil: 'load' })

  const prices = page.locator('section#preise')
  await expect(prices.getByRole('tablist')).toHaveCount(0)
  const holidaySwitch = prices.getByRole('switch', { name: 'Feiertagspreise anzeigen' })
  await expect(holidaySwitch).not.toBeChecked()
  const careCard = prices.getByRole('region', { name: 'Hundebetreuung', exact: true })
  const walkCard = prices.getByRole('region', { name: 'Gassi gehen', exact: true })
  const trialCard = prices.getByRole('region', { name: 'Kennenlernen', exact: true })
  await expect(careCard.locator('data')).toHaveText(['35', '40'])
  const oneDog = prices.getByRole('button', { name: '1 Hund auswählen' })
  const twoDogs = prices.getByRole('button', { name: '2 Hunde auswählen' })
  await expect(oneDog).toHaveAttribute('aria-pressed', 'true')
  await holidaySwitch.focus()
  await holidaySwitch.press('Space')
  await expect(holidaySwitch).toBeChecked()
  await expect(careCard.locator('data')).toHaveText(['52,5', '60'])
  await expect(walkCard.locator('data')).toHaveText(['22,5', '37,5'])
  await expect(trialCard.locator('data')).toHaveText(['15', '20', '25'])
  await expect(careCard.getByText('+5€', { exact: true })).toBeVisible()
  await expect(prices.getByText('0,60 €', { exact: true })).toBeVisible()
  await twoDogs.focus()
  await twoDogs.press('Enter')
  await expect(twoDogs).toHaveAttribute('aria-pressed', 'true')
  await expect(oneDog).toHaveAttribute('aria-pressed', 'false')
  await expect(careCard.locator('data')).toHaveText(['90', '105'])
  await expect(walkCard.locator('data')).toHaveText(['30', '45'])
  await expect(trialCard.locator('data')).toHaveText(['15', '30', '40'])
  await holidaySwitch.press('Enter')
  await expect(holidaySwitch).not.toBeChecked()
  await expect(careCard.locator('data')).toHaveText(['60', '70'])
  await expect(walkCard.locator('data')).toHaveText(['20', '30'])
  await expect(trialCard.locator('data')).toHaveText(['15', '30', '40'])

  await prices.getByRole('button', { name: 'Gesamtpreis berechnen' }).click()
  await expect(prices.getByRole('heading', { name: 'Preisrechner', exact: true })).toBeFocused()
  await expect(twoDogs).toHaveAttribute('aria-pressed', 'true')
  await prices.getByRole('button', { name: '3 Hunde auswählen' }).click()
  await prices.getByRole('link', { name: 'Zur Preisübersicht' }).click()
  await expect(
    prices.getByRole('heading', { name: 'Preise & Services', exact: true }),
  ).toBeFocused()
  await expect(prices.getByRole('button', { name: '3 Hunde auswählen' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(careCard.locator('data')).toHaveText(['85', '100'])
  await expect(walkCard.locator('data')).toHaveText(['25', '35'])
  await expect(trialCard.locator('data')).toHaveText(['15', '40', '50'])

  await expect(page.getByRole('button', { name: 'Vorheriges Testimonial' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Nächstes Testimonial' })).toBeVisible()
  assertNoBrowserErrors()
})

test('auf Mobilgeräten sind alle Preiskarten sichtbar und die Hundeauswahl bedienbar', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const prices = page.locator('section#preise')
  for (const name of ['Hundebetreuung', 'Gassi gehen', 'Kennenlernen']) {
    await expect(prices.getByRole('region', { name, exact: true })).toBeVisible()
  }
  await prices.getByRole('button', { name: '3 Hunde auswählen' }).click()
  await expect(prices.getByRole('region', { name: 'Hundebetreuung' }).locator('data')).toHaveText([
    '85',
    '100',
  ])
  await prices.getByRole('switch', { name: 'Feiertagspreise anzeigen' }).click()
  await expect(prices.getByRole('region', { name: 'Hundebetreuung' }).locator('data')).toHaveText([
    '127,5',
    '150',
  ])
  await expect(prices.getByRole('region', { name: 'Gassi gehen' }).locator('data')).toHaveText([
    '37,5',
    '52,5',
  ])
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('das sichtbare Kontaktformular hält den Netlify-Vertrag ein, ohne zu senden', async ({
  page,
}) => {
  const assertNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/', { waitUntil: 'load' })

  const form = page.locator('section#kontakt form[name="contact"]')
  await expect(form).toHaveCount(1)
  await expect(form).toHaveAttribute('action', '/contact-form.html')
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
