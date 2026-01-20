import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Websites that convert{" "}
            <span className="text-primary">visitors into customers</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We design and develop high-performing websites that drive results.
            From landing pages to e-commerce and SaaS applications, we build
            digital experiences that grow your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
