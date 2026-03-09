const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 30;

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetAt: now + WINDOW_MS
    };
  }

  if (bucket.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: bucket.resetAt
    };
  }

  bucket.count += 1;

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - bucket.count,
    resetAt: bucket.resetAt
  };
}
