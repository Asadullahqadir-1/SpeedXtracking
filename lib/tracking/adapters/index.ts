import { adapter17Track } from "@/lib/tracking/adapters/17track";
import { adapterAfterShip } from "@/lib/tracking/adapters/aftership";
import { TrackingAdapter } from "@/lib/tracking/adapters/types";

export const trackingAdapters: Record<string, TrackingAdapter> = {
  "17track": adapter17Track,
  aftership: adapterAfterShip
};
