import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'OEM/ODM Services - NovaPOS',
  description:
    'Customize POS terminals with your brand. NovaPOS offers full OEM/ODM services including custom branding, hardware customization, software customization, and packaging design.',
};

const offerings = [
  {
    title: 'Custom Branding',
    description:
      'Add your logo, brand colors, and custom packaging to create POS terminals that reflect your brand identity. From boot screens to retail boxes, every touchpoint is customized.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Hardware Customization',
    description:
      'Modify casing design, display specifications, printer modules, and scanner configurations to meet your exact requirements. Our engineering team handles the entire process.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Software Customization',
    description:
      'Customize the Android operating system, pre-install your applications, configure default settings, and create branded user interfaces for a seamless out-of-box experience.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Packaging Design',
    description:
      'Design custom retail boxes, accessory bundles, and marketing materials. We handle everything from structural design to printing and assembly.',
    icon: (
      <svg className="w-8 h-8 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Inquiry',
    description: 'Share your requirements, target market, and customization needs with our team.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design & Proposal',
    description: 'Our engineers create detailed designs and a comprehensive project proposal for your review.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Sample & Confirmation',
    description: 'We produce prototype samples for your testing and approval before mass production begins.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Mass Production',
    description: 'Full-scale manufacturing in our certified factory with strict quality control at every stage.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Quality Testing',
    description: 'Every unit undergoes comprehensive testing including functionality, durability, and safety checks.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'Secure packaging and global logistics ensure your products arrive safely and on schedule.',
    icon: (
      <svg className="w-6 h-6 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What is the MOQ (Minimum Order Quantity)?',
    answer:
      'For standard products with basic branding customization (logo and packaging), the MOQ is 100 units. For fully customized products requiring hardware or software modifications, the MOQ is 500 units. We can discuss flexible arrangements for pilot projects.',
  },
  {
    question: 'How long is the lead time?',
    answer:
      'For standard products with branding customization, the typical lead time is 15-20 business days from order confirmation. For fully customized products, the lead time is 30-45 business days, which includes design, prototyping, and production phases.',
  },
  {
    question: 'Can I customize the software?',
    answer:
      'Yes, we offer comprehensive Android OS customization services. This includes custom boot animations, pre-installed applications, default settings configuration, branded UI themes, and locked-down kiosk mode. Our software team can also help integrate your existing POS application.',
  },
  {
    question: 'Do you provide samples?',
    answer:
      'Yes, we provide samples for evaluation before mass production. Standard product samples are typically available within 7 business days. Custom samples with modifications may take 10-15 business days depending on the complexity of the changes.',
  },
  {
    question: 'What certifications do your products have?',
    answer:
      'Our products hold a comprehensive range of international certifications including CE (European conformity), FCC (US electromagnetic compatibility), RoHS (hazardous substances restriction), ISO9001 (quality management), PCI PTS (payment security), and EMV Level 1 & 2 (card payment standards). Additional certifications can be obtained for specific market requirements.',
  },
  {
    question: 'What is the warranty period?',
    answer:
      'All NovaPOS products come with a standard 2-year warranty covering manufacturing defects and hardware failures. The warranty can be extended to 3 or 5 years for an additional cost. During the warranty period, we provide free repair or replacement services through our global service network.',
  },
];

export default function OemOdmPage() {
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
              OEM/ODM Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Customize POS terminals with your brand
            </p>
          </div>
        </Container>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="What We Offer"
            subtitle="End-to-end customization services to bring your branded POS solution to life."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-[#F9FAFB] rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#1A56DB]/10 rounded-xl flex items-center justify-center mb-5">
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

      {/* Process Flow Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Process Flow"
            subtitle="A streamlined 6-step process from initial inquiry to final delivery."
          />

          {/* Desktop Horizontal Flow */}
          <div className="mt-12 hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#E5E7EB]" />
              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center text-center">
                    {/* Step Circle */}
                    <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center border border-[#E5E7EB]">
                      {step.icon}
                      <span className="text-xs font-bold text-[#1A56DB] mt-1">{step.number}</span>
                    </div>
                    {/* Content */}
                    <h4
                      className="text-sm font-semibold text-[#111827] mt-4 mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed px-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Flow */}
          <div className="mt-12 md:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center border border-[#E5E7EB]">
                  {step.icon}
                  <span className="text-[10px] font-bold text-[#1A56DB] mt-0.5">{step.number}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4
                    className="text-base font-semibold text-[#111827] mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Factory Capabilities Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionTitle
            title="Factory Capabilities"
            subtitle="State-of-the-art manufacturing facilities with rigorous quality control."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#374151] leading-relaxed">
                Our 5,000 square meter manufacturing facility in Shenzhen is equipped with the latest
                automated production lines and testing equipment. With over 200 skilled workers and
                6 dedicated production lines, we have the capacity to handle orders of any scale while
                maintaining consistent quality standards.
              </p>
              <p className="text-[#374151] leading-relaxed">
                Every product goes through a comprehensive 12-step quality assurance process that includes
                incoming material inspection, in-line quality checks, functional testing, aging tests,
                and final inspection before packaging. Our ISO9001-certified quality management system
                ensures traceability and accountability at every stage of production.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-[#F9FAFB] rounded-xl">
                  <div className="text-2xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    5,000 m²
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Factory Area</div>
                </div>
                <div className="p-4 bg-[#F9FAFB] rounded-xl">
                  <div className="text-2xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    200+
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Workers</div>
                </div>
                <div className="p-4 bg-[#F9FAFB] rounded-xl">
                  <div className="text-2xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    6
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">Production Lines</div>
                </div>
                <div className="p-4 bg-[#F9FAFB] rounded-xl">
                  <div className="text-2xl font-bold text-[#1A56DB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    12-Step
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">QA Process</div>
                </div>
              </div>
            </div>
            {/* Placeholder Factory Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-[#1A56DB]/10 to-[#1444B0]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#1A56DB]/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-xs text-[#6B7280] mt-2">Production Line</p>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-[#1A56DB]/10 to-[#1444B0]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#1A56DB]/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <p className="text-xs text-[#6B7280] mt-2">Quality Testing</p>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-[#1A56DB]/10 to-[#1444B0]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#1A56DB]/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p className="text-xs text-[#6B7280] mt-2">R&D Lab</p>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-[#1A56DB]/10 to-[#1444B0]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#1A56DB]/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="text-xs text-[#6B7280] mt-2">Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our OEM/ODM services."
          />
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left hover:bg-[#F9FAFB] transition-colors">
                  <h4
                    className="text-base font-semibold text-[#111827] pr-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {faq.question}
                  </h4>
                  <svg
                    className="w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#6B7280] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
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
              Start Your Custom Project
            </h2>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Tell us about your requirements and our OEM/ODM team will create a tailored proposal within 48 hours.
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
                Download OEM Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
