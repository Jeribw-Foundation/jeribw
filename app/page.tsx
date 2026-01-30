import Link from "next/link";

export default function Header() {
  return (
    <>
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
            padding: "8px 1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo — untouched */}
          <Link href="/">
            <img
              src="/logo/logo.svg"
              alt="JERIBW"
              style={{
                height: "64px",
                width: "auto",
                display: "block",
              }}
            />
          </Link>

          {/* Navigation */}
          <nav
            className="main-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginLeft: "20px",
              fontSize: "0.95rem",
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

      {/* Hide links on mobile only */}
      <style>{`
        @media (max-width: 640px) {
          .main-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
