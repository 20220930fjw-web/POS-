import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { newsArticles } from '@/data/news';

export const metadata: Metadata = {
  title: 'News & Insights - NovaPOS',
  description: "Stay updated with the latest POS industry news, product launches, and technology insights from NovaPOS.",
};

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-red-600',
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
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
              News &amp; Insights
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Stay updated with the latest in POS technology
            </p>
          </div>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Gradient Placeholder Image */}
                <div
                  className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}
                >
                  <svg
                    className="w-16 h-16 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Date & Category */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-[#6B7280]">
                      {formatDate(article.date)}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EFF6FF] text-[#1A56DB]">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#111827] mb-2 group-hover:text-[#1A56DB] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="inline-flex items-center text-sm font-medium text-[#1A56DB] group-hover:gap-2 transition-all">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
