'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function CtaBand() {
  return (
    <section className="py-20 bg-hh-ink border-t border-hh-steel/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="relative rounded-2xl bg-white/5 border border-hh-amber/30 p-10 sm:p-16 text-center space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-hh-amber/10 rounded-full blur-[100px] pointer-events-none" />

          <Reveal>
            <h2 className="text-3xl sm:text-5xl font-sans text-white font-bold max-w-3xl mx-auto">
              Ready to Transform Your Setup with <span className="text-hh-amber">Bespoke Elegance?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-hh-steel max-w-xl mx-auto leading-relaxed font-mono">
              Book a 1-on-1 private consultation with our interior architects or visit our flagship studio in Lahore.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/923008452272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-hh-amber text-hh-ink font-mono font-semibold text-xs uppercase tracking-wider hover:bg-hh-amber/90 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Consult via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
