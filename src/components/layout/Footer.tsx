import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/60 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo Column */}
          <div className="space-y-3">
            <Link href="/" className="font-script text-4xl text-white hover:opacity-80 transition-opacity inline-block">
              Kaasa
            </Link>
            <p className="text-xs text-white/50 leading-relaxed font-mono">
              Curated room decor and aesthetic desk setup culture delivered across Pakistan.
            </p>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="#collections" className="hover:text-white transition-colors">Room Decor</Link></li>
              <li><Link href="#collections" className="hover:text-white transition-colors">RGB Lights</Link></li>
              <li><Link href="#collections" className="hover:text-white transition-colors">Figures & Collectibles</Link></li>
              <li><Link href="#featured" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="#faq" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white mb-4">
              SOCIALS
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=61590506267457"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#3a3a3a] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kaasa.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#3a3a3a] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:kaasapk.official@gmail.com"
                className="w-9 h-9 rounded-md bg-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#3a3a3a] transition-all"
                aria-label="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-white/50 mt-4">
              kaasapk.official@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/35 gap-4">
          <p>© {new Date().getFullYear()} Kaasa • Powered by Shopify</p>
          <div className="flex items-center gap-4">
            <span>Cash on Delivery</span>
            <span>Card / JazzCash</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
