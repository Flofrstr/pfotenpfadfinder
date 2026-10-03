'use client'

import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Dog,
  Heart,
  Home,
  MapPin,
  PawPrint,
  type LucideIcon,
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRef, useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { AccessibleAnimatedNumber } from '@/components/ui/accessible-animated-number'
import { getTieredPrice } from '@/lib/pricing'
import { PRICING, SERVICE_AREAS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const loadPriceCalculator = () =>
  import('@/components/price-calculator').then(module => module.PriceCalculatorContent)
const PriceCalculatorContent = dynamic(loadPriceCalculator, {
  loading: () => (
    <p role="status" className="py-12 text-center text-foreground/70">
      Preisrechner wird geladen …
    </p>
  ),
})

export function ServicesSection() {
  const [showCalculator, setShowCalculator] = useState(false)
  const [numberOfDogs, setNumberOfDogs] = useState(1)
  const [showHolidayPricing, setShowHolidayPricing] = useState(false)
  const holidayMultiplier = showHolidayPricing ? PRICING.holidayMultiplier : 1
  const holidaySurcharge = Math.round((PRICING.holidayMultiplier - 1) * 100)
  const needsFocus = useRef(false)

  const focusHeading = (heading: HTMLHeadingElement | null) => {
    if (!needsFocus.current || !heading) return
    needsFocus.current = false
    heading.focus({ preventScroll: true })
    heading.scrollIntoView({ behavior: 'instant', block: 'start' })
  }

  const changeView = (calculator: boolean) => {
    needsFocus.current = true
    setShowCalculator(calculator)
  }
  const openCalculator = () => changeView(true)

  return (
    <section id="preise" className="relative w-full scroll-mt-36 py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className={cn('mx-auto', showCalculator ? 'max-w-6xl' : 'max-w-5xl')}>
          {showCalculator ? (
            <>
              <a
                href="#preise"
                onClick={event => {
                  event.preventDefault()
                  changeView(false)
                }}
                className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring dark:text-service-accent"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Zur Preisübersicht
              </a>
              <h2
                ref={focusHeading}
                id="price-section-heading"
                tabIndex={-1}
                className="scroll-mt-40 text-4xl font-bold tracking-tight focus:outline-none md:text-5xl lg:text-6xl"
              >
                Preisrechner
              </h2>
              <p className="mt-4 mb-8 text-sm leading-relaxed text-foreground/70 md:mb-10 md:text-lg">
                Urlaubsbetreuung mit Übernachtung – in drei Schritten zum Gesamtpreis.
              </p>
              <div id="price-calculator-panel" role="region" aria-label="Preisrechner">
                <PriceCalculatorContent
                  numberOfDogs={numberOfDogs}
                  onNumberOfDogsChange={setNumberOfDogs}
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-8 text-center md:mb-12">
                <h2
                  ref={focusHeading}
                  id="price-section-heading"
                  tabIndex={-1}
                  className="scroll-mt-40 text-4xl font-bold tracking-tight focus:outline-none md:text-5xl lg:text-6xl"
                >
                  Preise & Services
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/70 md:text-lg">
                  Transparente Preise für professionelle Hundebetreuung
                </p>
              </div>

              <div className="mb-8 flex justify-center">
                <button
                  type="button"
                  role="switch"
                  aria-checked={showHolidayPricing}
                  aria-label="Feiertagspreise anzeigen"
                  aria-describedby="holiday-pricing-note"
                  onClick={() => setShowHolidayPricing(current => !current)}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-3 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
                    showHolidayPricing
                      ? 'border-accent bg-accent/10'
                      : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative h-5 w-9 shrink-0 rounded-full',
                      showHolidayPricing ? 'bg-accent' : 'bg-foreground/20',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-0.5 left-0 size-4 rounded-full bg-accent-foreground shadow-sm',
                        showHolidayPricing ? 'translate-x-4' : 'translate-x-0.5',
                      )}
                    />
                  </span>
                  <span>Feiertagspreise (+{holidaySurcharge} %)</span>
                </button>
                <p id="holiday-pricing-note" className="sr-only">
                  {holidaySurcharge} % Zuschlag für Hundebetreuung und Gassi gehen an Feiertagen in
                  NRW.
                </p>
              </div>

              <div className="mb-12 flex flex-col items-center gap-3 text-center">
                <p className="text-sm font-medium text-foreground/70">
                  Anzahl Hunde aus einem Haushalt
                </p>
                <div className="flex w-full max-w-[336px] items-center justify-center gap-3 px-2">
                  {[1, 2, 3].map(count => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setNumberOfDogs(count)}
                      aria-label={`${count} ${count === 1 ? 'Hund' : 'Hunde'} auswählen`}
                      aria-pressed={numberOfDogs === count}
                      className={cn(
                        'group relative flex h-16 min-w-0 flex-1 items-center justify-center rounded-xl border-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-safe:transition-[border-color,background-color,transform]',
                        numberOfDogs === count
                          ? 'border-accent bg-accent/10 motion-safe:scale-110'
                          : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5',
                      )}
                    >
                      <span className="flex gap-0.5">
                        {Array.from({ length: count }, (_, index) => (
                          <Dog
                            key={index}
                            aria-hidden="true"
                            className={cn(
                              'size-5',
                              numberOfDogs === count
                                ? 'text-accent'
                                : 'text-foreground/40 group-hover:text-accent/70',
                            )}
                          />
                        ))}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full text-xs font-bold',
                          numberOfDogs === count
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-foreground/20 text-foreground/70',
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  ))}
                </div>
                <p aria-live="polite" className="text-xs text-foreground/50">
                  {numberOfDogs === 1
                    ? 'Preis für 1 Hund'
                    : `Gesamtpreis für ${numberOfDogs} Hunde`}
                  {showHolidayPricing && ' · inkl. Feiertagszuschlag'}
                </p>
                <div className="mt-4 flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-3 text-left">
                  <Dog aria-hidden="true" className="size-5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground/70">
                    Einzelbetreuung (auf Wunsch oder bei Unverträglichkeit) = Preis für 2 Hunde
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <ServiceCard id="care-prices" title="Hundebetreuung" icon={Home}>
                  <CardContent className="flex-1 space-y-5 pt-6">
                    <PriceItem
                      title="Tagesbetreuung"
                      subtitle="Max. 12 Stunden"
                      value={getTieredPrice(PRICING.dayCare, numberOfDogs) * holidayMultiplier}
                    />
                    <PriceItem
                      title="Urlaubsbetreuung"
                      subtitle="Mit Übernachtung"
                      value={getTieredPrice(PRICING.overnight, numberOfDogs) * holidayMultiplier}
                    />
                  </CardContent>
                  <CardFooter className="justify-between gap-3 border-t border-accent/5 bg-accent/5 pt-4">
                    <span className="text-sm font-medium text-foreground/70">
                      Nie allein Pauschale
                    </span>
                    <span className="text-lg font-bold text-accent">
                      +{PRICING.neverAlonePerBillingUnit}€
                    </span>
                  </CardFooter>
                </ServiceCard>
                <ServiceCard id="walk-prices" title="Gassi gehen" icon={PawPrint}>
                  <CardContent className="flex-1 space-y-5 pt-6">
                    <PriceItem
                      title="30 Minuten"
                      subtitle="Einfache Gassirunde"
                      value={getTieredPrice(PRICING.walk30, numberOfDogs) * holidayMultiplier}
                      perUnit="pro Spaziergang"
                    />
                    <PriceItem
                      title="60 Minuten"
                      subtitle="Ausführliche Gassirunde"
                      value={getTieredPrice(PRICING.walk60, numberOfDogs) * holidayMultiplier}
                      perUnit="pro Spaziergang"
                    />
                  </CardContent>
                </ServiceCard>
                <ServiceCard id="trial-prices" title="Kennenlernen" icon={Heart}>
                  <CardContent className="flex-1 space-y-5 pt-6">
                    <PriceItem
                      title="Kennenlernen"
                      subtitle="60 Min. inkl. Gassirunde"
                      value={getTieredPrice(PRICING.meetAndGreet, numberOfDogs)}
                      perUnit="einmalig"
                    />
                    <PriceItem
                      title="Probetag"
                      subtitle="Max. 12 Stunden"
                      value={getTieredPrice(PRICING.trialDay, numberOfDogs)}
                      perUnit="einmalig"
                    />
                    <PriceItem
                      title="Probeübernachtung"
                      subtitle="Mit Übernachtung"
                      value={getTieredPrice(PRICING.trialOvernight, numberOfDogs)}
                      perUnit="einmalig"
                    />
                  </CardContent>
                </ServiceCard>
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex items-start gap-3 sm:items-center">
                  <span className="shrink-0 rounded-lg bg-accent/15 p-2.5">
                    <MapPin aria-hidden="true" className="size-5 text-accent" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">Fahrtkosten</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                      {SERVICE_AREAS.join(', ')}
                    </p>
                  </div>
                </div>
                <p className="flex shrink-0 items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0.5">
                  <span className="text-2xl font-bold tabular-nums">
                    {PRICING.travelPerKilometer.toLocaleString('de-DE', {
                      minimumFractionDigits: 2,
                    })}{' '}
                    €
                  </span>
                  <span className="text-sm text-foreground/70">pro Kilometer</span>
                </p>
              </div>

              <div className="sticky bottom-4 z-20 mt-6 rounded-2xl border border-accent/30 bg-background p-4 shadow-sm lg:static lg:mt-8 lg:bg-secondary/40 lg:p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                  <div className="flex items-center gap-4">
                    <div className="hidden shrink-0 rounded-xl bg-accent/15 p-3 lg:block">
                      <Calculator
                        aria-hidden="true"
                        className="size-6 text-accent dark:text-service-accent"
                      />
                    </div>
                    <div>
                      <h3 className="hidden text-base font-bold lg:block">
                        Urlaub geplant? Sieh sofort deinen Gesamtpreis.
                      </h3>
                      <p className="text-center text-xs font-medium lg:hidden">
                        Urlaub geplant? Gesamtpreis in 3 Schritten.
                      </p>
                      <p className="mt-1.5 hidden max-w-xl text-xs leading-relaxed text-foreground/70 lg:block">
                        Zeitraum wählen – Übernachtungen, Feiertage und Abholzeit rechnen wir
                        automatisch zusammen.
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    size="lg"
                    onClick={openCalculator}
                    onPointerEnter={() => void loadPriceCalculator()}
                    onFocus={() => void loadPriceCalculator()}
                    className="h-11 w-full shrink-0 rounded-full bg-service-accent px-5 font-semibold text-service-accent-foreground hover:bg-service-accent/85 motion-safe:active:scale-[0.98] lg:w-auto"
                  >
                    <Calculator aria-hidden="true" className="lg:hidden" />
                    Gesamtpreis berechnen
                    <ArrowRight aria-hidden="true" className="hidden lg:block" />
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-center text-xs leading-relaxed text-foreground/60">
                Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  id: string
  title: string
  icon: LucideIcon
  children: ReactNode
}

function ServiceCard({ id, title, icon: Icon, children }: ServiceCardProps) {
  return (
    <div
      role="region"
      aria-labelledby={`${id}-heading`}
      className="flex flex-col overflow-hidden rounded-lg border border-accent/20 bg-card shadow-sm"
    >
      <CardHeader className="border-b border-accent/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-accent/10 p-2">
            <Icon aria-hidden="true" className="size-5 text-accent" />
          </span>
          <h3 id={`${id}-heading`} className="text-xl leading-none font-semibold tracking-tight">
            {title}
          </h3>
        </div>
      </CardHeader>
      {children}
    </div>
  )
}

interface PriceItemProps {
  title: string
  subtitle: string
  value: number
  perUnit?: string
}

function PriceItem({ title, subtitle, value, perUnit = '/Tag' }: PriceItemProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 space-y-1">
        <p className="leading-tight font-semibold">{title}</p>
        <p className="text-xs leading-tight text-foreground/60">{subtitle}</p>
      </div>
      <div className="flex min-w-[90px] shrink-0 flex-col items-end">
        <span className="inline-flex items-baseline gap-0.5 whitespace-nowrap">
          <AccessibleAnimatedNumber value={value} className="text-2xl font-bold tabular-nums" />
          <span aria-hidden="true" className="text-2xl font-bold">
            €
          </span>
          <span className="sr-only"> Euro</span>
        </span>
        <p className="text-xs text-foreground/50">{perUnit}</p>
      </div>
    </div>
  )
}
