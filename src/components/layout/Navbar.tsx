'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../shared/Logo';
import { ShoppingBag, Search, Menu, X, Phone, User, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPKR } from '@/lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, isOpen, openCart, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-kaasa-gold/10 border-b border-kaasa-gold/20 py-2 px-4 text-center text-xs tracking-wider text-kaasa-gold flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-kaasa-gold animate-pulse" />
        FREE WHITE-GLOVE DELIVERY & ASSEMBLY ACROSS LAHORE, KARACHI & ISLAMABAD
      </div>

      <header className="sticky top-0 z-40 bg-kaasa-dark/90 backdrop-blur-md border-b border-kaasa-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-kaasa-text hover:text-kaasa-gold transition-colors">
              Home
            </Link>
            <Link href="#collections" className="text-sm font-medium text-kaasa-textMuted hover:text-kaasa-gold transition-colors">
              Collections
            </Link>
            <Link href="#featured" className="text-sm font-medium text-kaasa-textMuted hover:text-kaasa-gold transition-colors">
              Featured
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-kaasa-textMuted hover:text-kaasa-gold transition-colors">
              Why Kaasa
            </Link>
            <Link href="#faq" className="text-sm font-medium text-kaasa-textMuted hover:text-kaasa-gold transition-colors">
              FAQ
            </Link>
            <Link href="/admin" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-kaasa-card border border-kaasa-gold/40 text-kaasa-gold hover:bg-kaasa-gold hover:text-kaasa-dark transition-all">
              Admin Portal
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-kaasa-textMuted hover:text-kaasa-gold transition-colors rounded-full hover:bg-kaasa-card">
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={openCart}
              className="relative p-2 text-kaasa-text hover:text-kaasa-gold transition-colors rounded-full hover:bg-kaasa-card"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-kaasa-gold text-kaasa-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-kaasa-text hover:text-kaasa-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeCart} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-kaasa-card border-l border-kaasa-border p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-kaasa-border">
                  <h2 className="text-xl font-heading font-semibold text-kaasa-text flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-kaasa-gold" /> Your Shopping Bag
                  </h2>
                  <button onClick={closeCart} className="text-kaasa-textMuted hover:text-kaasa-text">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className="py-16 text-center text-kaasa-textMuted">
                    <p className="mb-4">Your bag is currently empty.</p>
                    <button
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-md bg-kaasa-gold text-kaasa-dark font-medium text-sm hover:bg-kaasa-goldHover transition-colors"
                    >
                      Explore Furniture
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex gap-4 p-3 rounded-lg bg-kaasa-dark border border-kaasa-border">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-kaasa-text">{product.name}</h4>
                          <p className="text-xs text-kaasa-gold font-semibold mt-1">{formatPKR(product.price)}</p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2 border border-kaasa-border rounded px-2 py-0.5">
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="text-xs text-kaasa-textMuted hover:text-kaasa-text"
                              >
                                -
                              </button>
                              <span className="text-xs text-kaasa-text font-medium">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="text-xs text-kaasa-textMuted hover:text-kaasa-text"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-red-400 hover:text-red-300 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="pt-4 border-t border-kaasa-border space-y-4">
                  <div className="flex items-center justify-between text-base font-semibold text-kaasa-text">
                    <span>Subtotal</span>
                    <span className="text-kaasa-gold">{formatPKR(getTotal())}</span>
                  </div>
                  <p className="text-xs text-kaasa-textMuted">Taxes & shipping calculated at checkout.</p>
                  <button className="w-full py-3 rounded-lg bg-kaasa-gold text-kaasa-dark font-semibold hover:bg-kaasa-goldHover transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
