import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "prose";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        width === "wide" && "max-w-[76rem]",
        width === "default" && "max-w-[76rem]",
        width === "prose" && "max-w-[46rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
