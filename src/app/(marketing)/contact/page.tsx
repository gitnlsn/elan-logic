import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elan Logic. Contact us via WhatsApp, email, or social media to discuss your web development project.",
  openGraph: {
    type: "website",
    url: "https://elanlogic.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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
              Let&apos;s Build{" "}
              <span className="text-primary">Something Great</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to start your project? We&apos;d love to hear from you.
              Reach out and let&apos;s discuss how we can help grow your
              business.
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
                      WhatsApp is Our Primary Channel
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      For the fastest response, reach out to us on WhatsApp.
                      We&apos;re typically available during business hours and
                      aim to respond within a few hours.
                    </p>
                    <div className="mt-6">
                      <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E]" asChild>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-center font-semibold">
                      Other Ways to Reach Us
                    </h3>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:hello@elanlogic.com"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            hello@elanlogic.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">
                            Remote - Worldwide
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="font-semibold">Connect With Us</h3>
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
