import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "@/components/ui/Input";

describe("Input", () => {
  it("renders an accessible labelled input", () => {
    render(<Input id="email" label="Email address" />);
    expect(screen.getByRole("textbox", { name: "Email address" })).toBeInTheDocument();
  });

  it("displays validation errors accessibly", () => {
    render(<Input id="email" label="Email address" error="Enter a valid email." />);
    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email.");
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(<Input id="name" label="Name" />);
    await user.type(screen.getByRole("textbox", { name: "Name" }), "Parth");
    expect(screen.getByRole("textbox")).toHaveValue("Parth");
  });
});
