"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { UserRole } from "@/config/navigation";
import { getDemoSession } from "@/lib/demo-auth";

interface RoleGuardProps {
  allowedRole: UserRole;
  children: React.ReactNode;
}

const ROLE_HOME: Record<UserRole, string> = {
  "platform-admin": "/platform",
  "organization-owner": "/org/demo",
  "project-manager": "/projects",
  member: "/my-work",
};

export default function RoleGuard({
  allowedRole,
  children,
}: RoleGuardProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;

    try {
      const session = getDemoSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      if (session.role !== allowedRole) {
        router.replace(ROLE_HOME[session.role]);
        return;
      }

      // Defer the state update to avoid a synchronous effect update.
      Promise.resolve().then(() => {
        if (active) {
          setAuthorized(true);
        }
      });
    } catch {
      // If browser storage or session parsing fails, deny access.
      router.replace("/login");
    }

    return () => {
      active = false;
    };
  }, [allowedRole, router]);

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <p className="text-sm text-[var(--muted)]" role="status">
          Checking access...
        </p>
      </main>
    );
  }

  return <>{children}</>;
}
