import { getHolidayName, isNrwHoliday } from '@/lib/nrw-holidays'
import { PRICING, type PricingConfig, type TieredPrice } from '@/lib/site-data'

export type LocalDateKey = `${number}-${number}-${number}`
type DepartureTime = 'beforeNoon' | 'fromNoon'

export interface PricingInput {
  startDate: LocalDateKey
  endDate?: LocalDateKey
  numberOfDogs: number
  departureTime: DepartureTime
  includeNeverAlone: boolean
}

export interface PricingBreakdown {
  overnightNights: number
  normalOvernights: number
  holidayOvernights: number
  daycareDays: number
  normalDaycare: number
  holidayDaycare: number
  overnightCost: number
  daycareCost: number
  neverAloneCost: number
  total: number
  holidayNames: string[]
}

const DATE_KEY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/

function isLocalDateKey(value: string): value is LocalDateKey {
  return DATE_KEY_PATTERN.test(value)
}

function parseLocalDateKey(dateKey: string): Date {
  const match = DATE_KEY_PATTERN.exec(dateKey)
  if (!match) {
    throw new RangeError(`Ungültiges lokales Datum: ${dateKey}`)
  }

  const [, yearPart, monthPart, dayPart] = match
  const year = Number(yearPart)
  const month = Number(monthPart)
  const day = Number(dayPart)
  // Noon stays on the same local calendar day across DST changes.
  const date = new Date(year, month - 1, day, 12)

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    throw new RangeError(`Ungültiges lokales Datum: ${dateKey}`)
  }

  return date
}

function compareLocalDates(a: Date, b: Date): number {
  return (
    a.getFullYear() - b.getFullYear() || a.getMonth() - b.getMonth() || a.getDate() - b.getDate()
  )
}

function enumerateLocalDates(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = []
  const current = new Date(startDate)

  while (compareLocalDates(current, endDate) <= 0) {
    dates.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  return dates
}

function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

export function getTieredPrice(price: TieredPrice, numberOfDogs: number): number {
  if (!Number.isInteger(numberOfDogs) || numberOfDogs < 1 || numberOfDogs > 3) {
    throw new RangeError('Die Hundeanzahl muss eine ganze Zahl zwischen 1 und 3 sein.')
  }

  return (
    price.firstDog +
    price.additionalDogs.slice(0, numberOfDogs - 1).reduce((sum, amount) => sum + amount, 0)
  )
}

export function toLocalDateKey(date: Date): LocalDateKey {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const dateKey = `${year}-${month}-${day}`

  if (!isLocalDateKey(dateKey)) {
    throw new RangeError(`Datum konnte nicht serialisiert werden: ${date.toISOString()}`)
  }

  return dateKey
}

export function calculatePrice(
  input: PricingInput,
  pricing: PricingConfig = PRICING,
): PricingBreakdown {
  const startDate = parseLocalDateKey(input.startDate)
  const endDate = parseLocalDateKey(input.endDate ?? input.startDate)

  if (compareLocalDates(endDate, startDate) < 0) {
    throw new RangeError('Das Enddatum darf nicht vor dem Startdatum liegen.')
  }

  const daycareUnitPrice = getTieredPrice(pricing.dayCare, input.numberOfDogs)
  const overnightUnitPrice = getTieredPrice(pricing.overnight, input.numberOfDogs)
  const dates = enumerateLocalDates(startDate, endDate)
  const holidayNames = new Set<string>()

  const registerHoliday = (date: Date) => {
    const name = getHolidayName(date)
    if (name) holidayNames.add(name)
  }

  if (dates.length === 1) {
    const isHoliday = isNrwHoliday(startDate)
    if (isHoliday) registerHoliday(startDate)

    const daycareCost = daycareUnitPrice * (isHoliday ? pricing.holidayMultiplier : 1)
    const neverAloneCost = input.includeNeverAlone ? pricing.neverAlonePerBillingUnit : 0

    return {
      overnightNights: 0,
      normalOvernights: 0,
      holidayOvernights: 0,
      daycareDays: 1,
      normalDaycare: isHoliday ? 0 : 1,
      holidayDaycare: isHoliday ? 1 : 0,
      overnightCost: 0,
      daycareCost: roundCurrency(daycareCost),
      neverAloneCost: roundCurrency(neverAloneCost),
      total: roundCurrency(daycareCost + neverAloneCost),
      holidayNames: [...holidayNames],
    }
  }

  const overnightDates = dates.slice(0, -1)
  const holidayOvernights = overnightDates.filter(date => {
    const isHoliday = isNrwHoliday(date)
    if (isHoliday) registerHoliday(date)
    return isHoliday
  }).length
  const normalOvernights = overnightDates.length - holidayOvernights

  const hasDepartureDaycare = input.departureTime === 'fromNoon'
  const departureDate = dates.at(-1)
  if (!departureDate) {
    throw new RangeError('Der berechnete Betreuungszeitraum enthält keinen Abreisetag.')
  }
  const departureIsHoliday = hasDepartureDaycare && isNrwHoliday(departureDate)
  if (departureIsHoliday) registerHoliday(departureDate)

  const normalDaycare = hasDepartureDaycare && !departureIsHoliday ? 1 : 0
  const holidayDaycare = departureIsHoliday ? 1 : 0
  const daycareDays = normalDaycare + holidayDaycare
  const overnightCost =
    normalOvernights * overnightUnitPrice +
    holidayOvernights * overnightUnitPrice * pricing.holidayMultiplier
  const daycareCost =
    normalDaycare * daycareUnitPrice + holidayDaycare * daycareUnitPrice * pricing.holidayMultiplier
  const billingUnits = overnightDates.length + daycareDays
  const neverAloneCost = input.includeNeverAlone
    ? billingUnits * pricing.neverAlonePerBillingUnit
    : 0

  return {
    overnightNights: overnightDates.length,
    normalOvernights,
    holidayOvernights,
    daycareDays,
    normalDaycare,
    holidayDaycare,
    overnightCost: roundCurrency(overnightCost),
    daycareCost: roundCurrency(daycareCost),
    neverAloneCost: roundCurrency(neverAloneCost),
    total: roundCurrency(overnightCost + daycareCost + neverAloneCost),
    holidayNames: [...holidayNames],
  }
}
