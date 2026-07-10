'use client'

import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { TestimonialCard, TestimonialNavigation } from './animated-testimonials-shared'
import type { Testimonial } from './animated-testimonials-shared'

const MotionTestimonials = lazy(() =>
  import('./animated-testimonials-motion').then(module => ({
    default: module.AnimatedTestimonialsMotion,
  })),
)

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
}

export function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const [shouldLoadMotion, setShouldLoadMotion] = useState(false)
  const [fallbackActive, setFallbackActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = rootRef.current
    if (!element || shouldLoadMotion) return

    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0]?.isIntersecting) return

        setShouldLoadMotion(true)
        observer.disconnect()
      },
      { rootMargin: '320px 0px', threshold: 0 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [shouldLoadMotion])

  const handlePrevious = () => {
    setFallbackActive(previous => (previous - 1 + testimonials.length) % testimonials.length)
    setShouldLoadMotion(true)
  }

  const handleNext = () => {
    setFallbackActive(previous => (previous + 1) % testimonials.length)
    setShouldLoadMotion(true)
  }

  const fallback = (
    <StaticTestimonials
      testimonials={testimonials}
      active={fallbackActive}
      onPrevious={handlePrevious}
      onNext={handleNext}
    />
  )

  return (
    <div
      ref={rootRef}
      className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12"
      onPointerEnter={() => setShouldLoadMotion(true)}
      onFocusCapture={() => setShouldLoadMotion(true)}
    >
      {shouldLoadMotion ? (
        <Suspense fallback={fallback}>
          <MotionTestimonials testimonials={testimonials} initialActive={fallbackActive} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}

interface StaticTestimonialsProps extends AnimatedTestimonialsProps {
  active: number
  onPrevious: () => void
  onNext: () => void
}

function StaticTestimonials({ testimonials, active, onPrevious, onNext }: StaticTestimonialsProps) {
  const testimonial = testimonials[active]

  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
      <div className="order-1">
        <div className="relative mx-auto h-[400px] w-full max-w-[350px] md:h-[450px]">
          <div className="absolute inset-0 origin-bottom">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </div>
        <TestimonialNavigation
          className="mt-6 hidden justify-center gap-4 md:flex"
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      <TestimonialNavigation
        className="order-2 flex justify-center gap-4 md:hidden"
        onPrevious={onPrevious}
        onNext={onNext}
      />

      <div className="order-3 flex flex-col py-4 md:order-2" aria-live="polite" aria-atomic="true">
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonial.designation}
            </h3>
          </div>
          <p className="text-foreground text-base leading-relaxed md:text-lg">
            {testimonial.quote}
          </p>
        </div>
      </div>
    </div>
  )
}

export type { Testimonial }
