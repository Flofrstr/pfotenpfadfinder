# Pfotenpfadfinder — Projekt-Richtlinien

## Tech-Stack

- **Framework**: Next.js 16 (App Router, RSC)
- **React**: 19
- **Styling**: Tailwind CSS v4 (via PostCSS, kein tailwind.config.ts)
- **TypeScript**: 5.8 (Type-Checking mit tsgo)
- **UI-Bibliothek**: shadcn/ui + Radix UI Primitives
- **Theming**: next-themes (Dark/Light/System)
- **Animationen**: motion + motion-plus + tailwindcss-animate
- **Icons**: Lucide React + Tabler Icons
- **Formatter**: Prettier (mit Tailwind-Plugin)
- **Git Hooks**: simple-git-hooks + lint-staged (pre-commit: Prettier, pre-push: typecheck)
- **Hosting**: Netlify

## Projekt-Struktur

```
app/              → Seiten, Layouts, API-Routes, globals.css
components/       → Seiten-Sektionen (hero-section, about-section, etc.)
components/ui/    → Wiederverwendbare UI-Primitives (shadcn/ui)
lib/              → Utilities (z.B. cn() in utils.ts)
public/           → Statische Assets (Bilder, SVGs)
```

## Styling

### Grundsatz

- **Tailwind-only** — keine CSS-Module, kein SCSS, minimale inline Styles
- Farben über CSS-Variablen aus `app/globals.css`, nie hardcoded
- Class-Merging mit `cn()` aus `lib/utils.ts` (clsx + tailwind-merge)

### Dark & Light Mode

- Light Mode ist der Default
- Beide Modi sind über CSS-Variablen in `globals.css` definiert (:root und .dark)
- Bei neuen Komponenten: Prüfen ob Farben in beiden Modi gut aussehen
- Tailwind `dark:` Variante nutzen wenn CSS-Variablen nicht ausreichen
- Theme-Toggle: `components/mode-toggle.tsx`
- Theme-Provider: `components/theme-provider.tsx` (next-themes)

### Responsive Design

- **Mobile-first**: Basis-Styles für Mobile, dann hocharbeiten
- Breakpoints: `sm:` (640px) → `md:` (768px) → `lg:` (1024px)
- Container: Custom max-width 1400px (definiert in globals.css)
- Typische Patterns:
  - Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
  - Navigation: `hidden lg:flex` (Desktop) / `lg:hidden` (Mobile)
  - Spacing: `py-12 md:py-24 lg:py-32`
  - Text: `text-3xl sm:text-4xl md:text-5xl`

### Farb-System (CSS-Variablen)

- `--background` / `--foreground` — Hintergrund & Text
- `--primary` / `--primary-foreground` — Hauptfarbe (Braun/Creme)
- `--accent` / `--accent-foreground` — Akzent (Rosa, HSL 329 27% 60%)
- `--muted` / `--muted-foreground` — Gedämpfte Elemente
- `--card`, `--popover`, `--secondary`, `--destructive` — Weitere Tokens

### Fonts

- **Montserrat** (`--font-sans`) — Body-Text, über next/font
- **Gluten** (`--font-gluten`) — h1 und h2, automatisch via globals.css

## Komponenten-Patterns

- Neue Seiten-Sektionen: In `components/` als eigene Datei (z.B. `neue-section.tsx`)
- Neue UI-Primitives: In `components/ui/` mit CVA für Varianten
- Varianten-Definition: class-variance-authority (CVA), siehe `button.tsx` als Referenz
- Props: TypeScript-Interfaces nutzen
- Animations: `motion` Library, nicht raw CSS transitions

## Gut zu wissen

- **Kein tailwind.config.ts** — Tailwind v4 konfiguriert über PostCSS (`postcss.config.mjs`)
- **components.json** referenziert `tailwind.config.ts` — das ist ein shadcn/ui Artefakt, nicht anfassen
- **Hero-Section** hat spezielle mobile viewport-height Logik (dynamische Berechnung wegen Browser-Adressleiste)
- **Container** ist custom definiert in globals.css (nicht Tailwinds Standard-Container)
- **Paw-Background** Komponente platziert dekorative SVG-Pfoten — bei Layout-Änderungen beachten

## Scripts

```bash
npm run dev        # Entwicklungsserver starten
npm run build      # Produktions-Build
npm run typecheck  # TypeScript prüfen (tsgo)
npm run format     # Prettier über alle Dateien
npm run check      # Typecheck (wird auch bei pre-push ausgeführt)
```
