/**
 * Organic competitors from SkillStack export (competitors-speedxtracking.org.csv).
 * Used for content strategy — we do NOT link out to thin SpeedX clone sites.
 */

export type CompetitorTier = "official" | "aggregator" | "speedx-clone" | "trust-review" | "noise";

export type CompetitorInsight = {
  domain: string;
  sharedKeywords: number;
  organicTraffic: number;
  tier: CompetitorTier;
  note: string;
};

export const competitorInsights: CompetitorInsight[] = [
  { domain: "speedx.io", sharedKeywords: 147, organicTraffic: 23967, tier: "official", note: "Official carrier — own brand navigational queries." },
  { domain: "17track.net", sharedKeywords: 125, organicTraffic: 3046, tier: "aggregator", note: "Multi-carrier tracker; hard for generic track terms." },
  { domain: "parcelsapp.com", sharedKeywords: 121, organicTraffic: 6946, tier: "aggregator", note: "Strong parcel aggregator SERP presence." },
  { domain: "aftership.com", sharedKeywords: 93, organicTraffic: 1268, tier: "aggregator", note: "Carrier pages + ecommerce tracking suite." },
  { domain: "trackship.com", sharedKeywords: 81, organicTraffic: 765, tier: "aggregator", note: "Tracking SaaS / lookup competitor." },
  { domain: "trackingmore.com", sharedKeywords: 43, organicTraffic: 793, tier: "aggregator", note: "API + public tracking pages." },
  { domain: "ordertracker.com", sharedKeywords: 44, organicTraffic: 302, tier: "aggregator", note: "Consumer order tracking." },
  { domain: "ship24.com", sharedKeywords: 55, organicTraffic: 152, tier: "aggregator", note: "Multi-carrier tracker." },
  { domain: "4tracking.net", sharedKeywords: 48, organicTraffic: 478, tier: "aggregator", note: "Tracking lookup site." },
  { domain: "posttrack.com", sharedKeywords: 33, organicTraffic: 465, tier: "aggregator", note: "Postal/parcel tracking." },
  { domain: "parcelmonitor.com", sharedKeywords: 94, organicTraffic: 169, tier: "aggregator", note: "High keyword overlap, lower traffic." },
  { domain: "packyapp.com", sharedKeywords: 83, organicTraffic: 185, tier: "aggregator", note: "App-style tracker." },
  { domain: "pkge.net", sharedKeywords: 39, organicTraffic: 136, tier: "aggregator", note: "Package tracking directory." },
  { domain: "trustpilot.com", sharedKeywords: 101, organicTraffic: 1872, tier: "trust-review", note: "Reviews SERP — build trust pages, not copy reviews." },
  { domain: "bbb.org", sharedKeywords: 30, organicTraffic: 114, tier: "trust-review", note: "Business reputation SERP." },
  { domain: "easypost.com", sharedKeywords: 85, organicTraffic: 2301, tier: "noise", note: "Shipping API docs — different intent." },
  { domain: "speedx-tracking.com", sharedKeywords: 104, organicTraffic: 3234, tier: "speedx-clone", note: "Closest niche rival by traffic — beat with deeper guides." },
  { domain: "trackxspeed.com", sharedKeywords: 137, organicTraffic: 371, tier: "speedx-clone", note: "Very high keyword overlap with SpeedX queries." },
  { domain: "speedxtrackings.com", sharedKeywords: 99, organicTraffic: 176, tier: "speedx-clone", note: "Thin SpeedX tracking clone." },
  { domain: "speedxtracking.net", sharedKeywords: 45, organicTraffic: 201, tier: "speedx-clone", note: "Brand-similar tracking clone." },
  { domain: "speedx-trackings.com", sharedKeywords: 39, organicTraffic: 75, tier: "speedx-clone", note: "Thin clone variant." },
  { domain: "speedxtrackingi.com", sharedKeywords: 41, organicTraffic: 82, tier: "speedx-clone", note: "Thin clone variant." },
  { domain: "speedxtrackingx.com", sharedKeywords: 37, organicTraffic: 76, tier: "speedx-clone", note: "Thin clone variant." }
];

export function getBeatableCompetitors() {
  return competitorInsights
    .filter((item) => item.tier === "speedx-clone" || (item.tier === "aggregator" && item.organicTraffic < 1000))
    .sort((a, b) => b.organicTraffic - a.organicTraffic);
}

export function getStrategyPriorities() {
  return [
    "Do not chase speedx.io for brand navigational queries — cite it as the official source.",
    "Win SpeedX long-tail Q&A (Sunday, delivery times, Shein, SPXCN, out for delivery) against thin clones.",
    "Differentiate from 17track / AfterShip / ParcelsApp with SpeedX-only depth, not a bloated multi-carrier directory.",
    "Keep trust signals strong (editorial review, official citations) because Trustpilot/BBB also appear in SERPs."
  ];
}
