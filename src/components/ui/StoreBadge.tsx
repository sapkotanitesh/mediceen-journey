import { Apple, Play } from "lucide-react";
import { STORE_LINKS, isStoreLinkLive } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Store = "apple" | "google";

const config: Record<Store, { url: string; small: string; large: string }> = {
  apple: {
    url: STORE_LINKS.appStore,
    small: "Download on the",
    large: "App Store",
  },
  google: {
    url: STORE_LINKS.playStore,
    small: "Get it on",
    large: "Google Play",
  },
};

export function StoreBadge({
  store,
  className,
}: {
  store: Store;
  className?: string;
}) {
  const { url, small, large } = config[store];
  const live = isStoreLinkLive(url);
  const Icon = store === "apple" ? Apple : Play;

  const content = (
    <>
      <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="text-left leading-tight">
        <span className="block text-[0.68rem] uppercase tracking-[0.14em] opacity-70">
          {small}
        </span>
        <span className="block font-display text-[1.05rem] font-semibold">{large}</span>
      </span>
    </>
  );

  const base = cn(
    "inline-flex items-center gap-3 rounded-2xl border px-5 py-3 transition-all duration-300",
    live
      ? "border-brand bg-brand text-primary-foreground hover:brightness-110"
      : "border-border bg-surface text-muted-foreground",
    className,
  );

  if (!live) {
    return (
      <span
        className={base}
        title="Store link will be available at launch"
        aria-label={`${small} ${large} — coming at launch`}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={url}
      className={base}
      aria-label={`${small} ${large}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge store="apple" />
      <StoreBadge store="google" />
    </div>
  );
}
