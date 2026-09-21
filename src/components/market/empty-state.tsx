export function EmptyState({
  title,
  hint,
}: {
  title: string;
  hint?: string;
}) {
  return (
    <div className="col-span-full rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
      <p className="font-medium text-ink">{title}</p>
      {hint ? <p className="mt-1 text-sm text-muted">{hint}</p> : null}
    </div>
  );
}
