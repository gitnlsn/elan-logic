import type { Metadata } from "next";
import { Layout, ShoppingCart, Cloud, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/constants";
import { getServiceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development services: Landing Pages for conversions, E-commerce stores for online sales, and SaaS applications for scalable businesses. Custom-built solutions.",
  openGraph: {
    type: "website",
    url: "https://elanlogic.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-10 w-10" />,
  ShoppingCart: <ShoppingCart className="h-10 w-10" />,
  Cloud: <Cloud className="h-10 w-10" />,
};

export default function ServicesPage() {
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
              Services Tailored to{" "}
              <span className="text-primary">Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From simple landing pages to complex SaaS applications, we have
              the expertise to bring your vision to life.
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
                className={`overflow-hidden ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
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
                    <h4 className="font-semibold">What&apos;s Included:</h4>
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
              Not Sure What You Need?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s have a conversation about your project. We&apos;ll help
              you identify the best solution for your business goals.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  Let&apos;s Talk
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
