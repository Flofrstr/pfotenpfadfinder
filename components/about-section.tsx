import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent/5 absolute top-20 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full blur-3xl" />
        <div className="bg-accent/5 absolute bottom-40 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Über mich
            </h2>
            <p className="mb-3 inline-flex items-center gap-2 text-2xl font-medium md:text-3xl">
              Hallo liebe Hundemami's und Hundepapi's
              <svg
                className="fill-accent h-7 w-7 md:h-8 md:w-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </p>
            <p className="text-foreground/70 text-xl md:text-2xl">
              Ich bin Michelle, 24 Jahre alt und Gründerin von Pfotenpfadfinder.
            </p>
          </div>

          {/* Main content - Bento grid style */}
          <div className="grid gap-6 md:grid-cols-12 lg:gap-8">
            {/* Large image - takes up significant space */}
            <div className="md:col-span-5 lg:col-span-6">
              <div className="sticky top-8">
                <div className="group relative">
                  <div className="from-accent/20 to-accent/5 absolute -inset-4 rounded-3xl bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative rotate-2 transform bg-white p-6 pb-20 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                      <Image
                        src="/ueber_mich_michelle-plus-hunde.jpeg"
                        alt="Frau mit Brille sitzt auf Baumstamm im Wald mit drei Hunden"
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                      />
                    </div>
                    <div className="absolute right-6 bottom-6 left-6 flex items-center justify-center">
                      <p className="font-gluten text-xl font-bold text-amber-900 md:text-2xl">
                        Mit Herz & Pfote
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats integrated with image */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-accent mb-1 text-3xl font-bold">2025</div>
                    <div className="text-foreground/60 text-xs font-medium tracking-wide uppercase">
                      Gegründet
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent mb-1 text-3xl font-bold">24</div>
                    <div className="text-foreground/60 text-xs font-medium tracking-wide uppercase">
                      Jahre alt
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent mb-1 text-3xl font-bold">2026</div>
                    <div className="text-foreground/60 text-xs font-medium tracking-wide uppercase">
                      Ausbildung
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story content */}
            <div className="space-y-8 md:col-span-7 lg:col-span-6">
              {/* Geschichte */}
              <div>
                <h3 className="mb-4 text-3xl font-bold">Meine Geschichte mit Hunden</h3>
                <div className="text-foreground/80 space-y-4 text-lg leading-relaxed">
                  <p>
                    Schon seit meiner Kindheit begleiten mich Hunde durchs Leben. In meiner Kindheit
                    war es ein Border Collie/Australian Shepherd-Mix, der mich geprägt hat. Später
                    zog eine Bracke-Mischlingsdame aus dem russischen Tierschutz bei meinen Eltern
                    ein, die bis heute Teil unserer Familie ist. Sie hat in mir den Wunsch geweckt,
                    Hunde besser zu verstehen, ihr Verhalten zu ergründen und Wege zu finden, wie
                    wir Menschen ihnen den Alltag erleichtern können.
                  </p>
                  <p>
                    Während meiner Ausbildung zur Medizinisch-Technischen Laboratoriumsassistentin
                    (2019–2022) durfte ich gemeinsam mit meinem Freund regelmäßig auf den Border
                    Collie seiner Schwester aufpassen. Diese Erfahrung hat mir so viel Freude und
                    Lebensenergie geschenkt, dass ich beschloss, meine Leidenschaft auch anderen
                    Hunden und ihren Besitzern zur Verfügung zu stellen – sei es beim Gassigehen
                    oder beim Hundesitting.
                  </p>
                </div>
              </div>

              {/* Selbstständigkeit */}
              <div>
                <h3 className="mb-4 text-3xl font-bold">Der Weg zur Selbstständigkeit</h3>
                <div className="text-foreground/80 space-y-4 text-lg leading-relaxed">
                  <p>
                    Beruflich arbeite ich als Medizinisch-Technische Laboratoriumsassistentin. Seit
                    Januar 2025 bin ich in Teilzeit, um mehr Raum für mein Herzensprojekt zu
                    schaffen. Im Februar 2025 habe ich den Schritt in die Selbstständigkeit gewagt
                    und Pfotenpfadfinder gegründet – mit dem Ziel, Hunde und ihre Menschen
                    zuverlässig, liebevoll und individuell zu unterstützen. Ab Januar 2026 starte
                    ich zudem meine Ausbildung zur Hundepsychologin und Hundetrainerin, um mein
                    Wissen zu vertiefen und meine Arbeit noch professioneller gestalten zu können.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div>
                <h3 className="mb-4 text-3xl font-bold">Meine Vision</h3>
                <div className="text-foreground/80 space-y-4 text-lg leading-relaxed">
                  <p>
                    Mein großer Traum ist es, eines Tages eine eigene Hundetagesstätte zu eröffnen –
                    einen Ort, an dem jeder Hund sicher betreut wird und sich rundum wohlfühlen
                    kann.
                  </p>
                </div>
              </div>

              {/* Closing statement */}
              <div className="from-accent/10 to-accent/5 mt-12 rounded-2xl bg-gradient-to-br p-8">
                <div className="mb-6 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-12 w-12 md:h-16 md:w-16"
                  >
                    <path
                      d="M256 224c-79.4 0-192 122.8-192 200.3 0 34.9 26.8 55.8 71.7 55.8 48.8 0 81.1-25.1 120.3-25.1 39.5 0 71.9 25.1 120.3 25.1 44.9 0 71.7-20.9 71.7-55.8C448 346.8 335.4 224 256 224zm-147.3-12.6c-10.4-34.7-42.4-57.1-71.6-50.1-29.1 7-44.3 40.7-33.9 75.3 10.4 34.7 42.4 57.1 71.6 50.1 29.1-7 44.3-40.7 33.9-75.3zm84.7-20.8c30.9-8.1 46.4-49.9 34.6-93.4s-46.5-72-77.5-63.9-46.4 49.9-34.6 93.4c11.8 43.4 46.5 72 77.5 63.9zm281.4-29.3c-29.1-7-61.2 15.5-71.6 50.1-10.4 34.7 4.8 68.4 33.9 75.3 29.1 7 61.2-15.5 71.6-50.1 10.4-34.7-4.8-68.4-33.9-75.3zm-156.3 29.3c30.9 8.1 65.6-20.5 77.5-63.9 11.8-43.4-3.6-85.2-34.6-93.4s-65.6 20.5-77.5 63.9c-11.8 43.4 3.6 85.2 34.6 93.4z"
                      className="fill-accent"
                    />
                  </svg>
                </div>
                <p className="text-center text-lg leading-relaxed font-medium md:text-2xl">
                  Bis dahin begleite ich Dich und Deinen Vierbeiner gerne mit Herz, Geduld und Spaß
                  beim Gassigehen und Hundesitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
