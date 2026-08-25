# Pfotenpfadfinder Landingpage

Technische Basis der Pfotenpfadfinder-Website auf Next.js 16, React 19 und Tailwind CSS.

## Tech Stack

- **Runtime:** Node.js 24
- **Framework:** Next.js 16 mit React 19
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Theme:** next-themes for dark mode support
- **Deployment:** Netlify Zero-Config/OpenNext

## Getting Started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Oxlint with type-aware Next.js, React, and accessibility rules
- `npm run typecheck` - Run the stable TypeScript compiler
- `npm test` - Run unit tests once with Vitest
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:e2e` - Run Playwright smoke tests
- `npm run generate:form` - Regenerate the Netlify form blueprint from the shared field data
- `npm run perf:js` - Check the production pages against their initial JavaScript budgets
- `npm run format` - Format code with Oxfmt and sort Tailwind classes
- `npm run format:check` - Check formatting without writing files
- `npm run knip` - Find unused files, exports, and dependencies
- `npm run check` - Run formatting, lint, typecheck, unit tests, and Knip

## Development

This project uses:

- **Oxlint** with type-aware Next.js, React, TypeScript, and accessibility rules
- **Oxfmt** for formatting and Tailwind class sorting
- **Vitest** and **Playwright** for automated tests
- **simple-git-hooks** for pre-commit and pre-push hooks

## Checks before production

- Verify in the Netlify dashboard whether Netlify Analytics is actually enabled. Its privacy text is intentionally unchanged until the operator confirms the dashboard state.
- Use a Deploy Preview to check routes, image delivery, headers, caching and Netlify form detection. Only send a clearly marked form test with explicit operator approval.
