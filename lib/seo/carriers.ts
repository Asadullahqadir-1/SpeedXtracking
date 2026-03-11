import { CarrierPage } from "@/lib/seo/types";

export const carriers: CarrierPage[] = [
  {
    slug: "speedx",
    carrierName: "SpeedX",
    primaryKeyword: "SpeedX tracking",
    seoTitle: "SpeedX Tracking: Track SpeedX Package, Status, Delivery Time & Support",
    metaDescription:
      "Track SpeedX shipments with live status guidance, delivery time estimates, status meanings, and customer support options for domestic and international orders.",
    h1: "SpeedX Tracking",
    h2Sections: [
      "Track SpeedX Package",
      "How SpeedX Tracking Works",
      "SpeedX Tracking Status Meanings",
      "SpeedX Delivery Time Estimates",
      "SpeedX Tracking for Shein Orders",
      "SpeedX Tracking Not Updating",
      "SpeedX Customer Support",
      "FAQs About SpeedX Tracking"
    ],
    supportUrl: "https://support.speedx.io/hc/en-us",
    supportEmail: "info@speedx.io",
    domesticEta: "2-7 business days",
    internationalEta: "7-20 business days",
    marketplaces: ["Shein", "Temu", "Amazon"]
  }
];

export const topCarrierSlugs = ["speedx"];
