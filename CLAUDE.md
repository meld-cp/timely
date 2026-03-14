# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run dev -- --open  # Start dev server and open browser
npm run build        # Production build (static SPA)
npm run preview      # Preview production build
npm run check        # Type-check with svelte-check
npm run check:watch  # Type-check in watch mode
```

No test or lint commands are configured. TypeScript strict mode (`tsconfig.json`) is the primary quality gate.

## Architecture

**Timely** is a static SPA for time tracking and invoice generation, backed by PocketBase.

### Layer Stack

```
Routes & Views  (src/routes/, src/lib/views/)
     ↓
ViewModels      (src/lib/view-models/*.svelte.ts)   ← Svelte 5 $state reactivity
     ↓
AppController   (src/lib/services/AppController.svelte.ts)  ← business logic orchestrator
     ↓
PocketBaseService (src/lib/services/PocketBaseService.svelte.ts)  ← all backend I/O
     ↓
PocketBase backend (collections: timely_task, timely_invoice, timely_invoice_line, timely_user)
```

### Key Architectural Points

- **Singletons:** `appController` and `pbService` are global instances created once in `src/lib/services/Singletons.ts` and imported everywhere.
- **Two user IDs:** `authUserId` (PocketBase auth user) and `timelyUserId` (app-specific, from `timely_user` collection). Both tasks and invoices filter by `timelyUserId`.
- **Draft invoice:** One per user, ID is `draft` + first 10 chars of `timelyUserId`.
- **ViewModels wrap models:** `TaskViewModel`, `InvoiceViewModel`, `SettingsViewModel`, `InvoiceLineViewModel` hold reactive `$state` and expose methods. `AppController` converts PocketBase records → models → ViewModels.
- **Static adapter:** SvelteKit configured with `adapter-static`, base path `/timely`, SSR disabled (`+layout.ts`: `export const ssr = false; export const prerender = true`). Output goes to `out/`.
- **No external state library:** Reactivity is purely Svelte 5 runes (`$state`, `$derived`).

### Domain Models

| Model | Key fields | States |
|---|---|---|
| `TaskModel` | id, name, date, duration, affectiveDurationHours, timeRunStarted, invoiceRefId, tags, state | Running, Paused, Stopped, Archived |
| `InvoiceModel` | id, date, currency, number, headerText, footerText, issueToDetails, orderRef | draft / saved |
| `InvoiceLineModel` | description, quantity, unitCost, units, taskRefId | — |
| `SettingsModel` | companyLabel, address, locale, invoiceDefaults, nextInvoiceNumber, logo (data URL), scratchPads | — |

### Routes

- `(main)/` — dashboard
- `(main)/timelog` — time log management
- `(main)/invoices` — invoice builder
- `(main)/admin/settings` — settings
- `(main)/admin/data` — data export/import/delete
- `login/` — PocketBase auth
- `view-invoice/` — printable invoice view

## Tech Stack

- **Svelte 5** with SvelteKit 2 (runes syntax — use `$state`, `$derived`, not stores)
- **TypeScript** strict mode
- **Pico CSS** (in `static/pico-main/`) — minimal class-based CSS
- **Font Awesome 6** via `src/lib/views/Icon.svelte` wrapper
- **PocketBase JS SDK** for backend communication
- **Vite** build tool
