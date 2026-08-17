import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pure CSS/DOM device frame. The app UI passed as children is decorative
 * marketing artwork, not a functional application.
 */
export function PhoneMockup({
  children,
  className,
  screenClassName,
  label = "Mediceen mobile app preview",
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[min(78vw,20rem)] shrink-0 rounded-[2.6rem] p-[3px]",
        "bg-[linear-gradient(160deg,oklch(0.86_0.01_260),oklch(0.42_0.02_260)_45%,oklch(0.72_0.01_260))]",
        "shadow-phone",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="h-full w-full rounded-[2.45rem] bg-[oklch(0.18_0.02_260)] p-[6px]">
        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-[2.1rem] bg-background",
            screenClassName,
          )}
        >
          <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[oklch(0.18_0.02_260)]" />
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[2.1rem] bg-[linear-gradient(115deg,oklch(1_0_0/0.35)_0%,transparent_28%,transparent_75%,oklch(1_0_0/0.12)_100%)]" />
          <div className="relative z-0 flex h-full flex-col pt-9">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function PhoneStatusBar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
      <span>{label}</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        Mediceen
      </span>
    </div>
  );
}
