export type ProductCategory = 'smart-pos' | 'mobile-pos' | 'desktop-pos' | 'payment-terminal' | 'self-service-kiosk' | 'pos-peripherals';

export interface ProductSpecs {
  processor: string;
  memory: string;
  storage: string;
  os: string;
  display: string;
  battery?: string;
  printer?: string;
  scanner?: string;
  connectivity: string[];
  payment: string[];
  certifications: string[];
  dimensions: string;
  weight: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  image: string;
}

export interface ProductDownload {
  name: string;
  file: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  subtitle: string;
  description: string;
  images: {
    hero: string;
    gallery: string[];
    scenarios: string[];
  };
  highlights: string[];
  specs: ProductSpecs;
  features: ProductFeature[];
  relatedProducts: string[];
  downloads: ProductDownload[];
}

export interface ProductCategoryMeta {
  slug: ProductCategory;
  name: string;
  description: string;
  icon: string;
}

export interface Solution {
  id: string;
  slug: string;
  industry: string;
  title: string;
  description: string;
  image: string;
  painPoints: string[];
  recommendedProducts: string[];
  advantages: string[];
  caseStudy?: {
    title: string;
    description: string;
    image: string;
  };
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
  socialLinks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}
