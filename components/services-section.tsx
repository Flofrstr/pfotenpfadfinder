import { PawPrintIcon as Paw, Home, MapPin, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-accent/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Unsere Services
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Wir bieten flexible Betreuungsmöglichkeiten für jeden Bedarf - von kurzen Spaziergängen bis zur
              Urlaubsbetreuung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Hundebetreuung */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Home className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Hundebetreuung</CardTitle>
              </div>
              <CardDescription>Liebevolle Betreuung für Ihren Hund in vertrauter Umgebung</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Tagesbetreuung (Max. 12 Std.)</span>
                  <span className="font-bold whitespace-nowrap">30€/Tag</span>
                </li>
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Urlaubsbetreuung (mit Übernachtung)</span>
                  <span className="font-bold whitespace-nowrap">35€/Tag</span>
                </li>
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Feiertage Tagesbetreuung</span>
                  <span className="font-bold whitespace-nowrap">45€/Tag</span>
                </li>
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Feiertage Urlaubsbetreuung</span>
                  <span className="font-bold whitespace-nowrap">52,50€/Tag</span>
                </li>
                <li className="flex justify-between items-start pb-2">
                  <div>
                    <span className="font-medium">&quot;Nie allein&quot;-Pauschale</span>
                    <p className="text-sm text-foreground/70">Der Hund ist nie alleine</p>
                  </div>
                  <span className="font-bold whitespace-nowrap">+5€/Tag</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Gassi gehen */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Paw className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Gassi gehen</CardTitle>
              </div>
              <CardDescription>Regelmäßige Bewegung und Auslauf für Ihren Vierbeiner</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Gassi (Einfach) 30 Min.</span>
                  <span className="font-bold whitespace-nowrap">12€</span>
                </li>
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Gassi (Einfach) 60 Min.</span>
                  <span className="font-bold whitespace-nowrap">20€</span>
                </li>
                <li className="flex justify-between items-start pb-2">
                  <div>
                    <span className="font-medium">Jeder weitere Hund</span>
                    <p className="text-sm text-foreground/70">aus einem Haushalt</p>
                  </div>
                  <span className="font-bold whitespace-nowrap">+5€</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kennenlernen & Probetage */}
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Kennenlernen & Probetage</CardTitle>
              </div>
              <CardDescription>Lernen Sie uns kennen und testen Sie unseren Service</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <div>
                    <span className="font-medium">Kennenlernen (60 Min.)</span>
                    <p className="text-sm text-foreground/70">inkl. kleine Gassirunde</p>
                  </div>
                  <span className="font-bold whitespace-nowrap">15€</span>
                </li>
                <li className="flex justify-between items-start border-b border-foreground/10 pb-2">
                  <span className="font-medium">Probetag (Max. 12 Std.)</span>
                  <span className="font-bold whitespace-nowrap">20€</span>
                </li>
                <li className="flex justify-between items-start pb-2">
                  <span className="font-medium">Probeübernachtung</span>
                  <span className="font-bold whitespace-nowrap">25€</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Anfahrtspauschale */}
        <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="font-medium">Anfahrtspauschale: 0,40€/Kilometer</p>
          </div>
        </div>

        {/* Umsatzsteuer-Hinweis */}
        <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-sm font-medium text-foreground/80">
            Gemäß §19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </div>
      </div>
    </section>
  )
}

