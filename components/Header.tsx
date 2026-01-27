import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px",
      background: "white",
      boxShadow: "0 1px 2px rgba(0,0,0,.05)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}
  >
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/logo/logo.svg"
        alt="JERIBW"
        style={{ height: "36px", display: "block" }}
      />
    </Link>

    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "0.45rem",
        letterSpacing: "0.08em",
      }}
    >
      <Link href="/start">Start Here</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/briefs">Family Briefs</Link>
      <Link href="/help">Help</Link>
    </nav>
  </header>
);
