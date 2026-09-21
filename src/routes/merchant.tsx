import { type FormEvent, type ReactNode, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Price } from "@/components/market/price";
import { ProductMedia } from "@/components/market/product-media";
import { EmptyState } from "@/components/market/empty-state";
import { useMarket } from "@/lib/market/store";
import { CATEGORIES, PRODUCT_ART, type CategoryId, type Product, type ProductArtId } from "@/lib/market/types";
import { copyText, productPath } from "@/lib/market/format";
import { WILAYAS } from "@/lib/market/wilayas";

export const Route = createFileRoute("/merchant")({
  component: MerchantPage,
  head: () => ({ meta: [{ title: "لوحة التاجر — سوق الجزائر الرقمي" }] }),
});

const ART_LABELS: Record<ProductArtId, string> = {
  watch: "ساعة",
  bag: "حقيبة",
  scarf: "وشاح",
  headphones: "سماعات",
  powerbank: "شاحن",
  lamp: "مصباح",
  coffee: "بن",
  spices: "بهارات",
  generic: "عام",
};

type ProductForm = {
  title: string;
  price: string;
  desc: string;
  imageUrl: string;
  stock: string;
  category: CategoryId;
  art: ProductArtId;
  featured: boolean;
};

const emptyProduct: ProductForm = {
  title: "",
  price: "",
  desc: "",
  imageUrl: "",
  stock: "10",
  category: "other",
  art: "generic",
  featured: true,
};

function MerchantPage() {
  const session = useMarket((s) => s.sessionStore());
  const createStore = useMarket((s) => s.createStore);
  const unlockStore = useMarket((s) => s.unlockStore);
  const logout = useMarket((s) => s.logout);
  const addProduct = useMarket((s) => s.addProduct);
  const updateProduct = useMarket((s) => s.updateProduct);
  const deleteProduct = useMarket((s) => s.deleteProduct);

  const [mode, setMode] = useState<"create" | "enter">("create");
  const [busy, setBusy] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [auth, setAuth] = useState({
    name: "",
    owner: "",
    phone: "",
    email: "",
    wilaya: "16",
    category: "other" as CategoryId,
    pin: "",
  });

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await createStore(auth);
      toast.success("تم إنشاء المتجر. يمكنك إضافة السلع الآن.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "تعذر إنشاء المتجر");
    } finally {
      setBusy(false);
    }
  }

  async function onEnter(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await unlockStore(auth.phone, auth.pin);
      toast.success("تم الدخول إلى لوحة المتجر");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "تعذر الدخول");
    } finally {
      setBusy(false);
    }
  }

  function startEdit(p: Product) {
    setEditingId(p.id);
    setForm({
      title: p.title,
      price: String(p.price),
      desc: p.desc,
      imageUrl: p.imageUrl,
      stock: String(p.stock),
      category: p.category,
      art: p.art,
      featured: p.featured,
    });
  }

  function onSaveProduct(e: FormEvent) {
    e.preventDefault();
    try {
      const payload = {
        title: form.title,
        price: Number(form.price),
        desc: form.desc,
        imageUrl: form.imageUrl,
        stock: Number(form.stock),
        category: form.category,
        art: form.art,
        featured: form.featured,
      };
      if (editingId) {
        updateProduct(editingId, payload);
        toast.success("تم تحديث المنتج");
      } else {
        addProduct(payload);
        toast.success("تم نشر المنتج");
      }
      setEditingId(null);
      setForm(emptyProduct);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "تعذر حفظ المنتج");
    }
  }

  async function onCopy(storeId: string, productId: string) {
    const url = `${window.location.origin}${productPath(storeId, productId)}`;
    const ok = await copyText(url);
    if (ok) toast.success("تم نسخ الرابط");
    else toast.error("تعذر النسخ");
  }

  if (!session) {
    return (
      <Card className="mx-auto max-w-3xl">
        <CardBody className="space-y-6 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">لوحة تحكم التاجر</h1>
              <p className="text-sm text-muted">
                المتجر يُحفظ على هذا الجهاز فقط. الزائر لا يحتاج حساباً للشراء.
              </p>
            </div>
            <Badge>بوابة التجار</Badge>
          </div>
          <div className="flex gap-2 rounded-lg bg-paper p-1">
            <Button
              type="button"
              variant={mode === "create" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setMode("create")}
            >
              إنشاء متجر
            </Button>
            <Button
              type="button"
              variant={mode === "enter" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setMode("enter")}
            >
              دخول متجر قائم
            </Button>
          </div>
          {mode === "create" ? (
            <form onSubmit={onCreate} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="اسم المتجر">
                <Input
                  required
                  minLength={3}
                  value={auth.name}
                  onChange={(e) => setAuth({ ...auth, name: e.target.value })}
                  placeholder="مثال: متجر الهواتف"
                />
              </Field>
              <Field label="اسم التاجر">
                <Input
                  required
                  minLength={3}
                  value={auth.owner}
                  onChange={(e) => setAuth({ ...auth, owner: e.target.value })}
                  placeholder="اسمك الكامل"
                />
              </Field>
              <Field label="هاتف واتساب (05 / 06 / 07)">
                <Input
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={auth.phone}
                  onChange={(e) => setAuth({ ...auth, phone: e.target.value })}
                  placeholder="0775554695"
                />
              </Field>
              <Field label="البريد (اختياري)">
                <Input
                  type="email"
                  value={auth.email}
                  onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                  placeholder="name@email.com"
                />
              </Field>
              <Field label="ولاية التوصيل الأساسية">
                <Select
                  value={auth.wilaya}
                  onChange={(e) => setAuth({ ...auth, wilaya: e.target.value })}
                >
                  <option value="all">كل الولايات</option>
                  {WILAYAS.map((w) => (
                    <option key={w.code} value={w.code}>
                      {w.code} — {w.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="تصنيف المتجر">
                <Select
                  value={auth.category}
                  onChange={(e) =>
                    setAuth({ ...auth, category: e.target.value as CategoryId })
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="رمز دخول من 4 أرقام">
                <Input
                  required
                  inputMode="numeric"
                  minLength={4}
                  maxLength={4}
                  pattern="\d{4}"
                  autoComplete="off"
                  value={auth.pin}
                  onChange={(e) => setAuth({ ...auth, pin: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                  placeholder="••••"
                />
              </Field>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full" disabled={busy}>
                  إنشاء المتجر ودخول اللوحة
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={onEnter} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="هاتف المتجر">
                <Input
                  required
                  inputMode="tel"
                  value={auth.phone}
                  onChange={(e) => setAuth({ ...auth, phone: e.target.value })}
                  placeholder="0775554695"
                />
              </Field>
              <Field label="رمز الدخول">
                <Input
                  required
                  inputMode="numeric"
                  minLength={4}
                  maxLength={4}
                  pattern="\d{4}"
                  autoComplete="off"
                  value={auth.pin}
                  onChange={(e) => setAuth({ ...auth, pin: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                />
              </Field>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full" disabled={busy}>
                  دخول اللوحة
                </Button>
              </div>
            </form>
          )}
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Card>
        <CardBody className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold">أهلاً، {session.name}</h1>
            <p className="text-sm text-muted">
              متجرك محفوظ على هذا المتصفح. أضف سلعاً وانسخ رابط كل منتج.
            </p>
          </div>
          <Button variant="danger" onClick={logout}>
            خروج من اللوحة
          </Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4 p-6">
          <h2 className="text-lg font-semibold">
            {editingId ? "تعديل سلعة" : "إضافة سلعة جديدة"}
          </h2>
          <form onSubmit={onSaveProduct} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="عنوان المنتج">
              <Input
                required
                minLength={3}
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Field>
            <Field label="السعر (دج)">
              <Input
                required
                type="number"
                min={1}
                max={100000000}
                step={1}
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Field>
            <Field label="المخزون">
              <Input
                required
                type="number"
                min={0}
                max={9999}
                step={1}
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />
            </Field>
            <Field label="التصنيف">
              <Select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as CategoryId })}
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="رسم توضيحي">
              <Select
                value={form.art}
                onChange={(e) => setForm({ ...form, art: e.target.value as ProductArtId })}
              >
                {PRODUCT_ART.map((a) => (
                  <option key={a} value={a}>
                    {ART_LABELS[a]}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="رابط صورة https (اختياري)">
              <Input
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                placeholder="https://"
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="وصف السلعة">
                <Textarea
                  rows={3}
                  maxLength={1000}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                />
              </Field>
            </div>
            <label className="flex items-center gap-2 text-sm md:col-span-2">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              />
              إظهار في المنتجات المختارة على الرئيسية
            </label>
            <div className="flex gap-2 md:col-span-2">
              <Button type="submit" className="flex-1">
                {editingId ? "حفظ التعديل" : "نشر المنتج"}
              </Button>
              {editingId ? (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setEditingId(null);
                    setForm(emptyProduct);
                  }}
                >
                  إلغاء
                </Button>
              ) : null}
            </div>
          </form>
        </CardBody>
      </Card>

      <div>
        <h2 className="mb-4 text-lg font-semibold">سلع متجرك</h2>
        <div className="space-y-3">
          {session.products.length === 0 ? (
            <EmptyState title="لم تضف أي سلع بعد" />
          ) : (
            session.products.map((prod) => (
              <Card key={prod.id}>
                <CardBody className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="size-12 overflow-hidden rounded-lg bg-secondary">
                      <ProductMedia product={prod} className="h-full w-full" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{prod.title}</p>
                      <Price value={prod.price} className="text-sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button type="button" variant="ghost" size="icon" aria-label="معاينة" asChild>
                      <Link
                        to="/p/$storeId/$productId"
                        params={{ storeId: session.id, productId: prod.id }}
                      >
                        <Eye className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="نسخ الرابط"
                      onClick={() => onCopy(session.id, prod.id)}
                    >
                      <Link2 className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="تعديل"
                      onClick={() => startEdit(prod)}
                    >
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="حذف"
                      className="text-danger"
                      onClick={() => {
                        if (window.confirm("حذف هذا المنتج؟")) {
                          deleteProduct(prod.id);
                          toast.success("تم الحذف");
                        }
                      }}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
