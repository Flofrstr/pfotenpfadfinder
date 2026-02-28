'use client'

import { PawPrintIcon as Paw, Home, MapPin, Heart, Dog, Calculator } from 'lucide-react'
import { CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { useState } from 'react'
import { AnimateNumber } from 'motion-plus/react'
import { motion, AnimatePresence } from 'motion/react'
import { PawBackground } from '@/components/paw-background'
import { PriceCalculatorContent } from '@/components/price-calculator'
import { cn } from '@/lib/utils'

type Tab = 'overview' | 'calculator'

export function ServicesSection() {
  const [showHolidayPricing, setShowHolidayPricing] = useState(false)
  const [numberOfDogs, setNumberOfDogs] = useState(1)
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  return (
    <section id="preise" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="d" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Preise & Services
            </h2>
            <p className="text-foreground/70 max-w-[700px] md:text-lg">
              Transparente Preise für professionelle Hundebetreuung
            </p>
          </div>

          {/* Tabs */}
          <div className="border-accent/20 bg-background inline-flex items-center gap-1 rounded-full border p-1">
            <button
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
              onClick={() => setActiveTab('calculator')}
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
              onClick={() => setShowHolidayPricing(!showHolidayPricing)}
              className="border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5 hidden items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-all md:flex"
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
            <p className="text-foreground/70 text-sm font-medium">
              Anzahl Hunde aus einem Haushalt
            </p>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map(count => (
                <button
                  key={count}
                  onClick={() => setNumberOfDogs(count)}
                  className={`group relative flex h-16 w-24 items-center justify-center rounded-xl border-2 transition-all ${
                    numberOfDogs === count
                      ? 'border-accent bg-accent/10 scale-110'
                      : 'border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5'
                  }`}
                  aria-label={`${count} ${count === 1 ? 'Hund' : 'Hunde'} auswählen`}
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
            <p className="text-foreground/50 text-xs">
              {numberOfDogs === 1 ? 'Preis für 1 Hund' : `Gesamtpreis für ${numberOfDogs} Hunde`}
            </p>
            <div className="border-accent/30 bg-accent/5 mt-4 flex items-center gap-3 rounded-full border px-5 py-3">
              <Dog className="text-accent h-5 w-5 shrink-0" />
              <p className="text-foreground/70 text-sm">
                Einzelbetreuung (auf Wunsch oder bei Unverträglichkeit) = Preis für 2 Hunde
              </p>
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* Hundebetreuung */}
                  <PricingCard
                    isHoliday={showHolidayPricing}
                    onToggle={() => setShowHolidayPricing(!showHolidayPricing)}
                    showToggle={true}
                  >
                    <CardHeader className="border-accent/10 border-b pb-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-accent/10 rounded-lg p-2">
                            <Home className="text-accent h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">Hundebetreuung</CardTitle>
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
                          normalPrice={35 + (numberOfDogs - 1) * 25}
                          holidayPrice={(35 + (numberOfDogs - 1) * 25) * 1.5}
                          isHoliday={showHolidayPricing}
                          title="Tagesbetreuung"
                          subtitle="Max. 12 Stunden"
                        />
                        <PriceItem
                          normalPrice={40 + (numberOfDogs - 1) * 30}
                          holidayPrice={(40 + (numberOfDogs - 1) * 30) * 1.5}
                          isHoliday={showHolidayPricing}
                          title="Urlaubsbetreuung"
                          subtitle="Mit Übernachtung"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-accent/5 bg-accent/5 border-t pt-4">
                      <div className="flex w-full items-center justify-between">
                        <span className="text-foreground/70 text-sm font-medium">
                          Nie allein Pauschale
                        </span>
                        <span className="text-accent text-lg font-bold">+5€</span>
                      </div>
                    </CardFooter>
                  </PricingCard>

                  {/* Gassi gehen */}
                  <PricingCard
                    isHoliday={showHolidayPricing}
                    onToggle={() => setShowHolidayPricing(!showHolidayPricing)}
                    showToggle={true}
                  >
                    <CardHeader className="border-accent/10 border-b pb-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-accent/10 rounded-lg p-2">
                            <Paw className="text-accent h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">Gassi gehen</CardTitle>
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
                          normalPrice={15 + (numberOfDogs - 1) * 5}
                          holidayPrice={(15 + (numberOfDogs - 1) * 5) * 1.5}
                          isHoliday={showHolidayPricing}
                          title="30 Minuten"
                          subtitle="Einfache Gassirunde"
                          perUnit="pro Spaziergang"
                        />
                        <PriceItem
                          normalPrice={25 + (numberOfDogs - 1) * 5}
                          holidayPrice={(25 + (numberOfDogs - 1) * 5) * 1.5}
                          isHoliday={showHolidayPricing}
                          title="60 Minuten"
                          subtitle="Ausführliche Gassirunde"
                          perUnit="pro Spaziergang"
                        />
                      </div>
                    </CardContent>
                  </PricingCard>

                  {/* Kennenlernen & Probetage */}
                  <PricingCard isHoliday={false} showToggle={false}>
                    <CardHeader className="border-accent/10 border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-accent/10 rounded-lg p-2">
                          <Heart className="text-accent h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">Kennenlernen</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-6">
                      <div className="space-y-5">
                        <PriceItem
                          normalPrice={15}
                          isHoliday={false}
                          title="Kennenlernen"
                          subtitle="60 Min. inkl. Gassirunde"
                          perUnit="einmalig"
                        />
                        <PriceItem
                          normalPrice={
                            numberOfDogs === 1 ? 20 : numberOfDogs === 2 ? 20 + 10 : 20 + 10 + 10
                          }
                          isHoliday={false}
                          title="Probetag"
                          subtitle="Max. 12 Stunden"
                          perUnit="einmalig"
                        />
                        <PriceItem
                          normalPrice={
                            numberOfDogs === 1 ? 25 : numberOfDogs === 2 ? 25 + 15 : 25 + 15 + 10
                          }
                          isHoliday={false}
                          title="Probeübernachtung"
                          subtitle="Mit Übernachtung"
                          perUnit="einmalig"
                        />
                      </div>
                    </CardContent>
                  </PricingCard>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <PriceCalculatorContent numberOfDogs={numberOfDogs} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Additional Info (only in overview) */}
        <AnimatePresence>
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-10 max-w-4xl space-y-6">
                <div className="border-accent/20 from-accent/5 to-accent/10 relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 shadow-sm">
                  <div className="bg-accent/10 absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full blur-2xl" />
                  <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                      <div className="bg-accent/20 flex items-center rounded-xl p-3 sm:p-3">
                        <MapPin className="text-accent h-8 w-8 sm:h-6 sm:w-6" />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-foreground/60 text-xs font-semibold tracking-wider uppercase">
                          Anfahrt
                        </p>
                        <p className="text-foreground/80 mt-0.5 text-sm">
                          Innerhalb des Servicegebiets
                        </p>
                        <p className="text-foreground/60 mt-1.5 text-xs leading-relaxed">
                          Gevelsberg, Schwelm, Ennepetal, Hasslinghausen
                        </p>
                        <div className="mt-3 sm:hidden">
                          <p className="text-2xl font-bold tabular-nums">0,60€</p>
                          <p className="text-foreground/60 text-xs">pro Kilometer</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background/80 hidden items-center gap-3 rounded-xl px-6 py-3 shadow-sm backdrop-blur-sm sm:flex">
                      <div className="text-right">
                        <p className="text-3xl font-bold tabular-nums">0,60€</p>
                        <p className="text-foreground/60 text-xs">pro Kilometer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/50 text-center text-xs">
                  Gemäß §19 UStG wird keine Umsatzsteuer berechnet
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      onClick={onToggle}
      className="border-accent/20 bg-background hover:border-accent/40 flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium transition-all md:hidden"
      aria-label={`${label} ${isActive ? 'deaktivieren' : 'aktivieren'}`}
    >
      <div
        className={`relative h-3.5 w-6 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-foreground/20'}`}
      >
        <div
          className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white shadow-sm transition-transform ${isActive ? 'translate-x-2.5' : 'translate-x-0.5'}`}
        />
      </div>
      <span className="text-foreground/70 text-[10px] tracking-wide uppercase">{label}</span>
    </button>
  )
}

interface PricingCardProps {
  isHoliday: boolean
  children: React.ReactNode
  className?: string
  showToggle?: boolean
  onToggle?: () => void
}

function PricingCard({
  isHoliday,
  children,
  className = '',
  showToggle: _showToggle = false,
  onToggle: _onToggle,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ease-in-out hover:shadow-md ${
        isHoliday ? 'border-accent/50 bg-accent/3' : 'border-accent/20 bg-card'
      } ${className}`}
    >
      {isHoliday && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 z-10"
        >
          <div className="bg-accent text-accent-foreground origin-top-right translate-x-px -translate-y-px rotate-45 px-8 py-1 text-[10px] font-bold tracking-wider uppercase shadow-md">
            Feiertag
          </div>
        </motion.div>
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
        {subtitle && <p className="text-foreground/60 text-xs leading-tight">{subtitle}</p>}
      </div>
      <div className="flex min-w-[90px] shrink-0 flex-col items-end">
        <div className="flex items-baseline gap-0.5">
          <AnimateNumber className="text-2xl font-bold tabular-nums">{currentPrice}</AnimateNumber>
          <span className="text-2xl font-bold">€</span>
        </div>
        <p className="text-foreground/50 text-xs">{perUnit}</p>
      </div>
    </div>
  )
}
