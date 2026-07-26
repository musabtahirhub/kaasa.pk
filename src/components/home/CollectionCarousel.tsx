'use client';

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { ArrowUpRight } from 'lucide-react';

const COLLECTIONS = [
  {
    title: 'The Royal Velvet Suite',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'Plush sapphire and emerald velvet couches paired with brass framing.'
  },
  {
    title: 'Heritage Sheesham Dining',
    category: 'Dining Atelier',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800',
    description: 'Intricately handcrafted solid Sheesham tables for modern banquets.'
  },
  {
    title: 'Sanctuary Master Suite',
    category: 'Bedroom Furniture',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist upholstered king beds with ambient perimeter backlighting.'
  }
];

export default function CollectionCarousel() {
  return (
    <section id="collections" className="py-24 bg-kaasa-dark border-t border-kaasa-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Collections"
          title="Architectural Harmony for Every Room"
          subtitle="Explore spaces crafted to embody elegance, warmth, and Pakistani artisan mastery."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-kaasa-border bg-kaasa-card">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-kaasa-dark via-kaasa-dark/40 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-kaasa-gold uppercase tracking-wider mb-2">
                    {col.category}
                  </span>
                  <h3 className="text-2xl font-heading text-kaasa-text font-semibold mb-2 group-hover:text-kaasa-gold transition-colors flex items-center justify-between">
                    {col.title}
                    <ArrowUpRight className="w-5 h-5 text-kaasa-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-kaasa-textMuted leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
