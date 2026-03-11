import { NextRequest, NextResponse } from "next/server";
import { getTrackingData } from "@/lib/tracking/provider";
import { checkRateLimit } from "@/lib/tracking/rate-limit";
import { TrackingError } from "@/lib/tracking/errors";
import { detectCarrier } from "@/lib/tracking/carrier-detection";

function extractClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "anonymous";
}

function normalizeInput(trackingNumber: string, carrier: string) {
  const normalizedTrackingNumber = trackingNumber.trim();
  let normalizedCarrier = carrier.trim().toLowerCase();

  if (!normalizedTrackingNumber || normalizedTrackingNumber.length < 6 || normalizedTrackingNumber.length > 64) {
    throw new TrackingError("invalid_input", "Tracking number must be between 6 and 64 characters.", 400);
  }

  if (!/^[a-zA-Z0-9-]+$/.test(normalizedTrackingNumber)) {
    throw new TrackingError("invalid_input", "Tracking number format is invalid.", 400);
  }

  const detectedCarrier = detectCarrier(normalizedTrackingNumber);

  if (!normalizedCarrier || normalizedCarrier === "other" || normalizedCarrier === "auto") {
    if (!detectedCarrier) {
      throw new TrackingError("invalid_input", "Carrier can not be detected.", 400);
    }

    normalizedCarrier = detectedCarrier;
  }

  if (normalizedCarrier === "speedx" && detectedCarrier !== "speedx") {
    throw new TrackingError("invalid_input", "Carrier can not be detected.", 400);
  }

  if (!/^[a-z0-9-]{2,40}$/.test(normalizedCarrier)) {
    throw new TrackingError("invalid_input", "Carrier format is invalid.", 400);
  }

  return {
    trackingNumber: normalizedTrackingNumber,
    carrier: normalizedCarrier
  };
}

function buildRateLimitHeaders(remaining: number, resetAt: number) {
  return {
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(Math.floor(resetAt / 1000))
  };
}

async function handleTrackingRequest({
  trackingNumber,
  carrier,
  request
}: {
  trackingNumber: string;
  carrier: string;
  request: NextRequest;
}) {
  const rateLimit = checkRateLimit(extractClientKey(request));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Too many requests. Please retry shortly.",
        code: "rate_limited"
      },
      {
        status: 429,
        headers: buildRateLimitHeaders(rateLimit.remaining, rateLimit.resetAt)
      }
    );
  }

  try {
    const normalized = normalizeInput(trackingNumber, carrier);
    const data = await getTrackingData(normalized);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        ...buildRateLimitHeaders(rateLimit.remaining, rateLimit.resetAt)
      }
    });
  } catch (error) {
    if (error instanceof TrackingError) {
      return NextResponse.json(
        {
          error: error.message,
          code: error.code
        },
        {
          status: error.statusCode,
          headers: buildRateLimitHeaders(rateLimit.remaining, rateLimit.resetAt)
        }
      );
    }

    return NextResponse.json(
      {
        error: "Unexpected tracking error.",
        code: "unexpected_error"
      },
      {
        status: 500,
        headers: buildRateLimitHeaders(rateLimit.remaining, rateLimit.resetAt)
      }
    );
  }
}

export async function GET(request: NextRequest) {
  const trackingNumber = request.nextUrl.searchParams.get("trackingNumber")?.trim() ?? "";
  const carrier = request.nextUrl.searchParams.get("carrier")?.trim() || "speedx";

  return handleTrackingRequest({
    trackingNumber,
    carrier,
    request
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | {
        trackingNumber?: string;
        carrier?: string;
      }
    | null;

  const trackingNumber = body?.trackingNumber?.trim() ?? "";
  const carrier = body?.carrier?.trim() || "speedx";

  return handleTrackingRequest({
    trackingNumber,
    carrier,
    request
  });
}
