import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.pathname;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", url);

  return NextResponse.next({
    headers: requestHeaders,
  });

}


// Apply middleware to all pages
export const config = {
  matcher: ["/:path*", "/floorplans"],
};
