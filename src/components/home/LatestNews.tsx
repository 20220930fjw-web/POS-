"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface NewsArticle {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
}

const articles: NewsArticle[] = [
  {
    date: "May 10, 2026",
    category: "Product Launch",
    title: "Introducing NovaPOS X1: Next-Gen Smart Terminal",
    excerpt:
      "Our latest smart POS terminal features a 6.5\" AMOLED display, quad-core processor, and enhanced NFC capabilities for faster transactions.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #1A56DB 100%)",
  },
  {
    date: "May 5, 2026",
    category: "Industry Insights",
    title: "The Future of Contactless Payments in 2026",
    excerpt:
      "Exploring the latest trends in contactless payment technology and how businesses can prepare for the next wave of digital transactions.",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
  },
  {
    date: "April 28, 2026",
    category: "Company News",
    title: "NovaPOS Expands to Southeast Asian Markets",
    excerpt:
      "Strategic partnerships with regional distributors to bring our complete POS ecosystem to Malaysia, Thailand, and Vietnam.",
    gradient: "linear-gradient(135deg, #172554 0%, #1e40af 100%)",
  },
];

export default function LatestNews() {
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
            Latest News & Insights
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            Stay updated with the latest product launches, industry trends, and
            company news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              {/* Placeholder image */}
              <div
                className="h-48 w-full"
                style={{ background: article.gradient }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-[#6B7280]">{article.date}</span>
                  <span className="px-2 py-0.5 bg-[#1A56DB]/10 text-[#1A56DB] text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#111827] group-hover:text-[#1A56DB] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
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
            View All News
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
