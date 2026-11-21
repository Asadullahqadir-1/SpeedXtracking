import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const CANONICAL_HOST = "speedxtracking.org";

const ALIAS_HOSTS = new Set([
  "www.speedxtracking.org",
  "speedxtracking.io",
  "www.speedxtracking.io"
]);

function hostnameOf(request: NextRequest) {
  const raw = request.headers.get("x-forwarded-host") || request.nextUrl.hostname;
  return raw.split(",")[0].trim().split(":")[0].toLowerCase();
}

function protocolOf(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return request.nextUrl.protocol.replace(":", "").toLowerCase();
}

function isLocalOrPreviewHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".vercel.app")
  );
}

export function middleware(request: NextRequest) {
  const hostname = hostnameOf(request);
  const protocol = protocolOf(request);

  // Never send preview or local traffic to production.
  if (isLocalOrPreviewHost(hostname)) {
    return NextResponse.next();
  }

  const shouldCanonicalizeHost = hostname !== CANONICAL_HOST && (ALIAS_HOSTS.has(hostname) || hostname.startsWith("www."));
  const shouldUpgradeHttps = protocol !== "https" && (hostname === CANONICAL_HOST || ALIAS_HOSTS.has(hostname) || hostname.startsWith("www."));

  if (!shouldCanonicalizeHost && !shouldUpgradeHttps) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https:";
  redirectUrl.hostname = CANONICAL_HOST;
  redirectUrl.port = "";
  // Keep path and query; drop a trailing slash except on the homepage so this
  // hop also avoids a second trailing-slash redirect after a host change.
  if (redirectUrl.pathname.length > 1 && redirectUrl.pathname.endsWith("/")) {
    redirectUrl.pathname = redirectUrl.pathname.replace(/\/+$/, "");
  }

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  // Include robots.txt, sitemap.xml and static files so alias hosts redirect
  // in one hop instead of serving the same asset on the wrong hostname.
  matcher: ["/((?!_next/static|_next/image|_next/data|api/).*)"]
};
