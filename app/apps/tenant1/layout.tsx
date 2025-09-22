import { getTenant } from "@/tenants";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tenant = getTenant("tenant1"); // isko tenant2 ke liye "tenant2" karna

  if (!tenant) return <div>Tenant not found</div>;

  return (
    <div style={{ backgroundColor: tenant.primaryColor, minHeight: "100vh", color: "white" }}>
      <header style={{ padding: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        {tenant.name}
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
