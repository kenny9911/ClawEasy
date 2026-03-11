# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start both client (:5173) and server (:3001) concurrently
npm run build        # Build client (tsc + vite) then server (tsup)
npm run start        # Start production server

# Workspace-specific
npm run dev -w client    # Vite dev server only
npm run dev -w server    # Express server with tsx watch only
npm run build -w client  # TypeScript check + Vite production build
npm run build -w server  # tsup ESM bundle with declarations

# Type checking (no test framework configured yet)
npx tsc -p client/tsconfig.json --noEmit
npx tsc -p server/tsconfig.json --noEmit
```

## Architecture

**Monorepo** using npm workspaces with two packages: `client/` and `server/`.

**Client** — Vite + React 18 + TypeScript. Entry: `client/src/main.tsx` → `App.tsx`. The app is a landing page composed of section components rendered sequentially. Vite proxies `/api` requests to the server in development.

**Server** — Express + TypeScript (tsx for dev, tsup for build). Entry: `server/src/index.ts`. Serves JSON data from static files in `server/src/data/`. Port configurable via `PORT` env var (default 3001).

**Shared TypeScript config** — `tsconfig.base.json` at root with strict mode; both packages extend it.

## Key Conventions

- **Styling**: CSS Modules (`.module.css` per component), imported as `styles`. Dynamic/conditional styles use inline `style` props. Global keyframes and hover utility classes live in `client/src/global.css`.
- **Component organization**: `components/common/` (reusable: Button, Terminal, SectionHeader, AnimatedNumber), `components/layout/` (Navbar, Footer), `components/sections/` (one per landing page section).
- **Data**: Static data arrays in `client/src/data/*.ts`, typed via interfaces in `client/src/types/index.ts`. Server mirrors templates/plans as JSON in `server/src/data/`.
- **Icons**: Custom inline SVG components in `client/src/icons/index.tsx`, exported as named exports (e.g., `ClawIcon`, `ZapIcon`).
- **Server routes**: Express Router pattern, mounted under `/api`. Routes use `import.meta.url` for `__dirname` and `.js` extensions in imports (ESM requirement).
- **Theme colors**: Primary `#ff6b35`, dark bg `#08090c`, success `#22c55e`. Defined in `client/src/theme.ts`.

## Brand

The product name is **ClawEasy** (previously EzClaw). Logo text renders as "Claw" + accent-colored "Easy".
