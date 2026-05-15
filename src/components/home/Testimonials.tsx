"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { name: "Walmart", width: "w-28" },
  { name: "McDonald's", width: "w-32" },
  { name: "Starbucks", width: "w-28" },
  { name: "Marriott", width: "w-28" },
  { name: "DHL", width: "w-20" },
  { name: "Shell", width: "w-24" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Trusted by Leading Brands Worldwide
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg">
            Partnering with industry leaders across the globe
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className="h-16 bg-[#F5F5F5] rounded-lg flex items-center justify-center border border-[#E5E7EB] filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:shadow-md"
              >
                <span className="text-[#9CA3AF] font-bold text-lg tracking-wide group-hover:text-[#374151] transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
