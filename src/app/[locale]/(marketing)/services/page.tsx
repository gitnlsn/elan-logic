import type { Metadata } from "next";
import { Layout, ShoppingCart, Cloud, Check, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import { getServiceSchema } from "@/lib/schemas";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    openGraph: {
      type: "website",
      url: "https://elanlogic.com/services",
    },
    alternates: {
      canonical: locale === "en" ? "/services" : `/${locale}/services`,
      languages: {
        en: "/services",
        "pt-BR": "/pt-BR/services",
      },
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-10 w-10" />,
  ShoppingCart: <ShoppingCart className="h-10 w-10" />,
  Cloud: <Cloud className="h-10 w-10" />,
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services" });
  const tWhatsApp = await getTranslations({ locale, namespace: "whatsapp" });

  const services = [
    {
      id: "landing-page",
      title: t("landingPage.title"),
      description: t("landingPage.description"),
      features: [
        t("landingPage.features.responsive"),
        t("landingPage.features.conversion"),
        t("landingPage.features.fast"),
        t("landingPage.features.seo"),
      ],
      icon: "Layout",
    },
    {
      id: "ecommerce",
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
      features: [
        t("ecommerce.features.catalog"),
        t("ecommerce.features.payment"),
        t("ecommerce.features.inventory"),
        t("ecommerce.features.orders"),
      ],
      icon: "ShoppingCart",
    },
    {
      id: "saas",
      title: t("saas.title"),
      description: t("saas.description"),
      features: [
        t("saas.features.auth"),
        t("saas.features.billing"),
        t("saas.features.dashboard"),
        t("saas.features.api"),
      ],
      icon: "Cloud",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema()),
        }}
      />
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("pageTitle")}{" "}
              <span className="text-primary">{t("pageTitleHighlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("pageDescription")}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <CardHeader className="flex flex-col justify-center p-8">
                    <div className="text-primary">{iconMap[service.icon]}</div>
                    <CardTitle className="mt-4 text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-muted/30 p-8">
                    <h4 className="font-semibold">{t("whatsIncluded")}</h4>
                    <ul className="mt-4 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="mr-3 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("notSure")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("notSureDescription")}
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <a
                  href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("letsTalk")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
