import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
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
