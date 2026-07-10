import { describe, expect, it } from 'vitest'

import { getHolidayName, getNrwHolidays, isNrwHoliday } from '@/lib/nrw-holidays'

describe('NRW-Feiertage', () => {
  it.each([
    [2025, '2025-04-18', 'Karfreitag'],
    [2026, '2026-04-03', 'Karfreitag'],
    [2027, '2027-03-26', 'Karfreitag'],
    [2028, '2028-06-15', 'Fronleichnam'],
  ])('berechnet bewegliche Feiertage im Jahr %i', (year, dateKey, name) => {
    expect(getNrwHolidays(year)).toContain(dateKey)

    const [yearPart, monthPart, dayPart] = dateKey.split('-').map(Number)
    const date = new Date(yearPart, monthPart - 1, dayPart, 12)
    expect(isNrwHoliday(date)).toBe(true)
    expect(getHolidayName(date)).toBe(name)
  })

  it('enthält die landesspezifischen und festen Feiertage', () => {
    const holidays = getNrwHolidays(2026)

    expect(holidays).toContain('2026-11-01')
    expect(holidays).toContain('2026-12-25')
    expect(holidays).not.toContain('2026-12-24')
  })
})
