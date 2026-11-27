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
      { href: "/speedx-out-for-delivery", label: "SpeedX out for delivery pillar" },
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
      "Is it normal when SpeedX stays out for delivery overnight? Learn when an unfinished route is expected and when to contact the seller or support.",
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
          "Refresh tracking on a free SpeedX tracker, check porch, lockers, and reception again, then open seller support only if nothing changed and no delivery notice exists.",
          "Save a screenshot of the overnight out-for-delivery timestamp before you escalate so support can see the exact window."
        ],
        bullets: [
          "Recheck tracking after local morning depot hours",
          "Confirm gate codes and phone number in the seller app",
          "Compare the seller ETA with the last scan time",
          "Escalate with screenshots if still unchanged after the next business morning"
        ]
      },
      {
        heading: "When overnight out for delivery is not normal",
        paragraphs: [
          "If status stays out for delivery with no new scan for more than one full local delivery day after the seller ETA, treat it as a failed final-mile attempt and follow the package-not-delivered checklist.",
          "Repeated overnight holds after two attempts raise return-to-sender risk, so update access notes quickly."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/speedx-out-for-delivery", label: "SpeedX out for delivery meaning" },
      { href: "/speedx-package-not-delivered", label: "SpeedX package not delivered checklist" },
      { href: "/topics/out-for-delivery", label: "Out for delivery topic hub" },
      { href: "/carriers/speedx/status", label: "SpeedX tracking status meanings" },
      { href: "/track-package", label: "Free SpeedX tracking lookup" }
    ]
  },

  // --- Delivery hours cluster ---
  {
    slug: "evening-delivery",
    clusterSlug: "delivery-hours",
    title: "Does SpeedX Deliver in the Evening? Late Delivery Guide",
    h1: "Does SpeedX Deliver in the Evening?",
    metaDescription:
      "Does SpeedX deliver in the evening? Yes on many routes. See the 6am–10pm first-attempt window, out-for-delivery timing, and when to wait until morning.",
    summary:
      "Yes — SpeedX can deliver in the evening. SpeedX’s parcel services agreement describes a first delivery-attempt window of 6am–10pm local time, and busy urban routes often finish late.",
    question: "Does SpeedX deliver in the evening?",
    answer:
      "Yes. Evening SpeedX delivery is common on dense city routes and peak days. SpeedX describes a first-attempt window of 6am–10pm local time after it receives the package — that is a contractual window, not a guaranteed clock time for every address.",
    sections: [
      {
        heading: "Official evening delivery window context",
        paragraphs: [
          "SpeedX’s parcel services agreement says couriers aim for a first delivery attempt between 6:00 a.m. and 10:00 p.m. local time on the next business day after SpeedX receives the parcel.",
          "That published window explains why an out-for-delivery scan after mid-afternoon can still end in a late evening drop."
        ],
        bullets: [
          "First-attempt window cited by SpeedX: 6am–10pm local",
          "Not a guarantee that every stop happens early",
          "Route order decides morning vs evening arrival"
        ]
      },
      {
        heading: "When evening delivery is most likely",
        paragraphs: [
          "Peak retail seasons, dense apartment routes, delayed depot departures, and unfinished morning stops all push SpeedX deliveries later.",
          "If tracking shows out for delivery after mid-afternoon, stay available through evening before treating the attempt as failed."
        ]
      },
      {
        heading: "What to do if evening comes and nothing arrives",
        paragraphs: [
          "Check porch, side doors, lockers, and reception. Recheck tracking the next morning. Many unfinished routes retry the next local delivery day.",
          "Escalate with screenshots only after the local evening window plus a next-morning check, or sooner if the seller ETA already passed."
        ],
        bullets: [
          "Verify delivery notes and gate access",
          "Screenshot the out-for-delivery timestamp",
          "Use the free SpeedX tracker before contacting support",
          "Contact the seller first for marketplace orders"
        ]
      }
    ],
    relatedAnchors: [
      { href: "/guides/speedx-delivery-hours", label: "How late does SpeedX deliver?" },
      { href: "/topics/delivery-hours", label: "SpeedX delivery hours hub" },
      { href: "/speedx-out-for-delivery", label: "SpeedX out for delivery meaning" },
      { href: "/topics/delivery-hours/stop-time-myths", label: "What time does SpeedX stop delivering?" },
      { href: "/track-package", label: "Free SpeedX tracking lookup" }
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
      { href: "/does-speedx-deliver-on-sunday", label: "Does SpeedX deliver on Sunday?" },
      { href: "/carriers/speedx/delivery-time", label: "How long SpeedX takes to deliver" }
    ]
  },
  {
    slug: "sunday-delivery-odds",
    clusterSlug: "delivery-hours",
    title: "Does SpeedX Deliver on Sundays? Odds & Tips",
    h1: "Does SpeedX Deliver on Sundays?",
    metaDescription:
      "Does SpeedX deliver on Sundays? Sometimes on metro routes. Learn Saturday vs Sunday odds and when to recheck tracking.",
    summary:
      "Sunday SpeedX delivery is possible but less consistent than Saturday. Quiet Sunday scans are common—recheck Monday before escalating.",
    question: "Does SpeedX deliver on Sundays?",
    answer:
      "Sometimes. Busy city routes may run Sunday deliveries, but many areas wait until Monday. If tracking is quiet on Sunday, check again Monday morning.",
    sections: [
      {
        heading: "How to read Sunday tracking",
        paragraphs: [
          "An out-for-delivery scan on Sunday still usually means a same-day attempt. No new scans on Sunday can simply mean the depot is not running your route that day.",
          "Marketplace ETAs that say “Sunday” are estimates—carrier route staffing is the real constraint."
        ],
        bullets: [
          "Saturday: more common weekend delivery day",
          "Sunday: route-dependent, less consistent",
          "Escalate after Monday morning if ETA already passed"
        ]
      }
    ],
    relatedAnchors: [
      { href: "/does-speedx-deliver-on-sunday", label: "Full Sunday delivery guide" },
      { href: "/topics/delivery-hours", label: "Delivery hours topic hub" },
      { href: "/guides/speedx-delivery-hours", label: "How late does SpeedX deliver?" }
    ]
  },
  {
    slug: "destination-facility-meaning",
    clusterSlug: "speedx-tracking",
    title: "SpeedX Arrival at Destination Facility Meaning",
    h1: "What Does Arrival at Destination Facility Mean on SpeedX?",
    metaDescription:
      "SpeedX shows arrival at destination facility or in transit to destination facility? Learn what it means and when final delivery usually follows.",
    summary:
      "Destination facility scans mean the parcel reached the local hub near you. Final-mile delivery often follows within one to a few business days.",
    question: "What does arrival at destination facility mean for SpeedX?",
    answer:
      "It means your package reached the local SpeedX (or partner) hub that serves your delivery area. Out for delivery usually comes next, often within 1–3 business days depending on volume.",
    sections: [
      {
        heading: "In transit to destination facility",
        paragraphs: [
          "This status means the shipment is moving toward your local hub. Long quiet gaps can still be normal during linehaul.",
          "Escalate if the seller ETA has already passed and there is no destination arrival for several business days."
        ]
      },
      {
        heading: "After arrival at destination facility",
        paragraphs: [
          "Sorting and route assignment happen next. Watch for out for delivery, then prepare for same-day or next-day drop-off."
        ],
        bullets: [
          "Confirm address and gate access notes",
          "Watch for out-for-delivery the next local delivery day",
          "Use the free tracker after each new scan"
        ]
      }
    ],
    relatedAnchors: [
      { href: "/blog/speedx-arrived-at-facility-meaning", label: "Arrived at facility guide" },
      { href: "/topics/speedx-tracking", label: "SpeedX tracking hub" },
      { href: "/topics/out-for-delivery", label: "Out for delivery meaning" }
    ]
  },
  {
    slug: "stop-time-myths",
    clusterSlug: "delivery-hours",
    title: "What Time Does SpeedX Stop Delivering? Cutoff Explained",
    h1: "What Time Does SpeedX Stop Delivering?",
    metaDescription:
      "What time does SpeedX stop delivering? There is no single cutoff. Use the 6am–10pm first-attempt window, your out-for-delivery scan, and seller ETA.",
    summary:
      "SpeedX does not publish one stop-delivering time for every address. Drivers finish when the route ends — often within a 6am–10pm first-attempt window SpeedX cites for next-business-day attempts.",
    question: "What time does SpeedX stop delivering?",
    answer:
      "There is no universal public stop time for every SpeedX route. SpeedX cites a first delivery-attempt window of 6am–10pm local time after it receives a package, but actual last stops depend on route load, traffic, and local operations.",
    sections: [
      {
        heading: "The published window vs a hard cutoff",
        paragraphs: [
          "Shoppers search for “what time does SpeedX stop delivering” hoping for one national clock. Last-mile networks do not work that way.",
          "SpeedX’s parcel services agreement describes a 6:00 a.m. to 10:00 p.m. local first-attempt window for the next business day after SpeedX receives the parcel. Treat that as a planning window, not a promise your stop happens at a fixed hour."
        ],
        bullets: [
          "No single stop-delivering time for every ZIP code",
          "Published first-attempt window: 6am–10pm local",
          "Weekend windows from SpeedX support: Saturday 8am–8pm; Sunday 8am–8pm in select areas"
        ]
      },
      {
        heading: "How to read your own stop window",
        paragraphs: [
          "Use three signals together: the latest out-for-delivery scan, the seller ETA, and whether your area typically gets evening routes.",
          "If status is still out for delivery after local evening hours, wait for a morning update before escalating unless the seller ETA already passed."
        ]
      },
      {
        heading: "When to escalate a late stop",
        paragraphs: [
          "Escalate after the local delivery day ends and the next morning still shows no attempt, exception, or delivered scan.",
          "Include tracking screenshots, destination ZIP, and a one-line timeline when you contact the seller or SpeedX support paths."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/guides/speedx-delivery-hours", label: "How late does SpeedX deliver?" },
      { href: "/topics/delivery-hours/evening-delivery", label: "Does SpeedX deliver in the evening?" },
      { href: "/does-speedx-deliver-on-sunday", label: "Does SpeedX deliver on Sunday?" },
      { href: "/speedx-out-for-delivery", label: "SpeedX out for delivery meaning" },
      { href: "/faq", label: "SpeedX tracking FAQ" }
    ]
  },

  // --- SpeedX tracking / SPXCN cluster ---
  {
    slug: "spxcn-first-scan",
    clusterSlug: "speedx-tracking",
    title: "How Long Until SPXCN Shows First Scan?",
    h1: "How Long Until an SPXCN Number Shows the First Scan?",
    metaDescription:
      "How long before SPXCN tracking updates? Learn normal first-scan windows after label creation and when a SpeedX label may actually be stuck in place.",
    summary:
      "SPXCN numbers can sit on label created for 24-48 hours before the first movement scan, especially on cross-border marketplace orders.",
    question: "How long does SPXCN take to show the first tracking scan?",
    answer:
      "Often 24 to 48 hours after label creation. Longer waits can happen before pickup or export handoff. Escalate if nothing appears for several days past the seller ship promise.",
    sections: [
      {
        heading: "Normal SPXCN first-scan behavior",
        paragraphs: [
          "Sellers frequently create labels before the carrier picks up the parcel. The number is valid, but public scans start after intake.",
          "Cross-border SPXCN shipments can also sit quiet during export departure before the first movement event appears."
        ],
        bullets: [
          "0-24 hours: common seller processing window",
          "24-48 hours: normal first-scan delay on many marketplace orders",
          "48-72 hours: confirm seller handoff proof",
          "72+ hours with a ship confirmation: escalate for corrected tracking"
        ]
      },
      {
        heading: "How to verify the SPXCN code",
        paragraphs: [
          "Copy the full SPXCN string without spaces. Do not paste the Shein or marketplace order ID into the tracker.",
          "If lookup fails immediately, wait for seller sync, then retry on the free SpeedX tracking page."
        ]
      },
      {
        heading: "When to escalate",
        paragraphs: [
          "If the seller says the item shipped and tracking remains blank beyond 48-72 hours, request handoff proof and a corrected tracking number.",
          "Include screenshots from the seller app and the tracker so support can compare both timelines."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/speedx-tracking", label: "SpeedX tracking and SPXCN hub" },
      { href: "/guides/spxcn-tracking-number-meaning", label: "SPXCN tracking number meaning" },
      { href: "/blog/speedx-label-created-no-movement", label: "Label created but no movement" },
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/speedx-tracking-number", label: "SpeedX tracking number guide" }
    ]
  },
  {
    slug: "tracking-not-updating-48-hours",
    clusterSlug: "speedx-tracking",
    title: "SpeedX Tracking Not Updating for 48 Hours — What To Do",
    h1: "SpeedX Tracking Not Updating for 48 Hours: What It Means",
    metaDescription:
      "SpeedX tracking not updating for 48 hours? See when a 24–48 hour scan gap is normal, when to escalate, and how to track SPX/SPXCN free.",
    summary:
      "A 24–48 hour SpeedX scan gap is often normal during linehaul, customs, or weekend posting. Use seller ETA context before opening a support case.",
    question: "Is it normal if SpeedX tracking does not update for 48 hours?",
    answer:
      "Yes, especially on cross-border SPXCN routes. A quiet 24–48 hour window during linehaul or customs is common. Escalate sooner if the delivery promise already passed or the status shows an exception.",
    sections: [
      {
        heading: "Normal reasons for a 48-hour gap",
        paragraphs: [
          "Long-haul transfers, weekend posting delays, and customs review can suppress public events without stopping the parcel.",
          "SpeedX support guidance also notes that label-created shipments may not show movement until SpeedX has physically received the package."
        ],
        bullets: [
          "Linehaul between hubs",
          "Customs documentation review",
          "Weekend or holiday scan lag",
          "Seller label created before carrier intake"
        ]
      },
      {
        heading: "48-hour action timeline",
        paragraphs: [
          "Hour 0–24: confirm the full SPX/SPXCN code and recheck the free tracker.",
          "Hour 24–48: compare the last scan with the seller ETA. If still inside the promise window, wait for the next business scan.",
          "After 48 hours with a missed ETA: open a seller case with screenshots, order ID, and destination ZIP."
        ]
      },
      {
        heading: "What to send when you escalate",
        paragraphs: [
          "Include the tracking number, last scan timestamp, seller ETA, and one clear request such as locate package or confirm next scan.",
          "Marketplace shoppers should contact the seller first; use carrier support after handoff is confirmed."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/blog/speedx-tracking-not-updating", label: "SpeedX tracking not updating — 9 fixes" },
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/guides/package-not-updating", label: "Package not updating checklist" },
      { href: "/topics/speedx-tracking", label: "SpeedX tracking hub" },
      { href: "/speedx-contact-support", label: "SpeedX customer service" }
    ]
  },
  {
    slug: "shein-speedx-number",
    clusterSlug: "speedx-tracking",
    title: "Where to Find Shein SpeedX Tracking Number",
    h1: "Where to Find Your Shein SpeedX Tracking Number",
    metaDescription:
      "Find your Shein SpeedX tracking number in the app or shipping email, then paste the full SPX or SPXCN code into the free tracker on this site.",
    summary:
      "Shein usually shows the SpeedX tracking number on the order details page and shipping email once the parcel is handed to the carrier.",
    question: "Where do I find the SpeedX tracking number for a Shein order?",
    answer:
      "Open the Shein order details or shipping confirmation email after handoff. Copy the full SPX or SPXCN code into the free tracker.",
    sections: [
      {
        heading: "Where Shein shows the number",
        paragraphs: [
          "Look under Order Details → Shipping / Logistics, or in the shipped confirmation email. Avoid using the order ID as a tracking number.",
          "Shein may show a partial code first. Wait for the full SPX or SPXCN string before escalating a “number not found” error."
        ],
        bullets: [
          "Order details shipping / logistics section",
          "Shipped confirmation email",
          "Carrier tracking field (not the Shein order ID)"
        ]
      },
      {
        heading: "After you copy the code",
        paragraphs: [
          "Paste it into the free SpeedX tracker without spaces. If the number is invalid, wait for carrier activation or ask Shein support for the corrected code.",
          "Once scans appear, read the full timeline—export, customs, destination facility, out for delivery, then delivered—instead of judging only the latest label."
        ]
      },
      {
        heading: "Who to contact if the number never appears",
        paragraphs: [
          "Contact Shein first for missing or wrong tracking numbers. Use SpeedX support only after the seller confirms the parcel was handed to the carrier."
        ]
      }
    ],
    relatedAnchors: [
      { href: "/topics/speedx-tracking", label: "SpeedX tracking and SPXCN hub" },
      { href: "/carriers/speedx/shein", label: "Shein SpeedX tracking guide" },
      { href: "/blog/shein-speedx-tracking-guide", label: "Shein SpeedX tracking article" },
      { href: "/track-package", label: "Free SpeedX package tracker" },
      { href: "/speedx-tracking-number", label: "SpeedX tracking number guide" }
    ]
  }
];

export function getClusterQaArticles(clusterSlug: string) {
  return clusterQaArticles.filter((article) => article.clusterSlug === clusterSlug);
}

export function getClusterQaArticle(clusterSlug: string, slug: string) {
  return clusterQaArticles.find((article) => article.clusterSlug === clusterSlug && article.slug === slug);
}
