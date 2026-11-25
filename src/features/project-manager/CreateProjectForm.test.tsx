import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProjectForm from "@/features/project-manager/CreateProjectForm";

describe("CreateProjectForm", () => {
  it("shows validation errors when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    await user.click(screen.getByRole("button", { name: /create project/i }));

    expect(screen.getByText("Project name is required.")).toBeInTheDocument();
    expect(
      screen.getByText("Project description is required."),
    ).toBeInTheDocument();
  });

  it("validates and confirms valid project details in demo mode", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    await user.type(
      screen.getByRole("textbox", { name: /project name/i }),
      "Website Revamp",
    );
    await user.type(
      screen.getByRole("textbox", { name: /project description/i }),
      "Refresh the company website.",
    );
    await user.click(screen.getByRole("button", { name: /create project/i }));

    expect(
      screen.getByRole("status"),
    ).toHaveTextContent(/details validated/i);
    expect(
      screen.getByRole("status"),
    ).toHaveTextContent(/does not save this project/i);
  });

  it("rejects project names shorter than three characters", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    await user.type(
      screen.getByRole("textbox", { name: /project name/i }),
      "AB",
    );
    await user.type(
      screen.getByRole("textbox", { name: /project description/i }),
      "A description",
    );
    await user.click(screen.getByRole("button", { name: /create project/i }));

    expect(
      screen.getByText("Project name must contain at least 3 characters."),
    ).toBeInTheDocument();
  });
});
