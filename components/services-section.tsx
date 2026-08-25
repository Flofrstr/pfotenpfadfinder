'use client'

import { PawPrintIcon as Paw, Home, MapPin, Heart, Dog, Calculator } from 'lucide-react'
import { CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { PawBackground } from '@/components/paw-background'
import { AccessibleAnimatedNumber } from '@/components/ui/accessible-animated-number'
import { getTieredPrice } from '@/lib/pricing'
import { PRICING, SERVICE_AREAS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Tab = 'overview' | 'calculator'

const loadPriceCalculator = () =>
  import('@/components/price-calculator').then(module => module.PriceCalculatorContent)
const PriceCalculatorContent = dynamic(loadPriceCalculator)

export function ServicesSection() {
  const [showHolidayPricing, setShowHolidayPricing] = useState(false)
  const [numberOfDogs, setNumberOfDogs] = useState(1)
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  const dayCarePrice = getTieredPrice(PRICING.dayCare, numberOfDogs)
  const overnightPrice = getTieredPrice(PRICING.overnight, numberOfDogs)
  const walk30Price = getTieredPrice(PRICING.walk30, numberOfDogs)
  const walk60Price = getTieredPrice(PRICING.walk60, numberOfDogs)

  return (
    <section id="preise" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="d" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Preise & Services
            </h2>
            <p className="max-w-[700px] text-foreground/70 md:text-lg">
              Transparente Preise für professionelle Hundebetreuung
            </p>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Preise und Preisrechner"
            className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-background p-1"
          >
            <button
              id="prices-overview-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === 'overview'}
              aria-controls="prices-overview-panel"
              onClick={() => setActiveTab('overview')}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all',
                activeTab === 'overview'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-foreground/60 hover:text-foreground/80',
              )}
            >
              <Paw className="h-4 w-4" />
              <span>Preisübersicht</span>
            </button>
            <button
              id="price-calculator-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === 'calculator'}
              aria-controls="price-calculator-panel"
              onClick={() => setActiveTab('calculator')}
              onPointerEnter={() => void loadPriceCalculator()}
              onFocus={() => void loadPriceCalculator()}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all',
                activeTab === 'calculator'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-foreground/60 hover:text-foreground/80',
              )}
            >
              <Calculator className="h-4 w-4" />
              <span>Preisrechner</span>
            </button>
          </div>

          {/* Feiertage Toggle - Desktop (only in overview) */}
          {activeTab === 'overview' && (
            <button
              type="button"
              onClick={() => setShowHolidayPricing(!showHolidayPricing)}
              aria-pressed={showHolidayPricing}
              aria-label="Feiertagspreise anzeigen"
              className="hidden items-center gap-2 rounded-full border-2 border-accent/20 bg-background px-6 py-2.5 text-sm font-semibold transition-all hover:border-accent/40 hover:bg-accent/5 md:flex"
            >
              <div
                className={`relative h-5 w-9 rounded-full transition-colors ${showHolidayPricing ? 'bg-accent' : 'bg-foreground/20'}`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${showHolidayPricing ? 'translate-x-4' : 'translate-x-0.5'}`}
                />
              </div>
              <span>Feiertagspreise</span>
            </button>
          )}

          {/* Hunde-Anzahl Auswahl (shared between tabs) */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-foreground/70">
              Anzahl Hunde aus einem Haushalt
            </p>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map(count => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setNumberOfDogs(count)}
                  className={`group relative flex h-16 w-24 items-center justify-center rounded-xl border-2 transition-all ${
                    numberOfDogs === count
                      ? 'scale-110 border-accent bg-accent/10'
                      : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5'
                  }`}
                  aria-label={`${count} ${count === 1 ? 'Hund' : 'Hunde'} auswählen`}
                  aria-pressed={numberOfDogs === count}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: count }).map((_, idx) => (
                      <Dog
                        key={idx}
                        className={`h-5 w-5 transition-colors ${
                          numberOfDogs === count
                            ? 'text-accent'
                            : 'text-foreground/40 group-hover:text-accent/70'
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      numberOfDogs === count
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-foreground/20 text-foreground/70'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-xs text-foreground/50">
              {numberOfDogs === 1 ? 'Preis für 1 Hund' : `Gesamtpreis für ${numberOfDogs} Hunde`}
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-3">
              <Dog className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm text-foreground/70">
                Einzelbetreuung (auf Wunsch oder bei Unverträglichkeit) = Preis für 2 Hunde
              </p>
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-12">
          {activeTab === 'overview' ? (
            <div
              id="prices-overview-panel"
              role="tabpanel"
              aria-labelledby="prices-overview-tab"
              className="services-tab-panel-enter"
            >
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Hundebetreuung */}
                <PricingCard isHoliday={showHolidayPricing}>
                  <CardHeader className="border-b border-accent/10 pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-accent/10 p-2">
                          <Home className="h-5 w-5 text-accent" />
                        </div>
                        <h3 className="text-xl leading-none font-semibold tracking-tight">
                          Hundebetreuung
                        </h3>
                      </div>
                      <MobileToggle
                        isActive={showHolidayPricing}
                        onToggle={() => setShowHolidayPricing(!showHolidayPricing)}
                        label="Feiertag"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pt-6">
                    <div className="space-y-5">
                      <PriceItem
                        normalPrice={dayCarePrice}
                        holidayPrice={dayCarePrice * PRICING.holidayMultiplier}
                        isHoliday={showHolidayPricing}
                        title="Tagesbetreuung"
                        subtitle="Max. 12 Stunden"
                      />
                      <PriceItem
                        normalPrice={overnightPrice}
                        holidayPrice={overnightPrice * PRICING.holidayMultiplier}
                        isHoliday={showHolidayPricing}
                        title="Urlaubsbetreuung"
                        subtitle="Mit Übernachtung"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-accent/5 bg-accent/5 pt-4">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm font-medium text-foreground/70">
                        Nie allein Pauschale
                      </span>
                      <span className="text-lg font-bold text-accent">
                        +{PRICING.neverAlonePerBillingUnit}€
                      </span>
                    </div>
                  </CardFooter>
                </PricingCard>

                {/* Gassi gehen */}
                <PricingCard isHoliday={showHolidayPricing}>
                  <CardHeader className="border-b border-accent/10 pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-accent/10 p-2">
                          <Paw className="h-5 w-5 text-accent" />
                        </div>
                        <h3 className="text-xl leading-none font-semibold tracking-tight">
                          Gassi gehen
                        </h3>
                      </div>
                      <MobileToggle
                        isActive={showHolidayPricing}
                        onToggle={() => setShowHolidayPricing(!showHolidayPricing)}
                        label="Feiertag"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pt-6">
                    <div className="space-y-5">
                      <PriceItem
                        normalPrice={walk30Price}
                        holidayPrice={walk30Price * PRICING.holidayMultiplier}
                        isHoliday={showHolidayPricing}
                        title="30 Minuten"
                        subtitle="Einfache Gassirunde"
                        perUnit="pro Spaziergang"
                      />
                      <PriceItem
                        normalPrice={walk60Price}
                        holidayPrice={walk60Price * PRICING.holidayMultiplier}
                        isHoliday={showHolidayPricing}
                        title="60 Minuten"
                        subtitle="Ausführliche Gassirunde"
                        perUnit="pro Spaziergang"
                      />
                    </div>
                  </CardContent>
                </PricingCard>

                {/* Kennenlernen & Probetage */}
                <PricingCard isHoliday={false}>
                  <CardHeader className="border-b border-accent/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-accent/10 p-2">
                        <Heart className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl leading-none font-semibold tracking-tight">
                        Kennenlernen
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pt-6">
                    <div className="space-y-5">
                      <PriceItem
                        normalPrice={getTieredPrice(PRICING.meetAndGreet, numberOfDogs)}
                        isHoliday={false}
                        title="Kennenlernen"
                        subtitle="60 Min. inkl. Gassirunde"
                        perUnit="einmalig"
                      />
                      <PriceItem
                        normalPrice={getTieredPrice(PRICING.trialDay, numberOfDogs)}
                        isHoliday={false}
                        title="Probetag"
                        subtitle="Max. 12 Stunden"
                        perUnit="einmalig"
                      />
                      <PriceItem
                        normalPrice={getTieredPrice(PRICING.trialOvernight, numberOfDogs)}
                        isHoliday={false}
                        title="Probeübernachtung"
                        subtitle="Mit Übernachtung"
                        perUnit="einmalig"
                      />
                    </div>
                  </CardContent>
                </PricingCard>
              </div>
            </div>
          ) : (
            <div
              id="price-calculator-panel"
              role="tabpanel"
              aria-labelledby="price-calculator-tab"
              className="services-tab-panel-enter"
            >
              <PriceCalculatorContent numberOfDogs={numberOfDogs} />
            </div>
          )}
        </div>

        {/* Additional Info (only in overview) */}
        <div
          className="services-overview-info-grid"
          data-expanded={activeTab === 'overview'}
          aria-hidden={activeTab !== 'overview'}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mx-auto mt-10 max-w-4xl space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-accent/10 p-6 shadow-sm">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl" />
                <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <div className="flex items-center rounded-xl bg-accent/20 p-3 sm:p-3">
                      <MapPin className="h-8 w-8 text-accent sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-semibold tracking-wider text-foreground/60 uppercase">
                        Anfahrt
                      </p>
                      <p className="mt-0.5 text-sm text-foreground/80">
                        Innerhalb des Servicegebiets
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/60">
                        {SERVICE_AREAS.join(', ')}
                      </p>
                      <div className="mt-3 sm:hidden">
                        <p className="text-2xl font-bold tabular-nums">
                          {PRICING.travelPerKilometer.toLocaleString('de-DE', {
                            minimumFractionDigits: 2,
                          })}
                          €
                        </p>
                        <p className="text-xs text-foreground/60">pro Kilometer</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center gap-3 rounded-xl bg-background/80 px-6 py-3 shadow-sm backdrop-blur-sm sm:flex">
                    <div className="text-right">
                      <p className="text-3xl font-bold tabular-nums">
                        {PRICING.travelPerKilometer.toLocaleString('de-DE', {
                          minimumFractionDigits: 2,
                        })}
                        €
                      </p>
                      <p className="text-xs text-foreground/60">pro Kilometer</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-foreground/50">
                Gemäß §19 UStG wird keine Umsatzsteuer berechnet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface MobileToggleProps {
  isActive: boolean
  onToggle: () => void
  label?: string
}

function MobileToggle({ isActive, onToggle, label = 'Feiertag' }: MobileToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-1.5 rounded-full border border-accent/20 bg-background px-2.5 py-1.5 text-xs font-medium transition-all hover:border-accent/40 md:hidden"
      aria-label={`${label} ${isActive ? 'deaktivieren' : 'aktivieren'}`}
      aria-pressed={isActive}
    >
      <div
        className={`relative h-3.5 w-6 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-foreground/20'}`}
      >
        <div
          className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white shadow-sm transition-transform ${isActive ? 'translate-x-2.5' : 'translate-x-0.5'}`}
        />
      </div>
      <span className="text-[10px] tracking-wide text-foreground/70 uppercase">{label}</span>
    </button>
  )
}

interface PricingCardProps {
  isHoliday: boolean
  children: React.ReactNode
  className?: string
}

function PricingCard({ isHoliday, children, className = '' }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ease-in-out hover:shadow-md ${
        isHoliday ? 'border-accent/50 bg-accent/3' : 'border-accent/20 bg-card'
      } ${className}`}
    >
      {isHoliday && (
        <div className="services-holiday-ribbon absolute top-0 right-0 z-10">
          <div className="origin-top-right translate-x-px -translate-y-px rotate-45 bg-accent px-8 py-1 text-[10px] font-bold tracking-wider text-accent-foreground uppercase shadow-md">
            Feiertag
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

interface PriceItemProps {
  normalPrice: number
  holidayPrice?: number
  isHoliday: boolean
  title: string
  subtitle?: string
  perUnit?: string
}

function PriceItem({
  normalPrice,
  holidayPrice,
  isHoliday,
  title,
  subtitle,
  perUnit = '/Tag',
}: PriceItemProps) {
  const currentPrice = isHoliday && holidayPrice ? holidayPrice : normalPrice

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 space-y-1">
        <p className="leading-tight font-semibold">{title}</p>
        {subtitle && <p className="text-xs leading-tight text-foreground/60">{subtitle}</p>}
      </div>
      <div className="flex min-w-[90px] shrink-0 flex-col items-end">
        <div className="flex items-baseline gap-0.5">
          <AccessibleAnimatedNumber
            value={currentPrice}
            className="text-2xl font-bold tabular-nums"
          />
          <span className="text-2xl font-bold" aria-hidden="true">
            €
          </span>
          <span className="sr-only"> Euro</span>
        </div>
        <p className="text-xs text-foreground/50">{perUnit}</p>
      </div>
    </div>
  )
}
