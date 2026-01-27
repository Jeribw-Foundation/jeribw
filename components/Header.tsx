import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo/logo.svg"
          alt="JERIBW"
          width={120}
          height={40}
          priority
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
