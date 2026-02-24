# UI Components — Hinweise

## Basis

- Diese Komponenten basieren auf **shadcn/ui** + **Radix UI** Primitives
- Sie sind wiederverwendbare Bausteine (Button, Card, Input, etc.)

## Patterns

- **Varianten** mit CVA (class-variance-authority) definieren — siehe `button.tsx` als Referenz
- **Class-Merging** immer über `cn()` aus `lib/utils.ts`
- **Props** mit TypeScript-Interfaces typisieren, bestehende HTML-Props forwarden
- **Ref-Forwarding** beibehalten wo vorhanden

## Neue UI-Komponente hinzufügen

- Bevorzugt: `npx shadcn@latest add <component>` nutzen
- Manuell: Bestehende Komponente als Template nehmen, CVA-Varianten definieren
- Immer prüfen ob die Komponente in Dark & Light Mode gut aussieht
