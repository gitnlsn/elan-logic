import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/schemas";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    openGraph: {
      type: "website",
      url: "https://elanlogic.com/contact",
    },
    alternates: {
      canonical: locale === "en" ? "/contact" : `/${locale}/contact`,
      languages: {
        en: "/contact",
        "pt-BR": "/pt-BR/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contact" });
  const tWhatsApp = await getTranslations({ locale, namespace: "whatsapp" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessSchema()),
        }}
      />
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("heroTitle")}{" "}
              <span className="text-primary">{t("heroTitleHighlight")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("heroDescription")}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold">
                      {t("whatsappPrimary")}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {t("whatsappDescription")}
                    </p>
                    <div className="mt-6">
                      <Button
                        size="lg"
                        className="bg-[#25D366] hover:bg-[#128C7E]"
                        asChild
                      >
                        <a
                          href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {t("chatOnWhatsApp")}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-center font-semibold">
                      {t("otherWays")}
                    </h3>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{t("email")}</p>
                          <a
                            href="mailto:nelsonkenzotamashiro@gmail.com"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            nelsonkenzotamashiro@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{t("location")}</p>
                          <p className="text-sm text-muted-foreground">
                            {t("locationValue")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="font-semibold">{t("connectWithUs")}</h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Twitter
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
