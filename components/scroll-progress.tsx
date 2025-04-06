"use client"

import type React from "react"

import { useEffect, useState } from "react"

// Using the provided Font Awesome paw SVG
function PawPrint({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} style={style}>
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
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 h-2 bg-background/80 backdrop-blur-sm z-50">
      <div className="h-full bg-accent/20 relative overflow-hidden" style={{ width: `${scrollProgress}%` }}>
        {/* Paw prints inside the progress bar */}
        <div className="absolute inset-0 flex items-center">
          {Array.from({ length: 20 }).map((_, index) => {
            // Only show paws that are within the current progress
            const pawPosition = (index / 20) * 100
            if (pawPosition > scrollProgress) return null

            // Alternate left and right paws
            const isLeft = index % 2 === 0

            // Calculate opacity - darker as you go right
            const opacity = 0.3 + (index / 20) * 0.7

            return (
              <PawPrint
                key={index}
                className="h-4 w-4 absolute text-accent"
                style={{
                  left: `${(index / 20) * 100}%`,
                  opacity: opacity,
                  transform: `translateY(${isLeft ? -1 : 1}px) rotate(${isLeft ? -30 : 30}deg)`,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

