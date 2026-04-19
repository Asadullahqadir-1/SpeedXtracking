import { siteUrl } from "@/lib/seo/site-url";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpeedXTracking",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/track-package?trackingNumber={trackingNumber}`,
      "query-input": "required name=trackingNumber"
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Speed X Tracking",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      "Independent package tracking and delivery help resource focused on SpeedX shipment visibility, status interpretation, and troubleshooting.",
    areaServed: "Worldwide",
    sameAs: [
      "https://www.linkedin.com/company/speedx-delivery/",
      "https://speedx.io/",
      "https://support.speedx.io/hc/en-us"
    ]
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
  keywords,
  articleSection,
  wordCount
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  articleSection?: string;
  wordCount?: number;
}) {
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
      name: "SpeedXTracking",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`
      }
    },
    image: `${siteUrl}/images/official/speedx-coverage-map.webp`,
    keywords,
    articleSection,
    wordCount
  };
}

export function collectionPageSchema({
  path,
  title,
  description
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${siteUrl}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Speed X Tracking",
      url: siteUrl
    }
  };
}

export function itemListSchema(items: Array<{ name: string; url: string; description?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: item.name,
        url: item.url,
        description: item.description
      }
    }))
  };
}
