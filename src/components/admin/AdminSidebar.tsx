'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Package, HelpCircle, LogOut, ExternalLink } from 'lucide-react';

const MENU = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Products Catalog', href: '/admin/products', icon: Package },
  { label: 'Orders & Sales', href: '/admin/orders', icon: ShoppingCart },
  { label: 'FAQ Manager', href: '/admin/faq', icon: HelpCircle },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-kaasa-dark border-r border-kaasa-border flex flex-col justify-between h-screen sticky top-0 p-6">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-kaasa-gold tracking-wider">KAASA</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-kaasa-gold/20 text-kaasa-gold font-mono font-semibold uppercase">Admin</span>
        </div>

        <nav className="space-y-1.5">
          {MENU.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  active
                    ? 'bg-kaasa-gold text-kaasa-dark shadow-md'
                    : 'text-kaasa-textMuted hover:text-kaasa-text hover:bg-kaasa-card'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-kaasa-border space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs text-kaasa-textMuted hover:text-kaasa-gold hover:bg-kaasa-card transition-colors"
        >
          <span>View Live Storefront</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/admin/login"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
