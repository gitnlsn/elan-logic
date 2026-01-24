"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Portfolio() {
  const t = useTranslations("portfolio");

  const portfolio = [
    {
      id: "quartier-flow",
      title: t("quartierFlow.title"),
      description: t("quartierFlow.description"),
      url: "https://www.quartierflow.store/",
      image: "/images/portfolio/quartier-flow.svg",
      tags: ["E-commerce", "Next.js", "Stripe"],
    },
    {
      id: "lalu-decor",
      title: t("laluDecor.title"),
      description: t("laluDecor.description"),
      url: "https://laludecor.vercel.app/",
      image: "/images/portfolio/lalu-decor.svg",
      tags: ["Portfolio", "React", "Tailwind CSS"],
    },
    {
      id: "savoir-link",
      title: t("savoirLink.title"),
      description: t("savoirLink.description"),
      url: "https://www.savoirlink.com/",
      image: "/images/portfolio/savoir-link.svg",
      tags: ["SaaS", "Next.js", "Authentication"],
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {portfolio.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={t("visit", { title: project.title })}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
