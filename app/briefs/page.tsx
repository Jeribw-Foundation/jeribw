import Link from "next/link";

export default function BriefsPage() {
  return (
    <main style={{ padding: "3rem 0" }}>
      <div className="container">
        <h1>Family Briefs</h1>

        <p>
          Calm, practical updates designed to help families understand what’s
          happening — and what to do next.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Latest Brief</h2>

        <div
          style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "6px",
            maxWidth: "600px",
          }}
        >
          <h3>Family Brief #001</h3>

          <p>
            Global uncertainty and what families can do right now.
          </p>

          <Link href="/briefs/first-family-brief">
            Read Brief →
          </Link>
        </div>
      </div>
    </main>
  );
}
