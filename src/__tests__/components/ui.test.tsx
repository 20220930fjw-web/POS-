import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

describe('Badge', () => {
  it('renders text content', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders as a button element', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me').closest('button')).toBeInTheDocument();
  });
});

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Container className="custom">Content</Container>);
    expect(container.firstChild).toHaveClass('custom');
  });
});

describe('SectionTitle', () => {
  it('renders title', () => {
    render(<SectionTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionTitle title="Test" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
});
