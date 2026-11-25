import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "@/components/ui/Select";

describe("Select", () => {
  it("renders its label and options", () => {
    render(
      <Select
        id="role"
        label="Role"
        options={[
          { label: "Member", value: "member" },
          { label: "Manager", value: "manager" },
        ]}
      />
    );

    expect(screen.getByRole("combobox", { name: "Role" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Manager" })).toBeInTheDocument();
  });

  it("allows a user to change the selected option", async () => {
    const user = userEvent.setup();
    render(
      <Select
        id="role"
        label="Role"
        defaultValue="member"
        options={[
          { label: "Member", value: "member" },
          { label: "Manager", value: "manager" },
        ]}
      />
    );

    await user.selectOptions(screen.getByRole("combobox"), "manager");
    expect(screen.getByRole("combobox")).toHaveValue("manager");
  });
});
