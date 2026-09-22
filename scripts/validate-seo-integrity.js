const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sitemap = fs.readFileSync(path.join(root, "app", "sitemap.ts"), "utf8");
const programmatic = fs.readFileSync(path.join(root, "content", "programmatic-pages.ts"), "utf8");
const robots = fs.readFileSync(path.join(root, "app", "robots.ts"), "utf8");
const guides = fs.readFileSync(path.join(root, "content", "guides.ts"), "utf8");
const homepage = fs.readFileSync(path.join(root, "app", "page.tsx"), "utf8");
const internalLinks = fs.readFileSync(path.join(root, "lib", "seo", "internal-links.ts"), "utf8");

const failures = [];
const redirectSection = programmatic.match(/const redirectedProgrammaticSlugMap[\s\S]*?\n\]\);/);
const redirectSlugs = redirectSection
  ? [...redirectSection[0].matchAll(/\["([^"]+)"\s*,/g)].map((match) => match[1])
  : [];

for (const slug of redirectSlugs) {
  const literalPathPattern = new RegExp(`["']/${slug}["']`);
  if (literalPathPattern.test(sitemap)) {
    failures.push(`Redirect source appears literally in sitemap.ts: /${slug}`);
  }
}

const imageSources = [...programmatic.matchAll(/imageSrc:\s*"([^"]+)"/g)].map((match) => match[1]);
for (const source of new Set(imageSources)) {
  const assetPath = path.join(root, "public", source.replace(/^\//, ""));
  if (!fs.existsSync(assetPath)) {
    failures.push(`Programmatic image asset does not exist: ${source}`);
  }
}

if (!sitemap.includes("getIndexableProgrammaticPages")) {
  failures.push("Sitemap is not built from the indexable programmatic page set.");
}

if (!robots.includes('disallow: ["/api/"]')) {
  failures.push("robots.ts must continue to disallow the tracking API.");
}

const priorityQueryOwners = [
  { query: "speedx tracking", route: "/", source: homepage, marker: "SpeedX tracking" },
  { query: "speedx out for delivery", route: "/carriers/speedx/status", source: fs.readFileSync(path.join(root, "app", "carriers", "[carrier]", "status", "page.tsx"), "utf8"), marker: "out for delivery" },
  { query: "speedx out for delivery but not delivered", route: "/speedx-out-for-delivery-but-not-delivered", source: programmatic, marker: "SpeedX Out For Delivery But Not Delivered" },
  { query: "how late does speedx deliver", route: "/guides/speedx-delivery-hours", source: guides, marker: "How late does SpeedX deliver" },
  { query: "what time does speedx deliver", route: "/guides/speedx-delivery-hours", source: guides, marker: "What time does SpeedX deliver" },
  { query: "what time does speedx stop delivering", route: "/guides/speedx-delivery-hours", source: guides, marker: "What time does SpeedX stop delivering" },
  { query: "how long does speedx take to deliver when out for delivery", route: "/guides/speedx-delivery-hours", source: guides, marker: "How long does SpeedX take to deliver when out for delivery" },
  { query: "speedx delivery times", route: "/guides/speedx-delivery-hours", source: guides, marker: "SpeedX delivery times" },
  { query: "speedx delivery hours", route: "/guides/speedx-delivery-hours", source: guides, marker: "SpeedX delivery hours" },
  { query: "when does speedx stop delivering", route: "/guides/speedx-delivery-hours", source: guides, marker: "when does SpeedX stop delivering" },
  { query: "speedx tracking shein", route: "/carriers/speedx/shein", source: homepage, marker: "SpeedX Shein" },
  { query: "speedx tracking glossary", route: "/shipping-terms", source: fs.readFileSync(path.join(root, "app", "shipping-terms", "page.tsx"), "utf8"), marker: "SpeedX Tracking Glossary" },
  { query: "spxcn", route: "/guides/spxcn-tracking-number-meaning", source: guides, marker: "spxcn" },
  { query: "speed x tracker", route: "/", source: homepage, marker: "Speed X tracker" }
];

const sitemapHasGuideCollection = sitemap.includes("const guidePages = guides.map");
for (const owner of priorityQueryOwners) {
  if (!owner.source.toLowerCase().includes(owner.marker.toLowerCase())) {
    failures.push(`Priority query is missing its content marker: ${owner.query}`);
  }
  if (owner.route.startsWith("/guides/") && !sitemapHasGuideCollection) {
    failures.push(`Priority guide is not clearly included in sitemap generation: ${owner.route}`);
    break;
  }
}

if (!internalLinks.includes('/guides/speedx-delivery-hours')) {
  failures.push("The SpeedX delivery-hours guide is missing from shared internal-link clusters.");
}

if (failures.length > 0) {
  console.error("SEO integrity validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO integrity validation passed (${redirectSlugs.length} redirect sources, ${new Set(imageSources).size} image assets checked).`);
