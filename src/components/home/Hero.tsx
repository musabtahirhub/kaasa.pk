'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-kaasa-dark py-20">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-kaasa-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kaasa-card border border-kaasa-gold/30 text-xs font-semibold tracking-wider text-kaasa-gold uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Interior Architecture & Living
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-normal tracking-tight text-kaasa-text max-w-4xl mx-auto leading-[1.15]">
            Crafting Extraordinary <span className="text-transparent bg-clip-text bg-gold-gradient font-semibold">Living Spaces</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base sm:text-xl text-kaasa-textMuted max-w-2xl mx-auto leading-relaxed">
            Experience Pakistan&apos;s premier bespoke furniture design studio. Handcrafted Sheesham wood, rich velvets, and precision metal accents built to last generations.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#featured"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gold-gradient text-kaasa-dark font-semibold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-kaasa-gold/10"
            >
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#benefits"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-kaasa-card border border-kaasa-border text-kaasa-text hover:border-kaasa-gold/50 font-medium text-sm transition-all"
            >
              Book Studio Consultation
            </Link>
          </div>
        </Reveal>

        {/* Feature Badges */}
        <Reveal delay={0.4}>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-kaasa-border/40">
            <div className="flex items-center gap-3 text-left">
              <ShieldCheck className="w-8 h-8 text-kaasa-gold shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-kaasa-text">5-Year Warranty</h4>
                <p className="text-[11px] text-kaasa-textMuted">Structural guarantee</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <Award className="w-8 h-8 text-kaasa-gold shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-kaasa-text">Handcrafted Wood</h4>
                <p className="text-[11px] text-kaasa-textMuted">100% Solid Sheesham</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <Sparkles className="w-8 h-8 text-kaasa-gold shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-kaasa-text">Bespoke Atelier</h4>
                <p className="text-[11px] text-kaasa-textMuted">Custom sizing & finish</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <ShieldCheck className="w-8 h-8 text-kaasa-gold shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-kaasa-text">Doorstep Delivery</h4>
                <p className="text-[11px] text-kaasa-textMuted">White-glove assembly</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
