export const longTailIntents = [
  {
    slug: "package-tracking",
    keywordSuffix: "package tracking",
    titleSuffix: "Package Tracking",
    h2: "How to use package tracking",
    descriptionSuffix: "Track package movement with status checkpoints and route updates."
  },
  {
    slug: "track-shipment",
    keywordSuffix: "track shipment",
    titleSuffix: "Track Shipment",
    h2: "How to track shipment updates",
    descriptionSuffix: "Track shipments from pickup to delivery with actionable status guidance."
  },
  {
    slug: "tracking-status",
    keywordSuffix: "tracking status",
    titleSuffix: "Tracking Status",
    h2: "Tracking status meanings",
    descriptionSuffix: "Understand status terms like in transit, out for delivery, delivered, and exception."
  },
  {
    slug: "delivery-time-estimate",
    keywordSuffix: "delivery time",
    titleSuffix: "Delivery Time",
    h2: "Estimated delivery timeline",
    descriptionSuffix: "Learn domestic and international delivery windows and delay factors."
  },
  {
    slug: "contact-number",
    keywordSuffix: "contact number",
    titleSuffix: "Contact Support",
    h2: "Support and escalation options",
    descriptionSuffix: "Find recommended support flow for tracking issues and missing package cases."
  }
] as const;

export type LongTailIntent = (typeof longTailIntents)[number];

export const longTailIntentSlugs = longTailIntents.map((intent) => intent.slug);

export function getLongTailIntent(slug: string) {
  return longTailIntents.find((intent) => intent.slug === slug);
}
