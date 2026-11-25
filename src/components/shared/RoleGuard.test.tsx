import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import RoleGuard from "@/components/shared/RoleGuard";
import { getDemoSession } from "@/lib/demo-auth";

const { replace } = vi.hoisted(() => ({
  replace: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
}));

vi.mock("@/lib/demo-auth", () => ({
  getDemoSession: vi.fn(),
}));

const mockedGetDemoSession = vi.mocked(getDemoSession);

describe("RoleGuard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("redirects to login when no session exists", async () => {
    mockedGetDemoSession.mockReturnValue(null);

    render(
      <RoleGuard allowedRole="platform-admin">
        <p>Protected platform content</p>
      </RoleGuard>,
    );

    await waitFor(() => {
      expect(replace).toHaveBeenCalledWith("/login");
    });

    expect(
      screen.queryByText("Protected platform content"),
    ).not.toBeInTheDocument();
  });

  it("redirects a user with the wrong role to their own dashboard", async () => {
    mockedGetDemoSession.mockReturnValue({
      email: "member@example.com",
      role: "member",
    });

    render(
      <RoleGuard allowedRole="platform-admin">
        <p>Protected platform content</p>
      </RoleGuard>,
    );

    await waitFor(() => {
      expect(replace).toHaveBeenCalledWith("/my-work");
    });

    expect(
      screen.queryByText("Protected platform content"),
    ).not.toBeInTheDocument();
  });

  it("renders content for the matching role", async () => {
    mockedGetDemoSession.mockReturnValue({
      email: "admin@example.com",
      role: "platform-admin",
    });

    render(
      <RoleGuard allowedRole="platform-admin">
        <p>Protected platform content</p>
      </RoleGuard>,
    );

    expect(
      await screen.findByText("Protected platform content"),
    ).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });

  it("fails closed and redirects when session retrieval throws", async () => {
    mockedGetDemoSession.mockImplementation(() => {
      throw new Error("Browser storage unavailable");
    });

    render(
      <RoleGuard allowedRole="member">
        <p>Protected member content</p>
      </RoleGuard>,
    );

    await waitFor(() => {
      expect(replace).toHaveBeenCalledWith("/login");
    });

    expect(
      screen.queryByText("Protected member content"),
    ).not.toBeInTheDocument();
  });
});
