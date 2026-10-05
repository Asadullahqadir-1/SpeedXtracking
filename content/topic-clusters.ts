export type TopicClusterLink = {
  href: string;
  label: string;
  blurb: string;
};

export type TopicCluster = {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  summary: string;
  primaryKeyword: string;
  relatedKeywords: string[];
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  clusterLinks: TopicClusterLink[];
};

export const topicClusters: TopicCluster[] = [
  {
    slug: "out-for-delivery",
    title: "SpeedX Out for Delivery — Meaning & Fixes",
    h1: "SpeedX Out for Delivery: Meaning, Timing, and What To Do Next",
    metaDescription:
      "What SpeedX out for delivery means, how long it takes, and what to do if out for delivery but not delivered the same day.",
    summary:
      "SpeedX out for delivery means your parcel is on a local driver route. Most packages arrive the same day, but route order, traffic, and access issues can delay the drop or push it to the next attempt.",
    primaryKeyword: "speedx out for delivery",
    relatedKeywords: [
      "speedx out for delivery but not delivered",
      "speed x out for delivery",
      "out for delivery meaning speedx"
    ],
    sections: [
      {
        heading: "What SpeedX out for delivery means",
        paragraphs: [
          "Out for delivery is the final-mile stage. The package left the local facility and is assigned to a delivery route. It does not guarantee a morning or afternoon stop time.",
          "Drivers follow stop order based on route density, traffic, and building access. An early out-for-delivery scan can still arrive in the evening."
        ]
      },
      {
        heading: "SpeedX out for delivery but not delivered",
        paragraphs: [
          "If tracking still says out for delivery after the local delivery day ends, wait until the next morning before escalating. Many routes overflow and complete undelivered stops the next day.",
          "Check porch, side doors, parcel lockers, reception desks, and neighbors first. Then save a screenshot of the latest scan before contacting the seller."
        ],
        bullets: [
          "Wait until end of local delivery day",
          "Recheck tracking the next morning",
          "Confirm address and gate access details",
          "Contact seller with timeline screenshots"
        ]
      },
      {
        heading: "How long SpeedX takes when out for delivery",
        paragraphs: [
          "An out-for-delivery package is usually intended for delivery during that local day. Weather, volume spikes, and unfinished routes can roll the attempt forward.",
          "Use the seller ETA and latest scan together. If both windows are missed and status is unchanged for 24 hours after out for delivery, start seller support."
        ]
      }
    ],
    faqs: [
      {
        question: "What does SpeedX out for delivery mean?",
        answer:
          "It means the package is on a local delivery route and is usually expected the same day, unless traffic, route overflow, or access problems delay the stop."
      },
      {
        question: "SpeedX says out for delivery but not delivered. What should I do?",
        answer:
          "Wait until the end of the delivery day, check alternate drop points, then recheck tracking the next morning. If still unchanged, contact the seller with screenshots."
      },
      {
        question: "How long does SpeedX take to deliver when out for delivery?",
        answer:
          "Most out-for-delivery packages arrive during that local delivery day, but unfinished routes can move the attempt to the next day."
      }
    ],
    clusterLinks: [
      {
        href: "/blog/speedx-out-for-delivery-but-not-delivered",
        label: "Out for delivery but not delivered checklist",
        blurb: "Step-by-step recovery when the scan does not match arrival."
      },
      {
        href: "/carriers/speedx/status",
        label: "SpeedX status meanings",
        blurb: "In transit, exception, delivered, and out for delivery explained."
      },
      {
        href: "/guides/speedx-delivery-hours",
        label: "How late does SpeedX deliver?",
        blurb: "Evening delivery windows and stop-time expectations."
      },
      {
        href: "/track-package",
        label: "Track SpeedX package free",
        blurb: "Check the live out-for-delivery scan on your number."
      },
      {
        href: "/resources/shipping-delay-checklist",
        label: "Shipping delay checklist",
        blurb: "Evidence to gather before opening a support case."
      }
    ]
  },
  {
    slug: "delivery-hours",
    title: "How Late Does SpeedX Deliver? Hours Guide",
    h1: "How Late Does SpeedX Deliver? Hours, Stop Times, and ETAs",
    metaDescription:
      "How late SpeedX delivers, what time SpeedX stops delivering, and how long packages take after out for delivery.",
    summary:
      "SpeedX delivery hours vary by route. Evening delivery is common in busy areas, and there is no single national cutoff. Use your tracking scan and seller ETA instead of assuming a fixed stop time.",
    primaryKeyword: "how late does speedx deliver",
    relatedKeywords: [
      "what time does speedx deliver",
      "what time does speedx stop delivering",
      "how long does speedx take to deliver",
      "speedx delivery times",
      "speedx delivery hours"
    ],
    sections: [
      {
        heading: "How late does SpeedX deliver?",
        paragraphs: [
          "SpeedX can deliver into the evening on dense urban routes and during peak retail periods. Suburban and low-density routes often finish earlier.",
          "Because SpeedX does not publish one universal cutoff, the best signal is your out-for-delivery event plus any seller delivery promise."
        ]
      },
      {
        heading: "What time does SpeedX stop delivering?",
        paragraphs: [
          "There is no single public stop-delivering time for every address. Drivers finish when the route is complete, which can shift with weather, traffic, and volume.",
          "If night falls and status is still out for delivery, allow until the next morning before treating the attempt as failed."
        ]
      },
      {
        heading: "How long does SpeedX take to deliver overall?",
        paragraphs: [
          "Domestic SpeedX shipments often land in a few business days, while cross-border marketplace orders can take one to three weeks including customs.",
          "Scan pauses during export and customs are common and do not always mean the parcel is lost."
        ],
        bullets: [
          "Domestic: often 2-7 business days",
          "International: often 7-20 days with customs",
          "Out for delivery: usually same local day"
        ]
      }
    ],
    faqs: [
      {
        question: "How late does SpeedX deliver?",
        answer:
          "SpeedX may deliver into the evening depending on route load and local operations. There is no fixed cutoff for every address."
      },
      {
        question: "What time does SpeedX stop delivering?",
        answer:
          "Stop times vary by route. Check the latest tracking event and allow for evening delivery before escalating."
      },
      {
        question: "What are normal SpeedX delivery hours?",
        answer:
          "Hours vary by city and depot. Tracking activity and the seller estimate are more reliable than a fixed national schedule."
      }
    ],
    clusterLinks: [
      {
        href: "/guides/speedx-delivery-hours",
        label: "SpeedX delivery hours checklist",
        blurb: "Detailed guide for evening delivery and stop times."
      },
      {
        href: "/carriers/speedx/delivery-time",
        label: "How long does SpeedX take to deliver?",
        blurb: "Domestic vs international ETA ranges."
      },
      {
        href: "/topics/out-for-delivery",
        label: "Out for delivery meaning",
        blurb: "What the final-mile scan means for same-day timing."
      },
      {
        href: "/blog/speedx-delivery-time-by-region",
        label: "Delivery time by region",
        blurb: "Regional timing patterns and delay context."
      },
      {
        href: "/faq",
        label: "SpeedX tracking FAQ",
        blurb: "Quick answers on hours, ETAs, and status pauses."
      }
    ]
  },
  {
    slug: "speedx-tracking",
    title: "SpeedX Tracking & SPXCN Number Guide",
    h1: "SpeedX Tracking: Free Lookup, SPXCN Format, and Status Help",
    metaDescription:
      "Free SpeedX tracking for SPX and SPXCN numbers. Understand status updates, scan gaps, and how to track Shein SpeedX orders.",
    summary:
      "SpeedX tracking shows label, transit, facility, out for delivery, and delivered events for SPX and SPXCN numbers. Use the free tracker, then open the matching guide if scans pause or an exception appears.",
    primaryKeyword: "speedx tracking",
    relatedKeywords: ["spxcn", "speed x tracking", "speed x live tracking", "shein speedx tracking", "spxcn tracking"],
    sections: [
      {
        heading: "How SpeedX tracking works",
        paragraphs: [
          "Paste your full SpeedX tracking number to see the latest carrier scan. Status updates can post in batches, especially on cross-border SPXCN shipments.",
          "Read the full timeline, not only the latest label. Comparing the last two scans tells you whether the package is still in a normal stage."
        ]
      },
      {
        heading: "SPXCN tracking number meaning",
        paragraphs: [
          "SPXCN is a common SpeedX-linked cross-border format used on marketplace orders. Copy the full code without spaces.",
          "Customs and export handoffs often create 24-48 hour quiet windows. Escalate after longer silence or a missed ETA with screenshots ready."
        ]
      },
      {
        heading: "When SpeedX tracking is not updating",
        paragraphs: [
          "Weekends, holidays, linehaul segments, and customs review commonly pause public scans. Recheck after 24-48 hours before contacting support.",
          "If the seller ETA has already passed, open a merchant case first for marketplace orders, then escalate to carrier support if needed."
        ],
        bullets: [
          "Confirm the full SPX / SPXCN code",
          "Wait 24-48 hours for normal scan lag",
          "Save timeline screenshots",
          "Contact seller before carrier when possible"
        ]
      }
    ],
    faqs: [
      {
        question: "How do I track a SpeedX package?",
        answer:
          "Enter the full SpeedX, SPX, or SPXCN tracking number in the free tracker to see current status, scan history, and ETA context."
      },
      {
        question: "What does SPXCN mean?",
        answer:
          "SPXCN is a SpeedX-linked cross-border tracking format. Updates may appear in batches during export, customs, and final-mile handoff."
      },
      {
        question: "Why is my SpeedX tracking not updating?",
        answer:
          "Scan gaps of 24 to 48 hours are common during transit and customs. Recheck after that window, then contact the seller if the ETA is missed."
      }
    ],
    clusterLinks: [
      {
        href: "/track-package",
        label: "Free SpeedX tracking lookup",
        blurb: "Track SPX and SPXCN numbers without signup."
      },
      {
        href: "/guides/spxcn-tracking-number-meaning",
        label: "SPXCN tracking number meaning",
        blurb: "Format checks and customs pause behavior."
      },
      {
        href: "/blog/speedx-tracking-not-updating",
        label: "SpeedX tracking not updating fixes",
        blurb: "Nine practical fixes for stalled scans."
      },
      {
        href: "/carriers/speedx/shein",
        label: "Shein SpeedX tracking",
        blurb: "Marketplace handoff and delay patterns."
      },
      {
        href: "/blog/spxcn-tracking-number-format-explained",
        label: "SPXCN format explained",
        blurb: "Deeper guide to SPXCN delays and verification."
      }
    ]
  }
];

export function getTopicCluster(slug: string) {
  return topicClusters.find((cluster) => cluster.slug === slug);
}
