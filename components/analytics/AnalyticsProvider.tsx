"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;
    trackPageView(fullPath);
  }, [pathname, searchParams]);

  return (
    <>
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {GTM_ID ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      ) : null}
    </>
  );
}
