import { describe, expect, it } from 'vitest'

import { calculatePrice, getTieredPrice } from '@/lib/pricing'
import { PRICING } from '@/lib/site-data'

describe('getTieredPrice', () => {
  it.each([
    [1, 35],
    [2, 60],
    [3, 85],
  ])('berechnet Tagesbetreuung für %i Hund(e)', (numberOfDogs, expected) => {
    expect(getTieredPrice(PRICING.dayCare, numberOfDogs)).toBe(expected)
  })

  it('berücksichtigt ungleiche Staffelpreise', () => {
    expect(getTieredPrice(PRICING.trialOvernight, 3)).toBe(50)
  })

  it('weist nicht unterstützte Hundeanzahlen zurück', () => {
    expect(() => getTieredPrice(PRICING.dayCare, 0)).toThrow(RangeError)
    expect(() => getTieredPrice(PRICING.dayCare, 4)).toThrow(RangeError)
  })
})

describe('calculatePrice', () => {
  it('berechnet einen einzelnen normalen Betreuungstag', () => {
    expect(
      calculatePrice({
        startDate: '2026-07-08',
        numberOfDogs: 2,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toMatchObject({
      daycareDays: 1,
      normalDaycare: 1,
      holidayDaycare: 0,
      daycareCost: 60,
      total: 60,
    })
  })

  it('berechnet Übernachtungen und eine späte Abreise getrennt', () => {
    const beforeNoon = calculatePrice({
      startDate: '2026-07-08',
      endDate: '2026-07-10',
      numberOfDogs: 2,
      departureTime: 'beforeNoon',
      includeNeverAlone: false,
    })
    const fromNoon = calculatePrice({
      startDate: '2026-07-08',
      endDate: '2026-07-10',
      numberOfDogs: 2,
      departureTime: 'fromNoon',
      includeNeverAlone: false,
    })

    expect(beforeNoon).toMatchObject({ overnightNights: 2, overnightCost: 140, total: 140 })
    expect(fromNoon).toMatchObject({
      overnightNights: 2,
      daycareDays: 1,
      overnightCost: 140,
      daycareCost: 60,
      total: 200,
    })
  })

  it('wendet Feiertagsfaktor und Nie-allein-Pauschale additiv an', () => {
    expect(
      calculatePrice({
        startDate: '2026-12-25',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: true,
      }),
    ).toEqual({
      overnightNights: 0,
      normalOvernights: 0,
      holidayOvernights: 0,
      daycareDays: 1,
      normalDaycare: 0,
      holidayDaycare: 1,
      overnightCost: 0,
      daycareCost: 52.5,
      neverAloneCost: 5,
      total: 57.5,
      holidayNames: ['1. Weihnachtstag'],
    })
  })

  it('erkennt mehrere Feiertage in einem Aufenthalt', () => {
    expect(
      calculatePrice({
        startDate: '2026-12-24',
        endDate: '2026-12-26',
        numberOfDogs: 1,
        departureTime: 'fromNoon',
        includeNeverAlone: true,
      }),
    ).toMatchObject({
      normalOvernights: 1,
      holidayOvernights: 1,
      holidayDaycare: 1,
      overnightCost: 100,
      daycareCost: 52.5,
      neverAloneCost: 15,
      total: 167.5,
      holidayNames: ['1. Weihnachtstag', '2. Weihnachtstag'],
    })
  })

  it('zählt Kalendertage über den DST-Wechsel statt Millisekunden', () => {
    expect(
      calculatePrice({
        startDate: '2026-03-28',
        endDate: '2026-03-30',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toMatchObject({ overnightNights: 2, normalOvernights: 2, total: 80 })
  })

  it('erkennt Feiertage über den Jahreswechsel', () => {
    expect(
      calculatePrice({
        startDate: '2026-12-31',
        endDate: '2027-01-02',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toMatchObject({
      overnightNights: 2,
      normalOvernights: 1,
      holidayOvernights: 1,
      total: 100,
      holidayNames: ['Neujahr'],
    })
  })

  it('erkennt bewegliche NRW-Feiertage', () => {
    expect(
      calculatePrice({
        startDate: '2026-04-03',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toMatchObject({ holidayDaycare: 1, total: 52.5, holidayNames: ['Karfreitag'] })
  })

  it('weist umgekehrte und ungültige Datumsbereiche zurück', () => {
    expect(() =>
      calculatePrice({
        startDate: '2026-07-10',
        endDate: '2026-07-08',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toThrow(RangeError)

    expect(() =>
      calculatePrice({
        startDate: '2026-02-30',
        numberOfDogs: 1,
        departureTime: 'beforeNoon',
        includeNeverAlone: false,
      }),
    ).toThrow(RangeError)
  })
})
