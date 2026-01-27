import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <img
  src="/logo/logo.svg?v=2"
  alt="JERIBW"
  className="h-10 w-auto"
/>
      </Link>

      <nav className="flex gap-6 text-sm">
        <Link href="/start">Start Here</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/briefs">Family Briefs</Link>
        <Link href="/help">Help</Link>
      </nav>
    </header>
  );
}
