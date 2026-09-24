import Link from "next/link";

export type RelatedResourceType = "issue" | "guide" | "carrier";

export type RelatedResource = {
  label: string;
  href: string;
  type: RelatedResourceType;
};

type RelatedResourcesProps = {
  issues?: RelatedResource[];
  guides?: RelatedResource[];
  carriers?: RelatedResource[];
};

const typeStyles = {
  issue: "text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100",
  guide: "text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100",
  carrier: "text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100"
};

const typeLabels = {
  issue: "Similar Issue",
  guide: "Guide",
  carrier: "Carrier"
};

export function RelatedResources({ issues, guides, carriers }: RelatedResourcesProps) {
  const hasAny = (issues && issues.length > 0) || (guides && guides.length > 0) || (carriers && carriers.length > 0);

  if (!hasAny) {
    return null;
  }

  return (
    <section className="mt-8 section-card">
      <h2 className="text-xl font-semibold text-slate-900">Related Resources</h2>
      <div className="mt-6 space-y-6">
        {/* Related Issues */}
        {issues && issues.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Similar Issues & Solutions</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {issues.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors ${typeStyles[resource.type]}`}
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Guides */}
        {guides && guides.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Helpful Guides</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {guides.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors ${typeStyles[resource.type]}`}
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Carriers */}
        {carriers && carriers.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Track Other Carriers</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {carriers.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors ${typeStyles[resource.type]}`}
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
