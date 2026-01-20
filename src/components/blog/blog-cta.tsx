import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import type { BlogCategory } from "@/types";

interface BlogCtaProps {
  category: BlogCategory;
}

const ctaContent: Record<
  BlogCategory,
  { heading: string; description: string; whatsappMessage: string }
> = {
  "landing-pages": {
    heading: "Ready to build your landing page?",
    description:
      "We specialize in creating high-converting landing pages that turn visitors into customers. Let's discuss your project.",
    whatsappMessage:
      "Hi! I just read your article about landing pages and I'd like to discuss my project.",
  },
  ecommerce: {
    heading: "Ready to launch your online store?",
    description:
      "We build e-commerce solutions that scale with your business. From Shopify to custom platforms, we've got you covered.",
    whatsappMessage:
      "Hi! I just read your article about e-commerce and I'd like to discuss my project.",
  },
  saas: {
    heading: "Ready to build your SaaS product?",
    description:
      "We help founders turn their ideas into scalable software products. Let's talk about your MVP or next feature.",
    whatsappMessage:
      "Hi! I just read your article about SaaS development and I'd like to discuss my project.",
  },
};

export function BlogCta({ category }: BlogCtaProps) {
  const content = ctaContent[category];

  return (
    <aside className="mt-12 rounded-xl border bg-muted/50 p-6 md:p-8">
      <h3 className="text-xl font-semibold">{content.heading}</h3>
      <p className="mt-2 text-muted-foreground">{content.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href={getWhatsAppUrl(content.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">
            View Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
