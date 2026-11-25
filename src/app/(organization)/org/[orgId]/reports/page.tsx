export function generateStaticParams() {
  return [{ orgId: "demo" }];
}

import DemoManagementPage from "@/components/shared/DemoManagementPage";

export default function Page() {
  return <DemoManagementPage page="organizationReports" />;
}
