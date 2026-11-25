import RoleGuard from "@/components/shared/RoleGuard";

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGuard allowedRole="platform-admin">
      {children}
    </RoleGuard>
  );
}
