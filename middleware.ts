import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Test a redirect before without setting pathname
  if (request.cookies.get("google")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = "google.com";
    redirectUrl.port = "80";
    return NextResponse.redirect(redirectUrl);
  }

  // Test a redirect and set pathname
  if (request.cookies.get("about")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = "google.com";
    redirectUrl.port = "80";
    redirectUrl.pathname = "/about";
    return NextResponse.redirect(redirectUrl);
  }

  const { pathname } = request.nextUrl;

  // Redirect from /redirect-from to /redirect-to
  if (pathname === "/redirect-from") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/redirect-to";
    return NextResponse.redirect(redirectUrl);
  }

  // Rewrite from /rewrite-from to /rewrite-to
  if (pathname === "/rewrite-from") {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/rewrite-to";
    return NextResponse.rewrite(rewriteUrl);
  }

  // For all other routes, continue with the request
  return;
}
