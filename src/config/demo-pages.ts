import type { UserRole } from "@/config/navigation";

export interface DemoPageConfig {
  role: UserRole;
  title: string;
  description: string;
  stats: { label: string; value: string; note: string }[];
  columns: string[];
  rows: string[][];
}

export const demoPages = {
  platformOrganizations: {
    role: "platform-admin",
    title: "Organizations",
    description: "View and manage organizations registered on WorkSphere.",
    stats: [
      { label: "Total organizations", value: "86", note: "Across the platform" },
      { label: "Active", value: "79", note: "Currently operational" },
      { label: "Pending review", value: "7", note: "Demo records" },
    ],
    columns: ["Organization", "Owner", "Members", "Status"],
    rows: [
      ["Apex Technologies", "Riya Sharma", "42", "Active"],
      ["Northstar Labs", "Arjun Mehta", "28", "Active"],
      ["Bluewave Systems", "Neha Verma", "16", "Pending"],
      ["Vertex Solutions", "Kabir Singh", "35", "Active"],
    ],
  },
  platformUsers: {
    role: "platform-admin",
    title: "Users",
    description: "Review user accounts and their assigned workspace roles.",
    stats: [
      { label: "Total users", value: "1,248", note: "Demo platform total" },
      { label: "Active users", value: "1,196", note: "96% of accounts" },
      { label: "Invitations", value: "52", note: "Awaiting acceptance" },
    ],
    columns: ["Name", "Email", "Role", "Status"],
    rows: [
      ["Riya Sharma", "riya@example.com", "Owner", "Active"],
      ["Arjun Mehta", "arjun@example.com", "Project Manager", "Active"],
      ["Neha Verma", "neha@example.com", "Member", "Active"],
      ["Kabir Singh", "kabir@example.com", "Member", "Invited"],
    ],
  },
  platformProjects: {
    role: "platform-admin",
    title: "Projects",
    description: "Monitor projects across all WorkSphere organizations.",
    stats: [
      { label: "Total projects", value: "324", note: "Across organizations" },
      { label: "In progress", value: "186", note: "Currently active" },
      { label: "Completed", value: "112", note: "Demo records" },
    ],
    columns: ["Project", "Organization", "Manager", "Status"],
    rows: [
      ["Website Revamp", "Apex Technologies", "Arjun Mehta", "In Progress"],
      ["Mobile App", "Northstar Labs", "Riya Sharma", "Planning"],
      ["Analytics Portal", "Bluewave Systems", "Neha Verma", "Completed"],
    ],
  },
  platformSettings: {
    role: "platform-admin",
    title: "Platform Settings",
    description: "Review general platform preferences. Changes are demo-only.",
    stats: [
      { label: "Environment", value: "Demo", note: "No production services" },
      { label: "Theme", value: "Available", note: "Light and dark modes" },
    ],
    columns: ["Setting", "Current value", "Description"],
    rows: [
      ["Workspace name", "WorkSphere", "Application display name"],
      ["Default theme", "System", "Uses the selected device theme"],
      ["Notifications", "Enabled", "Visual demonstration only"],
    ],
  },
  organizationMembers: {
    role: "organization-owner",
    title: "Members",
    description: "View members belonging to your organization.",
    stats: [
      { label: "Total members", value: "42", note: "Demo organization" },
      { label: "Active", value: "38", note: "Currently active" },
      { label: "Invited", value: "4", note: "Awaiting acceptance" },
    ],
    columns: ["Name", "Email", "Role", "Status"],
    rows: [
      ["Arjun Mehta", "arjun@example.com", "Project Manager", "Active"],
      ["Neha Verma", "neha@example.com", "Member", "Active"],
      ["Kabir Singh", "kabir@example.com", "Member", "Active"],
      ["Isha Gupta", "isha@example.com", "Member", "Invited"],
    ],
  },
  organizationProjects: {
    role: "organization-owner",
    title: "Projects",
    description: "Track projects created within your organization.",
    stats: [
      { label: "Projects", value: "18", note: "Organization total" },
      { label: "In progress", value: "11", note: "Currently active" },
      { label: "Completed", value: "7", note: "Demo records" },
    ],
    columns: ["Project", "Project manager", "Due date", "Status"],
    rows: [
      ["Website Revamp", "Arjun Mehta", "15 Dec 2026", "In Progress"],
      ["Customer Portal", "Neha Verma", "22 Dec 2026", "Planning"],
      ["Internal Tools", "Kabir Singh", "05 Nov 2026", "Completed"],
    ],
  },
  organizationReports: {
    role: "organization-owner",
    title: "Reports",
    description: "A summary of organization activity using sample data.",
    stats: [
      { label: "Task completion", value: "78%", note: "Sample completion rate" },
      { label: "On-time delivery", value: "91%", note: "Sample performance" },
      { label: "Team members", value: "42", note: "Organization total" },
    ],
    columns: ["Metric", "Current value", "Reporting period"],
    rows: [
      ["Tasks completed", "156", "This month"],
      ["Projects delivered", "7", "This quarter"],
      ["Overdue tasks", "12", "Current demo snapshot"],
    ],
  },
  organizationSettings: {
    role: "organization-owner",
    title: "Organization Settings",
    description: "Review organization preferences. Changes are demo-only.",
    stats: [
      { label: "Workspace", value: "Demo Org", note: "Sample organization" },
      { label: "Members", value: "42", note: "Current demo count" },
    ],
    columns: ["Setting", "Current value", "Description"],
    rows: [
      ["Organization name", "Demo Organization", "Workspace display name"],
      ["Timezone", "Asia/Kolkata", "Organization timezone"],
      ["Default visibility", "Members", "Sample workspace preference"],
    ],
  },
  managerProjects: {
    role: "project-manager",
    title: "Projects",
    description: "Manage the projects assigned to your team.",
    stats: [
      { label: "My projects", value: "8", note: "Assigned projects" },
      { label: "In progress", value: "5", note: "Currently active" },
      { label: "Completed", value: "3", note: "Demo records" },
    ],
    columns: ["Project", "Team size", "Due date", "Status"],
    rows: [
      ["Website Revamp", "6", "15 Dec 2026", "In Progress"],
      ["Customer Portal", "4", "22 Dec 2026", "Planning"],
      ["Internal Tools", "3", "05 Nov 2026", "Completed"],
    ],
  },
  managerTasks: {
    role: "project-manager",
    title: "Tasks",
    description: "Track task progress across your managed projects.",
    stats: [
      { label: "Total tasks", value: "64", note: "Across your projects" },
      { label: "In progress", value: "28", note: "Being worked on" },
      { label: "Overdue", value: "5", note: "Sample task data" },
    ],
    columns: ["Task", "Assignee", "Project", "Status"],
    rows: [
      ["Create wireframes", "Neha Verma", "Website Revamp", "In Progress"],
      ["Review API contract", "Kabir Singh", "Customer Portal", "Pending"],
      ["Update documentation", "Isha Gupta", "Internal Tools", "Completed"],
    ],
  },
  managerTeam: {
    role: "project-manager",
    title: "Team",
    description: "See the members assigned to your projects.",
    stats: [
      { label: "Team members", value: "13", note: "Across managed projects" },
      { label: "Available", value: "9", note: "Sample availability" },
      { label: "Assigned", value: "4", note: "Sample workload status" },
    ],
    columns: ["Name", "Email", "Assigned tasks", "Availability"],
    rows: [
      ["Neha Verma", "neha@example.com", "6", "Available"],
      ["Kabir Singh", "kabir@example.com", "4", "Assigned"],
      ["Isha Gupta", "isha@example.com", "3", "Available"],
    ],
  },
  memberTasks: {
    role: "member",
    title: "My Tasks",
    description: "Review tasks assigned to you in this demo workspace.",
    stats: [
      { label: "Assigned", value: "8", note: "Your sample workload" },
      { label: "Completed", value: "5", note: "Demo records" },
      { label: "Pending", value: "3", note: "Awaiting completion" },
    ],
    columns: ["Task", "Project", "Due date", "Status"],
    rows: [
      ["Create wireframes", "Website Revamp", "28 Nov 2026", "In Progress"],
      ["Review API contract", "Customer Portal", "02 Dec 2026", "Pending"],
      ["Update documentation", "Internal Tools", "05 Dec 2026", "Completed"],
    ],
  },
  memberProjects: {
    role: "member",
    title: "My Projects",
    description: "Projects where you are currently a team member.",
    stats: [
      { label: "Projects", value: "3", note: "Your demo assignments" },
      { label: "Active", value: "2", note: "Currently in progress" },
      { label: "Completed", value: "1", note: "Demo record" },
    ],
    columns: ["Project", "Project manager", "Your tasks", "Status"],
    rows: [
      ["Website Revamp", "Arjun Mehta", "4", "In Progress"],
      ["Customer Portal", "Riya Sharma", "3", "Planning"],
      ["Internal Tools", "Kabir Singh", "2", "Completed"],
    ],
  },
  memberProfile: {
    role: "member",
    title: "My Profile",
    description: "Your profile details in the WorkSphere demo.",
    stats: [
      { label: "Account", value: "Active", note: "Demo account status" },
      { label: "Workspace", value: "Demo Org", note: "Sample organization" },
    ],
    columns: ["Field", "Value"],
    rows: [
      ["Name", "Demo User"],
      ["Email", "demo@example.com"],
      ["Role", "Member"],
      ["Organization", "Demo Organization"],
    ],
  },
} satisfies Record<string, DemoPageConfig>;

export type DemoPageKey = keyof typeof demoPages;
