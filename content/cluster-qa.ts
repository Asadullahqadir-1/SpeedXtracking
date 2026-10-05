export type ClusterQaArticle = {
  slug: string;
  clusterSlug: "out-for-delivery" | "delivery-hours" | "speedx-tracking";
  title: string;
  h1: string;
  metaDescription: string;
  summary: string;
  question: string;
  answer: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  relatedAnchors: Array<{ href: string; label: string }>;
};

export const clusterQaArticles: ClusterQaArticle[] = [
  // --- Out for delivery cluster ---
  {
    slug: "same-day-delivery-odds",
    clusterSlug: "out-for-delivery",
    title: "Does SpeedX Out for Delivery Mean Same-Day Arrival?",
    h1: "Does SpeedX Out for Delivery Mean Same-Day Arrival?",
    metaDescription:
      "Does SpeedX out for delivery mean same-day delivery? Learn typical timing, evening routes, and when to wait until tomorrow.",
    summary:
      "Out for delivery usually means same-day intent, not a guaranteed clock time. Route order and overflow can push arrival later or to the next day.",
    question: "Does SpeedX out for delivery mean my package arrives today?",
    answer:
      "Usually yes for that local delivery day, but traffic, stop order, and unfinished routes can delay the drop until evening or the next attempt.",
    sections: [
      {
        heading: "What same-day intent really means",
        paragraphs: [
          "When SpeedX shows out for delivery, the parcel is on a driver route planned for that local day. It is not a promise that the stop happens before noon.",
          "Dense routes often finish late. An afternoon or evening drop can still count as a successful same-day out-for-delivery attempt."
        ]
      },
      {
        heading: "When same-day arrival becomes unlikely",
        paragraphs: [
          "If the status is unchanged after local evening hours, the driver may return with remaining parcels and retry next day.",
          "Weather, gated access, missing phone contact, and peak retail volume raise the chance of a next-day attempt."
        ],
        bullets: [
          "Recheck tracking the next morning",
          "Confirm gate codes and delivery notes",
          "Save a screenshot before contacting the seller"
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/out-for-delivery", label: "SpeedX out for delivery meaning hub" },
      { href: "/blog/speedx-out-for-delivery-but-not-delivered", label: "Out for delivery but not delivered checklist" },
      { href: "/topics/delivery-hours", label: "How late does SpeedX deliver?" }
    ]
  },
  {
    slug: "next-steps-if-missing",
    clusterSlug: "out-for-delivery",
    title: "SpeedX Out for Delivery But Missing — Next Steps",
    h1: "SpeedX Out for Delivery But Missing: Exact Next Steps",
    metaDescription:
      "SpeedX out for delivery but package missing? Follow this same-day and next-morning checklist before opening a claim.",
    summary:
      "If SpeedX is out for delivery but you cannot find the parcel, search drop points first, wait through the local day, then escalate with screenshots.",
    question: "What should I do if SpeedX is out for delivery but the package is missing?",
    answer:
      "Check porch, lockers, side doors, and neighbors, wait until the end of the local delivery day, then contact the seller with tracking screenshots if it is still missing the next morning.",
    sections: [
      {
        heading: "Same-day search checklist",
        paragraphs: [
          "Before assuming a failed delivery, check every location a driver might use: porch, garage, parcel locker, reception, and side entrance."
        ],
        bullets: [
          "Mailbox and parcel locker",
          "Building desk or concierge",
          "Neighbors and household members",
          "App delivery photo if available"
        ]
      },
      {
        heading: "Escalation timing",
        paragraphs: [
          "Escalate after the local delivery day and a next-morning recheck. Contact the marketplace seller first for Shein or similar orders.",
          "Include tracking number, full address, and a one-line timeline so support can act faster."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/out-for-delivery", label: "SpeedX out for delivery hub" },
      { href: "/guides/delivered-not-received", label: "Delivered but not received guide" },
      { href: "/resources/shipping-delay-checklist", label: "Shipping delay evidence checklist" }
    ]
  },
  {
    slug: "scan-stuck-overnight",
    clusterSlug: "out-for-delivery",
    title: "SpeedX Out for Delivery Overnight — Is It Normal?",
    h1: "SpeedX Out for Delivery Overnight: Is It Normal?",
    metaDescription:
      "Is it normal when SpeedX stays out for delivery overnight? Learn when to wait and when to contact support.",
    summary:
      "An overnight out-for-delivery status is common on unfinished routes. Recheck in the morning before treating it as a lost package.",
    question: "Is it normal if SpeedX stays out for delivery overnight?",
    answer:
      "Yes. Many routes carry remaining stops to the next day. Wait for a morning update before escalating unless the seller ETA was already missed by more than a day.",
    sections: [
      {
        heading: "Why overnight status happens",
        paragraphs: [
          "Drivers may end the shift with parcels still on the van. Systems often keep the out-for-delivery label until the next scan posts.",
          "That pause looks alarming in the app, but it is usually operational rather than a lost shipment."
        ]
      },
      {
        heading: "What to do in the morning",
        paragraphs: [
          "Refresh tracking, check drop points again, and only then open seller support if nothing changed and no delivery notice exists."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/out-for-delivery", label: "Out for delivery meaning and fixes" },
      { href: "/carriers/speedx/status", label: "SpeedX tracking status meanings" },
      { href: "/track-package", label: "Track SpeedX package free" }
    ]
  },

  // --- Delivery hours cluster ---
  {
    slug: "evening-delivery",
    clusterSlug: "delivery-hours",
    title: "Does SpeedX Deliver in the Evening?",
    h1: "Does SpeedX Deliver in the Evening?",
    metaDescription:
      "Does SpeedX deliver in the evening? See when late deliveries happen and what out for delivery timing usually means.",
    summary:
      "Yes — SpeedX can deliver in the evening on busy urban routes. There is no fixed national cutoff, so use your scan timeline as the guide.",
    question: "Does SpeedX deliver in the evening?",
    answer:
      "Yes. Evening delivery is common during high-volume periods and on dense city routes. Suburban routes may finish earlier.",
    sections: [
      {
        heading: "When evening delivery is likely",
        paragraphs: [
          "Peak retail seasons, dense apartment routes, and delayed depot departures all push stop times later.",
          "If your package shows out for delivery after mid-afternoon, an evening arrival is still normal."
        ]
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "Add clear delivery instructions and a reachable phone number so late attempts succeed on the first try."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/delivery-hours", label: "How late does SpeedX deliver hub" },
      { href: "/guides/speedx-delivery-hours", label: "SpeedX delivery hours checklist" },
      { href: "/topics/out-for-delivery", label: "SpeedX out for delivery meaning" }
    ]
  },
  {
    slug: "weekend-delivery-hours",
    clusterSlug: "delivery-hours",
    title: "Does SpeedX Deliver on Weekends?",
    h1: "Does SpeedX Deliver on Weekends?",
    metaDescription:
      "Does SpeedX deliver on Saturday or Sunday? Learn weekend route patterns and how tracking updates behave.",
    summary:
      "Weekend delivery can happen on some SpeedX routes, especially in high-volume metros. Scan posting may lag on Sundays.",
    question: "Does SpeedX deliver on weekends?",
    answer:
      "Sometimes. Saturday routes are more common than Sunday in many areas, and public scans can post later over the weekend.",
    sections: [
      {
        heading: "What weekend tracking looks like",
        paragraphs: [
          "A quiet Sunday scan gap can still be normal. Recheck Monday morning before escalating a weekend delay."
        ],
        bullets: [
          "Saturday delivery: possible on busy routes",
          "Sunday delivery: less consistent",
          "Status posting may lag until weekday systems catch up"
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/delivery-hours", label: "SpeedX delivery hours hub" },
      { href: "/speedx-weekend-delivery", label: "SpeedX weekend delivery guide" },
      { href: "/carriers/speedx/delivery-time", label: "How long SpeedX takes to deliver" }
    ]
  },
  {
    slug: "stop-time-myths",
    clusterSlug: "delivery-hours",
    title: "What Time Does SpeedX Stop Delivering?",
    h1: "What Time Does SpeedX Stop Delivering?",
    metaDescription:
      "What time does SpeedX stop delivering? There is no single cutoff — use route context and your out-for-delivery scan instead.",
    summary:
      "SpeedX does not publish one stop-delivering time for every address. Drivers finish when the route ends, which can be evening.",
    question: "What time does SpeedX stop delivering?",
    answer:
      "There is no universal public stop time. Local route load, traffic, and depot planning decide when the last stop happens.",
    sections: [
      {
        heading: "Why fixed cutoffs mislead shoppers",
        paragraphs: [
          "People search for a single national stop time, but last-mile networks do not operate that way.",
          "Treat the seller ETA and latest scan as the practical window, then escalate only after that window plus a next-morning check."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/delivery-hours", label: "How late does SpeedX deliver?" },
      { href: "/guides/speedx-delivery-hours", label: "SpeedX delivery hours and stop times" },
      { href: "/faq", label: "SpeedX tracking FAQ answers" }
    ]
  },

  // --- SpeedX tracking / SPXCN cluster ---
  {
    slug: "spxcn-first-scan",
    clusterSlug: "speedx-tracking",
    title: "How Long Until SPXCN Shows First Scan?",
    h1: "How Long Until an SPXCN Number Shows the First Scan?",
    metaDescription:
      "How long before SPXCN tracking updates? Learn normal first-scan windows and when a SpeedX label is stuck.",
    summary:
      "SPXCN numbers can sit on label created for 24-48 hours before the first movement scan, especially on cross-border marketplace orders.",
    question: "How long does SPXCN take to show the first tracking scan?",
    answer:
      "Often 24 to 48 hours after label creation. Longer waits can happen before pickup or export handoff. Escalate if nothing appears for several days past the seller ship promise.",
    sections: [
      {
        heading: "Normal SPXCN first-scan behavior",
        paragraphs: [
          "Sellers frequently create labels before the carrier picks up the parcel. The number is valid, but public scans start after intake."
        ]
      },
      {
        heading: "When to escalate",
        paragraphs: [
          "If the seller says the item shipped and tracking remains blank beyond 48-72 hours, request handoff proof and a corrected tracking number."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/speedx-tracking", label: "SpeedX tracking and SPXCN hub" },
      { href: "/guides/spxcn-tracking-number-meaning", label: "SPXCN tracking number meaning" },
      { href: "/blog/speedx-label-created-no-movement", label: "Label created but no movement" }
    ]
  },
  {
    slug: "tracking-not-updating-48-hours",
    clusterSlug: "speedx-tracking",
    title: "SpeedX Tracking Not Updating for 48 Hours",
    h1: "SpeedX Tracking Not Updating for 48 Hours: What It Means",
    metaDescription:
      "SpeedX tracking not updating for 48 hours? Learn when scan gaps are normal and when to contact the seller.",
    summary:
      "A 24-48 hour SpeedX scan gap is often normal during linehaul or customs. Use ETA context before escalating.",
    question: "Is it normal if SpeedX tracking does not update for 48 hours?",
    answer:
      "Yes, especially on cross-border SPXCN routes. Escalate sooner if the delivery promise already passed or the status shows an exception.",
    sections: [
      {
        heading: "Normal reasons for a 48-hour gap",
        paragraphs: [
          "Long-haul transfers, weekend posting delays, and customs review can suppress public events without stopping the parcel."
        ],
        bullets: ["Linehaul between hubs", "Customs documentation review", "Weekend or holiday scan lag"]
      },
      {
        heading: "Action timeline",
        paragraphs: [
          "Recheck after 48 hours, compare against the seller ETA, then open a merchant case with screenshots if the window is missed."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/speedx-tracking", label: "SpeedX tracking hub" },
      { href: "/blog/speedx-tracking-not-updating", label: "SpeedX tracking not updating fixes" },
      { href: "/guides/package-not-updating", label: "Why tracking is not updating" }
    ]
  },
  {
    slug: "shein-speedx-number",
    clusterSlug: "speedx-tracking",
    title: "Where to Find Shein SpeedX Tracking Number",
    h1: "Where to Find Your Shein SpeedX Tracking Number",
    metaDescription:
      "Find your Shein SpeedX tracking number in the app or email, then track SPX/SPXCN status for free.",
    summary:
      "Shein usually shows the SpeedX tracking number on the order details page and shipping email once the parcel is handed to the carrier.",
    question: "Where do I find the SpeedX tracking number for a Shein order?",
    answer:
      "Open the Shein order details or shipping confirmation email after handoff. Copy the full SPX or SPXCN code into the free tracker.",
    sections: [
      {
        heading: "Where Shein shows the number",
        paragraphs: [
          "Look under Order Details → Shipping / Logistics, or in the shipped confirmation email. Avoid using the order ID as a tracking number."
        ]
      },
      {
        heading: "After you copy the code",
        paragraphs: [
          "Paste it into SpeedXTracking without spaces. If the number is invalid, wait for carrier activation or ask Shein support for the corrected code."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/speedx-tracking", label: "SpeedX tracking and SPXCN hub" },
      { href: "/carriers/speedx/shein", label: "Shein SpeedX tracking guide" },
      { href: "/track-package", label: "Free SpeedX package tracker" }
    ]
  }
];

export function getClusterQaArticles(clusterSlug: string) {
  return clusterQaArticles.filter((article) => article.clusterSlug === clusterSlug);
}

export function getClusterQaArticle(clusterSlug: string, slug: string) {
  return clusterQaArticles.find((article) => article.clusterSlug === clusterSlug && article.slug === slug);
}
