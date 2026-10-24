import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EngravingGlass — Şüşə üzərində fərdi lazer qravür | Bakı, Azərbaycan",
  description:
    "Viski dəstləri, şərab qədəhləri və korporativ hədiyyələr üçün fərdi lazer qravür xidməti. Ad, tarix və loqo ilə fərdiləşdirmə. Bakı və Azərbaycan üzrə çatdırılma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
