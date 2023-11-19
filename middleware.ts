import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(`Middleware activated with pathname: ${pathname}`);

  // Redirect from /redirect-from to /redirect-to
  if (pathname === "/redirect-from") {
    console.log("Redirecting from /redirect-from to /redirect-to");
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/redirect-to";
    return NextResponse.redirect(redirectUrl);
  }

  // Rewrite from /rewrite-from to /rewrite-to
  if (pathname === "/rewrite-from") {
    console.log("Rewriting from /rewrite-from to /rewrite-to");
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/rewrite-to";
    return NextResponse.rewrite(rewriteUrl);
  }

  console.log("No rewrites or redirects applied. Continuing with request.");

  // For all other routes, continue with the request
  return;
}
