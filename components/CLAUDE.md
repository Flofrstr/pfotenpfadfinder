# Components — Hinweise

## Struktur

- Jede Seiten-Sektion ist eine eigene Datei (z.B. `hero-section.tsx`, `about-section.tsx`)
- Sektionen werden in `app/page.tsx` zusammengesetzt

## Styling

- **Mobile-first**: Basis-Styles für kleine Screens, dann `sm:` → `md:` → `lg:`
- **Dark & Light Mode**: CSS-Variablen nutzen (`bg-background`, `text-foreground`, `text-accent`, etc.) — diese passen sich automatisch an. Nur bei Bedarf `dark:` Variante ergänzen.
- Farben nie hardcoded — immer über die definierten Tokens

## Animationen

- `motion` Library verwenden (nicht raw CSS transitions)
- Bestehende Patterns in `features-highlight-section.tsx` und `testimonials-section.tsx` als Referenz

## Neue Sektionen erstellen

- Am bestehenden Pattern orientieren (Aufbau, Spacing, Container-Nutzung)
- Section-Padding: Typisch `py-12 md:py-24 lg:py-32`
- Container: `container` Klasse für zentrierten, begrenzten Inhalt
- Paw-Background Dekor-Elemente bei Bedarf über `paw-background.tsx` einbinden
