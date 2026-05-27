import Link from 'next/link';

interface LogoProps {
  color?: string;
  className?: string;
}

export default function Logo({ color = '#1A56DB', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill={color} />
        <path d="M8 10h4v12H8V10zm6 0h4c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4V10zm4 9c1.7 0 3-1.3 3-3s-1.3-3-3-3h-1v6h1z" fill="white" />
      </svg>
      <span className="text-xl font-bold" style={{ color }}>NovaPOS</span>
    </Link>
  );
}
