# Local Development — M'Sila CS Hub

## Run the project without Vercel

The application can be developed and tested entirely on a local machine.

### Prerequisites

- Node.js 24 LTS or another version supported by the current `package.json`
- Git
- VS Code

### First setup

Clone the repository, then switch to the active feature branch used for foundation work:

```bash
git clone https://github.com/abdelmalek2026a-hash/msila-cs-hub.git
cd msila-cs-hub
git checkout feature/ui-foundation
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The terminal will also show the network address when the dev server exposes one.

### Quality checks

Run the foundation contract check:

```bash
npm run foundation:verify
```

Run TypeScript validation:

```bash
npm run typecheck
```

Run the production build locally:

```bash
npm run build
```

Then optionally test the production server:

```bash
npm run start
```

### Environment variables

Do not create real production secrets until the Supabase integration phase.

For future local configuration:

1. Copy `.env.example` to `.env.local`.
2. Add only the required development values.
3. Never commit `.env.local`.

### Recommended VS Code workflow

Keep one terminal running `npm run dev`.

Use a second terminal for `npm run typecheck` or other checks.

The browser can then be refreshed against `http://localhost:3000` after each code change.

### Current limitation

The dashboard currently uses explicitly labeled demo data. Supabase is not connected yet, so local development currently validates the application shell and interactions, not the real academic data flow.

### Typical local URLs

- Dashboard: `http://localhost:3000`
- Liveness endpoint: `http://localhost:3000/api/health`

## Vercel is not required

Vercel is a deployment option, not a requirement for local development. GitHub Actions handles automated remote quality checks, while the local Next.js dev server is enough for daily development and browser testing.
