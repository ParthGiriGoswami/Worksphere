import RoleGuard from "@/components/shared/RoleGuard";

export default function ManagerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGuard allowedRole="project-manager">
      {children}
    </RoleGuard>
  );
}
