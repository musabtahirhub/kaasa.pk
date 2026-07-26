'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { PRODUCTS, Product } from '@/lib/constants';
import { formatPKR } from '@/lib/utils';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  return (
    <div>
      <AdminHeader title="Products Catalog" />

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-kaasa-textMuted">Managing {products.length} catalog items</p>
          <button className="px-4 py-2 rounded-xl bg-kaasa-gold text-kaasa-dark font-semibold text-xs flex items-center gap-2 hover:bg-kaasa-goldHover transition-colors">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="p-4 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-4">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl" />
              <div className="space-y-1">
                <span className="text-[10px] text-kaasa-gold uppercase font-semibold">{p.category}</span>
                <h4 className="text-sm font-semibold text-kaasa-text">{p.name}</h4>
                <p className="text-xs font-bold text-kaasa-gold">{formatPKR(p.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
