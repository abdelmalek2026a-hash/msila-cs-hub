# M'Sila CS Hub — Engineering Architecture

## Locked V1 stack
Next.js + TypeScript + React + Tailwind CSS + Supabase PostgreSQL/Auth/Storage + PostgreSQL FTS.

## Boundaries
- V1 does not contain a generic AI assistant, semantic vector search, code execution, or social network.
- AI/RAG is allowed only after content provenance, moderation, and retrieval are stable.
- Supabase service-role credentials are server-only.
- User-owned and role-scoped records require server authorization and RLS.
- Academic content must expose source type/status and must never be invented.

## Core domains
Academic: academic_years, programs, levels, specialties, semesters, modules, module_offerings, module_teachers.
Users: profiles, roles, profile_roles, groups, group_memberships, preferences.
Content: resources, resource_files, document_chunks, exams, solutions, announcements, announcement_targets.
Schedules: schedule_sets, schedule_slots, rooms, slot_locations.
Research: researchers, labs, publications, theses, projects, project_members.
Governance: moderation_queue, reports, audit_logs, bookmarks, notifications.

## Branch policy
main = stable/releasable.
develop = integration.
feature/* = short-lived implementation branches.
No direct feature work on main.

## Quality gates
Typecheck → lint → unit/integration tests → build → security/RLS review → PR review.
