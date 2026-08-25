# Pfotenpfadfinder — Projekt-Richtlinien

## Tech-Stack

- **Framework**: Next.js 16 (App Router, RSC)
- **React**: 19
- **Styling**: Tailwind CSS v4 (via PostCSS, kein tailwind.config.ts)
- **TypeScript**: 7.0 (Type-Checking mit `tsc`)
- **UI-Bibliothek**: shadcn/ui + Radix UI Primitives
- **Theming**: next-themes (Dark/Light/System)
- **Animationen**: motion + motion-plus + tw-animate-css
- **Icons**: Lucide React + lokale Marken-SVGs
- **Linting**: Oxlint mit type-aware TypeScript-, React-, Next.js- und Accessibility-Regeln
- **Formatter**: Oxfmt mit Tailwind-Klassensortierung
- **Git Hooks**: simple-git-hooks + lint-staged (pre-commit: Oxfmt, pre-push: vollständiger Check)
- **Hosting**: Netlify

## Projekt-Struktur

```text
app/              → Seiten, Layouts, API-Routes, globals.css
components/       → Seiten-Sektionen (hero-section, about-section, etc.)
components/ui/    → Wiederverwendbare UI-Primitives (shadcn/ui)
lib/              → Utilities (z. B. cn() in utils.ts)
public/           → Statische Assets (Bilder, SVGs)
```

## Styling

### Grundsatz

- Tailwind bevorzugen; keine CSS-Module oder SCSS und nur notwendige Inline-Styles
- Farben über CSS-Variablen aus `app/globals.css`, nicht hardcodieren
- Klassen mit `cn()` aus `lib/utils.ts` zusammenführen

### Dark & Light Mode

- Light Mode ist der Default
- Beide Modi sind über CSS-Variablen in `globals.css` definiert (`:root` und `.dark`)
- Neue Komponenten in beiden Modi prüfen
- Tailwind `dark:` verwenden, wenn CSS-Variablen nicht ausreichen
- Theme-Toggle: `components/mode-toggle.tsx`
- Theme-Provider: `components/theme-provider.tsx`

### Responsive Design

- Mobile-first arbeiten
- Breakpoints: `sm:` (640 px), `md:` (768 px), `lg:` (1024 px)
- Der Custom-Container hat eine maximale Breite von 1400 px
- Bestehende responsive Patterns der benachbarten Sektionen beibehalten

### Design-Tokens und Fonts

- Vorhandene Farb-Tokens wie `--background`, `--foreground`, `--primary`, `--accent`, `--muted` und ihre Foreground-Varianten verwenden
- Montserrat (`--font-sans`) ist die Body-Schrift
- Gluten (`--font-gluten`) wird für `h1` und `h2` eingesetzt

## Komponenten-Patterns

- Neue Seiten-Sektionen als eigene Datei in `components/` anlegen
- Wiederverwendbare UI-Primitives nach `components/ui/` legen
- Für Varianten CVA und für Props TypeScript-Interfaces verwenden
- Bestehende HTML-Props und Ref-Weiterleitung bei UI-Primitives beibehalten
- Neue shadcn-Komponenten bevorzugt mit `npx shadcn@latest add <component>` hinzufügen und anschließend an das Projekt anpassen
- Für komplexe Animationen die vorhandene Motion-Infrastruktur verwenden
- Animationen mit reduzierter Bewegung und Tastaturbedienung prüfen

## Gut zu wissen

- Tailwind v4 wird über `postcss.config.mjs` und `app/globals.css` konfiguriert
- `components.json` referenziert als shadcn-Artefakt eine nicht vorhandene `tailwind.config.ts`
- Die Hero-Sektion besitzt spezielle mobile Viewport-Height-Logik für Browser-Adressleisten
- Der Container ist in `globals.css` projektspezifisch definiert
- `PawBackground` platziert dekorative SVG-Pfoten, was bei Layout-Änderungen berücksichtigt werden muss

## Qualitätsprüfung

```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build inklusive Formular-Generierung
npm run lint         # Oxlint inklusive type-aware Prüfung ausführen
npm run typecheck    # TypeScript prüfen
npm run test         # Unit-Tests ausführen
npm run test:e2e     # Playwright-Tests ausführen
npm run format       # Dateien mit Oxfmt formatieren
npm run knip         # Unbenutzte Dateien, Exporte und Abhängigkeiten prüfen
npm run check        # Format, Lint, TypeScript, Unit-Tests und Knip prüfen
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
