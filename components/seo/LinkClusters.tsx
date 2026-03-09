import Link from "next/link";
import { LinkCluster } from "@/lib/seo/internal-links";

type LinkClustersProps = {
  clusters: LinkCluster[];
};

export function LinkClusters({ clusters }: LinkClustersProps) {
  return (
    <section className="section-card">
      <h2 className="text-xl font-semibold">Related SEO clusters</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {clusters.map((cluster) => (
          <article key={cluster.title} className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-semibold text-slate-900">{cluster.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-brand-700">
              {cluster.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
