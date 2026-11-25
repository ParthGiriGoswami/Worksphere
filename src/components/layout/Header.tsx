
"use client";

import { Menu, Bell, Search, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import type { RefObject } from "react";

import ThemeToggle from "./ThemeToggle";
import { roleLabels, type UserRole } from "@/config/navigation";

interface HeaderProps {
  onMenuClick: () => void;
  role: UserRole;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

export default function Header({
  onMenuClick,
  role,
  menuButtonRef,
}: HeaderProps) {
  const router = useRouter();

  function handleLogout() {
    router.push("/login");
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-[var(--border)] bg-[var(--sidebar)] px-3 sm:gap-5 sm:px-6">
      {/* Mobile menu and search */}
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <button
          ref={menuButtonRef}
          type="button"
          onClick={onMenuClick}
          className="shrink-0 rounded-lg p-2 text-[var(--foreground)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-slate-700 lg:hidden"
          aria-label="Open navigation"
          aria-controls="main-sidebar"
          aria-expanded={false}
        >
          <Menu size={22} aria-hidden="true" />
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 dark:bg-slate-700 sm:px-4">
          <Search
            size={19}
            className="shrink-0 text-slate-400"
            aria-hidden="true"
          />

          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search workspace"
            className="w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Header actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <ThemeToggle />

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-[var(--foreground)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-slate-700"
        >
          <Bell size={21} aria-hidden="true" />
          <span
            className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-2.5 py-2 text-sm text-[var(--foreground)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-slate-700 sm:px-3"
        >
          <LogOut size={17} aria-hidden="true" />
          <span className="hidden sm:inline">Logout</span>
        </button>

        {/* User information */}
        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700"
            aria-hidden="true"
          >
            A
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Demo User
            </p>
            <p className="text-xs text-[var(--muted)]">
              {roleLabels[role]}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
