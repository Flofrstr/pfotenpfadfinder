import Image from "next/image"
import { Heart, Shield, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Warum Pfotenpfadfinder?</h2>
              <p className="text-foreground/80 md:text-lg">
                Bei uns steht das Wohlbefinden Ihres Hundes an erster Stelle. Mit Erfahrung, Leidenschaft und
                Verantwortungsbewusstsein sorgen wir dafür, dass Ihr Vierbeiner die bestmögliche Betreuung erhält.
              </p>
            </div>

            <div className="grid gap-6 mt-6">
              <div className="flex gap-4 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Liebevolle Betreuung</h3>
                  <p className="text-foreground/70">
                    Wir behandeln jeden Hund mit Liebe und Respekt, als wäre er unser eigener.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Zuverlässigkeit</h3>
                  <p className="text-foreground/70">
                    Auf uns können Sie sich verlassen - pünktlich, verantwortungsbewusst und transparent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Flexible Betreuungszeiten</h3>
                  <p className="text-foreground/70">
                    Wir passen uns Ihrem Zeitplan an, damit Sie sich keine Sorgen machen müssen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Hundebetreuerin mit glücklichem Hund"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

