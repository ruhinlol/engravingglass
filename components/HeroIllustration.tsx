"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full items-center justify-center py-6 lg:justify-end">
      <svg
        viewBox="0 0 460 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[420px]"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle amber gradient for laser line */}
          <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B87333" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#C9884A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F2EDE6" stopOpacity="0.2" />
          </linearGradient>

          {/* Sweeping light refraction across the faceted crystal */}
          <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8FA3AD" stopOpacity="0.2" />
            <stop offset="45%" stopColor="#8FA3AD" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C9884A" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#F2EDE6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8FA3AD" stopOpacity="0.2" />
          </linearGradient>

          {/* Soft inner glow */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer glass boundary - Decanter Silhouette */}
        <path
          d="M 195 50 L 265 50 L 265 80 L 250 110 L 250 170 L 340 310 L 330 450 L 130 450 L 120 310 L 210 170 L 210 110 L 195 80 Z"
          stroke="#8FA3AD"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />

        {/* Neck collar rim */}
        <line
          x1="195"
          y1="80"
          x2="265"
          y2="80"
          stroke="#8FA3AD"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="202"
          y1="110"
          x2="258"
          y2="110"
          stroke="#8FA3AD"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Decanter Stopper */}
        <polygon
          points="210,18 250,18 258,48 202,48"
          stroke="#C9884A"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
        />
        <line
          x1="230"
          y1="18"
          x2="230"
          y2="48"
          stroke="#C9884A"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* Facet Geometry / Crystal cut incisions */}
        <g stroke="#8FA3AD" strokeWidth="0.8" strokeOpacity="0.4">
          {/* Main vertical center facet */}
          <line x1="230" y1="170" x2="230" y2="450" />

          {/* Diamond cut angles */}
          <polyline points="120,310 175,370 230,310 285,370 340,310" />
          <polyline points="125,375 175,410 230,375 285,410 335,375" />
          <polyline points="130,450 175,410 230,450 285,410 330,450" />

          {/* Upper shoulder lines */}
          <line x1="210" y1="170" x2="175" y2="370" />
          <line x1="250" y1="170" x2="285" y2="370" />
          <line x1="230" y1="170" x2="175" y2="370" />
          <line x1="230" y1="170" x2="285" y2="370" />
        </g>

        {/* Whispering Tumbler glass profile beside decanter */}
        <g transform="translate(180, 240)">
          <path
            d="M 60 40 L 190 40 L 175 190 L 75 190 Z"
            stroke="#8FA3AD"
            strokeWidth="1.1"
            strokeOpacity="0.3"
          />
          {/* Tumbler base */}
          <line
            x1="70"
            y1="178"
            x2="180"
            y2="178"
            stroke="#8FA3AD"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          {/* Tumbler facet cuts */}
          <line x1="125" y1="40" x2="125" y2="178" stroke="#8FA3AD" strokeWidth="0.7" strokeOpacity="0.25" />
          <line x1="95" y1="40" x2="90" y2="178" stroke="#8FA3AD" strokeWidth="0.6" strokeOpacity="0.2" />
          <line x1="155" y1="40" x2="160" y2="178" stroke="#8FA3AD" strokeWidth="0.6" strokeOpacity="0.2" />
          <polyline points="75,130 90,150 125,130 160,150 175,130" stroke="#8FA3AD" strokeWidth="0.7" strokeOpacity="0.3" />
        </g>

        {/* Subtle Laser Engraving Precision Lines (Focal Beam) */}
        <g>
          {/* Engraving path across the glass */}
          <path
            d="M 150 280 C 180 270, 220 295, 270 275 C 290 268, 305 272, 315 285"
            stroke="url(#laserBeam)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Focal engraving crosshair coordinate */}
          <circle cx="258" cy="278" r="3.5" stroke="#C9884A" strokeWidth="1" fill="none" opacity="0.85" />
          <circle cx="258" cy="278" r="1" fill="#F2EDE6" />
          <line x1="250" y1="278" x2="266" y2="278" stroke="#C9884A" strokeWidth="0.7" opacity="0.6" />
          <line x1="258" y1="270" x2="258" y2="286" stroke="#C9884A" strokeWidth="0.7" opacity="0.6" />
        </g>

        {/* THE SINGLE BOLD ELEMENT: Fine continuous slow light sweep across glass facets */}
        {shouldReduceMotion ? (
          // Static fine highlight if reduced motion
          <path
            d="M 140 230 L 230 330 L 320 230"
            stroke="#C9884A"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            fill="none"
          />
        ) : (
          <g filter="url(#softGlow)">
            {/* 18-24s continuous loop light refraction travelling along facet cuts */}
            <motion.path
              d="M 210 110 L 250 170 L 340 310 L 285 370 L 230 450 L 175 410 L 120 310 L 210 170 Z"
              stroke="url(#sweepGradient)"
              strokeWidth="1.8"
              fill="none"
              strokeDasharray="180 600"
              initial={{ strokeDashoffset: 780 }}
              animate={{ strokeDashoffset: -780 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Micro laser sparkle point moving smoothly */}
            <motion.circle
              r="2"
              fill="#F2EDE6"
              initial={{ cx: 160, cy: 330, opacity: 0.2 }}
              animate={{
                cx: [160, 230, 290, 258, 175, 160],
                cy: [330, 310, 340, 278, 380, 330],
                opacity: [0.2, 0.9, 0.4, 1, 0.3, 0.2],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
