'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useMeasure } from 'react-use'

import { useState, useEffect } from 'react'

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
  alt?: string
}

const getRotation = (index: number) => {
  const rotations = [-8, 5, -3, 7, -5, 4, -6, 3]
  return rotations[index % rotations.length]
}

export const AnimatedTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [active, setActive] = useState(0)
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNext = () => {
    setActive(prev => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        {/* Image Section */}
        <div className="order-1">
          <div className="relative mx-auto h-[400px] w-full max-w-[350px] md:h-[450px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                // Nur aktuelle und benachbarte Bilder rendern für bessere Performance
                const shouldRender = isMobile
                  ? Math.abs(index - active) <= 1 ||
                    (active === 0 && index === testimonials.length - 1) ||
                    (active === testimonials.length - 1 && index === 0)
                  : true

                if (!shouldRender) return null

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
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : getRotation(index),
                      zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: getRotation(index),
                    }}
                    transition={{
                      duration: isMobile ? 0.5 : 0.6,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 origin-bottom"
                    style={{ willChange: isActive(index) ? 'transform, opacity' : 'auto' }}
                  >
                    {/* Polaroid frame */}
                    <div className="h-full w-full bg-white p-4 pb-16 shadow-xl dark:bg-gray-100">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={testimonial.src}
                          alt={testimonial.alt || testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      {/* Dog name on polaroid white space */}
                      <div className="absolute right-4 bottom-4 left-4 text-center">
                        <p className="font-gluten text-lg font-bold text-amber-900">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
          {/* Navigation arrows on desktop - below image */}
          <div className="mt-6 hidden justify-center gap-4 md:flex">
            <button
              onClick={handlePrev}
              className="group/button bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="text-primary h-6 w-6 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group/button bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="text-primary h-6 w-6 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Navigation arrows on mobile - between image and text */}
        <div className="order-2 flex justify-center gap-4 md:hidden">
          <button
            onClick={handlePrev}
            className="group/button bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <IconArrowLeft className="text-primary h-6 w-6 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
          </button>
          <button
            onClick={handleNext}
            className="group/button bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <IconArrowRight className="text-primary h-6 w-6 transition-transform duration-300 group-hover/button:translate-x-0.5" />
          </button>
        </div>

        {/* Text Section */}
        <motion.div
          animate={{ height }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="order-3 flex flex-col py-4 md:order-2"
        >
          <div ref={ref}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {testimonials[active].designation}
                  </h3>
                </div>
                <motion.p className="text-foreground text-base leading-relaxed md:text-lg">
                  {(() => {
                    const words = testimonials[active].quote.split(' ')
                    const wordCount = words.length
                    const baseDelay = Math.max(0.002, 0.015 - wordCount * 0.0001)
                    const duration = isMobile ? 0.08 : 0.12

                    return words.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: isMobile ? 'blur(0px)' : 'blur(10px)',
                          opacity: 0,
                          y: isMobile ? 2 : 5,
                        }}
                        animate={{
                          filter: 'blur(0px)',
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration,
                          ease: 'easeInOut',
                          delay: baseDelay * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))
                  })()}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
