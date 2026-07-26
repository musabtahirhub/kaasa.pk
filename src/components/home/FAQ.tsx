'use client';

import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { FAQS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-hh-ink border-t border-hh-steel/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about ordering, delivery, and custom furniture craftsmanship at Kaasa."
        />

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white/5 border-hh-amber/50 shadow-lg'
                      : 'bg-white/5 border-hh-steel/20 hover:border-hh-steel/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-medium text-white"
                  >
                    <span className="text-base sm:text-lg font-sans font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-hh-amber transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-hh-steel leading-relaxed border-t border-hh-steel/10 pt-4 font-mono">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
