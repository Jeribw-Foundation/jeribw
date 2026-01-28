"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        background: "white",
        boxShadow: "0 1px 2px rgba(0,0,0,.05)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <img
            src="/logo/logo.svg"
            alt="JERIBW"
            style={{ height: "48px" }}
          />
        </Link>

        <nav
          style={{
            marginLeft: "20px",
            display: "flex",
            gap: "1rem",
            fontSize: isMobile ? "0.8rem" : "0.95rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/start">Start Here</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/briefs">Family Briefs</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </header>
  );
}
