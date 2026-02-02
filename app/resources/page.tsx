export default function ResourcesPage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1>Family Resources</h1>

      <p>
        Practical support and guidance for households navigating uncertainty.
        These resources are designed to help families stabilize, regroup, and move forward.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {/* Card 1 */}
        <div className="community-section">
          <h3>Emergency Basics</h3>
          <p>
            Guidance on food, shelter, utilities, and short-term preparedness for families.
          </p>
        </div>

        {/* Card 2 */}
        <div className="community-section">
          <h3>Financial Support</h3>
          <p>
            Information on assistance programs, budgeting during hardship, and relief options.
          </p>
        </div>

        {/* Card 3 */}
        <div className="community-section">
          <h3>Mental & Emotional Health</h3>
          <p>
            Calm guidance for stress, anxiety, and emotional wellbeing for parents and children.
          </p>
        </div>

        {/* Card 4 */}
        <div className="community-section">
          <h3>Parenting Support</h3>
          <p>
            Practical tools for talking with children and maintaining routines during uncertainty.
          </p>
        </div>

        {/* Card 5 */}
        <div className="community-section">
          <h3>Regional Assistance</h3>
          <p>
            Localized help and verified services by country and region (coming soon).
          </p>
        </div>
      </div>

      <p style={{ marginTop: "3rem" }}>
        <a href="/">← Return to Home</a>
      </p>
    </main>
  );
}
