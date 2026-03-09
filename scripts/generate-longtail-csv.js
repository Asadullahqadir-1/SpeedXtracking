const fs = require("fs");
const path = require("path");

const carriers = [
  { slug: "speedx", name: "SpeedX" },
  { slug: "dhl", name: "DHL" },
  { slug: "fedex", name: "FedEx" },
  { slug: "ups", name: "UPS" },
  { slug: "usps", name: "USPS" },
  { slug: "ontrac", name: "OnTrac" },
  { slug: "lasership", name: "LaserShip" },
  { slug: "yunexpress", name: "YunExpress" },
  { slug: "cainiao", name: "Cainiao" },
  { slug: "sf-express", name: "SF Express" },
  { slug: "4px", name: "4PX" }
];

const batch2Intents = [
  { slug: "package-tracking", keyword: "package tracking", title: "Package Tracking" },
  { slug: "track-shipment", keyword: "track shipment", title: "Track Shipment" },
  { slug: "tracking-status", keyword: "tracking status", title: "Tracking Status" },
  { slug: "delivery-time-estimate", keyword: "delivery time", title: "Delivery Time" },
  { slug: "contact-number", keyword: "contact number", title: "Contact Support" }
];

const batch3Intents = [
  { slug: "tracking-not-updating", keyword: "tracking not updating", title: "Tracking Not Updating" },
  { slug: "delivery-exception", keyword: "delivery exception", title: "Delivery Exception" },
  { slug: "international-tracking", keyword: "international tracking", title: "International Tracking" },
  { slug: "customer-service", keyword: "customer service", title: "Customer Service" },
  { slug: "delivered-not-received", keyword: "delivered not received", title: "Delivered Not Received" }
];

function toCsv(rows) {
  const header = [
    "url_slug",
    "primary_keyword",
    "seo_title",
    "meta_description",
    "h1",
    "h2_1",
    "h2_2",
    "h2_3",
    "h2_4"
  ];

  const body = rows.map((row) =>
    [
      row.url_slug,
      row.primary_keyword,
      row.seo_title,
      row.meta_description,
      row.h1,
      row.h2_1,
      row.h2_2,
      row.h2_3,
      row.h2_4
    ]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(",")
  );

  return [header.join(","), ...body].join("\n");
}

function buildRows(intents) {
  return carriers.flatMap((carrier) =>
    intents.map((intent) => ({
      url_slug: `/carriers/${carrier.slug}/${intent.slug}`,
      primary_keyword: `${carrier.name} ${intent.keyword}`,
      seo_title: `${carrier.name} ${intent.title}: Track ${carrier.name} Shipment Updates`,
      meta_description: `Get ${carrier.name.toLowerCase()} ${intent.keyword} updates with tracking steps, status explanations, and delivery guidance.`,
      h1: `${carrier.name} ${intent.title}`,
      h2_1: `Track ${carrier.name} package`,
      h2_2: `${carrier.name} ${intent.keyword} explained`,
      h2_3: `Common ${carrier.name} delivery statuses`,
      h2_4: `What to do when updates are delayed`
    }))
  );
}

function run() {
  const seoDir = path.join(process.cwd(), "seo");
  fs.mkdirSync(seoDir, { recursive: true });

  const batch2 = buildRows(batch2Intents);
  const batch3 = buildRows(batch3Intents);

  fs.writeFileSync(path.join(seoDir, "carrier-pages-batch2.csv"), toCsv(batch2));
  fs.writeFileSync(path.join(seoDir, "carrier-pages-batch3.csv"), toCsv(batch3));

  console.log(`Generated ${batch2.length} rows for batch2 and ${batch3.length} rows for batch3.`);
}

run();
