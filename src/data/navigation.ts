// Unified navigation data

export interface NavProductCategory {
  name: string;
  href: string;
  label: string; // For form select options
}

export const navProductCategories: NavProductCategory[] = [
  { name: 'Android POS Terminals', href: '/products/android-pos', label: 'Android POS Terminals' },
  { name: 'Smart Cash Registers', href: '/products/smart-cash-register', label: 'Smart Cash Registers' },
  { name: 'Mobile POS Devices', href: '/products/mobile-pos', label: 'Mobile POS Devices' },
  { name: 'Self-Service Kiosks', href: '/products/self-service-kiosk', label: 'Self-Service Kiosks' },
  { name: 'POS Printers', href: '/products/pos-printers', label: 'POS Printers' },
  { name: 'Barcode Scanners', href: '/products/barcode-scanners', label: 'Barcode Scanners' },
];
