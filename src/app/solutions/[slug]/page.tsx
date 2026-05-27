import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import { solutions } from '@/data/solutions';
import { products } from '@/data/products';

interface SolutionDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) {
    return { title: 'Solution Not Found - NovaPOS' };
  }
  return {
    title: `${solution.title} - NovaPOS`,
    description: solution.description,
  };
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const recommendedProducts = products.filter((p) =>
    solution.recommendedProducts.includes(p.id)
  );

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <Container>
          <nav className="py-4 flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="hover:text-[#1A56DB] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/solutions" className="hover:text-[#1A56DB] transition-colors">
              Solutions
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#111827] font-medium">{solution.industry}</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A56DB] to-[#1444B0] pt-16 pb-20">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
              {solution.industry}
            </span>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {solution.title}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              {solution.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Industry Pain Points"
            subtitle="Common challenges businesses face in this industry that NovaPOS helps solve."
          />
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {solution.painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-[#FEF2F2] rounded-xl border border-[#FECACA]"
              >
                <div className="shrink-0 w-10 h-10 bg-[#EF4444]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#EF4444]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <p className="text-[#374151] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recommended Products Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Recommended Products"
            subtitle="Curated hardware solutions specifically selected for this industry."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Key Advantages"
            subtitle="How NovaPOS delivers measurable value for your business."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0]"
              >
                <div className="shrink-0 w-8 h-8 bg-[#22C55E]/10 rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="w-5 h-5 text-[#22C55E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#374151] leading-relaxed text-sm">{advantage}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Section */}
      {solution.caseStudy && (
        <section className="py-16 md:py-20 bg-[#F9FAFB]">
          <Container>
            <SectionTitle
              title="Case Study"
              subtitle="See how real businesses have benefited from NovaPOS solutions."
            />
            <div className="mt-12 bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Placeholder Image */}
                <div className="h-64 lg:h-auto bg-gradient-to-br from-[#1A56DB]/10 to-[#1444B0]/20 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-[#1A56DB]/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {/* Case Study Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3
                    className="text-2xl font-bold text-[#111827] mb-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {solution.caseStudy.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {solution.caseStudy.description}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24">
        <div className="w-full bg-gradient-to-r from-[#1A56DB] to-[#1E40AF]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Get in touch with our solution experts to discuss your specific needs and find the right POS setup for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
