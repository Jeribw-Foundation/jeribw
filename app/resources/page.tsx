export default function ResourcesPage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1>Family Resources</h1>

      <p>
        Practical support and guidance for households navigating uncertainty.
        These resources connect families to trusted global organizations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <div className="community-section">
          <h3>Emergency Basics</h3>
          <p>Food, shelter, and immediate family assistance.</p>
          <p>
            <a href="https://www.wfp.org">World Food Programme</a><br />
            <a href="https://www.icrc.org">International Red Cross</a>
          </p>
        </div>

        <div className="community-section">
          <h3>Financial Support</h3>
          <p>Relief programs and household stability assistance.</p>
          <p>
            <a href="https://www.unicef.org">UNICEF</a><br />
            <a href="https://www.unhcr.org">UNHCR</a>
          </p>
        </div>

        <div className="community-section">
          <h3>Mental & Emotional Health</h3>
          <p>Support for stress, anxiety, and emotional wellbeing.</p>
          <p>
            <a href="https://www.who.int">World Health Organization</a>
          </p>
        </div>

        <div className="community-section">
          <h3>Parenting Support</h3>
          <p>Child wellbeing, education, and family guidance.</p>
          <p>
            <a href="https://www.unicef.org">UNICEF Parenting</a>
          </p>
        </div>

        <div className="community-section">
          <h3>Regional Assistance</h3>
          <p>Verified services by country and region.</p>
          <p>Coming soon.</p>
        </div>
      </div>

      <p style={{ marginTop: "3rem" }}>
        <a href="/">← Return to Home</a>
      </p>
    </main>
  );
}
