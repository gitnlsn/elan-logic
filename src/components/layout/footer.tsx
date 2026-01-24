"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tCommon = useTranslations("common");

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link href="/" className="text-xl font-bold text-primary">
                {siteConfig.name}
              </Link>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                {tCommon("siteDescription")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold">{tFooter("navigation")}</h4>
              <nav className="mt-4 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold">{tFooter("connect")}</h4>
              <nav className="mt-4 flex flex-col space-y-2">
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Twitter
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {currentYear} {siteConfig.name}. {tFooter("copyright")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
