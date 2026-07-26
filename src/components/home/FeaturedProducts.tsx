'use client';

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { PRODUCTS } from '@/lib/constants';
import { ShoppingBag, Star, Check } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPKR } from '@/lib/utils';
import Reveal from '../shared/Reveal';

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="featured" className="py-24 bg-kaasa-dark border-t border-kaasa-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Catalog"
          title="Signature Furniture Pieces"
          subtitle="Explore our hand-picked selection of luxury armchairs, handcrafted dining sets, and bespoke bedroom furniture."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.1}>
              <div className="group rounded-2xl bg-kaasa-card border border-kaasa-border hover:border-kaasa-gold/50 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-kaasa-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestseller && (
                    <span className="absolute top-3 left-3 bg-kaasa-gold text-kaasa-dark text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      Bestseller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      New Arrival
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-kaasa-textMuted mb-2">
                      <span className="uppercase tracking-wider font-semibold text-kaasa-gold/80">{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-kaasa-text group-hover:text-kaasa-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-kaasa-textMuted mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-kaasa-border flex items-center justify-between gap-2">
                    <div>
                      <div className="text-lg font-bold text-kaasa-gold">
                        {formatPKR(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-xs text-kaasa-textMuted line-through">
                          {formatPKR(product.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => addItem(product)}
                      className="p-3 rounded-xl bg-kaasa-dark border border-kaasa-border hover:border-kaasa-gold hover:bg-kaasa-gold hover:text-kaasa-dark text-kaasa-text transition-all duration-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
