'use client'

import { useEffect } from 'react'

export function HeroViewportController({ targetId }: { targetId: string }) {
  useEffect(() => {
    const hero = document.getElementById(targetId)
    if (!hero) return undefined

    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0

    const applyViewportHeight = () => {
      const viewportHeight = window.innerHeight
      if (Math.abs(hero.getBoundingClientRect().height - viewportHeight) > 1) {
        hero.style.height = `${viewportHeight}px`
      }
    }

    const initialFrame = requestAnimationFrame(applyViewportHeight)

    const handleResize = () => {
      if (!isTouchDevice) applyViewportHeight()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(initialFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [targetId])

  return null
}
