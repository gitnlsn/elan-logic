import Link from "next/link";
import { Layout, ShoppingCart, Cloud, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-8 w-8" />,
  ShoppingCart: <ShoppingCart className="h-8 w-8" />,
  Cloud: <Cloud className="h-8 w-8" />,
};

export function ServicesPreview() {
  return (
    <section className="bg-muted/50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored solutions for every stage of your business
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
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
