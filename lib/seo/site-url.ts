const DEFAULT_SITE_URL = "https://speedxtracking.org";

function normalizeSiteUrl(rawUrl?: string): string {
  if (!rawUrl) return DEFAULT_SITE_URL;

  try {
    const parsed = new URL(rawUrl);
    const isLocalhost = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";

    if (!isLocalhost) {
      parsed.protocol = "https:";
      if (parsed.hostname.startsWith("www.")) {
        parsed.hostname = parsed.hostname.slice(4);
      }
    }

    parsed.pathname = parsed.pathname.replace(/\/$/, "");
    parsed.hash = "";
    parsed.search = "";

    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
