import { leaderboardRows, leaderboardScopes } from "@/data/product";
import { cn } from "@/lib/utils";

/** Compact cohort leaderboard (Weekly / This Month / All-time). */
export function LeaderboardExperience() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-2">
        {leaderboardScopes.map((scope, i) => (
          <span
            key={scope}
            className={cn(
              "rounded-full px-3 py-1 text-[0.68rem]",
              i === 0
                ? "bg-brand text-primary-foreground"
                : "border border-border text-muted-foreground",
            )}
          >
            {scope}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2">
        {leaderboardRows.map((row) => (
          <li
            key={row.rank}
            data-leaderboard-row
            className={cn(
              "flex items-center justify-between rounded-2xl border px-4 py-3",
              row.you
                ? "border-success/40 bg-success-soft"
                : "border-border bg-surface",
            )}
          >
            <span className="flex items-center gap-4">
              <span
                className={cn(
                  "font-display text-sm font-semibold tabular-nums",
                  row.you ? "text-success" : "text-muted-foreground",
                )}
              >
                #{String(row.rank).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-sm",
                  row.you ? "font-semibold text-brand-ink" : "text-brand-ink",
                )}
              >
                {row.name}
              </span>
            </span>
            <span className="text-sm tabular-nums text-muted-foreground">
              {row.score}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
