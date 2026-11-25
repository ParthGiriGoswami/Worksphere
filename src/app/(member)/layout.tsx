import RoleGuard from "@/components/shared/RoleGuard";

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGuard allowedRole="member">
      {children}
    </RoleGuard>
  );
}
