import Link from 'next/link';

interface ArrowLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function ArrowLink({ href, label, className = '' }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all ${className}`}
    >
      {label}
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}
