"use client";

import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import type { UserRole } from "@/config/navigation";

interface DashboardShellProps {
  children: React.ReactNode;
  role: UserRole;
}

const MOBILE_QUERY = "(max-width: 1023px)";

function subscribeToViewport(callback: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getMobileViewportSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerViewportSnapshot() {
  return false;
}

export default function DashboardShell({
  children,
  role,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobileViewport = useSyncExternalStore(
    subscribeToViewport,
    getMobileViewportSnapshot,
    getServerViewportSnapshot,
  );
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const hasOpenedSidebar = useRef(false);

  useEffect(() => {
    if (!sidebarOpen) return;

    hasOpenedSidebar.current = true;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSidebarOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusable = sidebarRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen) {
      sidebarRef.current?.querySelector("a")?.focus();
    } else if (hasOpenedSidebar.current) {
      menuButtonRef.current?.focus();
    }
  }, [sidebarOpen]);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Suspense
        fallback={
          <aside
            aria-hidden="true"
            className="hidden w-64 shrink-0 border-r border-[var(--border)] bg-[var(--sidebar)] lg:block"
          />
        }
      >
        <Sidebar
          open={sidebarOpen}
          onClose={closeSidebar}
          role={role}
          sidebarRef={sidebarRef}
          inert={!sidebarOpen && isMobileViewport}
        />
      </Suspense>

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          role={role}
          menuButtonRef={menuButtonRef}
          sidebarOpen={sidebarOpen}
        />

        <main id="main-content" className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
