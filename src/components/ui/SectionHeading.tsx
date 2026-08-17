import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
      data-reveal-group
    >
      {eyebrow ? (
        <p
          className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand"
          data-reveal
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-balance-tight font-display font-semibold text-brand-ink",
          Tag === "h1" ? "text-[clamp(2.6rem,6.4vw,4.6rem)]" : "text-[clamp(2rem,4.2vw,3.25rem)]",
        )}
        data-reveal
      >
        {title}
      </Tag>
      {description ? (
        <p
          className="mt-5 text-[clamp(1rem,1.35vw,1.15rem)] leading-relaxed text-muted-foreground"
          data-reveal
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
