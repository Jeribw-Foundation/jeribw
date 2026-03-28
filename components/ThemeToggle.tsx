"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
  onClick={toggleTheme}
  className="border border-jeribw-gold px-4 py-2 rounded-lg text-sm font-medium tracking-wide hover:bg-jeribw-gold hover:text-black transition"
>
  {dark ? "Light Mode" : "Dark Mode"}
</button>
  );
}