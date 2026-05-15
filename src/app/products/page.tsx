'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductGrid from '@/components/products/ProductGrid';
import { products, productCategories } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const activeCategoryName =
    activeCategory === 'all'
      ? 'All Products'
      : productCategories.find((c) => c.slug === activeCategory)?.name || 'Products';

  const activeCategoryDesc =
    activeCategory === 'all'
      ? 'Explore our complete range of POS hardware and peripherals'
      : productCategories.find((c) => c.slug === activeCategory)?.description || '';

  const buttonClass = (isActive: boolean) =>
    `shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ` +
    (isActive
      ? 'bg-[#1A56DB] text-white'
      : 'bg-[#F5F5F5] text-[#374151] hover:bg-[#E5E7EB]');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A56DB] to-[#1444B0] pt-32 pb-16">
        <Container>
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Products
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Complete POS solutions for every business need
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter Tabs */}
      <section className="border-b border-[#E5E7EB] bg-white sticky top-16 z-30">
        <Container>
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={buttonClass(activeCategory === 'all')}
            >
              All
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={buttonClass(activeCategory === cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="mb-10">
            <SectionTitle
              title={activeCategoryName}
              subtitle={activeCategoryDesc}
            />
          </div>
          <ProductGrid products={filteredProducts} />
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">No products found in this category.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
