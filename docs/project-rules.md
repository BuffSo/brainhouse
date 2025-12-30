# Brainhouse Project Rules

This file documents the project structure, development workflows, and coding conventions for the Brainhouse website. It serves as the primary reference for AI agents (similar to `CLAUDE.md`).

## Project Overview

**Brainhouse** is a corporate website for a Digital Transformation Partner, built using:

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Pretendard (Optimized for Korean)

## Directory Structure & Git Management

The following directories are **tracked by Git** and contain the source code:

- **`src/`**: Application source code.
  - **`app/`**: Next.js App Router pages (`page.tsx`, `layout.tsx`, `globals.css`).
  - **`components/`**: React components.
    - `layout/`: Global layout components (`Header`, `Footer`).
    - `sections/`: Landing page sections (`Hero`, `About`, `Business`, `Portfolio`, `Contact`).
    - `ui/`: Reusable atomic components (`Button`, `Container`, `Icons`).
  - **`contexts/`**: React Context providers (e.g., `LanguageContext` for i18n).
  - **`data/`**: Static data files (e.g., `translations.ts` for text content).
  - **`lib/`**: Utility functions (`utils.ts` for strictly typed `cn`).
- **`public/`**: Static assets (images, fonts, SVGs like `grid-pattern.svg`).
- **`docs/`**: Project documentation (Location of this file).

The following are **ignored by Git** (`.gitignore`):

- `node_modules/`: Dependencies.
- `.next/`: Build output.
- `.env*`: Environment variables.

## Development Commands

- **Start Dev Server**: `npm run dev`
  - _Note_: If port 3000 is busy, it auto-switches to 3001 or 3002.
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm start`
- **Lint Code**: `npm run lint`

## Coding Conventions

### Styling

- Use **Tailwind CSS** for all styling.
- **Colors**:
  - Backgrounds: `slate-900` (Dark theme base), `blue-900` gradients.
  - Accents: `blue-400`, `cyan-300` (Web3/Tech vibe).
- **Typography**: `Pretendard` is configured as the default sans-serif font in `tailwind.config.ts`.

### Iconography

- **DO NOT** use external icon libraries like `lucide-react` directly to avoid build/version issues.
- **USE** the local `Icons` object in `src/components/ui/icons.tsx`.
- To add a new icon:
  1. Find the SVG (e.g., from Lucide or Heroicons).
  2. Add it as a component to the `Icons` object in `src/components/ui/icons.tsx`.

### Localization (i18n)

- The site supports **Korean (ko)** and **English (en)**.
- **State**: Managed by `LanguageContext` (`src/contexts/language-context.tsx`).
- **Content**: All text must be in `src/data/translations.ts`.
- **Usage**:
  ```tsx
  const { t } = useLanguage();
  return <div>{t.header.about}</div>;
  ```

### Components

- Use `functional components` with explicit return types if complex.
- **'use client'**: Mark components as `'use client'` if they use hooks (like `useLanguage`) or interactivity.

## Git Commit Convention

Follow semantic commit messages:

- `feat`: New feature
- `fix`: Bug fix
- `style`: Formatting, missing semi colons, etc; no code change
- `refactor`: Refactoring production code
- `docs`: Documentation changes
