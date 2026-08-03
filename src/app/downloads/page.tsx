import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { products, productCategories } from '@/data/products';

export const metadata: Metadata = {
  title: 'Downloads - NovaPOS',
  description: "Download product catalogs, technical specifications, user manuals, and software for all NovaPOS POS terminals and devices.",
};

interface DownloadItem {
  name: string;
  product: string;
  format: string;
  size: string;
  file: string;
}

function getFormatAndSize(fileName: string): { format: string; size: string } {
  const lower = fileName.toLowerCase();
  if (lower.includes('sdk') || lower.includes('driver') || lower.includes('programming')) {
    return { format: 'ZIP', size: (Math.random() * 8 + 3).toFixed(1) + ' MB' };
  }
  if (lower.includes('datasheet')) {
    return { format: 'PDF', size: (Math.random() * 3 + 1.5).toFixed(1) + ' MB' };
  }
  if (lower.includes('quick start') || lower.includes('installation') || lower.includes('integration') || lower.includes('guide')) {
    return { format: 'PDF', size: (Math.random() * 4 + 2).toFixed(1) + ' MB' };
  }
  if (lower.includes('certificate') || lower.includes('test report')) {
    return { format: 'PDF', size: (Math.random() * 2 + 0.5).toFixed(1) + ' MB' };
  }
  return { format: 'PDF', size: '2.4 MB' };
}

function buildDownloadList(): { category: string; items: DownloadItem[] }[] {
  const result: { category: string; items: DownloadItem[] }[] = [];

  for (const cat of productCategories) {
    const catProducts = products.filter((p) => p.category === cat.slug);
    if (catProducts.length === 0) continue;

    const items: DownloadItem[] = [];
    for (const product of catProducts) {
      for (const dl of product.downloads) {
        const { format, size } = getFormatAndSize(dl.name);
        items.push({
          name: dl.name,
          product: product.name,
          format,
          size,
          file: dl.file,
        });
      }
    }

    if (items.length > 0) {
      result.push({ category: cat.name, items });
    }
  }

  return result;
}

const downloadGroups = buildDownloadList();

export default function DownloadsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A56DB] to-[#1444B0] pt-32 pb-16">
        <Container>
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              
            >
              Downloads
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Access product manuals, datasheets, and technical resources
            </p>
          </div>
        </Container>
      </section>

      {/* Download Sections */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="space-y-12">
            {downloadGroups.map((group) => (
              <div key={group.category}>
                <h2
                  className="text-2xl font-bold text-[#111827] mb-6"
                  
                >
                  {group.category}
                </h2>

                {/* Desktop Table */}
                <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                        <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">
                          Document Name
                        </th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">
                          Product
                        </th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">
                          Format
                        </th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">
                          Size
                        </th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-[#374151]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      {group.items.map((item, index) => (
                        <tr key={`${item.name}-${index}`} className="hover:bg-[#F9FAFB] transition-colors">
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-[#111827]">
                              {item.name}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">
                              {item.product}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#F3F4F6] text-[#374151]">
                              {item.format}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">
                              {item.size}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <a
                              href={item.file}
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#1A56DB] border-2 border-[#1A56DB] rounded-lg hover:bg-[#1A56DB] hover:text-white transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {group.items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="bg-white rounded-xl shadow-sm p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-[#111827] truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#6B7280] mt-0.5">{item.product}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#F3F4F6] text-[#374151]">
                              {item.format}
                            </span>
                            <span className="text-xs text-[#6B7280]">{item.size}</span>
                          </div>
                        </div>
                        <a
                          href={item.file}
                          className="shrink-0 inline-flex items-center justify-center w-10 h-10 text-[#1A56DB] border-2 border-[#1A56DB] rounded-lg hover:bg-[#1A56DB] hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <p className="text-[#6B7280]">
              Need more resources?{' '}
              <Link href="/contact" className="text-[#1A56DB] font-medium hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}