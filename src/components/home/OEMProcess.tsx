"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Inquiry",
    description: "Share your requirements and specifications with our team",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Design",
    description: "Our engineers create custom design and technical drawings",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Quotation",
    description: "Receive a detailed quote with transparent pricing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Production",
    description: "Manufacturing with strict quality control standards",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Testing",
    description: "Comprehensive testing and quality assurance inspection",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: 6,
    title: "Shipping",
    description: "Safe packaging and worldwide logistics delivery",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function OEMProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            OEM/ODM Services
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            From concept to delivery, we handle it all
          </p>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-8 left-[calc(8.33%+16px)] right-[calc(8.33%+16px)] h-0 border-t-2 border-dashed border-[#1A56DB]/30" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center w-[calc(16.66%-8px)]"
              >
                {/* Numbered circle */}
                <div className="relative z-10 w-16 h-16 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#1A56DB]/20">
                  {step.number}
                </div>
                {/* Icon */}
                <div className="mt-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#1A56DB] shadow-sm border border-[#E5E7EB]">
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="mt-3 text-base font-semibold text-[#111827]">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="mt-1 text-sm text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden">
          <div className="relative pl-12">
            {/* Vertical connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#1A56DB]/30" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-4 pb-8 last:pb-0"
              >
                {/* Numbered circle */}
                <div className="absolute -left-12 top-0 w-10 h-10 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#1A56DB]/20 z-10">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1A56DB] shadow-sm border border-[#E5E7EB] shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
