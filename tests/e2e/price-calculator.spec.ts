import { expect, test } from '@playwright/test'

for (const width of [390, 1280]) {
  test(`Preisrechner: Feiertage, Optionen und Tagesbetreuung bei ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.clock.setFixedTime(new Date('2026-10-02T10:00:00+02:00'))
    await page.goto('/')

    const start = page.getByRole('button', { name: 'Gesamtpreis berechnen' })
    await start.focus()
    await start.press('Enter')
    await expect(page.getByRole('heading', { name: 'Preisrechner', exact: true })).toBeFocused()
    const calculator = page.getByRole('region', { name: 'Preisrechner', exact: true })
    const total = calculator.getByRole('status', { name: 'Gesamtpreis', exact: true })
    await expect(total).toHaveText('– €')
    await expect(
      calculator.getByRole('button', { name: '1. Oktober 2026', exact: true }),
    ).toBeDisabled()

    await calculator.getByRole('button', { name: '2. Oktober 2026', exact: true }).click()
    await expect(total).toHaveText('– €')
    await calculator.getByRole('button', { name: '5. Oktober 2026', exact: true }).click()
    await expect(total).toHaveText('140 €')
    await expect(calculator.getByText(/^Übernachtung /)).toHaveCount(3)
    await expect(
      calculator.getByText('Feiertage im Zeitraum: Tag der Deutschen Einheit'),
    ).toHaveCount(1)

    await calculator.getByRole('button', { name: 'Ab 12 Uhr + Tagesbetreuung' }).click()
    await expect(total).toHaveText('175 €')
    await calculator.getByRole('checkbox', { name: /Nie allein Pauschale/ }).check()
    await expect(total).toHaveText('195 €')
    await calculator.getByRole('checkbox', { name: /Einzelbetreuung gewünscht/ }).check()
    await expect(total).toHaveText('325 €')
    await calculator.getByRole('button', { name: '3 Hunde auswählen' }).click()
    await expect(total).toHaveText('455 €')
    await calculator.getByRole('button', { name: '1 Hund auswählen' }).click()
    await expect(total).toHaveText('195 €')
    await expect(
      calculator.getByRole('checkbox', { name: /Einzelbetreuung gewünscht/ }),
    ).not.toBeChecked()
    await expect(calculator.getByRole('link', { name: 'Unverbindlich anfragen' })).toHaveAttribute(
      'href',
      '#kontakt',
    )

    await calculator.getByRole('button', { name: 'Zurücksetzen' }).click()
    await expect(total).toHaveText('– €')
    await calculator.getByRole('checkbox', { name: /Nie allein Pauschale/ }).uncheck()
    const holiday = calculator.getByRole('button', {
      name: '3. Oktober 2026 (Feiertag)',
      exact: true,
    })
    await holiday.click()
    await holiday.click()
    await expect(total).toHaveText('52,5 €')
    await expect(calculator.getByText('1 Tag Tagesbetreuung')).toBeVisible()
    await expect(
      calculator.getByRole('button', { name: 'Ab 12 Uhr + Tagesbetreuung' }),
    ).toHaveCount(0)

    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true)
  })
}
