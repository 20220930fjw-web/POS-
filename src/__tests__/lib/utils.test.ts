import { describe, it, expect } from 'vitest';
import { cn, formatDate, truncateText } from '@/lib/utils';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b');
  });

  it('handles empty input', () => {
    expect(cn()).toBe('');
  });

  it('handles boolean conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active');
  });
});

describe('formatDate', () => {
  it('formats a date string correctly', () => {
    const result = formatDate('2026-05-15');
    expect(result).toContain('2026');
    expect(result).toContain('May');
  });

  it('handles ISO date strings', () => {
    const result = formatDate('2026-01-10T00:00:00Z');
    expect(result).toContain('2026');
  });
});

describe('truncateText', () => {
  it('returns original text if shorter than maxLength', () => {
    expect(truncateText('Hello', 10)).toBe('Hello');
  });

  it('truncates text longer than maxLength', () => {
    const result = truncateText('Hello World', 5);
    expect(result).toBe('Hello...');
    expect(result.length).toBeLessThanOrEqual(8);
  });

  it('handles exact length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(truncateText('', 10)).toBe('');
  });
});
