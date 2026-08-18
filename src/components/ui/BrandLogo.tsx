import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
};

/**
 * Self-contained vector brand mark + wordmark built from the official
 * Mediceen palette (Blue #4D78BD, Green #5F9F56, Teal #7CC4C1). Rendering it
 * inline keeps the logo crisp at any size and independent of external assets.
 */
export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
}: BrandLogoProps) {
  const gradientId = useId();

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-label={showWordmark ? undefined : "Mediceen"}
        aria-hidden={showWordmark ? true : undefined}
        className={cn("h-8 w-8 shrink-0", markClassName)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4D78BD" />
            <stop offset="0.55" stopColor="#5F9F56" />
            <stop offset="1" stopColor="#7CC4C1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
        {/* Medical cross */}
        <rect x="17" y="9" width="6" height="22" rx="3" fill="#FFFFFF" />
        <rect x="9" y="17" width="22" height="6" rx="3" fill="#FFFFFF" opacity="0.92" />
        {/* Pulse accent sweeping across the mark */}
        <path
          d="M5 26 L13 26 L16 20 L20 30 L24 23 L27 26 L35 26"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-[1.15rem] font-semibold leading-none tracking-tight text-brand-ink",
            wordmarkClassName,
          )}
        >
          Mediceen
        </span>
      ) : null}
    </span>
  );
}
