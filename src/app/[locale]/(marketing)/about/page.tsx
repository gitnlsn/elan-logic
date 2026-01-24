import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Zap } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import nelsonImage from "@/assets/nelson-1.jpg";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    openGraph: {
      type: "website",
      url: "https://elanlogic.com/about",
    },
    alternates: {
      canonical: locale === "en" ? "/about" : `/${locale}/about`,
      languages: {
        en: "/about",
        "pt-BR": "/pt-BR/about",
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "about" });

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t("resultsDriven.title"),
      description: t("resultsDriven.description"),
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("clientFocused.title"),
      description: t("clientFocused.description"),
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t("innovationFirst.title"),
      description: t("innovationFirst.description"),
    },
  ];

  return (
    <>
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t("heroTitle")}{" "}
                <span className="text-primary">{t("heroTitleHighlight")}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {t("heroDescription")}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={nelsonImage}
                alt={t("founderAlt")}
                className="rounded-2xl shadow-lg"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {t("storyTitle")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("storyP1")}</p>
              <p className="mt-4 text-muted-foreground">{t("storyP2")}</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="grid gap-4">
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">
                    {t("onTimeDelivery")}
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">
                    {t("clientSatisfaction")}
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">
                    {t("yearsExperience")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("valuesTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("valuesDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="text-primary">{value.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
