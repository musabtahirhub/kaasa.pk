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
    name: 'The Royal Velvet Armchair',
    category: 'Seating',
    price: 85000,
    originalPrice: 98000,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    description: 'Ergonomically designed luxury velvet armchair with hand-carved mahogany legs.',
    rating: 4.9,
    reviewsCount: 28,
    inStock: true,
    isBestseller: true,
    material: 'Premium Velvet & Solid Mahogany',
    dimensions: '34"W x 32"D x 38"H'
  },
  {
    id: '2',
    name: 'Heritage Sheesham Dining Table',
    category: 'Dining',
    price: 145000,
    originalPrice: 165000,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800',
    description: '6-seater solid Sheesham wood dining table featuring brass inlay work.',
    rating: 5.0,
    reviewsCount: 42,
    inStock: true,
    isNew: true,
    material: 'Solid Sheesham Wood with Brass Accent',
    dimensions: '72"L x 36"W x 30"H'
  },
  {
    id: '3',
    name: 'Aura Minimalist Bed Frame',
    category: 'Bedroom',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    description: 'King size upholstered bed frame with built-in ambient warm LED backlighting.',
    rating: 4.8,
    reviewsCount: 19,
    inStock: true,
    isBestseller: true,
    material: 'Linen Fabric & Engineered Oak',
    dimensions: '78"W x 84"L x 48"H'
  },
  {
    id: '4',
    name: 'Kashmiri Hand-Carved Console',
    category: 'Tables',
    price: 68000,
    originalPrice: 75000,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    description: 'Intricately carved walnut wood entry console table inspired by heritage Kashmiri motifs.',
    rating: 4.9,
    reviewsCount: 15,
    inStock: true,
    isNew: true,
    material: 'Walnut Wood',
    dimensions: '48"W x 16"D x 32"H'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What materials are used in Kaasa furniture?',
    answer: 'We exclusively source premium solid hardwoods (Sheesham, Walnut, Teak), high-grade stainless steel with PVD gold coating, and top-grain Italian leather/velvet upholstery.',
    category: 'general'
  },
  {
    question: 'Do you deliver across all major cities in Pakistan?',
    answer: 'Yes, we provide safe white-glove doorstep delivery and assembly across Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and Multan.',
    category: 'shipping'
  },
  {
    question: 'Can I customize dimensions or fabrics for my order?',
    answer: 'Absolutely! Our bespoke design atelier allows full customization of wood finishes, dimensions, and fabric selections. Contact our design experts via WhatsApp or visit our studio.',
    category: 'custom'
  },
  {
    question: 'What warranty is offered on Kaasa products?',
    answer: 'All furniture pieces come with a 5-year structural frame warranty and 1-year upholstery warranty covering manufacturing defects.',
    category: 'general'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ayesha Malik',
    role: 'Interior Designer',
    location: 'Gulberg, Lahore',
    comment: 'Kaasa has redefined luxury furniture in Pakistan. The craftmanship on the Sheesham dining table exceeded my expectations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: '2',
    name: 'Dr. Shahzad Khan',
    role: 'Homeowner',
    location: 'DHA Phase 6, Karachi',
    comment: 'Delivered seamlessly to Karachi. The velvet quality on the armchairs is ultra-luxurious and comfortable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];
