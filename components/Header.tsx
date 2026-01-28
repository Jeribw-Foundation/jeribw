import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap">
          <img src="/logo/logo.svg" alt="JERIBW" className="logo" />
        </Link>

        <nav className="nav">
          <Link href="/start">Start Here</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/briefs">Family Briefs</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </header>
  );
}
