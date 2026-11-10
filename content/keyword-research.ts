/**
 * Keyword research map — SkillStack CSVs (Nov 2026) + Domain Overview + GSC.
 * Do NOT chase KD-100 head terms (tracking) or PK courier brands (TCS/Leopard).
 * Updated: 2026-11-10
 */
export type KeywordOpportunity = {
  keyword: string;
  volume: number;
  kd: number | null;
  targetUrl: string;
  priority: "P0" | "P1" | "P2";
  intent: "transactional" | "informational" | "navigational";
  source: "gsc-domain" | "csv-speedx" | "csv-parcel" | "web";
  notes: string;
};

/** Ignore — wrong topical niche or impossible KD for a SpeedX-only site. */
export const doNotTarget = [
  "tracking",
  "tracking tcs",
  "tcs express tracking",
  "leopard tracking",
  "united parcel service tracking",
  "tcs parcel",
  "parcel track", // KD 100 aggregators
  "packages tracking" // KD 100
] as const;

export const keywordOpportunities: KeywordOpportunity[] = [
  // --- Proven GSC / Domain Overview demand (higher fidelity than CSV vols) ---
  {
    keyword: "speedx delivery",
    volume: 18100,
    kd: 22,
    targetUrl: "/speedx-delivery",
    priority: "P0",
    intent: "informational",
    source: "gsc-domain",
    notes: "Primary delivery pillar."
  },
  {
    keyword: "speedx tracking",
    volume: 6200,
    kd: 9,
    targetUrl: "/",
    priority: "P0",
    intent: "transactional",
    source: "csv-speedx",
    notes: "CSV 1k understates; GSC showed 8k+ weekly impressions. Homepage + /track-package."
  },
  {
    keyword: "speedx tracking shein",
    volume: 6700,
    kd: 9,
    targetUrl: "/carriers/speedx/shein",
    priority: "P0",
    intent: "informational",
    source: "web",
    notes: "Protect #10 ranking; reinforce Shein hub + blog."
  },
  {
    keyword: "speedx shipping",
    volume: 8000,
    kd: null,
    targetUrl: "/speedx-shipping",
    priority: "P0",
    intent: "informational",
    source: "web",
    notes: "New pillar — CSV missed this head term."
  },
  {
    keyword: "what is speedx",
    volume: 5400,
    kd: null,
    targetUrl: "/what-is-speedx",
    priority: "P0",
    intent: "informational",
    source: "gsc-domain",
    notes: "Definition page; link from carriers hub."
  },
  {
    keyword: "speedx track package",
    volume: 1900,
    kd: null,
    targetUrl: "/track-package",
    priority: "P0",
    intent: "transactional",
    source: "gsc-domain",
    notes: "Tool URL."
  },
  {
    keyword: "speedx out for delivery",
    volume: 590,
    kd: null,
    targetUrl: "/speedx-out-for-delivery",
    priority: "P0",
    intent: "informational",
    source: "gsc-domain",
    notes: "High CPC status query."
  },
  {
    keyword: "does speedx deliver on sunday",
    volume: 1300,
    kd: null,
    targetUrl: "/does-speedx-deliver-on-sunday",
    priority: "P0",
    intent: "informational",
    source: "gsc-domain",
    notes: "Weekend/Sunday intent."
  },
  {
    keyword: "speedx tracking number",
    volume: 70,
    kd: null,
    targetUrl: "/speedx-tracking-number",
    priority: "P1",
    intent: "informational",
    source: "csv-speedx",
    notes: "CSV low; still high intent for tool conversion."
  },
  {
    keyword: "is speedx legit",
    volume: 10,
    kd: null,
    targetUrl: "/is-speedx-legit",
    priority: "P1",
    intent: "informational",
    source: "csv-speedx",
    notes: "Trust SERP — new page."
  },
  {
    keyword: "speedx package not delivered",
    volume: 10,
    kd: null,
    targetUrl: "/speedx-package-not-delivered",
    priority: "P1",
    intent: "informational",
    source: "csv-speedx",
    notes: "Problem/solution page — new."
  },
  {
    keyword: "speedx customer service",
    volume: 10,
    kd: null,
    targetUrl: "/speedx-contact-support",
    priority: "P1",
    intent: "navigational",
    source: "csv-speedx",
    notes: "Plus phone/number variants on same URL."
  },
  {
    keyword: "speedx locations",
    volume: 10,
    kd: null,
    targetUrl: "/speedx-locations",
    priority: "P1",
    intent: "informational",
    source: "csv-speedx",
    notes: "Locations / drop-off / delivery location — new hub."
  },
  {
    keyword: "speedx tracking app",
    volume: 10,
    kd: null,
    targetUrl: "/speedx-package-tracking",
    priority: "P2",
    intent: "transactional",
    source: "csv-speedx",
    notes: "Position free web tracker as app alternative."
  },
  {
    keyword: "speedx global tracking",
    volume: 1300,
    kd: null,
    targetUrl: "/speedx-global-tracking",
    priority: "P1",
    intent: "transactional",
    source: "gsc-domain",
    notes: "CSV understates vs Domain Overview."
  },
  {
    keyword: "international parcel tracking",
    volume: 390,
    kd: null,
    targetUrl: "/speedx-global-tracking",
    priority: "P2",
    intent: "transactional",
    source: "csv-parcel",
    notes: "Only as SpeedX international angle — not multi-carrier aggregator."
  },
  {
    keyword: "how late does speedx deliver",
    volume: 880,
    kd: null,
    targetUrl: "/guides/speedx-delivery-hours",
    priority: "P1",
    intent: "informational",
    source: "gsc-domain",
    notes: "Striking distance."
  }
];

export const pillarClusters = [
  {
    name: "SpeedX Tracking",
    pillar: "/track-package",
    supporting: ["/", "/speedx-tracking-number", "/speedx-package-tracking", "/how-to-track-speedx", "/speedx-global-tracking"]
  },
  {
    name: "SpeedX Delivery & Shipping",
    pillar: "/speedx-delivery",
    supporting: ["/speedx-shipping", "/does-speedx-deliver-on-sunday", "/topics/delivery-hours", "/guides/speedx-delivery-hours"]
  },
  {
    name: "Status & Support",
    pillar: "/speedx-out-for-delivery",
    supporting: [
      "/speedx-package-not-delivered",
      "/speedx-contact-support",
      "/is-speedx-legit",
      "/speedx-locations",
      "/what-is-speedx",
      "/carriers/speedx/shein"
    ]
  }
] as const;
