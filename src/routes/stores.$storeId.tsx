import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { ProductCard } from "@/components/market/product-card";
import { EmptyState } from "@/components/market/empty-state";
import { WhatsAppIcon } from "@/components/market/whatsapp-icon";
import { useMarket } from "@/lib/market/store";
import { categoryLabel } from "@/lib/market/format";
import { formatNationalPhone, whatsappHref } from "@/lib/market/phone";
import { wilayaName } from "@/lib/market/wilayas";

export const Route = createFileRoute("/stores/$storeId")({
  component: StoreDetail,
});

function StoreDetail() {
  const { storeId } = Route.useParams();
  const store = useMarket((s) => s.stores.find((x) => x.id === storeId));
  const products = store?.products.filter((p) => p.active && p.stock > 0) ?? [];

  if (!store || !store.active) {
    return (
      <EmptyState title="هذا المتجر غير متاح" hint="قد يكون الرابط قديماً أو أُزيل المتجر." />
    );
  }

  return (
    <div className="space-y-6">
      <Button asChild variant="secondary" size="sm">
        <Link to="/stores">
          <ArrowRight className="size-4" />
          العودة للمتاجر
        </Link>
      </Button>
      <Card>
        <CardBody className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Badge>متجر نشط</Badge>
            <h1 className="mt-2 text-2xl font-semibold">{store.name}</h1>
            <p className="text-sm text-muted">
              المالك: {store.owner} · {categoryLabel(store.category)} · توصيل{" "}
              {wilayaName(store.wilaya)}
            </p>
          </div>
          <Button asChild>
            <a
              href={whatsappHref(
                store.phone,
                `السلام عليكم، أتابع متجركم «${store.name}» على سوق الجزائر الرقمي.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              مراسلة التاجر
              <span className="text-xs opacity-80">{formatNationalPhone(store.phone)}</span>
            </a>
          </Button>
        </CardBody>
      </Card>
      <div>
        <h2 className="mb-4 text-xl font-semibold">سلع المتجر</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.length === 0 ? (
            <EmptyState title="لا توجد سلع متاحة في هذا المتجر حالياً" />
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} store={store} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
