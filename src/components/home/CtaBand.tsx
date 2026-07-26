'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, Calendar } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function CtaBand() {
  return (
    <section className="py-20 bg-kaasa-dark border-t border-kaasa-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-kaasa-card border border-kaasa-gold/30 p-10 sm:p-16 text-center space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-kaasa-gold/10 rounded-full blur-[100px] pointer-events-none" />

          <Reveal>
            <h2 className="text-3xl sm:text-5xl font-heading text-kaasa-text font-normal max-w-3xl mx-auto">
              Ready to Transform Your Home with <span className="text-kaasa-gold font-semibold">Bespoke Elegance?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-kaasa-textMuted max-w-xl mx-auto leading-relaxed">
              Book a 1-on-1 private consultation with our interior architects or visit our flagship studio on MM Alam Road, Lahore.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/923008452272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-kaasa-dark font-semibold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2"
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
