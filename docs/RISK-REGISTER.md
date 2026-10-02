# Risk Register — M'Sila CS Hub

| ID | Risk | Impact | Current state | Mitigation |
|---|---|---|---|---|
| R-001 | Dependency graph is not lockfile-pinned | Reproducibility / CI drift | Open | Generate and commit `package-lock.json`; switch CI to `npm ci`. |
| R-002 | Real academic data enters before provenance/moderation exists | Trust / correctness | Controlled | Keep foundation on demo data; require source metadata and review status before publication. |
| R-003 | Authorization is implemented only in UI | Data exposure | Prevented by architecture | Enforce server authorization + Supabase RLS; add negative tests. |
| R-004 | Private documents become publicly addressable | Privacy | Prevented by design | Private storage + authorization-gated signed URLs. |
| R-005 | Global search is confused with demo filtering | UX correctness | Controlled | Route contract explicitly separates demo filtering from future backend search. |
| R-006 | AI answers from untrusted or uncited material | Academic reliability | Deferred | RAG only from approved corpus with provenance and citations. |
| R-007 | CI becomes noisy or slow due to duplicate/stale runs | Developer feedback quality | Mitigated | Concurrency cancellation and branch-scoped triggers. |
| R-008 | Privileged actions are not auditable | Governance | Open | Add audit logs for moderation, publication, roles, and administrative mutations. |

## Release rule

No production academic import occurs while any unresolved risk can cause data leakage, silent academic misinformation, or unaudited privileged changes.
