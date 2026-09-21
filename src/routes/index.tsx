import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/market/product-card";
import { EmptyState } from "@/components/market/empty-state";
import { WhatsAppIcon } from "@/components/market/whatsapp-icon";
import { featuredCatalog, useMarket } from "@/lib/market/store";
import { PLATFORM } from "@/lib/market/types";
import { formatNationalPhone, whatsappHref } from "@/lib/market/phone";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [{ title: "سوق الجزائر الرقمي" }] }),
});

function Home() {
  const stores = useMarket((s) => s.stores);
  const featured = featuredCatalog(stores);

  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-wide text-cedar">منصة تجارة محلية بلا حساب زائر</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            افتح متجرك أو اشترِ من رابط مباشر
          </h1>
          <p className="max-w-xl text-muted">
            كل زائر يتصفح السلع ويراسل التاجر على واتساب فوراً. لا سلة معقّدة ولا تسجيل للمشترين.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link to="/merchant">افتح متجرك</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/stores">تصفح المتاجر</Link>
            </Button>
          </div>
        </div>
        <aside className="rounded-xl border border-border bg-paper p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <ShieldCheck className="size-4 text-cedar" />
            دعم المنصة
          </h2>
          <div className="space-y-3 text-sm">
            <a
              href={whatsappHref(PLATFORM.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-cedar-soft p-3 text-cedar"
            >
              <WhatsAppIcon className="size-5" />
              <span>
                <span className="block text-xs text-muted">واتساب</span>
                {formatNationalPhone(PLATFORM.phone)}
              </span>
            </a>
            <div className="rounded-lg bg-secondary p-3">
              <span className="block text-xs text-muted">البريد</span>
              <span className="font-medium">{PLATFORM.email}</span>
            </div>
          </div>
        </aside>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">منتجات مختارة</h2>
            <p className="text-sm text-muted">روابط مباشرة للتاجر عبر واتساب</p>
          </div>
          <Link to="/stores" className="inline-flex items-center gap-1 text-sm font-medium text-cedar">
            كل المتاجر
            <ArrowLeft className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.length === 0 ? (
            <EmptyState title="لا توجد منتجات متاحة حالياً" />
          ) : (
            featured.map(({ store, product }) => (
              <ProductCard key={`${store.id}-${product.id}`} store={store} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
