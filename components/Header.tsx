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
          padding: "0 1.25rem", // aligns with footer
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          <Link href="/">
            <img
              src="/logo/logo.svg"
              alt="JERIBW"
              style={{
                height: "36px",
              }}
            />
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "14px",
              fontSize: "12px",
            }}
          >
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
