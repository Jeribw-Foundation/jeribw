import Link from "next/link";

export default function BriefsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px" }}>
      <h1>Family Briefs</h1>

      <p>
        Calm, verified updates designed for families worldwide.
      </p>

      <ul style={{ marginTop: "2rem" }}>
        <li>
          <Link href="/briefs/welcome">
            Welcome Brief — Why This Platform Exists
          </Link>
        </li>
      </ul>
    </main>
  );
}
