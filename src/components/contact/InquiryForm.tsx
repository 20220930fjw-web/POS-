'use client';

import { useState, FormEvent } from 'react';

import { navProductCategories } from '@/data/navigation';

const quantityRanges = [
  '1 - 50 units',
  '51 - 200 units',
  '201 - 500 units',
  '500+ units',
];

interface FormData {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  country?: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-[#1A56DB]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className="text-xl font-semibold text-[#111827] mb-2"
          
        >
          Inquiry Submitted Successfully!
        </h3>
        <p className="text-[#6B7280] mb-6">
          Thank you for your interest. Our sales team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              company: '',
              email: '',
              country: '',
              product: '',
              quantity: '',
              message: '',
            });
          }}
          className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-[#1A56DB] border-2 border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white rounded-lg transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const inputClasses = (fieldName: keyof FormErrors) =>
    `w-full px-4 py-2.5 text-sm border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-transparent ${
      errors[fieldName]
        ? 'border-red-500 bg-red-50'
        : 'border-[#E5E7EB] bg-white hover:border-[#6B7280]'
    }`;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
      <h3
        className="text-xl font-semibold text-[#111827] mb-6"
        
      >
        Request for Quotation
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClasses('name')}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#374151] mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className={inputClasses('company')}
          />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputClasses('email')}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-[#374151] mb-1.5">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="United States"
            className={inputClasses('country')}
          />
          {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
        </div>

        {/* Product of Interest */}
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-[#374151] mb-1.5">
            Product of Interest
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-lg bg-white hover:border-[#6B7280] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-transparent"
          >
            <option value="">Select a product category</option>
            {navProductCategories.map((cat) => (
              <option key={cat.label} value={cat.label}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Estimated Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-[#374151] mb-1.5">
            Estimated Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-lg bg-white hover:border-[#6B7280] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-transparent"
          >
            <option value="">Select quantity range</option>
            {quantityRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your requirements, customization needs, or any questions..."
          className="w-full px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-lg bg-white hover:border-[#6B7280] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-transparent resize-vertical"
        />
      </div>

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-[#1A56DB] hover:bg-[#1444B0] active:bg-[#0F3590] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-2 cursor-pointer"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
