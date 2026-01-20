import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";

export function CTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let&apos;s discuss how we can help you achieve your business goals
            with a website that converts.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
