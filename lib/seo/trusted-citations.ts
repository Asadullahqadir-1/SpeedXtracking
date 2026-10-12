/**
 * Whitelist of high-trust outbound citations only.
 * Never include PBN / casino / “buy backlinks” farms (SkillStack spam score ~60+).
 * These help E-E-A-T; they are NOT inbound backlinks we invent in code.
 */
export type TrustedCitation = {
  label: string;
  href: string;
  reason: string;
};

export const trustedCitations: TrustedCitation[] = [
  {
    label: "SpeedX official website",
    href: "https://speedx.io/",
    reason: "Primary carrier brand and product source"
  },
  {
    label: "SpeedX official support center",
    href: "https://support.speedx.io/hc/en-us",
    reason: "Official help docs for status and claims"
  },
  {
    label: "SpeedX company profile (LinkedIn)",
    href: "https://www.linkedin.com/company/speedx-delivery/",
    reason: "Verified company presence"
  },
  {
    label: "FTC: Online shopping tips",
    href: "https://consumer.ftc.gov/articles/online-shopping",
    reason: "US consumer guidance for marketplace orders"
  },
  {
    label: "CBP: Basic import & export",
    href: "https://www.cbp.gov/trade/basic-import-export",
    reason: "Official customs context for international parcels"
  }
];

export function getTrustedCitationSources() {
  return trustedCitations.map(({ label, href }) => ({ label, href }));
}

export function getCoreCarrierCitations() {
  return trustedCitations
    .filter((item) => item.href.includes("speedx.io") || item.href.includes("linkedin.com/company/speedx"))
    .map(({ label, href }) => ({ label, href }));
}
