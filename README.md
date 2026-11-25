# WorkSphere — Assessment 01

WorkSphere is a responsive, multi-role project and organization management **frontend demo** built with Next.js App Router, TypeScript, and Tailwind CSS.

Assessment 01 focuses on the frontend foundation: route organization, reusable UI, responsive dashboards, form validation, accessible navigation patterns, and automated tests.

> **Scope note:** This assessment uses static sample data and a browser-session demo role selector. It does not implement production authentication, server-side authorization, a database, or persistent project creation. Those are intentionally deferred to later assessments.

## Roles and routes

| Role | Dashboard | Additional pages |
|---|---|---|
| Platform Administrator | `/platform` | `/platform/organizations`, `/platform/users`, `/platform/projects`, `/platform/settings` |
| Organization Owner | `/org/demo` | `/org/demo/members`, `/org/demo/projects`, `/org/demo/reports`, `/org/demo/settings` |
| Project Manager | `/projects` | `/projects/list`, `/projects/tasks`, `/projects/team` |
| Member | `/my-work` | `/my-work/tasks`, `/my-work/projects`, `/my-work/profile` |

The `/login` page lets a reviewer choose a demo role. Each role route group has a layout containing `RoleGuard`. A missing session is redirected to `/login`; a mismatched role is redirected to that role's dashboard.

**Security limitation:** `sessionStorage` and a client-side route guard are demonstration controls only. They can be changed by a user and do not protect data or APIs. Production authorization must be enforced by trusted server-side code and the backend.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Lucide React icons
- `next-themes` for light/dark theme switching
- Vitest, React Testing Library, and jsdom for component and behavior tests

## Requirements

- Node.js version supported by the installed Next.js release (Node.js 20.9 or later)
- npm

## Run locally (Windows PowerShell)

1. Extract the project ZIP.
2. Open PowerShell in the `Worksphere` folder.
3. Install dependencies:

   ```powershell
   npm ci
   ```

4. Start the development server:

   ```powershell
   npm run dev
   ```

5. Open `http://localhost:3000`. The root route redirects to `/login`.
6. Enter a valid email, select one of the four demo roles, and choose **Continue**.

No environment variables or database are required to run the Assessment 01 frontend.

## Available commands

```powershell
npm run dev
npm run lint
npx tsc --noEmit
npm run test:run
npm run build
npm run start
```

Run `npm run build` before `npm run start`.

## Project structure

```text
src/
├── app/
│   ├── (auth)/login/                 # Demo role selection
│   ├── (platform)/                   # Platform administrator routes/layout
│   ├── (organization)/               # Organization owner routes/layout
│   ├── (manager)/                    # Project manager routes/layout
│   ├── (member)/                     # Member routes/layout
│   ├── globals.css
│   ├── layout.tsx                    # Root layout and theme provider
│   └── page.tsx                      # Redirects to /login
├── components/
│   ├── forms/                        # Shared form building blocks
│   ├── layout/                       # Dashboard shell, header, sidebar, theme
│   ├── providers/                    # Theme provider
│   ├── shared/                       # Demo pages and RoleGuard
│   └── ui/                            # Button, Input, Select
├── config/                            # Role navigation and demo page data
├── features/project-manager/          # Create project demo form
├── lib/                               # Validation and demo session utilities
└── test/                              # Test setup
docs/
├── ARCHITECTURE_DECISIONS.md
├── ASSESSMENT_01_CHECKLIST.md
└── MANUAL_TEST_PLAN.md
```

## Implemented features

- Four role-specific dashboard experiences and route groups.
- Shared dashboard shell, responsive sidebar, header, and theme control.
- Reusable Button, Input, Select, and form field components.
- Email, required-field, and minimum-length validation.
- Accessible form labels, error announcements, navigation labels, active-page indication, keyboard focus styles, and mobile menu Escape handling.
- Demo role session storage, role guard, and logout cleanup.
- Static sample management pages for platform, organization, project manager, and member views.
- Automated tests for UI components, navigation configuration, form validation, demo sessions, login flow, role guard behavior, and failure paths.

## Demo behavior and limitations

- The login page accepts an email and a selected role; there is no password or identity verification.
- Dashboard records are hard-coded sample data.
- The create-project form validates the fields and displays a demo confirmation; it does not persist a project.
- Search and notifications are visual demo elements.
- The organization route currently uses the sample organization ID `demo`.
- A role guard is not a substitute for server-side access control.
- No database, API-backed CRUD, password reset, invitation flow, or real user account management is included in this assessment.

## Assessment documentation

- [Architecture decisions](docs/ARCHITECTURE_DECISIONS.md)
- [Assessment 01 completion checklist](docs/ASSESSMENT_01_CHECKLIST.md)
- [Manual verification and screenshot plan](docs/MANUAL_TEST_PLAN.md)

## Test reporting

Run the commands above in the project environment and record the actual output in your submission. Do not represent a test as passing unless it has been run against the final extracted project version.
