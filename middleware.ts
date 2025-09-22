import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  
  // Subdomain extract karo
  const subdomain = host.split(".")[0];

  // Agar tenant1.localhost hai
  if (subdomain === "tenant1") {
    return NextResponse.rewrite(new URL("/apps/tenant1", req.url));
  }

  // Agar tenant2.localhost hai
  if (subdomain === "tenant2") {
    return NextResponse.rewrite(new URL("/apps/tenant2", req.url));
  }

  // Default → home page
  return NextResponse.rewrite(new URL("/home", req.url));
}
