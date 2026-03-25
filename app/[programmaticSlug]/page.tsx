import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildProgrammaticSections,
  getCategoryLabel,
  getProgrammaticFaqs,
  getProgrammaticPageBySlug,
  getRelatedProgrammaticLinks,
  programmaticPages
} from "@/content/programmatic-pages";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const revalidate = 86400;

export async function generateStaticParams() {
  return programmaticPages.map((page) => ({ programmaticSlug: page.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ programmaticSlug: string }>;
}) {
  const { programmaticSlug } = await params;
  const page = getProgrammaticPageBySlug(programmaticSlug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [
      page.primaryKeyword,
      "SpeedX tracking",
      "speed x tracking support",
      "track SpeedX package",
      "SpeedX delivery status"
    ]
  });
}

export default async function ProgrammaticPage({
  params
}: {
  params: Promise<{ programmaticSlug: string }>;
}) {
  const { programmaticSlug } = await params;
  const page = getProgrammaticPageBySlug(programmaticSlug);

  if (!page) {
    notFound();
  }

  const sections = buildProgrammaticSections(page);
  const faqs = getProgrammaticFaqs(page);
  const links = getRelatedProgrammaticLinks(page.slug);

  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          webPageSchema({
            path: `/${page.slug}`,
            title: page.title,
            description: page.metaDescription
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "SpeedX Programmatic Pages", url: `${siteConfig.url}/guides` },
            { name: page.h1, url: `${siteConfig.url}/${page.slug}` }
          ])
        }
      />
      <JsonLd data={faqSchema(faqs)} />

      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{getCategoryLabel(page)}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{page.h1}</h1>
      <p className="mt-3 max-w-4xl text-slate-700">{page.metaDescription}</p>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold text-slate-900">Track SpeedX Shipment</h2>
        <p className="mt-2 text-sm text-slate-700">
          Need instant shipment status? Use our <Link href="/track-package" className="text-brand-700 hover:underline">tracking lookup</Link> to
          check live SpeedX events before starting escalation.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="mt-6 section-card">
          <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((entry) => (
            <article key={entry.question}>
              <h3 className="font-medium text-slate-900">{entry.question}</h3>
              <p className="mt-1 text-sm text-slate-700">{entry.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold text-slate-900">Related SpeedX Resources</h2>
        <div className="mt-3 grid gap-2 text-sm text-brand-700 md:grid-cols-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 section-card bg-slate-50">
        <h2 className="text-xl font-semibold text-slate-900">Official SpeedX Resources</h2>
        <p className="mt-2 text-sm text-slate-700">
          Carrier references: 
          <a href="https://speedx.io/" target="_blank" rel="noopener noreferrer" className="ml-1 text-brand-700 hover:underline">
            speedx.io
          </a>
          <span> and </span>
          <a href="https://support.speedx.io/hc/en-us" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
            support.speedx.io
          </a>
          .
        </p>
      </section>
    </div>
  );
}