import { NextResponse } from "next/server";
import { APEX_HOST, SITE_HOST } from "@/utils/site";

function isLocalHost(host) {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".vercel.app")
  );
}

function getRequestHost(req) {
  return (req.headers.get("host") || req.nextUrl.host || "")
    .split(":")[0]
    .toLowerCase();
}

function getRequestProto(req) {
  const forwarded = req.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return (req.nextUrl.protocol || "http:").replace(":", "").toLowerCase();
}

export function middleware(req) {
  const host = getRequestHost(req);
  const pathname = req.nextUrl.pathname;

  if (!isLocalHost(host)) {
    const proto = getRequestProto(req);
    const isApex = host === APEX_HOST;
    const isWrongHost = host !== SITE_HOST;
    const isInsecure = proto !== "https";

    // Single-hop 301 to the canonical https://www host (covers HTTP and apex).
    if (isInsecure || isApex || isWrongHost) {
      const redirectUrl = new URL(req.url);
      redirectUrl.protocol = "https:";
      redirectUrl.hostname = SITE_HOST;
      redirectUrl.port = "";
      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // HSTS tells browsers to always use HTTPS on return visits.
  if (!isLocalHost(host)) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and static files that should
     * still inherit the host/protocol redirect when requested by URL.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
