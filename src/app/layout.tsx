import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elanlogic.com"),
  title: {
    default: "Elan Logic | Web Development Agency",
    template: "%s | Elan Logic",
  },
  description:
    "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions. We build websites that convert visitors into customers.",
  keywords: [
    "web development",
    "landing page",
    "e-commerce",
    "SaaS",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Elan Logic" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elanlogic.com",
    siteName: "Elan Logic",
    title: "Elan Logic | Web Development Agency",
    description:
      "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions.",
    images: [
      {
        url: "/og/default.svg",
        width: 1200,
        height: 630,
        alt: "Elan Logic - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elan Logic | Web Development Agency",
    description:
      "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions.",
    images: ["/og/default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
