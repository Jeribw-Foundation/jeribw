export default function PillarsIndexPage() {
  return (
    <main
      style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      <h1>The JERIBW Family Pillars</h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
        These pillars exist to help families move from instability to independence —
        not to consume endlessly, but to build lasting foundations.
      </p>

      <section>
        <h2>Our Core Pillars</h2>

        <ul>
          <li>
            <a href="/pillars/family-systems">
              The 7 Family Systems — How stable families are built
            </a>
          </li>

          <li>
            <a href="/pillars/family-leadership">
              Leading Your Family — Calm direction in uncertain times
            </a>
          </li>

          <li>
            <a href="/pillars/the-4ws">
              The 4Ws Framework — Designing family life intentionally
            </a>
          </li>

          <li>
            <a href="/pillars/community">
              Community Building — Support without dependence
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "3rem", opacity: 0.75 }}>
        <p>
          Strong families reduce pressure on systems.  
          Stable homes create space for others to heal.
        </p>
      </section>
    </main>
  );
}
