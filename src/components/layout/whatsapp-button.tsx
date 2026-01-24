"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { getWhatsAppUrl } from "@/lib/constants";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={getWhatsAppUrl(t("defaultMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label={t("ariaLabel")}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
