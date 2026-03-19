# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── kit-professor/      # React + Vite frontend — Kit do Professor
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Kit do Professor — `artifacts/kit-professor`

React + Vite frontend served at `/`. A teaching tool for Software Engineering / Requirements Analysis.

### Feature Views

Each section of the tool is a separate view component:

- **Organização da Equipa** — Team setup form (roles, members)
- **Lean Canvas** — 9-block business model canvas
- **Product Backlog** — User Story table (As a [...] I want [...] so that [...])
- **Diário de Bordo** — Lesson logbook (planned vs. executed)
- **Casos de Uso (UML)** — Visual use-case diagram
- **Documento de Visão** — Formal vision document

### Folder Structure (`artifacts/kit-professor/src/`)

```text
src/
├── data/                   # Static mock/example data
│   ├── leanCanvas.ts       # LEAN_CANVAS_DATA
│   ├── backlog.ts          # BACKLOG_EXAMPLE_DATA + BacklogItem type
│   └── logbook.ts          # LOGBOOK_EXAMPLE_DATA + LogbookEntry type
├── components/
│   ├── shared/             # Reusable UI primitives
│   │   ├── WritingLines.tsx
│   │   ├── PrintStyle.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── PrintHeader.tsx
│   │   └── index.ts
│   ├── views/              # One component per app section
│   │   ├── TeamOrgView.tsx
│   │   ├── LeanCanvasView.tsx
│   │   ├── ProductBacklogView.tsx
│   │   ├── LogbookView.tsx
│   │   ├── UseCaseDiagramView.tsx
│   │   ├── VisionDocView.tsx
│   │   └── index.ts
│   └── layout/
│       └── Sidebar.tsx     # Navigation sidebar + dark-mode toggle
├── App.tsx                 # Root: tab routing + print logic
├── main.tsx
└── index.css
```

### Key Behaviours

- Each view has a toggle between "Modelo em Branco" (blank form) and "Exemplo Prático" (filled example)
- Each view has a single-page print button; sidebar has "Imprimir Projeto Completo" for all pages
- Dark mode is toggled via the sidebar footer button
- Print CSS handles portrait/landscape per view

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck`. Runs `tsc --build --emitDeclarationOnly`.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`).

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `scripts` (`@workspace/scripts`)

Utility scripts package. Run via `pnpm --filter @workspace/scripts run <script>`.
