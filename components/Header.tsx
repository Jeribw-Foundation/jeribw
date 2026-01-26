import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <strong>JERIBW</strong>

      <nav style={{ marginTop: "0.5rem" }}>
        <Link href="/">Home</Link>{" | "}
        <Link href="/start">Start Here</Link>{" | "}
        <Link href="/briefs">Family Briefs</Link>{" | "}
        <Link href="/help">Help</Link>
      </nav>
    </header>
  );
}
