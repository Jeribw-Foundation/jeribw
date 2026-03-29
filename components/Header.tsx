"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo isDark={isDark} />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

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

          {/* THEME TOGGLE (ALWAYS VISIBLE) */}
          <ThemeToggle />

        </div>
      </div>
    </header>
  );
}