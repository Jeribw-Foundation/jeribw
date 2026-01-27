import Link from "next/link";

export default function Header() {
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
          height: "72px",
          display: "flex",
          alignItems: "center",
          gap: "38px",
        }}
      >
        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo/logo.svg"
            alt="JERIBW"
            style={{
              height: "52px",
              display: "block",
            }}
          />
        </Link>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "0.75rem",
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
