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
        }}
      >
        <div className="header-row">
          <Link href="/">
            <img src="/logo/logo.svg" alt="JERIBW" className="logo" />
          </Link>

          <nav className="nav">
            <Link href="/start">Start Here</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/briefs">Family Briefs</Link>
            <Link href="/help">Help</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
