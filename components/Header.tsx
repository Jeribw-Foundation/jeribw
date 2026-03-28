"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-jeribw-primary text-white sticky top-0 z-50 border-b-4 border-jeribw-gold">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo className="text-white dark:text-jeribw-gold" />
        </Link>

        {/* RIGHT SIDE (NAV + TOGGLE) */}
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

          {/* THEME TOGGLE (VISIBLE EVERYWHERE) */}
          <ThemeToggle />

        </div>

      </div>
    </header>
  );
}