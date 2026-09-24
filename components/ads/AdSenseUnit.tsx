"use client";

import { useEffect, useRef } from "react";

type AdSenseUnitProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Renders an AdSense unit when NEXT_PUBLIC_ADSENSE_CLIENT and a slot are set.
 * Place only in content areas (never in the first viewport hero) to stay AdSense-friendly.
 */
export function AdSenseUnit({
  slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || "",
  format = "auto",
  className = ""
}: AdSenseUnitProps) {
  const pushed = useRef(false);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "pub-5798356780873571";

  useEffect(() => {
    if (!slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers / preview environments may reject the push
    }
  }, [slot]);

  if (!slot) {
    return null;
  }

  return (
    <div className={`my-6 flex justify-center overflow-hidden ${className}`} aria-hidden="true">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "250px", width: "100%" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
