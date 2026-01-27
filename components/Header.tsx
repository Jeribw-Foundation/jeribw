import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/">
          <img src="/logo/logo.svg" alt="JERIBW" className="site-logo" />
        </Link>

        <nav className="site-nav">
          <Link href="/start">Start Here</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/briefs">Family Briefs</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </header>
  );
}
