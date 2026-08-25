'use client'

import { AnimateNumber } from 'motion-plus/react'

interface MotionAnimatedNumberProps {
  value: number
  className?: string
}

export function MotionAnimatedNumber({ value, className }: MotionAnimatedNumberProps) {
  return (
    <AnimateNumber
      aria-hidden="true"
      className={className}
      data-animated-number="true"
      data-value={String(value)}
      locales="de-DE"
      format={{ maximumFractionDigits: 2 }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeOut' },
        layout: { type: 'spring', duration: 0.9, bounce: 0 },
        y: { type: 'tween', duration: 0.9, ease: [0.45, 0, 0.55, 1] },
      }}
    >
      {value}
    </AnimateNumber>
  )
}
