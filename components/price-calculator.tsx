'use client'

import { useState, useMemo, useCallback, type ReactNode } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, Calculator, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
  return toLocalDateKey(a) < toLocalDateKey(b)
}

function isBetween(date: Date, start: Date, end: Date): boolean {
  return !isBeforeDay(date, start) && !isBeforeDay(end, date)
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })
}

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
})
const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

interface PriceCalculatorContentProps {
  numberOfDogs: number
  onNumberOfDogsChange: (count: number) => void
}

export function PriceCalculatorContent({
  numberOfDogs,
  onNumberOfDogsChange,
}: PriceCalculatorContentProps) {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [hoverDate, setHoverDate] = useState<Date | null>(null)
  const [departureTime, setDepartureTime] = useState<DepartureTime>('vor12')
  const [includeNieAllein, setIncludeNieAllein] = useState(false)
  const [singleCare, setSingleCare] = useState(false)
  const [viewMonth, setViewMonth] = useState<Date>(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })

  const today = useMemo(() => {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }, [])

  const billingDogs = singleCare && numberOfDogs === 1 ? 2 : numberOfDogs
  const overnightPrice = getTieredPrice(PRICING.overnight, billingDogs)
  const holidaySurcharge = Math.round((PRICING.holidayMultiplier - 1) * 100)
  const isDaycare = Boolean(startDate && endDate && isSameDay(startDate, endDate))

  const handleDayClick = useCallback(
    (date: Date) => {
      if (isBeforeDay(date, today)) return
      setHoverDate(null)
      if (!startDate || endDate || isBeforeDay(date, startDate)) {
        setStartDate(date)
        setEndDate(null)
      } else {
        setEndDate(date)
      }
    },
    [startDate, endDate, today],
  )

  const calculation = useMemo(() => {
    if (!startDate || !endDate) return null
    return calculatePrice({
      startDate: toLocalDateKey(startDate),
      endDate: toLocalDateKey(endDate),
      numberOfDogs: billingDogs,
      departureTime: departureTime === 'ab12' ? 'fromNoon' : 'beforeNoon',
      includeNeverAlone: includeNieAllein,
    })
  }, [startDate, endDate, departureTime, billingDogs, includeNieAllein])

  const overnightItems = useMemo(() => {
    if (!startDate || !endDate) return []
    const items = []
    const date = new Date(startDate)
    while (isBeforeDay(date, endDate)) {
      const next = new Date(date)
      next.setDate(next.getDate() + 1)
      const holiday = isNrwHoliday(date)
      items.push({
        key: toLocalDateKey(date),
        label: `Übernachtung ${formatDate(date)} → ${formatDate(next)}`,
        holiday,
        price: overnightPrice * (holiday ? PRICING.holidayMultiplier : 1),
      })
      date.setDate(date.getDate() + 1)
    }
    return items
  }, [startDate, endDate, overnightPrice])

  const canGoPrev = viewMonth > new Date(today.getFullYear(), today.getMonth(), 1)
  const visualEnd =
    endDate ?? (startDate && hoverDate && !isBeforeDay(hoverDate, startDate) ? hoverDate : null)

  return (
    <div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        <div className="min-w-0 space-y-5">
          <CalculatorStep number={1} title="Wie viele Hunde?">
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {[1, 2, 3].map(count => (
                <button
                  key={count}
                  type="button"
                  aria-label={`${count} ${count === 1 ? 'Hund' : 'Hunde'} auswählen`}
                  aria-pressed={numberOfDogs === count}
                  onClick={() => {
                    onNumberOfDogsChange(count)
                    setSingleCare(false)
                  }}
                  className={cn(
                    'flex min-h-13 items-center justify-center gap-2 rounded-xl border-2 px-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none motion-safe:active:scale-[0.98]',
                    numberOfDogs === count
                      ? 'border-service-accent bg-accent/5'
                      : 'border-foreground/15 bg-transparent hover:border-service-accent/60',
                  )}
                >
                  {count} {count === 1 ? 'Hund' : 'Hunde'}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-foreground/60">
              Staffelpreise gelten für Hunde aus einem Haushalt.
            </p>
            {numberOfDogs === 1 && (
              <label className="mt-4 flex cursor-pointer items-start gap-3 border-t border-border pt-4 text-sm">
                <input
                  type="checkbox"
                  checked={singleCare}
                  onChange={event => setSingleCare(event.target.checked)}
                  className="mt-0.5 size-4 shrink-0 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                />
                <span>
                  Einzelbetreuung gewünscht
                  <span className="mt-1 block text-xs text-foreground/60">
                    Wird zum Preis für 2 Hunde berechnet.
                  </span>
                </span>
              </label>
            )}
          </CalculatorStep>

          <CalculatorStep
            number={2}
            title="Wann bist du weg?"
            action={
              startDate && (
                <button
                  type="button"
                  onClick={() => {
                    setStartDate(null)
                    setEndDate(null)
                    setHoverDate(null)
                  }}
                  className="min-h-11 rounded-md text-xs font-medium text-foreground/70 underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Zurücksetzen
                </button>
              )
            }
          >
            <div
              aria-live="polite"
              aria-atomic="true"
              className="mt-5 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium"
            >
              {!startDate ? (
                'Wähle zuerst den Anreisetag.'
              ) : !endDate ? (
                `${formatDate(startDate)} → Abreisetag wählen`
              ) : (
                <>
                  {formatDate(startDate)}
                  {!isDaycare && ` → ${formatDate(endDate)}`}
                  <span className="mt-1 block text-xs font-normal text-foreground/65">
                    {isDaycare
                      ? '1 Tag Tagesbetreuung'
                      : `${calculation?.overnightNights} ${calculation?.overnightNights === 1 ? 'Nacht' : 'Nächte'}`}
                  </span>
                </>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={!canGoPrev}
                onClick={() =>
                  setViewMonth(
                    previous => new Date(previous.getFullYear(), previous.getMonth() - 1, 1),
                  )
                }
                aria-label="Vorheriger Monat"
                className="size-11 rounded-xl"
              >
                <ChevronLeft aria-hidden="true" />
              </Button>
              <p aria-live="polite" className="text-sm font-semibold">
                {viewMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() =>
                  setViewMonth(
                    previous => new Date(previous.getFullYear(), previous.getMonth() + 1, 1),
                  )
                }
                aria-label="Nächster Monat"
                className="size-11 rounded-xl"
              >
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-2 grid grid-cols-7">
              {WEEKDAYS.map(day => (
                <div key={day} className="py-2 text-center text-xs font-medium text-foreground/60">
                  {day}
                </div>
              ))}
            </div>
            <CalendarGrid
              viewMonth={viewMonth}
              startDate={startDate}
              endDate={endDate}
              visualEnd={visualEnd}
              today={today}
              onDayClick={handleDayClick}
              onDayHover={setHoverDate}
            />
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-foreground/65">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 rounded-full bg-service-holiday" />
                Feiertag (NRW) · +{holidaySurcharge} %
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-3 rounded-sm bg-service-accent" />
                Ankunft / Abreise
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/60">
              Nur Tagesbetreuung? Wähle denselben Tag zweimal.
            </p>
          </CalculatorStep>

          <CalculatorStep number={3} title="Wann holst du deinen Hund ab?">
            {isDaycare ? (
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Für die Tagesbetreuung gilt der Tagespreis für bis zu 12 Stunden.
              </p>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-3">
                <TimeButton
                  active={departureTime === 'vor12'}
                  onClick={() => setDepartureTime('vor12')}
                  label="Vor 12 Uhr"
                  sublabel="Kein Aufpreis"
                />
                <TimeButton
                  active={departureTime === 'ab12'}
                  onClick={() => setDepartureTime('ab12')}
                  label="Ab 12 Uhr"
                  sublabel="+ Tagesbetreuung"
                />
              </div>
            )}
            <label
              aria-label="Nie allein Pauschale"
              className="mt-5 flex cursor-pointer items-start gap-3 border-t border-border pt-5"
            >
              <input
                type="checkbox"
                checked={includeNieAllein}
                onChange={event => setIncludeNieAllein(event.target.checked)}
                className="mt-0.5 size-4 shrink-0 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
              <span className="flex-1 text-sm">
                <span className="flex items-center gap-2 font-medium">
                  <Heart aria-hidden="true" className="size-4 text-accent" />
                  Nie allein Pauschale
                </span>
                <span className="mt-1 block text-xs text-foreground/60">
                  Optional · +{currencyFormatter.format(PRICING.neverAlonePerBillingUnit)} pro
                  Tag/Nacht
                </span>
              </span>
            </label>
          </CalculatorStep>
        </div>

        <aside
          aria-labelledby="calculation-heading"
          className="overflow-hidden rounded-2xl border border-accent/40 bg-secondary/35 lg:sticky lg:top-36"
        >
          <div className="flex items-center gap-3 border-b border-foreground/10 px-5 py-5 sm:px-6">
            <span className="rounded-xl bg-accent/15 p-2.5">
              <Calculator
                aria-hidden="true"
                className="size-5 text-accent dark:text-service-accent"
              />
            </span>
            <h3 id="calculation-heading" className="text-lg font-bold">
              Deine Berechnung
            </h3>
          </div>
          <div className="p-5 sm:p-6">
            {!calculation ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="rounded-full bg-accent/10 p-5">
                  <CalendarDays aria-hidden="true" className="size-9 text-foreground/60" />
                </span>
                <p className="font-semibold">Dein Urlaub beginnt mit einem Datum.</p>
                <p className="max-w-64 text-sm leading-relaxed text-foreground/65">
                  Wähle Ankunft und Abreise im Kalender. Hier siehst du dann alle Kosten auf einen
                  Blick.
                </p>
              </div>
            ) : (
              <div className="max-h-[30rem] space-y-5 overflow-y-auto">
                {overnightItems.map(item => (
                  <LineItem
                    key={item.key}
                    label={item.label}
                    detail={
                      item.holiday ? `Feiertag (NRW) · +${holidaySurcharge} %` : 'Urlaubsbetreuung'
                    }
                    price={item.price}
                    highlight={item.holiday}
                  />
                ))}
                {calculation.daycareDays > 0 && endDate && (
                  <LineItem
                    label={
                      isDaycare
                        ? `Tagesbetreuung ${formatDate(endDate)}`
                        : `Abholung ${formatDate(endDate)} ab 12 Uhr`
                    }
                    detail={
                      calculation.holidayDaycare
                        ? `Feiertag (NRW) · +${holidaySurcharge} %`
                        : 'Tagesbetreuung'
                    }
                    price={calculation.daycareCost}
                    highlight={calculation.holidayDaycare > 0}
                  />
                )}
                {includeNieAllein && (
                  <LineItem
                    label="Nie allein Pauschale"
                    detail={`${calculation.overnightNights + calculation.daycareDays}× ${currencyFormatter.format(PRICING.neverAlonePerBillingUnit)} pro Tag/Nacht`}
                    price={calculation.neverAloneCost}
                  />
                )}
                {calculation.holidayNames.length > 0 && (
                  <p className="sr-only">
                    Feiertage im Zeitraum: {calculation.holidayNames.join(', ')}
                  </p>
                )}
              </div>
            )}
            <div className="mt-6 border-t border-accent/20 pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">Gesamtpreis</p>
                <output
                  aria-live="polite"
                  aria-atomic="true"
                  aria-label="Gesamtpreis"
                  className="text-4xl font-bold tracking-tight tabular-nums dark:text-service-accent"
                >
                  {calculation ? currencyFormatter.format(calculation.total) : '– €'}
                </output>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-foreground/65">
                Preis für {numberOfDogs} {numberOfDogs === 1 ? 'Hund' : 'Hunde'}
                {singleCare && numberOfDogs === 1 && ' · Einzelbetreuung zum Preis für 2 Hunde'}
                {' · '}
                {calculation
                  ? 'Feiertagszuschläge sind enthalten.'
                  : 'Feiertagszuschläge werden automatisch berücksichtigt.'}
              </p>
              {calculation && (
                <Button
                  asChild
                  size="lg"
                  className="mt-6 h-12 w-full rounded-full bg-service-accent font-semibold text-service-accent-foreground hover:bg-service-accent/85 motion-safe:active:scale-[0.98]"
                >
                  <a href="#kontakt">Unverbindlich anfragen</a>
                </Button>
              )}
              <p className="mt-4 text-xs leading-relaxed text-foreground/55">
                Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

interface CalculatorStepProps {
  number: number
  title: string
  action?: ReactNode
  children: ReactNode
}

function CalculatorStep({ number, title, action, children }: CalculatorStepProps) {
  return (
    <section
      aria-labelledby={`calculator-step-${number}`}
      className="rounded-2xl border border-foreground/10 bg-secondary/35 p-4 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <h3
          id={`calculator-step-${number}`}
          className="flex items-center gap-3 text-base font-semibold sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-service-accent text-sm text-service-accent-foreground"
          >
            {number}
          </span>
          {title}
        </h3>
        {action}
      </div>
      {children}
    </section>
  )
}

interface CalendarGridProps {
  viewMonth: Date
  startDate: Date | null
  endDate: Date | null
  visualEnd: Date | null
  today: Date
  onDayClick: (date: Date) => void
  onDayHover: (date: Date | null) => void
}

function CalendarGrid({
  viewMonth,
  startDate,
  endDate,
  visualEnd,
  today,
  onDayClick,
  onDayHover,
}: CalendarGridProps) {
  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7
  const cells: (Date | null)[] = Array.from({ length: firstDayOfWeek }, () => null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day))

  return (
    <div className="grid grid-cols-7 gap-y-1" onMouseLeave={() => onDayHover(null)}>
      {cells.map((date, index) => {
        if (!date) return <div key={`empty-${index}`} className="h-11" />
        const isPast = isBeforeDay(date, today)
        const isToday = isSameDay(date, today)
        const holiday = isNrwHoliday(date)
        const isStart = startDate && isSameDay(date, startDate)
        const isEnd = endDate && isSameDay(date, endDate)
        const isVisualEnd = visualEnd && isSameDay(date, visualEnd)
        const inRange = startDate && visualEnd && isBetween(date, startDate, visualEnd)
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
              'relative flex h-11 w-full items-center justify-center rounded-lg text-sm transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
              isPast && 'cursor-not-allowed text-foreground/25',
              !isPast && !isStart && !isEnd && 'hover:bg-accent/20',
              isToday && 'ring-1 ring-accent/50 ring-inset',
              holiday && !isPast && 'ring-1 ring-service-holiday ring-inset',
              inRange && !isStart && !isEnd && 'rounded-none bg-accent/15',
              isVisualEnd && !isEnd && 'rounded-r-lg',
              (isStart || isEnd) &&
                'bg-service-accent font-semibold text-service-accent-foreground',
            )}
          >
            <span>{date.getDate()}</span>
            {holiday && (
              <span
                aria-hidden="true"
                className={cn(
                  'absolute bottom-1 size-1 rounded-full',
                  isStart || isEnd ? 'bg-service-accent-foreground' : 'bg-service-holiday',
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
        'flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-4 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none motion-safe:active:scale-[0.98]',
        active
          ? 'border-accent bg-accent/15'
          : 'border-foreground/15 bg-transparent hover:border-service-accent/60',
      )}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs text-foreground/65">{sublabel}</span>
    </button>
  )
}

interface LineItemProps {
  label: string
  detail: string
  price: number
  highlight?: boolean
}

function LineItem({ label, detail, price, highlight }: LineItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p
          className={cn(
            'mt-1 text-xs leading-relaxed text-foreground/60',
            highlight && 'font-medium text-service-holiday',
          )}
        >
          {detail}
        </p>
      </div>
      <p className="shrink-0 text-base font-bold tabular-nums">{currencyFormatter.format(price)}</p>
    </div>
  )
}
