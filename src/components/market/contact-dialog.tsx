import { Mail } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { WhatsAppIcon } from "./whatsapp-icon";
import { PLATFORM } from "@/lib/market/types";
import { formatNationalPhone, whatsappHref } from "@/lib/market/phone";

export function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent title="إدارة المنصة">
        <p className="text-sm text-muted">للتاجر أو المشتري: واتساب أو البريد.</p>
        <div className="mt-4 space-y-3">
          <a
            href={whatsappHref(PLATFORM.phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-cedar-soft p-3 text-cedar hover:opacity-90"
          >
            <WhatsAppIcon className="size-6" />
            <span>
              <span className="block text-xs text-muted">واتساب</span>
              <span className="font-semibold">{formatNationalPhone(PLATFORM.phone)}</span>
            </span>
          </a>
          <a
            href={`mailto:${PLATFORM.email}`}
            className="flex items-center gap-3 rounded-lg bg-secondary p-3 text-ink hover:opacity-90"
          >
            <Mail className="size-6 text-cedar" />
            <span>
              <span className="block text-xs text-muted">البريد</span>
              <span className="font-semibold">{PLATFORM.email}</span>
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
