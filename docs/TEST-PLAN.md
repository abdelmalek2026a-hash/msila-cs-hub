# Test Plan — M'Sila CS Hub

## Layer 1 — Foundation contract

Runs on every CI invocation through `npm run foundation:verify`.

Covers:
- required project files and folders
- environment-variable contract
- TypeScript path aliases
- Next.js JSX configuration
- CI safety/concurrency configuration
- explicit demo-data labeling
- absence of the old misleading dashboard navigation state
- responsive search references
- ignored local environment files

## Layer 2 — Static type safety

`npm run typecheck`

Catches TypeScript errors, invalid component props, path-resolution failures, and broken imports.

## Layer 3 — Production compilation

`npm run build`

Verifies that the App Router application compiles and the production bundle can be generated.

## Layer 4 — Domain unit tests

Before real data mutations are introduced, add unit tests for:
- academic context resolution
- resource filtering
- provenance/status transitions
- search query normalization
- schedule selection by group/context
- role/permission predicates

## Layer 5 — Integration tests

Before production authentication and data import, verify:
- authenticated vs anonymous access
- student-owned data isolation
- role-scoped administration
- resource publication flow
- private storage authorization
- search result integrity
- negative authorization cases

## Layer 6 — Database/RLS tests

For every protected Supabase table, test both:
- expected allowed access
- expected denied access

No RLS policy is considered complete from a positive-path test alone.

## Release gate

The release candidate requires:
- green CI
- committed dependency lockfile
- passing domain/integration tests
- reviewed RLS policies
- reviewed storage policies
- provenance and moderation checks
- no unresolved P0 security/data-integrity risk
