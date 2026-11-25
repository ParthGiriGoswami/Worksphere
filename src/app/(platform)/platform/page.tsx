
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Platform Dashboard
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here&apos;s what&apos;s happening across WorkSphere.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-5 text-[var(--foreground)] shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--muted)]">
                  {stat.title}
                </p>

                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Icon size={21} />
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-medium text-green-600">
                {stat.change} from last month
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Welcome to WorkSphere
        </h3>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Your centralized platform for managing organizations,
          projects, teams, and tasks.
        </p>
      </div>
    </DashboardShell>
  );
}
