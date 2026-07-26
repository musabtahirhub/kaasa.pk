import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-4">
      {badge && (
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full bg-kaasa-gold/10 border border-kaasa-gold/30 text-xs font-semibold tracking-wider text-kaasa-gold uppercase">
            {badge}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-heading font-normal text-kaasa-text tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-sm sm:text-base text-kaasa-textMuted leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
