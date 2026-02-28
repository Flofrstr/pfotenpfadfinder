'use client'

import { useState, useMemo, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Calculator } from 'lucide-react'
import { AnimateNumber } from 'motion-plus/react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { isNrwHoliday, getHolidayName } from '@/lib/nrw-holidays'

type ArrivalTime = 'vor18' | 'ab18'
type DepartureTime = 'vor12' | 'ab12'

interface CalculationResult {
  overnightNights: number
  normalOvernights: number
  holidayOvernights: number
  daycareDays: number
  normalDaycare: number
  holidayDaycare: number
  overnightCost: number
  daycareCost: number
  nieAlleinCost: number
  total: number
  holidayNames: string[]
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isBeforeDay(a: Date, b: Date): boolean {
  const aKey = a.getFullYear() * 10000 + a.getMonth() * 100 + a.getDate()
  const bKey = b.getFullYear() * 10000 + b.getMonth() * 100 + b.getDate()
  return aKey < bKey
}

function isBetween(date: Date, start: Date, end: Date): boolean {
  const d = date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate()
  const s = start.getFullYear() * 10000 + start.getMonth() * 100 + start.getDate()
  const e = end.getFullYear() * 10000 + end.getMonth() * 100 + end.getDate()
  return d >= s && d <= e
}

function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
}

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

interface PriceCalculatorContentProps {
  numberOfDogs: number
}

export function PriceCalculatorContent({ numberOfDogs }: PriceCalculatorContentProps) {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [hoverDate, setHoverDate] = useState<Date | null>(null)
  const [arrivalTime, setArrivalTime] = useState<ArrivalTime>('vor18')
  const [departureTime, setDepartureTime] = useState<DepartureTime>('vor12')
  const [includeNieAllein, setIncludeNieAllein] = useState(false)
  const [viewMonth, setViewMonth] = useState<Date>(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })

  const today = useMemo(() => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
  }, [])

  const daycarePrice = 35 + (numberOfDogs - 1) * 25
  const overnightPrice = 40 + (numberOfDogs - 1) * 30

  const handleDayClick = useCallback(
    (date: Date) => {
      if (isBeforeDay(date, today)) return

      if (!startDate || (startDate && endDate)) {
        setStartDate(date)
        setEndDate(null)
      } else {
        if (isBeforeDay(date, startDate)) {
          setStartDate(date)
        } else {
          setEndDate(date)
        }
      }
    },
    [startDate, endDate, today],
  )

  const calculation = useMemo((): CalculationResult | null => {
    if (!startDate) return null
    const end = endDate ?? startDate

    const dayCount = Math.round((end.getTime() - startDate.getTime()) / 86_400_000) + 1

    const holidayNames: string[] = []

    if (dayCount === 1) {
      const holiday = isNrwHoliday(startDate)
      if (holiday) {
        const name = getHolidayName(startDate)
        if (name) holidayNames.push(name)
      }
      const cost = holiday ? daycarePrice * 1.5 : daycarePrice
      const nieAllein = includeNieAllein ? 5 : 0
      return {
        overnightNights: 0,
        normalOvernights: 0,
        holidayOvernights: 0,
        daycareDays: 1,
        normalDaycare: holiday ? 0 : 1,
        holidayDaycare: holiday ? 1 : 0,
        overnightCost: 0,
        daycareCost: Math.round(cost * 100) / 100,
        nieAlleinCost: nieAllein,
        total: Math.round((cost + nieAllein) * 100) / 100,
        holidayNames,
      }
    }

    const nights = dayCount - 1
    let normalOvernights = 0
    let holidayOvernights = 0

    for (let i = 0; i < nights; i++) {
      const d = new Date(startDate)
      d.setDate(d.getDate() + i)
      if (isNrwHoliday(d)) {
        holidayOvernights++
        const name = getHolidayName(d)
        if (name && !holidayNames.includes(name)) holidayNames.push(name)
      } else {
        normalOvernights++
      }
    }

    let normalDaycare = 0
    let holidayDaycare = 0

    if (arrivalTime === 'vor18') {
      if (isNrwHoliday(startDate)) {
        holidayDaycare++
      } else {
        normalDaycare++
      }
    }

    if (departureTime === 'ab12') {
      const lastDay = new Date(end)
      if (isNrwHoliday(lastDay)) {
        holidayDaycare++
        const name = getHolidayName(lastDay)
        if (name && !holidayNames.includes(name)) holidayNames.push(name)
      } else {
        normalDaycare++
      }
    }

    const totalDaycare = normalDaycare + holidayDaycare
    const overnightCost =
      normalOvernights * overnightPrice + holidayOvernights * overnightPrice * 1.5
    const daycareCost = normalDaycare * daycarePrice + holidayDaycare * daycarePrice * 1.5
    const totalBillableDays = nights + totalDaycare
    const nieAlleinCost = includeNieAllein ? 5 * totalBillableDays : 0
    const total = overnightCost + daycareCost + nieAlleinCost

    return {
      overnightNights: nights,
      normalOvernights,
      holidayOvernights,
      daycareDays: totalDaycare,
      normalDaycare,
      holidayDaycare,
      overnightCost: Math.round(overnightCost * 100) / 100,
      daycareCost: Math.round(daycareCost * 100) / 100,
      nieAlleinCost,
      total: Math.round(total * 100) / 100,
      holidayNames,
    }
  }, [
    startDate,
    endDate,
    arrivalTime,
    departureTime,
    numberOfDogs,
    includeNieAllein,
    daycarePrice,
    overnightPrice,
  ])

  const prevMonth = () => {
    setViewMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setViewMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const canGoPrev = useMemo(() => {
    const prev = new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1)
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    return prev >= todayMonth
  }, [viewMonth, today])

  const visualEnd =
    endDate ?? (startDate && hoverDate && !isBeforeDay(hoverDate, startDate) ? hoverDate : null)

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Left: Calendar + Options */}
      <div className="space-y-4">
        {/* Calendar */}
        <div className="border-accent/20 bg-card overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Month navigation */}
          <div className="border-accent/10 flex items-center justify-between border-b px-4 py-3">
            <button
              onClick={prevMonth}
              disabled={!canGoPrev}
              className="text-foreground/70 hover:text-foreground disabled:text-foreground/20 rounded-lg p-1.5 transition-colors disabled:cursor-not-allowed"
              aria-label="Vorheriger Monat"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h3 className="text-sm font-semibold">
              {viewMonth.toLocaleDateString('de-DE', {
                month: 'long',
                year: 'numeric',
              })}
            </h3>
            <button
              onClick={nextMonth}
              className="text-foreground/70 hover:text-foreground rounded-lg p-1.5 transition-colors"
              aria-label="Nächster Monat"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 px-2 pt-2">
            {WEEKDAYS.map(day => (
              <div key={day} className="text-foreground/50 py-2 text-center text-xs font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <CalendarGrid
            viewMonth={viewMonth}
            startDate={startDate}
            endDate={visualEnd}
            today={today}
            onDayClick={handleDayClick}
            onDayHover={setHoverDate}
          />

          {/* Holiday legend */}
          <div className="border-accent/10 flex items-center gap-2 border-t px-4 py-2.5">
            <span className="bg-destructive/70 inline-block h-1.5 w-1.5 rounded-full" />
            <span className="text-foreground/50 text-xs">Feiertag (NRW)</span>
          </div>
        </div>

        {/* Time options */}
        <div className="border-accent/20 bg-card space-y-4 rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="space-y-3">
            <p className="text-sm font-semibold">Ankunft</p>
            <div className="flex gap-2">
              <TimeButton
                active={arrivalTime === 'vor18'}
                onClick={() => setArrivalTime('vor18')}
                label="Vor 18 Uhr"
                sublabel="+Tagesbetreuung"
              />
              <TimeButton
                active={arrivalTime === 'ab18'}
                onClick={() => setArrivalTime('ab18')}
                label="Ab 18 Uhr"
                sublabel="Nur Übernachtung"
              />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold">Abreise</p>
            <div className="flex gap-2">
              <TimeButton
                active={departureTime === 'vor12'}
                onClick={() => setDepartureTime('vor12')}
                label="Vor 12 Uhr"
                sublabel="Keine Berechnung"
              />
              <TimeButton
                active={departureTime === 'ab12'}
                onClick={() => setDepartureTime('ab12')}
                label="Ab 12 Uhr"
                sublabel="+Tagesbetreuung"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Result breakdown */}
      <div className="border-accent/20 bg-card flex flex-col rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="border-accent/10 flex items-center gap-3 border-b px-6 py-4">
          <div className="bg-accent/10 rounded-lg p-2">
            <Calculator className="text-accent h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Deine Berechnung</h3>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <AnimatePresence mode="wait">
            {!calculation ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-1 flex-col items-center justify-center gap-3 py-12"
              >
                <Calculator className="text-foreground/20 h-12 w-12" />
                <p className="text-foreground/40 text-sm">
                  Bitte wähle einen Zeitraum im Kalender aus
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
              >
                {/* Date range display */}
                <div className="bg-accent/5 border-accent/20 rounded-lg border px-4 py-3 text-center">
                  <p className="text-sm font-semibold">
                    {startDate && formatDate(startDate)}
                    {endDate && !isSameDay(startDate!, endDate) && <> – {formatDate(endDate)}</>}
                  </p>
                  <p className="text-foreground/60 mt-0.5 text-xs">
                    {numberOfDogs === 1 ? '1 Hund' : `${numberOfDogs} Hunde`}
                  </p>
                </div>

                {/* Overnight breakdown */}
                {calculation.overnightNights > 0 && (
                  <div className="space-y-2">
                    <p className="text-foreground/70 text-xs font-semibold tracking-wider uppercase">
                      Übernachtungen
                    </p>
                    {calculation.normalOvernights > 0 && (
                      <LineItem
                        label={`${calculation.normalOvernights}× Übernachtung`}
                        price={calculation.normalOvernights * overnightPrice}
                      />
                    )}
                    {calculation.holidayOvernights > 0 && (
                      <LineItem
                        label={`${calculation.holidayOvernights}× Übernachtung (Feiertag)`}
                        price={calculation.holidayOvernights * overnightPrice * 1.5}
                        highlight
                      />
                    )}
                  </div>
                )}

                {/* Daycare breakdown */}
                {calculation.daycareDays > 0 && (
                  <div className="space-y-2">
                    <p className="text-foreground/70 text-xs font-semibold tracking-wider uppercase">
                      Tagesbetreuung
                    </p>
                    {calculation.normalDaycare > 0 && (
                      <LineItem
                        label={`${calculation.normalDaycare}× Tagesbetreuung`}
                        price={calculation.normalDaycare * daycarePrice}
                      />
                    )}
                    {calculation.holidayDaycare > 0 && (
                      <LineItem
                        label={`${calculation.holidayDaycare}× Tagesbetreuung (Feiertag)`}
                        price={calculation.holidayDaycare * daycarePrice * 1.5}
                        highlight
                      />
                    )}
                  </div>
                )}

                {/* Holiday names */}
                {calculation.holidayNames.length > 0 && (
                  <div className="bg-accent/5 border-accent/20 rounded-lg border px-3 py-2">
                    <p className="text-foreground/60 text-xs">
                      Feiertage im Zeitraum:{' '}
                      <span className="text-foreground/80 font-medium">
                        {calculation.holidayNames.join(', ')}
                      </span>
                    </p>
                  </div>
                )}

                {/* Nie allein toggle */}
                <button
                  onClick={() => setIncludeNieAllein(!includeNieAllein)}
                  className="border-accent/20 hover:border-accent/40 flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors"
                >
                  <div
                    className={cn(
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors',
                      includeNieAllein ? 'border-accent bg-accent' : 'border-foreground/30',
                    )}
                  >
                    {includeNieAllein && (
                      <svg
                        className="text-accent-foreground h-3 w-3"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Nie allein Pauschale</p>
                    <p className="text-foreground/50 text-xs">+5€ pro Tag/Nacht</p>
                  </div>
                  {includeNieAllein && calculation.nieAlleinCost > 0 && (
                    <span className="text-accent text-sm font-semibold">
                      +{calculation.nieAlleinCost}€
                    </span>
                  )}
                </button>

                {/* Divider */}
                <div className="border-accent/10 border-t" />

                {/* Total */}
                <div className="flex items-baseline justify-between">
                  <p className="text-lg font-semibold">Gesamtpreis</p>
                  <div className="flex items-baseline gap-0.5">
                    <AnimateNumber className="text-accent text-3xl font-bold tabular-nums">
                      {calculation.total}
                    </AnimateNumber>
                    <span className="text-accent text-3xl font-bold">€</span>
                  </div>
                </div>

                <p className="text-foreground/40 text-xs">
                  * Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// --- Sub-components ---

interface CalendarGridProps {
  viewMonth: Date
  startDate: Date | null
  endDate: Date | null
  today: Date
  onDayClick: (date: Date) => void
  onDayHover: (date: Date | null) => void
}

function CalendarGrid({
  viewMonth,
  startDate,
  endDate,
  today,
  onDayClick,
  onDayHover,
}: CalendarGridProps) {
  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7

  const cells: (Date | null)[] = []
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push(null)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d))
  }

  return (
    <div className="grid grid-cols-7 gap-0.5 px-2 pb-2" onMouseLeave={() => onDayHover(null)}>
      {cells.map((date, idx) => {
        if (!date) {
          return <div key={`empty-${idx}`} className="h-10" />
        }

        const isPast = isBeforeDay(date, today)
        const isToday = isSameDay(date, today)
        const holiday = isNrwHoliday(date)
        const isStart = startDate && isSameDay(date, startDate)
        const isEnd = endDate && isSameDay(date, endDate)
        const inRange = startDate && endDate && isBetween(date, startDate, endDate)

        return (
          <button
            key={date.getTime()}
            onClick={() => onDayClick(date)}
            onMouseEnter={() => onDayHover(date)}
            disabled={isPast}
            aria-label={`${date.getDate()}. ${date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}${holiday ? ' (Feiertag)' : ''}`}
            aria-selected={isStart || isEnd || false}
            className={cn(
              'relative flex h-10 w-full flex-col items-center justify-center rounded-md text-sm transition-colors',
              isPast && 'text-foreground/20 cursor-not-allowed',
              !isPast && 'hover:bg-accent/10 cursor-pointer',
              isToday && 'ring-accent/50 ring-1 ring-inset',
              inRange && !isStart && !isEnd && 'bg-accent/10',
              (isStart || isEnd) && 'bg-accent text-accent-foreground font-semibold',
            )}
          >
            <span>{date.getDate()}</span>
            {holiday && (
              <span
                className={cn(
                  'absolute bottom-1 h-1 w-1 rounded-full',
                  isStart || isEnd ? 'bg-accent-foreground/70' : 'bg-destructive/70',
                )}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

interface TimeButtonProps {
  active: boolean
  onClick: () => void
  label: string
  sublabel: string
}

function TimeButton({ active, onClick, label, sublabel }: TimeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-1 flex-col items-center rounded-lg border-2 px-4 py-3 transition-all',
        active
          ? 'border-accent bg-accent/10'
          : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5',
      )}
    >
      <span className={cn('text-sm font-semibold', active && 'text-accent')}>{label}</span>
      <span className="text-foreground/50 text-xs">{sublabel}</span>
    </button>
  )
}

interface LineItemProps {
  label: string
  price: number
  highlight?: boolean
}

function LineItem({ label, price, highlight }: LineItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className={cn('text-sm', highlight ? 'text-accent font-medium' : 'text-foreground/70')}>
        {label}
      </p>
      <div className="flex items-baseline gap-0.5">
        <AnimateNumber className={cn('text-lg font-bold tabular-nums', highlight && 'text-accent')}>
          {Math.round(price * 100) / 100}
        </AnimateNumber>
        <span className={cn('text-lg font-bold', highlight && 'text-accent')}>€</span>
      </div>
    </div>
  )
}
