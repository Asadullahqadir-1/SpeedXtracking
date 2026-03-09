import Link from "next/link";

type RelatedLinksProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

export function RelatedLinks({ title, links }: RelatedLinksProps) {
  return (
    <section className="section-card">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm text-brand-700 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
