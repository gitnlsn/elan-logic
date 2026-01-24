"use client";

import { Search, Palette, Code, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
};

export function Process() {
  const t = useTranslations("process");

  const processSteps = [
    {
      id: "discovery",
      number: 1,
      title: t("discovery.title"),
      description: t("discovery.description"),
      icon: "Search",
    },
    {
      id: "design",
      number: 2,
      title: t("design.title"),
      description: t("design.description"),
      icon: "Palette",
    },
    {
      id: "development",
      number: 3,
      title: t("development.title"),
      description: t("development.description"),
      icon: "Code",
    },
    {
      id: "launch",
      number: 4,
      title: t("launch.title"),
      description: t("launch.description"),
      icon: "Rocket",
    },
  ];

  return (
    <section className="bg-muted/50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {iconMap[step.icon]}
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-primary">
                  {t("step", { number: step.number })}
                </span>
                <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
