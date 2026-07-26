'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CollectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      id: 1,
      title: 'Living Room',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      href: '#collections',
    },
    {
      id: 2,
      title: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      href: '#collections',
    },
    {
      id: 3,
      title: 'Dining',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      href: '#collections',
    },
    {
      id: 4,
      title: 'Decor',
      image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      href: '#collections',
    },
    {
      id: 5,
      title: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      href: '#collections',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-16 bg-hh-ink relative overflow-hidden border-t border-hh-steel/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header & Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-hh-amber tracking-widest uppercase">
              Curated Spaces
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              EXPLORE COLLECTIONS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-hh-steel/20 bg-white/5 text-hh-bone flex items-center justify-center hover:bg-hh-amber hover:text-hh-ink hover:border-hh-amber transition-all"
              aria-label="Previous Collection"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-hh-steel/20 bg-white/5 text-hh-bone flex items-center justify-center hover:bg-hh-amber hover:text-hh-ink hover:border-hh-amber transition-all"
              aria-label="Next Collection"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {collections.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[260px] sm:w-[320px] snap-start rounded-lg overflow-hidden border border-hh-steel/20 bg-white/5 hover:border-hh-amber/50 hover:shadow-[0_10px_30px_rgba(255,138,61,0.15)] transition-all duration-300 group"
            >
              <Link href={item.href} className="block relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase group-hover:text-hh-amber transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
