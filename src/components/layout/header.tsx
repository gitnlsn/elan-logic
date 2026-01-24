"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { LocaleSwitcher } from "./locale-switcher";
import { siteConfig, getWhatsAppUrl } from "@/lib/constants";

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const tWhatsApp = useTranslations("whatsapp");

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LocaleSwitcher />
            <Button asChild className="hidden sm:inline-flex">
              <a
                href={getWhatsAppUrl(tWhatsApp("defaultMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tHeader("getInTouch")}
              </a>
            </Button>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </Container>
    </header>
  );
}
