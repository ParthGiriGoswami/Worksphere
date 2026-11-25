import { describe, expect, it } from "vitest";
import { navigationConfig, roleLabels, type UserRole } from "@/config/navigation";

describe("role navigation configuration", () => {
  it("defines navigation for all four roles", () => {
    const roles: UserRole[] = [
      "platform-admin",
      "organization-owner",
      "project-manager",
      "member",
    ];

    for (const role of roles) {
      expect(navigationConfig[role].length).toBeGreaterThan(0);
      expect(roleLabels[role]).toBeTruthy();
    }
  });

  it("keeps each role's dashboard route in its own navigation", () => {
    expect(navigationConfig["platform-admin"][0].href).toBe("/platform");
    expect(navigationConfig["organization-owner"][0].href).toBe("/org/demo");
    expect(navigationConfig["project-manager"][0].href).toBe("/projects");
    expect(navigationConfig.member[0].href).toBe("/my-work");
  });

  it("contains the requested sidebar destinations", () => {
    const hrefs = Object.values(navigationConfig).flat().map((item) => item.href);

    expect(hrefs).toContain("/platform/organizations");
    expect(hrefs).toContain("/org/demo/members");
    expect(hrefs).toContain("/projects/tasks");
    expect(hrefs).toContain("/my-work/profile");
  });
});
