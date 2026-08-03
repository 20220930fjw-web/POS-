import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import { newsArticles } from '@/data/news';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) {
    return { title: 'Article Not Found - NovaPOS' };
  }
  return {
    title: `${article.title} - NovaPOS`,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-red-600',
];

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles.filter((a) => a.slug !== slug);
  const articleIndex = newsArticles.findIndex((a) => a.slug === slug);
  const paragraphs = article.content.split('\n\n');

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <Container>
          <nav className="py-4 flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="hover:text-[#1A56DB] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/news" className="hover:text-[#1A56DB] transition-colors">
              News
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#111827] font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-[#F9FAFB]">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-[#6B7280]">
                  {formatDate(article.date)}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EFF6FF] text-[#1A56DB]">
                  {article.category}
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight"
                
              >
                {article.title}
              </h1>
            </header>

            {/* Hero Image Placeholder */}
            <div
              className={`h-64 md:h-80 rounded-xl bg-gradient-to-br ${gradients[articleIndex % gradients.length]} mb-10 flex items-center justify-center`}
            >
              <svg
                className="w-20 h-20 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
            </div>

            {/* Article Body */}
            <article className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#1A56DB] to-[#1444B0] rounded-xl text-center">
              <h3
                className="text-xl font-semibold text-white mb-2"
                
              >
                Have questions?
              </h3>
              <p className="text-blue-100 mb-6">
                Contact our team to learn more about our products and solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#1A56DB] font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Our Team
                <svg
                  className="w-4 h-4 ml-2"
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
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h2
                className="text-2xl font-bold text-[#111827] mb-8"
                
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related, index) => (
                  <Link
                    key={related.id}
                    href={`/news/${related.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row"
                  >
                    {/* Thumbnail */}
                    <div
                      className={`h-32 sm:h-auto sm:w-40 shrink-0 bg-gradient-to-br ${gradients[(articleIndex + index + 1) % gradients.length]} flex items-center justify-center`}
                    >
                      <svg
                        className="w-10 h-10 text-white/40"
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

                    {/* Content */}
                    <div className="p-4 flex flex-col justify-center">
                      <span className="text-xs text-[#6B7280] mb-1">
                        {formatDate(related.date)}
                      </span>
                      <h3 className="text-sm font-semibold text-[#111827] group-hover:text-[#1A56DB] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}