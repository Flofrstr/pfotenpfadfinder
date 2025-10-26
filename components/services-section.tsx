'use client'

import { PawPrintIcon as Paw, Home, MapPin, Heart } from 'lucide-react'
import { CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { useState } from 'react'
import { AnimateNumber } from 'motion-plus/react'
import { motion } from 'motion/react'

export function ServicesSection() {
  const [showHolidayPricing, setShowHolidayPricing] = useState(false)

  return (
    <section id="services" className="bg-accent/5 w-full py-12 md:py-24 lg:py-32">
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

          {/* Feiertage Toggle - Desktop only */}
          <button
            onClick={() => setShowHolidayPricing(!showHolidayPricing)}
            className="border-accent/20 bg-background hover:border-accent/40 hover:bg-accent/5 hidden items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-all md:inline-flex"
          >
            <div
              className={`relative h-5 w-9 rounded-full transition-colors ${showHolidayPricing ? 'bg-accent' : 'bg-foreground/20'}`}
            >
              <div
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${showHolidayPricing ? 'translate-x-4' : 'translate-x-0.5'}`}
              />
            </div>
            <span>Feiertage Preise {showHolidayPricing ? 'anzeigen' : 'ausblenden'}</span>
          </button>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
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
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 pt-6">
              <div className="space-y-5">
                <PriceItem
                  normalPrice={30}
                  holidayPrice={45}
                  isHoliday={showHolidayPricing}
                  title="Tagesbetreuung"
                  subtitle="Max. 12 Stunden"
                />
                <PriceItem
                  normalPrice={35}
                  holidayPrice={52.5}
                  isHoliday={showHolidayPricing}
                  title="Urlaubsbetreuung"
                  subtitle="Mit Übernachtung"
                />
              </div>
            </CardContent>
            <CardFooter className="border-accent/5 bg-accent/5 border-t pt-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-foreground/70 text-sm font-medium">Nie allein Pauschale</span>
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
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 pt-6">
              <div className="space-y-5">
                <PriceItem
                  normalPrice={12}
                  holidayPrice={18}
                  isHoliday={showHolidayPricing}
                  title="30 Minuten"
                  subtitle="Einfache Gassirunde"
                  perUnit="pro Spaziergang"
                />
                <PriceItem
                  normalPrice={20}
                  holidayPrice={30}
                  isHoliday={showHolidayPricing}
                  title="60 Minuten"
                  subtitle="Ausführliche Gassirunde"
                  perUnit="pro Spaziergang"
                />
              </div>
            </CardContent>
            <CardFooter className="border-accent/5 bg-accent/5 border-t pt-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-foreground/70 text-sm font-medium">Jeder weitere Hund</span>
                <span className="text-accent text-lg font-bold">+5€</span>
              </div>
            </CardFooter>
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
                  normalPrice={20}
                  isHoliday={false}
                  title="Probetag"
                  subtitle="Max. 12 Stunden"
                  perUnit="einmalig"
                />
                <PriceItem
                  normalPrice={25}
                  isHoliday={false}
                  title="Probeübernachtung"
                  subtitle="Mit Übernachtung"
                  perUnit="einmalig"
                />
              </div>
            </CardContent>
          </PricingCard>
        </div>

        {/* Additional Info */}
        <div className="mx-auto mt-10 max-w-4xl space-y-6">
          <div className="border-accent/20 from-accent/5 to-accent/10 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-sm">
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
                  <p className="text-foreground/80 mt-0.5 text-sm">Innerhalb des Servicegebiets</p>
                  <p className="text-foreground/60 mt-1.5 text-xs leading-relaxed">
                    Gevelsberg, Schwelm, Ennepetal, Hasslinghausen
                  </p>
                  <div className="mt-3 sm:hidden">
                    <p className="text-2xl font-bold tabular-nums">0,40€</p>
                    <p className="text-foreground/60 text-xs">pro Kilometer</p>
                  </div>
                </div>
              </div>
              <div className="bg-background/80 hidden items-center gap-3 rounded-xl px-6 py-3 shadow-sm backdrop-blur-sm sm:flex">
                <div className="text-right">
                  <p className="text-3xl font-bold tabular-nums">0,40€</p>
                  <p className="text-foreground/60 text-xs">pro Kilometer</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-foreground/50 text-center text-xs">
            * Gemäß §19 UStG wird keine Umsatzsteuer berechnet
          </p>
        </div>
      </div>
    </section>
  )
}

interface MobileToggleProps {
  isActive: boolean
  onToggle: () => void
}

function MobileToggle({ isActive, onToggle }: MobileToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="border-accent/20 bg-background hover:border-accent/40 flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium transition-all md:hidden"
      aria-label={isActive ? 'Normale Preise anzeigen' : 'Feiertage Preise anzeigen'}
    >
      <div
        className={`relative h-3.5 w-6 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-foreground/20'}`}
      >
        <div
          className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white shadow-sm transition-transform ${isActive ? 'translate-x-2.5' : 'translate-x-0.5'}`}
        />
      </div>
      <span className="text-foreground/70 text-[10px] tracking-wide uppercase">Feiertag</span>
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
    <motion.div
      animate={{
        borderColor: isHoliday ? 'hsl(var(--accent) / 0.5)' : 'hsl(var(--accent) / 0.2)',
        backgroundColor: isHoliday ? 'hsl(var(--accent) / 0.03)' : 'hsl(var(--card))',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {isHoliday && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 z-10"
        >
          <div className="bg-accent text-accent-foreground origin-top-right translate-x-[1px] -translate-y-[1px] rotate-45 px-8 py-1 text-[10px] font-bold tracking-wider uppercase shadow-md">
            Feiertag
          </div>
        </motion.div>
      )}
      {children}
    </motion.div>
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
