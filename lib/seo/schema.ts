import { siteUrl } from "@/lib/seo/site-url";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "SpeedXTracking",
    alternateName: ["Speed X Tracking", "SpeedX Tracking"],
    url: siteUrl,
    description:
      "Free SpeedX tracking lookup for SPX and SPXCN package status, delivery ETA, and shipment troubleshooting.",
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/track-package?trackingNumber={trackingNumber}`
      },
      "query-input": "required name=trackingNumber"
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "SpeedXTracking",
    legalName: "SpeedXTracking",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: 512,
      height: 512
    },
    image: `${siteUrl}/images/official/speedx-coverage-map.webp`,
    description:
      "Independent SpeedX package tracking and delivery help resource. Not affiliated with SpeedX.",
    foundingDate: "2025",
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@speedxtracking.org",
        availableLanguage: ["English"]
      }
    ],
    sameAs: ["https://speedxtracking.org"]
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
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@id": `${siteUrl}/#organization`
    },
    inLanguage: "en-US"
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "SpeedXTracking",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SpeedXTracking",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`
      }
    },
    image: [`${siteUrl}/images/official/speedx-coverage-map.webp`],
    keywords,
    articleSection,
    wordCount,
    inLanguage: "en-US"
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
      "@id": `${siteUrl}/#website`
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
        "@type": "Thing",
        name: item.name,
        url: item.url,
        description: item.description
      }
    }))
  };
}

/** SoftwareApplication schema for the free tracker tool. */
export function trackingAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SpeedX Free Package Tracker",
    url: `${siteUrl}/track-package`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description:
      "Free SpeedX tracking tool for SPX and SPXCN numbers. Check package status, out for delivery updates, and delivery ETA.",
    provider: {
      "@id": `${siteUrl}/#organization`
    }
  };
}
