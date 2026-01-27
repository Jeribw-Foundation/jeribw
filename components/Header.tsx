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
        className="header-inner"
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div className="header-row">
          <Link href="/">
            <img
              src="/logo/logo.svg"
              alt="JERIBW"
              className="logo"
            />
          </Link>

          <nav className="nav">
            <Link href="/start">Start Here</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/briefs">Family Briefs</Link>
            <Link href="/help">Help</Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header-row {
          height: 72px;
          display: flex;
          align-items: center;
          gap: 38px;
        }

        .logo {
          height: 52px;
        }

        .nav {
          display: flex;
          gap: 0.8rem;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .header-row {
            flex-direction: column;
            height: auto;
            padding: 12px 0;
          }

          .nav {
            font-size: 0.7rem;
            gap: 0.6rem;
          }
        }
      `}</style>
    </header>
  );
}
