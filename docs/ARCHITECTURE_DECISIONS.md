# WorkSphere — Architecture Decisions (Assessment 01)

## 1. Next.js App Router

The application uses the App Router because it provides route-based layouts and supports shared UI around related pages. The root layout owns document metadata, global CSS, and the theme provider.

## 2. Route groups by role

The route groups `(platform)`, `(organization)`, `(manager)`, and `(member)` organize pages by user role without adding the group names to public URLs. Each group has a `layout.tsx` that wraps its pages with the matching `RoleGuard`.

The `(auth)` group contains `/login` and is intentionally outside the protected dashboard groups.

## 3. Shared dashboard shell

`DashboardShell` composes the shared `Sidebar` and `Header`. The role is passed as a typed `UserRole`, and the sidebar reads the matching items from `navigationConfig`. This avoids maintaining four copies of the same layout.

## 4. Reusable UI and forms

`Button`, `Input`, and `Select` centralize common styling and interaction behavior. Inputs and selects accept native HTML attributes so callers can use standard form behavior. `Input` and `Select` associate labels with controls and announce validation errors.

## 5. Validation

Small pure functions in `src/lib/validation.ts` handle email, required-field, and minimum-length checks. The login page and create-project demo form use these functions. Validation is repeated at the point of form submission rather than relying only on visual hints.

## 6. Demo session and authorization boundary

The selected demo role is stored in `sessionStorage` so it lasts for the current browser tab. `RoleGuard` checks the stored role before rendering a role group's children. Logout clears the session.

This is deliberately a frontend demonstration only. Browser storage is controlled by the user, and client-side checks can be bypassed. No protected server data or API operation should rely on this guard. Production authentication and authorization must be implemented on the server and enforced for every protected data operation in a later assessment.

## 7. Static demo data

The management pages use typed, local sample data in `src/config/demo-pages.ts`. This allows the frontend routes and responsive table layouts to be reviewed without introducing a database before its planned assessment.

## 8. Theme handling

`ThemeProvider` uses `next-themes` with the class attribute. The theme toggle waits for client hydration before displaying the resolved theme action, avoiding a server/client theme mismatch.

## 9. Testing approach

Vitest and React Testing Library cover component rendering and user interaction. Unit tests cover validation, navigation configuration, and demo session parsing. Role guard tests cover missing sessions, wrong roles, valid roles, and session retrieval failures.

## 10. Known boundaries

- No server-side authentication or authorization.
- No database or persistence.
- No production API integration.
- Search and notifications are presentation-only.
- Manual browser and assistive-technology checks remain necessary in addition to automated tests.
