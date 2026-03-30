"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-jeribw-primary text-white sticky top-0 z-50 border-b-4 border-jeribw-gold">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo isDark={isDark} />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white border border-jeribw-gold px-3 py-1 rounded"
          >
            ☰
          </button>

          {/* NAVIGATION (DESKTOP ONLY) */}
          <nav className="hidden md:flex items-center text-sm font-medium tracking-wide">

            <Link href="/start" className="px-4 hover:text-jeribw-gold transition">
              Start Here
            </Link>

            <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

            <Link href="/resources" className="px-4 hover:text-jeribw-gold transition">
              Resources
            </Link>

            <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

            <Link href="/pillars" className="px-4 hover:text-jeribw-gold transition">
              Family Systems
            </Link>

            <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

            <Link href="/briefs" className="px-4 hover:text-jeribw-gold transition">
              Community
            </Link>

          </nav>

          {/* THEME TOGGLE */}
          <ThemeToggle />

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-jeribw-primary text-white border-t border-jeribw-gold px-6 py-4 space-y-4">

          <Link
            href="/start"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-jeribw-gold transition"
          >
            Start Here
          </Link>

          <Link
            href="/resources"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-jeribw-gold transition"
          >
            Resources
          </Link>

          <Link
            href="/pillars"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-jeribw-gold transition"
          >
            Family Systems
          </Link>

          <Link
            href="/briefs"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-jeribw-gold transition"
          >
            Community
          </Link>

          {/* Toggle inside mobile menu */}
          <div className="pt-2 border-t border-jeribw-gold">
            <ThemeToggle />
          </div>

        </div>
      )}
    </header>
  );
}