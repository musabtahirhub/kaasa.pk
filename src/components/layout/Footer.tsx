import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hh-ink border-t border-hh-steel/10 text-hh-steel">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link href="/" className="font-script text-4xl text-hh-bone hover:text-hh-amber transition-colors inline-block">
              Kaasa
            </Link>
            <p className="text-xs leading-relaxed text-hh-steel mt-2 font-mono">
              Bespoke luxury furniture and desk essentials engineered with artisan craftsmanship and modern aesthetics.
            </p>
            <div className="flex items-center gap-4 text-hh-amber pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 border border-hh-steel/20 hover:border-hh-amber hover:text-hh-amber transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-hh-steel/20 hover:border-hh-amber hover:text-hh-amber transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="#collections" className="hover:text-hh-amber transition-colors">Luxury Living</Link></li>
              <li><Link href="#featured" className="hover:text-hh-amber transition-colors">Desk Accessories</Link></li>
              <li><Link href="#featured" className="hover:text-hh-amber transition-colors">Master Bedroom</Link></li>
              <li><Link href="#benefits" className="hover:text-hh-amber transition-colors">Bespoke Atelier</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="#faq" className="hover:text-hh-amber transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#faq" className="hover:text-hh-amber transition-colors">5-Year Warranty Policy</Link></li>
              <li><Link href="#faq" className="hover:text-hh-amber transition-colors">Care & Maintenance</Link></li>
              <li><Link href="/admin" className="hover:text-hh-amber transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">Contact Studio</h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hh-amber shrink-0 mt-0.5" />
                <span>MM Alam Road, Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hh-amber shrink-0" />
                <span>+92 300 8452272</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hh-amber shrink-0" />
                <span>concierge@kaasa.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hh-steel/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4 text-hh-steel">
          <p>© {new Date().getFullYear()} Kaasa.pk. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
