# Route Contract — V1 Foundation

## Implemented routes

| Route | Purpose | Status |
|---|---|---|
| `/` | Student dashboard foundation with explicitly labeled demo data | Implemented |
| `/_not-found` | Branded fallback for missing routes | Implemented |
| `/api/health` | Application liveness endpoint | Implemented |

## Planned product routes

These routes are product targets, not implemented functionality yet:

- `/explore` — global academic search and discovery.
- `/modules` — module catalog.
- `/modules/[moduleId]` — module workspace with resources, exams, and metadata.
- `/resources` — resource library with filters and provenance.
- `/exams` — exam bank.
- `/schedule` — personalized weekly timetable.
- `/projects` — student/PFE project hub.
- `/research` — labs, researchers, theses, publications, and datasets.
- `/account` — authenticated student profile and academic context.
- `/admin/*` — protected governance and content-management surfaces.

## Navigation rule

A navigation item must satisfy one of these states:

1. It links to an implemented route.
2. It is visibly marked as not yet available.
3. It is a real local action with an implemented behavior.

A visual button must never imply a completed feature when no behavior exists.

## Search rule

The dashboard search field is currently local demo filtering only. It must not be described as global academic search until the backend search endpoint and result route are implemented.

## Data rule

Demo data must remain clearly distinguishable from real academic data. Real academic records may enter the product only through the provenance, moderation, and authorization pipeline.
