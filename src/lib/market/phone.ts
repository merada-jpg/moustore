/** Algerian GSM mobiles: 05 / 06 / 07 + 8 digits. Returns E.164 without '+'. */
export function normalizeAlgerianMobile(input: string): string | null {
  let digits = String(input ?? "").replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);

  if (digits.startsWith("213")) {
    if (digits.length !== 12) return null;
    digits = `0${digits.slice(3)}`;
  }

  if (digits.length === 9 && /^[567]/.test(digits)) {
    digits = `0${digits}`;
  }

  if (!/^0[567]\d{8}$/.test(digits)) return null;
  return `213${digits.slice(1)}`;
}

export function formatNationalPhone(e164: string): string {
  if (!/^213[567]\d{8}$/.test(e164)) return e164;
  const n = `0${e164.slice(3)}`;
  return `${n.slice(0, 4)} ${n.slice(4, 6)} ${n.slice(6, 8)} ${n.slice(8, 10)}`;
}

export function whatsappHref(e164: string, text?: string): string {
  const base = `https://wa.me/${e164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export async function hashPin(storeId: string, pin: string): Promise<string> {
  const payload = new TextEncoder().encode(`souk-dz|${storeId}|${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", payload);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
