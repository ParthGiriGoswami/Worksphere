
import DashboardShell from "@/components/layout/DashboardShell";

export function generateStaticParams() {
  return [{ orgId: "demo" }];
}

export default async function OrganizationDashboard({
  params,
}: {
  params: Promise<{ orgId: string }>;
}) {
  const { orgId } = await params;

  return (
    <DashboardShell role="organization-owner">
      <section className="mb-8">
        <h2 className="text-xl font-bold sm:text-2xl">
          Organization Dashboard
        </h2>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Welcome to your organization workspace.
        </p>
      </section>

      <section
        aria-label="Organization overview"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <article className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-4 shadow-sm sm:p-6">
          <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
            Organization Overview
          </h3>

          <p className="mt-3 break-all text-sm text-[var(--muted)]">
            Organization ID: {orgId}
          </p>
        </article>
      </section>
    </DashboardShell>
  );
}
