import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export interface Testimonial {
  quote: string
  name: string
  designation: string
  src: string
  alt?: string
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full w-full bg-white p-4 pb-16 shadow-xl dark:bg-gray-100">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={testimonial.src}
          alt={testimonial.alt || testimonial.name}
          width={500}
          height={500}
          sizes="(min-width: 416px) 350px, calc(100vw - 40px)"
          draggable={false}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute right-4 bottom-4 left-4 text-center">
        <p className="font-gluten text-lg font-bold text-amber-900">{testimonial.name}</p>
      </div>
    </div>
  )
}

interface TestimonialNavigationProps {
  className: string
  onPrevious: () => void
  onNext: () => void
}

export function TestimonialNavigation({
  className,
  onPrevious,
  onNext,
}: TestimonialNavigationProps) {
  return (
    <div className={className} role="group" aria-label="Kundenstimmen">
      <button
        type="button"
        onClick={onPrevious}
        className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-md transition-[background-color,box-shadow,transform] duration-300 hover:scale-110 hover:bg-primary/20 hover:shadow-lg dark:bg-primary/20 dark:hover:bg-primary/30"
        aria-label="Vorheriges Testimonial"
      >
        <ArrowLeft
          className="h-6 w-6 text-primary transition-transform duration-300 group-hover/button:-translate-x-0.5"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-md transition-[background-color,box-shadow,transform] duration-300 hover:scale-110 hover:bg-primary/20 hover:shadow-lg dark:bg-primary/20 dark:hover:bg-primary/30"
        aria-label="Nächstes Testimonial"
      >
        <ArrowRight
          className="h-6 w-6 text-primary transition-transform duration-300 group-hover/button:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
