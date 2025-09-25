// Example: app/apps/tenant1/layout.tsx
import React from 'react';

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Tenant 1 Layout</h1>
      {children}
    </div>
  );
}


