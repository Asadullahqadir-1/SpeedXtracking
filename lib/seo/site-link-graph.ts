import type { LinkItem } from "@/lib/seo/internal-links";

/** High-value on-site destinations (SkillStack top pages + new intl pillars). */
export function getMoneyPageLinks(): LinkItem[] {
  return [
    { href: "/track-package", label: "Free SpeedX tracking number lookup" },
    { href: "/speedx-delivery", label: "SpeedX delivery times & hours" },
    { href: "/what-is-speedx", label: "What is SpeedX?" },
    { href: "/does-speedx-deliver-on-sunday", label: "Does SpeedX deliver on Sunday?" },
    { href: "/rastrear-paquete-speedx", label: "Rastrear paquete SpeedX" },
    { href: "/carriers/speedx", label: "SpeedX tracking hub" },
    { href: "/carriers/speedx/shein", label: "SpeedX Shein tracking" },
    { href: "/blog/speedx-delivery-time-by-region", label: "SpeedX delivery times by region" },
    { href: "/blog/shein-speedx-tracking-guide", label: "Shein SpeedX tracking guide" },
    { href: "/blog/speedx-out-for-delivery-but-not-delivered", label: "Out for delivery but not delivered" },
    { href: "/guides/speedx-delivery-hours", label: "How late does SpeedX deliver?" },
    { href: "/carriers/speedx/contact", label: "SpeedX customer service" }
  ];
}

export function getHelpPageLinks(): LinkItem[] {
  return [
    { href: "/topics/out-for-delivery", label: "Out for delivery topic cluster" },
    { href: "/topics/delivery-hours", label: "Delivery hours topic cluster" },
    { href: "/topics/speedx-tracking", label: "Tracking & SPXCN topic cluster" },
    { href: "/guides/package-not-updating", label: "Tracking not updating" },
    { href: "/guides/delivered-not-received", label: "Delivered but not received" },
    { href: "/guides/spxcn-tracking-number-meaning", label: "SPXCN tracking number meaning" },
    { href: "/resources/shipping-delay-checklist", label: "Shipping delay checklist" },
    { href: "/faq", label: "SpeedX tracking FAQ" },
    { href: "/shipping-terms", label: "Shipping status glossary" }
  ];
}

export function getContextualSiteLinks(excludeHref?: string): {
  money: LinkItem[];
  help: LinkItem[];
} {
  const filterOut = (links: LinkItem[]) =>
    excludeHref ? links.filter((link) => link.href !== excludeHref) : links;

  return {
    money: filterOut(getMoneyPageLinks()).slice(0, 8),
    help: filterOut(getHelpPageLinks()).slice(0, 6)
  };
}
