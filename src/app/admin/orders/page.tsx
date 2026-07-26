'use client';

import React from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { formatPKR } from '@/lib/utils';
import { Search, Filter } from 'lucide-react';

export default function AdminOrdersPage() {
  return (
    <div>
      <AdminHeader title="Orders & Sales Management" />

      <div className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-kaasa-textMuted absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by order ID, customer..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-kaasa-card border border-kaasa-border text-kaasa-text text-xs focus:border-kaasa-gold outline-none"
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-kaasa-border text-kaasa-textMuted uppercase">
              <tr>
                <th className="pb-3 font-semibold">Order ID</th>
                <th className="pb-3 font-semibold">Customer</th>
                <th className="pb-3 font-semibold">Product</th>
                <th className="pb-3 font-semibold">City</th>
                <th className="pb-3 font-semibold">Total</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-kaasa-border/60 text-kaasa-text">
              <tr>
                <td className="py-4 font-mono text-kaasa-gold">#KSA-8921</td>
                <td>Zainab Ahmed</td>
                <td>Royal Velvet Armchair x2</td>
                <td>Lahore</td>
                <td className="font-semibold">{formatPKR(170000)}</td>
                <td>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">
                    In Transit
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
