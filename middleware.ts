import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const APEX_HOST = "speedxtracking.org";
const WWW_HOST = "www.speedxtracking.org";

export function middleware(request: NextRequest) {
  const currentUrl = request.nextUrl;
  const hostname = (request.headers.get("x-forwarded-host") || currentUrl.hostname).split(":")[0].toLowerCase();
  const protocol = (request.headers.get("x-forwarded-proto") || currentUrl.protocol.replace(":", "")).toLowerCase();

  const shouldRedirectFromWww = hostname === WWW_HOST;
  const shouldUpgradeApexToHttps = hostname === APEX_HOST && protocol !== "https";

  if (!shouldRedirectFromWww && !shouldUpgradeApexToHttps) {
    return NextResponse.next();
  }

  const redirectUrl = currentUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = APEX_HOST;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/data).*)"]
};
