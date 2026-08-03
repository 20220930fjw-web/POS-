import Link from 'next/link';
import Badge from '@/components/ui/Badge';

import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative w-full h-56 bg-[#F5F5F5] overflow-hidden">
          {product.images.hero ? (
            <img
              src={product.images.hero}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-[#E5E7EB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3
            className="text-lg font-semibold text-[#111827] mb-1 hover:text-[#1A56DB] transition-colors"
            
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#6B7280] mb-3">{product.subtitle}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.highlights.slice(0, 3).map((highlight) => (
            <Badge key={highlight} variant="blue">
              {highlight}
            </Badge>
          ))}
        </div>

        {/* View Details Link */}
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center text-sm font-medium text-[#1A56DB] hover:text-[#1444B0] transition-colors"
        >
          View Details
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
