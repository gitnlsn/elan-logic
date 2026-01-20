import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real projects, real results
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
                    aria-label={`Visit ${project.title}`}
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
