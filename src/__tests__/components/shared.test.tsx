import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import ArrowLink from '@/components/shared/ArrowLink';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('PageHero', () => {
  it('renders title', () => {
    render(<PageHero title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<PageHero title="Test" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders breadcrumbs when provided', () => {
    render(<PageHero title="Test" breadcrumbs={[{ label: 'Products', href: '/products' }]} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
  });

  it('renders breadcrumb without link for last item', () => {
    render(<PageHero title="Test" breadcrumbs={[{ label: 'Detail' }]} />);
    expect(screen.getByText('Detail').closest('a')).toBeNull();
  });
});

describe('CTABanner', () => {
  it('renders title', () => {
    render(<CTABanner title="CTA Title" primaryButton={{ label: 'Click', href: '/test' }} />);
    expect(screen.getByText('CTA Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<CTABanner title="CTA" description="CTA Desc" primaryButton={{ label: 'Click', href: '/test' }} />);
    expect(screen.getByText('CTA Desc')).toBeInTheDocument();
  });

  it('renders primary button with correct link', () => {
    render(<CTABanner title="CTA" primaryButton={{ label: 'Primary', href: '/primary' }} />);
    const link = screen.getByText('Primary');
    expect(link.closest('a')).toHaveAttribute('href', '/primary');
  });

  it('renders secondary button when provided', () => {
    render(<CTABanner title="CTA" primaryButton={{ label: 'P', href: '/p' }} secondaryButton={{ label: 'Secondary', href: '/sec' }} />);
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('does not render secondary button when not provided', () => {
    render(<CTABanner title="CTA" primaryButton={{ label: 'P', href: '/p' }} />);
    expect(screen.queryByText('Secondary')).not.toBeInTheDocument();
  });
});

describe('ArrowLink', () => {
  it('renders label text', () => {
    render(<ArrowLink href="/test" label="Learn More" />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<ArrowLink href="/test" label="Learn More" />);
    expect(screen.getByText('Learn More').closest('a')).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<ArrowLink href="/test" label="Test" className="custom-class" />);
    const link = screen.getByText('Test').closest('a');
    expect(link?.className).toContain('custom-class');
  });
});
