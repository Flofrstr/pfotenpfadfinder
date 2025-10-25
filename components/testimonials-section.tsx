import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  dogName: string
  image: string
  imageAlt: string
}

function Testimonial({ quote, author, dogName, image, imageAlt }: TestimonialProps) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{dogName}</h3>
        <blockquote className="text-lg italic leading-relaxed">"{quote}"</blockquote>
        <p className="font-medium text-foreground/80">- {author}</p>
      </div>

      <div className="mx-auto max-w-[300px]">
        <div className="relative">
          {/* Polaroid frame */}
          <div className="rotate-2 transform bg-white p-3 pb-14 pt-3 shadow-lg transition-transform duration-300 hover:rotate-0">
            <div className="relative aspect-square overflow-hidden">
              <Image src={image} alt={imageAlt} width={600} height={600} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      dogName: 'Pinoesel',
      quote: 'Klappt alles super! Pino und ich sind super zufrieden - sehr zu empfehlen! ❤️',
      author: 'Alexandra',
      image: '/Pinoesel.jpeg',
      imageAlt: 'Pinoesel - ein glücklicher Hund',
    },
    {
      dogName: 'Flou',
      quote:
        'Liebevolle Betreuung. Vom ersten Moment haben wir gemerkt Hundis bei Michelle in guten Händen sind. Die Betreuung war herzlich, zuverlässig und professionell - man merkt sofort, dass hier echte Tierliebe dahintersteckt. Es ist ein gutes Gefühl, seine Vierbeiner in vertrauensvolle Hände zu geben. Absolut empfehlenswert!',
      author: 'Franziska u. Riccardo',
      image: '/Flou.jpeg',
      imageAlt: 'Flou - ein zufriedener Hund',
    },
    {
      dogName: 'Wimsel',
      quote:
        'Liebe Michelle, vielen Dank für deine tolle Betreuung über das letzte Wochenende! Besser kann es gar nicht laufen – vom lockeren und gleichzeitig professionellen Kennenlernen über die Checkliste vorab bis hin zum Wochenende selbst: Es war alles maximal toll! Kleine Updates zwischendurch per WhatsApp, dazu eine total flexible Bringzeit und obendrauf noch eine spontane Verlängerung um eine Nacht. Du hast alles möglich gemacht und mir meine freie Hunde-Zeit maximal sorglos gestaltet. Vielen Dank für deine tolle Art, deine super Betreuung und einfach für den entspannten und fröhlichen Umgang miteinander 🥰 Ich selbst war sehr beruhigt und hatte vollkommenes Vertrauen, dir meine Wilma zu überlassen. Alles war rundum perfekt. Wilma und ich vergeben 5/5 Knochen: 🦴🦴🦴🦴🦴 Liebe Grüße 😇',
      author: 'Fabian',
      image: '/Wimsel.jpeg',
      imageAlt: 'Wimsel - ein glücklicher Hund',
    },
    {
      dogName: 'Bea & Günni',
      quote:
        "Wir sind total glücklich, unsere Hunde nun vertrauensvoll in Michelle's Hände geben zu können, wenn hier mal zeittechnisch Not am Mann ist. Unsere Hunde fühlen sich sichtlich wohl, Michelle ist zuverlässig; es klappt super! 5 von 5 Sternen 😄",
      author: 'Sandra',
      image: '/Bea_u._Günni.jpeg',
      imageAlt: 'Bea und Günni - zwei glückliche Hunde',
    },
    {
      dogName: 'Orci',
      quote:
        'Michelle ist eine hochmotivierte Dogsitterin, die aber vielmehr mit ihrer ausgeglichenen, freundlichen und warmherzigen Art überzeugt. Neben der Betreuung war das Vertrauensverhältnis ein wichtiger Punkt für uns, der uns nach dem ersten Treffen für Michelle entscheiden ließ. Wir hoffen auf viele schöne Stunden für unseren Hund Orca und Michelle!',
      author: 'Tina',
      image: '/Orci.jpeg',
      imageAlt: 'Orci - ein zufriedener Hund',
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
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Erfahre, was Hundebesitzer über meinen Service denken
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
