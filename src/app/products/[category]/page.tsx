import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductGrid from '@/components/products/ProductGrid';
import { products, productCategories, getProductsByCategory, getCategoryBySlug } from '@/data/products';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  return {
    title: cat ? `${cat.name} - NovaPOS` : 'Products - NovaPOS',
    description: cat?.description || 'Explore NovaPOS product categories',
  };
}

export function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  const categoryProducts = getProductsByCategory(category);

  if (!cat) {
    notFound();
  }

  const productCountText = categoryProducts.length + ' Product' + (categoryProducts.length !== 1 ? 's' : '') + ' Available';
  const browseText = 'Browse our ' + cat.name.toLowerCase() + ' collection';

  return (
    <>
      <section className="bg-gradient-to-br from-[#1A56DB] to-[#1444B0] pt-32 pb-16">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{cat.name}</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            
          >
            {cat.name}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            {cat.description}
          </p>
        </Container>
      </section>

      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="mb-10">
            <SectionTitle
              title={productCountText}
              subtitle={browseText}
            />
          </div>
          <ProductGrid products={categoryProducts} />
          {categoryProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg mb-6">No products available in this category yet.</p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-[#1A56DB] text-white rounded-lg hover:bg-[#1444B0] transition-colors"
              >
                View All Products
              </Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}