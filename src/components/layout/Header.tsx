
"use client";

import { Menu, Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { roleLabels, type UserRole } from "@/config/navigation";

interface HeaderProps {
  onMenuClick: () => void;
  role: UserRole;
}

export default function Header({
  onMenuClick,
  role,
}: HeaderProps) {
  return (
    
  <header className="flex h-16 items-center gap-6 border-b border-[var(--border)] bg-[var(--sidebar)] px-4 sm:px-6">

    <div className="flex min-w-0 flex-1 items-center gap-3">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </button>

      <div className="flex w-full flex-1 items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 dark:bg-slate-700">
        <Search size={20} className="shrink-0 text-slate-400" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-300"
        />
      </div>
    </div>

    <div className="flex shrink-0 items-center gap-4">
      <ThemeToggle />

      <button
        aria-label="Notifications"
        className="relative text-[var(--foreground)]"
      >
        <Bell size={21} />
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
      </button>

      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          A
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-semibold">Demo User</p>
          <p className="text-xs text-[var(--muted)]">{roleLabels[role]}</p>
        </div>
      </div>
    </div>
  </header>

  );
}