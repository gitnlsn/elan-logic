"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");
  const tWhatsApp = useTranslations("whatsapp");

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            {t("description")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("startProject")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">{t("viewServices")}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
