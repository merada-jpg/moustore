import type { ReactNode } from "react";
import type { ProductArtId } from "@/lib/market/types";

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" role="img" aria-label={title}>
      <rect width="640" height="480" fill="#ece7db" />
      {children}
    </svg>
  );
}

export function ProductArt({ kind, title }: { kind: ProductArtId; title: string }) {
  switch (kind) {
    case "watch":
      return (
        <Frame title={title}>
          <rect x="292" y="70" width="56" height="90" rx="8" fill="#1a1814" />
          <rect x="292" y="320" width="56" height="90" rx="8" fill="#1a1814" />
          <circle cx="320" cy="240" r="88" fill="#0e5c45" />
          <circle cx="320" cy="240" r="70" fill="#fbf8f1" />
          <circle cx="320" cy="240" r="6" fill="#1a1814" />
          <rect x="316" y="186" width="8" height="54" rx="4" fill="#1a1814" />
          <rect x="320" y="236" width="40" height="6" rx="3" fill="#0e5c45" />
        </Frame>
      );
    case "bag":
      return (
        <Frame title={title}>
          <path d="M220 210 h200 v170 a24 24 0 0 1-24 24 H244 a24 24 0 0 1-24-24z" fill="#0e5c45" />
          <path d="M250 210 v-36 a70 70 0 0 1 140 0 v36" fill="none" stroke="#1a1814" strokeWidth="18" />
          <rect x="300" y="250" width="40" height="28" rx="6" fill="#fbf8f1" />
        </Frame>
      );
    case "scarf":
      return (
        <Frame title={title}>
          <path d="M140 160h360l-40 160H180z" fill="#0e5c45" />
          <path d="M180 200h280" stroke="#f4f0e6" strokeWidth="10" />
          <path d="M170 250h300" stroke="#1a1814" strokeWidth="6" opacity="0.35" />
          <circle cx="200" cy="300" r="10" fill="#f4f0e6" />
          <circle cx="440" cy="300" r="10" fill="#f4f0e6" />
        </Frame>
      );
    case "headphones":
      return (
        <Frame title={title}>
          <path d="M160 250 a160 160 0 0 1 320 0" fill="none" stroke="#1a1814" strokeWidth="28" />
          <rect x="132" y="240" width="70" height="110" rx="24" fill="#0e5c45" />
          <rect x="438" y="240" width="70" height="110" rx="24" fill="#0e5c45" />
        </Frame>
      );
    case "powerbank":
      return (
        <Frame title={title}>
          <rect x="230" y="120" width="180" height="260" rx="28" fill="#1a1814" />
          <rect x="252" y="150" width="136" height="80" rx="12" fill="#0e5c45" />
          <circle cx="320" cy="300" r="14" fill="#f4f0e6" />
          <rect x="292" y="340" width="56" height="12" rx="6" fill="#ece7db" />
        </Frame>
      );
    case "lamp":
      return (
        <Frame title={title}>
          <rect x="300" y="280" width="40" height="90" fill="#1a1814" />
          <rect x="250" y="370" width="140" height="16" rx="8" fill="#1a1814" />
          <path d="M220 180 h200 l-40 100 H260z" fill="#0e5c45" />
          <circle cx="320" cy="164" r="18" fill="#f4f0e6" />
        </Frame>
      );
    case "coffee":
      return (
        <Frame title={title}>
          <ellipse cx="320" cy="340" rx="90" ry="24" fill="#1a1814" />
          <path d="M230 160 h180 l20 180 H210z" fill="#0e5c45" />
          <ellipse cx="320" cy="160" rx="90" ry="28" fill="#1a1814" />
          <path d="M410 210 c40 0 50 40 20 70" fill="none" stroke="#1a1814" strokeWidth="14" />
        </Frame>
      );
    case "spices":
      return (
        <Frame title={title}>
          <rect x="180" y="160" width="90" height="180" rx="12" fill="#0e5c45" />
          <rect x="275" y="130" width="90" height="210" rx="12" fill="#1a1814" />
          <rect x="370" y="180" width="90" height="160" rx="12" fill="#6f6a62" />
          <ellipse cx="225" cy="160" rx="45" ry="16" fill="#dce8e2" />
          <ellipse cx="320" cy="130" rx="45" ry="16" fill="#ece7db" />
          <ellipse cx="415" cy="180" rx="45" ry="16" fill="#f4f0e6" />
        </Frame>
      );
    default:
      return (
        <Frame title={title}>
          <rect x="200" y="140" width="240" height="200" rx="24" fill="#0e5c45" />
          <circle cx="320" cy="240" r="36" fill="#f4f0e6" />
        </Frame>
      );
  }
}
