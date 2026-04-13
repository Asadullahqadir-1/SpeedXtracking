type PageCategory = "issue" | "contact" | "shein" | "city" | "format";

type BasePage = {
  slug: string;
  primaryKeyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  category: PageCategory;
  problemStatement: string;
  actionPlan: string[];
};

const issuePages: BasePage[] = [
  {
    slug: "speedx-tracking-not-updating",
    primaryKeyword: "SpeedX tracking not updating",
    title: "SpeedX Tracking Not Updating: Fix Delayed Scan Updates Fast",
    metaDescription:
      "SpeedX tracking not updating? Learn why scans pause, how long to wait, and what exact steps to take before escalating to support.",
    h1: "SpeedX Tracking Not Updating: What To Do",
    category: "issue",
    problemStatement: "Your SpeedX timeline has stalled and you need to know whether this is normal or a real exception.",
    actionPlan: [
      "Recheck after 12-24 hours to account for batch scan posting.",
      "Compare latest scan with route stage and promised ETA.",
      "Document screenshots before contacting seller and carrier support.",
      "Escalate if no movement appears for 5+ days."
    ]
  },
  {
    slug: "speedx-delivered-but-not-received",
    primaryKeyword: "SpeedX delivered but not received",
    title: "SpeedX Delivered But Not Received: Recovery Checklist",
    metaDescription:
      "SpeedX says delivered but package is missing? Follow this step-by-step checklist to locate your parcel and file a strong claim.",
    h1: "SpeedX Delivered But Not Received",
    category: "issue",
    problemStatement: "Your tracking shows delivered but the parcel is not at your door.",
    actionPlan: [
      "Check all drop zones, mailbox clusters, and side entrances.",
      "Ask neighbors, reception desk, and household members.",
      "Wait up to 24 hours for delayed final-mile sync.",
      "Request proof of delivery and open a seller claim."
    ]
  },
  {
    slug: "speedx-package-stuck-in-transit",
    primaryKeyword: "SpeedX package stuck in transit",
    title: "SpeedX Package Stuck In Transit: Practical Fixes",
    metaDescription:
      "See why a SpeedX package can remain in transit and how to decide if the delay is normal linehaul movement or a shipment exception.",
    h1: "SpeedX Package Stuck In Transit",
    category: "issue",
    problemStatement: "A long in-transit window can feel like no movement even when the parcel is still progressing.",
    actionPlan: [
      "Validate route type (domestic vs cross-border).",
      "Check weather and holiday impacts in origin and destination regions.",
      "Use a 48-hour watch window for linehaul segments.",
      "Escalate with timestamped evidence after the ETA window passes."
    ]
  },
  {
    slug: "speedx-out-for-delivery-but-not-delivered",
    primaryKeyword: "SpeedX out for delivery but not delivered",
    title: "SpeedX Out For Delivery But Not Delivered: Next Steps",
    metaDescription:
      "If your SpeedX package is out for delivery but did not arrive, use this escalation flow to avoid missed scans and failed attempts.",
    h1: "SpeedX Out For Delivery But Not Delivered",
    category: "issue",
    problemStatement: "Out-for-delivery does not always guarantee same-day completion.",
    actionPlan: [
      "Recheck by end of day and next morning.",
      "Confirm address and delivery instructions are complete.",
      "Prepare order ID and tracking screenshots.",
      "Contact merchant first, then carrier support."
    ]
  },
  {
    slug: "speedx-delivery-exception",
    primaryKeyword: "SpeedX delivery exception",
    title: "SpeedX Delivery Exception Meaning And How To Fix It",
    metaDescription:
      "Understand SpeedX delivery exception messages and the fastest way to resolve address, weather, customs, or operational hold issues.",
    h1: "SpeedX Delivery Exception",
    category: "issue",
    problemStatement: "Exception scans indicate a temporary problem that requires verification or intervention.",
    actionPlan: [
      "Identify whether the exception is address, operational, or customs related.",
      "Correct destination details if needed.",
      "Track each new event after correction.",
      "Escalate to seller support if no follow-up scan appears."
    ]
  },
  {
    slug: "speedx-label-created-no-update",
    primaryKeyword: "SpeedX label created no update",
    title: "SpeedX Label Created But No Update: Is It Normal?",
    metaDescription:
      "SpeedX label created with no movement? Learn normal pickup delays and when a pre-transit shipment should be escalated.",
    h1: "SpeedX Label Created But No Update",
    category: "issue",
    problemStatement: "The merchant created a label, but carrier pickup and first scan have not appeared yet.",
    actionPlan: [
      "Wait 24-48 hours for first scan.",
      "Check seller dispatch confirmation.",
      "Confirm the tracking number is copied correctly.",
      "Request merchant handoff proof if delay continues."
    ]
  },
  {
    slug: "speedx-missed-delivery-attempt",
    primaryKeyword: "SpeedX missed delivery attempt",
    title: "SpeedX Missed Delivery Attempt: Re-Delivery Options",
    metaDescription:
      "Missed a SpeedX delivery attempt? Use this guide to schedule re-delivery, update instructions, and avoid repeat failures.",
    h1: "SpeedX Missed Delivery Attempt",
    category: "issue",
    problemStatement: "A failed attempt can delay delivery unless instructions and contact details are updated quickly.",
    actionPlan: [
      "Check if a second attempt is automatic.",
      "Submit clear drop-off instructions.",
      "Confirm contact phone is reachable.",
      "Request pickup or alternate delivery point if available."
    ]
  },
  {
    slug: "speedx-weekend-delivery",
    primaryKeyword: "SpeedX weekend delivery",
    title: "SpeedX Weekend Delivery: Saturday And Sunday Updates",
    metaDescription:
      "Does SpeedX deliver on weekends? See how Saturday and Sunday routes work, and how status updates behave outside business days.",
    h1: "SpeedX Weekend Delivery",
    category: "issue",
    problemStatement: "Weekend operations can vary by route density, local depot staffing, and peak demand.",
    actionPlan: [
      "Check local route patterns from recent scans.",
      "Watch for delayed status posting on Sundays.",
      "Use weekday escalation if no Monday update appears.",
      "Keep proof of expected delivery promise."
    ]
  },
  {
    slug: "speedx-customs-clearance-delay",
    primaryKeyword: "SpeedX customs clearance delay",
    title: "SpeedX Customs Clearance Delay: What It Means",
    metaDescription:
      "Customs delay on a SpeedX shipment? Understand cross-border checkpoints and how to reduce clearance-related hold times.",
    h1: "SpeedX Customs Clearance Delay",
    category: "issue",
    problemStatement: "Cross-border parcels may pause while customs verifies documentation and shipment value.",
    actionPlan: [
      "Check if customs requested additional information.",
      "Confirm order invoice details with seller.",
      "Track destination-country handoff events.",
      "Escalate if no customs release appears after several business days."
    ]
  },
  {
    slug: "speedx-no-movement-for-5-days",
    primaryKeyword: "SpeedX no movement for 5 days",
    title: "SpeedX No Movement For 5 Days: Escalation Guide",
    metaDescription:
      "No SpeedX tracking movement for 5 days? Follow this timeline to collect evidence and escalate effectively.",
    h1: "SpeedX No Movement For 5 Days",
    category: "issue",
    problemStatement: "Extended scan silence often means linehaul lag, exception handling, or stalled handoff.",
    actionPlan: [
      "Log event timestamps and locations.",
      "Validate expected delivery window from seller.",
      "Open a merchant case with complete screenshots.",
      "Escalate to carrier with case ID references."
    ]
  },
  {
    slug: "speedx-lost-package-claim",
    primaryKeyword: "SpeedX lost package claim",
    title: "SpeedX Lost Package Claim: How To File Correctly",
    metaDescription:
      "File a stronger SpeedX lost package claim with complete evidence, timeline notes, and seller-carrier escalation flow.",
    h1: "SpeedX Lost Package Claim",
    category: "issue",
    problemStatement: "A complete claim packet improves reimbursement and replacement outcomes.",
    actionPlan: [
      "Save latest tracking timeline screenshots.",
      "Document order value and missing contents.",
      "Open seller claim before direct carrier escalation.",
      "Request claim reference numbers in writing."
    ]
  },
  {
    slug: "speedx-invalid-tracking-number",
    primaryKeyword: "SpeedX invalid tracking number",
    title: "SpeedX Invalid Tracking Number: Why It Happens",
    metaDescription:
      "Seeing an invalid SpeedX tracking number message? Learn formatting checks and how to verify if your shipment is not yet activated.",
    h1: "SpeedX Invalid Tracking Number",
    category: "issue",
    problemStatement: "Invalid-number errors can come from typos, pre-activation, or wrong carrier assignment.",
    actionPlan: [
      "Paste the full tracking ID without extra spaces.",
      "Confirm the shipment actually uses SpeedX.",
      "Wait for first carrier sync after label creation.",
      "Request corrected tracking details from seller."
    ]
  },
  {
    slug: "speedx-updating-in-batches",
    primaryKeyword: "SpeedX tracking updates in batches",
    title: "SpeedX Tracking Updates In Batches: How To Read Scans",
    metaDescription:
      "SpeedX events appearing all at once? Learn why batch updates happen and how to interpret movement accurately.",
    h1: "SpeedX Tracking Updates In Batches",
    category: "issue",
    problemStatement: "Batch updates can make normal progress look stalled and then suddenly complete.",
    actionPlan: [
      "Read scan timestamps in sequence, not status label only.",
      "Identify long-haul segments with lower scan frequency.",
      "Use ETA ranges instead of same-day assumptions.",
      "Escalate only after the route-level grace window."
    ]
  },
  {
    slug: "speedx-package-returned-to-sender",
    primaryKeyword: "SpeedX returned to sender",
    title: "SpeedX Returned To Sender: Reasons And Recovery",
    metaDescription:
      "SpeedX package returned to sender? Understand why returns happen and how to recover the order quickly.",
    h1: "SpeedX Returned To Sender",
    category: "issue",
    problemStatement: "Return-to-sender status usually indicates address or delivery-attempt resolution failure.",
    actionPlan: [
      "Ask seller for the specific return trigger.",
      "Correct address and phone details.",
      "Request expedited re-shipment if possible.",
      "Track replacement parcel with updated instructions."
    ]
  },
  {
    slug: "speedx-at-facility-too-long",
    primaryKeyword: "SpeedX at facility too long",
    title: "SpeedX At Facility Too Long: What To Do Next",
    metaDescription:
      "If a SpeedX package stays at facility for too long, follow this route-stage checklist to determine if escalation is needed.",
    h1: "SpeedX At Facility Too Long",
    category: "issue",
    problemStatement: "Facility scans can remain unchanged during sort backlogs and transfer waits.",
    actionPlan: [
      "Check whether the facility is origin, transit, or destination.",
      "Monitor for transfer scan within 24-48 hours.",
      "Document any ETA miss.",
      "Raise support request with timeline evidence."
    ]
  }
];

const contactPages: BasePage[] = [
  {
    slug: "speedx-contact-number",
    primaryKeyword: "SpeedX contact number",
    title: "SpeedX Contact Number And Support Options",
    metaDescription:
      "Find SpeedX contact options and the best escalation workflow for tracking delays, missing deliveries, and claims.",
    h1: "SpeedX Contact Number",
    category: "contact",
    problemStatement: "Contacting the right support channel with the right details shortens resolution time.",
    actionPlan: [
      "Prepare tracking number, order ID, and destination ZIP.",
      "Start with seller support for marketplace shipments.",
      "Escalate to official SpeedX support if needed.",
      "Request case ID and follow-up window."
    ]
  },
  {
    slug: "speedx-customer-service",
    primaryKeyword: "SpeedX customer service",
    title: "SpeedX Customer Service: Fast Escalation Workflow",
    metaDescription:
      "Use this SpeedX customer service checklist to escalate delayed scans, delivery exceptions, and lost-package claims.",
    h1: "SpeedX Customer Service",
    category: "contact",
    problemStatement: "Most support delays happen when key shipment details are missing from the first request.",
    actionPlan: [
      "Open support with complete shipment details.",
      "Summarize timeline in three bullet points.",
      "Ask for case owner and expected response time.",
      "Escalate with reference number if no update arrives."
    ]
  },
  {
    slug: "speedx-support-email",
    primaryKeyword: "SpeedX support email",
    title: "SpeedX Support Email: What To Include For Faster Help",
    metaDescription:
      "Contact SpeedX support by email with a complete issue summary, tracking screenshots, and escalation timeline.",
    h1: "SpeedX Support Email",
    category: "contact",
    problemStatement: "A complete email ticket reduces back-and-forth and speeds case handling.",
    actionPlan: [
      "Use clear subject line with tracking number.",
      "Attach latest scan screenshot and order details.",
      "State requested resolution clearly.",
      "Follow up with case ID if no response appears."
    ]
  },
  {
    slug: "speedx-live-agent-help",
    primaryKeyword: "SpeedX live agent help",
    title: "SpeedX Live Agent Help: Escalation Script",
    metaDescription:
      "Need a live SpeedX support agent? Use this script and escalation flow to get faster answers on delayed shipments.",
    h1: "SpeedX Live Agent Help",
    category: "contact",
    problemStatement: "Support chats are most effective when your timeline and requested outcome are concise.",
    actionPlan: [
      "Open with tracking number and last scan time.",
      "Describe issue in one sentence.",
      "Ask for concrete next step and ETA.",
      "Request escalation if ETA already passed."
    ]
  },
  {
    slug: "speedx-claim-support",
    primaryKeyword: "SpeedX claim support",
    title: "SpeedX Claim Support: Missing Package Documentation",
    metaDescription:
      "File a SpeedX claim with complete proof, timeline screenshots, and seller escalation details for faster resolution.",
    h1: "SpeedX Claim Support",
    category: "contact",
    problemStatement: "Claim success depends on complete documentation and accurate delivery timeline evidence.",
    actionPlan: [
      "Gather timeline screenshots and order invoice.",
      "Document delivery location checks.",
      "Open claim through seller and carrier channels.",
      "Store all case IDs and response emails."
    ]
  }
];

const sheinPages: BasePage[] = [
  {
    slug: "speedx-shein-tracking",
    primaryKeyword: "SpeedX Shein tracking",
    title: "SpeedX Shein Tracking: Complete Shipment Guide",
    metaDescription:
      "Track Shein orders shipped with SpeedX, decode statuses, and handle cross-border delays with clear escalation steps.",
    h1: "SpeedX Shein Tracking",
    category: "shein",
    problemStatement: "Shein shipments often involve multiple handoffs, which can make status interpretation difficult.",
    actionPlan: [
      "Copy full tracking number from Shein shipment details.",
      "Identify export, customs, and destination scans.",
      "Allow extra time for cross-border batch updates.",
      "Escalate through Shein order support if ETA is missed."
    ]
  },
  {
    slug: "shein-speedx-delivery-time",
    primaryKeyword: "Shein SpeedX delivery time",
    title: "Shein SpeedX Delivery Time: Realistic ETA Windows",
    metaDescription:
      "Check realistic Shein SpeedX delivery times by route stage, customs processing, and destination region.",
    h1: "Shein SpeedX Delivery Time",
    category: "shein",
    problemStatement: "Marketplace ETA estimates can shift when customs and final-mile capacity change.",
    actionPlan: [
      "Track stage-by-stage events, not only final ETA date.",
      "Watch customs and destination handoff timing.",
      "Use additional buffer during peak seasons.",
      "Escalate to seller when ETA is clearly exceeded."
    ]
  },
  {
    slug: "shein-order-stuck-speedx",
    primaryKeyword: "Shein order stuck SpeedX",
    title: "Shein Order Stuck On SpeedX: Troubleshooting Steps",
    metaDescription:
      "If your Shein package looks stuck on SpeedX, follow this staged troubleshooting flow before raising a claim.",
    h1: "Shein Order Stuck On SpeedX",
    category: "shein",
    problemStatement: "A stalled timeline may be normal in linehaul segments but risky after ETA expiry.",
    actionPlan: [
      "Review latest scan context and route phase.",
      "Compare with historical delivery timing.",
      "Capture screenshots before contacting support.",
      "Open Shein support ticket with complete evidence."
    ]
  },
  {
    slug: "shein-speedx-delivered-not-received",
    primaryKeyword: "Shein SpeedX delivered not received",
    title: "Shein SpeedX Delivered But Not Received: Claim Guide",
    metaDescription:
      "Shein SpeedX order marked delivered but missing? Use this checklist to locate your package and file a valid claim.",
    h1: "Shein SpeedX Delivered But Not Received",
    category: "shein",
    problemStatement: "Delivered-not-received cases need quick local checks and strong claim evidence.",
    actionPlan: [
      "Check nearby delivery points and neighbors.",
      "Wait short scan sync buffer window.",
      "Request delivery proof from seller.",
      "File claim with full case timeline."
    ]
  },
  {
    slug: "shein-speedx-contact-support",
    primaryKeyword: "Shein SpeedX contact support",
    title: "Shein SpeedX Contact Support: Who To Message First",
    metaDescription:
      "For Shein orders handled by SpeedX, use this support routing guide to contact the correct team first.",
    h1: "Shein SpeedX Contact Support",
    category: "shein",
    problemStatement: "Knowing whether to contact seller or carrier first prevents support ping-pong.",
    actionPlan: [
      "Start with Shein order support for purchase-specific issues.",
      "Escalate to SpeedX support for tracking anomalies.",
      "Attach order ID and delivery address details.",
      "Record all support reference numbers."
    ]
  }
];

const cityKeywords = [
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

const cityPages: BasePage[] = cityKeywords.map((citySlug) => {
  const cityName = citySlug
    .split("-")
    .map((token) => (token.toLowerCase() === "dc" ? "DC" : token[0].toUpperCase() + token.slice(1)))
    .join(" ");

  return {
    slug: `track-speedx-${citySlug}`,
    primaryKeyword: `track SpeedX ${cityName}`,
    title: `Track SpeedX ${cityName}: Local Delivery Updates And ETA Help`,
    metaDescription: `Track SpeedX shipments in ${cityName} with practical status guidance, delivery timing expectations, and local escalation tips.`,
    h1: `Track SpeedX In ${cityName}`,
    category: "city",
    problemStatement: `You need clearer expectations for SpeedX deliveries and scan behavior in ${cityName}.`,
    actionPlan: [
      "Monitor destination-hub and out-for-delivery scans.",
      "Expect variability from traffic and route density.",
      "Keep delivery instructions updated for apartment access.",
      "Escalate when route stage stalls past ETA."
    ]
  };
});

const formatPages: BasePage[] = [
  {
    slug: "track-speedx-spxcn-format",
    primaryKeyword: "track SpeedX SPXCN format",
    title: "Track SpeedX SPXCN Format: Meaning, Delays, And Fixes",
    metaDescription:
      "Understand SPXCN SpeedX tracking numbers, common scan delays, and the best escalation timing for cross-border shipments.",
    h1: "Track SpeedX SPXCN Format",
    category: "format",
    problemStatement: "SPXCN tracking often behaves differently due to cross-border handoffs and batch posting.",
    actionPlan: [
      "Verify full SPXCN code from seller details.",
      "Map scans to export, customs, and destination stages.",
      "Use 24-48 hour tolerance for linehaul updates.",
      "Escalate if no movement after several business days."
    ]
  },
  {
    slug: "track-speedx-spxsg-format",
    primaryKeyword: "track SpeedX SPXSG format",
    title: "Track SpeedX SPXSG Format: Tracking Behavior Guide",
    metaDescription:
      "Track SPXSG SpeedX numbers with clearer route-stage interpretation and practical troubleshooting steps for delayed events.",
    h1: "Track SpeedX SPXSG Format",
    category: "format",
    problemStatement: "SPXSG updates may look irregular during handoffs, creating false delay concerns.",
    actionPlan: [
      "Confirm code format and carrier assignment.",
      "Review event timestamps in chronological order.",
      "Allow standard scan-lag windows before escalation.",
      "Escalate with screenshot history if movement stops."
    ]
  },
  {
    slug: "track-speedx-numeric-format",
    primaryKeyword: "track SpeedX numeric tracking number",
    title: "Track SpeedX Numeric Tracking Number: Validation Steps",
    metaDescription:
      "Need to track a numeric SpeedX number? Use this format-check guide to avoid invalid ID errors and pre-activation confusion.",
    h1: "Track SpeedX Numeric Tracking Number",
    category: "format",
    problemStatement: "Numeric-only IDs can be misread as order IDs unless validated against the carrier format.",
    actionPlan: [
      "Copy tracking ID directly from shipment details.",
      "Check for hidden spaces or truncation.",
      "Verify carrier selection before lookup.",
      "Request replacement ID if lookup still fails."
    ]
  },
  {
    slug: "track-speedx-order-id-vs-tracking-number",
    primaryKeyword: "SpeedX order ID vs tracking number",
    title: "SpeedX Order ID Vs Tracking Number: Key Difference",
    metaDescription:
      "Learn the difference between SpeedX order IDs and tracking numbers to avoid lookup errors and support delays.",
    h1: "SpeedX Order ID Vs Tracking Number",
    category: "format",
    problemStatement: "Many failed lookups happen because users paste order IDs instead of carrier tracking IDs.",
    actionPlan: [
      "Find the carrier tracking field in marketplace details.",
      "Match format with known SpeedX patterns.",
      "Use tracking lookup after first carrier activation.",
      "Escalate to seller if no valid carrier ID exists."
    ]
  },
  {
    slug: "track-speedx-format-checker",
    primaryKeyword: "SpeedX tracking number format checker",
    title: "SpeedX Tracking Number Format Checker: Quick Validation",
    metaDescription:
      "Validate your SpeedX tracking number format before escalating. Reduce invalid ID errors with this quick checklist.",
    h1: "SpeedX Tracking Number Format Checker",
    category: "format",
    problemStatement: "Format validation is the fastest way to prevent false support escalations.",
    actionPlan: [
      "Check prefix and length consistency.",
      "Remove copy-paste artifacts and extra spaces.",
      "Re-run lookup after carrier activation delay.",
      "Contact seller for corrected data if mismatch persists."
    ]
  }
];

export const programmaticPages: BasePage[] = [
  ...issuePages,
  ...contactPages,
  ...sheinPages,
  ...cityPages,
  ...formatPages
];

const redirectedProgrammaticSlugs = new Set([
  "speedx-tracking-not-updating",
  "speedx-delivered-but-not-received",
  "speedx-contact-number",
  "speedx-shein-tracking",
  "track-speedx-spxcn-format"
]);

export function isProgrammaticPageIndexable(page: BasePage) {
  if (redirectedProgrammaticSlugs.has(page.slug)) {
    return false;
  }

  return page.category === "issue" || page.category === "contact" || page.category === "shein";
}

export function getIndexableProgrammaticPages() {
  return programmaticPages.filter((page) => isProgrammaticPageIndexable(page));
}

export function getProgrammaticPageBySlug(slug: string) {
  return programmaticPages.find((page) => page.slug === slug);
}

function categoryLabel(category: PageCategory) {
  if (category === "city") return "city delivery intelligence";
  if (category === "format") return "tracking format validation";
  if (category === "contact") return "support escalation";
  if (category === "shein") return "marketplace shipment help";
  return "tracking troubleshooting";
}

export function buildProgrammaticSections(page: BasePage) {
  const keyword = page.primaryKeyword;
  const categoryLabelText = categoryLabel(page.category);

  const categoryIntro = (() => {
    if (page.category === "contact") {
      return `Support requests work best when the first message contains the problem, the evidence, and the exact outcome you want. ${page.problemStatement}`;
    }

    if (page.category === "shein") {
      return `Marketplace shipments usually involve seller handoff, export movement, customs review, and a final-mile delivery step. ${page.problemStatement}`;
    }

    if (page.category === "city") {
      return `Local delivery timing depends on route density, building access, weather, and depot dispatch order. ${page.problemStatement}`;
    }

    if (page.category === "format") {
      return `Format questions are usually about validation rather than shipment movement. ${page.problemStatement}`;
    }

    return `Delay questions are easiest to solve when you map the shipment to the current route stage. ${page.problemStatement}`;
  })();

  const categoryCauseList = (() => {
    if (page.category === "contact") {
      return [
        "Missing tracking ID, order ID, or destination ZIP in the first message",
        "Sending the request to the wrong team before seller escalation",
        "Not including screenshots or a concise timeline",
        "Asking for a refund outcome before the shipment status is verified"
      ];
    }

    if (page.category === "shein") {
      return [
        "Seller handoff not yet completed",
        "Export or customs review still in progress",
        "Batch scan posting during cross-border transfer",
        "Local carrier has not posted the first destination scan"
      ];
    }

    if (page.category === "city") {
      return [
        "Route density is higher than usual",
        "Driver access instructions are incomplete",
        "Weather or traffic is slowing the route",
        "Local depot sorting is running behind"
      ];
    }

    if (page.category === "format") {
      return [
        "Copy-paste errors or hidden spaces in the number",
        "Using the order ID instead of the carrier tracking ID",
        "Tracking created before the first carrier scan",
        "Selecting the wrong carrier during lookup"
      ];
    }

    return [
      "The shipment is between scan points",
      "A long-haul or customs segment has no public update yet",
      "Batch posting is delaying visible scans",
      "The ETA is still within a normal handling window"
    ];
  })();

  return [
    {
      heading: `How ${keyword} usually behaves`,
      paragraphs: [
        categoryIntro,
        `The useful question is not only whether the label changed, but whether the event order still makes sense. A timeline can look frozen while the parcel is moving through a silent stage such as pickup, linehaul transfer, customs review, or destination sort.`,
        `Read ${keyword} data by stage instead of by the most recent status alone. ${categoryLabelText} pages are most useful when they explain what the next scan should look like and how long that step usually takes.`
      ]
    },
    {
      heading: "Likely causes and what to verify",
      paragraphs: [
        `Start with the simplest explanation first: wrong tracking format, delayed scan posting, or a normal handoff gap. If the shipment is already near the delivery window, treat the same silence more carefully because the risk profile is higher.`,
        `Before escalating, verify the shipment stage, the destination ZIP, and whether the seller or carrier currently owns the next action. That distinction matters because the fastest fix is often to contact the party that can actually update the record.`
      ],
      bullets: categoryCauseList
    },
    {
      heading: "Action plan for the next support request",
      paragraphs: [
        `Use a short evidence bundle when you contact support: current scan, last scan time, what changed since then, and the exact help you need. That structure is easier to triage and less likely to receive a generic reply.`,
        `If the issue is still within a normal waiting window, document it and recheck later. If the ETA is missed, move from observation to escalation and include screenshots so the support team can see the same timeline you do.`
      ],
      bullets: page.actionPlan
    },
    {
      heading: "When to escalate and what to ask for",
      paragraphs: [
        `For marketplace orders, start with the seller because they control fulfillment and can open the first investigation. For direct shipments, contact the carrier after the relevant waiting window has passed.`,
        `Ask for one concrete next step instead of a vague status update. Good examples are "confirm the next scan ETA," "verify the address on file," or "open a facility trace." Specific requests usually get better answers than broad complaints.`,
        `If the reply does not move the case forward, respond with the latest evidence and ask for a case number plus a follow-up deadline. That makes the thread easier to audit and keeps the issue from being reset.`
      ]
    }
  ];
}

export function getRelatedProgrammaticLinks(currentSlug: string) {
  const commonLinks = [
    { href: "/", label: "SpeedX tracking homepage" },
    { href: "/track-package", label: "Track package lookup" },
    { href: "/carriers/speedx", label: "SpeedX tracking hub" },
    { href: "/carriers/speedx/status", label: "SpeedX status meanings" },
    { href: "/guides", label: "Shipping guides hub" }
  ];

  const indexablePages = getIndexableProgrammaticPages();
  const sortedPages = [...indexablePages].sort((a, b) => a.slug.localeCompare(b.slug));
  const currentIndex = sortedPages.findIndex((page) => page.slug === currentSlug);

  const offsets = [1, -1, 2, -2, 3, -3];
  const neighborPages: BasePage[] = [];

  if (currentIndex >= 0 && sortedPages.length > 1) {
    for (const offset of offsets) {
      const neighborIndex = currentIndex + offset;
      if (neighborIndex < 0 || neighborIndex >= sortedPages.length) {
        continue;
      }

      const neighbor = sortedPages[neighborIndex];
      if (!neighbor || neighbor.slug === currentSlug) {
        continue;
      }

      if (!neighborPages.some((page) => page.slug === neighbor.slug)) {
        neighborPages.push(neighbor);
      }

      if (neighborPages.length === 5) {
        break;
      }
    }
  }

  const neighborLinks = neighborPages.map((page) => ({
    href: `/${page.slug}`,
    label: page.primaryKeyword
  }));

  return [...commonLinks, ...neighborLinks];
}

export function getProgrammaticFaqs(page: BasePage) {
  const categorySpecificFaqs = (() => {
    if (page.category === "contact") {
      return [
        {
          question: `What should I include before contacting support about ${page.primaryKeyword.toLowerCase()}?`,
          answer:
            "Include the tracking number, order ID, destination ZIP, the latest scan screenshot, and a one-sentence description of the outcome you want."
        },
        {
          question: "Should I contact the seller or carrier first?",
          answer:
            "For marketplace shipments, start with the seller because they control the fulfillment record. Escalate to the carrier with the seller case ID if the issue still needs investigation."
        },
        {
          question: "How fast should a support reply arrive?",
          answer:
            "Most teams respond faster when the first message is complete. If there is no progress update after the stated response window, reply with the case ID and request a deadline."
        },
        {
          question: "What if support gives a generic answer?",
          answer:
            "Reply with the missing facts and ask for one specific next step, such as a trace, address verification, or next-scan estimate."
        }
      ];
    }

    if (page.category === "shein") {
      return [
        {
          question: `Why do ${page.primaryKeyword.toLowerCase()} updates sometimes appear in batches?`,
          answer:
            "Shein and SpeedX shipments can move through export, customs, and local handoff stages before the next public scan appears. Batch updates are common on cross-border routes."
        },
        {
          question: "Should I contact Shein or SpeedX first?",
          answer:
            "Start with the seller platform for order-level issues, then contact the carrier if the tracking timeline needs investigation or the parcel is already in the delivery network."
        },
        {
          question: "How long is a normal scan gap?",
          answer:
            "A 24-48 hour gap can be normal during linehaul or customs movement, especially when the parcel is crossing borders."
        },
        {
          question: "What evidence helps most with a claim?",
          answer:
            "Use screenshots of the full timeline, the order details page, and any proof that the delivery address is correct."
        }
      ];
    }

    if (page.category === "city") {
      return [
        {
          question: `Why does ${page.primaryKeyword.toLowerCase()} vary by neighborhood?`,
          answer:
            "Route density, building access, weather, and depot dispatch order all affect how local delivery scans appear."
        },
        {
          question: "What should I check if the package is close to delivery?",
          answer:
            "Make sure apartment details, gate codes, phone number, and safe-drop notes are correct before the final-mile attempt."
        },
        {
          question: "When should I escalate a city-specific delay?",
          answer:
            "Escalate once the ETA window is missed or the route stalls without a new scan after the normal local waiting period."
        },
        {
          question: "Can weather make the city delivery look stuck?",
          answer:
            "Yes. Weather and traffic can delay scans without meaning the shipment is lost."
        }
      ];
    }

    if (page.category === "format") {
      return [
        {
          question: `How do I validate ${page.primaryKeyword.toLowerCase()}?`,
          answer:
            "Check the prefix, length, and carrier selection first. Then compare the value with the tracking number shown in the shipment details page."
        },
        {
          question: "Why does the lookup fail even when the number looks right?",
          answer:
            "It may be too early for the first carrier scan, or the number may still be assigned to the wrong carrier in the lookup tool."
        },
        {
          question: "Should I use the order ID instead of the tracking number?",
          answer:
            "No. Order IDs and carrier tracking numbers are different identifiers, and the lookup usually needs the carrier number."
        },
        {
          question: "What should I do if the format still does not work?",
          answer:
            "Ask the seller to confirm the carrier and resend the full tracking ID without spaces or truncated characters."
        }
      ];
    }

    return [
      {
        question: `How long should I wait for ${page.primaryKeyword.toLowerCase()} updates?`,
        answer:
          "In most cases, wait 24-48 hours for normal scan lag. Escalate sooner if delivery is marked complete but the package is missing, or if the ETA window is already missed."
      },
      {
        question: "Can scan gaps still be normal?",
        answer:
          "Yes. Long-haul and cross-border segments often update in batches, which can create temporary timeline silence."
      },
      {
        question: "What should I verify before escalating?",
        answer:
          "Check the current scan stage, destination ZIP, recent weather or customs disruptions, and whether the shipment is still within the expected delivery range."
      },
      {
        question: "What details should I include in a support request?",
        answer:
          "Include the tracking number, order ID, destination ZIP, a screenshot of the latest event, and the exact next step you want support to take."
      }
    ];
  })();

  return categorySpecificFaqs;
}

export function getCategoryLabel(page: BasePage) {
  return categoryLabel(page.category);
}