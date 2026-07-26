'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X, User, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPKR } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, isOpen, openCart, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ROOM LIGHTING', href: '#collections' },
    { label: 'DESK DECOR', href: '#featured' },
    { label: 'OFFICE DESKS', href: '#collections' },
    { label: 'DESK ACCESSORIES', href: '#featured' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
          isScrolled
            ? 'bg-hh-ink/95 shadow-lg backdrop-blur-md py-2 border-b border-hh-steel/20'
            : 'bg-gradient-to-b from-black/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          {/* Top Bar: 3 Columns Grid */}
          <div className="grid grid-cols-3 items-center">
            {/* Search Column (Left) */}
            <div className="flex items-center justify-start gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-hh-bone hover:text-hh-amber transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              
              <div className="hidden md:flex items-center relative w-full max-w-[280px]">
                <Search className="w-4 h-4 absolute left-3 text-hh-steel pointer-events-none" />
                <input
                  type="text"
                  placeholder="SEARCH DESK ESSENTIALS..."
                  className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-white/5 border border-white/15 rounded-md text-hh-bone placeholder-hh-steel focus:outline-none focus:border-hh-amber transition-all"
                />
              </div>
            </div>

            {/* Logo Column (Center) */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="font-script text-3xl sm:text-4xl text-hh-bone hover:text-hh-amber transition-colors tracking-wide"
              >
                Kaasa
              </Link>
            </div>

            {/* Icons Column (Right) */}
            <div className="flex items-center justify-end gap-4">
              <Link
                href="/admin"
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-hh-amber/40 text-hh-amber hover:bg-hh-amber hover:text-hh-ink transition-all"
                title="Admin Portal"
              >
                <User className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>

              <button
                onClick={openCart}
                className="relative p-2 text-hh-bone hover:text-hh-amber transition-colors rounded-full hover:bg-white/5"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-hh-amber text-hh-ink text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Sub-navigation Row */}
          <nav className="hidden md:flex justify-center items-center gap-8 pt-4 mt-3 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] tracking-wider text-hh-bone/80 hover:text-hh-amber transition-all relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-hh-amber shadow-[0_0_8px_#FF8A3D] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-hh-ink border-b border-hh-steel/20 px-6 py-6 space-y-4">
            <div className="relative w-full mb-4">
              <Search className="w-4 h-4 absolute left-3 top-3 text-hh-steel" />
              <input
                type="text"
                placeholder="SEARCH DESK ESSENTIALS..."
                className="w-full pl-9 pr-4 py-2.5 text-xs font-mono bg-white/5 border border-white/15 rounded-md text-hh-bone placeholder-hh-steel focus:outline-none focus:border-hh-amber"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-mono text-xs tracking-widest text-hh-bone hover:text-hh-amber py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-hh-amber text-hh-amber hover:bg-hh-amber hover:text-hh-ink transition-all mt-2"
            >
              <User className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </Link>
          </div>
        )}
      </header>

      {/* Slide-over Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeCart} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-hh-ink border-l border-hh-steel/20 p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-hh-steel/20">
                  <h2 className="text-xl font-heading font-semibold text-hh-bone flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-hh-amber" /> Your Shopping Bag
                  </h2>
                  <button onClick={closeCart} className="text-hh-steel hover:text-hh-bone">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className="py-16 text-center text-hh-steel">
                    <p className="mb-4">Your bag is currently empty.</p>
                    <button
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-md bg-hh-amber text-hh-ink font-mono font-medium text-xs hover:bg-hh-amber/90 transition-colors uppercase tracking-wider"
                    >
                      Explore Collection
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex gap-4 p-3 rounded-lg bg-white/5 border border-hh-steel/20">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-hh-bone">{product.name}</h4>
                          <p className="text-xs text-hh-amber font-semibold mt-1">{formatPKR(product.price)}</p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2 border border-hh-steel/20 rounded px-2 py-0.5">
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="text-xs text-hh-steel hover:text-hh-bone"
                              >
                                -
                              </button>
                              <span className="text-xs text-hh-bone font-medium">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="text-xs text-hh-steel hover:text-hh-bone"
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
                <div className="pt-4 border-t border-hh-steel/20 space-y-4">
                  <div className="flex items-center justify-between text-base font-semibold text-hh-bone">
                    <span>Subtotal</span>
                    <span className="text-hh-amber">{formatPKR(getTotal())}</span>
                  </div>
                  <p className="text-xs text-hh-steel">Taxes & shipping calculated at checkout.</p>
                  <button className="w-full py-3 rounded-lg bg-hh-amber text-hh-ink font-mono font-semibold hover:bg-hh-amber/90 transition-colors uppercase tracking-wider text-xs">
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
