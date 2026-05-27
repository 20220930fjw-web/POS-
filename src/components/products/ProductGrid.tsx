import ProductCard from './ProductCard';

import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3;
}

export default function ProductGrid({ products, columns = 3 }: ProductGridProps) {
  const gridCols =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
