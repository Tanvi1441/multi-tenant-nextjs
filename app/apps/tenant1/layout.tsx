// app/apps/[tenant]/layout.tsx
import React, { ReactNode } from 'react';

export default function TenantLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

