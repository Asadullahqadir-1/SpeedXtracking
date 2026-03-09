export const DAILY_REVALIDATE_SECONDS = 86400;

const defaultFreshnessDate = process.env.NEXT_PUBLIC_CONTENT_LAST_REVIEWED_AT || "2026-03-10";

const pageFreshnessMap: Record<string, string> = {
  homepage: defaultFreshnessDate,
  trackPackage: defaultFreshnessDate,
  carriersHub: defaultFreshnessDate,
  guidesHub: defaultFreshnessDate
};

export function getFreshnessDate(key: string) {
  return pageFreshnessMap[key] || defaultFreshnessDate;
}
