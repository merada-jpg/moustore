import { formatDzd } from "@/lib/market/format";
import { cn } from "@/lib/utils";

export function Price({
  value,
  className,
  suffix = "دج",
}: {
  value: number;
  className?: string;
  suffix?: string;
}) {
  return (
    <span className={cn("tabular-nums font-semibold text-cedar", className)}>
      {formatDzd(value)}
      <span className="mr-1 text-xs font-medium text-muted">{suffix}</span>
    </span>
  );
}
