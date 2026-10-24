import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  type: "whiskey" | "wine" | "corporate";
  title: string;
  description: string;
  badge: string;
  imageSrc: string;
}

export default function CategoryCard({
  title,
  description,
  badge,
  imageSrc,
}: CategoryCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-secondary)]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 rounded-full bg-[var(--bg-surface)]/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--accent-amber)] backdrop-blur-md shadow-sm">
          {badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--border-color)] pt-4">
          <span className="text-xs font-medium text-[var(--text-muted)]">
            Fərdi ad və loqo həkki ilə
          </span>
          <a
            href="#sorqu"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-amber)] transition-colors hover:text-[var(--accent-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
          >
            <span>Sifariş et</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
