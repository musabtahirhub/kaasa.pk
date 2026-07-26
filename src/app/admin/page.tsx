'use client';

import React from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { DollarSign, ShoppingBag, Package, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import { formatPKR } from '@/lib/utils';

export default function AdminDashboard() {
  return (
    <div>
      <AdminHeader title="Dashboard Overview" />

      <div className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-3">
            <div className="flex items-center justify-between text-kaasa-textMuted">
              <span className="text-xs font-semibold uppercase">Total Revenue</span>
              <DollarSign className="w-5 h-5 text-kaasa-gold" />
            </div>
            <div className="text-2xl font-bold text-kaasa-text">{formatPKR(2450000)}</div>
            <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +18.4% from last month
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-3">
            <div className="flex items-center justify-between text-kaasa-textMuted">
              <span className="text-xs font-semibold uppercase">Active Orders</span>
              <ShoppingBag className="w-5 h-5 text-kaasa-gold" />
            </div>
            <div className="text-2xl font-bold text-kaasa-text">34</div>
            <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> 8 pending dispatch
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-3">
            <div className="flex items-center justify-between text-kaasa-textMuted">
              <span className="text-xs font-semibold uppercase">Catalog Items</span>
              <Package className="w-5 h-5 text-kaasa-gold" />
            </div>
            <div className="text-2xl font-bold text-kaasa-text">18</div>
            <p className="text-[11px] text-kaasa-textMuted">All in stock</p>
          </div>

          <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-3">
            <div className="flex items-center justify-between text-kaasa-textMuted">
              <span className="text-xs font-semibold uppercase">Total Clients</span>
              <Users className="w-5 h-5 text-kaasa-gold" />
            </div>
            <div className="text-2xl font-bold text-kaasa-text">142</div>
            <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +12 new this week
            </p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-heading font-semibold text-kaasa-text">Recent Orders</h3>
            <button className="text-xs text-kaasa-gold hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-kaasa-border text-kaasa-textMuted uppercase">
                <tr>
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Item</th>
                  <th className="pb-3 font-semibold">City</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kaasa-border/60 text-kaasa-text">
                <tr>
                  <td className="py-4 font-mono text-kaasa-gold">#KSA-8921</td>
                  <td>Zainab Ahmed</td>
                  <td>Royal Velvet Armchair x2</td>
                  <td>Lahore (Gulberg)</td>
                  <td className="font-semibold">{formatPKR(170000)}</td>
                  <td>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">
                      In Transit
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-mono text-kaasa-gold">#KSA-8920</td>
                  <td>Hassan Raza</td>
                  <td>Sheesham Dining Table</td>
                  <td>Islamabad (F-7)</td>
                  <td className="font-semibold">{formatPKR(145000)}</td>
                  <td>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-semibold">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
