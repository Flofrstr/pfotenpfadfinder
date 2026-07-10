import { describe, expect, it } from 'vitest'

import { SITE_DATA } from '@/lib/site-data'

function berlinDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(part => part.type === type)?.value ?? ''

  return `${value('year')}-${value('month')}-${value('day')}`
}

describe('Website-Fakten', () => {
  it('erzwingt nach dem Prüfdatum eine Aktualisierung des Verfügbarkeitsbanners', () => {
    const today = berlinDateKey()

    expect(
      today < SITE_DATA.availability.reviewAfter,
      `Das Verfügbarkeitsbanner muss aktualisiert werden: Prüfdatum ${SITE_DATA.availability.reviewAfter}, heute ${today}.`,
    ).toBe(true)
  })
})
