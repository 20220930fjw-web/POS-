import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-dark-text mb-4">Page Not Found</h2>
        <p className="text-body-text mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved. Please check the URL or navigate back to our homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-brand-blue text-brand-blue rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
