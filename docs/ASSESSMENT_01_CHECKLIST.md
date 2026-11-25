# Assessment 01 — Completion Checklist

Use this checklist when preparing the final submission. The code package includes the frontend implementation and automated tests; the reviewer should still run the checks on the extracted project and attach their own runtime evidence.

## Implementation

- [x] Next.js App Router project structure.
- [x] Four role-specific dashboard route groups.
- [x] Shared dashboard shell, sidebar, and header.
- [x] Responsive dashboard and management page layouts.
- [x] Reusable Button, Input, and Select components.
- [x] Reusable form field component.
- [x] Email and project form validation.
- [x] Light/dark theme provider and toggle.
- [x] Demo role selection and route guard.
- [x] Logout clears the demo session.
- [x] Static sample data is clearly identified as demo-only.

## Automated tests included

- [x] Button rendering, click, and disabled state.
- [x] Input label, input behavior, and accessible error.
- [x] Select label, options, and selection behavior.
- [x] Navigation configuration for all four roles.
- [x] Demo management page rendering.
- [x] Validation utility success and failure cases.
- [x] Demo session save, read, clear, malformed JSON, and invalid role cases.
- [x] Login success and invalid-email behavior.
- [x] Role guard: no session, mismatched role, matching role, and session retrieval failure.

## Final verification — run locally

From the project root:

```powershell
npm ci
npm run lint
npx tsc --noEmit
npm run test:run
npm run build
```

Record the date, Node.js version, npm version, and actual command results in the assessment submission. Do not mark these as passing based only on a previous version of the project.

## Manual verification still required

- [ ] Open `/` and confirm it redirects to `/login`.
- [ ] Log in once with each of the four demo roles.
- [ ] Confirm each role reaches its matching dashboard.
- [ ] While logged in as one role, manually enter another role's route and confirm redirection.
- [ ] Open a protected route in a fresh browser tab/session and confirm redirection to `/login`.
- [ ] Log out and confirm the previous demo session is cleared.
- [ ] Check each route at mobile, tablet, and desktop widths.
- [ ] Use keyboard-only navigation through login, sidebar, theme control, and logout.
- [ ] Confirm visible focus indicators and meaningful labels.
- [ ] Confirm no horizontal page overflow; wide data tables may scroll within their own container.
- [ ] Confirm validation messages are announced and linked to their controls.

## Evidence to attach

- [ ] Login screen.
- [ ] One screenshot for each of the four dashboards.
- [ ] One screenshot showing a responsive mobile layout.
- [ ] Screenshot or short recording showing a wrong-role redirect.
- [ ] Terminal output for lint, TypeScript, tests, and production build.
- [ ] GitHub repository URL and meaningful commit history, if required by the assessor.

## Scope clarification

The route guard uses browser `sessionStorage` and is not secure authorization. Database integration, real authentication, and server-side authorization are deferred to later assessments as agreed for this project. Confirm with the assessor whether Assessment 01 expects a specific server-side protection demonstration despite that staged scope decision.
