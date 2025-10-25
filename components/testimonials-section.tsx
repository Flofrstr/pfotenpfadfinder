import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Pino',
      quote: 'Klappt alles super! Pino und ich sind super zufrieden - sehr zu empfehlen! ❤️',
      designation: 'Alexandra',
      src: '/Pino.jpeg',
    },
    {
      name: 'Filou',
      quote:
        'Liebevolle Betreuung. Vom ersten Moment haben wir gemerkt Hundis bei Michelle in guten Händen sind. Die Betreuung war herzlich, zuverlässig und professionell - man merkt sofort, dass hier echte Tierliebe dahintersteckt. Es ist ein gutes Gefühl, seine Vierbeiner in vertrauensvolle Hände zu geben. Absolut empfehlenswert!',
      designation: 'Franziska u. Riccardo',
      src: '/Filou.jpeg',
    },
    {
      name: 'Wilma',
      quote:
        'Liebe Michelle, vielen Dank für deine tolle Betreuung über das letzte Wochenende! Besser kann es gar nicht laufen – vom lockeren und gleichzeitig professionellen Kennenlernen über die Checkliste vorab bis hin zum Wochenende selbst: Es war alles maximal toll! Kleine Updates zwischendurch per WhatsApp, dazu eine total flexible Bringzeit und obendrauf noch eine spontane Verlängerung um eine Nacht. Du hast alles möglich gemacht und mir meine freie Hunde-Zeit maximal sorglos gestaltet. Vielen Dank für deine tolle Art, deine super Betreuung und einfach für den entspannten und fröhlichen Umgang miteinander 🥰 Ich selbst war sehr beruhigt und hatte vollkommenes Vertrauen, dir meine Wilma zu überlassen. Alles war rundum perfekt. Wilma und ich vergeben 5/5 Knochen: 🦴🦴🦴🦴🦴 Liebe Grüße 😇',
      designation: 'Fabian',
      src: '/Wilma.jpeg',
    },
    {
      name: 'Bea & Günni',
      quote:
        "Wir sind total glücklich, unsere Hunde nun vertrauensvoll in Michelle's Hände geben zu können, wenn hier mal zeittechnisch Not am Mann ist. Unsere Hunde fühlen sich sichtlich wohl, Michelle ist zuverlässig; es klappt super! 5 von 5 Sternen 😄",
      designation: 'Sandra',
      src: '/Bea_u._Günni.jpeg',
    },
    {
      name: 'Orca',
      quote:
        'Michelle ist eine hochmotivierte Dogsitterin, die aber vielmehr mit ihrer ausgeglichenen, freundlichen und warmherzigen Art überzeugt. Neben der Betreuung war das Vertrauensverhältnis ein wichtiger Punkt für uns, der uns nach dem ersten Treffen für Michelle entscheiden ließ. Wir hoffen auf viele schöne Stunden für unseren Hund Orca und Michelle!',
      designation: 'Tina',
      src: '/Orca.jpeg',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Das sagen meine Kunden
            </h2>
            <p className="text-foreground/80 max-w-[700px] md:text-xl">
              Erfahre, was Hundebesitzer über meinen Service denken
            </p>
          </div>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
