"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Gift, Truck, PenTool } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const springTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 20,
  };

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] px-5 pt-10 pb-16 transition-colors md:pt-16 md:pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Text & Features (5 cols) */}
        <div className="flex flex-col items-start lg:col-span-5">
          {/* Eyebrow Label */}
          <span className="text-xs font-semibold tracking-widest text-[var(--accent-amber)] uppercase">
            EngravingGlass Hədiyyə Kolleksiyası
          </span>

          {/* H1 - Fraunces serif */}
          <h1 className="font-heading mt-4 text-4xl leading-[1.12] font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[52px]">
            Hədiyyəniz <br />
            <span className="text-[var(--accent-gold)]">sizi xatırlatsın.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
            Şüşə üzərində lazer dəqiqliyi ilə fərdi qravür: viski dəstləri, şərab qədəhləri və korporativ hədiyyələr. Ad, tarix və ya şirkət loqonuzla unikal hədiyyəyə çevirin.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kataloq"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#B87333] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#A35D20] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-gold)]"
            >
              <span>Hədiyyəni seç</span>
              <motion.span
                animate={!shouldReduceMotion && isHovered ? { x: 4 } : { x: 0 }}
                transition={springTransition}
                className="inline-flex"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </a>

            <a
              href="#sorqu"
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-3.5 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Qiymət təklifi al
            </a>
          </div>

          {/* Feature Highlights (Borisso stilində 3 bənd) */}
          <div className="mt-10 grid grid-cols-1 gap-4 pt-6 border-t border-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
              <Gift className="h-4 w-4 text-[var(--accent-amber)] shrink-0" />
              <span>Zərif taxta hədiyyə qablaşdırması</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
              <Truck className="h-4 w-4 text-[var(--accent-amber)] shrink-0" />
              <span>Bakı və Azərbaycan üzrə sürətli çatdırılma</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
              <PenTool className="h-4 w-4 text-[var(--accent-amber)] shrink-0" />
              <span>Ad, tarix və loqo lazer həkki</span>
            </div>
          </div>
        </div>

        {/* Right Column: Luxury AI Product Photo (7 cols) */}
        <div className="relative overflow-hidden rounded-md shadow-2xl lg:col-span-7">
          <div className="relative aspect-[4/3] w-full bg-[var(--bg-secondary)]">
            <Image
              src="/images/hero_whiskey_box.jpg"
              alt="EngravingGlass xüsusi qravürlü viski dəsti taxta hədiyyə qutusunda"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Subtle gradient vignette at edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Artistic script overlay in bottom right */}
            <div className="pointer-events-none absolute bottom-4 right-6 text-right">
              <p className="font-heading italic text-white/90 text-sm sm:text-base drop-shadow-md">
                Xüsusi anlar.
              </p>
              <p className="font-heading italic text-white/80 text-xs sm:text-sm drop-shadow-md">
                Daim xatırlanar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
