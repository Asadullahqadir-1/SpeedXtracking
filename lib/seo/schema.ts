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
