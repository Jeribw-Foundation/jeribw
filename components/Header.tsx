import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        background: "white",
        boxShadow: "0 1px 2px rgba(0,0,0,.05)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* INNER ROW */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "38px", // ~1cm space between logo + links
        }}
      >
        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo/logo.svg"
            alt="JERIBW"
            style={{
              height: "36px",
              display: "block",
            }}
          />
        </Link>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.45rem",
            letterSpacing: "0.08em",
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
