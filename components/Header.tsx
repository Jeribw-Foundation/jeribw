"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-jeribw-primary text-white sticky top-0 z-50 border-b-4 border-jeribw-gold">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo className="h-16 w-auto text-white dark:text-jeribw-gold object-contain" />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center text-sm font-medium tracking-wide">

          <Link href="/start" className="px-4 hover:opacity-80 transition">
            Start Here
          </Link>

          <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

          <Link href="/resources" className="px-4 hover:opacity-80 transition">
            Resources
          </Link>

          <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

          <Link href="/pillars" className="px-4 hover:opacity-80 transition">
            Family Systems
          </Link>

          <span className="h-5 w-px bg-jeribw-gold opacity-80"></span>

          <Link href="/briefs" className="px-4 hover:opacity-80 transition">
            Community
          </Link>

        </nav>

      </div>
    </header>
  );
}