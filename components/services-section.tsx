import { PawPrintIcon as Paw, Home, MapPin, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-accent/5 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meine Services</h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Ich biete flexible Betreuungsmöglichkeiten für jeden Bedarf - von kurzen Spaziergängen
              bis zur Urlaubsbetreuung.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Hundebetreuung */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="mb-2 flex items-center gap-2">
                <Home className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Hundebetreuung</CardTitle>
              </div>
              <CardDescription>
                Liebevolle Betreuung für deinen Hund in vertrauter Umgebung
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Tagesbetreuung (Max. 12 Std.)</span>
                  <span className="whitespace-nowrap font-bold">30€/Tag</span>
                </li>
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Urlaubsbetreuung (mit Übernachtung)</span>
                  <span className="whitespace-nowrap font-bold">35€/Tag</span>
                </li>
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Feiertage Tagesbetreuung</span>
                  <span className="whitespace-nowrap font-bold">45€/Tag</span>
                </li>
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Feiertage Urlaubsbetreuung</span>
                  <span className="whitespace-nowrap font-bold">52,50€/Tag</span>
                </li>
                <li className="flex items-start justify-between pb-2">
                  <div>
                    <span className="font-medium">&quot;Nie allein&quot;-Pauschale</span>
                    <p className="text-sm text-foreground/70">Der Hund ist nie alleine</p>
                  </div>
                  <span className="whitespace-nowrap font-bold">+5€/Tag</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Gassi gehen */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="mb-2 flex items-center gap-2">
                <Paw className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Gassi gehen</CardTitle>
              </div>
              <CardDescription>
                Regelmäßige Bewegung und Auslauf für deinen Vierbeiner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Gassi (Einfach) 30 Min.</span>
                  <span className="whitespace-nowrap font-bold">12€</span>
                </li>
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Gassi (Einfach) 60 Min.</span>
                  <span className="whitespace-nowrap font-bold">20€</span>
                </li>
                <li className="flex items-start justify-between pb-2">
                  <div>
                    <span className="font-medium">Jeder weitere Hund</span>
                    <p className="text-sm text-foreground/70">aus einem Haushalt</p>
                  </div>
                  <span className="whitespace-nowrap font-bold">+5€</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kennenlernen & Probetage */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="mb-2 flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Kennenlernen & Probetage</CardTitle>
              </div>
              <CardDescription>Lerne mich kennen und teste meinen Service</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <div>
                    <span className="font-medium">Kennenlernen (60 Min.)</span>
                    <p className="text-sm text-foreground/70">inkl. kleine Gassirunde</p>
                  </div>
                  <span className="whitespace-nowrap font-bold">15€</span>
                </li>
                <li className="flex items-start justify-between border-b border-foreground/10 pb-2">
                  <span className="font-medium">Probetag (Max. 12 Std.)</span>
                  <span className="whitespace-nowrap font-bold">20€</span>
                </li>
                <li className="flex items-start justify-between pb-2">
                  <span className="font-medium">Probeübernachtung</span>
                  <span className="whitespace-nowrap font-bold">25€</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Anfahrtspauschale */}
        <div className="mt-8 rounded-lg bg-accent/10 p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="font-medium">Anfahrtspauschale: 0,40€/Kilometer</p>
          </div>
        </div>

        {/* Umsatzsteuer-Hinweis */}
        <div className="mt-4 rounded-lg bg-muted/50 p-4 text-center">
          <p className="text-sm font-medium text-foreground/80">
            Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </div>
      </div>
    </section>
  )
}
