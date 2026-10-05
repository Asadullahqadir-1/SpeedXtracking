import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

/** Sitewide entity schemas so every page exposes Organization + WebSite to crawlers. */
export function GlobalJsonLd() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
    </>
  );
}
