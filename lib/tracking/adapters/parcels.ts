import { TrackingResponse } from "@/lib/seo/types";
import { TrackingError } from "@/lib/tracking/errors";
import { AdapterRequestContext, TrackingAdapter, TrackingRequestInput } from "@/lib/tracking/adapters/types";

type ParcelsEvent = {
  date?: string;
  time?: string;
  status?: string;
  location?: string;
  message?: string;
};

type ParcelsTrackingData = {
  tracking_number?: string;
  carrier?: string;
  status?: string;
  events?: ParcelsEvent[];
  eta?: string;
};

function normalizeParcelsPayload(payload: unknown, input: TrackingRequestInput): TrackingResponse {
  const root = payload as ParcelsTrackingData;

  if (!root || !root.tracking_number) {
    throw new TrackingError("tracking_not_found", "Tracking number not found in Parcels.com response.", 404);
  }

  const events = root.events ?? [];
  const timeline = events.map((event) => ({
    timestamp: event.date && event.time ? `${event.date} ${event.time}` : new Date().toISOString(),
    location: event.location ?? "Unknown location",
    status: event.status ?? "Update",
    details: event.message ?? "No additional details"
  }));

  return {
    carrier: root.carrier ?? input.carrier,
    trackingNumber: root.tracking_number ?? input.trackingNumber,
    currentStatus: root.status ?? timeline[0]?.status ?? "In Transit",
    eta: root.eta ?? "Estimated delivery unavailable",
    timeline,
    confidence: "medium"
  };
}

function getParcelsConfig() {
  // Parcels.com offers free tier without API key requirement
  const baseUrl = process.env.TRACKING_PARCELS_API_BASE_URL || "https://api.parcelsapp.com/track";

  return {
    baseUrl
  };
}

async function requestParcels(input: TrackingRequestInput, ctx: AdapterRequestContext) {
  const config = getParcelsConfig();
  
  // Parcels.com API accepts trackingNumber and carrier as query params
  const url = new URL(config.baseUrl);
  url.searchParams.append("trackingNumber", input.trackingNumber);
  url.searchParams.append("carrier", input.carrier);

  const response = await ctx.fetchWithRetry(
    url.toString(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    },
    2
  );

  if (response.status === 401 || response.status === 403) {
    throw new TrackingError("provider_auth_error", "Parcels.com authentication failed.", 502);
  }

  if (response.status === 404) {
    throw new TrackingError("tracking_not_found", "Tracking number not found.", 404);
  }

  if (!response.ok) {
    throw new TrackingError("provider_unavailable", "Parcels.com returned an error.", 502);
  }

  return response.json();
}

export const adapterParcels: TrackingAdapter = {
  name: "parcels",
  async fetchTracking(input, ctx) {
    const payload = await requestParcels(input, ctx);
    return normalizeParcelsPayload(payload, input);
  }
};
