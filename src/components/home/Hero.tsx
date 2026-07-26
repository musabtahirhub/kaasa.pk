'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Truck, Award } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      badge: "PREMIUM WORKSPACE ESSENTIALS",
      title: "ELEVATE YOUR LIVING SPACE",
      subtitle: "Bespoke Sheesham furniture & modern desk decor handcrafted to perfection across Pakistan.",
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
      badge: "LUXURY INTERIOR ARCHITECTURE",
      title: "CRAFTED FOR GENERATIONS",
      subtitle: "Solid wood construction, velvet accents, and precision craftsmanship engineered for endurance.",
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
      badge: "EXCLUSIVELY AT KAASA.PK",
      title: "INNOVATIVE ROOM LIGHTING",
      subtitle: "Atmospheric ambient lighting and high-performance ergonomics for your home & office.",
    },
  ];

  const trustBadges = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      desc: "Nationwide delivery across Pakistan",
    },
    {
      icon: Award,
      title: "PREMIUM QUALITY",
      desc: "Engineered for high endurance setups",
    },
    {
      icon: ShieldCheck,
      title: "100% SECURE",
      desc: "Safe checkout & 5-year structural warranty",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[680px] bg-hh-ink overflow-hidden flex items-center pt-24 pb-12 px-6 sm:px-12 lg:px-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-1000`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Gradient Overlay matching Shopify spec */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1116]/95 via-[#0E1116]/75 to-[#0E1116]/30 z-1" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[720px] w-full text-left space-y-6 pt-12">
        {/* Eyebrow Badge */}
        <div className="inline-block">
          <span className="px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 text-[11px] font-mono tracking-widest text-hh-bone uppercase backdrop-blur-sm">
            {slides[currentSlide].badge}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] font-sans">
          {slides[currentSlide].title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-hh-bone/80 max-w-xl font-normal leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="#collections"
            className="px-8 py-3.5 rounded-md bg-hh-amber text-hh-ink font-mono font-semibold text-xs uppercase tracking-wider hover:bg-hh-amber/90 transition-all flex items-center gap-2 shadow-lg shadow-hh-amber/20"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#featured"
            className="px-8 py-3.5 rounded-md border border-white/20 bg-white/5 text-hh-bone font-mono font-medium text-xs uppercase tracking-wider hover:border-hh-amber hover:text-hh-amber transition-all backdrop-blur-sm"
          >
            Featured Items
          </Link>
        </div>

        {/* Trust Badges Ledger */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15 max-w-2xl">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-start gap-2.5">
                <Icon className="w-4 h-4 text-hh-amber shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white uppercase tracking-wider font-mono block">
                    {badge.title}
                  </span>
                  <span className="text-[11px] text-hh-bone/70 leading-tight block mt-0.5">
                    {badge.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slideshow Controls (Bottom Right) */}
      <div className="absolute bottom-10 right-10 sm:right-16 z-20 hidden sm:flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white flex items-center justify-center hover:bg-hh-amber hover:text-hh-ink hover:border-hh-amber transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs text-white min-w-[40px] text-center font-medium">
          0{currentSlide + 1} / 0{slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white flex items-center justify-center hover:bg-hh-amber hover:text-hh-ink hover:border-hh-amber transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
