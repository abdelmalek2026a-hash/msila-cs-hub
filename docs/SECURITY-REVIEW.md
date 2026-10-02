# Security Review — Foundation

## Current security posture

The foundation does not connect to Supabase, does not contain real academic records, and does not expose application secrets.

Environment variables are documented through `.env.example`, while local environment files are ignored by Git.

## Required controls before real data

### Authentication
- Use Supabase Auth for user identity.
- Keep service-role credentials server-only.
- Never expose service-role keys to client components or `NEXT_PUBLIC_*` variables.

### Authorization
- Enforce authorization on the server for every protected mutation.
- Use Supabase RLS as a second enforcement layer, not as a replacement for server-side policy.
- Define role-based policies for Student, Contributor, Moderator, Teacher, Researcher, Admin, and Super Admin.
- Test both allowed and denied paths.

### Storage
- Keep academic documents private by default.
- Generate signed URLs only after authorization and publication checks.
- Do not expose raw storage paths as public URLs.

### Content integrity
- Persist provenance for every academic resource.
- Track status such as Official, Verified, Community, or Archived.
- Record who created, reviewed, published, changed, or archived important records.
- Preserve audit logs for privileged actions.

### Input and abuse controls
- Validate all external input at the server boundary.
- Apply file-type, size, and metadata validation to uploads.
- Rate-limit public search and authenticated mutation endpoints.
- Prevent arbitrary external URL fetching from user-controlled input.
- Sanitize rendered rich content.

### Secrets and repository hygiene
- Do not commit real `.env` files, API keys, service-role keys, tokens, or database connection strings.
- Add secret scanning to the release process before the first production dataset is imported.
- Because the repository is public, real credentials, secrets, or private academic materials must never be committed to Git. Sensitive academic data must use controlled access and private storage.

## Security acceptance gate

Supabase integration can start only after:
1. Repository visibility is intentionally confirmed.
2. Authentication and authorization responsibilities are documented.
3. RLS policies are reviewed against the schema.
4. Private storage rules are defined.
5. A negative-test plan exists for unauthorized access.
