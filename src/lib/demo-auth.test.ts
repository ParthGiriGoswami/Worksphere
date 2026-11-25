import { beforeEach, describe, expect, it } from "vitest";
import {
  clearDemoSession,
  getDemoSession,
  saveDemoSession,
} from "@/lib/demo-auth";

const SESSION_KEY = "worksphere-demo-session";

describe("demo session utilities", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("returns null when no demo session exists", () => {
    expect(getDemoSession()).toBeNull();
  });

  it("saves and retrieves a valid demo session", () => {
    saveDemoSession({
      email: "demo@example.com",
      role: "project-manager",
    });

    expect(getDemoSession()).toEqual({
      email: "demo@example.com",
      role: "project-manager",
    });
  });

  it("clears the current demo session", () => {
    saveDemoSession({
      email: "demo@example.com",
      role: "member",
    });

    clearDemoSession();

    expect(sessionStorage.getItem(SESSION_KEY)).toBeNull();
    expect(getDemoSession()).toBeNull();
  });

  it("rejects malformed JSON and removes the invalid value", () => {
    sessionStorage.setItem(SESSION_KEY, "{not-json");

    expect(getDemoSession()).toBeNull();
    expect(sessionStorage.getItem(SESSION_KEY)).toBeNull();
  });

  it("rejects a session containing an unsupported role", () => {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        email: "demo@example.com",
        role: "super-user",
      }),
    );

    expect(getDemoSession()).toBeNull();
    expect(sessionStorage.getItem(SESSION_KEY)).toBeNull();
  });

  it("rejects a session without a usable email", () => {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        email: "   ",
        role: "member",
      }),
    );

    expect(getDemoSession()).toBeNull();
    expect(sessionStorage.getItem(SESSION_KEY)).toBeNull();
  });
});
