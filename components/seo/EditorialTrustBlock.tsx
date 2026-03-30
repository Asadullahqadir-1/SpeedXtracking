type SourceLink = {
  label: string;
  href: string;
};

type EditorialTrustBlockProps = {
  reviewedBy?: string;
  reviewedDate?: string;
  notes?: string;
  sources?: SourceLink[];
};

export function EditorialTrustBlock({
  reviewedBy = "SpeedXTracking Editorial Team",
  reviewedDate,
  notes = "This page is reviewed for clarity and practical troubleshooting accuracy.",
  sources = []
}: EditorialTrustBlockProps) {
  return (
    <section className="section-card mt-8 bg-slate-50 p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">Editorial Review</h2>
      <p className="mt-2 text-sm text-slate-700">
        Reviewed by: <span className="font-medium">{reviewedBy}</span>
      </p>
      {reviewedDate ? <p className="mt-1 text-sm text-slate-700">Last reviewed: {reviewedDate}</p> : null}
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{notes}</p>

      {sources.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-slate-900">Reference sources</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
