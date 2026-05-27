"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { productSeriesData, type ProductSeriesItem } from '@/data/home-data';

function CategorySection({
  category,
  index,
}: {
  category: ProductSeriesItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="w-full py-24">
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12 md:gap-16"
      >
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[60%] aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
          style={{ background: category.gradient }}
        >
          <div className="flex flex-col items-center gap-4">
            {category.iconSvg}
            <span className="text-white/40 text-sm font-medium tracking-wider uppercase">
              {category.name}
            </span>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[40%]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
            {category.name}
          </h2>
          <p className="mt-4 text-[#374151] text-lg leading-relaxed">
            {category.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.features.map((feature) => (
              <span
                key={feature}
                className="inline-block px-3 py-1.5 bg-[#F5F5F5] text-[#374151] text-sm font-medium rounded-full border border-[#E5E7EB]"
              >
                {feature}
              </span>
            ))}
          </div>
          <a
            href={category.link}
            className="inline-flex items-center mt-8 text-[#1A56DB] font-semibold text-lg hover:text-[#1545b0] transition-colors group"
          >
            Learn More
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
    </div>
  );
}

export default function ProductSeriesShowcase() {
  return (
    <section className="w-full">
      {productSeriesData.map((category, index) => (
        <CategorySection
          key={category.name}
          category={category}
          index={index}
        />
      ))}
    </section>
  );
}
