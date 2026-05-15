import type { Solution } from '@/types';

export const solutions: Solution[] = [
  {
    id: 'retail',
    slug: 'retail',
    industry: 'Retail',
    title: 'Smart Retail POS Solutions',
    description:
      'Empower your retail business with NovaPOS intelligent POS systems that streamline checkout, manage inventory in real time, and deliver actionable insights. From boutique shops to large supermarket chains, our solutions scale with your growth.',
    image: '/images/solutions/retail.jpg',
    painPoints: [
      'Long checkout queues frustrate customers and lead to abandoned sales during peak hours.',
      'Disconnected inventory systems cause stockouts and overstocking, resulting in lost revenue and wasted resources.',
      'Manual price updates and promotions are error-prone and slow to roll out across multiple locations.',
      'Limited payment options drive away customers who prefer contactless, mobile wallets, or QR code payments.',
    ],
    recommendedProducts: ['s2-pro', 'd15', 'd15-pro', 'rp80', 'sb2000', 'k32'],
    advantages: [
      'Accelerate checkout by up to 40% with integrated barcode scanning, NFC payments, and high-speed receipt printing.',
      'Synchronize inventory across all POS terminals and locations in real time with cloud-connected software.',
      'Centralize pricing, promotions, and product catalogs with remote management tools accessible from any device.',
      'Accept every payment method including contactless cards, mobile wallets, EMV chip, QR codes, and magnetic stripe.',
      'Gain business intelligence with built-in analytics covering sales trends, peak hours, and staff performance.',
    ],
    caseStudy: {
      title: 'FreshMart Supermarket Chain Reduces Checkout Time by 35%',
      description:
        'FreshMart, a regional supermarket chain with 48 locations, deployed NovaPOS S2 Pro terminals and RP80 printers across all stores. By integrating barcode scanning, NFC payments, and real-time inventory sync, FreshMart reduced average checkout time from 3.2 minutes to 2.1 minutes, decreased stockouts by 28%, and increased customer satisfaction scores by 22% within six months of deployment.',
      image: '/images/case-studies/freshmart.jpg',
    },
  },
  {
    id: 'restaurant',
    slug: 'restaurant',
    industry: 'Restaurant & Food Service',
    title: 'Restaurant & Food Service POS Solutions',
    description:
      'From quick-service restaurants to fine dining establishments, NovaPOS offers tailored POS solutions that handle orders, payments, kitchen communication, and table management with ease. Improve service speed, reduce order errors, and delight your diners.',
    image: '/images/solutions/restaurant.jpg',
    painPoints: [
      'Order errors between front-of-house staff and the kitchen lead to wasted food and unhappy customers.',
      'Splitting bills and handling tips on outdated systems creates friction and slows table turnover.',
      'Managing table reservations, waitlists, and seat assignments manually wastes staff time and creates confusion.',
      'Food delivery and takeaway orders require separate systems, adding complexity and potential for mistakes.',
    ],
    recommendedProducts: ['s1-pro', 'd15-pro', 'm3', 'p2', 'k21', 'k32'],
    advantages: [
      'Send orders directly from the POS to kitchen display screens, eliminating handwritten tickets and reducing errors by over 90%.',
      'Enable tableside ordering and payment with mobile POS terminals, improving service speed and customer experience.',
      'Manage reservations, waitlists, and table assignments from a single intuitive interface with real-time status updates.',
      'Integrate delivery platform orders into your POS workflow, consolidating all channels into one unified system.',
      'Track food costs, waste, and menu item performance to optimize your menu and improve profitability.',
    ],
    caseStudy: {
      title: 'Bella Italia Restaurant Group Boosts Table Turnover by 25%',
      description:
        'Bella Italia, a chain of 15 Italian restaurants, replaced their legacy POS system with NovaPOS D15 Pro dual-screen terminals and M3 mobile devices. Tableside ordering reduced order errors by 92%, while integrated bill splitting and NFC payments cut average payment time from 4 minutes to under 90 seconds. The result was a 25% increase in table turnover and a 15% rise in average revenue per cover within the first quarter.',
      image: '/images/case-studies/bella-italia.jpg',
    },
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    industry: 'Hospitality & Hotels',
    title: 'Hospitality & Hotel POS Solutions',
    description:
      'NovaPOS provides comprehensive POS solutions for hotels, resorts, and event venues. Manage room charges, restaurant and bar tabs, spa services, and gift shop sales from a unified platform. Deliver a seamless guest experience from check-in to check-out.',
    image: '/images/solutions/hospitality.jpg',
    painPoints: [
      'Guests expect to charge purchases to their room across multiple outlets, but disconnected systems make this complex.',
      'Seasonal demand fluctuations make it difficult to scale POS infrastructure up and down efficiently.',
      'Managing menus, pricing, and promotions across hotel restaurants, bars, cafes, and room service is operationally challenging.',
      'Slow payment processing at checkout creates bottlenecks during peak departure times.',
    ],
    recommendedProducts: ['d15', 'd15-pro', 'p1', 'p2', 'm2', 'k21'],
    advantages: [
      'Post charges from any outlet directly to guest rooms with real-time synchronization to the property management system.',
      'Deploy additional mobile POS terminals during peak seasons and events without complex IT setup or long-term commitments.',
      'Centrally manage menus, pricing, and promotions across all food and beverage outlets from a single dashboard.',
      'Accelerate check-out with NFC contactless payments and mobile payment options, reducing queue times by up to 50%.',
      'Generate detailed revenue reports by outlet, period, and payment method for accurate financial analysis.',
    ],
    caseStudy: {
      title: 'Oceanview Resort Achieves 99.7% Uptime Across 12 Outlets',
      description:
        'Oceanview Resort, a 350-room luxury resort with 12 food and beverage outlets, deployed a mix of NovaPOS D15 desktop terminals, M2 mobile devices, and P1 payment terminals. Room charge posting was integrated with their PMS, enabling guests to charge purchases seamlessly across all outlets. The resort achieved 99.7% system uptime over 18 months, reduced checkout complaints by 60%, and increased F&B revenue per guest by 18% through targeted upselling on the customer-facing display.',
      image: '/images/case-studies/oceanview.jpg',
    },
  },
  {
    id: 'logistics',
    slug: 'logistics',
    industry: 'Logistics & Warehousing',
    title: 'Logistics & Warehousing POS Solutions',
    description:
      'NovaPOS rugged mobile POS terminals are built for the demanding logistics and warehousing environment. From proof-of-delivery to warehouse inventory management, our devices withstand drops, dust, and moisture while keeping your operations running smoothly.',
    image: '/images/solutions/logistics.jpg',
    painPoints: [
      'Paper-based proof-of-delivery processes are slow, prone to loss, and difficult to reconcile with billing systems.',
      'Warehouse inventory counts conducted with clipboards or consumer-grade devices are inaccurate and time-consuming.',
      'Field workers need devices that can survive drops, exposure to rain, and extreme temperatures.',
      'Disconnected systems between the warehouse, delivery fleet, and back office create data silos and delays.',
    ],
    recommendedProducts: ['m3', 'm3-pro', 'sb2000', 'p2'],
    advantages: [
      'Capture electronic proof-of-delivery with signature, photo, and GPS location on rugged mobile POS terminals.',
      'Perform real-time inventory scanning and stock checks with integrated 2D barcode scanners and cloud synchronization.',
      'Operate confidently in harsh conditions with IP54/IP65 rated devices tested to MIL-STD-810G drop standards.',
      'Maintain continuous connectivity with 4G LTE and WiFi, ensuring real-time data flow from the field to the back office.',
      'Process on-site payments for cash-on-delivery orders, reducing reconciliation time and improving cash flow.',
    ],
    caseStudy: {
      title: 'SwiftLog Delivery Cuts Proof-of-Delivery Processing by 70%',
      description:
        'SwiftLog, a last-mile delivery company with 2,000 drivers, equipped its fleet with NovaPOS M3 Pro terminals. Drivers now capture electronic proof-of-delivery with signatures, photos of delivered goods, and GPS coordinates. The company eliminated paper-based POD processes entirely, reducing processing time from 48 hours to under 4 hours. Cash-on-delivery payment collection improved by 35%, and delivery dispute rates dropped by 82%.',
      image: '/images/case-studies/swiftlog.jpg',
    },
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    industry: 'Healthcare & Pharmacy',
    title: 'Healthcare & Pharmacy POS Solutions',
    description:
      'NovaPOS provides secure, compliant POS solutions for hospitals, clinics, pharmacies, and healthcare facilities. Handle patient billing, pharmacy point-of-sale, cafeteria transactions, and gift shop sales with systems that meet healthcare data security requirements.',
    image: '/images/solutions/healthcare.jpg',
    painPoints: [
      'Processing co-pays, insurance payments, and pharmacy transactions on general-purpose systems raises compliance concerns.',
      'Pharmacy sales require accurate prescription tracking, inventory management for controlled substances, and detailed audit trails.',
      'Hospital cafeterias and gift shops need fast, reliable POS systems that integrate with employee badge payment systems.',
      'Patient billing errors and slow checkout at pharmacy counters damage the patient experience and create administrative burden.',
    ],
    recommendedProducts: ['d10', 'd15', 's1', 'p1', 'sb2000', 'k21'],
    advantages: [
      'Process patient payments securely with PCI-certified terminals that support insurance card readers and payment plan management.',
      'Track pharmacy inventory in real time with barcode scanning, automatic reorder alerts, and controlled substance audit logs.',
      'Integrate with employee badge and ID systems for cashless payments in hospital cafeterias and vending areas.',
      'Reduce patient wait times with fast, accurate checkout and automatic receipt delivery via email or SMS.',
      'Generate detailed transaction reports for compliance auditing, financial reconciliation, and operational analysis.',
    ],
    caseStudy: {
      title: 'MedCare Pharmacy Chain Improves Inventory Accuracy to 99.5%',
      description:
        'MedCare, a network of 30 pharmacies, deployed NovaPOS S1 terminals with SB2000 barcode scanners at all checkout counters. Real-time inventory tracking reduced discrepancies from 4.2% to 0.5%, while automated reorder alerts prevented 95% of stockouts on high-demand medications. Patient checkout time decreased by 40%, and the chain saved an estimated $320,000 annually in reduced waste and improved inventory management.',
      image: '/images/case-studies/medcare.jpg',
    },
  },
];
