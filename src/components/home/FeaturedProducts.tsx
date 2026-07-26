'use client';

import React from 'react';
import { PRODUCTS } from '@/lib/constants';
import { ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPKR } from '@/lib/utils';
import Reveal from '../shared/Reveal';

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="featured" className="py-20 bg-hh-ink border-t border-hh-steel/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-hh-amber tracking-widest uppercase">
              Featured Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 font-sans">
              FEATURED CATALOG
            </h2>
          </div>
          <p className="text-xs text-hh-steel max-w-md font-mono">
            Explore our hand-crafted desk setups, luxury lighting, and bespoke furniture built to last generations.
          </p>
        </div>

        {/* 4 Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.08}>
              <div className="group rounded-lg bg-white/5 border border-hh-steel/20 hover:border-hh-amber/60 transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-[0_10px_30px_rgba(255,138,61,0.12)]">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestseller && (
                    <span className="absolute top-3 left-3 bg-hh-amber text-hh-ink font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      Bestseller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-emerald-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      New
                    </span>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-hh-steel mb-1.5">
                      <span className="uppercase tracking-wider text-hh-amber">{product.category}</span>
                      <div className="flex items-center gap-1 text-hh-amber font-semibold">
                        <Star className="w-3 h-3 fill-hh-amber text-hh-amber" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-white group-hover:text-hh-amber transition-colors font-sans">
                      {product.name}
                    </h3>
                    <p className="text-xs text-hh-steel mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hh-steel/15 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-base font-mono font-bold text-hh-amber">
                        {formatPKR(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-[11px] font-mono text-hh-steel line-through">
                          {formatPKR(product.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => addItem(product)}
                      className="p-2.5 rounded-md bg-white/5 border border-hh-steel/20 hover:border-hh-amber hover:bg-hh-amber hover:text-hh-ink text-hh-bone transition-all duration-200"
                      aria-label={`Add ${product.name} to bag`}
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
