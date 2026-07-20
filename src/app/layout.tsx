import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { buildOrganizationJsonLd } from "@/lib/seo/buildJsonLd";

const GA_MEASUREMENT_ID = "G-45JJEWTXHQ";

export const metadata: Metadata = {
  title: "LazyKiwi",
  description: "AI image and video creation workspace",
  icons: {
    icon: [{ url: "/kiwi-logo.svg", type: "image/svg+xml" }],
    shortcut: "/kiwi-logo.svg",
    apple: "/kiwi-logo.svg",
  },
};

const organizationJsonLd = buildOrganizationJsonLd();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
