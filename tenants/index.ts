export type Tenant = {
  slug: string;
  name: string;
  primaryColor: string;
  description?: string;
  features?: string[];
};

const TENANTS: Record<string, Tenant> = {
  tenant1: {
    slug: "tenant1",
    name: "Tenant One",
    primaryColor: "#0ea5e9",
    description: "Smart dashboard for Tenant One.",
    features: ["dashboard", "reports", "settings"],
  },
  tenant2: {
    slug: "tenant2",
    name: "Tenant Two",
    primaryColor: "#f97316",
    description: "Ecommerce analytics for Tenant Two.",
    features: ["shop", "analytics", "orders"],
  },
};

export function getTenant(slug: string): Tenant | null {
  return TENANTS[slug] ?? null;
}

export const allTenants = Object.values(TENANTS);
