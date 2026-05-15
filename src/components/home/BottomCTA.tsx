"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BottomCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full bg-gradient-to-r from-[#1A56DB] to-[#1E40AF] rounded-none"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Contact our team today for a free consultation and customized POS
            solution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center px-8 py-3.5 bg-white text-[#1A56DB] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Us Now
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all"
            >
              Download Catalog
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
