"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Seçim",
    description: "Kataloqdan zövqünüzə və tədbirinizə uyğun şüşə və qablaşdırma modelini seçin.",
  },
  {
    number: "02",
    title: "Fərdiləşdirmə",
    description: "Həkk ediləcək ad, tarix, sitat və ya şirkət loqonuzu bizə bildirin.",
  },
  {
    number: "03",
    title: "Çatdırılma",
    description: "Bakı və Azərbaycanın bütün rayonlarına 2-4 gün ərzində sığortalı çatdırılma.",
  },
];

export default function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <section id="nece-isleyir" className="border-t border-[var(--border-color)] px-5 py-20 transition-colors md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-wider text-[var(--accent-amber)] uppercase">
            Sadə və Rahat Axın
          </span>
          <h2 className="font-heading mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Necə sifariş verirsiniz
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            Üç sadə addımla dəyərli xatirələrinizi kristal şüşə üzərinə həkk edin.
          </p>
        </div>

        {shouldReduceMotion ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-sm border-l-2 border-[#B87333] bg-[var(--bg-surface)] p-6 shadow-sm md:border-l-0 md:border-t-2 md:pt-6"
              >
                <span className="font-heading text-3xl font-light text-[var(--accent-amber)]">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-medium text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative rounded-sm border-l-2 border-[#B87333] bg-[var(--bg-surface)] p-6 shadow-sm md:border-l-0 md:border-t-2 md:pt-6"
              >
                <span className="font-heading text-3xl font-light text-[var(--accent-amber)]">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-medium text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
