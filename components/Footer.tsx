export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        padding: "2rem",
        borderTop: "1px solid #ddd",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h3>JERIBW Family News</h3>

      <p>Calm, verified information for families worldwide.</p>

      <p>
        Contact:{" "}
        <a href="mailto:family@jeribw.org">family@jeribw.org</a>
      </p>

      <nav style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <a href="/" style={{ marginRight: "1rem" }}>
          Start Here
        </a>

        <a href="/resources" style={{ marginRight: "1rem" }}>
          Resources
        </a>

        <a href="/briefs" style={{ marginRight: "1rem" }}>
          Family Briefs
        </a>

        <a href="/help">Help</a>
      </nav>

      <p>Region (coming soon)</p>
      <p>Global</p>

      <small>
        © 2026 JERIBW Family News. All rights reserved.
      </small>
    </footer>
  );
}
