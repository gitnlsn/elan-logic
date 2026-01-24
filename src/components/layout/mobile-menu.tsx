"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { usePathname, useRouter } from "@/i18n/routing";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "pt-BR" : "en";
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-background p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={toggleLocale}
              className="flex items-center text-muted-foreground transition-colors hover:text-primary"
            >
              <Globe className="mr-2 h-4 w-4" />
              {locale === "en" ? "Mudar para Português" : "Switch to English"}
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
