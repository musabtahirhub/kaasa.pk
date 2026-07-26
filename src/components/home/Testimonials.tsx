'use client';

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, CheckCircle2 } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function Testimonials() {
  return (
    <section className="py-20 bg-hh-ink border-t border-hh-steel/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Client Endorsements"
          title="Loved by Homeowners & Designers"
          subtitle="Read how Kaasa transformed luxury residences across Lahore, Islamabad, and Karachi."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.1}>
              <div className="p-8 rounded-lg bg-white/5 border border-hh-steel/20 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-hh-amber">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hh-amber text-hh-amber" />
                    ))}
                  </div>
                  <p className="text-sm text-hh-bone leading-relaxed italic">
                    &quot;{t.comment}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-hh-steel/10">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-hh-amber/40" />
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-1.5 font-sans">
                      {t.name} <CheckCircle2 className="w-3.5 h-3.5 text-hh-amber" />
                    </h4>
                    <p className="text-xs text-hh-steel font-mono">{t.role} • {t.location}</p>
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
