import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Link2, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Price } from "@/components/market/price";
import { ProductMedia } from "@/components/market/product-media";
import { WhatsAppIcon } from "@/components/market/whatsapp-icon";
import { useMarket } from "@/lib/market/store";
import { copyText, productPath } from "@/lib/market/format";
import { formatNationalPhone, whatsappHref } from "@/lib/market/phone";
import { wilayaName } from "@/lib/market/wilayas";

export const Route = createFileRoute("/p/$storeId/$productId")({
  component: ProductPage,
});

function ProductPage() {
  const { storeId, productId } = Route.useParams();
  const store = useMarket((s) => s.stores.find((x) => x.id === storeId && x.active));
  const product = store?.products.find((p) => p.id === productId && p.active && p.stock > 0);
  const [qty, setQty] = useState(1);
  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return productPath(storeId, productId);
    return `${window.location.origin}${productPath(storeId, productId)}`;
  }, [storeId, productId]);

  if (!store || !product) {
    return (
      <div className="space-y-4">
        <Button asChild variant="secondary" size="sm">
          <Link to="/">
            <ArrowRight className="size-4" />
            الرئيسية
          </Link>
        </Button>
        <p className="text-muted">هذا المنتج غير متاح أو نفد مخزونه.</p>
      </div>
    );
  }

  const maxQty = Math.max(1, product.stock);
  const safeQty = Math.min(qty, maxQty);
  const message = [
    "السلام عليكم، أريد طلب هذا المنتج:",
    `• ${product.title}`,
    `• السعر: ${product.price} دج`,
    `• الكمية: ${safeQty}`,
    `• الرابط: ${shareUrl}`,
  ].join("\n");

  async function onCopy() {
    const ok = await copyText(shareUrl);
    if (ok) {
      setCopied(true);
      toast.success("تم نسخ رابط المنتج");
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error("تعذر النسخ، انسخ الرابط من شريط العنوان");
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Button asChild variant="secondary" size="sm">
        <Link to="/">
          <ArrowRight className="size-4" />
          الرئيسية
        </Link>
      </Button>
      <Card>
        <CardBody className="space-y-6 p-6 md:p-8">
          <div className="flex items-center justify-between rounded-lg border border-border bg-paper px-4 py-3">
            <div>
              <p className="text-xs text-muted">متجر التاجر</p>
              <Link
                to="/stores/$storeId"
                params={{ storeId: store.id }}
                className="font-semibold text-cedar hover:underline"
              >
                {store.name}
              </Link>
            </div>
            <Badge>صفحة منتج مباشرة</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border bg-secondary">
              <ProductMedia product={product} className="aspect-square" />
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h1 className="text-2xl font-semibold md:text-3xl">{product.title}</h1>
                <Price value={product.price} className="mt-3 block text-3xl" suffix="دينار جزائري" />
                <p className="mt-4 text-sm leading-relaxed text-muted">{product.desc}</p>
                <p className="mt-3 text-xs text-subtle">
                  المتوفر: {product.stock} · التوصيل: {wilayaName(store.wilaya)}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-border bg-paper p-4">
                <p className="text-xs font-medium text-muted">طلب فوري عبر واتساب</p>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    aria-label="إنقاص الكمية"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="min-w-8 text-center tabular-nums font-semibold">{safeQty}</span>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    aria-label="زيادة الكمية"
                    onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
                <Button asChild className="w-full" size="lg">
                  <a
                    href={whatsappHref(store.phone, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-5" />
                    اطلب عبر واتساب
                  </a>
                </Button>
                <Button type="button" variant="secondary" className="w-full" onClick={onCopy}>
                  {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
                  {copied ? "تم النسخ" : "نسخ رابط المنتج"}
                </Button>
                <p className="text-center text-xs text-subtle">
                  يفتح واتساب نحو {formatNationalPhone(store.phone)} دون إنشاء حساب.
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
