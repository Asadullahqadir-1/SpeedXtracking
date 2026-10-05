import Link from "next/link";
import { getTopicAuthorityClusters } from "@/lib/seo/internal-links";
import { topicClusters } from "@/content/topic-clusters";
import { getClusterQaArticles } from "@/content/cluster-qa";

type TopicAuthorityLinksProps = {
  /** Highlight one cluster when known */
  activeCluster?: "out-for-delivery" | "delivery-hours" | "speedx-tracking";
  title?: string;
};

/** Descriptive-anchor internal links that reinforce topical clusters. */
export function TopicAuthorityLinks({
  activeCluster,
  title = "SpeedX topic cluster links"
}: TopicAuthorityLinksProps) {
  const clusters = getTopicAuthorityClusters();
  const qa = activeCluster ? getClusterQaArticles(activeCluster) : [];
  const activeMeta = topicClusters.find((cluster) => cluster.slug === activeCluster);

  return (
    <section className="mt-8 section-card">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Descriptive links across the three SpeedX pillars SkillStack flagged for topical authority: out for delivery, delivery hours, and tracking / SPXCN.
      </p>

      {activeMeta ? (
        <p className="mt-3 text-sm text-slate-700">
          Current cluster:{" "}
          <Link href={`/topics/${activeMeta.slug}`} className="font-semibold text-brand-700 hover:underline">
            {activeMeta.title}
          </Link>
        </p>
      ) : null}

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {clusters.map((cluster) => (
          <div key={cluster.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">{cluster.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-brand-700">
              {cluster.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {qa.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Supporting Q&A articles</h3>
          <ul className="mt-2 grid gap-2 text-sm text-brand-700 sm:grid-cols-2">
            {qa.map((article) => (
              <li key={article.slug}>
                <Link href={`/topics/${article.clusterSlug}/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
