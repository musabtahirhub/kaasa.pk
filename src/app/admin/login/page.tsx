'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Lock, Mail } from 'lucide-react';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-kaasa-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-6 shadow-2xl">
        <div className="text-center space-y-2">
          <Logo />
          <h2 className="text-2xl font-heading text-kaasa-text pt-2">Admin Portal</h2>
          <p className="text-xs text-kaasa-textMuted">Sign in to manage catalog, orders, and studio operations.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-kaasa-textMuted uppercase mb-1">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-kaasa-textMuted absolute left-3 top-3" />
              <input
                type="email"
                defaultValue="admin@kaasa.pk"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-kaasa-dark border border-kaasa-border text-kaasa-text text-sm focus:border-kaasa-gold outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-kaasa-textMuted uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-kaasa-textMuted absolute left-3 top-3" />
              <input
                type="password"
                defaultValue="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-kaasa-dark border border-kaasa-border text-kaasa-text text-sm focus:border-kaasa-gold outline-none"
              />
            </div>
          </div>

          <Link
            href="/admin"
            className="w-full py-3 rounded-lg bg-kaasa-gold text-kaasa-dark font-semibold text-center block text-sm hover:bg-kaasa-goldHover transition-colors"
          >
            Access Portal
          </Link>
        </form>
      </div>
    </div>
  );
}
