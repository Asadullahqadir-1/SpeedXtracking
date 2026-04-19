export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "speedx-tracking-not-updating",
    title: "SpeedX Tracking Not Updating? 9 Real Fixes That Work",
    description:
      "A practical checklist to resolve SpeedX tracking delays, including scan gaps, weekend holds, customs pauses, and escalation steps.",
    category: "Troubleshooting",
    readTime: "7 min read",
    publishedDate: "2026-03-01",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "Why SpeedX scans sometimes pause",
        paragraphs: [
          "SpeedX tracking can appear frozen when a parcel is traveling between major hubs where no public scan happens in transit. This is common on long-haul routes and overnight linehaul movements.",
          "Another frequent reason is batch processing. Carriers often upload several events at once, so the timeline may jump from 'In Transit' to 'Out for Delivery' without intermediate checkpoints."
        ]
      },
      {
        heading: "What to do before contacting support",
        paragraphs: [
          "Wait 24-48 hours after the latest event, then compare your status with carrier ETAs and recent weather alerts. Many delays resolve without intervention during this window."
        ],
        bullets: [
          "Confirm your delivery address in the retailer account",
          "Check if your destination had weather disruptions",
          "Re-run tracking with the same number on the next business day",
          "Save screenshots of the latest visible events"
        ]
      },
      {
        heading: "When to escalate",
        paragraphs: [
          "If there is no movement for 5+ calendar days, open a case with the seller first, then with SpeedX support. Provide your order ID, tracking number, and proof of address for faster handling."
        ]
      }
    ]
  },
  {
    slug: "speedx-delivery-time-by-region",
    title: "SpeedX Tracking Delivery Time Guide: Domestic vs International",
    description:
      "Understand realistic SpeedX tracking delivery timelines by route type, final-mile region, customs stage, and shopping platform.",
    category: "Delivery Times",
    readTime: "6 min read",
    publishedDate: "2026-02-26",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "SpeedX tracking delivery windows",
        paragraphs: [
          "Most domestic SpeedX parcels arrive in 3-5 business days after handoff to the local network. Cross-border orders generally land in 7-15 days depending on customs and partner carriers.",
          "Marketplace promos and peak seasons can add 2-4 days due to higher sort volume."
        ]
      },
      {
        heading: "What affects SpeedX tracking delivery speed most",
        paragraphs: [
          "Transit speed is mainly influenced by customs clearance quality, destination density, and handoff timing between linehaul and final-mile teams."
        ],
        bullets: [
          "Incorrect ZIP or missing unit number",
          "National holidays and weekend processing",
          "Remote delivery zones",
          "Customs inspection and import documentation"
        ]
      }
    ]
  },
  {
    slug: "shein-speedx-tracking-guide",
    title: "SpeedX Tracking for Shein Orders: Complete Guide",
    description:
      "A complete Shein + SpeedX tracking walkthrough, from finding your number to understanding each status update.",
    category: "Shein Orders",
    readTime: "8 min read",
    publishedDate: "2026-02-20",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "Find the correct Shein SpeedX tracking number",
        paragraphs: [
          "In Shein order details, copy the carrier tracking number instead of the internal order number. SpeedX identifiers typically begin with SPX-prefixed formats.",
          "If Shein shows only a partial value, check your shipment confirmation email for the full string."
        ]
      },
      {
        heading: "SpeedX tracking status meanings for Shein orders",
        paragraphs: [
          "Shein order timelines often include pre-carrier processing, export departure, customs entry, and local out-for-delivery events. Understanding these handoffs prevents false delay assumptions."
        ],
        bullets: [
          "Label Created: order prepared but not yet scanned by courier",
          "In Transit: moving between hubs or countries",
          "At Facility: sorted at local or regional depot",
          "Out for Delivery: final-mile attempt expected today"
        ]
      }
    ]
  },
  {
    slug: "delivered-but-not-received-speedx",
    title: "SpeedX Tracking Says Delivered But Not Received: Step-by-Step Recovery",
    description:
      "What to do in the first 24 hours if SpeedX marks your package delivered but you cannot find it.",
    category: "Claims",
    readTime: "6 min read",
    publishedDate: "2026-02-15",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "First checks when SpeedX tracking says delivered",
        paragraphs: [
          "Many missing-delivery cases are nearby placement issues. Couriers may leave parcels at side doors, concierge desks, lockers, or alternate entrances listed in delivery instructions."
        ],
        bullets: [
          "Check porch, side gate, garage area, and mailbox cluster",
          "Ask neighbors and building reception",
          "Wait up to 24 hours for delayed final scan sync",
          "Request proof-of-delivery from seller"
        ]
      },
      {
        heading: "How to file an effective SpeedX tracking claim",
        paragraphs: [
          "Open a ticket with your seller and include screenshots, delivery window, and a short statement confirming non-receipt. This speeds reimbursement or re-shipment decisions."
        ]
      }
    ]
  },
  {
    slug: "tracking-status-meanings-explained",
    title: "SpeedX Tracking Status Meanings Explained: In Transit, Exception, Delivered",
    description:
      "Decode common SpeedX tracking statuses so you know exactly what action to take at each shipment stage.",
    category: "Tracking Basics",
    readTime: "9 min read",
    publishedDate: "2026-02-09",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "Core SpeedX tracking statuses and their real meaning",
        paragraphs: [
          "Not every status indicates progress at the same speed. Some represent movement while others are administrative scans. Knowing the difference helps you avoid premature escalation."
        ],
        bullets: [
          "In Transit: normal network movement",
          "Arrived at Facility: reached a sorting hub",
          "Delivery Exception: temporary problem requiring review",
          "Delivered: completion event, verify drop location"
        ]
      }
    ]
  },
  {
    slug: "best-time-to-contact-carrier-support",
    title: "Best Time to Contact SpeedX Tracking Support (and What to Say)",
    description:
      "Use this SpeedX tracking contact script and timing strategy to get faster, more useful responses from carrier support teams.",
    category: "Support",
    readTime: "5 min read",
    publishedDate: "2026-02-01",
    updatedDate: "2026-03-10",
    sections: [
      {
        heading: "Timing your SpeedX tracking support request",
        paragraphs: [
          "Support outcomes improve when you contact carriers with a clear case summary and after enough time has passed for normal scan delays to resolve."
        ],
        bullets: [
          "Contact after 48 hours with no update (domestic)",
          "Contact after 72 hours with no update (international)",
          "Have tracking number, order ID, and full address ready",
          "Ask for a case ID and escalation timestamp"
        ]
      }
    ]
  },
  {
    slug: "does-speedx-deliver-late-at-night-guide",
    title: "Does SpeedX Deliver Late at Night? Real Delivery Window Guide",
    description:
      "Learn when SpeedX can deliver after dark, why late-night drops happen, and what to do if an out-for-delivery package does not arrive by evening.",
    category: "Delivery Times",
    readTime: "6 min read",
    publishedDate: "2026-03-14",
    updatedDate: "2026-03-14",
    sections: [
      {
        heading: "Can SpeedX deliver after 7 PM?",
        paragraphs: [
          "Yes. SpeedX may complete deliveries in the evening on high-volume days, especially in dense urban routes where driver stop counts are high.",
          "An out-for-delivery scan means your package is on a route, but the exact stop time depends on route order, traffic, and operational load."
        ]
      },
      {
        heading: "Why late-night deliveries happen",
        paragraphs: [
          "Evening delivery windows are more common during promotions, holiday peaks, and weather recovery days when routes shift and drivers complete extended stop sequences."
        ],
        bullets: [
          "Peak-day route overflow",
          "Traffic-related route delays",
          "Multi-handoff final-mile scheduling",
          "Local depot dispatch timing"
        ]
      },
      {
        heading: "What to do if not delivered by night",
        paragraphs: [
          "Recheck tracking the next morning before escalating. If status remains unchanged for 24 hours after out-for-delivery, contact seller and carrier support with your tracking number and order ID."
        ]
      }
    ]
  },
  {
    slug: "spxcn-tracking-number-format-explained",
    title: "SPXCN Tracking Number Explained: Format, Delays, and Fixes",
    description:
      "Understand what an SPXCN tracking number usually means, why scans can pause, and how to verify if your shipment is still moving normally.",
    category: "Tracking Basics",
    readTime: "7 min read",
    publishedDate: "2026-03-14",
    updatedDate: "2026-03-14",
    sections: [
      {
        heading: "What SPXCN usually indicates",
        paragraphs: [
          "SPXCN often appears on SpeedX-linked cross-border shipments where parcels pass through international handoff stages before destination-country delivery.",
          "Because of these handoffs, scan events may update in batches rather than at every movement point."
        ]
      },
      {
        heading: "Why SPXCN tracking can look stuck",
        paragraphs: [
          "Scan pauses are common during export departure, customs review, and linehaul transfer. A 24-48 hour gap can still be normal during these phases."
        ],
        bullets: [
          "Customs queue and clearance",
          "Cross-border flight or linehaul handoff",
          "Carrier system batch synchronization",
          "Weekend posting delays"
        ]
      },
      {
        heading: "When to escalate",
        paragraphs: [
          "If there is no movement for 5+ days and ETA has passed, open a seller ticket first and then request carrier escalation with screenshots and full destination details."
        ]
      }
    ]
  },
  {
    slug: "how-speedx-tracking-works",
    title: "How SpeedX Tracking Works: From Label Created to Delivered",
    description:
      "A step-by-step explanation of how SpeedX tracking events are generated from merchant handoff through final-mile delivery.",
    category: "Tracking Basics",
    readTime: "8 min read",
    publishedDate: "2026-03-30",
    updatedDate: "2026-03-30",
    sections: [
      {
        heading: "Stage 1: Label creation and first scan",
        paragraphs: [
          "Most shipments start with a label event, which means shipping data was created but the parcel may not be physically scanned yet.",
          "The first physical acceptance scan is the point where true transit timing begins. Before that, delays are often seller-side handoff timing rather than carrier movement problems."
        ],
        bullets: [
          "Label Created: shipment data submitted",
          "Accepted/Picked Up: parcel entered carrier flow",
          "In Transit: movement through hubs and linehaul legs"
        ]
      },
      {
        heading: "Stage 2: Hub movement and linehaul gaps",
        paragraphs: [
          "SpeedX scans are not always continuous between hubs. A parcel can move normally for 24-48 hours without new public events during long-haul transfer.",
          "This is why users often see timeline jumps, where several events appear at once after batch synchronization."
        ]
      },
      {
        heading: "Stage 3: Final-mile and delivery confirmation",
        paragraphs: [
          "Once a parcel reaches destination processing, scans usually become more frequent. Out-for-delivery indicates route assignment, not guaranteed morning delivery.",
          "Delivered confirms route completion. If the parcel is missing, run a 24-hour local check process before claim escalation."
        ],
        bullets: [
          "Check mailbox clusters and alternate drop points",
          "Ask neighbors or reception desk",
          "Collect screenshot evidence before opening support case"
        ]
      }
    ]
  },
  {
    slug: "track-speedx-packages-in-pakistan",
    title: "Track SpeedX Packages in Pakistan: ETA, Customs, and Delivery Tips",
    description:
      "Learn how SpeedX tracking behaves on Pakistan-bound shipments, including customs hold patterns, ETA windows, and escalation timing.",
    category: "Regional Guides",
    readTime: "9 min read",
    publishedDate: "2026-03-30",
    updatedDate: "2026-03-30",
    sections: [
      {
        heading: "Typical Pakistan delivery timeline",
        paragraphs: [
          "Pakistan-bound e-commerce shipments usually include export movement, customs clearance, destination handoff, and local delivery attempt phases.",
          "Tracking can look quiet during customs processing. A short no-update window is common until clearance and local partner handoff finalize."
        ],
        bullets: [
          "Pre-carrier and export stage: 1-3 days",
          "Cross-border and customs stage: 3-8 days",
          "Destination handoff and last-mile stage: 2-5 days"
        ]
      },
      {
        heading: "Why updates may pause on Pakistan routes",
        paragraphs: [
          "Cross-border tracking often updates in batches, especially around customs checkpoints and inter-carrier handoffs.",
          "A 24-72 hour pause can still be normal depending on route load, weekend timing, and documentation checks."
        ]
      },
      {
        heading: "When to escalate in Pakistan",
        paragraphs: [
          "Escalate when there is no meaningful movement for 5+ days after ETA context is considered, or if a delivered status does not match local receipt.",
          "For marketplace orders, start with seller support, then escalate with complete timeline screenshots and destination details."
        ],
        bullets: [
          "Keep full tracking timeline screenshots",
          "Include city, postal code, and contact details",
          "Ask for written case ID and next update deadline"
        ]
      }
    ]
  },
  {
    slug: "speedx-delivery-exception-codes",
    title: "SpeedX Delivery Exception Codes: Meaning and Best Fixes",
    description:
      "Decode common SpeedX delivery exception scenarios and use a practical response plan for address, customs, and operational holds.",
    category: "Troubleshooting",
    readTime: "8 min read",
    publishedDate: "2026-03-30",
    updatedDate: "2026-03-30",
    sections: [
      {
        heading: "What a delivery exception really means",
        paragraphs: [
          "Exception events do not always mean a lost package. They usually indicate a temporary obstacle that requires confirmation or correction.",
          "The right action depends on the stage of shipment and whether the issue is destination, customs, or operations related."
        ]
      },
      {
        heading: "Most common exception categories",
        paragraphs: [
          "Address and access issues are common near final-mile. Customs or documentation issues usually appear on international legs before destination handoff."
        ],
        bullets: [
          "Address mismatch or incomplete unit info",
          "Recipient unavailable during delivery attempt",
          "Customs documentation or review hold",
          "Operational backlog from weather or peak volume"
        ]
      },
      {
        heading: "Response plan that improves resolution speed",
        paragraphs: [
          "Correct destination details first, then monitor for the next scan in a defined window. If no update appears, escalate with evidence and a clear requested action.",
          "Well-structured escalation requests usually get faster responses than generic messages."
        ]
      }
    ]
  },
  {
    slug: "speedx-customs-delay-guide",
    title: "SpeedX Customs Delay Guide: Documents, Timelines, and Escalation",
    description:
      "A practical customs-delay playbook for SpeedX shipments with expected timelines, document checks, and escalation triggers.",
    category: "Customs",
    readTime: "7 min read",
    publishedDate: "2026-03-30",
    updatedDate: "2026-03-30",
    sections: [
      {
        heading: "Why customs delays happen",
        paragraphs: [
          "Customs holds usually happen when declared value, invoice data, or shipment classification needs review.",
          "These checks are normal in cross-border logistics and may delay updates even while the parcel remains in controlled processing."
        ]
      },
      {
        heading: "What to verify before escalating",
        paragraphs: [
          "Confirm your order invoice, recipient name, and destination details are consistent across seller and shipment records.",
          "Missing or inconsistent data can prolong hold times and trigger repeated checks."
        ],
        bullets: [
          "Invoice value and item description",
          "Recipient full name and address formatting",
          "Any requested customs support documents"
        ]
      },
      {
        heading: "Escalation timing and evidence",
        paragraphs: [
          "If no clearance event appears after several business days, escalate with timeline screenshots and a concise issue summary.",
          "Request a case reference and a next-update commitment so follow-up is trackable."
        ]
      }
    ]
  },
  {
    slug: "speedx-out-for-delivery-but-not-delivered",
    title: "SpeedX Out for Delivery But Not Delivered: What to Do Next",
    description:
      "Use this step-by-step plan when SpeedX tracking says out for delivery but your package does not arrive by end of day.",
    category: "Troubleshooting",
    readTime: "8 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "Why out-for-delivery can roll to next day",
        paragraphs: [
          "Out-for-delivery means your package is assigned to a route, but stop order, traffic, weather, and route overflow can delay final drop-off.",
          "During high-volume days, drivers may return with undelivered parcels and attempt again the next business day."
        ]
      },
      {
        heading: "What to check before escalating",
        paragraphs: [
          "Confirm delivery instructions, gate access, and contact number in your order profile before opening a support case."
        ],
        bullets: [
          "Check porch, side entrance, parcel locker, and concierge",
          "Review delivery notes in seller app",
          "Wait until end-of-day local delivery window",
          "Capture screenshot of latest status"
        ]
      },
      {
        heading: "Escalation message template",
        paragraphs: [
          "If status is unchanged the next day, contact seller first and request carrier follow-up with route-level confirmation.",
          "Include tracking number, full address, and a one-line timeline to speed response."
        ]
      }
    ]
  },
  {
    slug: "speedx-label-created-no-movement",
    title: "SpeedX Label Created, No Movement: Is Your Package Stuck?",
    description:
      "Understand what label created means, how long to wait, and when to contact seller or carrier if SpeedX tracking does not move.",
    category: "Tracking Basics",
    readTime: "7 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "What label created actually means",
        paragraphs: [
          "Label created usually means shipment data was submitted, but the parcel may still be with the seller and not yet physically scanned.",
          "This stage is common on marketplace orders where pickup and first-mile consolidation happen in batches."
        ]
      },
      {
        heading: "Normal waiting window",
        paragraphs: [
          "Most shipments receive their first movement scan within 24 to 72 hours, depending on seller dispatch timing and pickup schedules."
        ],
        bullets: [
          "0-24h: normal seller processing",
          "24-48h: common pickup delay",
          "48-72h: check seller dispatch confirmation",
          "72h+: request escalation"
        ]
      },
      {
        heading: "How to escalate effectively",
        paragraphs: [
          "Ask seller to confirm physical handoff date and pickup reference. If unavailable, request order replacement/refund pathway.",
          "Use precise timestamps from your tracking page instead of generic delay statements."
        ]
      }
    ]
  },
  {
    slug: "speedx-tracking-number-not-found",
    title: "SpeedX Tracking Number Not Found: 10 Fast Checks",
    description:
      "Fix SpeedX tracking number not found errors with a practical checklist for typos, format issues, dispatch timing, and carrier mismatch.",
    category: "Troubleshooting",
    readTime: "9 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "Most common causes of number-not-found",
        paragraphs: [
          "Tracking lookup failures are usually format errors, recently created labels, or wrong-carrier lookups rather than lost parcels.",
          "Numbers can also fail temporarily while data synchronizes across seller and carrier systems."
        ]
      },
      {
        heading: "10 checks before contacting support",
        paragraphs: [
          "Run these checks in order to avoid unnecessary tickets and quickly identify whether the issue is formatting or dispatch timing."
        ],
        bullets: [
          "Remove spaces and hidden characters",
          "Verify full code length from shipment email",
          "Avoid confusing O/0 and I/1",
          "Check if seller shared internal order ID by mistake",
          "Wait 12-24 hours after first label event",
          "Retry on /track-package with carrier set to speedx",
          "Check seller app shipment timeline",
          "Compare with invoice and dispatch notice",
          "Confirm package is not canceled",
          "Request seller-side handoff proof"
        ]
      },
      {
        heading: "When to open a case",
        paragraphs: [
          "Open a support case after 72 hours with no valid carrier recognition and include screenshots from both seller and tracking pages.",
          "Ask for either corrected tracking number or confirmed re-shipment timeline."
        ]
      }
    ]
  },
  {
    slug: "speedx-arrived-at-facility-meaning",
    title: "SpeedX Arrived at Facility: Meaning, Timeline, and Next Update",
    description:
      "Learn what arrived at facility means in SpeedX tracking, how long this stage can last, and when a delay becomes actionable.",
    category: "Tracking Basics",
    readTime: "7 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "What happens at a facility scan",
        paragraphs: [
          "A facility scan means the parcel reached a sorting node where destination routing, barcode verification, and linehaul assignment occur.",
          "The next update can be immediate or delayed depending on whether the parcel waits for batch dispatch."
        ]
      },
      {
        heading: "How long can this status stay",
        paragraphs: [
          "A 12-48 hour facility window is common. Peak periods and weather disruptions can extend this without indicating package loss."
        ],
        bullets: [
          "12-24h: normal processing",
          "24-48h: still common in busy hubs",
          "48-72h: monitor for next movement event",
          "72h+: investigate with seller/carrier"
        ]
      },
      {
        heading: "Practical next actions",
        paragraphs: [
          "Track the sequence of scans, not just a single event label. If no movement appears after 3 days, start with seller escalation.",
          "Use date-stamped screenshots to speed carrier review."
        ]
      }
    ]
  },
  {
    slug: "speedx-attempted-delivery-what-next",
    title: "SpeedX Attempted Delivery: What It Means and How to Get Redelivery",
    description:
      "See what SpeedX attempted delivery means, why it happens, and the exact steps to schedule successful redelivery.",
    category: "Claims",
    readTime: "8 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "Why attempted delivery statuses appear",
        paragraphs: [
          "Attempted delivery usually indicates address access issues, unavailable recipient, or route timing constraints near cutoff windows.",
          "It does not automatically mean your parcel is returned or canceled."
        ]
      },
      {
        heading: "How to secure redelivery quickly",
        paragraphs: [
          "Update any missing unit details and give clear drop instructions before the next route cycle begins."
        ],
        bullets: [
          "Confirm buzzer, gate, unit, and phone details",
          "Add safe-drop instructions if available",
          "Contact seller to submit carrier note",
          "Ask support for redelivery date window"
        ]
      },
      {
        heading: "When return-to-sender risk increases",
        paragraphs: [
          "Multiple failed attempts or unresolved address issues can trigger return-to-sender workflows.",
          "Escalate immediately after the second failed attempt."
        ]
      }
    ]
  },
  {
    slug: "speedx-returned-to-sender",
    title: "SpeedX Returned to Sender: Reasons, Timeline, and Recovery Options",
    description:
      "Understand why SpeedX shipments are returned to sender and what you can do to recover your order or get a replacement faster.",
    category: "Claims",
    readTime: "8 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "Common return-to-sender triggers",
        paragraphs: [
          "Returns usually happen after failed delivery attempts, invalid address details, refusal, or customs rejection on cross-border shipments.",
          "Understanding the trigger is critical because each reason has a different recovery route."
        ]
      },
      {
        heading: "What happens after return scan",
        paragraphs: [
          "After the return scan, parcels move to a return hub before merchant receipt. This can take several business days.",
          "Seller policy determines whether you receive re-shipment, refund, or store credit."
        ],
        bullets: [
          "Request return tracking timeline from seller",
          "Confirm refund or re-shipment policy in writing",
          "Share screenshots of all final-mile events",
          "Set expected resolution date"
        ]
      },
      {
        heading: "How to prevent future returns",
        paragraphs: [
          "Keep address formatting standardized and include delivery notes for complex buildings.",
          "Use a monitored phone number and verify post code before checkout."
        ]
      }
    ]
  },
  {
    slug: "speedx-departed-facility-no-update",
    title: "SpeedX Departed Facility, No Update: Is This Normal?",
    description:
      "Learn why SpeedX tracking can pause after departed facility, how long to wait, and when to treat the delay as actionable.",
    category: "Troubleshooting",
    readTime: "7 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-04-19",
    sections: [
      {
        heading: "Why post-departure gaps happen",
        paragraphs: [
          "After a departure scan, parcels often travel long-haul without intermediate public scans. This is common across hub-to-hub transfer legs.",
          "Tracking systems may post next events only when the parcel is received at the next processing center."
        ]
      },
      {
        heading: "Reasonable wait thresholds",
        paragraphs: [
          "A 24-48 hour gap is frequently normal. Longer pauses require context from route type, weather, customs, and weekend timing."
        ],
        bullets: [
          "Up to 48h: common linehaul gap",
          "48-72h: monitor closely",
          "72h+: prepare escalation details",
          "5+ days: open formal case"
        ]
      },
      {
        heading: "Escalation details that get faster replies",
        paragraphs: [
          "Share last known location, exact timestamp, destination post code, and expected delivery date in one concise message.",
          "Structured evidence avoids back-and-forth and shortens support resolution time."
        ]
      }
    ]
  }
];
