import { getCoreCarrierCitations, trustedCitations } from "@/lib/seo/trusted-citations";

type TrustedCitationsProps = {
  title?: string;
  /** Use "core" for SpeedX-only official links; "all" includes FTC/CBP consumer refs. */
  variant?: "core" | "all";
};

export function TrustedCitations({
  title = "Trusted references (high-quality sources only)",
  variant = "all"
}: TrustedCitationsProps) {
  const links =
    variant === "core"
      ? getCoreCarrierCitations().map((item) => ({ ...item, reason: "" }))
      : trustedCitations.map(({ label, href, reason }) => ({ label, href, reason }));

  return (
    <section className="mt-8 section-card bg-slate-50 p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        We only cite official carrier and consumer-protection sources. Spam directory / PBN links are excluded on purpose.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 hover:underline"
            >
              {link.label}
            </a>
            {link.reason ? <span className="text-slate-500"> — {link.reason}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
