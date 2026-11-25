
import DashboardShell from "@/components/layout/DashboardShell";

export default function MemberDashboard() {
  return (
    <DashboardShell role="member">
      <h2 className="text-2xl font-bold">
        My Workspace
      </h2>

      <p className="mt-2 text-sm text-[var(--muted)]">
        View your assigned tasks and projects.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6">
          <h3 className="font-semibold">My Tasks</h3>
          <p className="mt-3 text-3xl font-bold">8</p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6">
          <h3 className="font-semibold">Completed Tasks</h3>
          <p className="mt-3 text-3xl font-bold">15</p>
        </div>
      </div>
    </DashboardShell>
  );
}
