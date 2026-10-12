import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "¿Cómo rastrear un paquete SpeedX?",
    answer:
      "Copia el número de seguimiento SpeedX, SPX o SPXCN desde tu pedido o correo y pégalo en el rastreador gratuito para ver el estado actual."
  },
  {
    question: "¿Qué significa SPXCN?",
    answer:
      "SPXCN es un formato de seguimiento SpeedX frecuente en envíos internacionales. Las actualizaciones pueden aparecer por lotes durante aduanas."
  },
  {
    question: "¿Qué significa out for delivery en SpeedX?",
    answer:
      "Significa que el paquete está en ruta local para entrega ese día. Puede llegar por la tarde o pasar al día siguiente si la ruta no se completa."
  }
];

export const metadata = buildMetadata({
  title: "Rastrear Paquete SpeedX — Seguimiento Gratis",
  description:
    "Rastrear paquete SpeedX gratis. Consulta estado SPX/SPXCN, entrega y retrasos. Guía internacional de speedx rastreo para pedidos Shein y más.",
  path: "/rastrear-paquete-speedx"
});

export default function SpanishTrackPage() {
  const reviewed = "2026-10-12";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/rastrear-paquete-speedx",
          title: "Rastrear Paquete SpeedX",
          description: "Herramienta y guía en español para rastrear paquetes SpeedX."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Rastrear Paquete SpeedX", url: `${siteConfig.url}/rastrear-paquete-speedx` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "Rastrear Paquete SpeedX — Seguimiento Gratis",
          description: "Guía internacional en español para rastrear envíos SpeedX.",
          path: "/rastrear-paquete-speedx",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["rastrear paquete speedx", "speedx rastreo", "seguimiento speedx", "track speedx"],
          articleSection: "International Tracking",
          wordCount: 700
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <p className="text-sm text-slate-600">
        English version:{" "}
        <Link href="/track-package" className="font-semibold text-brand-700 hover:underline">
          Free SpeedX tracking
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Rastrear Paquete SpeedX Gratis</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Usa este rastreador internacional para consultar el estado de tu envío SpeedX. Funciona con números SPX y SPXCN de tiendas online como Shein y otros marketplaces.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">SpeedX rastreo — número de seguimiento</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Cómo funciona el seguimiento SpeedX</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Copia el código completo sin espacios.</li>
          <li>Pégalo en el formulario de arriba.</li>
          <li>Revisa el último evento: en tránsito, en instalación, out for delivery o entregado.</li>
          <li>Si no hay actualización en 24-48 horas, compara con la fecha estimada del vendedor.</li>
        </ol>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Guías relacionadas</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/track-package" className="hover:underline">
            Track SpeedX package (English)
          </Link>
          <Link href="/topics/speedx-tracking" className="hover:underline">
            SpeedX tracking hub
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times
          </Link>
          <Link href="/carriers/speedx/shein" className="hover:underline">
            Shein SpeedX tracking
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
