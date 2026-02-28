/**
 * NRW (Nordrhein-Westfalen) public holiday utilities.
 * Pure TypeScript — no external dependencies.
 */

/** Calculates Easter Sunday for a given year (Anonymous Gregorian algorithm). */
function getEasterSunday(year: number): Date {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month - 1, day)
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base)
  d.setDate(d.getDate() + days)
  return d
}

function toDateKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

interface NrwHoliday {
  date: Date
  name: string
}

/** Returns all NRW public holidays for a given year with their names. */
export function getNrwHolidaysList(year: number): NrwHoliday[] {
  const easter = getEasterSunday(year)

  return [
    { date: new Date(year, 0, 1), name: 'Neujahr' },
    { date: addDays(easter, -2), name: 'Karfreitag' },
    { date: addDays(easter, 1), name: 'Ostermontag' },
    { date: new Date(year, 4, 1), name: 'Tag der Arbeit' },
    { date: addDays(easter, 39), name: 'Christi Himmelfahrt' },
    { date: addDays(easter, 50), name: 'Pfingstmontag' },
    { date: addDays(easter, 60), name: 'Fronleichnam' },
    { date: new Date(year, 9, 3), name: 'Tag der Deutschen Einheit' },
    { date: new Date(year, 10, 1), name: 'Allerheiligen' },
    { date: new Date(year, 11, 25), name: '1. Weihnachtstag' },
    { date: new Date(year, 11, 26), name: '2. Weihnachtstag' },
  ]
}

/** Returns a Set of date keys ("YYYY-MM-DD") for NRW public holidays. */
export function getNrwHolidays(year: number): Set<string> {
  return new Set(getNrwHolidaysList(year).map(h => toDateKey(h.date)))
}

// Per-year cache
const holidayCache = new Map<number, Set<string>>()
const nameCache = new Map<number, Map<string, string>>()

function ensureCache(year: number) {
  if (!holidayCache.has(year)) {
    const list = getNrwHolidaysList(year)
    holidayCache.set(year, new Set(list.map(h => toDateKey(h.date))))
    nameCache.set(year, new Map(list.map(h => [toDateKey(h.date), h.name])))
  }
}

/** Checks whether a given Date is an NRW public holiday. */
export function isNrwHoliday(date: Date): boolean {
  const year = date.getFullYear()
  ensureCache(year)
  return holidayCache.get(year)!.has(toDateKey(date))
}

/** Returns the holiday name if the date is a holiday, otherwise null. */
export function getHolidayName(date: Date): string | null {
  const year = date.getFullYear()
  ensureCache(year)
  return nameCache.get(year)!.get(toDateKey(date)) ?? null
}
