"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import type { BlogCategory } from "@/types";

interface BlogCtaProps {
  category: BlogCategory;
  locale?: string;
}

const categoryKeys: Record<BlogCategory, string> = {
  "landing-pages": "landingPages",
  ecommerce: "ecommerce",
  saas: "saas",
};

export function BlogCta({ category }: BlogCtaProps) {
  const t = useTranslations("blogCta");
  const categoryKey = categoryKeys[category];

  const heading = t(`${categoryKey}.heading`);
  const description = t(`${categoryKey}.description`);
  const whatsappMessage = t(`${categoryKey}.whatsappMessage`);

  return (
    <aside className="mt-12 rounded-xl border bg-muted/50 p-6 md:p-8">
      <h3 className="text-xl font-semibold">{heading}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            {t("chatOnWhatsApp")}
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">
            {t("viewServices")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
