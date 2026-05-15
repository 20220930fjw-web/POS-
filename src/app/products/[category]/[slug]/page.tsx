import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductGrid from '@/components/products/ProductGrid';
import Badge from '@/components/ui/Badge';
import { products, getProductBySlug, getCategoryBySlug } from '@/data/products';

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `${product.name} - NovaPOS` : 'Product - NovaPOS',
    description: product?.description || 'Product details',
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  const cat = getCategoryBySlug(category);

  if (!product) {
    return (
      <section className="pt-32 pb-16">
        <Container>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-[#111827] mb-4">Product Not Found</h1>
            <p className="text-[#6B7280] mb-8">The product you are looking for does not exist.</p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-[#1A56DB] text-white rounded-lg hover:bg-[#1444B0] transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Products
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-gradient-to-br from-[#1A56DB] to-[#1444B0] pt-32 pb-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            {cat && (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href={`/products/${cat.slug}`} className="hover:text-white transition-colors">{cat.name}</Link>
              </>
            )}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative w-full aspect-square bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                {product.images.hero ? (
                  <img
                    src={product.images.hero}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center shrink-0 cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {product.name}
              </h1>
              <p className="text-xl text-blue-100 mb-6">{product.subtitle}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <p className="text-blue-100 leading-relaxed mb-8">{product.description}</p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get Datasheet
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Specs */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            title="Key Specifications"
            subtitle="Quick overview of the main specifications"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
            {[
              { label: 'Processor', value: product.specs.processor },
              { label: 'Memory', value: product.specs.memory },
              { label: 'Storage', value: product.specs.storage },
              { label: 'OS', value: product.specs.os },
              { label: 'Display', value: product.specs.display },
              { label: 'Connectivity', value: product.specs.connectivity.join(', ') },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-[#F9FAFB] rounded-xl">
                <div className="text-xs font-medium text-[#6B7280] uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-[#111827]">{item.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full Spec Table */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Full Specifications"
            subtitle="Complete technical specifications"
          />
          <div className="mt-10 bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries({
                  Processor: product.specs.processor,
                  Memory: product.specs.memory,
                  Storage: product.specs.storage,
                  'Operating System': product.specs.os,
                  Display: product.specs.display,
                  ...(product.specs.battery ? { Battery: product.specs.battery } : {}),
                  ...(product.specs.printer ? { Printer: product.specs.printer } : {}),
                  ...(product.specs.scanner ? { Scanner: product.specs.scanner } : {}),
                  Connectivity: product.specs.connectivity.join(', '),
                  'Payment Methods': product.specs.payment.join(', '),
                  Certifications: product.specs.certifications.join(', '),
                  Dimensions: product.specs.dimensions,
                  Weight: product.specs.weight,
                }).map(([label, value], index) => (
                  <tr
                    key={label}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#374151] w-1/3 border-r border-[#E5E7EB]">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#111827]">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            title="Features"
            subtitle="What makes this product stand out"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 p-4 bg-[#F9FAFB] rounded-xl"
              >
                <svg
                  className="w-5 h-5 text-[#1A56DB] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151]">{feature.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1A56DB] to-[#1444B0]">
        <Container>
          <div className="text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Interested in {product.name}?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Contact our sales team for pricing, customization options, and bulk order inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/8613800138000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F9FAFB]">
          <Container>
            <SectionTitle
              title="Related Products"
              subtitle="You might also be interested in"
            />
            <div className="mt-10">
              <ProductGrid products={relatedProducts} columns={3} />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}