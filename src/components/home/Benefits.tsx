'use client';

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { ShieldCheck, Compass, Truck, Sparkles } from 'lucide-react';
import Reveal from '../shared/Reveal';

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: '5-Year Structural Guarantee',
    description: 'Every hardwood joint, frame, and brass fitting is engineered to withstand decades of daily use.'
  },
  {
    icon: Compass,
    title: 'Bespoke Atelier Design',
    description: 'Customize sizes, wood polishes, and imported velvet/leather upholstery to align with your floor plan.'
  },
  {
    icon: Truck,
    title: 'White-Glove Delivery',
    description: 'Seamless white-glove transport, room placement, and full installation across Pakistan.'
  },
  {
    icon: Sparkles,
    title: 'Master Craftsmanship',
    description: 'Honoring heritage Pakistani woodworking techniques combined with modern Italian aesthetics.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-hh-ink border-t border-hh-steel/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="The Kaasa Promise"
          title="Why Architectural Connoisseurs Choose Us"
          subtitle="Uncompromising dedication to premium materials, artisan heritage, and seamless customer service."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-lg bg-white/5 border border-hh-steel/20 hover:border-hh-amber/50 transition-all duration-300 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-hh-amber/10 border border-hh-amber/20 flex items-center justify-center text-hh-amber">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-sans">
                    {b.title}
                  </h3>
                  <p className="text-xs text-hh-steel leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
