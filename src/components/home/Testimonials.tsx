'use client';

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function Testimonials() {
  return (
    <section className="py-24 bg-kaasa-dark border-t border-kaasa-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Endorsements"
          title="Loved by Homeowners & Designers"
          subtitle="Read how Kaasa transformed luxury residences across Lahore, Islamabad, and Karachi."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-kaasa-text leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-kaasa-border/60">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-kaasa-gold/40" />
                  <div>
                    <h4 className="text-sm font-semibold text-kaasa-text flex items-center gap-1.5">
                      {t.name} <CheckCircle2 className="w-3.5 h-3.5 text-kaasa-gold" />
                    </h4>
                    <p className="text-xs text-kaasa-textMuted">{t.role} • {t.location}</p>
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
