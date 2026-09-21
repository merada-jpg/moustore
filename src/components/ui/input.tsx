import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-ink",
        "placeholder:text-subtle",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
