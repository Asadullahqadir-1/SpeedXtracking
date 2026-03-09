import { TrackingResponse } from "@/lib/seo/types";

export type TrackingRequestInput = {
  trackingNumber: string;
  carrier: string;
};

export type AdapterRequestContext = {
  timeoutMs: number;
  fetchWithRetry: (url: string, init: RequestInit, attempts?: number) => Promise<Response>;
};

export type TrackingAdapter = {
  name: string;
  fetchTracking: (input: TrackingRequestInput, ctx: AdapterRequestContext) => Promise<TrackingResponse>;
};
