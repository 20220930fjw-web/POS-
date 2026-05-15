interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'outline';
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: 'bg-[#F5F5F5] text-[#374151]',
  blue: 'bg-[#EFF6FF] text-[#1A56DB]',
  outline: 'border border-[#E5E7EB] text-[#6B7280]',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
