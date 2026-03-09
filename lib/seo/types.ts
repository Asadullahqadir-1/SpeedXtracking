export type CarrierPage = {
  slug: string;
  carrierName: string;
  primaryKeyword: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  h2Sections: string[];
  supportUrl?: string;
  supportEmail?: string;
  domesticEta: string;
  internationalEta: string;
  marketplaces: string[];
};

export type TrackingEvent = {
  timestamp: string;
  location: string;
  status: string;
  details: string;
};

export type TrackingResponse = {
  carrier: string;
  trackingNumber: string;
  currentStatus: string;
  eta: string;
  timeline: TrackingEvent[];
  confidence: "high" | "medium" | "low";
};
