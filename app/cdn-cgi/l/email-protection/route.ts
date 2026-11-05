import { NextResponse } from "next/server";

/**
 * SkillStack / old Cloudflare probes hit /cdn-cgi/l/email-protection.
 * This site runs on Vercel (no Cloudflare email obfuscation) and publishes
 * no raw emails — return 204 so audits stop flagging a phantom 404.
 */
export function GET() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Cache-Control": "public, max-age=86400",
      "X-Robots-Tag": "noindex"
    }
  });
}

export function HEAD() {
  return GET();
}
