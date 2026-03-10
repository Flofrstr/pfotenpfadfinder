import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { PawBackground } from '@/components/paw-background'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Wilma',
      quote:
        'Liebe Michelle, vielen Dank für deine tolle Betreuung über das letzte Wochenende! Besser kann es gar nicht laufen – vom lockeren und gleichzeitig professionellen Kennenlernen über die Checkliste vorab bis hin zum Wochenende selbst: Es war alles maximal toll! Kleine Updates zwischendurch per WhatsApp, dazu eine total flexible Bringzeit und obendrauf noch eine spontane Verlängerung um eine Nacht. Du hast alles möglich gemacht und mir meine freie Hunde-Zeit maximal sorglos gestaltet. Vielen Dank für deine tolle Art, deine super Betreuung und einfach für den entspannten und fröhlichen Umgang miteinander 🥰 Ich selbst war sehr beruhigt und hatte vollkommenes Vertrauen, dir meine Wilma zu überlassen. Alles war rundum perfekt. Wilma und ich vergeben 5/5 Knochen: 🦴🦴🦴🦴🦴 Liebe Grüße 😇',
      designation: 'Fabian',
      src: '/Wilma.jpeg',
      alt: 'Heller Retriever sitzt im grünen Gras mit pinker Leine',
    },
    {
      name: 'Pino',
      quote: 'Klappt alles super! Pino und ich sind super zufrieden - sehr zu empfehlen! ❤️',
      designation: 'Alexandra',
      src: '/Pino.jpeg',
      alt: 'Gelber Labrador mit geöffnetem Maul schaut nach oben',
    },
    {
      name: 'Filou',
      quote:
        'Liebevolle Betreuung. Vom ersten Moment haben wir gemerkt, dass die Hundis bei Michelle in guten Händen sind. Die Betreuung war herzlich, zuverlässig und professionell - man merkt sofort, dass hier echte Tierliebe dahintersteckt. Es ist ein gutes Gefühl, seine Vierbeiner in vertrauensvolle Hände zu geben. Absolut empfehlenswert!',
      designation: 'Franziska & Riccardo',
      src: '/Filou.jpeg',
      alt: 'Schwarz-weißer Hund mit Stehohren blickt auf Waldweg nach oben',
    },
    {
      name: 'Bea u. Günni',
      quote:
        "Wir sind total glücklich, unsere Hunde nun vertrauensvoll in Michelle's Hände geben zu können, wenn hier mal zeittechnisch Not am Mann ist. Unsere Hunde fühlen sich sichtlich wohl, Michelle ist zuverlässig; es klappt super! 5 von 5 Sternen 😄",
      designation: 'Sandra',
      src: '/Bea_u._Günni.jpeg',
      alt: 'Zwei Hunde auf Waldweg - schwarzer Hund vorne, brauner Hund dahinter',
    },
    {
      name: 'Orca',
      quote:
        'Michelle ist eine hochmotivierte Dogsitterin, die aber vielmehr mit ihrer ausgeglichenen, freundlichen und warmherzigen Art überzeugt. Neben der Betreuung war das Vertrauensverhältnis ein wichtiger Punkt für uns, der uns nach dem ersten Treffen für Michelle entscheiden ließ. Wir hoffen auf viele schöne Stunden für unseren Hund Orca und Michelle!',
      designation: 'Tina',
      src: '/Orca.jpeg',
      alt: 'Braun-beiger Hund mit weißer Brust sitzt zwischen grünen Pflanzen',
    },
    {
      name: 'Fiebi',
      quote:
        'Fiebi ist wirklich nicht leicht zu knacken, aber dich hat sie sofort ins Herz geschlossen. Man merkt sofort, wie liebevoll und kompetent du mit ihr umgehst – du machst einen ganz wunderbaren Job! Ich werde dich auf jeden Fall weiterempfehlen. ❤️',
      designation: 'Coco',
      src: '/Fiebi.jpeg',
      alt: 'Kleiner schwarz-weißer Hund liegt auf heller Decke mit Plüschtier',
    },
    {
      name: 'Frieda',
      quote:
        'Ganz herzlichen Dank für die liebevolle Betreuung von Frieda! ❤️ Die Friedi in so guten Händen zu wissen ist so schön, da konnte ich das Wochenende noch viel besser genießen!',
      designation: 'Angelika',
      src: '/Frieda.jpeg',
      alt: 'Frieda, ein liebevoll betreuter Hund',
    },
  ]

  return (
    <section className="bg-accent/5 relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <PawBackground variant="c" />

      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Das sagen meine Kunden
            </h2>
            <p className="text-foreground/70 max-w-[700px] md:text-lg">
              Erfahre, was Hundebesitzer über meinen Service denken
            </p>
          </div>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
