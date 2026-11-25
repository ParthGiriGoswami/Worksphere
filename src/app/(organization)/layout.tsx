import RoleGuard from "@/components/shared/RoleGuard";

export default function OrganizationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGuard allowedRole="organization-owner">
      {children}
    </RoleGuard>
  );
}
