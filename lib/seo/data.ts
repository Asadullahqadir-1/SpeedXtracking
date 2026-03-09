import { carriers } from "@/lib/seo/carriers";

export function getCarrierBySlug(slug: string) {
  return carriers.find((carrier) => carrier.slug === slug);
}

export function getCarrierKeywords() {
  return carriers.map((carrier) => ({
    slug: carrier.slug,
    keyword: carrier.primaryKeyword
  }));
}
