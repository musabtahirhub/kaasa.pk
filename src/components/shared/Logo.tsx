import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-decoration-none">
      <span className="font-heading text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gold-gradient">
        KAASA
      </span>
      <span className="text-[10px] font-sans font-semibold tracking-widest text-kaasa-textMuted uppercase border border-kaasa-gold/30 px-1.5 py-0.5 rounded">
        PK
      </span>
    </Link>
  );
}
