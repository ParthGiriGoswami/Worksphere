
import {
  LayoutDashboard,
  Users,
  Building2,
  FolderKanban,
  Settings,
  ClipboardList,
  BriefcaseBusiness,
  ChartNoAxesCombined,
} from "lucide-react";

export type UserRole =
  | "platform-admin"
  | "organization-owner"
  | "project-manager"
  | "member";

export const navigationConfig = {
  "platform-admin": [
    { name: "Dashboard", href: "/platform", icon: LayoutDashboard },
    { name: "Organizations", href: "/platform/organizations", icon: Building2 },
    { name: "Users", href: "/platform/users", icon: Users },
    { name: "Projects", href: "/platform/projects", icon: FolderKanban },
    { name: "Settings", href: "/platform/settings", icon: Settings },
  ],

  "organization-owner": [
    { name: "Dashboard", href: "/org/demo", icon: LayoutDashboard },
    { name: "Members", href: "/org/demo/members", icon: Users },
    { name: "Projects", href: "/org/demo/projects", icon: FolderKanban },
    { name: "Reports", href: "/org/demo/reports", icon: ChartNoAxesCombined },
    { name: "Settings", href: "/org/demo/settings", icon: Settings },
  ],

  "project-manager": [
    { name: "Dashboard", href: "/projects", icon: LayoutDashboard },
    { name: "Projects", href: "/projects/list", icon: FolderKanban },
    { name: "Tasks", href: "/projects/tasks", icon: ClipboardList },
    { name: "Team", href: "/projects/team", icon: Users },
  ],

  member: [
    { name: "My Work", href: "/my-work", icon: LayoutDashboard },
    { name: "My Tasks", href: "/my-work/tasks", icon: ClipboardList },
    { name: "Projects", href: "/my-work/projects", icon: BriefcaseBusiness },
    { name: "Profile", href: "/my-work/profile", icon: Users },
  ],
};

export const roleLabels: Record<UserRole, string> = {
  "platform-admin": "Platform Administrator",
  "organization-owner": "Organization Owner",
  "project-manager": "Project Manager",
  member: "Member",
};
