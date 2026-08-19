import appStoreBadge from "@/assets/app-store-badge.png.asset.json";
import googlePlayBadge from "@/assets/google-play-badge.png.asset.json";
import { STORE_LINKS, isStoreLinkLive } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Store = "apple" | "google";

const config: Record<Store, { url: string; src: string; alt: string }> = {
  apple: {
    url: STORE_LINKS.appStore,
    src: appStoreBadge.url,
    alt: "Download Mediceen on the App Store",
  },
  google: {
    url: STORE_LINKS.playStore,
    src: googlePlayBadge.url,
    alt: "Get Mediceen on Google Play",
  },
};

export function StoreBadge({ store, className }: { store: Store; className?: string }) {
  const { url, src, alt } = config[store];
  const live = isStoreLinkLive(url);

  const image = (
    <img
      src={src}
      alt={alt}
      width={1360}
      height={410}
      loading="lazy"
      className="h-11 w-auto sm:h-12"
    />
  );

  const base = cn(
    "inline-flex items-center rounded-xl transition-all duration-300",
    live ? "hover:-translate-y-0.5 hover:opacity-90" : "cursor-default opacity-90",
    className,
  );

  if (!live) {
    return (
      <span
        className={base}
        title="Store link will be available at launch"
        aria-label={`${alt} — coming at launch`}
      >
        {image}
      </span>
    );
  }

  return (
    <a href={url} className={base} aria-label={alt} rel="noopener noreferrer" target="_blank">
      {image}
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
