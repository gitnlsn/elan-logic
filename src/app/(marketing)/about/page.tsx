import type { Metadata } from "next";
import { Target, Heart, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Elan Logic - a web development agency focused on building high-converting websites that drive business results. 50+ projects delivered with 95% client satisfaction.",
  openGraph: {
    type: "website",
    url: "https://elanlogic.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Results-Driven",
    description:
      "We measure success by the results we deliver for our clients. Every line of code is written with conversion and performance in mind.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Client-Focused",
    description:
      "We treat every project as a partnership. Your success is our success, and we work closely with you to understand and achieve your goals.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Innovation First",
    description:
      "We stay at the forefront of web technology, using modern tools and frameworks to build fast, secure, and scalable solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building the Web,{" "}
              <span className="text-primary">One Project at a Time</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Elan Logic is a web development agency dedicated to helping
              businesses succeed online. We combine technical expertise with
              creative design to build websites that not only look great but
              also drive measurable results.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded with a simple mission: to help businesses thrive in the
                digital world. We noticed that many companies struggled to
                translate their vision into an effective online presence, often
                settling for generic templates or overpriced solutions.
              </p>
              <p className="mt-4 text-muted-foreground">
                We set out to change that by offering custom web development
                that&apos;s both accessible and results-oriented. Today, we work
                with businesses of all sizes, from startups launching their
                first landing page to established companies scaling their
                e-commerce operations.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="grid gap-4">
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Projects Delivered
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="text-primary">{value.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
