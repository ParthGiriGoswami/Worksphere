
"use client";

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
}

export default function Sidebar({
  open,
  onClose,
  role,
}: SidebarProps) {
  const pathname = usePathname();
  const navigation = navigationConfig[role];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[var(--border)] bg-[var(--sidebar)] transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-6">
          <h1 className="text-xl font-bold text-indigo-600">
            WorkSphere
          </h1>

          <button
            onClick={onClose}
            className="lg:hidden"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Workspace
          </p>
          <p className="mt-1 text-sm font-medium">
            {roleLabels[role]}
          </p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
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
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                    : "text-[var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border)] p-4 text-xs text-[var(--muted)]">
          WorkSphere © 2026
        </div>
      </aside>
    </>
  );
}
