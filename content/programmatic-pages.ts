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

  return [
    {
      heading: `How ${keyword} issues usually start`,
      paragraphs: [
        `${page.problemStatement} Most users only see the latest label and assume movement stopped, but carrier timelines often include silent stages where no customer-facing event is posted for several hours.`,
        `When you review ${keyword} data, focus on event order, timestamp gaps, and route phase. A status can look unchanged while the parcel is moving through a linehaul transfer, customs queue, or destination sort lane.`,
        `The key is context. A two-day gap during cross-border movement can be normal, while a two-day gap after out-for-delivery may require immediate follow-up. Understanding where your parcel sits in the chain is more valuable than reacting to a single static label.`
      ]
    },
    {
      heading: "Fast diagnosis framework",
      paragraphs: [
        `A practical way to analyze ${keyword} is to classify the shipment into four phases: pre-transit, linehaul transit, destination processing, and final-mile delivery. Each phase has different normal timing and different risk signals.`,
        `Pre-transit usually means the merchant has generated a label, but pickup is pending. Linehaul transit often has the longest scan gaps. Destination processing includes sort and dispatch events. Final-mile stages are the most time-sensitive because promised delivery windows are near.`,
        `This framework helps you avoid incorrect escalation. Users often file claims during normal linehaul silence, then miss critical action windows later when a true delivery exception appears. Diagnose first, escalate second.`
      ]
    },
    {
      heading: "Step-by-step action plan",
      paragraphs: [
        `Use this sequence before opening support tickets. Acting too early can trigger generic responses, while waiting too long can miss seller claim windows. The goal is to escalate with clean evidence at the right moment.`,
        `Your escalation quality improves when you attach screenshots, list timestamps, and explain exactly what changed versus what is missing. This helps support teams route the request faster and avoids reset-level replies.`,
        `Keep your notes structured: latest event, expected event, ETA impact, and requested next action. A structured ticket is easier for support teams to triage, which usually shortens investigation turnaround.`
      ],
      bullets: page.actionPlan
    },
    {
      heading: "When to escalate to seller vs carrier",
      paragraphs: [
        `For marketplace orders, begin with the seller because they own fulfillment obligations and can trigger internal shipping investigations. If seller support cannot provide progress, escalate to the carrier with your case ID and full timeline.`,
        `For direct shipments, contact carrier support after your route-specific waiting window. Include tracking ID, destination ZIP, delivery notes, and a one-sentence resolution request. Clear asks such as "confirm next scan ETA" or "initiate facility trace" reduce delays.`,
        `If support responds with generic advice, reply with your timeline evidence and ask for a specific action path. Requesting a case number and next update deadline creates accountability and improves follow-through.`
      ]
    },
    {
      heading: "How to reduce future tracking risk",
      paragraphs: [
        `Many repeat ${keyword} problems come from avoidable data issues: missing apartment numbers, incorrect phone details, or unclear access instructions. Updating these fields early significantly reduces failed delivery events.`,
        `For cross-border routes, keep a small time buffer around estimated dates and monitor customs-related scans. For local final-mile routes, confirm safe-drop instructions and ensure door access details are visible to the driver.`,
        `You can also reduce risk by tracking from day one rather than only near delivery date. Early visibility helps catch invalid tracking IDs, wrong addresses, and pickup delays before they turn into high-friction claims.`
      ]
    },
    {
      heading: "What success looks like",
      paragraphs: [
        `A healthy recovery flow is simple: timeline resumes, destination scans appear in sequence, and ETA stabilizes. If a package is truly blocked, support should provide a case reference and a concrete follow-up window.`,
        `Use this page as a repeatable playbook for ${keyword}. The same framework works across delayed scans, exception events, contact escalations, city-level routing questions, and tracking-number format confusion.`,
        `If you apply this process consistently, you will resolve most shipment issues faster while reducing unnecessary support tickets. Better diagnosis leads to better escalation, and better escalation leads to faster delivery outcomes.`
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
    { href: "/guides/package-not-updating", label: "Tracking not updating guide" }
  ];

  const neighbors = programmaticPages.filter((page) => page.slug !== currentSlug).slice(0, 5);

  const neighborLinks = neighbors.map((page) => ({
    href: `/${page.slug}`,
    label: page.primaryKeyword
  }));

  return [...commonLinks, ...neighborLinks];
}

export function getProgrammaticFaqs(page: BasePage) {
  return [
    {
      question: `How long should I wait when dealing with ${page.primaryKeyword.toLowerCase()}?`,
      answer:
        "In most cases, wait 24-48 hours for normal scan lag. Escalate sooner if delivery is marked completed but package is missing, or if the ETA window is already missed."
    },
    {
      question: "Should I contact seller or carrier first?",
      answer:
        "For marketplace orders, contact seller first with tracking evidence. Then escalate to carrier support with seller case ID if no progress appears."
    },
    {
      question: "What details should I include in support requests?",
      answer:
        "Include tracking number, order ID, destination ZIP, latest timeline screenshot, and the specific outcome you are requesting."
    },
    {
      question: "Can scan gaps still be normal?",
      answer:
        "Yes. Long-haul and cross-border segments often update in batches, which can create temporary timeline silence."
    }
  ];
}

export function getCategoryLabel(page: BasePage) {
  return categoryLabel(page.category);
}