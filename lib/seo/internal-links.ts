export type LinkItem = {
  href: string;
  label: string;
};

export type LinkCluster = {
  title: string;
  links: LinkItem[];
};

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getDayKey() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`;
}

function rotateLinks(links: LinkItem[], seed: string) {
  if (links.length <= 1) {
    return links;
  }

  const shift = hashString(`${seed}:${getDayKey()}`) % links.length;
  return [...links.slice(shift), ...links.slice(0, shift)];
}

type AdaptiveClusterOptions = {
  pageKey: string;
  primaryHrefs?: string[];
  maxLinksPerCluster?: number;
};

export function buildAdaptiveClusters(clusters: LinkCluster[], options: AdaptiveClusterOptions): LinkCluster[] {
  const primaryHrefs = options.primaryHrefs ?? [];
  const maxLinks = options.maxLinksPerCluster ?? 5;

  return clusters.map((cluster) => {
    const pinned = cluster.links.filter((link) => primaryHrefs.includes(link.href));
    const remaining = cluster.links.filter((link) => !primaryHrefs.includes(link.href));
    const rotated = rotateLinks(remaining, `${options.pageKey}:${cluster.title}`);
    const merged = [...pinned, ...rotated].slice(0, maxLinks);

    return {
      ...cluster,
      links: merged
    };
  });
}

export function getCarrierIntentClusters(carrierSlug: string, carrierName: string): LinkCluster[] {
  return [
    {
      title: `${carrierName} tracking intent pages`,
      links: [
        { href: `/carriers/${carrierSlug}/package-tracking`, label: `${carrierName} package tracking` },
        { href: `/carriers/${carrierSlug}/track-shipment`, label: `Track ${carrierName} shipment` },
        { href: `/carriers/${carrierSlug}/tracking-status`, label: `${carrierName} tracking status` },
        { href: `/carriers/${carrierSlug}/delivery-time-estimate`, label: `${carrierName} delivery time` },
        { href: `/carriers/${carrierSlug}/contact-number`, label: `${carrierName} contact support` }
      ]
    },
    {
      title: `${carrierName} help resources`,
      links: [
        { href: `/carriers/${carrierSlug}/status`, label: `${carrierName} status meanings` },
        { href: `/carriers/${carrierSlug}/delivery-time`, label: `${carrierName} ETA guide` },
        { href: `/carriers/${carrierSlug}/contact`, label: `${carrierName} customer support` },
        { href: `/carriers/${carrierSlug}/shein`, label: `${carrierName} Shein tracking` }
      ]
    }
  ];
}

export function getGlobalTroubleshootingCluster(): LinkCluster {
  return {
    title: "Tracking issue guides",
    links: [
      { href: "/guides/package-not-updating", label: "Tracking not updating" },
      { href: "/guides/delivered-not-received", label: "Delivered but not received" },
      { href: "/guides/how-to-track-packages", label: "How to track any package" },
      { href: "/shipping-terms", label: "Shipping status glossary" }
    ]
  };
}
