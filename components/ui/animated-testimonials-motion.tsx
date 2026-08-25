'use client'

import { AnimatePresence, m as motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { MotionProvider } from './motion-provider'
import { TestimonialCard, TestimonialNavigation } from './animated-testimonials-shared'
import type { Testimonial } from './animated-testimonials-shared'

const getRotation = (index: number) => {
  const rotations = [-8, 5, -3, 7, -5, 4, -6, 3]
  return rotations[index % rotations.length]
}

interface AnimatedTestimonialsMotionProps {
  testimonials: Testimonial[]
  initialActive: number
}

export function AnimatedTestimonialsMotion({
  testimonials,
  initialActive,
}: AnimatedTestimonialsMotionProps) {
  return (
    <MotionProvider>
      <AnimatedTestimonialsMotionContent
        testimonials={testimonials}
        initialActive={initialActive}
      />
    </MotionProvider>
  )
}

function AnimatedTestimonialsMotionContent({
  testimonials,
  initialActive,
}: AnimatedTestimonialsMotionProps) {
  const [active, setActive] = useState(initialActive)
  const [contentHeight, setContentHeight] = useState<number | 'auto'>('auto')
  const [isInView, setIsInView] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = rootRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0]?.isIntersecting) return

        setIsInView(true)
        observer.disconnect()
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const element = contentRef.current
    if (!element) return undefined

    const updateHeight = () => setContentHeight(element.getBoundingClientRect().height)
    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleNext = () => setActive(previous => (previous + 1) % testimonials.length)
  const handlePrev = () =>
    setActive(previous => (previous - 1 + testimonials.length) % testimonials.length)

  return (
    <div ref={rootRef} className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
      <div className="order-1">
        <div className="relative mx-auto h-[400px] w-full max-w-[350px] md:h-[450px]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const isActive = index === active

              return (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1 : 0.95,
                    z: isActive ? 0 : -100,
                    rotate: isActive ? 0 : getRotation(index),
                    zIndex: isActive ? 40 : testimonials.length + 2 - index,
                    y: isActive ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotation(index),
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 origin-bottom"
                  aria-hidden={!isActive}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        <TestimonialNavigation
          className="mt-6 hidden justify-center gap-4 md:flex"
          onPrevious={handlePrev}
          onNext={handleNext}
        />
      </div>

      <TestimonialNavigation
        className="order-2 flex justify-center gap-4 md:hidden"
        onPrevious={handlePrev}
        onNext={handleNext}
      />

      <motion.div
        animate={{ height: contentHeight }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="order-3 flex flex-col py-4 md:order-2"
        aria-live="polite"
        aria-atomic="true"
      >
        <div ref={contentRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${isInView ? 'visible' : 'static'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {testimonials[active].designation}
                </h3>
              </div>
              <motion.p className="text-base leading-relaxed text-foreground md:text-lg">
                {isInView
                  ? testimonials[active].quote.split(' ').map((word, index, words) => {
                      const baseDelay = Math.max(0.002, 0.015 - words.length * 0.0001)

                      return (
                        <motion.span
                          key={`${word}-${index}`}
                          initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.12,
                            ease: 'easeInOut',
                            delay: baseDelay * index,
                          }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      )
                    })
                  : testimonials[active].quote}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
