import DashboardShell from "@/components/layout/DashboardShell";
import { demoPages, type DemoPageKey } from "@/config/demo-pages";

interface DemoManagementPageProps {
  page: DemoPageKey;
}

export default function DemoManagementPage({
  page,
}: DemoManagementPageProps) {
  const data = demoPages[page];

  return (
    <DashboardShell role={data.role}>
      <section className="mb-6">
        <h1 className="text-xl font-bold sm:text-2xl">{data.title}</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">{data.description}</p>
      </section>

      <section
        aria-label={`${data.title} summary`}
        className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {data.stats.map((stat) => (
          <article
            key={stat.label}
            className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--sidebar)] p-4 shadow-sm sm:p-5"
          >
            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
            <p className="mt-2 break-words text-2xl font-bold text-[var(--foreground)]">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">{stat.note}</p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--sidebar)] shadow-sm">
        <div className="border-b border-[var(--border)] p-4 sm:p-5">
          <h2 className="font-semibold text-[var(--foreground)]">
            {data.title} overview
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Sample data for frontend demonstration only
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[var(--background)] text-[var(--muted)]">
              <tr>
                {data.columns.map((column) => (
                  <th key={column} scope="col" className="whitespace-nowrap px-4 py-3 font-medium sm:px-5">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIndex) => (
                <tr key={`${page}-${rowIndex}`} className="border-t border-[var(--border)]">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${page}-${rowIndex}-${cellIndex}`}
                      className="whitespace-nowrap px-4 py-3 text-[var(--foreground)] sm:px-5"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-4 text-xs text-[var(--muted)]">
        Demo mode: information is static and is not saved to a database.
      </p>
    </DashboardShell>
  );
}
