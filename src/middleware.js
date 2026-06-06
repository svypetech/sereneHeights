import { NextResponse } from "next/server";
import { APEX_HOST, SITE_HOST } from "@/utils/site";

function isLocalHost(host) {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".vercel.app")
  );
}

export function middleware(req) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  if (!isLocalHost(host) && host === APEX_HOST) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = SITE_HOST;
    redirectUrl.port = "";
    return NextResponse.redirect(redirectUrl, 301);
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", pathname);

  return NextResponse.next({
    headers: requestHeaders,
  });
}


// Apply middleware to all pages
export const config = {
  matcher: ["/:path*", "/floorplans"],
};
