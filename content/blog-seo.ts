/**
 * JR-style Writing Guidelines enrichment for SpeedXTracking blogs.
 * Primary + secondary keywords, FAQs (FAQPage schema), and descriptive internal links.
 */

export type BlogRelatedLink = {
  href: string;
  label: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSeoEnrichment = {
  keywords: string[];
  faqs: BlogFaq[];
  relatedLinks: BlogRelatedLink[];
};

const track = { href: "/track-package", label: "Free SpeedX tracking lookup" };
const hub = { href: "/carriers/speedx", label: "SpeedX tracking hub" };
const status = { href: "/carriers/speedx/status", label: "SpeedX status meanings" };
const delivery = { href: "/speedx-delivery", label: "SpeedX delivery times" };
const ofd = { href: "/speedx-out-for-delivery", label: "SpeedX out for delivery meaning" };
const contact = { href: "/speedx-contact-support", label: "SpeedX customer service" };
const shein = { href: "/carriers/speedx/shein", label: "Shein SpeedX tracking" };
const hours = { href: "/guides/speedx-delivery-hours", label: "How late does SpeedX deliver?" };
const notDelivered = { href: "/speedx-package-not-delivered", label: "SpeedX package not delivered" };
const shipping = { href: "/speedx-shipping", label: "SpeedX shipping guide" };
const trackingNumber = { href: "/speedx-tracking-number", label: "SpeedX tracking number guide" };
const spxcn = { href: "/guides/spxcn-tracking-number-meaning", label: "SPXCN tracking number meaning" };
const temu = { href: "/blog/temu-speedx-tracking", label: "Temu SpeedX tracking" };
const tiktok = { href: "/blog/tiktok-shop-speedx-tracking", label: "TikTok Shop SpeedX tracking" };
const podPhoto = { href: "/blog/speedx-proof-of-delivery-photo", label: "SpeedX proof-of-delivery photo" };
const spxVs = { href: "/blog/spx-vs-spx-express-philippines", label: "SPX vs SPX Express in the Philippines" };
const notWorking = { href: "/blog/speedx-tracking-number-not-found", label: "SpeedX tracking number not working" };

export const blogSeoBySlug: Record<string, BlogSeoEnrichment> = {
  "speedx-tracking-not-updating": {
    keywords: [
      "SpeedX tracking not updating",
      "SpeedX tracking stuck",
      "SpeedX no update",
      "SPXCN tracking not updating",
      "SpeedX scan delay"
    ],
    faqs: [
      {
        question: "Why is my SpeedX tracking not updating?",
        answer:
          "SpeedX tracking often pauses during linehaul, customs, or batch uploads. A 24–48 hour gap can be normal before the next public scan appears."
      },
      {
        question: "How long should I wait before contacting support?",
        answer:
          "Wait 24–48 hours after the latest event for domestic moves, and up to 72 hours on international legs, then escalate with screenshots if the seller ETA has also passed."
      },
      {
        question: "What should I include in a SpeedX delay ticket?",
        answer:
          "Include the full tracking number, order ID, destination ZIP, last scan timestamp, and a one-line timeline so support can open a case faster."
      }
    ],
    relatedLinks: [track, status, spxcn, contact, hub]
  },
  "speedx-delivery-time-by-region": {
    keywords: [
      "SpeedX delivery time",
      "how long does SpeedX take",
      "SpeedX delivery times by region",
      "SpeedX international delivery time",
      "SpeedX domestic ETA"
    ],
    faqs: [
      {
        question: "How long does SpeedX take to deliver?",
        answer:
          "Most domestic SpeedX parcels arrive in about 2–7 business days after handoff. Cross-border SpeedX delivery often takes about 7–20 days including customs."
      },
      {
        question: "What are typical SpeedX delivery times?",
        answer:
          "Domestic SpeedX shipments commonly take about 2–7 business days after handoff. Cross-border SpeedX delivery often takes about 7–20 days including customs."
      },
      {
        question: "Are SpeedX delivery times guaranteed?",
        answer:
          "No. Delivery times are estimates affected by route, customs, weather, destination density, and peak volume. Use the latest scan and seller estimate together."
      },
      {
        question: "Where do I check SpeedX delivery hours vs regional ETAs?",
        answer:
          "Use this regional guide for domestic vs international windows. For evening stop times and out-for-delivery timing, open the SpeedX delivery hours and out-for-delivery guides."
      }
    ],
    relatedLinks: [delivery, hours, ofd, shipping, track]
  },
  "shein-speedx-tracking-guide": {
    keywords: [
      "Shein SpeedX tracking",
      "SpeedX tracking Shein",
      "Track Shein SpeedX package",
      "SPXCN Shein tracking",
      "Shein SpeedX delivery"
    ],
    faqs: [
      {
        question: "How do I use SpeedX tracking for a Shein order?",
        answer:
          "Copy the carrier tracking number from Shein shipment details or the shipping email, then paste it into a free SpeedX tracker to read seller, customs, and final-mile events in order."
      },
      {
        question: "Who should I contact when a Shein SpeedX shipment is delayed?",
        answer:
          "Start with Shein for order, address, or refund issues. Use SpeedX support for carrier scan questions after the seller confirms handoff."
      },
      {
        question: "What does SPXCN mean on a Shein order?",
        answer:
          "SPXCN is a common SpeedX-linked cross-border format. Scans can update in batches during export and customs, so short quiet windows are common."
      }
    ],
    relatedLinks: [shein, track, temu, tiktok, spxcn, delivery, contact]
  },
  "delivered-but-not-received-speedx": {
    keywords: [
      "SpeedX delivered but not received",
      "SpeedX says delivered missing",
      "SpeedX tracking delivered not here",
      "SpeedX proof of delivery",
      "Missing SpeedX package"
    ],
    faqs: [
      {
        question: "SpeedX says delivered but I do not have the package. What first?",
        answer:
          "Check porch, side doors, lockers, reception, and neighbors, then wait up to 24 hours for scan sync before opening a claim."
      },
      {
        question: "How do I file a SpeedX delivered-not-received claim?",
        answer:
          "Contact the seller with screenshots, delivery window, full address, and a short non-receipt statement. Request proof of delivery and a case ID."
      },
      {
        question: "Should I contact SpeedX or the seller first?",
        answer:
          "For marketplace orders, start with the seller. They can confirm the drop photo or open the first carrier case with order context."
      }
    ],
    relatedLinks: [notDelivered, contact, ofd, status, hub]
  },
  "tracking-status-meanings-explained": {
    keywords: [
      "SpeedX tracking status meanings",
      "SpeedX in transit meaning",
      "SpeedX exception meaning",
      "SpeedX delivered meaning",
      "SpeedX status explained"
    ],
    faqs: [
      {
        question: "What does SpeedX in transit mean?",
        answer:
          "In transit means the parcel is moving through the network between facilities. Quiet gaps of 24–48 hours can still be normal on long-haul legs."
      },
      {
        question: "What does a SpeedX delivery exception mean?",
        answer:
          "An exception is a temporary obstacle such as address, access, customs, or operational delay. It does not automatically mean the package is lost."
      },
      {
        question: "What should I do when SpeedX shows delivered?",
        answer:
          "Confirm alternate drop points first. If the parcel is missing after 24 hours, gather screenshots and open a seller claim for proof of delivery."
      }
    ],
    relatedLinks: [status, ofd, track, delivery, hub]
  },
  "best-time-to-contact-carrier-support": {
    keywords: [
      "SpeedX customer service",
      "Contact SpeedX support",
      "SpeedX tracking support",
      "SpeedX contact script",
      "When to contact SpeedX"
    ],
    faqs: [
      {
        question: "When should I contact SpeedX support?",
        answer:
          "Contact after normal scan windows pass—about 48 hours domestic or 72 hours international with no update—or sooner if an exception or missed ETA appears."
      },
      {
        question: "What should I say to SpeedX support?",
        answer:
          "Send tracking number, order ID, destination ZIP, last scan time, and one clear request such as locate package or confirm next attempt."
      },
      {
        question: "Should marketplace shoppers contact the seller first?",
        answer:
          "Yes. Sellers can confirm fulfillment and open the first case. Use SpeedX support when you need carrier-level scan or delivery confirmation."
      }
    ],
    relatedLinks: [contact, track, notDelivered, hub, status]
  },
  "does-speedx-deliver-late-at-night-guide": {
    keywords: [
      "How late does SpeedX deliver",
      "SpeedX delivery hours",
      "Does SpeedX deliver at night",
      "SpeedX evening delivery",
      "What time does SpeedX stop delivering"
    ],
    faqs: [
      {
        question: "Does SpeedX deliver late at night?",
        answer:
          "SpeedX can complete evening deliveries on busy urban routes. There is no single national cutoff for every address."
      },
      {
        question: "What time does SpeedX stop delivering?",
        answer:
          "Stop times vary by route. If status stays out for delivery overnight, recheck the next morning before escalating."
      }
    ],
    relatedLinks: [hours, ofd, delivery]
  },
  "spxcn-tracking-number-format-explained": {
    keywords: [
      "SPXCN tracking number meaning",
      "SPXCN format",
      "What is SPXCN",
      "SPXCN SpeedX tracking",
      "SPXCN delays"
    ],
    faqs: [
      {
        question: "What does SPXCN mean?",
        answer:
          "SPXCN is a common SpeedX-linked cross-border tracking format used on marketplace shipments. Copy the full code without spaces."
      },
      {
        question: "Why does SPXCN tracking look stuck?",
        answer:
          "Export, customs, and linehaul handoffs often create 24–48 hour quiet windows. Batch updates are normal during those stages."
      },
      {
        question: "When should I escalate an SPXCN shipment?",
        answer:
          "Escalate after 5+ days with no movement once the seller ETA has passed, and include timeline screenshots with the full SPXCN code."
      }
    ],
    relatedLinks: [spxcn, trackingNumber, track, shein, hub]
  },
  "how-speedx-tracking-works": {
    keywords: [
      "How SpeedX tracking works",
      "SpeedX tracking explained",
      "SpeedX label to delivered",
      "SpeedX scan stages",
      "SPXCN tracking stages"
    ],
    faqs: [
      {
        question: "How does SpeedX tracking work from label to delivered?",
        answer:
          "Tracking usually moves from label created to acceptance, in transit, facility, out for delivery, then delivered. Public scans can skip intermediate legs."
      },
      {
        question: "When does the delivery clock really start?",
        answer:
          "True transit timing starts at the first physical acceptance scan, not only the label-created event."
      },
      {
        question: "Why do SpeedX timelines jump suddenly?",
        answer:
          "Carriers often upload events in batches after hub processing, so several scans can appear at once after a quiet period."
      }
    ],
    relatedLinks: [track, trackingNumber, status, delivery, hub]
  },
  "track-speedx-packages-in-pakistan": {
    keywords: [
      "Track SpeedX Pakistan",
      "SpeedX Pakistan delivery",
      "SpeedX customs Pakistan",
      "SpeedX tracking Pakistan ETA"
    ],
    faqs: [
      {
        question: "How long does SpeedX take to Pakistan?",
        answer:
          "Cross-border SpeedX shipments to Pakistan often take multiple stages: export, customs, destination handoff, then local delivery. Quiet customs windows are common."
      },
      {
        question: "When should I escalate a Pakistan-bound SpeedX package?",
        answer:
          "Escalate after 5+ days with no meaningful movement once ETA context is considered, starting with the seller and full timeline screenshots."
      }
    ],
    relatedLinks: [track, delivery, contact, hub]
  },
  "speedx-delivery-exception-codes": {
    keywords: [
      "SpeedX delivery exception",
      "SpeedX exception meaning",
      "SpeedX delivery hold",
      "SpeedX address exception",
      "SpeedX customs exception"
    ],
    faqs: [
      {
        question: "What does a SpeedX delivery exception mean?",
        answer:
          "It usually means a temporary obstacle such as address, access, customs, or operational delay—not an automatic lost package."
      },
      {
        question: "What should I do after a SpeedX exception?",
        answer:
          "Correct destination details first, monitor for the next scan, then escalate with evidence if no update appears in the expected window."
      },
      {
        question: "Are exception codes the same as lost packages?",
        answer:
          "No. Many exception events resolve after address confirmation, a second attempt, or customs clearance."
      }
    ],
    relatedLinks: [status, notDelivered, contact, ofd, hub]
  },
  "speedx-customs-delay-guide": {
    keywords: [
      "SpeedX customs delay",
      "SpeedX stuck in customs",
      "SpeedX customs hold",
      "International SpeedX delay",
      "SPXCN customs"
    ],
    faqs: [
      {
        question: "Why is my SpeedX package stuck in customs?",
        answer:
          "Customs holds usually happen when declared value, invoice data, or classification needs review. Quiet scans during review are common."
      },
      {
        question: "What documents help clear a SpeedX customs delay?",
        answer:
          "Confirm invoice value, item description, recipient name, and address consistency across seller and shipment records."
      },
      {
        question: "When should I escalate a SpeedX customs hold?",
        answer:
          "If no clearance event appears after several business days, escalate with timeline screenshots and request a case reference."
      }
    ],
    relatedLinks: [delivery, spxcn, contact, track, shipping]
  },
  "speedx-out-for-delivery-but-not-delivered": {
    keywords: [
      "SpeedX out for delivery but not delivered",
      "Out for delivery SpeedX next day",
      "SpeedX out for delivery stuck",
      "SpeedX same day delivery",
      "SpeedX final mile delay"
    ],
    faqs: [
      {
        question: "How long does SpeedX take when out for delivery?",
        answer:
          "Out for delivery usually means same-day intent, but route overflow, traffic, weather, or access issues can move the attempt to the next day."
      },
      {
        question: "What should I do if SpeedX is out for delivery but not delivered?",
        answer:
          "Check alternate drop points, wait through the local delivery window, recheck the next morning, then contact the seller with screenshots if unchanged."
      },
      {
        question: "Does out for delivery guarantee morning arrival?",
        answer:
          "No. Stop order on the route can place your package late in the day or roll it to the next attempt."
      }
    ],
    relatedLinks: [ofd, notDelivered, hours, status, contact]
  },
  "speedx-label-created-no-movement": {
    keywords: [
      "SpeedX label created no movement",
      "SpeedX label created stuck",
      "SpeedX no first scan",
      "SpeedX waiting for pickup",
      "Label created SpeedX meaning"
    ],
    faqs: [
      {
        question: "What does SpeedX label created mean?",
        answer:
          "It usually means shipment data was submitted, but the parcel may still be with the seller and not yet physically scanned."
      },
      {
        question: "How long should label created last?",
        answer:
          "Most shipments get a first movement scan within 24–72 hours depending on seller pickup timing. Escalate after 72 hours with no acceptance scan."
      },
      {
        question: "Who do I contact if label created never moves?",
        answer:
          "Contact the seller first to confirm physical handoff date and pickup reference before opening a carrier case."
      }
    ],
    relatedLinks: [track, trackingNumber, contact, status, hub]
  },
  "speedx-tracking-number-not-found": {
    keywords: [
      "SpeedX tracking number not working",
      "SpeedX tracking number invalid",
      "SpeedX tracking number not found",
      "SpeedX tracking not found",
      "Invalid SpeedX tracking number"
    ],
    faqs: [
      {
        question: "Why is my SpeedX tracking number not working or not found?",
        answer:
          "Most failures are typos, incomplete codes, marketplace order IDs, a label created before pickup, or a number that belongs to another SPX-branded service. Recheck the full carrier number first."
      },
      {
        question: "What should I do if SpeedX tracking says the number is invalid?",
        answer:
          "Copy the full SpeedX, SPX, or SPXCN code from the original notice, avoid the store order ID, then retry this site's tracker and the official SpeedX tracker at tracking.speedx.io."
      },
      {
        question: "How long should I wait after a new label before a number works?",
        answer:
          "Wait 24-48 hours after Shipping Label Created for the first pickup or intake scan. If the official tracker still does not recognize the number after that window, ask the seller to confirm the code."
      }
    ],
    relatedLinks: [
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/speedx-tracking-number", label: "SpeedX tracking number guide" },
      { href: "/blog/spx-vs-spx-express-philippines", label: "SPX vs SPX Express in the Philippines" },
      { href: "/blog/speedx-label-created-no-movement", label: "Shipping Label Created with no movement" },
      { href: "/carriers/speedx/status", label: "SpeedX status meanings" }
    ]
  },
  "speedx-arrived-at-facility-meaning": {
    keywords: [
      "Arrival at destination facility SpeedX",
      "SpeedX arrived at facility meaning",
      "SpeedX destination facility",
      "SpeedX facility scan",
      "In transit to destination facility SpeedX"
    ],
    faqs: [
      {
        question: "What does arrival at destination facility SpeedX mean?",
        answer:
          "It means your parcel reached the local hub that serves your delivery area. Out for delivery often follows within one to a few business days."
      },
      {
        question: "How long can SpeedX stay at a facility?",
        answer:
          "A 12–48 hour facility window is common. Peak volume and weather can extend that without meaning the package is lost."
      },
      {
        question: "What comes after destination facility?",
        answer:
          "Usually sorting, then out for delivery, then delivered. Monitor the next scan rather than assuming same-hour drop-off."
      }
    ],
    relatedLinks: [ofd, status, delivery, track, hub]
  },
  "speedx-attempted-delivery-what-next": {
    keywords: [
      "SpeedX attempted delivery",
      "SpeedX delivery attempt failed",
      "SpeedX redelivery",
      "SpeedX missed delivery",
      "SpeedX second delivery attempt"
    ],
    faqs: [
      {
        question: "What does SpeedX attempted delivery mean?",
        answer:
          "It usually means access, recipient availability, or route timing prevented a successful drop. It does not automatically mean return to sender."
      },
      {
        question: "How do I get SpeedX redelivery?",
        answer:
          "Update unit, gate, and phone details, add safe-drop notes if available, and ask the seller to submit a carrier redelivery request."
      },
      {
        question: "When does attempted delivery become return to sender?",
        answer:
          "Multiple failed attempts or unresolved address issues increase return risk. Escalate immediately after a second failed attempt."
      }
    ],
    relatedLinks: [notDelivered, contact, ofd, status, hub]
  },
  "speedx-returned-to-sender": {
    keywords: [
      "SpeedX returned to sender",
      "SpeedX RTS",
      "SpeedX package returned",
      "SpeedX return shipment",
      "SpeedX failed delivery return"
    ],
    faqs: [
      {
        question: "Why was my SpeedX package returned to sender?",
        answer:
          "Returns usually follow failed delivery attempts, invalid address details, refusal, or customs rejection on cross-border shipments."
      },
      {
        question: "What happens after a SpeedX return scan?",
        answer:
          "The parcel moves to a return hub before merchant receipt. Seller policy then decides refund, re-shipment, or store credit."
      },
      {
        question: "How can I prevent SpeedX returns?",
        answer:
          "Use complete address formatting, delivery notes for complex buildings, and a monitored phone number before checkout."
      }
    ],
    relatedLinks: [contact, notDelivered, status, track, hub]
  },
  "speedx-departed-facility-no-update": {
    keywords: [
      "SpeedX departed facility no update",
      "SpeedX departed facility stuck",
      "SpeedX in transit no scan",
      "SpeedX linehaul delay",
      "SpeedX tracking pause after departure"
    ],
    faqs: [
      {
        question: "Is SpeedX departed facility with no update normal?",
        answer:
          "Yes. After departure, parcels often travel long-haul without intermediate public scans until the next hub receives them."
      },
      {
        question: "How long should I wait after departed facility?",
        answer:
          "A 24–48 hour gap is frequently normal. Prepare escalation details after 72 hours and open a formal case after 5+ days with no movement."
      },
      {
        question: "What details speed up support after a departure gap?",
        answer:
          "Share last known location, exact timestamp, destination post code, and expected delivery date in one concise message."
      }
    ],
    relatedLinks: [status, track, contact, delivery, hub]
  },
  "temu-speedx-tracking": {
    keywords: [
      "Temu SpeedX tracking",
      "Temu SpeedX tracking number",
      "Track Temu SpeedX package",
      "Temu SPX tracking",
      "Temu SPXCN tracking"
    ],
    faqs: [
      {
        question: "How do I track a Temu order shipped with SpeedX?",
        answer:
          "Open the Temu order, copy the full SpeedX, SPX, or SPXCN logistics number—not the Temu order ID—then paste it into this site's free tracker or the official SpeedX tracker at tracking.speedx.io."
      },
      {
        question: "Why does my Temu SpeedX tracking number say not found?",
        answer:
          "The label may have been created before SpeedX received the parcel, the code may be incomplete, or an order ID was used by mistake. Wait 24-48 hours after label creation, then retry the official tracker."
      },
      {
        question: "Is this Temu SpeedX page the same as the Shein guide?",
        answer:
          "No. This page is only for Temu orders that use SpeedX. Shein orders have a separate Shein SpeedX tracking guide so the two marketplaces are not mixed."
      }
    ],
    relatedLinks: [
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/blog/shein-speedx-tracking-guide", label: "Shein SpeedX tracking guide" },
      { href: "/blog/tiktok-shop-speedx-tracking", label: "TikTok Shop SpeedX tracking" },
      { href: "/blog/speedx-tracking-number-not-found", label: "Tracking number not working" },
      { href: "/carriers/speedx/status", label: "SpeedX status meanings" }
    ]
  },
  "tiktok-shop-speedx-tracking": {
    keywords: [
      "TikTok Shop SpeedX tracking",
      "TikTok Shop SpeedX tracking number",
      "Track TikTok Shop SpeedX",
      "TikTok Shop SPX tracking"
    ],
    faqs: [
      {
        question: "How do I find a SpeedX tracking number on TikTok Shop?",
        answer:
          "Open the TikTok Shop order and copy the logistics or carrier tracking number. Do not paste the Shop order ID into a SpeedX tracker."
      },
      {
        question: "What should I do if TikTok Shop SpeedX tracking fails?",
        answer:
          "Confirm the full carrier number, try the official SpeedX tracker at tracking.speedx.io, and wait 24-48 hours if the label was just created. Then contact TikTok Shop or the seller through in-app help."
      },
      {
        question: "Does a TikTok Shop SPX number always mean SpeedX?",
        answer:
          "Not always. Some notices use similar SPX letters for other services, including SPX Express in the Philippines. Check the carrier name on the order before choosing a tracker."
      }
    ],
    relatedLinks: [
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/blog/temu-speedx-tracking", label: "Temu SpeedX tracking" },
      { href: "/blog/shein-speedx-tracking-guide", label: "Shein SpeedX tracking guide" },
      { href: "/blog/spx-vs-spx-express-philippines", label: "SPX vs SPX Express in the Philippines" },
      { href: "/carriers/speedx/status", label: "SpeedX status meanings" }
    ]
  },
  "speedx-proof-of-delivery-photo": {
    keywords: [
      "SpeedX proof of delivery photo",
      "SpeedX POD photo",
      "SpeedX delivery photo",
      "SpeedX delivered picture",
      "How to see SpeedX proof of delivery"
    ],
    faqs: [
      {
        question: "Where can I see a SpeedX proof-of-delivery photo?",
        answer:
          "Check the official SpeedX tracker at tracking.speedx.io after the shipment is marked delivered. Open the delivered event and look for a photo. This independent site may not display the image."
      },
      {
        question: "Does every SpeedX delivery include a photo?",
        answer:
          "No. Not every delivery publishes a photo. A locker drop, a handover without a camera capture, or a missing image on the public tracker can all mean no picture is available."
      },
      {
        question: "What if SpeedX says delivered but I cannot find the package or a photo?",
        answer:
          "Search the drop area, save screenshots of the official delivered scan, and follow the delivered-but-not-received checklist. Contact the seller or shop help with that evidence."
      }
    ],
    relatedLinks: [
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/guides/delivered-not-received", label: "Delivered but not received checklist" },
      { href: "/blog/speedx-attempted-delivery-what-next", label: "Attempted delivery next steps" },
      { href: "/carriers/speedx/status", label: "SpeedX status meanings" },
      { href: "/shipping-terms", label: "Shipping terms glossary" }
    ]
  },
  "spx-vs-spx-express-philippines": {
    keywords: [
      "SPX vs SPX Express",
      "SPX Express Philippines",
      "SPX Express vs SpeedX",
      "SPX Philippines tracking",
      "Is SPX the same as SpeedX"
    ],
    faqs: [
      {
        question: "Is SPX Express in the Philippines the same as SpeedX?",
        answer:
          "They are easy to confuse because both can use SPX letters, but a Shopee Philippines shipment labeled SPX Express should be tracked with official SPX Express or Shopee tools. A SpeedX shipment should be checked at tracking.speedx.io. This site does not claim a corporate relationship."
      },
      {
        question: "How do I know which tracker to use?",
        answer:
          "Read the carrier name on the order or shipping notice. If it says SPX Express and the purchase is on Shopee Philippines, use the official tools from that order. If it points to SpeedX or speedx.io, use the official SpeedX tracker and this site's lookup."
      },
      {
        question: "Why does a Philippines SPX number fail in a SpeedX tracker?",
        answer:
          "The number may belong to SPX Express rather than SpeedX, or the label may not have been received yet. Confirm the carrier name, then use the matching official tracker."
      }
    ],
    relatedLinks: [
      { href: "/track-package", label: "Free SpeedX tracking lookup" },
      { href: "/speedx-tracking-number", label: "SpeedX tracking number guide" },
      { href: "/guides/spxcn-tracking-number-meaning", label: "SPXCN tracking number meaning" },
      { href: "/blog/speedx-tracking-number-not-found", label: "Tracking number not working" },
      { href: "/carriers/speedx/status", label: "SpeedX status meanings" }
    ]
  },
};

export function getBlogSeo(slug: string): BlogSeoEnrichment {
  return (
    blogSeoBySlug[slug] ?? {
      keywords: ["SpeedX tracking", "SpeedX delivery", "SpeedX package tracking"],
      faqs: [],
      relatedLinks: [track, hub, status]
    }
  );
}
