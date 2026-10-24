"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Top Announcement Bar (Borisso stilində üst banner) */}
      <aside aria-label="Elan" className="w-full bg-[var(--banner-bg)] px-4 py-2 text-center text-xs font-medium text-white transition-colors">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
          <span>Ayın sonunadək Bakı daxili çatdırılma pulsuz!</span>
          <a
            href="#sorqu"
            className="underline underline-offset-2 opacity-90 transition-opacity hover:opacity-100"
          >
            Sifariş et &rarr;
          </a>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-surface)]/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
          <a
            href="#"
            className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
          >
            EngravingGlass
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Əsas naviqasiya">
            <a
              href="#kataloq"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Kataloq
            </a>
            <a
              href="#nece-isleyir"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Necə işləyir
            </a>
            <a
              href="#sorqu"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Korporativ
            </a>
            <a
              href="#elaqe"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Əlaqə
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Gündüz / Gecə) */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={
                theme === "light"
                  ? "Gecə rejiminə keç"
                  : "Gündüz (Mavi-Ağ) rejiminə keç"
              }
              title={
                theme === "light"
                  ? "Gecə rejimi"
                  : "Gündüz rejimi"
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-all hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Sifariş ver CTA */}
            <a
              href="#sorqu"
              className="inline-flex items-center justify-center rounded-sm bg-[#B87333] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A35D20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-gold)]"
            >
              Sifariş ver
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
