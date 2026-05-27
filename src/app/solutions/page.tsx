import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { solutions } from '@/data/solutions';

export const metadata: Metadata = {
  title: 'Solutions - NovaPOS',
  description:
    'Tailored POS solutions for every industry. Explore how NovaPOS serves retail, restaurants, hospitality, logistics, and healthcare.',
};

const industryGradients: Record<string, string> = {
  retail: 'from-blue-400 to-blue-600',
  restaurant: 'from-orange-400 to-red-500',
  hospitality: 'from-purple-400 to-indigo-600',
  logistics: 'from-emerald-400 to-teal-600',
  healthcare: 'from-cyan-400 to-blue-500',
};

const industryIcons: Record<string, React.ReactNode> = {
  retail: (
    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  restaurant: (
    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  hospitality: (
    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  logistics: (
    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  healthcare: (
    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function SolutionsPage() {
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
              Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Tailored POS solutions for every industry
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Industry Solutions"
            subtitle="Discover how NovaPOS transforms businesses across diverse industries with purpose-built POS technology."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                {/* Gradient Placeholder Image */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${
                    industryGradients[solution.id] || 'from-gray-400 to-gray-600'
                  } flex items-center justify-center`}
                >
                  {industryIcons[solution.id] || null}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {solution.industry}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#1A56DB] transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">
                    {solution.description}
                  </p>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#1A56DB] hover:text-[#1444B0] transition-colors"
                  >
                    Learn More
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
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24">
        <div className="w-full bg-gradient-to-r from-[#1A56DB] to-[#1E40AF]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Not Sure Which Solution Fits?
            </h2>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Our experts will help you find the perfect POS solution tailored to your industry and business needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Our Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
