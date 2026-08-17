import { Link } from "@tanstack/react-router";
import { footerNav } from "@/data/navigation";
import { DISCLAIMER, PLACEHOLDERS, SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo markClassName="h-9 w-9" wordmarkClassName="h-[1.3rem]" />
          <p className="mt-4 text-sm text-muted-foreground">{SITE.tagline}</p>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
            {DISCLAIMER}
          </p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-ink">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {PLACEHOLDERS.legalEntityName}
          </p>
          <p>{PLACEHOLDERS.registeredAddress}</p>
        </div>
      </div>
    </footer>
  );
}
