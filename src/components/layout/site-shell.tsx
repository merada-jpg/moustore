import { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { Menu, Store, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/market/contact-dialog";
import { WhatsAppIcon } from "@/components/market/whatsapp-icon";
import { PLATFORM } from "@/lib/market/types";
import { formatNationalPhone, whatsappHref } from "@/lib/market/phone";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/stores", label: "المتاجر" },
  { to: "/merchant", label: "لوحة التاجر" },
] as const;

export function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        تخطي إلى المحتوى
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-ink text-cedar-fg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-cedar">
              <Store className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide">سوق الجزائر الرقمي</span>
              <span className="block text-xs text-cedar-soft">متاجر وروابط شراء مباشرة</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="رئيسي">
            {NAV.map((item) => (
              <Button
                key={item.to}
                asChild
                variant="ghost"
                className="text-cedar-fg hover:bg-cedar-fg/10"
              >
                <Link to={item.to}>{item.label}</Link>
              </Button>
            ))}
            <Button variant="secondary" size="sm" onClick={() => setContactOpen(true)}>
              اتصل بنا
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="text-cedar-fg md:hidden"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        <div
          className={cn(
            "border-t border-cedar-fg/10 px-4 py-3 md:hidden",
            menuOpen ? "block" : "hidden",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="جوال">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-3 text-sm hover:bg-cedar-fg/10"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="rounded-lg px-3 py-3 text-right text-sm hover:bg-cedar-fg/10"
              onClick={() => {
                setMenuOpen(false);
                setContactOpen(true);
              }}
            >
              اتصل بنا
            </button>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-border bg-ink py-10 text-cedar-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
          <p className="text-sm font-medium text-cedar-fg">سوق متعدد المتاجر، شراء عبر واتساب دون حساب زائر</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href={whatsappHref(PLATFORM.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cedar-fg"
            >
              <WhatsAppIcon className="size-4" />
              {formatNationalPhone(PLATFORM.phone)}
            </a>
            <a href={`mailto:${PLATFORM.email}`} className="hover:text-cedar-fg">
              {PLATFORM.email}
            </a>
          </div>
          <p className="text-xs text-subtle">© 2026 سوق الجزائر الرقمي</p>
        </div>
      </footer>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
