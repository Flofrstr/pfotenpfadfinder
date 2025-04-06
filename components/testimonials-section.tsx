import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  rating: number
  imageAlt: string
}

function Testimonial({ quote, author, rating, imageAlt, imageIndex }: TestimonialProps & { imageIndex: number }) {
  // Use specific dog images that are guaranteed to work
  const dogImages = ["/dog1.jpg", "/dog2.jpg"]

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-accent fill-accent" : "text-foreground/20"}`} />
          ))}
        </div>
        <blockquote className="text-lg italic">"{quote}"</blockquote>
        <p className="font-medium">- {author}</p>
      </div>

      <div className="mx-auto max-w-[300px]">
        <div className="relative">
          {/* Polaroid frame */}
          <div className="bg-white p-3 pt-3 pb-14 shadow-lg rotate-2 transform transition-transform hover:rotate-0 duration-300">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={dogImages[imageIndex] || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={600}
                className="object-cover"
              />
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
      quote:
        "Pfotenpfadfinder ist ein absoluter Glücksfall für uns und unseren Labrador Max! Die liebevolle Betreuung und Flexibilität haben uns komplett überzeugt. Max freut sich jedes Mal, wenn er abgeholt wird!",
      author: "Familie Müller",
      rating: 5,
      imageAlt: "Glücklicher Labrador",
    },
    {
      quote:
        "Seit wir Pfotenpfadfinder gefunden haben, können wir endlich wieder beruhigt zur Arbeit gehen. Unsere Hündin Luna wird bestens betreut und kommt immer glücklich und ausgepowert zurück.",
      author: "Sarah K.",
      rating: 5,
      imageAlt: "Glücklicher Hund mit Spielzeug",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="font-lazydog text-3xl md:text-4xl font-bold tracking-tight">Das sagen unsere Kunden</h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Erfahren Sie, was Hundebesitzer über unseren Service denken
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} imageIndex={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

