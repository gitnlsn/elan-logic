import { Search, Palette, Code, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/data/process-steps";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
};

export function Process() {
  return (
    <section className="bg-muted/50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven approach to delivering exceptional results
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
                  Step {step.number}
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
