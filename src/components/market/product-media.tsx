import { useState } from "react";
import { ProductArt } from "./product-art";
import type { Product } from "@/lib/market/types";

export function ProductMedia({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(product.imageUrl) && !failed;

  return (
    <div className={className}>
      {showImage ? (
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <ProductArt kind={product.art} title={product.title} />
      )}
    </div>
  );
}
