export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpeedXTracking",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/track-package?trackingNumber={trackingNumber}`,
      "query-input": "required name=trackingNumber"
    }
  };
}

export function organizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://speedxtracking.org";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Speed X Tracking",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      "Independent package tracking and delivery help resource focused on SpeedX shipment visibility, status interpretation, and troubleshooting.",
    areaServed: "Worldwide"
  };
}

export function webPageSchema({
  path,
  title,
  description
}: {
  path: string;
  title: string;
  description: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://speedxtracking.org";
  const url = `${siteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Speed X Tracking",
      url: siteUrl
    }
  };
}

export function faqSchema(
  entries: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  keywords
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonicalUrl,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "SpeedXTracking"
    },
    publisher: {
      "@type": "Organization",
      name: "SpeedXTracking"
    },
    keywords
  };
}
