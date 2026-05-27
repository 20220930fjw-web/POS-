import { describe, it, expect } from 'vitest';
import { getProductBySlug, getProductsByCategory, getCategoryBySlug } from '@/data/products';

describe('getProductBySlug', () => {
  it('returns a product when slug exists', () => {
    const product = getProductBySlug('s1-pro');
    expect(product).toBeDefined();
    expect(product?.name).toBeTruthy();
    expect(product?.slug).toBe('s1-pro');
  });

  it('returns undefined for non-existent slug', () => {
    const product = getProductBySlug('non-existent-product');
    expect(product).toBeUndefined();
  });

  it('returns correct category for the product', () => {
    const product = getProductBySlug('s1-pro');
    expect(product?.category).toBe('smart-pos');
  });
});

describe('getProductsByCategory', () => {
  it('returns products for a valid category', () => {
    const products = getProductsByCategory('smart-pos');
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
      expect(p.category).toBe('smart-pos');
    });
  });

  it('returns empty array for non-existent category', () => {
    const products = getProductsByCategory('non-existent');
    expect(products).toEqual([]);
  });

  it('returns correct number of products for each category', () => {
    expect(getProductsByCategory('smart-pos').length).toBe(3);
    expect(getProductsByCategory('mobile-pos').length).toBe(3);
    expect(getProductsByCategory('desktop-pos').length).toBe(3);
    expect(getProductsByCategory('payment-terminal').length).toBe(2);
    expect(getProductsByCategory('self-service-kiosk').length).toBe(2);
    expect(getProductsByCategory('pos-peripherals').length).toBe(2);
  });
});

describe('getCategoryBySlug', () => {
  it('returns category metadata for valid slug', () => {
    const category = getCategoryBySlug('smart-pos');
    expect(category).toBeDefined();
    expect(category?.slug).toBe('smart-pos');
    expect(category?.name).toBeTruthy();
  });

  it('returns undefined for non-existent slug', () => {
    const category = getCategoryBySlug('non-existent');
    expect(category).toBeUndefined();
  });
});
