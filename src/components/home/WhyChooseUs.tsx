"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { advantages } from '@/data/home-data';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Why Choose NovaPOS
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            Trusted by merchants in over 200 countries, we deliver reliable,
            innovative POS solutions backed by world-class service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#1A56DB]/10 rounded-lg flex items-center justify-center text-[#1A56DB] mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                {advantage.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
