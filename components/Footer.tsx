import React from "react";
import { WHATSAPP_PHONE_NUMBER } from "./QuoteForm";

export default function Footer() {
  return (
    <footer id="elaqe" className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-5 py-14 transition-colors">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo & Slogan */}
          <div>
            <span className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)]">
              EngravingGlass
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Şüşə üzərində lazer dəqiqliyi ilə fərdi sənət nümunələri. Bakı və Azərbaycan üzrə təhlükəsiz çatdırılma.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Sürətli keçidlər
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#kataloq"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
                >
                  Kataloq
                </a>
              </li>
              <li>
                <a
                  href="#nece-isleyir"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
                >
                  Necə işləyir
                </a>
              </li>
              <li>
                <a
                  href="#sorqu"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
                >
                  Korporativ sifarişlər
                </a>
              </li>
              <li>
                <a
                  href="#sorqu"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
                >
                  Qiymət təklifi
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Əlaqə & Sosial şəbəkələr
            </h4>
            <div className="mt-4 flex items-center gap-4">
              {/* WhatsApp custom line-art SVG */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ilə əlaqə"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>

              {/* Instagram custom line-art SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram səhifəsi"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--text-muted)]">
              engravingglass.az • Bakı, Azərbaycan
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border-color)] pt-6 text-center text-xs text-[var(--text-muted)]">
          © 2026 EngravingGlass. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
}
