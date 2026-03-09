export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", eventName, params);
    return;
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  }
}

export function trackPageView(path: string) {
  trackEvent("page_view", {
    page_path: path
  });
}
