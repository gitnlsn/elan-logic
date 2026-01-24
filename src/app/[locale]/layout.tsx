import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { routing } from '@/i18n/routing';
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schemas";
import { HtmlLangUpdater } from "@/components/layout/html-lang-updater";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isPortuguese = locale === 'pt-BR';

  return {
    title: {
      default: isPortuguese
        ? "Elan Logic | Agência de Desenvolvimento Web"
        : "Elan Logic | Web Development Agency",
      template: "%s | Elan Logic",
    },
    description: isPortuguese
      ? "Agência de desenvolvimento web especializada em sites de alta conversão, e-commerce e soluções SaaS. Criamos sites que convertem visitantes em clientes."
      : "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions. We build websites that convert visitors into customers.",
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
      locale: isPortuguese ? "pt_BR" : "en_US",
      url: "https://elanlogic.com",
      siteName: "Elan Logic",
      title: isPortuguese
        ? "Elan Logic | Agência de Desenvolvimento Web"
        : "Elan Logic | Web Development Agency",
      description: isPortuguese
        ? "Agência de desenvolvimento web especializada em sites de alta conversão, e-commerce e soluções SaaS."
        : "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions.",
      images: [
        {
          url: "/og/default.svg",
          width: 1200,
          height: 630,
          alt: isPortuguese
            ? "Elan Logic - Agência de Desenvolvimento Web"
            : "Elan Logic - Web Development Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isPortuguese
        ? "Elan Logic | Agência de Desenvolvimento Web"
        : "Elan Logic | Web Development Agency",
      description: isPortuguese
        ? "Agência de desenvolvimento web especializada em sites de alta conversão, e-commerce e soluções SaaS."
        : "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions.",
      images: ["/og/default.svg"],
    },
    alternates: {
      languages: {
        'en': '/',
        'pt-BR': '/pt-BR',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLangUpdater locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebSiteSchema(locale)),
        }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
