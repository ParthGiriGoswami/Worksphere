import type { UserRole } from "@/config/navigation";

const SESSION_KEY = "worksphere-demo-session";

const VALID_ROLES: UserRole[] = [
  "platform-admin",
  "organization-owner",
  "project-manager",
  "member",
];

export interface DemoSession {
  email: string;
  role: UserRole;
}

/**
 * Stores a demo-only session in the current browser tab.
 * This is not a secure authentication mechanism.
 */
export function saveDemoSession(session: DemoSession): void {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

/**
 * Returns a valid demo session, or null when storage is empty,
 * malformed, or contains an unsupported role.
 */
export function getDemoSession(): DemoSession | null {
  try {
    const storedSession = sessionStorage.getItem(SESSION_KEY);

    if (!storedSession) {
      return null;
    }

    const session: unknown = JSON.parse(storedSession);

    if (
      typeof session !== "object" ||
      session === null ||
      !("email" in session) ||
      !("role" in session) ||
      typeof session.email !== "string" ||
      session.email.trim().length === 0 ||
      typeof session.role !== "string" ||
      !VALID_ROLES.includes(session.role as UserRole)
    ) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }

    return {
      email: session.email.trim(),
      role: session.role as UserRole,
    };
  } catch {
    // Storage may be unavailable or contain invalid JSON.
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // Ignore storage cleanup errors and fail closed.
    }
    return null;
  }
}

export function clearDemoSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
