import React from 'react';
import Logo from '../shared/Logo';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck, Truck, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kaasa-dark border-t border-kaasa-border text-kaasa-textMuted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-kaasa-textMuted mt-4">
              Bespoke luxury furniture engineered with Pakistani craftsmanship and timeless architectural aesthetics.
            </p>
            <div className="flex items-center gap-4 text-kaasa-gold pt-2">
              <a href="#" className="p-2 rounded-full bg-kaasa-card border border-kaasa-border hover:border-kaasa-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-kaasa-card border border-kaasa-border hover:border-kaasa-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kaasa-text mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#collections" className="hover:text-kaasa-gold transition-colors">Luxury Living</Link></li>
              <li><Link href="#featured" className="hover:text-kaasa-gold transition-colors">Dining & Entertaining</Link></li>
              <li><Link href="#featured" className="hover:text-kaasa-gold transition-colors">Master Bedroom</Link></li>
              <li><Link href="#benefits" className="hover:text-kaasa-gold transition-colors">Bespoke Design Service</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kaasa-text mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#faq" className="hover:text-kaasa-gold transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#faq" className="hover:text-kaasa-gold transition-colors">5-Year Warranty Policy</Link></li>
              <li><Link href="#faq" className="hover:text-kaasa-gold transition-colors">Care & Maintenance</Link></li>
              <li><Link href="/admin" className="hover:text-kaasa-gold transition-colors">Portal Login</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-kaasa-text mb-4">Contact Studio</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kaasa-gold shrink-0 mt-0.5" />
                <span>MM Alam Road, Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kaasa-gold shrink-0" />
                <span>+92 300 8452272</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kaasa-gold shrink-0" />
                <span>concierge@kaasa.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-kaasa-border/60 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
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
