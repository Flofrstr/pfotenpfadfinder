'use client'

import { useState, useMemo, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Calculator } from 'lucide-react'
import { AnimatePresence, m as motion } from 'motion/react'
import { AccessibleAnimatedNumber } from '@/components/ui/accessible-animated-number'
import { MotionProvider } from '@/components/ui/motion-provider'
import { cn } from '@/lib/utils'
import { isNrwHoliday } from '@/lib/nrw-holidays'
import { calculatePrice, getTieredPrice, toLocalDateKey } from '@/lib/pricing'
import { PRICING } from '@/lib/site-data'

type DepartureTime = 'vor12' | 'ab12'

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
  return (
    <MotionProvider>
      <PriceCalculatorMotionContent numberOfDogs={numberOfDogs} />
    </MotionProvider>
  )
}

function PriceCalculatorMotionContent({ numberOfDogs }: PriceCalculatorContentProps) {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [hoverDate, setHoverDate] = useState<Date | null>(null)
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

  const daycarePrice = getTieredPrice(PRICING.dayCare, numberOfDogs)
  const overnightPrice = getTieredPrice(PRICING.overnight, numberOfDogs)

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

  const calculation = useMemo(() => {
    if (!startDate) return null

    return calculatePrice({
      startDate: toLocalDateKey(startDate),
      endDate: endDate ? toLocalDateKey(endDate) : undefined,
      numberOfDogs,
      departureTime: departureTime === 'ab12' ? 'fromNoon' : 'beforeNoon',
      includeNeverAlone: includeNieAllein,
    })
  }, [startDate, endDate, departureTime, numberOfDogs, includeNieAllein])

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
        <div className="overflow-hidden rounded-2xl border border-accent/20 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Month navigation */}
          <div className="flex items-center justify-between border-b border-accent/10 px-4 py-3">
            <button
              type="button"
              onClick={prevMonth}
              disabled={!canGoPrev}
              className="rounded-lg p-1.5 text-foreground/70 transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:text-foreground/20"
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
              type="button"
              onClick={nextMonth}
              className="rounded-lg p-1.5 text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Nächster Monat"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 px-2 pt-2">
            {WEEKDAYS.map(day => (
              <div key={day} className="py-2 text-center text-xs font-medium text-foreground/50">
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
          <div className="flex items-center gap-2 border-t border-accent/10 px-4 py-2.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-destructive/70" />
            <span className="text-xs text-foreground/50">Feiertag (NRW)</span>
          </div>
        </div>

        {/* Time options */}
        <div className="space-y-3 rounded-2xl border border-accent/20 bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <p className="text-sm font-semibold">Abreise am letzten Tag</p>
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

      {/* Right: Result breakdown */}
      <div className="flex flex-col rounded-2xl border border-accent/20 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex items-center gap-3 border-b border-accent/10 px-6 py-4">
          <div className="rounded-lg bg-accent/10 p-2">
            <Calculator className="h-5 w-5 text-accent" />
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
                <Calculator className="h-12 w-12 text-foreground/20" />
                <p className="text-sm text-foreground/40">
                  Bitte wähle einen Zeitraum im Kalender aus
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-5"
              >
                {/* Date range display */}
                <motion.div
                  layout
                  className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-center"
                >
                  <p className="text-sm font-semibold">
                    {startDate && formatDate(startDate)}
                    {endDate && !isSameDay(startDate!, endDate) && <> – {formatDate(endDate)}</>}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground/60">
                    {numberOfDogs === 1 ? '1 Hund' : `${numberOfDogs} Hunde`}
                  </p>
                </motion.div>

                <AnimatePresence initial={false}>
                  {/* Overnight breakdown */}
                  {calculation.overnightNights > 0 && (
                    <motion.div
                      key="overnights"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="space-y-2 overflow-hidden"
                    >
                      <p className="text-xs font-semibold tracking-wider text-foreground/70 uppercase">
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
                          price={
                            calculation.holidayOvernights *
                            overnightPrice *
                            PRICING.holidayMultiplier
                          }
                          highlight
                        />
                      )}
                    </motion.div>
                  )}

                  {/* Daycare breakdown */}
                  {calculation.daycareDays > 0 && (
                    <motion.div
                      key="daycare"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="space-y-2 overflow-hidden"
                    >
                      <p className="text-xs font-semibold tracking-wider text-foreground/70 uppercase">
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
                          price={
                            calculation.holidayDaycare * daycarePrice * PRICING.holidayMultiplier
                          }
                          highlight
                        />
                      )}
                    </motion.div>
                  )}

                  {/* Holiday names */}
                  {calculation.holidayNames.length > 0 && (
                    <motion.div
                      key="holidays"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-2">
                        <p className="text-xs text-foreground/60">
                          Feiertage im Zeitraum:{' '}
                          <span className="font-medium text-foreground/80">
                            {calculation.holidayNames.join(', ')}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nie allein toggle */}
                <motion.button
                  type="button"
                  layout
                  onClick={() => setIncludeNieAllein(!includeNieAllein)}
                  aria-pressed={includeNieAllein}
                  className="flex w-full items-center gap-3 rounded-lg border border-accent/20 px-4 py-3 text-left transition-colors hover:border-accent/40"
                >
                  <div
                    className={cn(
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors',
                      includeNieAllein ? 'border-accent bg-accent' : 'border-foreground/30',
                    )}
                  >
                    {includeNieAllein && (
                      <svg
                        className="h-3 w-3 text-accent-foreground"
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
                    <p className="text-xs text-foreground/50">
                      +{PRICING.neverAlonePerBillingUnit}€ pro Tag/Nacht
                    </p>
                  </div>
                  {includeNieAllein && calculation.neverAloneCost > 0 && (
                    <span className="text-sm font-semibold text-accent">
                      +{calculation.neverAloneCost}€
                    </span>
                  )}
                </motion.button>

                {/* Divider */}
                <motion.div layout className="border-t border-accent/10" />

                {/* Total */}
                <motion.div layout className="flex items-baseline justify-between">
                  <p className="text-lg font-semibold">Gesamtpreis</p>
                  <div className="flex items-baseline gap-0.5">
                    <AccessibleAnimatedNumber
                      value={calculation.total}
                      className="text-3xl font-bold text-accent tabular-nums"
                    />
                    <span className="text-3xl font-bold text-accent" aria-hidden="true">
                      €
                    </span>
                    <span className="sr-only"> Euro</span>
                  </div>
                </motion.div>

                <motion.p layout className="text-xs text-foreground/40">
                  Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
                </motion.p>
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
            type="button"
            key={date.getTime()}
            onClick={() => onDayClick(date)}
            onMouseEnter={() => onDayHover(date)}
            disabled={isPast}
            aria-label={`${date.getDate()}. ${date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}${holiday ? ' (Feiertag)' : ''}`}
            aria-pressed={Boolean(isStart || isEnd)}
            aria-current={isToday ? 'date' : undefined}
            className={cn(
              'relative flex h-10 w-full flex-col items-center justify-center rounded-md text-sm transition-colors',
              isPast && 'cursor-not-allowed text-foreground/20',
              !isPast && 'cursor-pointer hover:bg-accent/10',
              isToday && 'ring-1 ring-accent/50 ring-inset',
              inRange && !isStart && !isEnd && 'bg-accent/10',
              (isStart || isEnd) && 'bg-accent font-semibold text-accent-foreground',
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
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'flex flex-1 flex-col items-center rounded-lg border-2 px-4 py-3 transition-all',
        active
          ? 'border-accent bg-accent/10'
          : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5',
      )}
    >
      <span className={cn('text-sm font-semibold', active && 'text-accent')}>{label}</span>
      <span className="text-xs text-foreground/50">{sublabel}</span>
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
      <p className={cn('text-sm', highlight ? 'font-medium text-accent' : 'text-foreground/70')}>
        {label}
      </p>
      <div className="flex items-baseline gap-0.5">
        <AccessibleAnimatedNumber
          value={Math.round(price * 100) / 100}
          className={cn('text-lg font-bold tabular-nums', highlight && 'text-accent')}
        />
        <span aria-hidden="true" className={cn('text-lg font-bold', highlight && 'text-accent')}>
          €
        </span>
        <span className="sr-only"> Euro</span>
      </div>
    </div>
  )
}
