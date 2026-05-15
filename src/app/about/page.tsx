import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'About NovaPOS - Your Trusted Partner in POS Technology',
  description:
    'Learn about NovaPOS, a leading POS terminal manufacturer founded in 2005 in Shenzhen. Serving 200+ countries with ISO9001 certified quality.',
};

const milestones = [
  {
    year: '2005',
    title: 'Company Founded',
    description:
      'NovaPOS was established in Shenzhen, China, with a vision to make professional POS technology accessible to businesses worldwide.',
  },
  {
    year: '2010',
    title: 'First Export Milestone',
    description:
      'Expanded beyond the domestic market, shipping our first POS terminals to Southeast Asia and the Middle East.',
  },
  {
    year: '2015',
    title: '100th Country Reached',
    description:
      'NovaPOS products and solutions became available in over 100 countries across six continents.',
  },
  {
    year: '2018',
    title: 'Smart POS Launch',
    description:
      'Introduced the next-generation Smart POS product line with Android-based all-in-one terminals, setting a new industry standard.',
  },
  {
    year: '2021',
    title: '10 Million Devices Shipped',
    description:
      'Surpassed the milestone of 10 million POS devices shipped globally, serving merchants in every major market.',
  },
  {
    year: '2024',
    title: 'PCI PTS Certification',
    description:
      'Achieved PCI PTS 6.x certification across the product lineup, reinforcing our commitment to payment security excellence.',
  },
];

const whyChooseUs = [
  {
    title: 'Global Reach',
    description:
      'With a presence in over 200 countries and regions, NovaPOS delivers reliable POS solutions wherever your business operates.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality First',
    description:
      'Every product undergoes rigorous testing in our ISO9001-certified facilities, ensuring the highest standards of reliability and durability.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Innovation Driven',
    description:
      'We invest heavily in R&D, continuously pushing the boundaries of POS technology with Android platforms, AI capabilities, and IoT integration.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Customer Centric',
    description:
      'From pre-sales consultation to after-sales support, our dedicated team ensures every customer receives personalized service and technical assistance.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const certifications = [
  { name: 'CE', description: 'European Conformity' },
  { name: 'FCC', description: 'Federal Communications Commission' },
  { name: 'RoHS', description: 'Restriction of Hazardous Substances' },
  { name: 'ISO9001', description: 'Quality Management System' },
  { name: 'PCI PTS', description: 'Payment Card Industry PIN Transaction Security' },
  { name: 'EMV', description: 'Europay, Mastercard, and Visa' },
];

export default function AboutPage() {
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
              About NovaPOS
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Your trusted partner in POS technology
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Our Story"
            subtitle="Two decades of innovation in payment technology."
          />
          <div className="mt-12 max-w-3xl mx-auto space-y-6 text-[#374151] leading-relaxed">
            <p>
              Founded in 2005 in Shenzhen, China, NovaPOS began with a simple mission: to make professional-grade
              point-of-sale technology accessible to businesses of all sizes. What started as a small team of
              engineers passionate about embedded systems has grown into a global enterprise with over 20 years of
              experience in designing, manufacturing, and delivering cutting-edge POS terminals. Our journey has
              been driven by an unwavering commitment to quality, innovation, and customer satisfaction.
            </p>
            <p>
              Today, NovaPOS serves merchants and enterprises in over 200 countries and regions worldwide. Our
              comprehensive product portfolio spans smart POS terminals, mobile POS devices, desktop systems,
              payment terminals, self-service kiosks, and a full range of peripherals. As an ISO9001-certified
              manufacturer with PCI PTS security certification, we uphold the highest standards in product quality
              and data security, earning the trust of banks, payment processors, and retail chains across every
              continent.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Milestones Timeline */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Key Milestones"
            subtitle="A timeline of our growth and achievements over the years."
          />
          <div className="mt-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E5E7EB] hidden md:block" />
            <div className="absolute left-4 transform -translate-x-1/2 h-full w-0.5 bg-[#E5E7EB] md:hidden" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Desktop Layout */}
                    <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content Side */}
                      <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                        <span className="inline-block text-sm font-bold text-[#1A56DB] bg-[#1A56DB]/10 px-3 py-1 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3
                          className="text-xl font-semibold text-[#111827] mb-2"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {milestone.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                      {/* Dot */}
                      <div className="relative z-10 w-4 h-4 bg-[#1A56DB] rounded-full border-4 border-white shadow shrink-0" />
                      {/* Empty Side */}
                      <div className="w-1/2" />
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start gap-6">
                      <div className="relative z-10 w-4 h-4 bg-[#1A56DB] rounded-full border-4 border-white shadow shrink-0 mt-1" />
                      <div className="flex-1">
                        <span className="inline-block text-sm font-bold text-[#1A56DB] bg-[#1A56DB]/10 px-3 py-1 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3
                          className="text-lg font-semibold text-[#111827] mb-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {milestone.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Why Choose Us"
            subtitle="The values that drive everything we do at NovaPOS."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#F9FAFB] rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#1A56DB]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-[#111827] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Certifications"
            subtitle="Our products meet the highest international standards for quality, safety, and security."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A56DB] to-[#1444B0] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xs">{cert.name}</span>
                </div>
                <h4 className="text-sm font-semibold text-[#111827] text-center mb-1">{cert.name}</h4>
                <p className="text-xs text-[#6B7280] text-center">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Global Presence"
            subtitle="Serving businesses across the world with local support and global expertise."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#374151] leading-relaxed">
                With a distribution network spanning over 200 countries and regions, NovaPOS has established
                itself as a truly global POS solutions provider. Our products are used by merchants ranging
                from small independent retailers to multinational chains, across diverse industries including
                retail, hospitality, logistics, healthcare, and more.
              </p>
              <p className="text-[#374151] leading-relaxed">
                We maintain regional offices and service centers in key markets to provide local language
                support, rapid technical assistance, and tailored solutions that meet the unique requirements
                of each region. Our global logistics partnerships ensure fast, reliable delivery to any
                location worldwide.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    200+
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    10M+
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Devices Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    20+
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            {/* Placeholder World Map */}
            <div className="h-80 lg:h-96 bg-gradient-to-br from-[#1A56DB]/5 to-[#1444B0]/10 rounded-2xl border border-[#E5E7EB] flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-[#1A56DB]/20 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[#6B7280] text-sm mt-4">Global Distribution Map</p>
              </div>
            </div>
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
              Partner With NovaPOS
            </h2>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses worldwide that trust NovaPOS for their point-of-sale needs. Let us help you grow.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center px-8 py-3.5 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
