import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { Button } from "@/components/ui/brand-button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <Link to="/" aria-label="Mediceen home" className="inline-flex items-center">
      <BrandLogo />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-[88rem] items-center justify-between px-6 sm:px-8"
        aria-label="Primary"
      >
        <Wordmark />

        <ul className="hidden items-center gap-9 md:flex">
          {primaryNav.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
                activeOptions={{ exact: true, includeHash: false }}
                activeProps={{ className: "text-brand-ink" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/" hash="download">
              Download App
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-brand-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto flex max-w-[88rem] flex-col gap-1 px-6 py-4">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  className="block rounded-xl px-3 py-3 text-base text-brand-ink hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/" hash="download">
                  Download App
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
