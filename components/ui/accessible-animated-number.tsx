'use client'

import { lazy, Suspense, useEffect, useRef, useState } from 'react'

interface AccessibleAnimatedNumberProps {
  value: number
  className?: string
}

const numberFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
})

const MotionAnimatedNumber = lazy(() =>
  import('@/components/ui/accessible-animated-number-motion').then(module => ({
    default: module.MotionAnimatedNumber,
  })),
)

export function AccessibleAnimatedNumber({ value, className }: AccessibleAnimatedNumberProps) {
  const activationTargetRef = useRef<HTMLDataElement>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const activationTarget = activationTargetRef.current

    if (!activationTarget || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setShouldAnimate(true)
        observer.disconnect()
      },
      { rootMargin: '200px 0px' },
    )

    observer.observe(activationTarget)

    return () => observer.disconnect()
  }, [])

  const formattedValue = numberFormatter.format(value)

  return (
    <>
      <data
        ref={activationTargetRef}
        value={String(value)}
        className={shouldAnimate ? 'sr-only' : className}
      >
        {formattedValue}
      </data>
      {shouldAnimate && (
        <Suspense
          fallback={
            <span aria-hidden="true" className={className}>
              {formattedValue}
            </span>
          }
        >
          <MotionAnimatedNumber value={value} className={className} />
        </Suspense>
      )}
    </>
  )
}
