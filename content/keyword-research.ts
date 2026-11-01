/**
 * Keyword research map (SkillStack Domain Overview + public SERP demand signals).
 * Updated: 2026-11-01. Use as the canonical target URL plan — avoid cannibalization.
 */
export type KeywordOpportunity = {
  keyword: string;
  volume: number;
  currentRank: number | null;
  currentUrl: string | null;
  targetUrl: string;
  priority: "P0" | "P1" | "P2";
  intent: "transactional" | "informational" | "navigational";
  notes: string;
};

/** Striking-distance + high-volume opportunities from SkillStack (Nov 2026). */
export const keywordOpportunities: KeywordOpportunity[] = [
  {
    keyword: "speedx delivery",
    volume: 18100,
    currentRank: 22,
    currentUrl: "/blog/speedx-delivery-time-by-region",
    targetUrl: "/speedx-delivery",
    priority: "P0",
    intent: "informational",
    notes: "Highest volume. Blog is cannibalizing the pillar — push authority to /speedx-delivery."
  },
  {
    keyword: "what is speedx",
    volume: 5400,
    currentRank: 72,
    currentUrl: "/carriers/speedx",
    targetUrl: "/what-is-speedx",
    priority: "P0",
    intent: "informational",
    notes: "Wrong URL ranking. Carrier hub must yield to /what-is-speedx."
  },
  {
    keyword: "what is speedx delivery",
    volume: 1900,
    currentRank: 26,
    currentUrl: "/blog/speedx-delivery-time-by-region",
    targetUrl: "/what-is-speedx",
    priority: "P0",
    intent: "informational",
    notes: "Bridge from definition → delivery hub with internal links."
  },
  {
    keyword: "speedx track package",
    volume: 1900,
    currentRank: 59,
    currentUrl: "/",
    targetUrl: "/track-package",
    priority: "P0",
    intent: "transactional",
    notes: "Homepage ranks weakly; reinforce /track-package as tool URL."
  },
  {
    keyword: "tracking speed x",
    volume: 1600,
    currentRank: 47,
    currentUrl: "/carriers/speedx",
    targetUrl: "/",
    priority: "P1",
    intent: "transactional",
    notes: "Brand typo variant — keep homepage + track-package coverage."
  },
  {
    keyword: "speedx facility",
    volume: 1300,
    currentRank: 29,
    currentUrl: "/blog/speedx-arrived-at-facility-meaning",
    targetUrl: "/blog/speedx-arrived-at-facility-meaning",
    priority: "P1",
    intent: "informational",
    notes: "Keep blog as canonical; reinforce Q&A cluster links."
  },
  {
    keyword: "does speedx deliver on sunday",
    volume: 1300,
    currentRank: 15,
    currentUrl: "/blog/speedx-delivery-time-by-region",
    targetUrl: "/does-speedx-deliver-on-sunday",
    priority: "P0",
    intent: "informational",
    notes: "Critical cannibalization — Sunday page must win over blog."
  },
  {
    keyword: "speedx global tracking",
    volume: 1300,
    currentRank: 62,
    currentUrl: "/",
    targetUrl: "/speedx-global-tracking",
    priority: "P1",
    intent: "transactional",
    notes: "Dedicated international pillar already exists — strengthen titles + FAQs."
  },
  {
    keyword: "speedx tracking shein",
    volume: 1000,
    currentRank: 10,
    currentUrl: "/blog/shein-speedx-tracking-guide",
    targetUrl: "/blog/shein-speedx-tracking-guide",
    priority: "P1",
    intent: "informational",
    notes: "Already page-1. Protect with internal links from Shein hub."
  },
  {
    keyword: "how late does speedx deliver",
    volume: 880,
    currentRank: 15,
    currentUrl: "/guides/does-speedx-deliver-late-at-night",
    targetUrl: "/topics/delivery-hours",
    priority: "P1",
    intent: "informational",
    notes: "Point guides to delivery-hours cluster hub."
  },
  {
    keyword: "speedx out for delivery",
    volume: 590,
    currentRank: 17,
    currentUrl: "/speedx-out-for-delivery-but-not-delivered",
    targetUrl: "/speedx-out-for-delivery",
    priority: "P0",
    intent: "informational",
    notes: "High CPC ($2.70). New dedicated pillar; long-tail keeps existing page."
  },
  {
    keyword: "speedx delivery hours",
    volume: 590,
    currentRank: 19,
    currentUrl: "/blog/speedx-delivery-time-by-region",
    targetUrl: "/speedx-delivery",
    priority: "P1",
    intent: "informational",
    notes: "Consolidate under delivery pillar + topics/delivery-hours."
  },
  {
    keyword: "speedx out for delivery but not delivered",
    volume: 140,
    currentRank: 6,
    currentUrl: "/blog/speedx-out-for-delivery-but-not-delivered",
    targetUrl: "/blog/speedx-out-for-delivery-but-not-delivered",
    priority: "P2",
    intent: "informational",
    notes: "Already top-10 — protect and link from OFD pillar."
  },
  {
    keyword: "spx tracking shein",
    volume: 110,
    currentRank: 18,
    currentUrl: "/blog/shein-speedx-tracking-guide",
    targetUrl: "/blog/shein-speedx-tracking-guide",
    priority: "P2",
    intent: "informational",
    notes: "Near page-1 — reinforce Shein hub links."
  },
  {
    keyword: "speedx rastreo",
    volume: 320,
    currentRank: 35,
    currentUrl: "/",
    targetUrl: "/rastrear-paquete-speedx",
    priority: "P1",
    intent: "transactional",
    notes: "Spanish demand — keep ES pillar as canonical."
  }
];

export const pillarClusters = [
  {
    name: "SpeedX Delivery",
    pillar: "/speedx-delivery",
    supporting: [
      "/does-speedx-deliver-on-sunday",
      "/topics/delivery-hours",
      "/guides/speedx-delivery-hours",
      "/blog/speedx-delivery-time-by-region",
      "/carriers/speedx/delivery-time"
    ]
  },
  {
    name: "SpeedX Tracking",
    pillar: "/track-package",
    supporting: [
      "/",
      "/what-is-speedx",
      "/speedx-tracking-number",
      "/how-to-track-speedx",
      "/speedx-global-tracking",
      "/topics/speedx-tracking",
      "/carriers/speedx"
    ]
  },
  {
    name: "Out for Delivery",
    pillar: "/speedx-out-for-delivery",
    supporting: [
      "/topics/out-for-delivery",
      "/blog/speedx-out-for-delivery-but-not-delivered",
      "/blog/speedx-arrived-at-facility-meaning",
      "/topics/out-for-delivery/same-day-delivery-odds"
    ]
  }
] as const;
