"use client";

import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      id: "testimonial-1",
      content: t("testimonial1.content"),
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      company: t("testimonial1.company"),
    },
    {
      id: "testimonial-2",
      content: t("testimonial2.content"),
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      company: t("testimonial2.company"),
    },
    {
      id: "testimonial-3",
      content: t("testimonial3.content"),
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      company: t("testimonial3.company"),
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
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
