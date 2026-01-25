# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brain House is a corporate website for a Digital Transformation Partner (ICT consulting firm). It's a bilingual (Korean/English) single-page application with a dark tech theme.

## Development Commands

```bash
npm run dev      # Start dev server (auto-switches port if 3000 busy)
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server
```

**Note**: The user always runs the dev server separately. Do NOT run `npm run dev` - just make code changes and the user will verify in their running dev server.

## Architecture

**Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS

### Source Structure (`src/`)

- `app/` - Next.js App Router (single page at `page.tsx`)
- `components/`
  - `layout/` - Header, Footer
  - `sections/` - Page sections (Hero, About, Business, Services, Portfolio, Contact)
  - `ui/` - Reusable components (Button, Container, Icons)
  - `3d/` - Three.js components using @react-three/fiber
- `contexts/language-context.tsx` - i18n state (Korean/English toggle)
- `data/translations.ts` - All UI text content for both languages
- `lib/utils.ts` - Utility functions (custom `cn` for class merging)

### Key Patterns

**Internationalization**: All text content lives in `src/data/translations.ts`. Components access translations via the `useLanguage()` hook:
```tsx
const { t, language, toggleLanguage } = useLanguage();
return <h1>{t.hero.title}</h1>;
```

**Icons**: Do NOT import from `lucide-react` directly. Use the local `Icons` object from `@/components/ui/icons` which wraps SVG components to avoid version conflicts.

**Client Components**: Mark components with `'use client'` when using hooks (`useLanguage`, `useState`, etc.) or browser APIs.

**Path Alias**: `@/*` maps to `./src/*`

## Styling

- Tailwind CSS with CSS custom properties for theming
- Dark theme: `slate-900` base, `blue-900` gradients
- Accent colors: `blue-400`, `cyan-300`
- Font: Pretendard (Korean-optimized, loaded via CDN in globals.css)
- Primary brand color: `#064E9B` (Deep Corporate Blue)

## Commit Convention

`feat:` | `fix:` | `style:` | `refactor:` | `docs:`
