'use client'

import type React from 'react'

import { useEffect, useState } from 'react'

// Using the provided Font Awesome paw SVG
function PawPrint({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      style={style}
    >
      <path
        d="M256 224c-79.4 0-192 122.8-192 200.3 0 34.9 26.8 55.8 71.7 55.8 48.8 0 81.1-25.1 120.3-25.1 39.5 0 71.9 25.1 120.3 25.1 44.9 0 71.7-20.9 71.7-55.8C448 346.8 335.4 224 256 224zm-147.3-12.6c-10.4-34.7-42.4-57.1-71.6-50.1-29.1 7-44.3 40.7-33.9 75.3 10.4 34.7 42.4 57.1 71.6 50.1 29.1-7 44.3-40.7 33.9-75.3zm84.7-20.8c30.9-8.1 46.4-49.9 34.6-93.4s-46.5-72-77.5-63.9-46.4 49.9-34.6 93.4c11.8 43.4 46.5 72 77.5 63.9zm281.4-29.3c-29.1-7-61.2 15.5-71.6 50.1-10.4 34.7 4.8 68.4 33.9 75.3 29.1 7 61.2-15.5 71.6-50.1 10.4-34.7-4.8-68.4-33.9-75.3zm-156.3 29.3c30.9 8.1 65.6-20.5 77.5-63.9 11.8-43.4-3.6-85.2-34.6-93.4s-65.6 20.5-77.5 63.9c-11.8 43.4 3.6 85.2 34.6 93.4z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 right-4 z-0 hidden h-full w-8 flex-col items-center justify-between py-8 md:flex">
      {/* Vertical paw prints distributed across full height */}
      {Array.from({ length: 20 }).map((_, index) => {
        // Calculate which paws should be visible based on scroll progress
        const pawProgress = (index / 20) * 100
        const isVisible = pawProgress <= scrollProgress

        // Alternate left and right paws
        const isLeft = index % 2 === 0

        // Calculate opacity - darker as you go down
        const opacity = isVisible ? 0.4 + (index / 20) * 0.6 : 0.1

        return (
          <PawPrint
            key={index}
            className="text-accent h-5 w-5 transition-all duration-300"
            style={{
              opacity: opacity,
              transform: `rotate(${isLeft ? -15 : 15}deg) rotate(180deg)`,
              filter: isVisible ? 'none' : 'grayscale(100%)',
            }}
          />
        )
      })}
    </div>
  )
}
