import { PawPrintIcon as Paw, Home, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-lazydog text-3xl md:text-4xl font-bold tracking-tight">
              Unsere Dienstleistungen & Preise
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Wir bieten flexible Betreuungsmöglichkeiten für jeden Bedarf - von kurzen Spaziergängen bis zur
              Urlaubsbetreuung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Home className="h-6 w-6 text-accent" />
                <CardTitle className="font-lazydog text-2xl">Hundebetreuung</CardTitle>
              </div>
              <CardDescription>Liebevolle Betreuung für Ihren Hund in vertrauter Umgebung</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-foreground/10 pb-2">
                  <span className="font-medium">Stundenweise</span>
                  <span className="font-bold">6€</span>
                </li>
                <li className="flex justify-between items-center border-b border-foreground/10 pb-2">
                  <span className="font-medium">Tagesbetreuung (Bis max. 12 Stunden)</span>
                  <span className="font-bold">30€/Tag</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <div>
                    <span className="font-medium">Urlaubsbetreuung</span>
                    <p className="text-sm text-foreground/70">10% Ermäßigung ab dem 5. Tag</p>
                  </div>
                  <span className="font-bold">35€/Tag</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Paw className="h-6 w-6 text-accent" />
                <CardTitle className="font-lazydog text-2xl">Gassi gehen</CardTitle>
              </div>
              <CardDescription>Regelmäßige Bewegung und Auslauf für Ihren Vierbeiner</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-foreground/10 pb-2">
                  <span className="font-medium">Einzelspaziergang 30 Min</span>
                  <span className="font-bold">12€</span>
                </li>
                <li className="flex justify-between items-center border-b border-foreground/10 pb-2">
                  <span className="font-medium">Einzelspaziergang 60 Min</span>
                  <span className="font-bold">20€</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span className="font-medium">Jeder weitere Hund</span>
                  <span className="font-bold">+5€</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="font-medium">Anfahrtspauschale: 0,40€/Kilometer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

