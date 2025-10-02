import Image from "next/image"
import { GraduationCap, Heart, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Bild */}
          <div className="relative w-full max-w-[700px] mx-auto lg:order-2">
            <div className="bg-white p-4 pt-4 pb-16 shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/ueber_mich_michelle-plus-hunde.jpeg"
                  alt="Michelle - Hundepsychologin und Hundetrainerin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-6 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Über mich</h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <div>
                  <p className="text-lg font-medium">Hallo liebe Hundemami's und Hundepapi's🤍</p>
                  <p className="mt-2">
                    Ich bin Michelle, 24 Jahre alt und Gründerin von Pfotenpfadfinder.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Meine Geschichte mit Hunden</h3>
                  <p>
                    Schon seit meiner Kindheit begleiten mich Hunde durchs Leben. In meiner Kindheit war es ein Border Collie/Australian Shepherd-Mix, der mich geprägt hat. Später zog eine Bracke-Mischlingsdame aus dem russischen Tierschutz bei meinen Eltern ein, die bis heute Teil unserer Familie ist. Sie hat in mir den Wunsch geweckt, Hunde besser zu verstehen, ihr Verhalten zu ergründen und Wege zu finden, wie wir Menschen ihnen den Alltag erleichtern können.
                  </p>
                  
                  <p>
                    Während meiner Ausbildung zur Medizinisch-Technischen Laboratoriumsassistentin (2019–2022) durfte ich gemeinsam mit meinem Freund regelmäßig auf den Border Collie seiner Schwester aufpassen. Diese Erfahrung hat mir so viel Freude und Lebensenergie geschenkt, dass ich beschloss, meine Leidenschaft auch anderen Hunden und ihren Besitzern zur Verfügung zu stellen – sei es beim Gassigehen oder beim Hundesitting.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Der Weg zur Selbstständigkeit</h3>
                  <p>
                    Beruflich arbeite ich als Medizinisch-Technische Laboratoriumsassistentin. Seit Januar 2025 bin ich in Teilzeit, um mehr Raum für mein Herzensprojekt zu schaffen. Im Februar 2025 habe ich den Schritt in die Selbstständigkeit gewagt und Pfotenpfadfinder gegründet – mit dem Ziel, Hunde und ihre Menschen zuverlässig, liebevoll und individuell zu unterstützen. Ab Januar 2026 starte ich zudem meine Ausbildung zur Hundepsychologin und Hundetrainerin, um mein Wissen zu vertiefen und meine Arbeit noch professioneller gestalten zu können.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Meine Vision</h3>
                  <p>
                    Mein großer Traum ist es, eines Tages eine eigene Hundetagesstätte zu eröffnen – einen Ort, an dem jeder Hund sicher betreut wird und sich rundum wohlfühlen kann.
                  </p>
                  
                  <p className="font-medium">
                    Bis dahin begleite ich Dich und Deinen Vierbeiner gerne mit Herz, Geduld und Spaß beim Gassigehen und Hundesitting.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 mt-6 pt-6 border-t border-border/50">
              <div className="flex gap-3 items-start">
                <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Ausbildung zur Hundepsychologin & Hundetrainerin ab Januar 2026</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Lebenslange Leidenschaft für Hunde</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Gegründet Februar 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

