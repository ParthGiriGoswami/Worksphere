
"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import {
  navigationConfig,
  roleLabels,
  type UserRole,
} from "@/config/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  role: UserRole;
  sidebarRef: RefObject<HTMLElement | null>;
}

export default function Sidebar({
  open,
  onClose,
  role,
  sidebarRef,
}: SidebarProps) {
  const pathname = usePathname();
  const navigation = navigationConfig[role];

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-black/40 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="main-sidebar"
        aria-label="Main navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[var(--border)] bg-[var(--sidebar)] transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--border)] px-6">
          <Link
            href="/login"
            className="text-xl font-bold text-indigo-600"
          >
            WorkSphere
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--muted)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-slate-700 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        {/* Workspace information */}
        <div className="border-b border-[var(--border)] px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Workspace
          </p>

          <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
            {roleLabels[role]}
          </p>
        </div>

        {/* Navigation links */}
        <nav
          className="flex-1 space-y-2 overflow-y-auto p-4"
          aria-label="Workspace navigation"
        >
          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/platform" &&
                item.href !== "/projects" &&
                pathname.startsWith(item.href + "/"));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  active
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                    : "text-[var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Icon size={19} aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-[var(--border)] p-4 text-xs text-[var(--muted)]">
          WorkSphere © 2026
        </div>
      </aside>
    </>
  );
}
