
"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import type { UserRole } from "@/config/navigation";

interface DashboardShellProps {
  children: React.ReactNode;
  role: UserRole;
}

export default function DashboardShell({
  children,
  role,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // Handle Escape key and background scrolling
  useEffect(() => {
    if (!sidebarOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Manage keyboard focus
  useEffect(() => {
    if (sidebarOpen) {
      sidebarRef.current?.querySelector("a")?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [sidebarOpen]);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      <Sidebar
        open={sidebarOpen}
        onClose={closeSidebar}
        role={role}
        sidebarRef={sidebarRef}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          role={role}
          menuButtonRef={menuButtonRef}
        />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

    </div>
  );
}
