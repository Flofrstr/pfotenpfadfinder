'use client'

import { LazyMotion, MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

const loadMotionFeatures = () =>
  import('@/components/ui/motion-features').then(module => module.default)

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion strict features={loadMotionFeatures}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
