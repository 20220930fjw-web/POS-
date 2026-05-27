"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { oemProcessSteps } from '@/data/home-data';

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

            {oemProcessSteps.map((step, index) => (
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

            {oemProcessSteps.map((step, index) => (
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
