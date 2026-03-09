import { TrackingResponse } from "@/lib/seo/types";
import { TrackingError } from "@/lib/tracking/errors";
import { AdapterRequestContext, TrackingAdapter, TrackingRequestInput } from "@/lib/tracking/adapters/types";

type Checkpoint = {
  checkpoint_time?: string;
  city?: string;
  location?: string;
  tag?: string;
  message?: string;
};

function normalizeAfterShipPayload(payload: unknown, input: TrackingRequestInput): TrackingResponse {
  const root = payload as {
    data?: {
      tracking?: {
        tracking_number?: string;
        slug?: string;
        tag?: string;
        expected_delivery?: string;
        checkpoints?: Checkpoint[];
      };
    };
  };

  const tracking = root.data?.tracking;

  if (!tracking) {
    throw new TrackingError("tracking_not_found", "Tracking number not found in AfterShip response.", 404);
  }

  const timeline = (tracking.checkpoints ?? []).map((checkpoint) => ({
    timestamp: checkpoint.checkpoint_time ?? new Date().toISOString(),
    location: checkpoint.city ?? checkpoint.location ?? "Unknown location",
    status: checkpoint.tag ?? "Update",
    details: checkpoint.message ?? "No additional details"
  }));

  return {
    carrier: tracking.slug ?? input.carrier,
    trackingNumber: tracking.tracking_number ?? input.trackingNumber,
    currentStatus: tracking.tag ?? timeline[0]?.status ?? "In Transit",
    eta: tracking.expected_delivery ?? "Estimated delivery unavailable",
    timeline,
    confidence: "medium"
  };
}

function getAfterShipConfig() {
  const apiKey = process.env.TRACKING_AFTERSHIP_API_KEY || process.env.TRACKING_API_KEY;
  const baseUrl = process.env.TRACKING_AFTERSHIP_API_BASE_URL || process.env.TRACKING_API_BASE_URL || "https://api.aftership.com/tracking/2024-07/trackings";

  if (!apiKey) {
    throw new TrackingError("provider_auth_error", "AfterShip API key is missing.", 503);
  }

  return {
    apiKey,
    baseUrl
  };
}

async function requestAfterShip(input: TrackingRequestInput, ctx: AdapterRequestContext) {
  const config = getAfterShipConfig();
  const endpoint = `${config.baseUrl}/${encodeURIComponent(input.carrier)}/${encodeURIComponent(input.trackingNumber)}`;

  const response = await ctx.fetchWithRetry(
    endpoint,
    {
      method: "GET",
      headers: {
        "as-api-key": config.apiKey,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    },
    2
  );

  if (response.status === 401 || response.status === 403) {
    throw new TrackingError("provider_auth_error", "AfterShip authentication failed.", 502);
  }

  if (response.status === 404) {
    throw new TrackingError("tracking_not_found", "Tracking number not found.", 404);
  }

  if (!response.ok) {
    throw new TrackingError("provider_unavailable", "AfterShip returned an error.", 502);
  }

  return response.json();
}

export const adapterAfterShip: TrackingAdapter = {
  name: "aftership",
  async fetchTracking(input, ctx) {
    const payload = await requestAfterShip(input, ctx);
    return normalizeAfterShipPayload(payload, input);
  }
};
