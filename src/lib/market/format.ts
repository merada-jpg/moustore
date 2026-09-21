import { CATEGORIES, type CategoryId } from "./types";

export function formatDzd(price: number): string {
  return new Intl.NumberFormat("ar-DZ", {
    maximumFractionDigits: 0,
  }).format(price);
}

export function categoryLabel(id: CategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? "أخرى";
}

export function isSafeHttpsUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export function productPath(storeId: string, productId: string): string {
  return `/p/${encodeURIComponent(storeId)}/${encodeURIComponent(productId)}`;
}

export function storePath(storeId: string): string {
  return `/stores/${encodeURIComponent(storeId)}`;
}

export async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.insetInlineStart = "-9999px";
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(el);
      return ok;
    } catch {
      return false;
    }
  }
}
