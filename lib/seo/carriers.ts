import { CarrierPage } from "@/lib/seo/types";

export const carriers: CarrierPage[] = [
  {
    slug: "speedx",
    carrierName: "SpeedX",
    primaryKeyword: "SpeedX tracking",
    seoTitle: "SpeedX Tracking — Status, ETA & Support",
    metaDescription:
      "Track SpeedX packages with status meanings, delivery time estimates, Shein order help, and support options for domestic and international shipments.",
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
  },
  {
    slug: "dhl",
    carrierName: "DHL",
    primaryKeyword: "DHL tracking",
    seoTitle: "DHL Tracking — Express & Parcel Status",
    metaDescription:
      "Look up DHL Express and DHL Parcel status, delivery estimates, and support options for delayed or missing shipments.",
    h1: "DHL Package Tracking",
    h2Sections: [
      "Track DHL Express Shipments",
      "DHL Parcel Tracking",
      "Understanding DHL Status Updates",
      "DHL Delivery Time Estimates",
      "DHL International Shipping",
      "DHL Tracking Issues",
      "DHL Customer Support",
      "FAQs About DHL Tracking"
    ],
    supportUrl: "https://www.dhl.com/en/en/home/support.html",
    supportEmail: "support@dhl.com",
    domesticEta: "1-3 business days",
    internationalEta: "3-10 business days",
    marketplaces: ["Amazon", "eBay", "Alibaba"]
  },
  {
    slug: "ups",
    carrierName: "UPS",
    primaryKeyword: "UPS tracking",
    seoTitle: "UPS Tracking — Package Status & ETA",
    metaDescription:
      "Check UPS package status, delivery estimates, and support steps for Express, Ground, and 2Day shipments.",
    h1: "UPS Package Tracking",
    h2Sections: [
      "Track UPS Packages",
      "UPS Ground vs Express",
      "UPS Status Meanings",
      "UPS Delivery Time Estimates",
      "UPS International Shipping",
      "UPS Tracking Problems",
      "UPS Customer Support",
      "FAQs About UPS Tracking"
    ],
    supportUrl: "https://www.ups.com/upsdocs/en/en/upsdocs/upsdocs.html",
    supportEmail: "support@ups.com",
    domesticEta: "1-5 business days",
    internationalEta: "3-15 business days",
    marketplaces: ["Amazon", "eBay", "Etsy"]
  },
  {
    slug: "fedex",
    carrierName: "FedEx",
    primaryKeyword: "FedEx tracking",
    seoTitle: "FedEx Tracking — Express & Ground Status",
    metaDescription:
      "Check FedEx Express and Ground shipment status, delivery estimates, and troubleshooting steps for delayed packages.",
    h1: "FedEx Shipment Tracking",
    h2Sections: [
      "Track FedEx Packages",
      "FedEx Express vs Ground",
      "FedEx Status Updates",
      "FedEx Delivery Estimates",
      "FedEx International Tracking",
      "Troubleshooting FedEx Tracking",
      "FedEx Customer Support",
      "FAQs About FedEx Tracking"
    ],
    supportUrl: "https://www.fedex.com/en-us/customer-service.html",
    supportEmail: "support@fedex.com",
    domesticEta: "1-5 business days",
    internationalEta: "2-15 business days",
    marketplaces: ["Amazon", "Best Buy", "Newegg"]
  },
  {
    slug: "dpd",
    carrierName: "DPD",
    primaryKeyword: "DPD tracking",
    seoTitle: "DPD Tracking — Parcel Status & ETA",
    metaDescription:
      "Check DPD parcel status, delivery estimates, and support options for delayed or missing courier shipments.",
    h1: "DPD Package Tracking",
    h2Sections: [
      "Track DPD Parcels",
      "DPD Tracking Status",
      "DPD Delivery Estimates",
      "DPD International Shipping",
      "Understanding DPD Updates",
      "DPD Tracking Issues",
      "DPD Customer Support",
      "FAQs About DPD Tracking"
    ],
    supportUrl: "https://www.dpd.com/en/",
    supportEmail: "support@dpd.com",
    domesticEta: "1-2 business days",
    internationalEta: "3-8 business days",
    marketplaces: ["European ecommerce", "Zalando", "Glovo"]
  },
  {
    slug: "gls",
    carrierName: "GLS",
    primaryKeyword: "GLS tracking",
    seoTitle: "GLS Tracking — Parcel Status Online",
    metaDescription:
      "Check GLS parcel status, delivery times, and support steps when a shipment is delayed or missing.",
    h1: "GLS Package Tracking",
    h2Sections: [
      "Track GLS Shipments",
      "GLS Tracking Status",
      "GLS Delivery Time Estimates",
      "GLS International Shipping",
      "GLS Status Updates",
      "Troubleshooting GLS Tracking",
      "GLS Customer Support",
      "FAQs About GLS Tracking"
    ],
    supportUrl: "https://www.gls-group.eu/",
    supportEmail: "support@gls-group.eu",
    domesticEta: "1-3 business days",
    internationalEta: "3-8 business days",
    marketplaces: ["European retailers"]
  },
  {
    slug: "hermes",
    carrierName: "Hermes",
    primaryKeyword: "Hermes tracking",
    seoTitle: "Hermes Tracking — Parcel Status & ETA",
    metaDescription:
      "Check Hermes parcel status, delivery estimates, and support options for delayed or missing deliveries.",
    h1: "Hermes Package Tracking",
    h2Sections: [
      "Track Hermes Parcels",
      "Hermes Tracking Status",
      "Hermes Delivery Estimates",
      "Hermes UK & International",
      "Understanding Hermes Updates",
      "Hermes Tracking Problems",
      "Hermes Customer Support",
      "FAQs About Hermes Tracking"
    ],
    supportUrl: "https://www.hermesworld.com/gb/en",
    supportEmail: "support@hermes.com",
    domesticEta: "1-3 business days",
    internationalEta: "3-10 business days",
    marketplaces: ["Amazon UK", "eBay UK", "Currys"]
  }
];

export const topCarrierSlugs = ["speedx", "dhl", "ups", "fedex"];
