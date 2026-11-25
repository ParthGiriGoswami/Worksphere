import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DemoManagementPage from "@/components/shared/DemoManagementPage";

vi.mock("@/components/layout/DashboardShell", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dashboard-shell">{children}</div>
  ),
}));

describe("DemoManagementPage", () => {
  it("renders the platform organizations page and sample records", () => {
    render(<DemoManagementPage page="platformOrganizations" />);

    expect(screen.getByRole("heading", { name: "Organizations" })).toBeInTheDocument();
    expect(screen.getByText("Apex Technologies")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-shell")).toBeInTheDocument();
  });

  it("renders the member tasks page", () => {
    render(<DemoManagementPage page="memberTasks" />);

    expect(screen.getByRole("heading", { name: "My Tasks" })).toBeInTheDocument();
    expect(screen.getByText("Create wireframes")).toBeInTheDocument();
  });

  it("shows a demo-only data notice", () => {
    render(<DemoManagementPage page="managerTeam" />);

    expect(screen.getByText(/not saved to a database/i)).toBeInTheDocument();
  });
});
