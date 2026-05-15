"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Industry {
  name: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    name: "Retail",
    description: "Streamline checkout, manage inventory, and boost customer loyalty with our retail POS solutions.",
    gradient: "linear-gradient(135deg, #1A56DB 0%, #3B82F6 100%)",
    icon: (
      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Restaurant",
    description: "From quick-service to fine dining, manage orders, kitchen display, and table-side payments.",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    icon: (
      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    description: "Integrated solutions for hotels, resorts, and event venues with seamless payment processing.",
    gradient: "linear-gradient(135deg, #172554 0%, #1e40af 100%)",
    icon: (
      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Logistics",
    description: "Mobile POS for delivery drivers, warehouse management, and field operations with real-time tracking.",
    gradient: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
    icon: (
      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    description: "Secure, HIPAA-compliant POS systems for pharmacies, clinics, and healthcare facilities.",
    gradient: "linear-gradient(135deg, #0c1929 0%, #1e3a5f 100%)",
    icon: (
      <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Scenarios() {
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
            Solutions for Every Industry
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            Tailored POS solutions designed to meet the unique demands of your
            industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <div
                className="relative h-64 flex flex-col items-center justify-center"
                style={{ background: industry.gradient }}
              >
                <div className="flex-1 flex items-center justify-center">
                  {industry.icon}
                </div>
                <div className="w-full p-6 bg-gradient-to-t from-black/40 to-transparent">
                  <h3 className="text-xl font-bold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center text-[#1A56DB] font-semibold text-lg hover:text-[#1545b0] transition-colors group"
          >
            View All Solutions
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
