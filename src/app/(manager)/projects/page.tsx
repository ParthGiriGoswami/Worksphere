
import DashboardShell from "@/components/layout/DashboardShell";

export default function ProjectManagerDashboard() {
  return (
    <DashboardShell role="project-manager">
      <h2 className="text-2xl font-bold">
        Project Manager Dashboard
      </h2>

      <p className="mt-2 text-sm text-[var(--muted)]">
        Manage projects, tasks and team performance.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6">
          <h3 className="font-semibold">Active Projects</h3>
          <p className="mt-3 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6">
          <h3 className="font-semibold">Pending Tasks</h3>
          <p className="mt-3 text-3xl font-bold">28</p>
        </div>
      </div>
    </DashboardShell>
  );
}
