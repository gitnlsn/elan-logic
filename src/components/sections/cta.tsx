"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

export function CTA() {
  const t = useTranslations("cta");
  const tWhatsApp = useTranslations("whatsapp");

  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg opacity-90">{t("description")}</p>
          <div className="mt-10">
            <Button size="lg" variant="secondary" asChild>
              <a
                href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("getStarted")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
