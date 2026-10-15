/**
 * Single source of truth for permanent 301 redirects.
 * Used by next.config.ts and programmatic page fallbacks.
 * Keep redirect sources OUT of the sitemap.
 */
export type PermanentRedirect = {
  source: string;
  destination: string;
};

const citySlugs = [
  "new-york",
  "los-angeles",
  "chicago",
  "houston",
  "phoenix",
  "philadelphia",
  "san-antonio",
  "san-diego",
  "dallas",
  "san-jose",
  "austin",
  "jacksonville",
  "fort-worth",
  "columbus",
  "charlotte",
  "indianapolis",
  "seattle",
  "denver",
  "washington-dc",
  "boston"
];

/** Programmatic slug → destination (no leading slash on slug). */
export const programmaticRedirectMap: Record<string, string> = {
  "speedx-tracking-not-updating": "/blog/speedx-tracking-not-updating",
  "speedx-delivered-but-not-received": "/guides/delivered-not-received",
  "speedx-lost-package-claim": "/blog/delivered-but-not-received-speedx",
  "speedx-contact-number": "/carriers/speedx/contact",
  "speedx-customer-service": "/carriers/speedx/contact",
  "speedx-support-email": "/carriers/speedx/contact",
  "speedx-live-agent-help": "/carriers/speedx/contact",
  "speedx-claim-support": "/carriers/speedx/contact",
  "speedx-shein-tracking": "/carriers/speedx/shein",
  "shein-speedx-delivery-time": "/blog/shein-speedx-tracking-guide",
  "shein-order-stuck-speedx": "/blog/shein-speedx-tracking-guide",
  "shein-speedx-delivered-not-received": "/blog/delivered-but-not-received-speedx",
  "shein-speedx-contact-support": "/carriers/speedx/contact",
  "track-speedx-spxcn-format": "/guides/spxcn-tracking-number-meaning",
  "track-speedx-spxsg-format": "/track-package",
  "track-speedx-numeric-format": "/track-package",
  "track-speedx-order-id-vs-tracking-number": "/track-package",
  "track-speedx-format-checker": "/track-package",
  "speedx-out-for-delivery-but-not-delivered": "/blog/speedx-out-for-delivery-but-not-delivered",
  "speedx-delivery-exception": "/blog/speedx-delivery-exception-codes",
  "speedx-customs-clearance-delay": "/blog/speedx-customs-delay-guide",
  "speedx-at-facility-too-long": "/blog/speedx-arrived-at-facility-meaning",
  "speedx-label-created-no-update": "/blog/speedx-label-created-no-movement",
  "speedx-missed-delivery-attempt": "/blog/speedx-attempted-delivery-what-next",
  "speedx-invalid-tracking-number": "/blog/speedx-tracking-number-not-found",
  "speedx-package-returned-to-sender": "/blog/speedx-returned-to-sender",
  // Thin leftovers that were "crawled – not indexed"
  "speedx-weekend-delivery": "/does-speedx-deliver-on-sunday",
  "speedx-package-stuck-in-transit": "/guides/package-not-updating",
  "speedx-no-movement-for-5-days": "/guides/package-not-updating",
  "speedx-updating-in-batches": "/blog/how-speedx-tracking-works",
  ...Object.fromEntries(citySlugs.map((city) => [`track-speedx-${city}`, "/track-package"]))
};

export const permanentRedirects: PermanentRedirect[] = [
  ...Object.entries(programmaticRedirectMap).map(([slug, destination]) => ({
    source: `/${slug}`,
    destination
  })),
  {
    source: "/carriers/usps",
    destination: "/carriers"
  },
  {
    source: "/blog/does-speedx-deliver-late-at-night",
    destination: "/guides/speedx-delivery-hours"
  },
  {
    source: "/blog/does-speedx-deliver-late-at-night-guide",
    destination: "/guides/speedx-delivery-hours"
  },
  {
    source: "/blog/spxcn-tracking-number-meaning",
    destination: "/blog/spxcn-tracking-number-format-explained"
  },
  {
    source: "/guides/does-speedx-deliver-late-at-night",
    destination: "/guides/speedx-delivery-hours"
  }
];

export function getProgrammaticRedirectDestination(slug: string) {
  return programmaticRedirectMap[slug];
}

export function isProgrammaticSlugRedirected(slug: string) {
  return Boolean(programmaticRedirectMap[slug]);
}
