"use client";

import { Layout, ShoppingCart, Cloud, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-8 w-8" />,
  ShoppingCart: <ShoppingCart className="h-8 w-8" />,
  Cloud: <Cloud className="h-8 w-8" />,
};

export function ServicesPreview() {
  const t = useTranslations("servicesPreview");
  const tServices = useTranslations("services");

  const services = [
    {
      id: "landing-page",
      title: tServices("landingPage.title"),
      description: tServices("landingPage.description"),
      icon: "Layout",
    },
    {
      id: "ecommerce",
      title: tServices("ecommerce.title"),
      description: tServices("ecommerce.description"),
      icon: "ShoppingCart",
    },
    {
      id: "saas",
      title: tServices("saas.title"),
      description: tServices("saas.description"),
      icon: "Cloud",
    },
  ];

  return (
    <section className="bg-muted/50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 text-primary">{iconMap[service.icon]}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              {t("exploreAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
