# Architecture Decision Record

## ADR-001 — Supabase over a second backend
Supabase provides PostgreSQL, Auth and Storage. A second backend framework would duplicate security and data access concerns in V1.

## ADR-002 — PostgreSQL FTS before vectors
The first release needs deterministic academic search. Semantic retrieval is postponed until the corpus and embedding model are selected and evaluated.

## ADR-003 — Private academic storage
Files are not public by default. The application issues signed URLs only after authorization and publication checks.

## ADR-004 — Provenance is first-class
Every academic resource must preserve source type, status and source metadata. This is required for trust and future RAG.

## ADR-005 — Bolt is scaffolding only
Generated source is reviewed and becomes GitHub source-of-truth. The AI builder cannot redefine the architecture implicitly.
