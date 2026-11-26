export type BlogPost = {
  slug: string;
  title: string;
  /** Unique SERP meta description — target ~140–160 characters (Writing Guidelines). */
  description: string;
  category: string;
  author?: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  /** Optional overrides; `content/blog-seo.ts` supplies primary/secondary keywords + FAQs. */
  keywords?: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const blogAuthor = "SpeedXTracking";

export const blogPosts: BlogPost[] = [
  {
    slug: "speedx-tracking-not-updating",
    title: "SpeedX Tracking Not Updating? 9 Real Fixes That Work",
    description:
      "SpeedX tracking not updating? Use this practical checklist for scan gaps, weekend holds, customs pauses, and when to escalate with screenshots.",
    category: "Troubleshooting",
    readTime: "8 min read",
    publishedDate: "2026-03-01",
    updatedDate: "2026-11-11",
    sections: [
      {
        heading: "Why SpeedX tracking not updating can still be normal",
        paragraphs: [
          "SpeedX tracking not updating often looks alarming, but many freezes happen when a parcel travels between major hubs with no public transit scan. This is common on long-haul routes and overnight linehaul movements.",
          "Another frequent reason is batch processing. Carriers often upload several events at once, so the timeline may jump from in transit to out for delivery without intermediate checkpoints."
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
    title: "SpeedX Delivery Times by Region — Domestic vs International",
    description:
      "Regional SpeedX delivery time ranges for domestic and international ETAs, customs lag, and peak delays. This is not the Sunday or hours guide.",
    category: "Delivery Times",
    readTime: "8 min read",
    publishedDate: "2026-02-26",
    updatedDate: "2026-11-01",
    sections: [
      {
        heading: "Regional SpeedX delivery times at a glance",
        paragraphs: [
          "Most domestic SpeedX parcels arrive in about 2-7 business days after handoff to the local network. Cross-border SpeedX delivery commonly takes about 7-20 days depending on customs and partner carriers. These are regional delivery-time estimates, not guaranteed delivery hours.",
          "Marketplace promos and peak seasons can add 2-4 days due to higher sort volume. For the main SpeedX delivery hub (hours, tracking, and ETAs), use /speedx-delivery. For Sunday/weekend service only, use /does-speedx-deliver-on-sunday."
        ]
      },
      {
        heading: "What affects SpeedX delivery speed most by region",
        paragraphs: [
          "Transit speed is mainly influenced by customs clearance quality, destination density, and handoff timing between linehaul and final-mile teams. International shoppers should expect longer quiet periods while parcels clear export and import stages."
        ],
        bullets: [
          "Incorrect ZIP/postal code or missing unit number",
          "National holidays and weekend processing",
          "Remote delivery zones",
          "Customs inspection and import documentation"
        ]
      },
      {
        heading: "Weekend timing vs this regional guide",
        paragraphs: [
          "This article focuses on regional ETAs (domestic vs international). Weekend and Sunday availability is route-specific and covered on the dedicated Sunday delivery page so that query does not compete with this regional guide.",
          "If you need the Sunday answer specifically, open /does-speedx-deliver-on-sunday. For out-for-delivery same-day timing, open /speedx-out-for-delivery."
        ]
      },
      {
        heading: "How to track SpeedX delivery internationally",
        paragraphs: [
          "Paste your full SpeedX, SPX, or SPXCN tracking number into the free tracker to see the latest scan and ETA context. Spanish-speaking shoppers can also use the rastrear paquete SpeedX page."
        ]
      }
    ]
  },
  {
    slug: "shein-speedx-tracking-guide",
    title: "SpeedX Tracking Shein — Track Package Status Free",
    description:
      "SpeedX tracking for Shein orders: find your tracking number, read status updates, fix stuck scans, and estimate international delivery times.",
    category: "Shein Orders",
    readTime: "8 min read",
    publishedDate: "2026-02-20",
    updatedDate: "2026-10-13",
    sections: [
      {
        heading: "Find the correct Shein SpeedX tracking number",
        paragraphs: [
          "In Shein order details, copy the carrier tracking number instead of the internal order number. SpeedX identifiers typically begin with SPX-prefixed formats such as SPXCN.",
          "If Shein shows only a partial value, check your shipment confirmation email for the full string, then paste it into the free SpeedX tracker."
        ]
      },
      {
        heading: "SpeedX tracking status meanings for Shein orders",
        paragraphs: [
          "Shein order timelines often include pre-carrier processing, export departure, customs entry, and local out-for-delivery events. Understanding these handoffs prevents false delay assumptions on international routes."
        ],
        bullets: [
          "Label Created: order prepared but not yet scanned by courier",
          "In Transit: moving between hubs or countries",
          "At Facility: sorted at local or regional depot",
          "Out for Delivery: final-mile attempt expected today"
        ]
      },
      {
        heading: "Shein order stuck on SpeedX — what to do",
        paragraphs: [
          "A quiet timeline during export or customs is common. Escalate when the seller ETA has passed, an exception appears, or there is no movement for several business days after destination arrival.",
          "Use the SpeedX Shein hub for carrier-specific steps and the SpeedX delivery page for realistic transit windows."
        ]
      }
    ]
  },
  {
    slug: "delivered-but-not-received-speedx",
    title: "SpeedX Delivered But Not Received: Recovery Steps",
    description:
      "SpeedX tracking says delivered but not received? Use this first-24-hour checklist, proof-of-delivery steps, and seller claim script to recover faster.",
    category: "Claims",
    readTime: "8 min read",
    publishedDate: "2026-02-15",
    updatedDate: "2026-11-11",
    sections: [
      {
        heading: "First checks when SpeedX tracking says delivered",
        paragraphs: [
          "When SpeedX tracking says delivered but not received, start with nearby placement checks. Couriers may leave parcels at side doors, concierge desks, lockers, or alternate entrances listed in delivery instructions.",
          "Wait up to 24 hours for delayed final-scan sync before assuming theft or a false delivery event."
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
          "Open a ticket with your seller and include screenshots, delivery window, full destination address, and a short statement confirming non-receipt.",
          "Ask for proof of delivery and a written case ID. Marketplace sellers usually open the first carrier case faster than a cold support email."
        ]
      },
      {
        heading: "Evidence that speeds reimbursement or re-shipment",
        paragraphs: [
          "Keep a one-line timeline: order date, last scan, delivered timestamp, and when you checked the property. Attach photos of the delivery area if useful.",
          "If the drop location is wrong or the photo does not match your address, state that clearly in the first message so the case is not closed as “delivered as scanned.”"
        ]
      }
    ]
  },
  {
    slug: "tracking-status-meanings-explained",
    title: "SpeedX Tracking Status Meanings Explained: In Transit, Exception, Delivered",
    description:
      "Decode SpeedX tracking status meanings—in transit, facility, exception, out for delivery, and delivered—so you know the next action at each stage.",
    category: "Tracking Basics",
    readTime: "9 min read",
    publishedDate: "2026-02-09",
    updatedDate: "2026-11-11",
    sections: [
      {
        heading: "Core SpeedX tracking statuses and their real meaning",
        paragraphs: [
          "SpeedX tracking status meanings help you separate normal movement from problems that need action. Not every status indicates progress at the same speed—some are physical scans and others are administrative events.",
          "Read the full timeline, not only the latest label. Comparing the last two SpeedX tracking events shows whether the parcel is still in a normal stage or stuck after an exception."
        ],
        bullets: [
          "In Transit: normal network movement between hubs",
          "Arrived at Facility: reached a sorting or destination hub",
          "Delivery Exception: temporary problem requiring review",
          "Out for Delivery: assigned to a local driver route",
          "Delivered: completion event—verify the drop location"
        ]
      },
      {
        heading: "What SpeedX in transit means",
        paragraphs: [
          "In transit means the parcel is moving through the carrier network. Quiet gaps of 24–48 hours can still be normal on long-haul or cross-border legs when no public intermediate scan is posted.",
          "Escalate only after the seller ETA context and a realistic scan window have both passed—not after a single quiet day."
        ]
      },
      {
        heading: "What a SpeedX delivery exception means",
        paragraphs: [
          "A delivery exception is a temporary obstacle such as address mismatch, access issues, customs review, or operational backlog. It does not automatically mean the package is lost.",
          "Correct destination details first, then monitor for the next scan. If nothing changes, open a seller case with screenshots and a clear requested action."
        ]
      },
      {
        heading: "What to do when SpeedX shows delivered",
        paragraphs: [
          "Delivered confirms route completion for the carrier. Check porch, side doors, lockers, reception, and neighbors before assuming a loss.",
          "If the parcel is still missing after 24 hours, gather proof and follow the delivered-but-not-received checklist with the seller."
        ]
      }
    ]
  },
  {
    slug: "best-time-to-contact-carrier-support",
    title: "Best Time to Contact SpeedX Support (What to Say)",
    description:
      "Best time to contact SpeedX tracking support: wait windows, seller-first tips, and a short script that gets faster, clearer carrier replies.",
    category: "Support",
    readTime: "7 min read",
    publishedDate: "2026-02-01",
    updatedDate: "2026-11-11",
    sections: [
      {
        heading: "Timing your SpeedX tracking support request",
        paragraphs: [
          "SpeedX customer service outcomes improve when you contact support after normal scan delays have had time to clear, and when your message includes a clear case summary.",
          "For marketplace orders, start with the seller—they can confirm fulfillment and open the first case—then escalate to SpeedX support for carrier-level scan questions."
        ],
        bullets: [
          "Contact after 48 hours with no update (domestic)",
          "Contact after 72 hours with no update (international)",
          "Have tracking number, order ID, and full address ready",
          "Ask for a case ID and next-update commitment"
        ]
      },
      {
        heading: "What to say to SpeedX support",
        paragraphs: [
          "Keep the first message short. State the tracking number, last scan timestamp, destination ZIP, and one requested action such as locate package or confirm next delivery attempt.",
          "Attach timeline screenshots instead of long narrative. Structured evidence shortens back-and-forth and speeds escalation."
        ]
      },
      {
        heading: "When to escalate sooner",
        paragraphs: [
          "Do not wait the full window if tracking shows a hard exception, a missed seller ETA with no movement, or delivered-but-not-received after local checks.",
          "Use the SpeedX contact support guide for channel options and the package-not-delivered checklist when the final-mile scan does not match arrival."
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
        heading: "How late does SpeedX deliver?",
        paragraphs: [
          "Yes. SpeedX may complete deliveries in the evening on high-volume days, especially in dense urban routes where driver stop counts are high.",
          "An out-for-delivery scan means your package is on a route, but the exact stop time depends on route order, traffic, and operational load. There is no single SpeedX delivery-hours cutoff for every address."
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
        heading: "What time does SpeedX stop delivering?",
        paragraphs: [
          "SpeedX does not publish one universal stop-delivering time. Recheck tracking the next morning before escalating. If status remains unchanged for 24 hours after out-for-delivery, contact seller and carrier support with your tracking number and order ID."
        ]
      }
    ]
  },
  {
    slug: "spxcn-tracking-number-format-explained",
    title: "SPXCN Tracking Number Meaning — Format & Delays",
    description:
      "What an SPXCN tracking number means, how to verify the full code, why scans can pause during customs, and how to tell if the shipment is still moving.",
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
    title: "How SpeedX Tracking Works — Label to Delivered",
    description:
      "How SpeedX tracking works from Shipping Label Created to Delivered, including SPXCN quiet gaps, international pauses, and when it is time to escalate.",
    category: "Tracking Basics",
    readTime: "8 min read",
    publishedDate: "2026-03-30",
    updatedDate: "2026-10-13",
    sections: [
      {
        heading: "Stage 1: Label creation and first scan",
        paragraphs: [
          "Most shipments start with a label event, which means shipping data was created but the parcel may not be physically scanned yet.",
          "The first physical acceptance scan is the point where true transit timing begins. Before that, delays are often seller-side handoff timing rather than carrier movement problems. Use the free SpeedX tracking number lookup once you have the full SPX/SPXCN code."
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
          "This is why users often see timeline jumps, where several events appear at once after batch synchronization. International SpeedX global tracking often pauses longest around customs."
        ]
      },
      {
        heading: "Stage 3: Final-mile and delivery confirmation",
        paragraphs: [
          "Once a parcel reaches destination processing, scans usually become more frequent. Out-for-delivery indicates route assignment, not guaranteed morning delivery.",
          "Delivered confirms route completion. If the parcel is missing, run a 24-hour local check process before claim escalation. For support steps, see the SpeedX contact support guide."
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
      "Decode common SpeedX delivery exception messages and use a practical response plan for address problems, customs holds, and operational delays.",
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
    title: "SpeedX Customs Delay: Documents and Timelines",
    description:
      "A practical SpeedX customs-delay playbook: what a customs scan usually means, which documents to have ready, realistic wait windows, and when to escalate.",
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
    title: "SpeedX Out for Delivery But Not Delivered — What Next",
    description:
      "SpeedX is out for delivery but not delivered? Use this same-day wait, next-day attempt, and seller-contact checklist, plus official tracker confirmation.",
    category: "Troubleshooting",
    readTime: "8 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-10-13",
    sections: [
      {
        heading: "Why out-for-delivery can roll to next day",
        paragraphs: [
          "Out-for-delivery means your package is assigned to a route, but stop order, traffic, weather, and route overflow can delay final drop-off.",
          "During high-volume days, drivers may return with undelivered parcels and attempt again the next business day. That is why an out-for-delivery package can take until the next day even when the scan appeared earlier."
        ]
      },
      {
        heading: "What to check before escalating",
        paragraphs: [
          "Confirm delivery instructions, gate access, and contact number in your order profile before opening a support case. On weekends, allow for slower scan posting before assuming the parcel is lost."
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
          "Include tracking number, full address, and a one-line timeline to speed response. Related hubs: out for delivery topic cluster and SpeedX customer service contact page."
        ]
      }
    ]
  },
  {
    slug: "speedx-label-created-no-movement",
    title: "SpeedX Label Created, No Movement: Is Your Package Stuck?",
    description:
      "What Shipping Label Created means on SpeedX, how long to wait for the first scan, and when to contact the seller if tracking still has not moved.",
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
    title: "SpeedX Tracking Number Not Working? Invalid or Not Found",
    description:
      "If a SpeedX tracking number is not working, invalid, or not found, check typos, timing, order IDs, and carrier mix-ups, then retry the official SpeedX tracker.",
    category: "Troubleshooting",
    readTime: "11 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-11-22",
    sections: [
      {
        heading: "What not working or not found usually means",
        paragraphs: [
          "A SpeedX tracking number that is not working, marked invalid, or returned as not found is usually a data problem, not proof that the parcel is lost. The most common causes are a typo, an incomplete code, a marketplace order ID used by mistake, a label that was created before SpeedX received the parcel, or a number that belongs to a different SPX-branded service.",
          "This article is the checklist for failed lookups. It is not the format explainer. If you only need to understand what an SPX or SPXCN code looks like, use the [SpeedX tracking number](/speedx-tracking-number) guide and the [SPXCN tracking number meaning](/guides/spxcn-tracking-number-meaning) page. SpeedXTracking is an independent site, not the SpeedX carrier."
        ]
      },
      {
        heading: "Check the number itself before you retry",
        paragraphs: [
          "Copy the tracking number again from the original shipment email, SMS, or store order page. Remove spaces and hidden characters, and check look-alike letters such as O and 0 or I and 1. A single missing character is enough for a tracker to say the number is invalid.",
          "Make sure you are not pasting the store order ID. Temu, Shein, and TikTok Shop order IDs identify the purchase inside the marketplace; they usually will not resolve in a SpeedX tracker. You need the logistics or carrier tracking number.",
          "If you shop from the Philippines or the notice says SPX Express, confirm you have a SpeedX shipment and not a Shopee SPX Express parcel. That mix-up is covered in [SPX vs SPX Express in the Philippines](/blog/spx-vs-spx-express-philippines)."
        ],
        bullets: [
          "Copy the full SpeedX, SPX, or SPXCN code with no spaces",
          "Do not use a marketplace order ID in a carrier tracker",
          "Compare the app, email, and invoice versions of the number",
          "Rule out SPX Express or another carrier before retrying SpeedX tools"
        ]
      },
      {
        heading: "Try the official tracker if this site is slow or fails",
        paragraphs: [
          "Paste the same number into the [free SpeedX tracking lookup](/track-package). If that lookup is slow, empty, or returns an error, use the [official SpeedX tracker](https://tracking.speedx.io/). The official tracker is first-party and is the best place to confirm whether SpeedX recognizes the number yet.",
          "A failure on one tool is not the final answer. Third-party lookups can lag behind official scans. If the official tracker also says the number is unknown, continue with the timing and seller checks below rather than opening a lost-package claim immediately."
        ]
      },
      {
        heading: "Wait if the label was only just created",
        paragraphs: [
          "Shipping Label Created means the label exists. It does not always mean SpeedX has the parcel in hand. It can take 24 to 48 hours after that event for the first pickup or intake scan to appear. During that window, some tools still report the number as not found.",
          "If the only event you have is a label, follow [Shipping Label Created with no movement](/blog/speedx-label-created-no-movement) and recheck both trackers after a day or two. Contact the seller sooner if the store already shows canceled, unpaid, or a changed tracking number."
        ]
      },
      {
        heading: "When the number is valid but never appears",
        paragraphs: [
          "Ask the seller or marketplace help to confirm the exact carrier tracking number and that the shipment was not voided. Include screenshots of the order page and both tracker results. For Temu, TikTok Shop, or Shein, start in the official app support flow; we do not publish unofficial phone numbers.",
          "If SpeedX later recognizes the number and a status appears, switch to the [SpeedX tracking status meanings](/carriers/speedx/status) page for the next step. If the number works but then stops updating, use the [tracking not updating](/guides/package-not-updating) guide instead of this checklist."
        ]
      },

      {
        heading: "Marketplace-specific hints without mixing up pages",
        paragraphs: [
          "If the number came from a Temu shipment, confirm it on the Temu order page, then follow [Temu SpeedX tracking](/blog/temu-speedx-tracking) for where that number usually appears. Use this not-working checklist only after you have copied the carrier code.",
          "TikTok Shop and Shein work the same way: get the logistics number from the official order screen, then test it here and on the official tracker. The marketplace guides explain how to find the number. This page explains why a lookup still fails after you have one.",
          "If several numbers appear over a few days, the seller may have reprinted a label. Use the newest carrier number, and keep the older screenshots in case support asks what changed."
        ]
      },
      {
        heading: "A short order of checks",
        paragraphs: [
          "Work through the list once, in order, and stop when you have a recognized number or a confirmed next action from the seller."
        ],
        bullets: [
          "Remove spaces and retype the full code from the original notice",
          "Reject order IDs and confirm this is not an SPX Express number",
          "Retry this site's tracker and the official tracker at tracking.speedx.io",
          "Wait 24-48 hours if the only event is Shipping Label Created",
          "Ask the seller for a corrected number or handoff proof after that window",
          "Open a support case with screenshots if the number is still unrecognized and the promised ship date has passed"
        ]
      }
    ]
  },
  {
    slug: "speedx-arrived-at-facility-meaning",
    title: "Arrival at Destination Facility SpeedX — Next Step",
    description:
      "Arrival at Destination Facility means your SpeedX parcel reached the local hub. See what usually happens next and when Out for Delivery should appear.",
    category: "Tracking Basics",
    readTime: "7 min read",
    publishedDate: "2026-04-19",
    updatedDate: "2026-10-18",
    sections: [
      {
        heading: "What arrival at destination facility means",
        paragraphs: [
          "Arrival at destination facility means your SpeedX parcel reached the local hub that serves your delivery area. Out for delivery often follows within one to a few business days.",
          "In transit to destination facility means the package is still moving toward that hub. Quiet gaps during linehaul can be normal."
        ]
      },
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
          "24-48h: normal processing",
          "48h+: still common in busy hubs",
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
    title: "SpeedX Attempted Delivery: Meaning and Redelivery",
    description:
      "What a SpeedX Attempted Delivery scan means, why the courier could not leave the parcel, and the practical next steps to get a successful redelivery.",
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
    title: "SpeedX Returned to Sender: Reasons and Next Steps",
    description:
      "Why a SpeedX shipment can be returned to the sender, what the timeline usually looks like, and how to work with the seller on a recovery or replacement.",
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
      "Why SpeedX tracking can stay quiet after a departed-facility scan, how long a linehaul pause can last, and when the delay is worth escalating.",
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
        heading: "What the next scan usually means",
        paragraphs: [
          "The next event may show arrival at a destination facility, a linehaul handoff, customs processing, or an out-for-delivery assignment. A missing intermediate scan does not by itself mean the parcel stopped moving.",
          "Compare the event timestamp with the delivery estimate and destination route. Cross-border shipments and weekend transfers commonly take longer than local hub-to-hub legs."
        ],
        bullets: [
          "Arrival at facility: the next hub has received the parcel",
          "In transit: the parcel is moving between facilities",
          "Out for delivery: a local route has been assigned",
          "Exception: an address, weather, customs, or operational issue needs review"
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
          "Structured evidence avoids back-and-forth and shortens support resolution time. Check the latest scan with the free SpeedX tracking lookup before contacting the seller or carrier."
        ]
      }
    ]
  },
{
    slug: "temu-speedx-tracking",
    title: "Temu SpeedX Tracking: Find and Check Your Number",
    description:
      "Find the SpeedX tracking number on a Temu order, paste it in our free tracker or the official SpeedX tracker, and know what to do when scans pause.",
    category: "Marketplace Tracking",
    readTime: "11 min read",
    publishedDate: "2026-11-22",
    updatedDate: "2026-11-22",
    sections: [
      {
        heading: "What this Temu SpeedX tracking guide covers",
        paragraphs: [
          "If you bought something on Temu and the shipment is now moving with SpeedX, you need two things: the carrier tracking number, and a reliable place to look it up. This guide shows how to find that number in your Temu order details, how to check it on this site's free tracker and on the official SpeedX tracker, and what to do when the status looks stuck.",
          "This page is only about Temu orders that use SpeedX as the delivery carrier. For Shein orders, use the [Shein SpeedX tracking guide](/blog/shein-speedx-tracking-guide) instead. For TikTok Shop orders, use the [TikTok Shop SpeedX tracking](/blog/tiktok-shop-speedx-tracking) guide. SpeedXTracking is an independent help site. It is not Temu, and it is not the SpeedX carrier."
        ]
      },
      {
        heading: "How to find a SpeedX tracking number on Temu",
        paragraphs: [
          "Open the Temu app or website, go to your orders, and select the item that is in transit. Look for a shipment or logistics section. The tracking number is usually shown as a SpeedX, SPX, or SPXCN code, not the Temu order ID.",
          "Copy the full number exactly. Do not add spaces, and do not stop at the first letters. A truncated code often fails a lookup even when the shipment is real. If Temu shows only an order ID, wait for a shipment confirmation or logistics update before assuming the number is missing.",
          "If two numbers appear, use the one labeled as the carrier or logistics tracking number. Marketplace order IDs are for Temu support and payment questions; they usually will not work in a carrier tracker."
        ],
        bullets: [
          "Use the logistics or carrier tracking number, not the Temu order ID",
          "Copy the full SPX, SPXCN, or SpeedX code without spaces",
          "Compare the number in the app with any email or SMS shipping notice",
          "If no carrier number is listed yet, wait for a dispatch update from Temu"
        ]
      },
      {
        heading: "How to track a Temu SpeedX package",
        paragraphs: [
          "Paste the number into the [free SpeedX tracking lookup](/track-package) on this site. You should see the latest status and a scan timeline when carrier data is available. If the lookup is slow or fails, paste the same number on the [official SpeedX tracker](https://tracking.speedx.io/). The official tracker is first-party and may also show a proof-of-delivery photo after delivery.",
          "You can use both tools. This site adds plain-language help next to the status. The official tracker is the place to confirm the wording SpeedX itself publishes. Neither tool replaces Temu's in-app order page, which still matters for refunds, address changes, and seller messages.",
          "If the number looks valid but no carrier recognizes it, read [SpeedX tracking number not working](/blog/speedx-tracking-number-not-found). A label can exist in Temu before SpeedX has received the parcel."
        ]
      },
      {
        heading: "Statuses you will often see on a Temu SpeedX shipment",
        paragraphs: [
          "Temu and third-party trackers sometimes use short labels such as in transit. SpeedX tracking and support materials use more specific names, including Shipping Label Created, Arrival at Destination Facility, Out for Delivery, and Attempted Delivery. The [SpeedX tracking status meanings](/carriers/speedx/status) page is the canonical glossary on this site and links each official name to a longer guide.",
          "Shipping Label Created means the label exists, not that a courier already has the parcel. Arrival at Destination Facility means the parcel reached a local SpeedX facility that serves the delivery area. Out for Delivery means it is on a local route, usually for a same-day attempt. If the status is Attempted Delivery or Delivered and you cannot find the item, check notices, neighbors, and any photo on the official tracker."
        ]
      },
      {
        heading: "Why Temu SpeedX tracking sometimes looks stuck",
        paragraphs: [
          "Quiet gaps of 24 to 48 hours are common during long-distance travel, customs, and batch scan uploads. That pause can be normal even when the parcel is moving. Recheck the same number later before opening a ticket.",
          "Cross-border Temu orders can sit in customs or between partners with few public scans. Use the [SpeedX customs delay guide](/blog/speedx-customs-delay-guide) if the timeline shows a customs event, and the [tracking not updating](/guides/package-not-updating) guide if no new scan appears after a reasonable wait.",
          "Weekend timing is a separate question. SpeedX support says Saturday delivery is 8am-8pm local time in all locations, and Sunday delivery is 8am-8pm in select areas. See [Does SpeedX Deliver on Sunday?](/does-speedx-deliver-on-sunday) for the weekend answer."
        ]
      },
      {
        heading: "When to contact Temu, and when to contact SpeedX",
        paragraphs: [
          "For marketplace orders, start with Temu or the seller. They issued the label, they can confirm whether the number is correct, and they usually handle refund or reship decisions. Use the in-app help in your Temu account rather than a phone number published on an unofficial site.",
          "Contact SpeedX only after you have the full tracking number, screenshots of the latest scans, and a clear problem such as an exception, a missed attempt, or a delivered-but-missing parcel. Official support details belong to SpeedX, not to this site. You can find them through the official SpeedX website or tracker. This site does not invent phone numbers, email addresses, or hours.",
          "If the package is marked delivered and you cannot find it, follow the [delivered but not received checklist](/guides/delivered-not-received) and see [how to view a SpeedX proof-of-delivery photo](/blog/speedx-proof-of-delivery-photo)."
        ]
      }
    ]
  },
{
    slug: "tiktok-shop-speedx-tracking",
    title: "TikTok Shop SpeedX Tracking: Find Your Number",
    description:
      "Find a SpeedX tracking number on a TikTok Shop order, check it on our free tracker or the official SpeedX tracker, and troubleshoot quiet or failed scans.",
    category: "Marketplace Tracking",
    readTime: "10 min read",
    publishedDate: "2026-11-22",
    updatedDate: "2026-11-22",
    sections: [
      {
        heading: "What this TikTok Shop SpeedX guide is for",
        paragraphs: [
          "TikTok Shop orders can ship with several last-mile carriers depending on the seller, warehouse, and destination. This guide is only for orders that show SpeedX, SPX, or SPXCN as the delivery tracking number. It explains how to find that number in TikTok Shop, how to look it up, and what to do when the status is unclear.",
          "If your order is from Temu, use the [Temu SpeedX tracking](/blog/temu-speedx-tracking) guide. If it is from Shein, use the [Shein SpeedX tracking guide](/blog/shein-speedx-tracking-guide). SpeedXTracking is independent. It is not TikTok Shop and it is not the SpeedX carrier."
        ]
      },
      {
        heading: "How to find the tracking number in TikTok Shop",
        paragraphs: [
          "Open TikTok Shop or the TikTok app orders section and select the purchase. Look for shipping, logistics, or tracking details. The useful number is the carrier tracking code, which often starts with SPX or SPXCN for SpeedX-linked shipments.",
          "Do not paste the TikTok Shop order ID into a carrier tracker. Order IDs help TikTok Shop support identify the purchase, but they are not SpeedX tracking numbers. If the order page still says awaiting shipment or has no logistics number, the seller may not have handed the parcel to SpeedX yet.",
          "Copy the full code from the order screen and compare it with any shipping message TikTok Shop sent you. Hidden spaces or a shortened code are common reasons a lookup says the number is invalid."
        ],
        bullets: [
          "Open the individual TikTok Shop order, not just the payment receipt",
          "Copy the logistics or carrier tracking number in full",
          "Ignore the Shop order ID when using a SpeedX tracker",
          "Wait for a shipping update if no carrier number is listed yet"
        ]
      },
      {
        heading: "How to check TikTok Shop SpeedX tracking",
        paragraphs: [
          "Paste the number into the [free SpeedX tracking lookup](/track-package). When carrier data is available, you will see the latest status and a scan history. If that lookup is slow or fails, use the [official SpeedX tracker](https://tracking.speedx.io/) with the same number. The official tracker is the first-party source and may include a proof-of-delivery photo after a delivered scan.",
          "Keep the TikTok Shop order page open as well. Refunds, cancellations, and address changes are handled in the shop, not in a third-party tracker. If a number is not recognized, follow [SpeedX tracking number not working](/blog/speedx-tracking-number-not-found) before assuming the parcel is lost."
        ]
      },
      {
        heading: "How to read the status on a TikTok Shop SpeedX order",
        paragraphs: [
          "Shop pages sometimes summarize progress as shipped or in transit. SpeedX uses more precise names such as Shipping Label Created, Arrival at Destination Facility, Out for Delivery, and Attempted Delivery. Use the [SpeedX tracking status meanings](/carriers/speedx/status) page as the one status glossary on this site, then open the linked article for the event you see.",
          "A label-created event can last a day or two if the seller printed the label before pickup. Arrival at a destination facility usually means local sorting is next, not that a driver is already on the way. Out for Delivery is the same-day attempt window on many routes, but a late finish or access issue can push the stop to the next day. See [how late SpeedX delivers](/guides/speedx-delivery-hours) if you are waiting on an evening attempt."
        ]
      },
      {
        heading: "Common TikTok Shop tracking problems",
        paragraphs: [
          "The most common issues are a missing carrier number, a typo, and a normal scan gap during linehaul or customs. Recheck the full number, wait 24 to 48 hours after the last event, and compare the shop page with the official tracker.",
          "If TikTok Shop and SpeedX show different statuses, trust the latest official SpeedX scan for carrier progress, and use the shop page for order claims. Screenshots of both help if you need to message the seller.",
          "Do not assume a Philippines SPX Express shipment is the same network as SpeedX. If your tracking notice mentions SPX Express and a Shopee or local Philippines service, read [SPX vs SPX Express in the Philippines](/blog/spx-vs-spx-express-philippines) before pasting the number into a SpeedX tool."
        ]
      },
      {
        heading: "Who to contact for a TikTok Shop SpeedX package",
        paragraphs: [
          "Start with the seller or TikTok Shop order help. They can confirm the correct tracking number, update an address if that is still allowed, and open a refund or reship request. Use the official in-app support flow. This guide does not publish unofficial phone numbers.",
          "Escalate to SpeedX only when you have a recognized tracking number and a carrier-level issue, such as an exception, a failed attempt, or a delivered scan with no parcel. Official SpeedX contact details are on SpeedX's own site. If the parcel is marked delivered, also check [how to see a SpeedX proof-of-delivery photo](/blog/speedx-proof-of-delivery-photo) and the [delivered but not received checklist](/guides/delivered-not-received)."
        ]
      }
    ]
  },
{
    slug: "speedx-proof-of-delivery-photo",
    title: "How to See a SpeedX Proof-of-Delivery Photo",
    description:
      "See whether SpeedX captured a proof-of-delivery photo, where to view it on the official tracker, and what to do if the parcel is marked delivered but missing.",
    category: "Delivery Help",
    readTime: "10 min read",
    publishedDate: "2026-11-22",
    updatedDate: "2026-11-22",
    sections: [
      {
        heading: "What a SpeedX proof-of-delivery photo is",
        paragraphs: [
          "A proof-of-delivery photo is a picture taken at the drop-off, often of a parcel on a porch, at a door, or at another handover point. It is evidence of where the courier left the item, not a guarantee that you personally received it.",
          "This page explains how to look for that photo after a Delivered scan. It is not a general shipping glossary and it is not the status-meanings hub. For official status names, use [SpeedX tracking status meanings](/carriers/speedx/status). For a missing parcel after delivery, use the [delivered but not received checklist](/guides/delivered-not-received). SpeedXTracking is an independent guide, not the SpeedX carrier."
        ]
      },
      {
        heading: "Where to look for the photo",
        paragraphs: [
          "The most reliable place to check is the [official SpeedX tracker](https://tracking.speedx.io/). Paste your full SpeedX, SPX, or SPXCN number, open the shipment, and look at the latest Delivered event. If a photo was captured and published, it usually appears there with the delivery confirmation.",
          "You can also paste the number into this site's [free SpeedX tracking lookup](/track-package) to confirm the status and timeline. This site may not display the photo itself. Photo evidence is a first-party feature of the official tracker, and third-party tools do not always receive the image.",
          "If the official tracker is slow to load, try again, confirm you used the full number, and avoid using a marketplace order ID. A photo will not exist until the shipment is recorded as delivered, and not every delivered shipment includes one."
        ],
        bullets: [
          "Use the official tracker at tracking.speedx.io first",
          "Open the Delivered event, not only the summary status",
          "Use the full carrier tracking number, not an order ID",
          "Do not expect a photo before the package is marked delivered"
        ]
      },
      {
        heading: "Why some delivered SpeedX packages have no photo",
        paragraphs: [
          "Not every delivery produces a published picture. A courier may complete a handover without a camera capture, a locker or reception desk drop may not include a photo, or the image may not appear in the public tracker even if an attempt was recorded.",
          "We do not invent a rule for how long photos stay visible, or a promise that SpeedX always takes one. If no photo is shown, treat the official delivered scan, any signature or location note, and your own search of the drop area as the available evidence. If the official page is unclear, check with SpeedX support through official SpeedX channels.",
          "A missing photo is not, by itself, proof that the parcel was not delivered. It also does not prove it was stolen. It simply means you have less visual evidence and should move carefully through a missing-package checklist."
        ]
      },
      {
        heading: "What to do if it is marked delivered and you cannot find the parcel",
        paragraphs: [
          "Search the drop area, any camera or building lobby, and with neighbors or household members. Recheck the official tracker for a photo, a location note, or a name on the delivery event. Save screenshots of the delivered scan and any image you do find.",
          "Then follow the [delivered but not received checklist](/guides/delivered-not-received). For marketplace orders from Shein, Temu, or TikTok Shop, contact the seller or shop help first and include those screenshots. They usually control refund or reship decisions.",
          "If tracking instead shows Attempted Delivery, there may be no photo of a completed drop. Use [what to do after Attempted Delivery](/blog/speedx-attempted-delivery-what-next) and look for a notice or reattempt instruction on the official tracker."
        ]
      },

      {
        heading: "What a photo can and cannot prove",
        paragraphs: [
          "A clear photo of a parcel at your door is useful evidence, especially if you need to show a seller where the courier left the item. It can also help you search a specific step, mat, or side entrance you might have missed.",
          "A photo cannot, by itself, settle every dispute. It may not show the full street, a later removal, or whether the address was correct. If the image is dark, cropped, or hard to match to your building, say that plainly in your seller message and include the official delivered timestamp.",
          "Never share a photo that reveals a neighbor's private space more widely than needed. Send it through the official shop or carrier support form, and keep a copy with your screenshots. If you cannot see a photo and still need help, ask SpeedX support through official SpeedX channels whether one exists, rather than relying on an unofficial site to retrieve it."
        ]
      },
      {
        heading: "Proof of delivery versus other SpeedX statuses",
        paragraphs: [
          "Proof of delivery only becomes relevant after a completed delivery event. Shipping Label Created, Arrival at Destination Facility, and Out for Delivery are earlier steps and would not normally include a drop-off photo. Read those events on the [status meanings](/carriers/speedx/status) page so you do not look for a photo too early.",
          "If the status has not reached Delivered and you are only wondering how late a driver might arrive, use [How Late Does SpeedX Deliver?](/guides/speedx-delivery-hours). If the number will not open on the official tracker, use [SpeedX tracking number not working](/blog/speedx-tracking-number-not-found)."
        ]
      }
    ]
  },
{
    slug: "spx-vs-spx-express-philippines",
    title: "SPX vs SPX Express in the Philippines Explained",
    description:
      "SPX and SPX Express are easy to confuse in the Philippines. Learn how to tell a SpeedX shipment from SPX Express, and which official tracker to use.",
    category: "Tracking Basics",
    readTime: "10 min read",
    publishedDate: "2026-11-22",
    updatedDate: "2026-11-22",
    sections: [
      {
        heading: "Why SPX and SPX Express get confused",
        paragraphs: [
          "Shoppers in and from the Philippines often see the letters SPX on a tracking number or a shipping notice and assume every SPX label belongs to the same company. In practice, the same three letters appear in more than one logistics context, and using the wrong tracker can make a valid number look broken.",
          "This guide helps you tell a SpeedX shipment (the carrier covered by this site, with an official tracker at tracking.speedx.io) apart from a shipment labeled SPX Express, which is commonly associated with Shopee deliveries in the Philippines. This page is not a tracking-number format guide and it is not a not-found checklist. For format help, use [SpeedX tracking number](/speedx-tracking-number) and [SPXCN tracking number meaning](/guides/spxcn-tracking-number-meaning).",
          "SpeedXTracking is independent. We do not claim a corporate relationship between SpeedX and SPX Express, and we do not invent phone numbers, depot lists, or service hours for either network. When you are unsure, use the marketplace name on your order and the official tracker linked from that order."
        ]
      },
      {
        heading: "How to tell which service you have",
        paragraphs: [
          "Start with the store and the wording on the shipping notice, not with the first three letters of the code. If you bought from Shopee in the Philippines and the logistics name is SPX Express, you should track the parcel with the official SPX Express or Shopee tracking tools shown in that order, not with a SpeedX-only workflow.",
          "If you bought from a retailer that shipped with SpeedX, including some cross-border marketplace orders, and the notice points to SpeedX or to speedx.io, use the [free SpeedX tracking lookup](/track-package) and the [official SpeedX tracker](https://tracking.speedx.io/). A SpeedX number may look like SPX or SPXCN, which is why the prefix alone is not a safe test.",
          "When the order page, the email, and a tracker disagree, trust the official tool named by the marketplace or by the carrier brand printed on the label. If a SpeedX tool says the number is invalid, it may simply be an SPX Express shipment, or the label may not have been received yet."
        ],
        bullets: [
          "Read the carrier name on the order or shipping notice first",
          "Shopee Philippines orders labeled SPX Express belong in official SPX Express or Shopee tracking",
          "SpeedX shipments should be checked at tracking.speedx.io and on this site's tracker",
          "An SPX or SPXCN prefix is not enough to decide which network you have"
        ]
      },
      {
        heading: "What to do if you pasted the number in the wrong place",
        paragraphs: [
          "If a SpeedX lookup returns not found, do not assume the parcel is lost. Confirm the marketplace, confirm the carrier name, and try the official tracker that matches that name. If it is a SpeedX number that still fails, use [SpeedX tracking number not working](/blog/speedx-tracking-number-not-found) for typo, timing, and format checks.",
          "If you are tracking SpeedX and the format looks like SPXCN, the [SPXCN format explained](/blog/spxcn-tracking-number-format-explained) article covers that cross-border pattern. That is a different question from whether the carrier is SPX Express in the Philippines.",
          "Keep screenshots of the order page and both tracker results. Those screenshots help a seller or shop support team tell you which number is the live one."
        ]
      },
      {
        heading: "Delivery updates still follow the correct carrier",
        paragraphs: [
          "Status wording can also differ. SpeedX tracking and support materials use names such as Shipping Label Created, Arrival at Destination Facility, Out for Delivery, and Attempted Delivery. Those meanings are explained on the [SpeedX status meanings](/carriers/speedx/status) page and apply to SpeedX shipments, not automatically to every SPX-branded label you see in the Philippines.",
          "Do not apply SpeedX weekend or evening hours to an SPX Express shipment. For SpeedX weekend questions, SpeedX support says Saturday delivery is 8am-8pm local time in all locations and Sunday delivery is 8am-8pm in select areas; see [Does SpeedX Deliver on Sunday?](/does-speedx-deliver-on-sunday). For SPX Express hours or policies, use the official SPX Express or Shopee help pages. We do not invent those policies here."
        ]
      },
      {
        heading: "If you still cannot tell the two apart",
        paragraphs: [
          "Ask the seller or the marketplace support team which carrier is handling the parcel and which official tracking page they recommend. That answer is more reliable than a guess based on the letters SPX.",
          "If they confirm it is SpeedX, stay on this site's tracker and the official SpeedX tracker, then use the matching status or troubleshooting guide. If they confirm it is SPX Express, leave the SpeedX tools and follow the official Philippines tracker they provide.",
          "This distinction exists so you do not open the wrong ticket or wait on the wrong network. It is not a ranking of either service. It is only a way to use the correct official information."
        ]
      }
    ]
  }
];
