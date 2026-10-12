import Link from "next/link";
import { getContextualSiteLinks } from "@/lib/seo/site-link-graph";

type SiteLinkHubProps = {
  currentPath?: string;
  title?: string;
};

export function SiteLinkHub({
  currentPath,
  title = "Continue on SpeedXTracking"
}: SiteLinkHubProps) {
  const { money, help } = getContextualSiteLinks(currentPath);

  return (
    <section className="mt-8 section-card p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Descriptive internal links to our highest-value international pages—no local city spam, no paid-link farms.
      </p>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Priority pages</h3>
          <ul className="mt-3 grid gap-2 text-sm font-medium text-brand-700">
            {money.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Help & clusters</h3>
          <ul className="mt-3 grid gap-2 text-sm font-medium text-brand-700">
            {help.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
