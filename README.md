# M'Sila CS Hub

Independent Arabic-first RTL academic platform for Computer Science students, researchers, and teaching staff around the University of M'Sila ecosystem.

## Engineering baseline

- Next.js + TypeScript + React
- Tailwind CSS + project-owned UI layer
- Supabase PostgreSQL + Auth + Storage
- PostgreSQL Full-Text Search in V1
- pgvector reserved for later semantic search
- Gemini RAG only after the knowledge base and provenance layer are stable
- Figma for product/design system
- GitHub as the source of truth after scaffolding

## Product principles

1. Build for daily student utility, not a file archive.
2. Keep official, verified, community, and external content visibly distinct.
3. Never invent academic facts, schedules, teachers, resources, statistics, or affiliations.
4. Protect user-owned data with server authorization and Supabase RLS.
5. Mobile-first is an acceptance criterion.
6. Keep V1 focused; future AI, coding sandbox, collaboration, and native mobile work comes later.

## Repository policy

- `main` is the stable branch.
- `develop` is the integration branch.
- Feature work must use short-lived branches and pull requests.
- Secrets never belong in Git.
