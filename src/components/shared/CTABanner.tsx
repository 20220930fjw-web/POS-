import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export default function CTABanner({ title, description, primaryButton, secondaryButton }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-blue-700 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {primaryButton.label}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
