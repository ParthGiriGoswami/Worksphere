import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "@/app/(auth)/login/page";
import { getDemoSession } from "@/lib/demo-auth";

const { push } = vi.hoisted(() => ({
  push: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn() }),
}));

describe("LoginPage", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.clearAllMocks();
  });

  it("saves the selected role and navigates to its dashboard", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(
      screen.getByRole("textbox", { name: /email address/i }),
      "owner@example.com",
    );
    await user.click(
      screen.getByRole("radio", { name: /organization owner/i }),
    );
    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(push).toHaveBeenCalledWith("/org/demo");
    expect(getDemoSession()).toEqual({
      email: "owner@example.com",
      role: "organization-owner",
    });
  });

  it("does not create a session for an invalid email", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(
      screen.getByRole("textbox", { name: /email address/i }),
      "invalid-email",
    );

    // Fire the submit event directly to exercise the component's own validation.
    const form = screen.getByRole("button", { name: /continue/i }).closest("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Please enter a valid email address.",
    );
    expect(getDemoSession()).toBeNull();
    expect(push).not.toHaveBeenCalled();
  });
});
