import { Link } from "@tanstack/react-router";
import { Store as StoreIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { categoryLabel } from "@/lib/market/format";
import { wilayaName } from "@/lib/market/wilayas";
import type { Store } from "@/lib/market/types";
import { useMarket } from "@/lib/market/store";

export function StoreCard({ store }: { store: Store }) {
  const count = useMarket((s) =>
    s.stores.find((x) => x.id === store.id)?.products.filter((p) => p.active && p.stock > 0).length ?? 0,
  );
  return (
    <Card>
      <CardBody className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-lg bg-cedar-soft text-cedar">
            <StoreIcon className="size-7" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold">{store.name}</h3>
            <p className="text-xs text-muted">التاجر: {store.owner}</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <Badge>{count} منتجات</Badge>
              <Badge className="bg-secondary text-muted">{categoryLabel(store.category)}</Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted">التوصيل: {wilayaName(store.wilaya)}</span>
          <Button asChild size="sm">
            <Link to="/stores/$storeId" params={{ storeId: store.id }}>
              دخول المتجر
            </Link>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
