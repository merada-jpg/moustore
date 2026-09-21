import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { StoreCard } from "@/components/market/store-card";
import { EmptyState } from "@/components/market/empty-state";
import { useMarket } from "@/lib/market/store";
import { CATEGORIES } from "@/lib/market/types";

export const Route = createFileRoute("/stores/")({
  component: StoresPage,
  head: () => ({ meta: [{ title: "المتاجر — سوق الجزائر الرقمي" }] }),
});

function StoresPage() {
  const stores = useMarket((s) => s.stores);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores.filter((s) => {
      if (!s.active) return false;
      const hay = `${s.name} ${s.owner}`.toLowerCase();
      const matchesQuery = !q || hay.includes(q);
      const matchesCat = category === "all" || s.category === category;
      return matchesQuery && matchesCat;
    });
  }, [stores, query, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">المتاجر المتاحة</h1>
          <p className="text-sm text-muted">ادخل أي متجر وتواصل مع التاجر مباشرة</p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <div className="relative md:w-72">
            <Search className="pointer-events-none absolute top-3 right-3 size-4 text-subtle" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن متجر أو تاجر..."
              className="pr-10"
              aria-label="بحث عن متجر"
            />
          </div>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="تصنيف المتجر"
            className="md:w-48"
          >
            <option value="all">كل التصنيفات</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <EmptyState title="لا توجد متاجر تطابق بحثك" hint="جرّب اسماً آخر أو صنفاً مختلفاً" />
        ) : (
          filtered.map((store) => <StoreCard key={store.id} store={store} />)
        )}
      </div>
    </div>
  );
}
