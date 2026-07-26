export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  features?: string[];
  dimensions?: string;
  material?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'shipping' | 'custom' | 'care';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
  verified: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'RGB Minimalist Corner Floor Lamp',
    category: 'RGB Lights',
    price: 14500,
    originalPrice: 17800,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'Smart app-controlled RGB LED corner lamp with music sync and 16M+ color ambient themes.',
    rating: 4.9,
    reviewsCount: 48,
    inStock: true,
    isBestseller: true,
    material: 'Anodized Aluminium & Polycarbonate',
    dimensions: '142cm Height'
  },
  {
    id: '2',
    name: 'MagSafe Leather Desk Mat',
    category: 'Desk Accessories',
    price: 8900,
    originalPrice: 10500,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    description: 'Waterproof PU leather desk pad with built-in 15W wireless MagSafe fast charging pad.',
    rating: 5.0,
    reviewsCount: 62,
    inStock: true,
    isBestseller: true,
    material: 'Microfiber PU Leather',
    dimensions: '900mm x 400mm'
  },
  {
    id: '3',
    name: 'Ergonomic Aluminium Dual Monitor Arm',
    category: 'Office Desks',
    price: 18200,
    originalPrice: 21000,
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty gas spring dual monitor mount supporting up to 32" screens with integrated cable management.',
    rating: 4.8,
    reviewsCount: 31,
    inStock: true,
    isNew: true,
    material: 'Aircraft-grade Aluminium',
    dimensions: 'Fits 17" - 32" Monitors'
  },
  {
    id: '4',
    name: 'Cyberpunk Mech Keycap Figurine',
    category: 'Figures & Collectibles',
    price: 6500,
    originalPrice: 7500,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-painted resin aesthetic desk figurine for keyboard enthusiasts and modern workspace setups.',
    rating: 4.9,
    reviewsCount: 27,
    inStock: true,
    isNew: true,
    material: 'Premium Artisan Resin',
    dimensions: '12cm x 8cm x 15cm'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Why should I buy from Kaasa?',
    answer: 'We offer carefully curated room decor and lifestyle products with fast shipping across Pakistan.',
    category: 'general'
  },
  {
    question: 'What makes you different from other online stores?',
    answer: 'We focus on aesthetic and desk setup culture. Every product is selected to fit a vibe, not just fill a catalogue.',
    category: 'general'
  },
  {
    question: 'Do you have a physical presence?',
    answer: 'Contact us to visit us live and collect your orders in Lahore.',
    category: 'general'
  },
  {
    question: "What if I don't like the product after receiving it?",
    answer: 'We offer hassle-free returns within 7 days of delivery. Just contact our support team and we will guide you through the process.',
    category: 'custom'
  },
  {
    question: 'Do you offer Cash on Delivery?',
    answer: 'Yes, COD is available across Pakistan. Online payment via card or JazzCash is also accepted.',
    category: 'shipping'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery across Pakistan takes 3-5 business days. Karachi, Lahore, and Islamabad orders often arrive in 2-3 days.',
    category: 'shipping'
  },
  {
    question: 'How do I contact support?',
    answer: 'Email us at kaasapk.official@gmail.com or DM us on Instagram / Facebook @kaasa.pk — we typically respond within a few hours.',
    category: 'general'
  },
  {
    question: 'My item arrived damaged. What do I do?',
    answer: 'Please photograph the damage and email it to support@kaasa.pk within 48 hours of delivery. We will send a replacement or issue a refund.',
    category: 'care'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Hamza Rizvi',
    role: 'Software Engineer & Creator',
    location: 'Gulberg, Lahore',
    comment: 'The RGB floor lamp and desk mat completely changed the vibe of my home studio setup. Fast COD delivery to Lahore!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: '2',
    name: 'Zainab Fatima',
    role: 'Architect & Designer',
    location: 'DHA Phase 6, Karachi',
    comment: 'Kaasa is hands down the best store in Pakistan for desk setup culture. Quality is top-tier and packaging was spot on.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];
