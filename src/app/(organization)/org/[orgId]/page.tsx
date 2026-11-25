
import DashboardShell from "@/components/layout/DashboardShell";

export default async function OrganizationDashboard({
  params,
}: {
  params: Promise<{ orgId: string }>;
}) {
  const { orgId } = await params;

  return (
    <DashboardShell role="organization-owner">
      <h2 className="text-2xl font-bold">
        Organization Dashboard
      </h2>

      <p className="mt-2 text-sm text-[var(--muted)]">
        Welcome to your organization workspace.
      </p>

      <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-6">
        <h3 className="font-semibold">Organization Overview</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Organization ID: {orgId}
        </p>
      </div>
    </DashboardShell>
  );
}
