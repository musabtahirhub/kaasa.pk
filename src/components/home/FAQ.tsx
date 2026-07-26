'use client';

import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { FAQS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-kaasa-dark border-t border-kaasa-border">
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
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-kaasa-card border-kaasa-gold/40 shadow-lg'
                      : 'bg-kaasa-card/50 border-kaasa-border hover:border-kaasa-borderHover'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-medium text-kaasa-text"
                  >
                    <span className="text-base sm:text-lg font-heading">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-kaasa-gold transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-kaasa-textMuted leading-relaxed border-t border-kaasa-border/40 pt-4">
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
