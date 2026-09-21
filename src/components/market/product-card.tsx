import { Link } from "@tanstack/react-router";
import { Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Price } from "./price";
import { ProductMedia } from "./product-media";
import { categoryLabel } from "@/lib/market/format";
import type { Product, Store } from "@/lib/market/types";

export function ProductCard({ store, product }: { store: Store; product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Link
        to="/p/$storeId/$productId"
        params={{ storeId: store.id, productId: product.id }}
        className="relative block h-48 overflow-hidden bg-secondary"
      >
        <ProductMedia product={product} className="h-full w-full" />
        <span className="absolute top-3 right-3 rounded-md bg-ink/80 px-2 py-1 text-xs text-cedar-fg">
          {store.name}
        </span>
      </Link>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <Badge className="mb-2 bg-secondary text-muted">{categoryLabel(product.category)}</Badge>
          <Link
            to="/p/$storeId/$productId"
            params={{ storeId: store.id, productId: product.id }}
            className="block"
          >
            <h3 className="line-clamp-1 font-semibold text-ink hover:text-cedar">{product.title}</h3>
          </Link>
          <p className="mt-1 line-clamp-2 text-xs text-muted">{product.desc}</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <Price value={product.price} className="text-lg" />
          <Link
            to="/p/$storeId/$productId"
            params={{ storeId: store.id, productId: product.id }}
            className="inline-flex h-9 items-center gap-1 rounded-lg bg-cedar-soft px-3 text-xs font-medium text-cedar"
          >
            <Link2 className="size-3.5" />
            رابط الشراء
          </Link>
        </div>
      </div>
    </Card>
  );
}
