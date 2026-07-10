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
      locales="de-DE"
      format={{ maximumFractionDigits: 2 }}
    >
      {value}
    </AnimateNumber>
  )
}
