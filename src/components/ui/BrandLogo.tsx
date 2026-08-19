import markAsset from "@/assets/mediceen-mark.png.asset.json";
import wordmarkAsset from "@/assets/mediceen-wordmark.png.asset.json";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
};

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src="/mediceen-mark.png"
        alt=""
        aria-hidden="true"
        className={cn("h-8 w-8 object-contain", markClassName)}
        width={235}
        height={236}
        loading="eager"
        decoding="async"
      />
      {showWordmark ? (
        <img
          src="/mediceen-wordmark.png"
          alt="Mediceen"
          className={cn("h-[1.15rem] w-auto object-contain", wordmarkClassName)}
          width={704}
          height={110}
          loading="eager"
          decoding="async"
        />
      ) : null}
    </span>
  );
}
