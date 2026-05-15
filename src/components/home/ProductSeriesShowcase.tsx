"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProductCategory {
  name: string;
  description: string;
  gradient: string;
  iconSvg: React.ReactNode;
  features: string[];
  link: string;
}

const categories: ProductCategory[] = [
  {
    name: "Smart POS",
    description:
      "All-in-one smart POS terminals with Android OS, touchscreen display, and built-in printer. Perfect for retail and hospitality businesses that need a powerful, versatile solution.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #1A56DB 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Android OS", "Touchscreen", "Built-in Printer", "NFC Payment"],
    link: "/products/smart-pos",
  },
  {
    name: "Mobile POS",
    description:
      "Compact and portable mobile POS devices designed for on-the-go transactions. Ideal for delivery services, pop-up stores, and field sales teams.",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Portable", "Long Battery", "4G/5G", "Lightweight"],
    link: "/products/mobile-pos",
  },
  {
    name: "Desktop POS",
    description:
      "Robust desktop POS systems with dual-screen displays for efficient checkout operations. Built for high-volume retail environments with advanced peripheral support.",
    gradient: "linear-gradient(135deg, #172554 0%, #1e40af 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Dual Screen", "High Performance", "Expandable", "Multi-Peripheral"],
    link: "/products/desktop-pos",
  },
  {
    name: "Payment Terminal",
    description:
      "Dedicated payment terminals supporting EMV chip, contactless NFC, and magnetic stripe. PCI-DSS compliant with end-to-end encryption for secure transactions.",
    gradient: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    features: ["EMV Chip", "NFC Contactless", "PCI-DSS", "Encryption"],
    link: "/products/payment-terminal",
  },
  {
    name: "Self-Service Kiosk",
    description:
      "Self-service kiosk solutions for restaurants, retail, and more. Reduce wait times and improve customer experience with intuitive touchscreen interfaces.",
    gradient: "linear-gradient(135deg, #0c1929 0%, #1e3a5f 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    features: ["Touchscreen", "Self-Order", "QR Payment", "Customizable"],
    link: "/products/self-service-kiosk",
  },
  {
    name: "POS Peripherals",
    description:
      "Complete range of POS peripherals including barcode scanners, receipt printers, cash drawers, and customer displays. Compatible with all major POS systems.",
    gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    iconSvg: (
      <svg className="w-20 h-20 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: ["Barcode Scanner", "Receipt Printer", "Cash Drawer", "Customer Display"],
    link: "/products/peripherals",
  },
];

function CategorySection({
  category,
  index,
}: {
  category: ProductCategory;
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
      {categories.map((category, index) => (
        <CategorySection
          key={category.name}
          category={category}
          index={index}
        />
      ))}
    </section>
  );
}
