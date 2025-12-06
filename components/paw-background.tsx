'use client'

// Verschiedene Varianten für unterschiedliche Sektionen
type Variant = 'a' | 'b' | 'c' | 'd' | 'e'

interface PawBackgroundProps {
  variant?: Variant
}

export function PawBackground({ variant = 'a' }: PawBackgroundProps) {
  // Nur mittlere bis große Pfoten, keine Überlappungen
  const positions = {
    a: [
      { top: '5%', left: '6%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-20deg' },
      { top: '15%', right: '12%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '35deg' },
      { top: '50%', left: '4%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '-30deg' },
      { top: '42%', right: '5%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '45deg' },
      { bottom: '18%', left: '15%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '15deg' },
    ],
    b: [
      { top: '8%', right: '8%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '30deg' },
      { top: '25%', left: '5%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '-25deg' },
      { top: '55%', right: '15%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-15deg' },
      { top: '45%', left: '12%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '40deg' },
      { bottom: '12%', right: '6%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '-35deg' },
    ],
    c: [
      { top: '6%', left: '10%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-15deg' },
      { top: '20%', right: '6%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '50deg' },
      { top: '48%', left: '5%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '25deg' },
      { top: '38%', right: '12%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-40deg' },
      { bottom: '15%', left: '18%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '10deg' },
    ],
    d: [
      { top: '10%', left: '5%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '20deg' },
      { top: '12%', right: '15%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '-30deg' },
      { top: '52%', right: '6%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '35deg' },
      { top: '40%', left: '10%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-20deg' },
      { bottom: '10%', right: '18%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '-45deg' },
    ],
    e: [
      { top: '8%', right: '5%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-25deg' },
      { top: '18%', left: '8%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '15deg' },
      { top: '50%', left: '6%', size: 'h-7 w-7 md:h-9 md:w-9', rotate: '40deg' },
      { top: '45%', right: '10%', size: 'h-8 w-8 md:h-10 md:w-10', rotate: '-35deg' },
      { bottom: '20%', right: '5%', size: 'h-9 w-9 md:h-11 md:w-11', rotate: '25deg' },
    ],
  }

  const paws = positions[variant]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {paws.map((paw, index) => (
        <svg
          key={index}
          className={`text-foreground/[0.035] dark:text-foreground/[0.055] absolute ${paw.size}`}
          style={{
            top: paw.top,
            left: paw.left,
            right: paw.right,
            bottom: paw.bottom,
            transform: `rotate(${paw.rotate})`,
          }}
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M256 224c-79.4 0-192 122.8-192 200.3 0 34.9 26.8 55.8 71.7 55.8 48.8 0 81.1-25.1 120.3-25.1 39.5 0 71.9 25.1 120.3 25.1 44.9 0 71.7-20.9 71.7-55.8C448 346.8 335.4 224 256 224zm-147.3-12.6c-10.4-34.7-42.4-57.1-71.6-50.1-29.1 7-44.3 40.7-33.9 75.3 10.4 34.7 42.4 57.1 71.6 50.1 29.1-7 44.3-40.7 33.9-75.3zm84.7-20.8c30.9-8.1 46.4-49.9 34.6-93.4s-46.5-72-77.5-63.9-46.4 49.9-34.6 93.4c11.8 43.4 46.5 72 77.5 63.9zm281.4-29.3c-29.1-7-61.2 15.5-71.6 50.1-10.4 34.7 4.8 68.4 33.9 75.3 29.1 7 61.2-15.5 71.6-50.1 10.4-34.7-4.8-68.4-33.9-75.3zm-156.3 29.3c30.9 8.1 65.6-20.5 77.5-63.9 11.8-43.4-3.6-85.2-34.6-93.4s-65.6 20.5-77.5 63.9c-11.8 43.4 3.6 85.2 34.6 93.4z" />
        </svg>
      ))}
    </div>
  )
}
