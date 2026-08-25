'use client'

import { useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'

interface MotionAnimatedNumberProps {
  value: number
  className?: string
}

function getFractionDigits(value: number) {
  const roundedValue = Math.round(value * 100) / 100

  if (Number.isInteger(roundedValue)) return 0
  if (Number.isInteger(roundedValue * 10)) return 1
  return 2
}

const COUNT_UP_DURATION_MS = 1_500

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

export function MotionAnimatedNumber({ value, className }: MotionAnimatedNumberProps) {
  const shouldReduceMotion = useReducedMotion()
  const elementRef = useRef<HTMLSpanElement>(null)
  const renderedValueRef = useRef(value)
  const [renderedValue, setRenderedValue] = useState(value)
  const fractionDigits = getFractionDigits(value)
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('de-DE', {
        maximumFractionDigits: fractionDigits,
      }),
    [fractionDigits],
  )
  const precision = 10 ** fractionDigits
  const formattedValue = formatter.format(Math.round(renderedValue * precision) / precision)

  useEffect(() => {
    const setAnimationState = (isAnimating: boolean) => {
      if (elementRef.current) {
        elementRef.current.dataset.animating = String(isAnimating)
      }
    }

    if (shouldReduceMotion || renderedValueRef.current === value) {
      renderedValueRef.current = value
      setRenderedValue(value)
      setAnimationState(false)
      return undefined
    }

    const startValue = renderedValueRef.current
    const valueDifference = value - startValue
    const startedAt = window.performance.now()
    let animationFrame = 0

    setAnimationState(true)

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - startedAt) / COUNT_UP_DURATION_MS, 1)
      const nextValue = startValue + valueDifference * easeOutCubic(progress)

      renderedValueRef.current = nextValue
      setRenderedValue(nextValue)

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue)
        return
      }

      renderedValueRef.current = value
      setRenderedValue(value)
      setAnimationState(false)
    }

    animationFrame = window.requestAnimationFrame(updateValue)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [shouldReduceMotion, value])

  return (
    <span
      ref={elementRef}
      aria-hidden="true"
      className={className}
      data-animated-number="true"
      data-animating="false"
      data-value={String(value)}
    >
      {formattedValue}
    </span>
  )
}
