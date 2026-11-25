
import DashboardShell from "@/components/layout/DashboardShell";
import {
  Users,
  Building2,
  FolderKanban,
  TrendingUp,
} from "lucide-react";

const statistics = [
  {
    title: "Total Users",
    value: "1,248",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Organizations",
    value: "86",
    change: "+8.2%",
    icon: Building2,
  },
  {
    title: "Active Projects",
    value: "324",
    change: "+15.3%",
    icon: FolderKanban,
  },
  {
    title: "Growth Rate",
    value: "24.8%",
    change: "+4.5%",
    icon: TrendingUp,
  },
];

export default function PlatformDashboard() {
  return (
    <DashboardShell role="platform-admin">
      <section className="mb-8">
        <h2 className="text-xl font-bold sm:text-2xl">
          Platform Dashboard
        </h2>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Welcome back! Here&apos;s what&apos;s happening across WorkSphere.
        </p>
      </section>

      <section
        aria-label="Platform statistics"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {statistics.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-[var(--muted)]">
                  {stat.title}
                </p>

                <div className="shrink-0 rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                  <Icon size={21} aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-4 break-words text-2xl font-bold text-[var(--foreground)]">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-medium text-green-600 dark:text-green-400">
                {stat.change} from last month
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-4 shadow-sm sm:mt-8 sm:p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Welcome to WorkSphere
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Your centralized platform for managing organizations,
          projects, teams, and tasks.
        </p>
      </section>
    </DashboardShell>
  );
}
