# Manual Test Plan — WorkSphere Assessment 01

## A. Login and role routing

For each role below, open `/login`, enter a syntactically valid email address, select the role, and submit.

| Role selected | Expected destination |
|---|---|
| Platform Administrator | `/platform` |
| Organization Owner | `/org/demo` |
| Project Manager | `/projects` |
| Member | `/my-work` |

Expected: the matching dashboard is shown and the sidebar displays the selected role's navigation.

## B. Route guard checks

Perform these checks in a browser:

1. Open a fresh private/incognito window and enter `/platform`. Expected: redirect to `/login`.
2. Sign in as Member and manually enter `/platform`. Expected: redirect to `/my-work`.
3. Sign in as Project Manager and manually enter `/org/demo`. Expected: redirect to `/projects`.
4. Sign in as Organization Owner and manually enter `/my-work`. Expected: redirect to `/org/demo`.
5. Sign in as Platform Administrator and manually enter `/projects`. Expected: redirect to `/platform`.
6. Log out, then manually enter the dashboard URL again. Expected: redirect to `/login`.

These checks demonstrate the frontend demo guard only; they do not establish production security.

## C. Form validation

### Login
- Submit an empty email.
- Enter an invalid email and submit.
- Enter a valid email, select a role, and submit.

Expected: invalid input does not create a session or navigate; valid input stores the selected demo role and navigates to the corresponding dashboard.

### Create project
- Submit with both required fields empty.
- Enter a project name shorter than three characters.
- Enter a valid project name and description.

Expected: invalid fields show validation messages; valid input shows a demo-only validation confirmation. No project is persisted.

## D. Responsive and keyboard checks

- Test at a narrow mobile viewport, tablet viewport, and desktop viewport.
- Open the mobile sidebar, close it with the close control, backdrop, and Escape key.
- Confirm the menu button's `aria-expanded` state changes.
- Navigate through controls with Tab and Shift+Tab.
- Confirm focus indicators are visible.
- Confirm the role radio controls are grouped by a fieldset and legend.
- Confirm table content scrolls within its table container on narrow screens.

## E. Evidence capture

Capture screenshots or a short screen recording for the login screen, each role dashboard, a mobile viewport, and one role mismatch redirect. Save terminal output from the final validation commands alongside the submission.
