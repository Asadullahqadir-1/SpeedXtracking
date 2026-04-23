type TrackingFormProps = {
  defaultCarrier?: string;
  compact?: boolean;
  initialTrackingNumber?: string;
};

export function TrackingForm({
  defaultCarrier = "speedx",
  compact = false,
  initialTrackingNumber = ""
}: TrackingFormProps) {
  return (
    <form
      method="get"
      action="/track-package"
      className={`grid gap-3 ${compact ? "md:grid-cols-[1fr,auto]" : "md:grid-cols-[1fr,auto]"}`}
    >
      <input type="hidden" name="carrier" value={defaultCarrier} />
      <input
        name="trackingNumber"
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
        placeholder="Enter tracking number"
        defaultValue={initialTrackingNumber}
        aria-label="Tracking number"
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Track
      </button>
    </form>
  );
}
