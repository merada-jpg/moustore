import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-2xl font-semibold">الصفحة غير موجودة</h1>
      <p className="text-sm text-muted">الرابط غير صالح أو أُزيل المنتج.</p>
      <Button asChild>
        <Link to="/">العودة للرئيسية</Link>
      </Button>
    </div>
  );
}
