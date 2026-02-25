# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brain House is a corporate website for a Digital Transformation Partner (ICT consulting firm). Trilingual (Korean/English/Japanese) application with a dark tech theme.

## Development Commands

```bash
npm run dev      # Start dev server (auto-switches port if 3000 busy)
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server
```

**Note**: The user always runs the dev server separately. Do NOT run `npm run dev` - just make code changes and the user will verify in their running dev server.

## Architecture

**Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Three.js (@react-three/fiber)

### Source Structure (`src/`)

- `app/` - App Router with root page + nested pages (`/about`, `/business`, `/services`, `/services/[slug]`, `/portfolio`, `/portfolio/[slug]`, `/contact`, `/privacy`)
- `app/api/contact/route.ts` - Contact form POST endpoint (Resend email)
- `components/layout/` - Header (sticky, with dropdown menus), Footer
- `components/sections/` - Page sections (Hero, About, Business, Services, Portfolio, Contact, etc.)
- `components/ui/` - Reusable components (Button with CVA variants, Container, Icons, Logo)
- `components/3d/` - Three.js brain network visualization (scene.tsx, network.tsx)
- `contexts/language-context.tsx` - i18n state managing `Language = 'ko' | 'en' | 'ja'`
- `data/translations.ts` - All UI text for 3 languages (~8000+ lines)
- `lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)
- `lib/email.ts` - Resend email service with HTML templates

### Key Patterns

**Internationalization**: All text lives in `src/data/translations.ts` as nested objects `translations[lang][section][key]`. Components access via `useLanguage()`:
```tsx
const { t, language } = useLanguage();
return <h1>{t.hero.title}</h1>;
```
When modifying text, always update all 3 languages (ko, en, ja) simultaneously.

**Icons**: Do NOT import from `lucide-react` directly. Use the local `Icons` object from `@/components/ui/icons` which wraps 40+ SVG components to avoid version conflicts.

**3D Hero Scene**: Dynamically imported with `ssr: false`, wrapped in `ErrorBoundary` with `null` fallback. Checks WebGL support before rendering. Do not modify without understanding this defensive pattern.

**Client Components**: Mark with `'use client'` when using hooks (`useLanguage`, `useState`, etc.) or browser APIs.

**Path Alias**: `@/*` maps to `./src/*`

## Styling

- Dark theme: `slate-900` base, `blue-900` gradients, accents `blue-400` / `cyan-300`
- Primary brand color: `#064E9B` (Deep Corporate Blue)
- Fonts: Pretendard (primary, Korean-optimized via CDN), Poppins (accent)
- Container max-width: 1400px (2xl breakpoint)
- Custom animations in `globals.css`: `float`, `fade-in-up`, `gradient-x`, `gradient-shift`
- Staggered animations use inline `animationDelay` + `animationFillMode: 'forwards'`

## Environment Variables

- `RESEND_API_KEY` - Required for contact form email delivery
- `ADMIN_EMAIL` - Optional, defaults to `brainhouse26@gmail.com`

## Commit Convention

`feat:` | `fix:` | `style:` | `refactor:` | `docs:`
